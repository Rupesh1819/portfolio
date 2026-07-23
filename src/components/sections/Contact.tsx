'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { githubStats } from '@/lib/data';
import { FADE_UP, STAGGER_CONTAINER } from '@/lib/constants';
import { useInView } from '@/hooks/useInView';

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
  honeypot: string;
};

export default function Contact() {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setSubmitStatus('success');
        reset();
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 border-t border-white/5">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          variants={STAGGER_CONTAINER}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"
        >
          {/* Left Column: Contact Form */}
          <div>
            <motion.div variants={FADE_UP} className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-[var(--accent-cyan)]/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-[var(--accent-cyan)] animate-pulse" />
              <span className="text-xs font-mono font-medium text-[var(--accent-cyan)] tracking-wide uppercase">
                Open to Opportunities
              </span>
            </motion.div>

            <motion.h2 variants={FADE_UP} className="text-4xl sm:text-5xl font-bold tracking-tighter mb-6">
              Let&apos;s build something <span className="text-gradient-accent">extraordinary.</span>
            </motion.h2>
            
            <motion.p variants={FADE_UP} className="text-lg text-[var(--foreground-muted)] mb-8">
              Whether you need to architect a production RAG pipeline, build autonomous AI agents, or scale a full-stack system, I&apos;m ready to engineer the solution.
            </motion.p>

            <motion.form variants={FADE_UP} onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {/* Honeypot hidden field */}
              <input type="text" {...register('honeypot')} className="hidden" tabIndex={-1} autoComplete="off" />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label htmlFor="name" className="text-sm font-medium text-white/80">Name</label>
                  <input 
                    id="name"
                    {...register('name', { required: 'Name is required' })}
                    className="w-full bg-zinc-900/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[var(--accent-cyan)] focus:border-transparent transition-all"
                    placeholder="Enter your name"
                    disabled={isSubmitting}
                  />
                  {errors.name && <span className="text-red-400 text-xs mt-1 block">{errors.name.message}</span>}
                </div>
                
                <div className="space-y-1">
                  <label htmlFor="email" className="text-sm font-medium text-white/80">Email</label>
                  <input 
                    id="email"
                    type="email"
                    {...register('email', { 
                      required: 'Email is required',
                      pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' }
                    })}
                    className="w-full bg-zinc-900/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[var(--accent-cyan)] focus:border-transparent transition-all"
                    placeholder="Enter your email"
                    disabled={isSubmitting}
                  />
                  {errors.email && <span className="text-red-400 text-xs mt-1 block">{errors.email.message}</span>}
                </div>
              </div>

              <div className="space-y-1">
                <label htmlFor="subject" className="text-sm font-medium text-white/80">Subject</label>
                <input 
                  id="subject"
                  {...register('subject', { required: 'Subject is required' })}
                  className="w-full bg-zinc-900/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[var(--accent-cyan)] focus:border-transparent transition-all"
                  placeholder="Project Inquiry"
                  disabled={isSubmitting}
                />
                {errors.subject && <span className="text-red-400 text-xs mt-1 block">{errors.subject.message}</span>}
              </div>

              <div className="space-y-1">
                <label htmlFor="message" className="text-sm font-medium text-white/80">Message</label>
                <textarea 
                  id="message"
                  rows={4}
                  {...register('message', { required: 'Message is required' })}
                  className="w-full bg-zinc-900/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[var(--accent-cyan)] focus:border-transparent transition-all resize-none"
                  placeholder="Tell me about your project..."
                  disabled={isSubmitting}
                />
                {errors.message && <span className="text-red-400 text-xs mt-1 block">{errors.message.message}</span>}
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full btn-primary flex justify-center items-center h-12"
              >
                {isSubmitting ? (
                  <span className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                ) : (
                  'Send Message'
                )}
              </button>

              {submitStatus === 'success' && (
                <p className="text-green-400 text-sm mt-4 text-center">Message sent successfully! I will get back to you soon.</p>
              )}
              {submitStatus === 'error' && (
                <p className="text-red-400 text-sm mt-4 text-center">Something went wrong. Please try again or email me directly.</p>
              )}
            </motion.form>
          </div>

          {/* Right Column: GitHub & Open Source */}
          <motion.div variants={FADE_UP} className="glass-panel p-8 rounded-3xl border border-white/10 relative overflow-hidden mt-0 lg:mt-24">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--accent-violet)]/10 blur-2xl rounded-full" />
            
            <h3 className="text-xl font-bold text-white mb-6 font-mono flex items-center gap-3">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              Open Source Metrics
            </h3>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-zinc-900/50 rounded-2xl p-6 border border-white/5">
                <p className="text-xs text-[var(--foreground-muted)] font-mono uppercase mb-2">Public Repos</p>
                <p className="text-3xl font-bold text-white">{githubStats.publicRepos}</p>
              </div>
              <div className="bg-zinc-900/50 rounded-2xl p-6 border border-white/5">
                <p className="text-xs text-[var(--foreground-muted)] font-mono uppercase mb-2">GitHub Acc</p>
                <p className="text-xl font-bold text-white truncate">@{githubStats.username}</p>
              </div>
            </div>

            <a href={githubStats.profileUrl} target="_blank" rel="noopener noreferrer" className="block w-full text-center py-3 rounded-full bg-white/5 hover:bg-white/10 text-white font-mono text-sm transition-colors border border-white/10">
              View GitHub Profile →
            </a>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
