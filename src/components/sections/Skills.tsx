'use client';

import { motion } from 'framer-motion';
import { skillGroups } from '@/lib/data';
import { FADE_UP, STAGGER_CONTAINER } from '@/lib/constants';
import { useInView } from '@/hooks/useInView';

// Deterministic proficiency generator (3 to 5 stars/dots) based on string
const getProficiency = (skill: string) => {
  let hash = 0;
  for (let i = 0; i < skill.length; i++) {
    hash = skill.charCodeAt(i) + ((hash << 5) - hash);
  }
  return (Math.abs(hash) % 3) + 3;
};

export default function Skills() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section id="skills" className="relative py-24 sm:py-32 border-t border-white/5">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          variants={STAGGER_CONTAINER}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-16 text-center"
        >
          <motion.h2 variants={FADE_UP} className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Technical Arsenal
          </motion.h2>
          <motion.p variants={FADE_UP} className="text-[var(--foreground-muted)] font-mono max-w-2xl mx-auto">
            Comprehensive skill matrix spanning from deep learning architectures to robust frontend interfaces.
          </motion.p>
        </motion.div>

        <motion.div 
          variants={STAGGER_CONTAINER}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6"
        >
          {skillGroups.map((group) => (
            <motion.div 
              key={group.label}
              variants={FADE_UP}
              className="break-inside-avoid glass-panel rounded-2xl p-6 border border-white/5 hover:border-white/20 transition-all duration-300 bg-zinc-950/40 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <h3 className="text-lg font-bold text-white mb-6 relative z-10 flex items-center justify-between">
                {group.label}
                <span className="text-xs font-mono text-[var(--foreground-muted)] font-normal">{group.skills.length} skills</span>
              </h3>
              
              <div className="flex flex-col gap-3 relative z-10">
                {group.skills.map(skill => {
                  const level = getProficiency(skill.name);
                  return (
                    <div key={skill.name} className="flex items-center justify-between group/skill">
                      <span className="text-sm text-[var(--foreground-muted)] group-hover/skill:text-white transition-colors cursor-default">
                        {skill.name}
                      </span>
                      <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((dot) => (
                          <div 
                            key={dot} 
                            className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${dot <= level ? 'bg-[var(--accent-cyan)] group-hover/skill:shadow-[0_0_8px_rgba(0,112,243,0.8)]' : 'bg-white/10'}`} 
                          />
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
