import React from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      className="py-32 px-6 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"
    >
      <div className="mx-auto max-w-4xl rounded-[2rem] border border-slate-800 bg-slate-900/90 p-10 shadow-glow">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-sky-400">Contact</p>
          <h2 className="mt-4 text-5xl font-black text-white">Let’s build your next AI product.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-300">
            Drop a message and I’ll help you turn your idea into a polished software experience.
          </p>
        </div>

        <form className="mt-12 grid gap-6">
          <input type="text" placeholder="Your Name" className="w-full rounded-3xl border border-slate-800 bg-slate-950/90 px-5 py-4 text-slate-100 outline-none transition focus:border-sky-500" />
          <input type="email" placeholder="Your Email" className="w-full rounded-3xl border border-slate-800 bg-slate-950/90 px-5 py-4 text-slate-100 outline-none transition focus:border-sky-500" />
          <textarea rows="6" placeholder="Tell me about your project" className="w-full rounded-3xl border border-slate-800 bg-slate-950/90 px-5 py-4 text-slate-100 outline-none transition focus:border-sky-500" />
          <button type="submit" className="w-full rounded-full bg-sky-500 px-8 py-4 text-sm font-semibold text-slate-950 transition hover:bg-sky-400">
            Send Message
          </button>
        </form>
      </div>
    </motion.section>
  );
}
