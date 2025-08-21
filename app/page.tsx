import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import FloatingNavbar from './components/FloatingNavbar'

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
