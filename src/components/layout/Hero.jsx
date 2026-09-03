import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import Logomark from '../brand/Logomark'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
}

function Hero() {
  const videoRef = useRef(null)
  const [videoReady, setVideoReady] = useState(false)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    if (prefersReducedMotion && videoRef.current) {
      videoRef.current.pause()
    }
  }, [])

  return (
    <section className="relative flex h-svh min-h-[560px] w-full items-end overflow-hidden bg-neutral-900">
      <motion.video
        ref={videoRef}
        initial={{ scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{ duration: 4, ease: [0.16, 1, 0.3, 1] }}
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
          videoReady ? 'opacity-100' : 'opacity-0'
        }`}
        autoPlay
        muted
        loop
        playsInline
        poster="/videos/hero-poster.jpeg"
        onCanPlay={() => setVideoReady(true)}
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </motion.video>

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-neutral-950/50 via-neutral-950/20 to-neutral-950"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-neutral-950/60 via-transparent to-neutral-950/30"
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 w-full px-6 pb-16 sm:px-10 sm:pb-24 lg:px-16"
      >
        <motion.p
          variants={item}
          className="flex items-center gap-2 text-sm font-medium uppercase tracking-[0.2em] text-amber-300"
        >
          <Logomark size={16} />
          Farlume
        </motion.p>
        <motion.h1
          variants={item}
          className="text-balance mt-4 max-w-3xl text-4xl font-display leading-[1.05] text-white sm:text-6xl lg:text-7xl"
        >
          Go somewhere that isn&rsquo;t here.
        </motion.h1>
        <motion.p
          variants={item}
          className="mt-5 max-w-xl text-base text-neutral-300 sm:text-lg"
        >
          Explore destinations, check the weather before you pack, and let an
          AI plan the trip while you dream about it.
        </motion.p>

        <motion.a
          variants={item}
          href="#destinations"
          className="group mt-9 inline-flex items-center gap-3 text-sm font-medium text-white/90 transition hover:text-amber-300"
        >
          <span>Explore destinations</span>
          <span
            aria-hidden="true"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-white/30 transition group-hover:translate-y-0.5 group-hover:border-amber-300"
          >
            &darr;
          </span>
        </motion.a>
      </motion.div>
    </section>
  )
}

export default Hero
