'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { projects } from '@/lib/data';
import { FADE_UP, STAGGER_CONTAINER } from '@/lib/constants';
import { useInView } from '@/hooks/useInView';

export default function Projects() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section id="projects" className="relative py-24 sm:py-32 border-t border-white/5">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          variants={STAGGER_CONTAINER}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-16"
        >
          <motion.h2 variants={FADE_UP} className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            <span className="text-[var(--accent-cyan)] opacity-50 mr-2">/</span>
            Case Studies
          </motion.h2>
          <motion.p variants={FADE_UP} className="text-[var(--foreground-muted)] font-mono max-w-2xl">
            A selection of intelligent systems, machine learning models, and full-stack applications built for production.
          </motion.p>
        </motion.div>

        <motion.div 
          variants={STAGGER_CONTAINER}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col gap-24 mb-32"
        >
          {projects.filter(p => p.featured).map((project, index) => (
            <motion.div 
              key={project.id}
              variants={FADE_UP}
              className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-16 items-center`}
            >
              {/* Project Visual Mockup */}
              <div className="w-full lg:w-3/5 group">
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden glass-panel border border-white/10 shadow-2xl transition-transform duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_20px_50px_rgba(0,112,243,0.15)] bg-zinc-900">
                  {/* Fake Browser Bar */}
                  <div className="absolute top-0 left-0 right-0 h-8 bg-zinc-950/80 backdrop-blur-md border-b border-white/10 z-20 flex items-center px-4 gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                  </div>
                  <div className="w-full h-full pt-8 relative">
                    {project.image ? (
                      <Image 
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 1024px) 100vw, 60vw"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center">
                        <span className="text-white/20 font-mono text-sm">Image Pending</span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="w-full lg:w-2/5 flex flex-col justify-center">
                <div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[var(--accent-cyan)] mb-4 w-fit">
                  Featured Case Study
                </div>
                <h3 className="text-3xl sm:text-4xl font-bold text-white mb-2 tracking-tight group-hover:text-[var(--accent-cyan)] transition-colors">
                  {project.title}
                </h3>
                <p className="text-[var(--accent-violet)] font-mono text-sm mb-6">
                  {project.subtitle}
                </p>
                
                <p className="text-[var(--foreground-muted)] text-base mb-8 leading-relaxed">
                  {project.solution}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.techStack.map(tech => (
                    <span key={tech} className="text-xs px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-white/60 font-mono">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4 mt-auto">
                  <Link href={`/projects/${project.id}`} className="btn-primary text-sm px-6 py-2.5">
                    View Case Study
                  </Link>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-secondary flex items-center gap-2 text-sm px-6 py-2.5">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Personal & Research Projects Grid ── */}
        <motion.div
          variants={STAGGER_CONTAINER}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-24 pt-16 border-t border-white/5"
        >
          <div className="mb-12 text-center">
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">Personal AI Projects & Research</h3>
            <p className="text-[var(--foreground-muted)] font-mono max-w-2xl mx-auto">
              A collection of applied research, machine learning experiments, and learning projects exploring various AI domains.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.filter(p => !p.featured).map((project) => (
              <motion.div
                key={project.id}
                variants={FADE_UP}
                className="glass-panel rounded-2xl p-6 border border-white/5 hover:border-white/20 transition-all duration-300 flex flex-col group bg-zinc-950/30"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[var(--accent-cyan)]/10 text-[var(--accent-cyan)] flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
                  </div>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                  </a>
                </div>
                
                <h4 className="text-lg font-bold text-white mb-2 group-hover:text-[var(--accent-cyan)] transition-colors">{project.title}</h4>
                <p className="text-xs font-mono text-[var(--accent-violet)] mb-4">{project.subtitle}</p>
                <p className="text-sm text-[var(--foreground-muted)] mb-6 flex-grow">{project.solution}</p>
                
                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/5">
                  {project.techStack.slice(0, 4).map(tech => (
                    <span key={tech} className="text-[10px] px-2 py-1 rounded bg-white/5 text-white/50 font-mono">
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="text-[10px] px-2 py-1 rounded bg-white/5 text-white/50 font-mono">+{project.techStack.length - 4}</span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
