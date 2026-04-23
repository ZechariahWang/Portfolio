'use client'

import React, { useState } from 'react'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { projects } from '../data/projects'
import { useNavigation } from './NavigationContext'

const navItems = [
  { href: '/', label: 'home' },
  { href: '/about', label: 'about' },
  { href: '/experience', label: 'experience' },
  { href: '/projects', label: 'projects' },
]

const Navbar = () => {
  const { navigate } = useNavigation()
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  const isProjectDetail = pathname.startsWith('/projects/') && pathname !== '/projects'
  if (isProjectDetail) return null

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
          {/* Desktop */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => navigate(item.href, pathname)}
                onMouseEnter={item.label === 'projects' ? () => {
                  projects.forEach(p => { const img = new Image(); img.src = p.image })
                } : undefined}
                className="px-4 py-1.5 rounded-full text-[13px] tracking-wide transition-all duration-200 cursor-pointer hover:text-foreground"
                style={{
                  color: pathname === item.href ? 'var(--foreground)' : 'var(--muted-foreground)',
                  background: pathname === item.href ? 'rgb(from var(--foreground) r g b / 0.08)' : 'transparent',
                  fontWeight: pathname === item.href ? 500 : 400,
                }}
              >
                {item.label}
              </button>
            ))}

          </div>

          {/* Mobile */}
          <div className="flex md:hidden items-center gap-1 px-1">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="w-8 h-8 flex items-center justify-center rounded-full text-foreground"
              aria-label="Toggle menu"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="fixed inset-0 z-40 md:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -6, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -6, scale: 0.97 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-16 left-1/2 -translate-x-1/2 z-50 md:hidden rounded-2xl border border-border overflow-hidden"
              style={{
                background: 'color-mix(in srgb, var(--background) 90%, transparent)',
                backdropFilter: 'blur(20px)',
                boxShadow: '0 16px 48px rgba(0,0,0,0.3)',
                width: 'max-content',
                minWidth: '160px',
              }}
            >
              <div className="flex flex-col py-2 px-2">
                {navItems.map((item) => (
                  <button
                    key={item.href}
                    onClick={() => { navigate(item.href, pathname); setMobileOpen(false) }}
                    className="px-4 py-2.5 rounded-xl text-[14px] text-left tracking-wide transition-colors"
                    style={{
                      color: pathname === item.href ? 'var(--foreground)' : 'var(--muted-foreground)',
                      fontWeight: pathname === item.href ? 500 : 400,
                    }}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
