'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
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
    <section id="projects" className="py-20 px-4 bg-card">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-[#ff6b6b] to-[#4ecdc4] bg-clip-text text-transparent !text-transparent"
        >
          Projects & Community
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <button 
              key={project.id} 
              onClick={() => handleProjectClick(project.id)}
              className="bg-card rounded-lg overflow-hidden shadow-lg shadow-[#ff34a1]/10 transition-all duration-300 hover:scale-105 hover:-translate-y-2 relative group text-left w-full h-[400px] flex flex-col"
            >
              <div className="relative h-48 w-full group flex-shrink-0">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-[#ff34a1]/5 to-[#00ffc3]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="p-6 relative z-10 flex flex-col flex-grow">
                <motion.h3 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.2, delay: index * 0.1 }}
                  className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300"
                >
                  {project.title}
                </motion.h3>
                <p className="text-muted-foreground mb-4 line-clamp-3 flex-grow">
                  {project.description}
                </p>
                <div className="flex gap-2 flex-wrap">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span key={tech} className="px-3 py-1 text-sm bg-accent rounded-full shadow-md shadow-[#00ffc3]/10 hover:shadow-[#00ffc3]/20 transition-all duration-300 relative overflow-hidden">
                      <span className="absolute inset-0 bg-gradient-to-r from-[#00ffc3]/5 to-[#ff34a1]/5 rounded-full"></span>
                      <span className="relative z-10">{tech}</span>
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-3 py-1 text-sm bg-accent/50 rounded-full text-muted-foreground">
                      +{project.technologies.length - 3}
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