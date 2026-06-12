'use client'

import Image from 'next/image'

type PreloadImage = { src: string; priority?: boolean }

// Tier 1 (priority=true): hero + above-fold card images on /about — biggest LCP impact
// Tier 2 (default): experience + projects list and detail images, eager-loaded via fill in viewport
const siteImages: PreloadImage[] = [
  { src: '/projects/atv.png', priority: true },
  { src: '/about/cachedImage.png', priority: true },
  { src: '/about/second.JPG', priority: true },
  { src: '/about/eclipse.jpg', priority: true },
  { src: '/about/embedded_.jpg', priority: true },

  { src: '/experience/twossite2.png' },
  { src: '/experience/conavi.jpg' },
  { src: '/experience/uofc3.png' },
  { src: '/projects/WATonomous.png' },
  { src: '/projects/ecl.jpg' },

  { src: '/projects/aicaryes.png' },
  { src: '/projects/WMLOGO__.png' },
  { src: '/projects/Mecha.png' },
  { src: '/projects/conc.png' },
  { src: '/projects/nova.png' },
  { src: '/projects/gpagain.JPG' },
  { src: '/projects/westmechpic.png' },
  { src: '/projects/original.jpg' },
  { src: '/projects/InterviewTrainer.png' },
  { src: '/projects/MentalSupport.png' },
  { src: '/projects/AE.jpg' },
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
