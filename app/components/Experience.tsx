'use client'

import React from 'react'
import { experiences } from '../data/experiences'

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-4 bg-background min-h-screen flex flex-col justify-center">
      <div className="max-w-full">
        <div className="text-right mb-16 md:mb-20 ml-auto max-w-5xl mx-auto px-4">
          <h2 className="text-7xl sm:text-8xl md:text-9xl font-bold leading-[0.95] uppercase">
            Experience
          </h2>
        </div>

        <div className="space-y-16 flex flex-col items-end">
          {experiences.map((experience, index) => (
            <div key={index} className="w-full max-w-5xl mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                <div className="md:col-span-2 space-y-4">
                  <p className="text-sm md:text-base text-foreground leading-relaxed">
                    {experience.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {experience.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 text-xs font-medium border border-neutral-700 rounded-full text-muted-foreground hover:border-neutral-600 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="md:col-span-1 space-y-2 text-right">
                  <h3 className="text-lg md:text-xl font-semibold">{experience.title}</h3>
                  <p className="text-sm text-muted-foreground">{experience.company}</p>
                  <p className="text-xs md:text-sm text-muted-foreground pt-2">{experience.period}</p>
                  <p className="text-xs md:text-sm text-muted-foreground">{experience.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience 