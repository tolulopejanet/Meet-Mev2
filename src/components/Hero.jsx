import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <motion.section
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.9 }}
      className="min-h-[80vh] overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 px-6 py-24"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-12 lg:flex-row lg:items-center">
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="space-y-8 text-center lg:text-left"
        >
          <p className="inline-flex rounded-full border border-slate-600 bg-slate-900/70 px-4 py-2 text-sm uppercase tracking-[0.32em] text-sky-300">
            Software Engineer • AI Engineer
          </p>
          <h1 className="text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
            Victor Adedeji
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
            I design and ship AI-driven software, intelligent systems, and polished web products for startups and teams that need practical innovation.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
            <a href="#projects" className="inline-flex items-center justify-center rounded-full bg-sky-500 px-8 py-4 text-sm font-semibold text-slate-950 shadow-xl shadow-sky-500/25 transition hover:bg-sky-400">
              View Projects
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900/80 px-8 py-4 text-sm font-semibold text-slate-200 transition hover:border-sky-500 hover:text-white">
              Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ x: 40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="mx-auto w-full max-w-xl overflow-hidden rounded-[2rem] border border-slate-700 bg-slate-900/80 shadow-glow"
        >
          <img src="/images/new_1/vic10.jpg" alt="Victor Adedeji" className="h-64 sm:h-80 lg:h-full w-full object-cover" />
        </motion.div>
      </div>
    </motion.section>
  );
}
