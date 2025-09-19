'use client'

import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <section className="py-20 px-4 bg-card">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-[#ff34a1] to-[#00ffc3] bg-clip-text text-transparent"
        >
          About Me
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <p className="text-muted-foreground">
              Hi, I'm Zech! I'm currently a Mechatronics Engineering student at the University of Waterloo.
            </p>
            <p className="text-muted-foreground">
              I'm a Software Engineer with a specialization in AI and automation systems, ranging from Machine Learning and AI Agents to control systems.
            </p>
            <p className="text-muted-foreground">
              Currently, I'm working at a startup based in NYC, building AI-powered tools for social conversational platforms.
            </p>
            <p className="text-muted-foreground">
              In my spare time, I'm working on Canada's leading robotics education company, building frameworks for STEM education, or testing out new AI models.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="p-4 bg-accent rounded-lg relative overflow-hidden shadow-lg shadow-[#4287f5]/15 border border-[#4287f5]/20 hover:shadow-[#4287f5]/25 hover:border-[#4287f5]/30 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-[#4287f5]/8 to-[#4287f5]/8"></div>
              <div className="relative z-10">
                <h3 className="font-semibold mb-2">AI & Data</h3>
                <p className="text-sm text-muted-foreground">PyTorch, TensorFlow, Matplotlib, OpenCV</p>
              </div>
            </div>
            <div className="p-4 bg-accent rounded-lg relative overflow-hidden shadow-lg shadow-[#ff34a1]/15 border border-[#ff34a1]/20 hover:shadow-[#ff34a1]/25 hover:border-[#ff34a1]/30 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-[#ff34a1]/8 to-[#ff34a1]/8"></div>
              <div className="relative z-10">
                <h3 className="font-semibold mb-2">Robotics</h3>
                <p className="text-sm text-muted-foreground">ROS2, Docker, Linux, Gazebo</p>
              </div>
            </div>
            <div className="p-4 bg-accent rounded-lg relative overflow-hidden shadow-lg shadow-[#eff542]/15 border border-[#eff542]/20 hover:shadow-[#eff542]/25 hover:border-[#eff542]/30 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-[#eff542]/8 to-[#eff542]/8"></div>
              <div className="relative z-10">
                <h3 className="font-semibold mb-2">Fullstack</h3>
                <p className="text-sm text-muted-foreground">React, Next.js, AWS, PostgreSQL</p>
              </div>
            </div>
            <div className="p-4 bg-accent rounded-lg relative overflow-hidden shadow-lg shadow-[#00ffc3]/15 border border-[#00ffc3]/20 hover:shadow-[#00ffc3]/25 hover:border-[#00ffc3]/30 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00ffc3]/8 to-[#00ffc3]/8"></div>
              <div className="relative z-10">
                <h3 className="font-semibold mb-2">Medical</h3>
                <p className="text-sm text-muted-foreground">.NET, WPF, Moq, Nunit</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About 