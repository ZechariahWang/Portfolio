'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  image: string
  longDescription: string
  githubUrl: string
  liveUrl: string
}

const wormhole = [0.65, 0, 0.35, 1] as const

export default function ProjectDetail({ project }: { project: Project }) {
  const paragraphs = project.longDescription.split('\n').filter(p => p.trim())

  return (
    <main className="bg-background pt-12 pb-16" style={{ height: '100dvh', overflowY: 'auto', overflowX: 'hidden', touchAction: 'pan-y', WebkitOverflowScrolling: 'touch' as never, position: 'relative' }}>
      {/* Background image — blends into site background */}
      <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0 }}>
        <Image
          src={project.image}
          alt=""
          fill
          sizes="100vw"
          priority
          style={{ objectFit: 'cover', filter: 'brightness(0.22) saturate(0.5)' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, var(--background) 0%, transparent 40%, transparent 60%, var(--background) 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, var(--background) 0%, transparent 20%, transparent 70%, var(--background) 100%)' }} />
      </div>

      <div className="page-container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="max-w-[900px]">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.05, ease: wormhole }}
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-[13px] text-muted-foreground hover:text-foreground transition-colors duration-300 mb-10"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
              </svg>
              Back
            </Link>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: wormhole }}
            className="aspect-video bg-secondary relative mb-8 overflow-hidden"
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 900px"
            />
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.08, ease: wormhole }}
            className="text-[clamp(28px,5vw,48px)] font-light leading-[1.1] tracking-tight text-foreground mb-4"
            style={{ fontFamily: "var(--font-geist-sans), system-ui, sans-serif" }}
          >
            {project.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.12, ease: wormhole }}
            className="text-[15px] text-muted-foreground mb-6"
          >
            {project.description}
          </motion.p>

          {/* Tech + Links row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.18, ease: wormhole }}
            className="flex flex-wrap items-center gap-4 mb-10 pb-8 border-b border-border"
          >
            <div className="flex flex-wrap gap-2 flex-1">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-[12px] font-medium text-muted-foreground border border-border"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[13px] font-medium text-foreground hover:opacity-70 transition-opacity duration-300 underline underline-offset-4"
                >
                  GitHub
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[13px] font-medium text-foreground hover:opacity-70 transition-opacity duration-300 underline underline-offset-4"
                >
                  Demo
                </a>
              )}
            </div>
          </motion.div>

          {/* Description — staggered paragraphs */}
          <div className="space-y-5">
            {paragraphs.map((paragraph, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.22 + index * 0.04, ease: wormhole }}
                className="text-[15px] text-muted-foreground leading-[1.8]"
              >
                {paragraph.trim()}
              </motion.p>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
