'use client'

import Image from 'next/image'

type PreloadImage = { src: string; priority?: boolean }

// Tier 1 (priority=true): hero + above-fold card images on /about — biggest LCP impact
// Tier 2 (default): experience + projects list and detail images, eager-loaded via fill in viewport
const siteImages: PreloadImage[] = [
  { src: '/atv.png', priority: true },
  { src: '/cachedImage.png', priority: true },
  { src: '/second.JPG', priority: true },
  { src: '/eclipse.jpg', priority: true },
  { src: '/embedded_.jpg', priority: true },

  { src: '/twossite2.png' },
  { src: '/conavi.jpg' },
  { src: '/uofc3.png' },
  { src: '/WATonomous.png' },
  { src: '/ecl.jpg' },

  { src: '/aicaryes.png' },
  { src: '/WMLOGO__.png' },
  { src: '/Mecha.png' },
  { src: '/conc.png' },
  { src: '/nova.png' },
  { src: '/gpagain.JPG' },
  { src: '/westmechpic.png' },
  { src: '/original.jpg' },
  { src: '/InterviewTrainer.png' },
  { src: '/MentalSupport.png' },
  { src: '/AE.jpg' },
]

export default function ImagePreloader() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        width: '100vw',
        height: '100vh',
        opacity: 0,
        pointerEvents: 'none',
        zIndex: -1,
        overflow: 'hidden',
      }}
    >
      {siteImages.map(({ src, priority }) => (
        <Image
          key={src}
          src={src}
          alt=""
          fill
          sizes="100vw"
          priority={priority}
          style={{ objectFit: 'cover' }}
        />
      ))}
    </div>
  )
}
