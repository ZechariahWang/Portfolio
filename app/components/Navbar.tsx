'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
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
          {/* Nav items — always visible */}
          <div className="flex items-center gap-0.5 md:gap-1">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => navigate(item.href, pathname)}
                onMouseEnter={item.label === 'projects' ? () => {
                  projects.forEach(p => { const img = new Image(); img.src = p.image })
                } : undefined}
                className="px-3 md:px-4 py-1.5 rounded-full text-[12px] md:text-[13px] tracking-wide transition-all duration-200 cursor-pointer hover:text-foreground"
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
        </div>
      </nav>
    </>
  )
}

export default Navbar
