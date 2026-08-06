'use client'

import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })
  // Background lags the page scroll for a parallax offset against the text.
  const bgY = useTransform(scrollYProgress, [0, 1], ['0vh', '10vh'])

  return (
    <section ref={sectionRef} className="page-hero bg-background relative overflow-hidden">
      {/* Oversized and shifted up so the parallax travel never exposes a gap. */}
      <motion.img
        src="/backgrounds/hero_imng.jpg"
        alt=""
        className="absolute inset-x-0 top-[-10%] h-[120%] w-full object-cover"
        style={{ y: bgY }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      />
      <div className="absolute inset-0 bg-background/50" />

      <div className="absolute inset-0 flex items-center justify-center text-center">
        <motion.h1
          className="text-[29vw] leading-[0.9] tracking-tight text-foreground whitespace-nowrap"
          // ponytail: fixed vertical stretch tuned for ~16:9 screens; swap to an SVG with preserveAspectRatio="none" if odd aspect ratios matter
          // ponytail: text-box trims the glyph box to cap height so flex centering is exact; Chrome/Safari only, Firefox falls back to slightly-high text
          style={{
            fontFamily: 'var(--font-bebas-neue), system-ui, sans-serif',
            transform: 'scaleY(1.5)',
            WebkitTextStroke: '0.015em currentColor',
            textBox: 'trim-both cap alphabetic',
          } as React.CSSProperties}
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          ZECHARIAH
        </motion.h1>
      </div>
    </section>
  )
}

export default HeroSection
