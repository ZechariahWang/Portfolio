'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { projects } from '../data/projects'
import { projectsDetailed } from '../data/projectsDetailed'
import ProjectModal from './ProjectModal'

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<string | null>(null)

  const handleProjectClick = (projectId: string) => {
    setSelectedProject(projectId)
  }

  const handleCloseModal = () => {
    setSelectedProject(null)
  }

  const currentProject = selectedProject
    ? projectsDetailed.find(p => p.id === selectedProject)
    : null

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="mb-12 md:mb-16">
          <h2 className="text-5xl sm:text-7xl md:text-9xl font-bold leading-[0.95] uppercase">
            Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <button
              key={project.id}
              onClick={() => handleProjectClick(project.id)}
              className="group text-left w-full h-96 lg:h-[28rem] rounded-xl border border-neutral-800/50 overflow-hidden hover:border-neutral-600 transition-all duration-300 ease-out flex flex-col bg-gradient-to-br from-neutral-900/50 to-neutral-800/30 backdrop-blur-sm hover:shadow-2xl hover:shadow-neutral-900/50 hover:-translate-y-1"
            >
              <div className="relative w-full h-56 lg:h-64 flex-shrink-0 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-300 ease-out group-hover:scale-110"
                  loading="eager"
                />
                {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-neutral-900/90 z-10 pointer-events-none transition-opacity duration-300 ease-out group-hover:opacity-100"></div> */}
                {/* <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/10 transition-colors duration-300 ease-out z-20 pointer-events-none"></div> */}
              </div>

              <div className="p-5 lg:p-6 flex flex-col flex-grow justify-between pb-6 lg:pb-7">
                <div className="flex-grow">
                  <h3 className="text-xl lg:text-2xl font-bold mb-2 group-hover:text-blue-400 transition-colors duration-200 ease-out">
                    {project.title}
                  </h3>
                  <p className="text-sm lg:text-base text-muted-foreground leading-relaxed line-clamp-2 mb-3">
                    {project.description}
                  </p>
                </div>
                <div className="flex gap-2 flex-wrap mt-auto pt-3">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span 
                      key={tech} 
                      className="px-3 py-1.5 text-xs font-medium rounded-lg bg-neutral-800/80 border border-neutral-700/50 text-neutral-300 group-hover:border-blue-500/50 group-hover:bg-blue-500/10 transition-all duration-200 ease-out backdrop-blur-sm"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-3 py-1.5 text-xs font-medium text-muted-foreground rounded-lg bg-neutral-800/50 border border-neutral-700/30">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>
              </div>
            </button>
          ))}
        </div>

        <ProjectModal
          project={currentProject ?? null}
          isOpen={!!selectedProject}
          onClose={handleCloseModal}
        />
      </div>
    </section>
  )
}

export default Projects 