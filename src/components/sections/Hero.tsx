'use client';

import { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useMotionTemplate } from 'framer-motion';
import Image from 'next/image';
import { portfolioData, heroAchievements } from '@/lib/data';
import { FADE_UP, STAGGER_CONTAINER, ANIMATION } from '@/lib/constants';

export default function Hero() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const smoothX = useSpring(mouseX, { stiffness: 300, damping: 30 });
  const smoothY = useSpring(mouseY, { stiffness: 300, damping: 30 });
  
  const spotlightBg = useMotionTemplate`radial-gradient(circle 300px at ${smoothX}px ${smoothY}px, rgba(255,255,255,0.15), transparent 80%)`;
  const colorMask = useMotionTemplate`radial-gradient(circle 300px at ${smoothX}px ${smoothY}px, rgba(0,0,0,1) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0) 100%)`;

  return (
    <section className="relative pt-32 pb-16 md:pt-48 md:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Two-Column Layout */}
        <div className="flex flex-col xl:flex-row gap-16 lg:gap-12 items-center xl:items-start justify-between">
          
          {/* Left Column: Text & CTAs */}
          <motion.div
            variants={STAGGER_CONTAINER}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start text-left w-full xl:w-[55%] z-20"
          >
            {/* Name & Title */}
            <motion.div variants={FADE_UP} className="mb-8">
              <h1 className="text-5xl sm:text-7xl md:text-8xl font-black text-white tracking-tighter mb-6 drop-shadow-2xl">
                {'Rupesh Shete'.split(' ').map((word, i) => (
                  <span key={i} className="block xl:inline mr-4 last:mr-0 xl:mr-6">{word}</span>
                ))}
              </h1>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 text-xl sm:text-2xl text-[var(--accent-cyan)] font-mono font-medium">
                <span>{portfolioData.role.split('|')[0].trim()}</span>
                <span className="hidden sm:block text-white/20">|</span>
                <span>{portfolioData.role.split('|')[1].trim()}</span>
              </div>
            </motion.div>

            <motion.p 
              variants={FADE_UP}
              className="text-lg sm:text-xl text-[var(--foreground-muted)] max-w-xl mb-10 leading-relaxed font-sans"
            >
              {portfolioData.tagline}
            </motion.p>

            {/* CTAs */}
            <motion.div variants={FADE_UP} className="flex flex-wrap gap-6 mb-16 relative z-20">
              <a href="#projects" className="btn-primary px-8 py-4 text-lg font-bold">
                View Case Studies
              </a>
              <a href="#contact" className="btn-secondary px-8 py-4 text-lg font-bold">
                Contact Me
              </a>
            </motion.div>

            {/* Categorized Technologies */}
            <motion.div variants={FADE_UP} className="pt-10 border-t border-white/5 relative z-10 w-full">
              <p className="text-xs font-mono text-[var(--foreground-muted)] uppercase tracking-[0.2em] mb-6">Core Focus Areas</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div>
                  <h4 className="text-[var(--accent-cyan)] font-mono text-xs mb-3">AI / Machine Learning</h4>
                  <div className="flex flex-wrap gap-2">
                    {['TensorFlow', 'PyTorch', 'Scikit-learn', 'NLP', 'CV'].map(tech => (
                      <span key={tech} className="text-xs px-2.5 py-1 rounded bg-white/5 border border-white/5 text-white/70 font-mono">{tech}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-[var(--accent-violet)] font-mono text-xs mb-3">Generative AI / LLMs</h4>
                  <div className="flex flex-wrap gap-2">
                    {['LangChain', 'CrewAI', 'RAG', 'Vector DBs', 'Ollama'].map(tech => (
                      <span key={tech} className="text-xs px-2.5 py-1 rounded bg-white/5 border border-white/5 text-white/70 font-mono">{tech}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-amber-400 font-mono text-xs mb-3">Backend / Architecture</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Python', 'FastAPI', 'Node.js', 'Next.js', 'Docker'].map(tech => (
                      <span key={tech} className="text-xs px-2.5 py-1 rounded bg-white/5 border border-white/5 text-white/70 font-mono">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Premium Portrait Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full xl:w-[40%] relative flex justify-center items-center mt-8 xl:mt-0 z-10"
          >
            {/* Background Neural Network SVG */}
            <motion.div 
              className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none"
              animate={{ opacity: isHovered ? 0.6 : 0.2 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <svg viewBox="0 0 400 400" className="w-[150%] h-[150%] max-w-[800px] animate-[spin_100s_linear_infinite]">
                <defs>
                  <radialGradient id="glow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="var(--accent-cyan)" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="transparent" stopOpacity="0" />
                  </radialGradient>
                </defs>
                <circle cx="200" cy="200" r="180" fill="url(#glow)" />
                <path d="M100,100 L200,50 L300,100 L350,200 L300,300 L200,350 L100,300 L50,200 Z" fill="none" stroke="var(--accent-cyan)" strokeWidth="0.5" strokeDasharray="4 4" className="animate-pulse" />
                <path d="M100,100 L300,300 M300,100 L100,300 M200,50 L200,350 M50,200 L350,200" fill="none" stroke="var(--accent-violet)" strokeWidth="0.5" opacity="0.5" />
                {[
                  [100, 100], [200, 50], [300, 100], [350, 200], [300, 300], [200, 350], [100, 300], [50, 200], [200, 200]
                ].map((pos, i) => (
                  <circle key={i} cx={pos[0]} cy={pos[1]} r="4" fill="var(--accent-cyan)" className="animate-pulse" style={{ animationDelay: `${i * 200}ms` }} />
                ))}
              </svg>
            </motion.div>
            
            {/* Interactive Portrait Card */}
            <motion.div 
              ref={cardRef}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onMouseMove={handleMouseMove}
              className="relative w-full max-w-[420px] h-[540px] xl:max-w-[480px] xl:h-[620px] rounded-[32px] overflow-hidden bg-zinc-950/80 backdrop-blur-md mx-auto z-20 cursor-crosshair border border-white/5"
              animate={{ 
                boxShadow: isHovered 
                  ? "0 40px 100px -20px rgba(0, 112, 243, 0.4), 0 0 40px rgba(0, 112, 243, 0.1) inset" 
                  : "0 20px 60px -20px rgba(0, 0, 0, 0.8), 0 0 0px rgba(0, 112, 243, 0) inset",
                borderColor: isHovered ? "rgba(0, 112, 243, 0.4)" : "rgba(255, 255, 255, 0.1)",
                backgroundColor: isHovered ? "rgba(24, 24, 27, 0.6)" : "rgba(9, 9, 11, 0.8)",
              }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              {/* Base Grayscale Image */}
              <motion.div 
                className="absolute inset-0 w-full h-full origin-center"
                animate={{
                  scale: isHovered ? 1.03 : 1,
                  filter: isHovered 
                    ? "grayscale(0%) brightness(1) saturate(1.2) contrast(1.05)"
                    : "grayscale(100%) brightness(0.92) saturate(0) contrast(1.05)"
                }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                <Image 
                  src="/profile.png"
                  alt={portfolioData.name}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1280px) 420px, 480px"
                />
              </motion.div>

              {/* Localized Spotlight Reveal (Masked Color) */}
              <motion.div 
                className="absolute inset-0 w-full h-full origin-center"
                style={{
                  WebkitMaskImage: isHovered ? colorMask : "none",
                  maskImage: isHovered ? colorMask : "none",
                  opacity: isHovered ? 1 : 0
                }}
                animate={{
                  scale: isHovered ? 1.03 : 1,
                  filter: "grayscale(0%) brightness(1.1) saturate(1.4) contrast(1.1)"
                }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                <Image 
                  src="/profile.png"
                  alt={portfolioData.name}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1280px) 420px, 480px"
                />
              </motion.div>

              {/* Cursor Spotlight Overlay (Lighting) */}
              <motion.div
                className="absolute inset-0 z-10 pointer-events-none mix-blend-overlay"
                style={{ background: spotlightBg }}
                animate={{ opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
              
              {/* Card Gloss & Gradients */}
              <div className="absolute inset-0 rounded-[32px] ring-1 ring-inset ring-white/10 pointer-events-none z-20" />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/20 to-transparent pointer-events-none z-10" />
            </motion.div>
          </motion.div>
        </div>

        {/* Achievements Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: ANIMATION.ease }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-24"
        >
          {heroAchievements.map((item, i) => (
            <div key={i} className="glass-panel rounded-2xl p-6 flex flex-col justify-center items-center text-center">
              <span className="text-3xl font-bold text-white mb-2 font-mono">{item.value}</span>
              <span className="text-xs text-[var(--foreground-muted)] uppercase tracking-wider">{item.label}</span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
