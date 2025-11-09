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
    <section id="projects" className="py-20 px-4 bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="text-left mb-8 md:mb-10">
          <h2 className="text-7xl sm:text-8xl md:text-9xl font-bold leading-[0.95] uppercase">
            Projects
          </h2>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {projects.map((project, index) => {
            const heights = ['h-64', 'h-72', 'h-80', 'h-96'];
            const height = heights[index % heights.length];

            return (
              <button
                key={project.id}
                onClick={() => handleProjectClick(project.id)}
                className="group text-left rounded-lg border border-neutral-800 overflow-hidden hover:border-neutral-600 transition-all duration-300 flex flex-col bg-background/50 backdrop-blur-sm w-full break-inside-avoid"
              >
                <div className={`relative w-full overflow-hidden bg-neutral-900 ${height}`}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-sm md:text-base font-semibold mb-2 group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-xs md:text-sm text-muted-foreground mb-4 flex-grow leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    {project.technologies.slice(0, 2).map((tech) => (
                      <span key={tech} className="px-2.5 py-1 text-xs font-medium rounded-full bg-neutral-800 border border-neutral-700 text-neutral-300 hover:border-neutral-500 transition-colors">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 2 && (
                      <span className="px-2.5 py-1 text-xs font-medium text-muted-foreground">
                        +{project.technologies.length - 2}
                      </span>
                    )}
                  </div>
                </div>
              </button>
            );
          })}
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