import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'SLAM',
    subtitle: '2-D landmark detection tracking with SLAM',
    image: '/images/SLAM.png',
    link: 'https://github.com/OBigVee/Landmark-Detection-Tracking-SLAM-'
  },
  {
    title: 'AI Caption Generator',
    subtitle: 'Automatic image caption generator',
    image: '/images/cat.jpg',
    link: 'https://github.com/OBigVee/Images-Captions-Generator'
  },
  {
    title: 'Credit Worthiness',
    subtitle: 'Financial scoring using ML',
    image: '/images/ML.jpeg',
    link: 'https://github.com/OBigVee/-Microsoft-Professional-Program-for-Data-Science.capstone-project'
  },
  {
    title: 'Face Detection',
    subtitle: 'Facial keypoint extraction for face technology',
    image: '/images/face_.jpg',
    link: 'https://github.com/OBigVee/Facial-Keypoints-Detection'
  },
  {
    title: 'Staff Promotion',
    subtitle: 'Employee promotion prediction tool',
    image: '/images/staff.png',
    link: 'https://github.com/OBigVee/Staff-Promotion-Algorithim'
  },
  {
    title: 'NYSC CDS',
    subtitle: 'Community development service platform',
    image: '/images/new_2/vik_4.jpeg',
    link: '/images/new_2/vik4.jpg'
  },
  {
    title: 'AI IoT Smart Glass',
    subtitle: 'Wearable AI assistant for visually impaired users',
    image: '/images/iot-glassWare_.jpg',
    link: 'https://github.com/omosteven/iot-smart-glasses'
  }
];

export default function Projects() {
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      className="py-32 px-6 bg-slate-950"
    >
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-sky-400">Projects</p>
          <h2 className="mt-4 text-5xl font-black text-white">Featured work</h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <motion.a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -6 }}
              className="group overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-900/80 shadow-glow transition"
            >
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                <p className="mt-3 text-slate-400">{project.subtitle}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
