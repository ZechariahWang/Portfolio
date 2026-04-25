'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const skills = [
  { label: 'Robotics',     tech: 'ROS2, Linux, Docker, PROS',             image: '/cachedImage.png' },
  { label: 'Fullstack',    tech: 'React, AWS, PostgreSQL, .NET',          image: '/second.JPG' },
  { label: 'AI & ML',      tech: 'PyTorch, OpenCV, LangChain, LLM',       image: '/eclipse.jpg' },
  { label: 'Embedded',     tech: 'Microcontrollers, SoC, FPGA, PLC',      image: '/embedded_.jpg' },
]

export default function AboutPage() {
  const [activeSkill, setActiveSkill] = useState<number | null>(0)
  const activeImage = activeSkill !== null ? skills[activeSkill].image : null

  return (
    <main
      className="bg-background pt-14"
      style={{ height: '100dvh', overflow: 'hidden', position: 'relative' }}
    >
      {/* Mobile static background */}
      <div
        className="md:hidden"
        style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0 }}
      >
        <Image
          src="/atv.png"
          alt=""
          fill
          sizes="100vw"
          priority
          style={{ objectFit: 'cover', filter: 'brightness(0.28) saturate(0.55)' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, var(--background) 0%, transparent 25%, transparent 65%, var(--background) 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, var(--background) 0%, transparent 30%, transparent 70%, var(--background) 100%)' }} />
      </div>

      {/* Right: photo bled into background — desktop only */}
      <div
        className="hidden md:block"
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '58%',
          bottom: 0,
          pointerEvents: 'none',
          zIndex: 0,
        }}
      >
        <AnimatePresence mode="wait">
          {activeImage && (
            <motion.div
              key={activeImage}
              initial={{ opacity: 0, scale: 1.06 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3, ease: [0.65, 0, 0.35, 1] }}
              style={{ position: 'absolute', inset: 0 }}
            >
              <Image
                src={activeImage}
                alt=""
                fill
                sizes="58vw"
                priority
                style={{ objectFit: 'cover', filter: 'brightness(0.38) saturate(0.65)' }}
              />
              {/* Fade left into background */}
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to left, transparent 30%, var(--background) 100%)',
              }} />
              {/* Fade top */}
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to bottom, var(--background) 0%, transparent 18%)',
              }} />
              {/* Fade bottom */}
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to top, var(--background) 0%, transparent 25%)',
              }} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Left: content */}
      <div className="relative z-[1] h-full flex items-center justify-center md:justify-start px-6 md:pl-20 md:pr-0">
        <div style={{ maxWidth: '500px', width: '100%' }}>
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.65, 0, 0.35, 1] }}
            className="text-[clamp(36px,6vw,64px)] font-semibold leading-[1.05] tracking-tight text-foreground mb-8"
            style={{ fontFamily: 'var(--font-geist-sans), system-ui, sans-serif' }}
          >
            ABOUT
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.65, 0, 0.35, 1] }}
            className="text-[15px] text-muted-foreground leading-[1.7] mb-4"
          >
            software engineer from calgary, canada, specializing in automation systems,
            ai, computer vision, and robotics engineering.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.65, 0, 0.35, 1] }}
            className="text-[15px] text-muted-foreground leading-[1.7] mb-12"
          >
            2nd year mechatronics engineering student at the university of waterloo.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2, ease: [0.65, 0, 0.35, 1] }}
            className="text-[11px] font-medium text-muted-foreground uppercase tracking-[0.2em] mb-2"
          >
            Skills & Technologies
          </motion.p>

          <div>
            {skills.map((skill, i) => {
              const isActive = activeSkill === i
              return (
                <motion.button
                  key={skill.label}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  whileHover={{ x: 6 }}
                  transition={{
                    opacity: { duration: 0.4, delay: 0.25 + i * 0.06, ease: [0.65, 0, 0.35, 1] },
                    x: { duration: 0.12, ease: 'easeOut' },
                  }}
                  onClick={() => setActiveSkill(isActive ? null : i)}
                  style={{
                    width: '100%',
                    background: 'none',
                    border: 'none',
                    borderBottom: '1px solid var(--border)',
                    padding: '1.1rem 0',
                    cursor: 'pointer',
                    textAlign: 'left',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'baseline',
                    gap: '1.5rem',
                  }}
                >
                  <span style={{
                    fontSize: '15px',
                    fontWeight: 500,
                    color: isActive ? 'var(--foreground)' : 'var(--muted-foreground)',
                    transition: 'color 0.25s ease',
                    fontFamily: 'var(--font-geist-sans), system-ui, sans-serif',
                    flexShrink: 0,
                  }}>
                    {skill.label}
                  </span>
                  <span style={{
                    fontSize: '13px',
                    color: isActive
                      ? 'var(--muted-foreground)'
                      : 'color-mix(in srgb, var(--muted-foreground) 45%, transparent)',
                    transition: 'color 0.25s ease',
                    textAlign: 'right',
                  }}>
                    {skill.tech}
                  </span>
                </motion.button>
              )
            })}
          </div>
        </div>
      </div>
    </main>
  )
}
