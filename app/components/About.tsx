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
              At my core, I'm a Software Engineer with a specialization in AI and autonomous systems, ranging from Machine Learning and AI Agents to control systems.
            </p>
            <p className="text-muted-foreground">
              In my spare time, you can find me working on Canada's largest robotics education club, building frameworks for girls in STEM, and developing solutions for real-world problems.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="p-4 bg-accent rounded-lg">
              <h3 className="font-semibold mb-2">AI & Data</h3>
              <p className="text-sm text-muted-foreground">PyTorch, TensorFlow, Matplotlib, OpenCV</p>
            </div>
            <div className="p-4 bg-accent rounded-lg">
              <h3 className="font-semibold mb-2">Robotics</h3>
              <p className="text-sm text-muted-foreground">ROS2, Docker, Linux, Gazebo</p>
            </div>
            <div className="p-4 bg-accent rounded-lg">
              <h3 className="font-semibold mb-2">Fullstack</h3>
              <p className="text-sm text-muted-foreground">React, Next.js, Node.js, Express.js</p>
            </div>
            <div className="p-4 bg-accent rounded-lg">
              <h3 className="font-semibold mb-2">Medical</h3>
              <p className="text-sm text-muted-foreground">.NET, WPF, Moq, Nunit</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About 