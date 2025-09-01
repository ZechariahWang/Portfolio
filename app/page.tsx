import React from 'react'
import dynamic from 'next/dynamic'
import Hero from './components/Hero'
import FloatingNavbar from './components/FloatingNavbar'

const About = dynamic(() => import('./components/About'), { 
  loading: () => <div className="min-h-screen flex items-center justify-center">Loading...</div> 
})
const Experience = dynamic(() => import('./components/Experience'), { 
  loading: () => <div className="min-h-screen flex items-center justify-center">Loading...</div> 
})
const Projects = dynamic(() => import('./components/Projects'), { 
  loading: () => <div className="min-h-screen flex items-center justify-center">Loading...</div> 
})

const page = () => {
  return (
    <main className="min-h-screen">
      <FloatingNavbar />
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="projects">
        <Projects />
      </section>
    </main>
  )
}

export default page
