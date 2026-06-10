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

// Document offset of a section's anchor. Anchors are static zero-height divs,
// so their rects are reliable even while sections are pinned (sticky).
const anchorTop = (id: string) => {
  const el = document.getElementById(id)
  return el ? el.getBoundingClientRect().top + window.scrollY : 0
}

const Navbar = () => {
  const [active, setActive] = useState('home')
  const [expanded, setExpanded] = useState(false)
  const [time, setTime] = useState('--:--')

  // Live Calgary time (rendered as a placeholder on the server to avoid
  // hydration mismatch).
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat('en-US', {
      timeZone: 'America/Edmonton',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    })
    const tick = () => setTime(fmt.format(new Date()).toLowerCase())
    tick()
    const id = setInterval(tick, 10_000)
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

  const scrollTo = (id: string) => {
    window.scrollTo({ top: anchorTop(id), behavior: 'smooth' })
    setExpanded(false)
  }

  return (
    <>
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50" style={{ width: 'max-content' }}>
        <div
          className="flex items-center px-2 py-1.5 rounded-full border border-border backdrop-blur-xl"
          style={{
            background: 'color-mix(in srgb, var(--background) 80%, transparent)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.25), 0 1px 0 rgba(255,255,255,0.04) inset',
          }}
        >
          {/* Location + local time — always visible */}
          <div className="flex items-baseline gap-2 pl-2 pr-1 py-1.5 text-[12px] md:text-[13px] tracking-wide whitespace-nowrap">
            <span className="text-foreground font-medium">calgary, ab</span>
            <span className="text-muted-foreground" style={{ fontVariantNumeric: 'tabular-nums' }}>
              {time}
            </span>
          </div>

          {/* Nav items — revealed when the menu is expanded */}
          <AnimatePresence initial={false}>
            {expanded && (
              <motion.div
                key="items"
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: 'auto', opacity: 1 }}
                exit={{ width: 0, opacity: 0 }}
                transition={{ duration: 0.35, ease: [0.65, 0, 0.35, 1] }}
                className="flex items-center overflow-hidden"
              >
                <div className="w-px h-4 mx-1 shrink-0" style={{ background: 'var(--border)' }} />
                <div className="flex items-center gap-0.5 md:gap-1">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollTo(item.id)}
                      onMouseEnter={item.label === 'projects' ? () => {
                        projects.forEach(p => { const img = new Image(); img.src = p.image })
                      } : undefined}
                      className="px-3 md:px-4 py-1.5 rounded-full text-[12px] md:text-[13px] tracking-wide transition-all duration-200 cursor-pointer hover:text-foreground whitespace-nowrap"
                      style={{
                        color: active === item.id ? 'var(--foreground)' : 'var(--muted-foreground)',
                        background: active === item.id ? 'rgb(from var(--foreground) r g b / 0.08)' : 'transparent',
                        fontWeight: active === item.id ? 500 : 400,
                      }}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Dot-grid toggle */}
          <button
            onClick={() => setExpanded(v => !v)}
            aria-label={expanded ? 'Close menu' : 'Open menu'}
            aria-expanded={expanded}
            className="ml-1 p-2 rounded-full text-muted-foreground hover:text-foreground transition-colors duration-200 cursor-pointer"
          >
            <motion.div
              animate={{ rotate: expanded ? 45 : 0 }}
              transition={{ duration: 0.35, ease: [0.65, 0, 0.35, 1] }}
              className="grid grid-cols-2 gap-[3px]"
            >
              {[0, 1, 2, 3].map(i => (
                <span key={i} className="w-[3px] h-[3px] rounded-full" style={{ background: 'currentColor' }} />
              ))}
            </motion.div>
          </button>
        </div>
      </nav>
    </>
  )
}

export default Navbar
