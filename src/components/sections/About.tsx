'use client';

import { motion } from 'framer-motion';
import { portfolioData, currentlyLearning, whatImBuildingNow } from '@/lib/data';
import { FADE_UP, STAGGER_CONTAINER } from '@/lib/constants';
import { useInView } from '@/hooks/useInView';

export default function About() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section id="about" className="relative py-24 sm:py-32 border-t border-white/5">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          variants={STAGGER_CONTAINER}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16"
        >
          {/* Left Column: Narrative */}
          <div className="lg:col-span-7">
            <motion.h2 variants={FADE_UP} className="text-3xl sm:text-4xl font-bold tracking-tight mb-8">
              <span className="text-[var(--accent-cyan)] opacity-50 mr-2">/</span>
              The Journey
            </motion.h2>
            
            <motion.div variants={FADE_UP} className="space-y-6 text-lg text-[var(--foreground-muted)] leading-relaxed font-sans">
              <p>{portfolioData.about}</p>
              
              <div className="pt-6 border-t border-white/5 mt-8">
                <h3 className="text-white font-mono text-xl mb-4 font-bold">The Mission</h3>
                <p>{portfolioData.mission}</p>
              </div>

              <div className="pt-6 border-t border-white/5 mt-8">
                <h3 className="text-white font-mono text-xl mb-4 font-bold">The Vision</h3>
                <p>{portfolioData.vision}</p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Current Focus & Learning */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* What I'm Building Now */}
            <motion.div variants={FADE_UP} className="glass-panel p-8 rounded-3xl">
              <h3 className="text-xl font-bold text-white mb-6 font-mono flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[var(--accent-cyan)] animate-pulse" />
                What I&apos;m Building Now
              </h3>
              <ul className="space-y-4">
                {whatImBuildingNow.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[var(--foreground-muted)]">
                    <svg className="w-5 h-5 text-[var(--accent-cyan)] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Currently Learning */}
            <motion.div variants={FADE_UP} className="glass-panel p-8 rounded-3xl">
              <h3 className="text-xl font-bold text-white mb-6 font-mono flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[var(--accent-violet)]" />
                Currently Learning
              </h3>
              <div className="flex flex-wrap gap-2">
                {currentlyLearning.map((item, i) => (
                  <span key={i} className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-[var(--foreground-muted)]">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
