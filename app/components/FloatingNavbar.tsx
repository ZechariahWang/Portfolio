'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from './ThemeProvider'

const FloatingNavbar = () => {
  const [activeSection, setActiveSection] = useState('home')
  const [hasAnimated, setHasAnimated] = useState(false)
  const { theme, toggleTheme } = useTheme()

  const navItems = [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'about', label: 'About', href: '#about' },
    { id: 'experience', label: 'Experience', href: '#experience' },
    { id: 'projects', label: 'Projects', href: '#projects' }
  ]

  const wsEasing = [0.22, 1, 0.36, 1]

  useEffect(() => {
    const timer = setTimeout(() => setHasAnimated(true), 100)

    const handleScroll = () => {
      const sections = navItems.map(item => item.id)
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })

      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearTimeout(timer)
    }
  }, [])

  const handleNavClick = (href: string) => {
    const targetId = href.replace('#', '')
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0, x: '-50%' }}
      animate={hasAnimated ? { y: 0, opacity: 1, x: '-50%' } : { y: -100, opacity: 0, x: '-50%' }}
      transition={{ duration: 0.5, ease: wsEasing }}
      className="floating-nav"
    >
      <div className="h-[52px] flex items-center gap-2 px-3">
        {/* Navigation Links */}
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleNavClick(item.href)}
            className={`px-4 py-2 text-[14px] font-medium rounded-xl transition-colors duration-300 ease-out ${
              activeSection === item.id
                ? 'text-foreground'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            {item.label}
          </button>
        ))}

        {/* Divider */}
        <div className="w-px h-6 bg-border-subtle mx-1" />

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="flex items-center justify-center w-9 h-9 rounded-xl hover:bg-secondary transition-colors duration-200"
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        >
          {theme === 'dark' ? (
            <svg
              className="w-[18px] h-[18px] text-foreground"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          ) : (
            <svg
              className="w-[18px] h-[18px] text-foreground"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          )}
        </button>
      </div>
    </motion.nav>
  )
}

export default FloatingNavbar
