'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { experiences } from '../data/experiences'

const Experience = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-[#00ffc3] to-[#ff34a1] bg-clip-text text-transparent !text-transparent"
        >
          Experience
        </motion.h2>
        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.2, delay: index * 0.1 }}
              className="relative pl-8 border-l-2 border-primary"
            >
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary"></div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">{experience.title}</h3>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-muted-foreground">
                  <span className="font-medium">{experience.company}</span>
                  <span className="hidden sm:inline">•</span>
                  <span>{experience.period}</span>
                  <span className="hidden sm:inline">•</span>
                  <span>{experience.location}</span>
                </div>
                <p className="text-muted-foreground">{experience.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {experience.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex} 
                      className="px-3 py-1 text-sm bg-accent rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience 