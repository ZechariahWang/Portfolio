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
      className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-auto"
    >
      <div className="bg-background/80 backdrop-blur-md border border-border/50 rounded-full px-3 py-2 md:px-6 md:py-3 shadow-lg">
        <div className="flex items-center space-x-2 md:space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.href)}
              className={`relative px-2 py-1 md:px-3 md:py-2 text-xs md:text-sm font-medium transition-colors duration-200 ${
                activeSection === item.id
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {activeSection === item.id && (
                <motion.div
                  layoutId="activeSection"
                  className="absolute inset-0 bg-primary/10 rounded-full"
                  initial={false}
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10 whitespace-nowrap">{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </motion.nav>
  )
}

export default FloatingNavbar