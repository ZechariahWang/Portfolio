'use client'

import Image from 'next/image'

const siteImages = [
  '/atv.png',
  '/westmechpic.png',
  '/aicaryes.png',
  '/iphone2.png',
  '/newpic.png',
  '/ecl.jpg',
  '/WATonomous.png',
  '/original.jpg',
  '/gpagain.JPG',
  '/conc.png',
  '/nova.png',
  '/WestMechPhoto.jpg',
  '/GP_TWO.JPG',
  '/Mecha .png',
  '/InterviewTrainer.png',
  '/MentalSupport.png',
  '/AE.jpg',
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
      {siteImages.map((src) => (
        <Image
          key={src}
          src={src}
          alt=""
          fill
          sizes="100vw"
          priority
          style={{ objectFit: 'cover' }}
        />
      ))}
    </div>
  )
}
