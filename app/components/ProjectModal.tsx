'use client'

import React from 'react'
import Image from 'next/image'

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
  if (!project) return null

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-overlay"
            onClick={onClose}
          />
          <div
            className="relative bg-surface rounded-lg border border-border-subtle max-w-4xl w-full max-h-[90vh] overflow-hidden"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 bg-surface rounded-full p-2 hover:bg-surface-elevated transition-colors border border-border-subtle"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="overflow-y-auto max-h-[90vh] scrollbar-hide">
              <div className="aspect-video bg-surface relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                />
              </div>

              <div className="p-8 space-y-6">
                <div>
                  <h1 className="text-4xl font-semibold mb-2">
                    {project.title}
                  </h1>
                  <div className="w-12 h-0.5 bg-border-medium rounded-full"></div>
                </div>

                <p className="text-base text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div className="flex gap-3 flex-wrap">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 bg-button-primary-bg hover:bg-button-primary-hover text-button-primary-text rounded-lg font-medium transition-colors text-sm"
                    >
                      View on GitHub
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 border border-border-subtle hover:border-border-medium rounded-lg font-medium transition-colors text-sm"
                    >
                      Demo
                    </a>
                  )}
                </div>

                <div>
                  <h3 className="text-sm font-semibold mb-3">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-surface-elevated border border-border-subtle text-text-tertiary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {project.longDescription && (
                  <div className="space-y-4 text-muted-foreground pt-4 border-t border-border-subtle">
                    <h3 className="text-sm font-semibold text-foreground">About</h3>
                    {project.longDescription.split('\n').map((paragraph, index) => (
                      paragraph.trim() && (
                        <p key={index} className="text-sm leading-relaxed">
                          {paragraph.trim()}
                        </p>
                      )
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ProjectModal