'use client'

import React, { useEffect, useState } from 'react'
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
  }

  return (
    <>
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50" style={{ width: 'max-content' }}>
        <div
          className="flex items-center gap-1 px-2 py-1.5 rounded-full border border-border backdrop-blur-xl"
          style={{
            background: 'color-mix(in srgb, var(--background) 80%, transparent)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.25), 0 1px 0 rgba(255,255,255,0.04) inset',
          }}
        >
          {/* Nav items — always visible */}
          <div className="flex items-center gap-0.5 md:gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                onMouseEnter={item.label === 'projects' ? () => {
                  projects.forEach(p => { const img = new Image(); img.src = p.image })
                } : undefined}
                className="px-3 md:px-4 py-1.5 rounded-full text-[12px] md:text-[13px] tracking-wide transition-all duration-200 cursor-pointer hover:text-foreground"
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
        </div>
      </nav>
    </>
  )
}

export default Navbar
