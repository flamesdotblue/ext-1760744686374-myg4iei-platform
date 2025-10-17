import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-[80vh] w-full overflow-hidden md:h-screen">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4Zh-Q6DWWp5yPnQf/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.25),transparent_60%),radial-gradient(ellipse_at_bottom,rgba(236,72,153,0.18),transparent_60%)]" />

      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="font-heading text-4xl font-semibold tracking-tight text-white drop-shadow md:text-6xl"
        >
          Floating Glassmorphic Toolbar
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
          className="mt-4 max-w-2xl text-balance text-base text-white/80 md:text-lg"
        >
          A modern, aesthetic and futuristic interface with 3D sparkles on a dark canvas. Explore a tactile toolbar layered over an interactive Spline animation.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="mt-8 flex items-center gap-3"
        >
          <button className="inline-flex items-center gap-2 rounded-2xl bg-white/20 px-5 py-3 text-sm font-medium text-white backdrop-blur-xl ring-1 ring-white/25 transition hover:bg-white/30">
            <Rocket size={18} />
            Get Started
          </button>
          <a href="#features" className="rounded-2xl px-5 py-3 text-sm font-medium text-white/90 ring-1 ring-white/20 transition hover:bg-white/10 hover:text-white">
            Learn More
          </a>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-neutral-950 via-neutral-950/70 to-transparent" />
    </section>
  );
}
