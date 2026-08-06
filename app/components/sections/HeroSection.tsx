'use client'

import React from 'react'
import { motion } from 'framer-motion'

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
  return (
    <section className="page-hero bg-background relative overflow-hidden">
      {/* Layer order: name behind, photo on top, then the name's lower half
          clipped back in front so the type wraps around the photo. */}
      <div className="absolute inset-0 flex items-center justify-center text-center">
        <motion.h1
          className={nameClasses}
          style={nameStyle}
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          ZECHARIAH
        </motion.h1>
      </div>

      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
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

      <div
        aria-hidden
        className="absolute inset-0 flex items-center justify-center text-center pointer-events-none"
        style={{ clipPath: 'inset(50% 0 0 0)' }}
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
      </div>
    </section>
  )
}

export default HeroSection
