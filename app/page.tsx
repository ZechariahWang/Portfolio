import React from 'react'
import dynamic from 'next/dynamic'
import Hero from './components/Hero'
import FloatingNavbar from './components/FloatingNavbar'

const About = dynamic(() => import('./components/About'), {
  loading: () => <div className="apple-section flex items-center justify-center"><div className="apple-body">Loading...</div></div>
})
const Experience = dynamic(() => import('./components/Experience'), {
  loading: () => <div className="apple-section flex items-center justify-center"><div className="apple-body">Loading...</div></div>
})
const Projects = dynamic(() => import('./components/Projects'), {
  loading: () => <div className="apple-section flex items-center justify-center"><div className="apple-body">Loading...</div></div>
})

const Page = () => {
  return (
    <main className="min-h-screen bg-background side-gradients">
      <FloatingNavbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
    </main>
  )
}

export default Page
