'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { projects } from '../data/projects'
import Image from 'next/image'

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

          <div className="grid grid-cols-1 sm: grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 md:gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={fadeUp}
                transition={{ duration: 0.4, delay: 0.1 + index * 0.04, ease: [0.65, 0, 0.35, 1] }}
              >
                <Link href={`/projects/${project.id}`} className="group block rounded-lg border border-border overflow-hidden hover:border-foreground/20 transition-all duration-300">
                  <div className="relative aspect-[16/10] overflow-hidden bg-secondary/30">
                    <Image src={project.image} alt={project.title} fill className="object-cover" priority={index < 10} />
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
