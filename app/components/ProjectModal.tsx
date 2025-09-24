'use client'

import React from 'react'
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
  if (!project) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3 }}
            className="relative bg-background rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 bg-background/80 backdrop-blur-sm rounded-full p-2 hover:bg-background transition-colors"
            >
              <svg 
                className="w-6 h-6" 
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
              <div className="aspect-video bg-accent relative">
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
                <h1 className="text-4xl font-bold bg-gradient-to-r from-[#ff34a1] to-[#00ffc3] bg-clip-text text-transparent">
                  {project.title}
                </h1>
                
                <p className="text-xl text-muted-foreground">{project.description}</p>
                
                <div className="flex gap-4">
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                    >
                      View on GitHub
                    </a>
                  )}
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="px-6 py-3 border border-border rounded-lg hover:bg-accent transition-colors"
                    >
                      Demo
                    </a>
                  )}
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 text-sm bg-accent rounded-full shadow-md shadow-[#00ffc3]/10">
                      {tech}
                    </span>
                  ))}
                </div>

                {project.longDescription && (
                  <div className="space-y-4 text-muted-foreground">
                    {project.longDescription.split('\n').map((paragraph, index) => (
                      paragraph.trim() && (
                        <p key={index}>
                          {paragraph.trim()}
                        </p>
                      )
                    ))}
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