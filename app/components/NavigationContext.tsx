'use client'

import { createContext, useContext, useState, useCallback } from 'react'
import { useRouter } from 'next/navigation'

const navOrder = ['/', '/about', '/experience', '/projects']

type NavigationContextType = {
  direction: number
  navigate: (href: string, currentPath: string) => void
}

const NavigationContext = createContext<NavigationContextType>({
  direction: 1,
  navigate: () => {},
})

export function NavigationProvider({ children }: { children: React.ReactNode }) {
  const [direction, setDirection] = useState(1)
  const router = useRouter()

  const navigate = useCallback((href: string, currentPath: string) => {
    const fromIndex = navOrder.indexOf(currentPath)
    const toIndex = navOrder.indexOf(href)
    setDirection(toIndex > fromIndex ? 1 : -1)
    router.push(href)
  }, [router])

  return (
    <NavigationContext.Provider value={{ direction, navigate }}>
      {children}
    </NavigationContext.Provider>
  )
}

export const useNavigation = () => useContext(NavigationContext)