'use client';

import { motion } from 'framer-motion';
import { experiences } from '@/lib/data';
import { FADE_UP, STAGGER_CONTAINER, ANIMATION } from '@/lib/constants';
import { useInView } from '@/hooks/useInView';

export default function Experience() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section id="experience" className="relative py-24 sm:py-32 border-t border-white/5">
      <div ref={ref} className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          variants={STAGGER_CONTAINER}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-16 text-center"
        >
          <motion.h2 variants={FADE_UP} className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Experience & Education
          </motion.h2>
          <motion.p variants={FADE_UP} className="text-[var(--foreground-muted)] font-mono">
            My professional path in Artificial Intelligence and Software Engineering.
          </motion.p>
        </motion.div>

        {/* Vertical Timeline */}
        <div className="relative">
          {/* Central Line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.5, ease: ANIMATION.ease }}
            className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--accent-cyan)] via-[var(--accent-violet)] to-transparent origin-top"
          />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1, ease: ANIMATION.ease }}
                className={`relative flex flex-col md:flex-row gap-8 md:gap-0 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                
                {/* Center Dot */}
                <div className="absolute left-[20px] md:left-1/2 w-3 h-3 rounded-full bg-[var(--background)] border-2 border-[var(--accent-cyan)] -translate-x-[5px] md:-translate-x-1/2 mt-6 md:mt-8 z-10 shadow-[0_0_10px_var(--accent-cyan)]" />

                {/* Content Card */}
                <div className={`pl-12 md:pl-0 md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                  <div className="glass-panel p-6 rounded-2xl group hover:-translate-y-1 transition-transform duration-300">
                    
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                      <div className="flex items-center gap-3 mb-2 sm:mb-0">
                        <span className={`flex items-center justify-center w-8 h-8 rounded-full ${exp.type === 'work' ? 'bg-[var(--accent-cyan)]/10 text-[var(--accent-cyan)]' : 'bg-[var(--accent-violet)]/10 text-[var(--accent-violet)]'}`}>
                          {exp.type === 'work' ? (
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
                          ) : (
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>
                          )}
                        </span>
                        <span className={`text-xs font-mono font-bold tracking-widest uppercase ${exp.type === 'work' ? 'text-[var(--accent-cyan)]' : 'text-[var(--accent-violet)]'}`}>
                          {exp.type === 'work' ? 'Experience' : 'Education'}
                        </span>
                      </div>
                      <span className="text-sm font-mono text-white/50 bg-white/5 px-3 py-1 rounded-full border border-white/5">
                        {exp.startDate} — {exp.endDate}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                    <p className="text-[var(--accent-cyan)] font-medium mb-4">{exp.company} <span className="text-[var(--foreground-muted)] text-sm ml-1">• {exp.location}</span></p>
                    
                    <p className="text-[var(--foreground-muted)] text-sm mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    {exp.techStack && exp.techStack.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-auto pt-5 border-t border-white/5">
                        {exp.techStack.map(tech => (
                          <span key={tech} className="text-[10px] sm:text-xs px-2.5 py-1 rounded-md bg-zinc-900/50 border border-white/10 text-[var(--foreground-muted)] font-mono group-hover:border-white/20 transition-colors">
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
