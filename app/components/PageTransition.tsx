"use client"

import {motion, AnimatePresence} from 'framer-motion'
import {usePathname} from 'next/navigation'

export default function PageTransition({children}: {children: React.ReactNode}) {
    const pathname = usePathname();

    const isProjectDetail = pathname.startsWith('/projects/') && pathname !== '/projects';
    
    return (
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial={isProjectDetail ? false : { x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={isProjectDetail ? undefined : { x: "-100%", opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    );
}
