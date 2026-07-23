'use client';

import { motion } from 'framer-motion';
import { githubStats } from '@/lib/data';
import { FADE_UP, STAGGER_CONTAINER } from '@/lib/constants';
import Image from 'next/image';
import { useInView } from '@/hooks/useInView';

const pinnedRepos = [
  {
    name: 'rag-document-agent',
    description: 'Autonomous multi-agent system for intelligent document retrieval, parsing, and reasoning using LangChain and vector databases.',
    tech: ['Python', 'LangChain', 'Pinecone', 'FastAPI'],
    stars: 12,
    forks: 3,
    url: 'https://github.com/Rupesh1819/rag-document-agent'
  },
  {
    name: 'phishing-detector-ml',
    description: 'High-accuracy machine learning pipeline that classifies malicious URLs using Random Forest and deep feature extraction.',
    tech: ['Scikit-learn', 'Pandas', 'Flask', 'React'],
    stars: 8,
    forks: 1,
    url: 'https://github.com/Rupesh1819/phishing-detector-ml'
  },
  {
    name: 'sentiment-analysis-lstm',
    description: 'Deep learning NLP model built with TensorFlow and Keras to accurately classify textual sentiment in real-time.',
    tech: ['TensorFlow', 'Keras', 'Python', 'NLTK'],
    stars: 5,
    forks: 0,
    url: 'https://github.com/Rupesh1819/sentiment-analysis-lstm'
  },
  {
    name: 'ai-clinic-management',
    description: 'Full-stack enterprise application for clinic management featuring AI-assisted diagnostics and scalable architecture.',
    tech: ['Next.js', 'Node.js', 'PostgreSQL', 'Tailwind'],
    stars: 4,
    forks: 1,
    url: 'https://github.com/Rupesh1819/ai-clinic-management'
  }
];

export default function GitHubActivity() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section id="github" className="relative py-24 sm:py-32 border-t border-white/5 bg-zinc-950/30">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          variants={STAGGER_CONTAINER}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-16 text-center"
        >
          <motion.div variants={FADE_UP} className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-white/10 mb-6">
            <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            <span className="text-xs font-mono font-medium text-white tracking-wide uppercase">Open Source</span>
          </motion.div>
          <motion.h2 variants={FADE_UP} className="text-4xl sm:text-5xl font-black tracking-tighter mb-4">
            GitHub Showcase
          </motion.h2>
          <motion.p variants={FADE_UP} className="text-lg text-[var(--foreground-muted)] font-mono max-w-2xl mx-auto">
            A curated selection of my pinned AI repositories and open-source engineering work.
          </motion.p>
        </motion.div>

        <motion.div 
          variants={STAGGER_CONTAINER}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-4 gap-8"
        >
          {/* Profile Card */}
          <motion.div variants={FADE_UP} className="lg:col-span-1 glass-panel p-8 rounded-3xl border border-white/10 flex flex-col justify-between h-full bg-zinc-900/50 hover:border-[var(--accent-cyan)]/30 transition-colors">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-full bg-zinc-800 border-2 border-[var(--accent-cyan)] overflow-hidden">
                  <Image src="/profile.png" alt="Rupesh Shete" width={64} height={64} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg">Rupesh1819</h3>
                  <p className="text-xs text-[var(--foreground-muted)] font-mono">AI Engineer</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-white/5 pb-4">
                  <span className="text-[var(--foreground-muted)] font-mono text-sm">Repositories</span>
                  <span className="text-xl font-bold text-white">{githubStats.publicRepos}</span>
                </div>
                <div className="flex items-center justify-between border-b border-white/5 pb-4">
                  <span className="text-[var(--foreground-muted)] font-mono text-sm">Total Stars</span>
                  <span className="text-xl font-bold text-[var(--accent-cyan)]">42+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[var(--foreground-muted)] font-mono text-sm">Followers</span>
                  <span className="text-xl font-bold text-[var(--accent-violet)]">15+</span>
                </div>
              </div>
            </div>
            
            <a href={githubStats.profileUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary w-full py-3 mt-8 flex justify-center items-center gap-2">
              <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              View Profile
            </a>
          </motion.div>

          {/* Pinned Repositories Grid */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
            {pinnedRepos.map((repo) => (
              <motion.a 
                key={repo.name}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={FADE_UP} 
                className="glass-panel p-6 rounded-2xl border border-white/5 hover:border-white/20 transition-all duration-300 flex flex-col h-full bg-zinc-950/40 group hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-start justify-between mb-4">
                    <h4 className="text-lg font-bold text-white group-hover:text-[var(--accent-cyan)] transition-colors break-all">
                      {repo.name}
                    </h4>
                    <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" className="text-[var(--foreground-muted)] group-hover:text-white transition-colors shrink-0 ml-2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                  </div>
                  <p className="text-sm text-[var(--foreground-muted)] mb-6 flex-grow leading-relaxed">
                    {repo.description}
                  </p>
                  
                  <div className="flex flex-col gap-4 mt-auto">
                    <div className="flex flex-wrap gap-2">
                      {repo.tech.map(t => (
                        <span key={t} className="text-[10px] px-2 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 font-mono">
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-4 text-xs font-mono text-[var(--foreground-muted)]">
                      <span className="flex items-center gap-1">
                        <svg viewBox="0 0 24 24" width="12" height="12" stroke="currentColor" strokeWidth="2" fill="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                        {repo.stars}
                      </span>
                      <span className="flex items-center gap-1">
                        <svg viewBox="0 0 24 24" width="12" height="12" stroke="currentColor" strokeWidth="2" fill="none"><circle cx="12" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><circle cx="18" cy="6" r="3"></circle><path d="M18 9v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V9"></path><path d="M12 12v3"></path></svg>
                        {repo.forks}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
        
        <motion.div variants={FADE_UP} className="mt-12 text-center">
           <a href={githubStats.profileUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-mono text-[var(--foreground-muted)] hover:text-white transition-colors group">
              View All Projects on GitHub
              <span className="group-hover:translate-x-1 transition-transform">→</span>
           </a>
        </motion.div>
      </div>
    </section>
  );
}
