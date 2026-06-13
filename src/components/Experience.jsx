import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    company: 'Freelance',
    role: 'AI Engineer',
    year: '2023 - Present',
    description: 'Delivering AI products, automation workflows and ML model integrations for startups and businesses.'
  },
  {
    company: 'Software Projects',
    role: 'Full Stack Developer',
    year: '2020 - Present',
    description: 'Building scalable web applications and systems using modern JavaScript stacks.'
  }
];

export default function Experience() {
  return (
    <motion.section
      id="experience"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}   
      viewport={{ once: true, amount: 0.2 }}
      className="py-32 px-6 bg-slate-950"
    >
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-sky-400">Experience</p>
          <h2 className="mt-4 text-5xl font-black text-white">Where I have contributed</h2>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {experiences.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -6 }}
              className="rounded-[2rem] border border-slate-800 bg-slate-900/80 p-8 shadow-glow"
            >
              <p className="text-sm uppercase tracking-[0.35em] text-sky-400">{item.year}</p>
              <h3 className="mt-4 text-3xl font-bold text-white">{item.role}</h3>
              <p className="mt-2 text-slate-300">{item.company}</p>
              <p className="mt-5 text-slate-400">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
