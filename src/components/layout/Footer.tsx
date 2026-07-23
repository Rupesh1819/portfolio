'use client';

import { portfolioData, githubStats } from '@/lib/data';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-zinc-950 overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[var(--accent-cyan)]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8 items-start mb-16">
          
          {/* Brand Info */}
          <div className="md:col-span-1">
            <h2 className="text-2xl font-black text-white tracking-tighter mb-4">
              {portfolioData.name.split(' ')[0]}
              <span className="text-[var(--accent-cyan)]">.</span>
            </h2>
            <p className="text-[var(--foreground-muted)] font-mono text-sm mb-6 max-w-xs">
              {portfolioData.vision}
            </p>
            <p className="text-white/40 text-xs font-mono uppercase tracking-widest">
              Based in {portfolioData.location}
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-3">
            <h3 className="text-white font-bold mb-2">Navigation</h3>
            <a href="#about" className="text-[var(--foreground-muted)] hover:text-white transition-colors text-sm w-fit">About</a>
            <a href="#architectures" className="text-[var(--foreground-muted)] hover:text-white transition-colors text-sm w-fit">Architectures</a>
            <a href="#projects" className="text-[var(--foreground-muted)] hover:text-white transition-colors text-sm w-fit">Case Studies</a>
            <a href="#github" className="text-[var(--foreground-muted)] hover:text-white transition-colors text-sm w-fit">Open Source</a>
          </div>

          {/* Connect */}
          <div className="flex flex-col gap-3">
            <h3 className="text-white font-bold mb-2">Connect</h3>
            <a href="https://www.linkedin.com/in/rupesh-shete-b12a83313/" target="_blank" rel="noopener noreferrer" className="text-[var(--foreground-muted)] hover:text-[var(--accent-cyan)] transition-colors text-sm flex items-center gap-2 w-fit">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              LinkedIn
            </a>
            <a href={githubStats.profileUrl} target="_blank" rel="noopener noreferrer" className="text-[var(--foreground-muted)] hover:text-[var(--accent-cyan)] transition-colors text-sm flex items-center gap-2 w-fit">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              GitHub
            </a>
            <a href={`mailto:${portfolioData.email}`} className="text-[var(--foreground-muted)] hover:text-[var(--accent-cyan)] transition-colors text-sm flex items-center gap-2 w-fit">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              Email
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[var(--foreground-muted)] text-sm">
            © {currentYear} {portfolioData.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-xs text-white/40 font-mono">
            <span>Architected with Next.js & Framer Motion</span>
            <span className="w-1 h-1 rounded-full bg-[var(--accent-cyan)] animate-pulse" />
          </div>
        </div>
      </div>
    </footer>
  );
}
