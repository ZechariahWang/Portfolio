'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const About = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const skills = [
    { label: 'Robotics', tech: 'ROS2, Linux, Gazebo' },
    { label: 'Fullstack', tech: 'React, AWS, PostgreSQL' },
    { label: 'AI & ML', tech: 'PyTorch, OpenCV, LLM' },
    { label: 'Medical Tech', tech: '.NET, Moq, NUnit, Docker' }
  ]

  return (
    <section
      id="about"
      ref={sectionRef}
      className="bg-background py-20 md:py-24 px-6 md:px-12 -mt-px"
    >
      <div className="max-w-[1280px] mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20"
        >
          {/* Left - Text */}
          <div>
            <h2
              className="text-[28px] md:text-[32px] font-bold text-foreground mb-6"
              style={{ fontFamily: "Georgia, 'Libre Baskerville', 'Times New Roman', serif" }}
            >
              About
            </h2>
            <p className="text-[15px] text-muted-foreground leading-relaxed mb-4">
              Software engineer from Calgary, Canada, specializing in automation systems,
              AI, computer vision, and robotics engineering.
            </p>
            <p className="text-[15px] text-muted-foreground leading-relaxed">
              2nd year Mechatronics Engineering student at the University of Waterloo.
            </p>
          </div>

          {/* Right - Skills */}
          <div>
            <h3 className="text-[12px] font-medium text-muted-foreground uppercase tracking-[0.15em] mb-6">
              Skills & Technologies
            </h3>
            <div className="space-y-4">
              {skills.map((skill) => (
                <div key={skill.label} className="flex justify-between items-baseline border-b border-border-subtle pb-3">
                  <span
                    className="text-[15px] font-semibold text-foreground"
                    style={{ fontFamily: "Georgia, 'Libre Baskerville', 'Times New Roman', serif" }}
                  >
                    {skill.label}
                  </span>
                  <span className="text-[13px] text-muted-foreground">
                    {skill.tech}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
