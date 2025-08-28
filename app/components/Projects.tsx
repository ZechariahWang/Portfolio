'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { projects } from '../data/projects'

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-card">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-[#ff34a1] to-[#00ffc3] bg-clip-text text-transparent"
        >
          Projects
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Link 
              key={project.id} 
              href={`/projects/${project.id}`}
              className="bg-card rounded-lg overflow-hidden shadow-lg shadow-[#ff34a1]/10 hover:shadow-[#ff34a1]/100 transition-all duration-300 hover:scale-105 relative group"
            >
              <div className="relative h-48 w-full group">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-[#ff34a1]/5 to-[#00ffc3]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="p-6 relative z-10">
                <motion.h3 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.2, delay: index * 0.1 }}
                  className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300"
                >
                  {project.title}
                </motion.h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 text-sm bg-accent rounded-full shadow-md shadow-[#00ffc3]/10 hover:shadow-[#00ffc3]/20 transition-all duration-300 relative overflow-hidden">
                      <span className="absolute inset-0 bg-gradient-to-r from-[#00ffc3]/5 to-[#ff34a1]/5 rounded-full"></span>
                      <span className="relative z-10">{tech}</span>
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects 