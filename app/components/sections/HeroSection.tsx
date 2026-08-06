'use client'

import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const nameClasses = 'text-[29vw] leading-[0.9] tracking-tight text-foreground whitespace-nowrap'

// ponytail: fixed vertical stretch tuned for ~16:9 screens; swap to an SVG with preserveAspectRatio="none" if odd aspect ratios matter
// ponytail: text-box trims the glyph box to cap height so flex centering is exact; Chrome/Safari only, Firefox falls back to slightly-high text
const nameStyle = {
  fontFamily: 'var(--font-bebas-neue), system-ui, sans-serif',
  transform: 'scaleY(1.5)',
  WebkitTextStroke: '0.015em currentColor',
  textBox: 'trim-both cap alphabetic',
} as React.CSSProperties

const HeroSection = () => {
  // The hero is pinned by StackedSection (position: sticky), so its own
  // rect never moves and useScroll({ target }) would sit at 0. Progress is
  // the first viewport-height of raw page scroll instead.
  const { scrollY } = useScroll()
  const exitShift = (v: number, factor: number) => {
    if (typeof window === 'undefined') return 0
    const vh = window.innerHeight
    const progress = Math.min(Math.max(v / vh, 0), 1)
    return progress * vh * factor
  }
  // Text exits faster than the page, the photo lags behind it — the speed
  // offset between the two layers gives the parallax feel while scrolling.
  const textY = useTransform(scrollY, (v) => exitShift(v, -0.14))
  const imgY = useTransform(scrollY, (v) => exitShift(v, 0.1))

  return (
    <section className="page-hero bg-background relative overflow-hidden">
      {/* Layer order: name behind, photo on top, then the name's lower half
          clipped back in front so the type wraps around the photo. */}
      <motion.div className="absolute inset-0 flex items-center justify-center text-center" style={{ y: textY }}>
        <motion.h1
          className={nameClasses}
          style={nameStyle}
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          ZECHARIAH
        </motion.h1>
      </motion.div>

      <motion.div className="absolute inset-0 flex items-center justify-center" style={{ y: imgY }}>
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/misc/pfp_yes.jpg"
            alt="Zechariah Wang"
            className="h-[72vh] max-w-[80vw] w-auto object-cover grayscale hover:grayscale-0 transition-[filter] duration-500"
            style={{
              maskImage: 'linear-gradient(to bottom, transparent, black 18%, black 72%, transparent)',
              WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 18%, black 72%, transparent)',
            }}
          />
        </motion.div>
      </motion.div>

      <motion.div
        aria-hidden
        className="absolute inset-0 flex items-center justify-center text-center pointer-events-none"
        style={{
          maskImage: 'linear-gradient(to bottom, transparent 42%, black 58%)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent 42%, black 58%)',
          y: textY,
        }}
      >
        <motion.div
          className={nameClasses}
          style={nameStyle}
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          ZECHARIAH
        </motion.div>
      </motion.div>
    </section>
  )
}

export default HeroSection
