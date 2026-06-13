import React from 'react';
import { motion } from 'framer-motion';

const services = [
  'AI Solutions',
  'Machine Learning Models',
  'Computer Vision Systems',
  'Web Application Development',
  'Technical Consulting',
  'AI Agent Development'
];

export default function Services() {
  return (
    <motion.section
      id="services"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      className="py-32 px-6"
    >
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-sky-400">Services</p>
          <h2 className="mt-4 text-5xl font-black text-white">What I can do for your team</h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(service => (
            <motion.div
              key={service}
              whileHover={{ y: -8, scale: 1.02 }}
              className="rounded-[2rem] border border-slate-800 bg-slate-900/80 p-8 shadow-glow"
            >
              <h3 className="text-xl font-semibold text-white">{service}</h3>
              <p className="mt-4 text-slate-400">Create intelligent, polished solutions that work at scale.</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
