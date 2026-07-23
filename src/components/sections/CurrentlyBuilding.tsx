'use client';

import { motion } from 'framer-motion';
import { FADE_UP, STAGGER_CONTAINER } from '@/lib/constants';
import { useInView } from '@/hooks/useInView';

const focusAreas = [
  {
    title: 'Advanced RAG Pipelines',
    desc: 'Exploring semantic chunking strategies, hybrid search (keyword + vector), and self-querying retrievers using LangChain and Pinecone.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>
    ),
    color: 'var(--accent-cyan)'
  },
  {
    title: 'Multi-Agent Frameworks',
    desc: 'Building autonomous agent workflows with CrewAI and LangGraph where specialized LLM roles collaborate to solve complex reasoning tasks.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
    ),
    color: 'var(--accent-violet)'
  },
  {
    title: 'Open Source LLM Fine-Tuning',
    desc: 'Experimenting with LoRA and QLoRA techniques to fine-tune local models (Llama 3, Mistral) for domain-specific tasks without massive compute.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
    ),
    color: '#F59E0B' // Amber
  }
];

export default function CurrentlyBuilding() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section className="relative py-20 border-t border-white/5 bg-zinc-950/30">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left Side: Text */}
          <motion.div 
            variants={STAGGER_CONTAINER}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="w-full lg:w-1/3 text-center lg:text-left"
          >
            <motion.div variants={FADE_UP} className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-[var(--accent-cyan)]/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-[var(--accent-cyan)] animate-pulse" />
              <span className="text-xs font-mono font-medium text-[var(--accent-cyan)] tracking-wide uppercase">Active Research</span>
            </motion.div>
            <motion.h2 variants={FADE_UP} className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-white">
              What I&apos;m building right now
            </motion.h2>
            <motion.p variants={FADE_UP} className="text-[var(--foreground-muted)] text-sm sm:text-base mb-6">
              I constantly explore the edge of AI engineering. Here are the core areas I&apos;m actively researching and building proof-of-concepts for this month.
            </motion.p>
          </motion.div>

          {/* Right Side: Grid */}
          <motion.div 
            variants={STAGGER_CONTAINER}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-4"
          >
            {focusAreas.map((area, idx) => (
              <motion.div 
                key={idx}
                variants={FADE_UP}
                className="glass-panel rounded-2xl p-6 border border-white/5 hover:border-white/10 transition-colors bg-zinc-950/50 flex flex-col"
              >
                <div 
                  className="w-10 h-10 rounded-xl mb-4 flex items-center justify-center bg-white/5 border border-white/5"
                  style={{ color: area.color }}
                >
                  {area.icon}
                </div>
                <h3 className="text-white font-bold mb-2">{area.title}</h3>
                <p className="text-[var(--foreground-muted)] text-xs leading-relaxed flex-grow">
                  {area.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
