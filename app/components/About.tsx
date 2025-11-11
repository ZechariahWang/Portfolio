'use client'

import React from 'react'

const About = () => {
  const skills = [
    { label: 'AI, ML & Data', tech: 'PyTorch, TensorFlow, Matplotlib, OpenCV' },
    { label: 'Robotics', tech: 'ROS2, Docker, Linux, Gazebo' },
    { label: 'Fullstack', tech: 'React, Next.js, AWS, PostgreSQL' },
    { label: 'Medical', tech: '.NET, WPF, Moq, Nunit' }
  ]

  return (
    <section id="about" className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="text-left mb-12 md:mb-16">
          <h2 className="text-5xl sm:text-7xl md:text-9xl font-bold leading-[0.95] uppercase">
            About
          </h2>
        </div>

        <div className="space-y-16 md:space-y-20">
          <div className="space-y-4 md:space-y-5 max-w-3xl text-lg md:text-lg leading-relaxed text-foreground">
            <p>
              software engineer from calgary, canada specializing in ai/ml and automation control systems.
            </p>
            <p>
              currently working at a startup in nyc building ai-agents for human connection, and canada's leading robotics education company.
            </p>
            <p>
              2nd year mechatronics engineering student at the university of waterloo.
            </p>
          </div>

          <div className="space-y-8">
            <h3 className="text-sm md:text-base font-semibold uppercase tracking-widest">Skills & Technologies</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {skills.map((skill) => (
                <div key={skill.label} className="space-y-3">
                  <h4 className="font-medium text-sm md:text-base">{skill.label}</h4>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{skill.tech}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About 