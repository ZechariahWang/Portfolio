'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { albums, shows } from '../data/interests'

interface CarouselSectionProps {
  title: string
  children: React.ReactNode
}

const CarouselSection = ({ title, children }: CarouselSectionProps) => (
  <div className="space-y-6">
    <h3 className="font-[var(--font-playfair)] text-2xl md:text-3xl font-medium text-foreground">
      {title}
    </h3>
    <div className="relative">
      {/* Left blur fade */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[var(--background)] to-transparent z-10 pointer-events-none" />

      {/* Scrollable content */}
      <div className="overflow-x-auto scrollbar-hide flex gap-4 px-4">
        {children}
      </div>

      {/* Right blur fade */}
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[var(--background)] to-transparent z-10 pointer-events-none" />
    </div>
  </div>
)

const InterestsCarousel = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  }

  return (
    <section id="interests" className="py-16 md:py-24 lg:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          className="mb-16 md:mb-20"
        >
          <h2 className="font-[var(--font-playfair)] text-4xl sm:text-5xl md:text-6xl font-medium text-foreground">
            Interests
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-16"
        >
          {/* Music Section */}
          <motion.div variants={itemVariants}>
            <CarouselSection title="Music I Love">
              {albums.map((album) => (
                <div
                  key={album.id}
                  className="flex-shrink-0 w-40 md:w-48 group"
                >
                  <div className="aspect-square rounded-2xl overflow-hidden bg-secondary shadow-[0_2px_8px_rgba(0,0,0,0.04)] group-hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-shadow duration-300">
                    <div className="relative w-full h-full">
                      <Image
                        src={album.image}
                        alt={album.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 768px) 160px, 192px"
                      />
                    </div>
                  </div>
                  <p className="mt-3 text-sm font-medium text-foreground truncate">{album.title}</p>
                  <p className="text-xs text-muted-foreground truncate">{album.artist}</p>
                </div>
              ))}
            </CarouselSection>
          </motion.div>

          {/* Shows Section */}
          <motion.div variants={itemVariants}>
            <CarouselSection title="Shows & Movies">
              {shows.map((show) => (
                <div
                  key={show.id}
                  className="flex-shrink-0 w-32 md:w-40 group"
                >
                  <div className="aspect-[2/3] rounded-2xl overflow-hidden bg-secondary shadow-[0_2px_8px_rgba(0,0,0,0.04)] group-hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-shadow duration-300">
                    <div className="relative w-full h-full">
                      <Image
                        src={show.image}
                        alt={show.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 768px) 128px, 160px"
                      />
                    </div>
                  </div>
                  <p className="mt-3 text-sm font-medium text-foreground truncate">{show.title}</p>
                </div>
              ))}
            </CarouselSection>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default InterestsCarousel
