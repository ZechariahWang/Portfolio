'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { projects } from '../data/projects'

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.05,
    },
  },
}

const fadeUp = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
}

export default function ProjectsPage() {
  return (
    <main className="min-h-[100dvh] bg-background pt-14 flex flex-col">
      <div className="page-container flex-1 flex items-start pt-[6vh] md:pt-[12vh] pb-8">
        <motion.div
          initial="initial"
          animate="animate"
          variants={stagger}
          className="w-full"
        >
          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.5, ease: [0.65, 0, 0.35, 1] }}
            className="text-[clamp(28px,6vw,64px)] font-light leading-[1.05] tracking-tight text-foreground mb-6 md:mb-10"
            style={{ fontFamily: "var(--font-lora), Georgia, serif" }}
          >
            projects
          </motion.h1>

          <div className="w-full">
            {/* Header row — desktop only */}
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.4, ease: [0.65, 0, 0.35, 1] }}
              className="hidden md:grid md:grid-cols-[1fr_2fr_1fr] gap-6 pb-3 border-b border-border"
            >
              <span className="text-[11px] font-medium text-muted-foreground uppercase tracking-[0.2em]">Project</span>
              <span className="text-[11px] font-medium text-muted-foreground uppercase tracking-[0.2em]">Description</span>
              <span className="text-[11px] font-medium text-muted-foreground uppercase tracking-[0.2em] text-right">Stack</span>
            </motion.div>

            {projects.map((project, i) => (
              <motion.div
                key={project.id}
                variants={fadeUp}
                transition={{ duration: 0.4, delay: 0.08 + i * 0.04, ease: [0.65, 0, 0.35, 1] }}
              >
                <Link
                  href={`/projects/${project.id}`}
                  className="block border-b border-border py-3 md:py-5 group hover:bg-secondary/30 transition-colors duration-300 -mx-4 px-4"
                >
                  {/* Desktop */}
                  <div className="hidden md:grid md:grid-cols-[1fr_2fr_1fr] gap-6 items-baseline">
                    <span
                      className="text-[14px] text-foreground font-medium group-hover:opacity-70 transition-opacity duration-300"
                      style={{ fontFamily: "var(--font-lora), Georgia, serif" }}
                    >
                      {project.title}
                    </span>
                    <span className="text-[13px] text-muted-foreground">
                      {project.description}
                    </span>
                    <span className="text-[12px] text-muted-foreground text-right tracking-wide">
                      {project.technologies.slice(0, 3).join(' · ')}
                    </span>
                  </div>

                  {/* Mobile */}
                  <div className="md:hidden">
                    <div className="flex justify-between items-baseline mb-1">
                      <span
                        className="text-[14px] text-foreground font-medium"
                        style={{ fontFamily: "var(--font-lora), Georgia, serif" }}
                      >
                        {project.title}
                      </span>
                    </div>
                    <p className="text-[13px] text-muted-foreground mb-1">
                      {project.description}
                    </p>
                    <span className="text-[11px] text-muted-foreground tracking-wide">
                      {project.technologies.slice(0, 3).join(' · ')}
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  )
}
