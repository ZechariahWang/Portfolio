'use client'

import React, { useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  image: string
  longDescription?: string
  githubUrl?: string
  liveUrl?: string
}

interface ProjectModalProps {
  project: Project | null
  isOpen: boolean
  onClose: () => void
}

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  // Wealthsimple easing curve
  const wsEasing = [0.22, 1, 0.36, 1]

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  if (!project) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="absolute inset-0 bg-overlay"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: wsEasing }}
            className="relative bg-surface rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-[0_10px_50px_rgba(0,0,0,0.15)] dark:shadow-[0_10px_50px_rgba(0,0,0,0.4)] border border-border-subtle"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 w-10 h-10 flex items-center justify-center rounded-lg bg-surface/90 backdrop-blur-sm hover:bg-secondary transition-colors duration-200 border border-border-subtle"
              aria-label="Close modal"
            >
              <svg
                className="w-5 h-5 text-foreground"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Scrollable Content */}
            <div className="overflow-y-auto max-h-[90vh] scrollbar-hide">
              {/* Hero Image */}
              <div className="aspect-video bg-secondary relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                />
              </div>

              {/* Content */}
              <div className="p-8 md:p-12 space-y-8">
                {/* Header */}
                <div className="space-y-3">
                  <h1
                    className="text-[28px] md:text-[36px] font-bold text-foreground leading-tight"
                    style={{ fontFamily: "'Libre Baskerville', Georgia, serif" }}
                  >
                    {project.title}
                  </h1>
                  <p className="ws-body-large max-w-[600px]">
                    {project.description}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 flex-wrap">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ws-button-primary"
                    >
                      View on GitHub
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ws-button-secondary"
                    >
                      Live Demo
                    </a>
                  )}
                </div>

                {/* Technologies */}
                <div className="space-y-4">
                  <h3 className="text-[13px] font-semibold uppercase tracking-[0.1em] text-muted-foreground">
                    Technologies
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="ws-tag"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Long Description */}
                {project.longDescription && (
                  <div className="space-y-4 pt-6 border-t border-border-subtle">
                    <h3 className="text-[13px] font-semibold uppercase tracking-[0.1em] text-muted-foreground">
                      About This Project
                    </h3>
                    <div className="space-y-4">
                      {project.longDescription.split('\n').map((paragraph, index) => (
                        paragraph.trim() && (
                          <p key={index} className="ws-body">
                            {paragraph.trim()}
                          </p>
                        )
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

export default ProjectModal
