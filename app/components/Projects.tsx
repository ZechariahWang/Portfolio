'use client'

import React, { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { projects } from '../data/projects'
import { projectsDetailed } from '../data/projectsDetailed'
import ProjectModal from './ProjectModal'

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<string | null>(null)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

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
    <section
      id="projects"
      ref={sectionRef}
      className="bg-secondary py-20 md:py-24 px-6 md:px-12"
    >
      <div className="max-w-[1280px] mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2
            className="text-[28px] md:text-[32px] font-bold text-foreground mb-10"
            style={{ fontFamily: "Georgia, 'Libre Baskerville', 'Times New Roman', serif" }}
          >
            Projects
          </h2>

          {/* Projects Table */}
          <div className="bg-background rounded-xl border border-border-subtle overflow-hidden">
            {/* Table Header */}
            <div className="hidden md:grid md:grid-cols-[1fr_2fr_1fr] gap-4 px-6 py-3 border-b border-border-subtle bg-secondary/50">
              <span className="text-[12px] font-medium text-muted-foreground uppercase tracking-wider">Project</span>
              <span className="text-[12px] font-medium text-muted-foreground uppercase tracking-wider">Description</span>
              <span className="text-[12px] font-medium text-muted-foreground uppercase tracking-wider">Technologies</span>
            </div>

            {/* Table Rows */}
            <div className="divide-y divide-border-subtle">
              {projects.map((project) => (
                <button
                  key={project.id}
                  onClick={() => handleProjectClick(project.id)}
                  className="w-full text-left px-6 py-4 hover:bg-secondary/50 transition-colors duration-200 group"
                >
                  {/* Mobile Layout */}
                  <div className="md:hidden">
                    <h3
                      className="text-[16px] font-semibold text-foreground mb-1"
                      style={{ fontFamily: "Georgia, 'Libre Baskerville', 'Times New Roman', serif" }}
                    >
                      {project.title}
                    </h3>
                    <p className="text-[13px] text-muted-foreground mb-2 line-clamp-1">
                      {project.description}
                    </p>
                    <div className="flex gap-1.5 flex-wrap">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 text-[11px] font-medium bg-secondary rounded text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Desktop Layout */}
                  <div className="hidden md:grid md:grid-cols-[1fr_2fr_1fr] gap-4 items-center">
                    <h3
                      className="text-[15px] font-semibold text-foreground"
                      style={{ fontFamily: "Georgia, 'Libre Baskerville', 'Times New Roman', serif" }}
                    >
                      {project.title}
                    </h3>
                    <p className="text-[14px] text-muted-foreground line-clamp-1">
                      {project.description}
                    </p>
                    <div className="flex gap-1.5 flex-wrap">
                      {project.technologies.slice(0, 2).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 text-[11px] font-medium bg-secondary rounded text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 2 && (
                        <span className="px-2 py-0.5 text-[11px] font-medium bg-secondary rounded text-muted-foreground">
                          +{project.technologies.length - 2}
                        </span>
                      )}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <ProjectModal
        project={currentProject ?? null}
        isOpen={!!selectedProject}
        onClose={handleCloseModal}
      />
    </section>
  )
}

export default Projects
