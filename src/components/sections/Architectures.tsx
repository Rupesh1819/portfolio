'use client';

import { motion } from 'framer-motion';
import { architectures } from '@/lib/data';
import { FADE_UP, STAGGER_CONTAINER } from '@/lib/constants';
import { useInView } from '@/hooks/useInView';

// Custom Diagram Renderer based on type
const renderDiagram = (type: string) => {
  switch (type) {
    case 'Data Flow':
      return (
        <div className="relative z-10 flex flex-col w-full px-4 opacity-70 group-hover:opacity-100 transition-opacity duration-500 items-center justify-center gap-2">
          <div className="flex gap-4 items-center w-full justify-center">
            <div className="h-10 w-12 rounded bg-zinc-800 border border-zinc-600 flex items-center justify-center text-[8px] font-mono">Doc</div>
            <div className="w-6 h-px bg-[var(--accent-cyan)] relative"><div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 border-t border-r border-[var(--accent-cyan)] rotate-45" /></div>
            <div className="h-12 w-16 rounded-lg bg-[var(--accent-violet)]/20 border border-[var(--accent-violet)]/50 flex items-center justify-center text-[10px] text-[var(--accent-violet)]">Chunk</div>
            <div className="w-6 h-px bg-[var(--accent-cyan)] relative"><div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 border-t border-r border-[var(--accent-cyan)] rotate-45" /></div>
            <div className="h-16 w-16 rounded-full bg-[var(--accent-cyan)]/20 border border-[var(--accent-cyan)] flex items-center justify-center text-xs font-bold text-[var(--accent-cyan)] shadow-[0_0_15px_rgba(0,112,243,0.3)] flex-col gap-1">
              <span className="text-[8px]">Vector</span>DB
            </div>
          </div>
          <div className="w-px h-6 bg-[var(--accent-cyan)] relative"><div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 border-b border-r border-[var(--accent-cyan)] rotate-45" /></div>
          <div className="h-8 w-32 rounded bg-white/10 border border-white/20 flex items-center justify-center text-[10px] font-mono">LLM Generation</div>
        </div>
      );
    case 'Agentic':
      return (
        <div className="relative z-10 flex w-full h-full opacity-70 group-hover:opacity-100 transition-opacity duration-500 items-center justify-center">
          <div className="relative w-32 h-32 animate-[spin_20s_linear_infinite]">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[var(--accent-cyan)]/20 border border-[var(--accent-cyan)] flex items-center justify-center text-[8px]">Plan</div>
            <div className="absolute bottom-4 left-0 w-8 h-8 rounded-full bg-[var(--accent-violet)]/20 border border-[var(--accent-violet)] flex items-center justify-center text-[8px]">Exe</div>
            <div className="absolute bottom-4 right-0 w-8 h-8 rounded-full bg-amber-500/20 border border-amber-500 flex items-center justify-center text-[8px]">Rev</div>
            <svg className="absolute inset-0 w-full h-full -z-10"><path d="M64,16 L24,100 L104,100 Z" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="2 2"/></svg>
          </div>
          <div className="absolute w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold shadow-[0_0_20px_rgba(255,255,255,0.1)]">State</div>
        </div>
      );
    case 'ML Pipeline':
      return (
        <div className="relative z-10 flex items-center gap-2 w-full px-2 opacity-70 group-hover:opacity-100 transition-opacity duration-500 justify-center">
          {['Data', 'Feat', 'Train', 'Eval', 'Deploy'].map((step, i) => (
            <div key={step} className="flex items-center gap-2">
              <div className="h-12 w-12 rounded bg-zinc-800/80 border border-zinc-600 flex items-center justify-center text-[9px] font-mono uppercase tracking-tighter">{step}</div>
              {i < 4 && <div className="w-3 h-px bg-white/30" />}
            </div>
          ))}
        </div>
      );
    case 'Deep Learning':
      return (
        <div className="relative z-10 flex w-full h-full opacity-70 group-hover:opacity-100 transition-opacity duration-500 items-center justify-center gap-6">
          <div className="flex flex-col gap-2">
            {[1,2,3].map(i => <div key={i} className="w-3 h-3 rounded-full bg-[var(--accent-cyan)]/50" />)}
          </div>
          <div className="flex flex-col gap-4">
            {[1,2,3,4].map(i => <div key={i} className="w-4 h-4 rounded-full bg-[var(--accent-violet)]/60 shadow-[0_0_10px_rgba(138,43,226,0.3)]" />)}
          </div>
          <div className="flex flex-col gap-2">
            {[1,2,3].map(i => <div key={i} className="w-3 h-3 rounded-full bg-[var(--accent-cyan)]/50" />)}
          </div>
          <div className="flex flex-col gap-1">
            <div className="w-4 h-4 rounded-full bg-white/80" />
          </div>
        </div>
      );
    case 'Full-Stack':
      return (
        <div className="relative z-10 flex flex-col w-full opacity-70 group-hover:opacity-100 transition-opacity duration-500 items-center justify-center gap-4">
          <div className="w-40 h-8 rounded-t-lg bg-zinc-800 border border-zinc-600 flex items-center px-2 gap-1">
            <div className="w-2 h-2 rounded-full bg-red-400" /><div className="w-2 h-2 rounded-full bg-yellow-400" /><div className="w-2 h-2 rounded-full bg-green-400" />
            <span className="text-[8px] font-mono ml-2 text-white/50">Client UI</span>
          </div>
          <div className="w-px h-4 bg-white/30 animate-pulse" />
          <div className="w-32 h-8 rounded bg-[var(--accent-violet)]/20 border border-[var(--accent-violet)] flex items-center justify-center text-[10px] font-mono text-[var(--accent-violet)]">REST API</div>
          <div className="w-px h-4 bg-white/30 animate-pulse" />
          <div className="w-24 h-10 rounded-b-xl rounded-t-sm bg-[var(--accent-cyan)]/20 border-b-4 border-[var(--accent-cyan)] flex items-center justify-center text-[10px] font-mono text-[var(--accent-cyan)]">Database</div>
        </div>
      );
    case 'Infrastructure':
    default:
      return (
        <div className="relative z-10 flex items-center gap-4 w-full px-6 opacity-70 group-hover:opacity-100 transition-opacity duration-500">
          <div className="flex-1 h-20 rounded-xl bg-[var(--accent-violet)]/10 border border-[var(--accent-violet)]/20 flex flex-col items-center justify-center relative shadow-[0_0_15px_rgba(138,43,226,0.1)]">
            <div className="text-[8px] font-mono text-[var(--accent-violet)] uppercase">Input</div>
          </div>
          <div className="w-8 h-px bg-gradient-to-r from-[var(--accent-violet)]/50 to-[var(--accent-cyan)]/50" />
          <div className="flex-1 h-24 rounded-xl bg-[var(--accent-cyan)]/10 border border-[var(--accent-cyan)]/30 flex flex-col items-center justify-center relative shadow-[0_0_20px_rgba(0,112,243,0.15)] group-hover:scale-105 transition-transform duration-500">
            <div className="text-[10px] font-mono font-bold text-[var(--accent-cyan)] uppercase">Process</div>
          </div>
          <div className="w-8 h-px bg-gradient-to-r from-[var(--accent-cyan)]/50 to-white/30" />
          <div className="flex-1 h-20 rounded-xl bg-white/5 border border-white/10 flex flex-col items-center justify-center relative">
            <div className="text-[8px] font-mono text-white/50 uppercase">Output</div>
          </div>
        </div>
      );
  }
};

export default function Architectures() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section id="architectures" className="relative py-24 sm:py-32 border-t border-white/5">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          variants={STAGGER_CONTAINER}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-16 text-center"
        >
          <motion.div variants={FADE_UP} className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-[var(--accent-cyan)]/20 mb-6">
            <span className="text-xs font-mono font-medium text-[var(--accent-cyan)] tracking-wide uppercase">System Design</span>
          </motion.div>
          <motion.h2 variants={FADE_UP} className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter mb-6 text-white drop-shadow-lg">
            AI Architectures
          </motion.h2>
          <motion.p variants={FADE_UP} className="text-lg text-[var(--foreground-muted)] font-mono max-w-2xl mx-auto">
            A showcase of production-ready AI pipelines, multi-agent systems, and highly scalable distributed architectures.
          </motion.p>
        </motion.div>

        <motion.div 
          variants={STAGGER_CONTAINER}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {architectures.map((arch) => (
            <motion.div
              key={arch.title}
              variants={FADE_UP}
              className="glass-panel rounded-3xl p-8 border border-white/10 relative overflow-hidden group hover:border-[var(--accent-cyan)]/30 transition-all duration-500 hover:shadow-[0_0_40px_rgba(0,112,243,0.1)] flex flex-col h-full bg-zinc-950/40"
            >
              {/* Architecture Type Badge */}
              <div className="absolute top-8 right-8 z-20">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-white/5 text-white/50 border border-white/10 group-hover:text-[var(--accent-cyan)] group-hover:border-[var(--accent-cyan)]/30 transition-colors">
                  {arch.type}
                </span>
              </div>

              {/* Title & Description */}
              <div className="relative z-20 mb-8 pr-24">
                <h3 className="text-2xl font-bold text-white mb-3 tracking-tight group-hover:text-[var(--accent-cyan)] transition-colors duration-300">
                  {arch.title}
                </h3>
                <p className="text-sm text-[var(--foreground-muted)] leading-relaxed h-16">
                  {arch.description}
                </p>
              </div>

              {/* Mock Architecture Diagram */}
              <div className="relative w-full h-56 rounded-2xl bg-zinc-900/50 border border-white/5 mb-8 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-10" />
                {renderDiagram(arch.type)}
              </div>

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {arch.techStack.map(tech => (
                  <span key={tech} className="text-xs px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[var(--foreground-muted)] font-mono group-hover:border-white/20 transition-colors">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
