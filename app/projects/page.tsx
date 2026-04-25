'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import BorderGlow from '../components/BorderGlow'
import { projects } from '../data/projects'

const projectColors: Record<string, string[]> = {
  'project-11': ['#3B82F6', '#818CF8', '#38bdf8'],
  'project-2':  ['#8B5CF6', '#c084fc', '#f472b6'],
  'project-6':  ['#06B6D4', '#38bdf8', '#818CF8'],
  'project-9':  ['#F59E0B', '#FBBF24', '#f472b6'],
  'project-1':  ['#10B981', '#34D399', '#38bdf8'],
  'project-3':  ['#EF4444', '#F87171', '#f472b6'],
  'project-8':  ['#4F46E5', '#818CF8', '#c084fc'],
  'project-4':  ['#EC4899', '#f472b6', '#c084fc'],
}

export default function ProjectsPage() {
  const router = useRouter()

  return (
    <main className="bg-background pt-14" style={{ height: '100dvh', overflowY: 'auto', overflowX: 'hidden', touchAction: 'pan-y', WebkitOverflowScrolling: 'touch' as never, position: 'relative' }}>
      {/* Background image */}
      <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0 }}>
        <Image
          src="/gpagain.JPG"
          alt=""
          fill
          sizes="100vw"
          style={{ objectFit: 'cover', filter: 'brightness(0.22) saturate(0.5)' }}
          priority
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, var(--background) 0%, transparent 40%, transparent 60%, var(--background) 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, var(--background) 0%, transparent 20%, transparent 70%, var(--background) 100%)' }} />
      </div>

      <div className="page-container pt-[6vh] pb-12" style={{ position: 'relative', zIndex: 1 }}>
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.65, 0, 0.35, 1] }}
          className="text-[clamp(28px,6vw,64px)] font-semibold leading-[1.05] tracking-tight text-foreground mb-10"
        >
          PROJECTS
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.06, ease: [0.65, 0, 0.35, 1] }}
              onClick={() => router.push(`/projects/${project.id}`)}
              style={{ cursor: 'pointer' }}
            >
              <BorderGlow
                edgeSensitivity={30}
                glowColor="40 80 80"
                backgroundColor="var(--background)"
                borderRadius={16}
                glowRadius={40}
                glowIntensity={1}
                coneSpread={25}
                animated={false}
                colors={projectColors[project.id] ?? ['#c084fc', '#f472b6', '#38bdf8']}
              >
                <div
                  style={{
                    position: 'relative',
                    height: '360px',
                    overflow: 'hidden',
                    borderRadius: '15px 15px 0 0',
                    flexShrink: 0,
                  }}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={i < 4}
                    loading={i < 4 ? 'eager' : 'lazy'}
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div style={{ padding: '1.4rem 1.6rem 1.6rem' }}>
                  <h3 style={{
                    color: 'var(--foreground)',
                    fontWeight: 600,
                    fontSize: '1.05rem',
                    marginBottom: '0.5rem',
                    letterSpacing: '-0.01em',
                  }}>
                    {project.title}
                  </h3>
                  <p style={{
                    color: 'var(--muted-foreground)',
                    fontSize: '0.85rem',
                    lineHeight: 1.55,
                    marginBottom: '1rem',
                  }}>
                    {project.description}
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                    {project.technologies.slice(0, 3).map(tech => (
                      <span
                        key={tech}
                        style={{
                          fontSize: '0.72rem',
                          padding: '0.22rem 0.6rem',
                          borderRadius: '999px',
                          border: '1px solid rgb(255 255 255 / 12%)',
                          color: 'var(--muted-foreground)',
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </BorderGlow>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  )
}
