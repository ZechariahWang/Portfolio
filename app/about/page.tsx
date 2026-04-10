'use client'

import React from 'react'
import { motion } from 'framer-motion'

const skills = [
  { label: 'Robotics', tech: 'ROS2, Linux, Gazebo, PROS' },
  { label: 'Fullstack', tech: 'React, Next.js, AWS, PostgreSQL' },
  { label: 'AI & ML', tech: 'PyTorch, OpenCV, LangChain, LLM' },
  { label: 'Medical Tech', tech: '.NET, WPF, Moq, NUnit, Docker' },
]

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.08,
    },
  },
}

const fadeUp = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
}

export default function AboutPage() {
  return (
    <main className="page-hero bg-background pt-14">
      <div className="page-container flex-1 flex items-center">
        <motion.div
          initial="initial"
          animate="animate"
          variants={stagger}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 w-full"
        >
          {/* Left — Bio */}
          <motion.div variants={fadeUp} transition={{ duration: 0.5, ease: [0.65, 0, 0.35, 1] }}>
            <h1
              className="text-[clamp(36px,6vw,64px)] font-light leading-[1.05] tracking-tight text-foreground mb-8"
              style={{ fontFamily: "var(--font-lora), Georgia, serif" }}
            >
              about
            </h1>
            <p className="text-[15px] text-muted-foreground leading-[1.7] mb-4">
              software engineer from calgary, canada, specializing in automation systems,
              ai, computer vision, and robotics engineering.
            </p>
            <p className="text-[15px] text-muted-foreground leading-[1.7]">
              2nd year mechatronics engineering student at the university of waterloo.
            </p>
          </motion.div>

          {/* Right — Skills */}
          <motion.div variants={fadeUp} transition={{ duration: 0.5, delay: 0.1, ease: [0.65, 0, 0.35, 1] }}>
            <p className="text-[11px] font-medium text-muted-foreground uppercase tracking-[0.2em] mb-8">
              Skills & Technologies
            </p>
            <div className="space-y-0">
              {skills.map((skill, i) => (
                <motion.div
                  key={skill.label}
                  variants={fadeUp}
                  transition={{ duration: 0.4, delay: 0.15 + i * 0.06, ease: [0.65, 0, 0.35, 1] }}
                  className="flex justify-between items-baseline py-4 border-b border-border"
                >
                  <span
                    className="text-[15px] font-medium text-foreground"
                    style={{ fontFamily: "var(--font-lora), Georgia, serif" }}
                  >
                    {skill.label}
                  </span>
                  <span className="text-[13px] text-muted-foreground tracking-wide">
                    {skill.tech}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </main>
  )
}
