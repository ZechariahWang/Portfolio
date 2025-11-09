'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const FloatingNavbar = () => {
  const [activeSection, setActiveSection] = useState('home')
  const [hasAnimated, setHasAnimated] = useState(false)

  const navItems = [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'about', label: 'About', href: '#about' },
    { id: 'experience', label: 'Experience', href: '#experience' },
    { id: 'projects', label: 'Projects', href: '#projects' }
  ]

  useEffect(() => {
    // Initial animation delay
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
      className="fixed top-0 left-20 z-50 px-4 md:px-8 py-4 md:py-6"
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
    </motion.nav>
  )
}

export default FloatingNavbar