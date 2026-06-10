'use client'

import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { projects } from '../data/projects'

const navItems = [
  { id: 'home', label: 'home' },
  { id: 'about', label: 'about' },
  { id: 'experience', label: 'experience' },
  { id: 'projects', label: 'projects' },
]

const wormhole = [0.65, 0, 0.35, 1] as const

// Toggle icon dot positions: a 2-row × 3-column dot grid that morphs into a
// 4-dot diamond (the two bottom corner dots merge into the sides and fade out).
const dotPositions = {
  grid: [
    { x: -5, y: -2.5, opacity: 1 }, { x: 0, y: -2.5, opacity: 1 }, { x: 5, y: -2.5, opacity: 1 },
    { x: -5, y: 2.5, opacity: 1 },  { x: 0, y: 2.5, opacity: 1 },  { x: 5, y: 2.5, opacity: 1 },
  ],
  diamond: [
    { x: -5, y: 0, opacity: 1 }, { x: 0, y: -5, opacity: 1 }, { x: 5, y: 0, opacity: 1 },
    { x: -5, y: 0, opacity: 0 }, { x: 0, y: 5, opacity: 1 },  { x: 5, y: 0, opacity: 0 },
  ],
}

const SunIcon = () => (
  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" />
    <line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" />
    <line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
)

const MoonIcon = () => (
  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
)

// Document offset of a section's anchor. Anchors are static zero-height divs,
// so their rects are reliable even while sections are pinned (sticky).
const anchorTop = (id: string) => {
  const el = document.getElementById(id)
  return el ? el.getBoundingClientRect().top + window.scrollY : 0
}

const Navbar = () => {
  const [active, setActive] = useState('home')
  const [expanded, setExpanded] = useState(false)
  // True only once the nav items' collapse animation has fully finished —
  // the time/icon (hidden on mobile while the menu is out) wait on this.
  const [menuExited, setMenuExited] = useState(true)
  const [dotsHovered, setDotsHovered] = useState(false)
  const [time, setTime] = useState('--:--:--')
  const [isDay, setIsDay] = useState<boolean | null>(null)

  // Live Calgary time (rendered as a placeholder on the server to avoid
  // hydration mismatch).
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat('en-GB', {
      timeZone: 'America/Edmonton',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    })
    const tick = () => {
      const formatted = fmt.format(new Date())
      setTime(formatted)
      const hour = parseInt(formatted.slice(0, 2), 10)
      setIsDay(hour >= 6 && hour < 18)
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  // Scroll spy — the section owning the viewport midline is active.
  // Sticky-pinned sections never leave the viewport, so an IntersectionObserver
  // can't track them; compute from scroll position instead.
  useEffect(() => {
    const onScroll = () => {
      const midline = window.scrollY + window.innerHeight / 2
      let current = navItems[0].id
      for (const { id } of navItems) {
        if (anchorTop(id) <= midline) current = id
      }
      setActive(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  const toggleExpanded = () => {
    setExpanded(v => {
      if (!v) setMenuExited(false)
      return !v
    })
  }

  const scrollTo = (id: string) => {
    window.scrollTo({ top: anchorTop(id), behavior: 'smooth' })
    setExpanded(false)
  }

  const morphed = dotsHovered || expanded

  return (
    <>
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 max-w-[calc(100vw-1rem)]" style={{ width: 'max-content' }}>
        <div
          className="flex items-center px-2 py-1.5 rounded-full border border-border backdrop-blur-xl"
          style={{
            background: 'color-mix(in srgb, var(--background) 80%, transparent)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.25), 0 1px 0 rgba(255,255,255,0.04) inset',
          }}
        >
          {/* Location + local time — time/icon yield to the nav items on mobile */}
          <div className="flex items-center gap-1.5 md:gap-2 pl-2 pr-1 py-1.5 text-[11px] md:text-[13px] tracking-wide whitespace-nowrap">
            <span className="text-foreground font-medium">canada</span>
            <div className={`${expanded || !menuExited ? 'hidden md:flex' : 'flex'} items-center gap-1.5 md:gap-2`}>
              <span className="text-muted-foreground" style={{ fontVariantNumeric: 'tabular-nums' }}>
                {time}
              </span>
              {isDay !== null && (
                <span className="text-muted-foreground">
                  {isDay ? <SunIcon /> : <MoonIcon />}
                </span>
              )}
            </div>
          </div>

          {/* Nav items — revealed when the menu is expanded */}
          <AnimatePresence initial={false} onExitComplete={() => setMenuExited(true)}>
            {expanded && (
              <motion.div
                key="items"
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: 'auto', opacity: 1 }}
                exit={{ width: 0, opacity: 0 }}
                transition={{ duration: 0.35, ease: wormhole }}
                className="flex items-center overflow-hidden"
              >
                <div className="w-px h-4 mx-0.5 md:mx-1 shrink-0" style={{ background: 'var(--border)' }} />
                <div className="flex items-center gap-0 md:gap-1">
                  {navItems.map((item) => (
                    <motion.button
                      key={item.id}
                      initial="rest"
                      whileHover="hover"
                      animate="rest"
                      onClick={() => scrollTo(item.id)}
                      onMouseEnter={item.label === 'projects' ? () => {
                        projects.forEach(p => { const img = new Image(); img.src = p.image })
                      } : undefined}
                      className="px-2 md:px-4 py-1.5 rounded-full text-[11px] md:text-[13px] tracking-wide transition-colors duration-200 cursor-pointer hover:text-foreground whitespace-nowrap"
                      style={{
                        color: active === item.id ? 'var(--foreground)' : 'var(--muted-foreground)',
                        fontWeight: active === item.id ? 500 : 400,
                      }}
                    >
                      {/* Label flips out upward while a duplicate flips in from below */}
                      <span className="block relative" style={{ perspective: '400px' }}>
                        <motion.span
                          className="block"
                          variants={{
                            rest:  { rotateX: 0, y: 0, opacity: 1 },
                            hover: { rotateX: 90, y: '-50%', opacity: 0 },
                          }}
                          transition={{ duration: 0.28, ease: wormhole }}
                          style={{ transformOrigin: '50% 100%' }}
                        >
                          {item.label}
                        </motion.span>
                        <motion.span
                          aria-hidden
                          className="block absolute inset-0"
                          variants={{
                            rest:  { rotateX: -90, y: '50%', opacity: 0 },
                            hover: { rotateX: 0, y: 0, opacity: 1 },
                          }}
                          transition={{ duration: 0.28, ease: wormhole }}
                          style={{ transformOrigin: '50% 0%' }}
                        >
                          {item.label}
                        </motion.span>
                      </span>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Three-dot toggle — morphs into a diamond on hover / while expanded */}
          <button
            onClick={toggleExpanded}
            onMouseEnter={() => setDotsHovered(true)}
            onMouseLeave={() => setDotsHovered(false)}
            aria-label={expanded ? 'Close menu' : 'Open menu'}
            aria-expanded={expanded}
            className="ml-0.5 md:ml-1 p-1.5 md:p-2 rounded-full text-muted-foreground hover:text-foreground transition-colors duration-200 cursor-pointer"
          >
            <span className="block relative w-[13px] h-[13px]">
              {dotPositions.grid.map((_, i) => (
                <motion.span
                  key={i}
                  className="absolute rounded-full"
                  animate={morphed ? dotPositions.diamond[i] : dotPositions.grid[i]}
                  transition={{ duration: 0.3, ease: wormhole }}
                  style={{
                    width: '3px',
                    height: '3px',
                    left: '50%',
                    top: '50%',
                    marginLeft: '-1.5px',
                    marginTop: '-1.5px',
                    background: 'currentColor',
                  }}
                />
              ))}
            </span>
          </button>
        </div>
      </nav>
    </>
  )
}

export default Navbar
