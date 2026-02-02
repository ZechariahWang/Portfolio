'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { experiences } from '../data/experiences'

const Experience = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="bg-background py-20 md:py-24 px-6 md:px-12"
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
            Experience
          </h2>

          <div className="space-y-6">
            {experiences.map((experience, index) => (
              <div
                key={index}
                className="bg-secondary rounded-xl p-6 md:p-8 border border-border-subtle"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                  <div className="lg:flex-1">
                    <h3
                      className="text-[18px] md:text-[20px] font-bold text-foreground mb-1"
                      style={{ fontFamily: "Georgia, 'Libre Baskerville', 'Times New Roman', serif" }}
                    >
                      {experience.title}
                    </h3>
                    <p className="text-[15px] text-muted-foreground font-medium mb-3">
                      {experience.company}
                    </p>
                    <p className="text-[14px] text-muted-foreground leading-relaxed max-w-[600px]">
                      {experience.description}
                    </p>
                  </div>

                  <div className="lg:text-right lg:flex-shrink-0">
                    <p className="text-[14px] font-medium text-foreground">
                      {experience.period}
                    </p>
                    <p className="text-[13px] text-muted-foreground">
                      {experience.location}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mt-5 pt-5 border-t border-border-subtle">
                  {experience.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1.5 text-[12px] font-medium bg-background rounded-md text-muted-foreground border border-border-subtle"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
