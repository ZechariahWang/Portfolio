'use client'

import { useEffect } from 'react'

// On mobile the page itself must not be scrollable — sections are reached
// through the navbar only. Containers that should still scroll internally
// (project detail overlay, projects viewer/overview) opt out by setting
// data-allow-scroll on themselves or an ancestor. Backed up by a
// touch-action: none rule on html/body in globals.css.
export default function MobileScrollLock() {
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)')

    const allowed = (target: EventTarget | null) => {
      const el =
        target instanceof Element
          ? target
          : target instanceof Node
            ? target.parentElement
            : null
      return !!el?.closest('[data-allow-scroll]')
    }

    const onTouchMove = (e: TouchEvent) => {
      if (!mq.matches || allowed(e.target)) return
      if (e.cancelable) e.preventDefault()
    }

    const onWheel = (e: WheelEvent) => {
      if (!mq.matches || allowed(e.target)) return
      e.preventDefault()
    }

    document.addEventListener('touchmove', onTouchMove, { passive: false })
    document.addEventListener('wheel', onWheel, { passive: false })
    return () => {
      document.removeEventListener('touchmove', onTouchMove)
      document.removeEventListener('wheel', onWheel)
    }
  }, [])

  return null
}
