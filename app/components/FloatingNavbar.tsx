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

  useEffect(() => {
    const timer = setTimeout(() => setHasAnimated(true), 100)
    
    const handleScroll = () => {
      // Update active section
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
      initial={{ y: -100, opacity: 0 }}
      animate={hasAnimated ? { y: 0, opacity: 1 } : { y: -100, opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 md:left-10 z-50 px-4 md:px-8 py-4 md:py-6 flex justify-center md:justify-between items-center"
    >
      <div className="flex items-center gap-4 md:gap-8">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleNavClick(item.href)}
            className={`relative text-xs md:text-sm font-medium transition-colors duration-200 ${
              activeSection === item.id
                ? 'text-foreground'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            {activeSection === item.id && (
              <motion.div
                layoutId="activeIndicator"
                className="absolute -bottom-1 left-0 right-0 h-px bg-foreground"
                initial={false}
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            <span className="relative whitespace-nowrap">{item.label}</span>
          </button>
        ))}
      </div>

      <button
        onClick={toggleTheme}
        className="absolute right-4 md:relative md:right-auto flex items-center justify-center w-8 h-8 md:w-9 md:h-9 rounded-full border border-border-subtle bg-surface hover:bg-surface-elevated transition-colors duration-200 md:mr-10"
        aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      >
        {theme === 'dark' ? (
          <svg
            className="w-4 h-4 text-foreground"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        ) : (
          <svg
            className="w-4 h-4 text-foreground"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
        )}
      </button>
    </motion.nav>
  )
}

export default FloatingNavbar