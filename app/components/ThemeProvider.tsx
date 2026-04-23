'use client'

import React, { createContext, useContext, useEffect } from 'react'

interface ThemeContextType {}

const ThemeContext = createContext<ThemeContextType>({})

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    document.documentElement.classList.add('dark')
    localStorage.removeItem('theme')
  }, [])

  return (
    <ThemeContext.Provider value={{}}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext)
}
