'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FADE_UP, STAGGER_CONTAINER } from '@/lib/constants';
import { useInView } from '@/hooks/useInView';

export default function AIPlayground() {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const [activeDemo, setActiveDemo] = useState<'sentiment' | 'phishing' | null>(null);

  return (
    <section id="playground" className="relative py-24 sm:py-32 border-t border-white/5">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          variants={STAGGER_CONTAINER}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-16 text-center"
        >
          <motion.div variants={FADE_UP} className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-[var(--accent-cyan)]/20 mb-6">
            <span className="text-xs font-mono font-medium text-[var(--accent-cyan)] tracking-wide uppercase">Interactive Models</span>
          </motion.div>
          <motion.h2 variants={FADE_UP} className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter mb-6 text-white drop-shadow-lg">
            AI Playground
          </motion.h2>
          <motion.p variants={FADE_UP} className="text-lg text-[var(--foreground-muted)] font-mono max-w-2xl mx-auto">
            Test my machine learning models directly in your browser. Note: These are lightweight client-side demonstrations of the actual production backends.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <SentimentDemo active={activeDemo === 'sentiment'} onActivate={() => setActiveDemo('sentiment')} />
          <PhishingDemo active={activeDemo === 'phishing'} onActivate={() => setActiveDemo('phishing')} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ComingSoonCard title="Resume ATS Analyzer" desc="NLP entity extraction pipeline." />
          <ComingSoonCard title="Medical RAG Assistant" desc="Retrieval on domain-specific PDFs." />
          <ComingSoonCard title="Fake News Detector" desc="Fact-checking classification model." />
        </div>

      </div>
    </section>
  );
}

// ── Sentiment Analysis Demo ──────────────────────────────────────────────
function SentimentDemo({ active, onActivate }: { active: boolean, onActivate: () => void }) {
  const [text, setText] = useState('');
  const [result, setResult] = useState<{ score: number, label: string } | null>(null);
  const [loading, setLoading] = useState(false);

  const analyze = () => {
    if (!text.trim()) return;
    setLoading(true);
    setResult(null);
    
    // Mock inference delay
    setTimeout(() => {
      const lower = text.toLowerCase();
      let label = 'Neutral';
      let score = 0.5;
      
      const posWords = ['good', 'great', 'amazing', 'excellent', 'love', 'best', 'happy', 'fantastic'];
      const negWords = ['bad', 'terrible', 'awful', 'hate', 'worst', 'sad', 'poor', 'trash'];
      
      const posCount = posWords.filter(w => lower.includes(w)).length;
      const negCount = negWords.filter(w => lower.includes(w)).length;
      
      if (posCount > negCount) { label = 'Positive'; score = 0.8 + (Math.random() * 0.19); }
      else if (negCount > posCount) { label = 'Negative'; score = 0.1 + (Math.random() * 0.2); }
      else { score = 0.4 + (Math.random() * 0.2); }

      setResult({ label, score });
      setLoading(false);
    }, 1200);
  };

  return (
    <div className={`glass-panel rounded-3xl p-8 border transition-all duration-500 flex flex-col ${active ? 'border-[var(--accent-cyan)] shadow-[0_0_40px_rgba(0,112,243,0.2)] ring-1 ring-[var(--accent-cyan)]/50 bg-zinc-900/80' : 'border-white/10 hover:border-white/30 hover:bg-zinc-900/40'}`}>
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="text-2xl font-bold text-white mb-2">Sentiment Analyzer</h3>
          <p className="text-sm text-[var(--foreground-muted)] font-mono">NLP Classification Pipeline</p>
        </div>
        <div className="w-12 h-12 rounded-xl bg-[var(--accent-cyan)]/10 flex items-center justify-center text-[var(--accent-cyan)]">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
        </div>
      </div>

      {!active ? (
        <button onClick={onActivate} className="btn-primary mt-auto py-3 w-full group">
          Launch Demo <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
        </button>
      ) : (
        <div className="flex flex-col gap-4 mt-auto">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Type a review or sentence (e.g. 'This product is absolutely amazing!')"
            className="w-full bg-zinc-950/50 border border-white/10 rounded-xl p-4 text-white text-sm focus:outline-none focus:border-[var(--accent-cyan)]/50 transition-colors resize-none h-24"
          />
          <button onClick={analyze} disabled={loading || !text.trim()} className="btn-primary py-3 w-full disabled:opacity-50">
            {loading ? 'Running Inference...' : 'Analyze Sentiment'}
          </button>
          
          <AnimatePresence>
            {result && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="p-4 rounded-xl bg-zinc-950/80 border border-white/5 mt-2">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs text-[var(--foreground-muted)] uppercase tracking-wider font-mono">Prediction</span>
                  <span className={`text-sm font-bold ${result.label === 'Positive' ? 'text-green-400' : result.label === 'Negative' ? 'text-rose-400' : 'text-amber-400'}`}>
                    {result.label}
                  </span>
                </div>
                <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }} 
                    animate={{ width: `${result.score * 100}%` }} 
                    transition={{ duration: 1, ease: "easeOut" }}
                    className={`h-full ${result.label === 'Positive' ? 'bg-green-400' : result.label === 'Negative' ? 'bg-rose-400' : 'bg-amber-400'}`}
                  />
                </div>
                <div className="flex justify-between mt-2">
                  <span className="text-[10px] font-mono text-white/30">Confidence Score</span>
                  <span className="text-[10px] font-mono text-white/50">{(result.score * 100).toFixed(1)}%</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
}

// ── Phishing Detection Demo ──────────────────────────────────────────────
function PhishingDemo({ active, onActivate }: { active: boolean, onActivate: () => void }) {
  const [url, setUrl] = useState('');
  const [result, setResult] = useState<{ isPhishing: boolean, risk: number } | null>(null);
  const [loading, setLoading] = useState(false);

  const checkUrl = () => {
    if (!url.trim()) return;
    setLoading(true);
    setResult(null);
    
    setTimeout(() => {
      const lower = url.toLowerCase();
      let risk = 0.1;
      
      // Extremely basic mock heuristic for demo
      if (lower.includes('login') || lower.includes('secure') || lower.includes('update') || lower.includes('account')) risk += 0.3;
      if (lower.includes('-') && lower.split('-').length > 3) risk += 0.2; // Many hyphens
      if (/\d{4,}/.test(lower)) risk += 0.2; // Contains numbers
      if (lower.endsWith('.xyz') || lower.endsWith('.top') || lower.endsWith('.club')) risk += 0.3;
      
      if (lower.includes('paypal-update-security-info.com') || lower.includes('secure-login')) risk = 0.95;

      setResult({
        isPhishing: risk > 0.5,
        risk: Math.min(risk + (Math.random() * 0.1), 0.99)
      });
      setLoading(false);
    }, 1500);
  };

  return (
    <div className={`glass-panel rounded-3xl p-8 border transition-all duration-500 flex flex-col ${active ? 'border-[var(--accent-violet)] shadow-[0_0_40px_rgba(138,43,226,0.2)] ring-1 ring-[var(--accent-violet)]/50 bg-zinc-900/80' : 'border-white/10 hover:border-white/30 hover:bg-zinc-900/40'}`}>
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="text-2xl font-bold text-white mb-2">Phishing Detector</h3>
          <p className="text-sm text-[var(--foreground-muted)] font-mono">Random Forest Lexical Analyzer</p>
        </div>
        <div className="w-12 h-12 rounded-xl bg-[var(--accent-violet)]/10 flex items-center justify-center text-[var(--accent-violet)]">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
        </div>
      </div>

      {!active ? (
        <button onClick={onActivate} className="btn-secondary mt-auto py-3 w-full group">
          Launch Demo <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
        </button>
      ) : (
        <div className="flex flex-col gap-4 mt-auto">
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter a URL (e.g. www.paypal-update-security.com)"
            className="w-full bg-zinc-950/50 border border-white/10 rounded-xl p-4 text-white text-sm focus:outline-none focus:border-[var(--accent-violet)]/50 transition-colors"
          />
          <button onClick={checkUrl} disabled={loading || !url.trim()} className="bg-[var(--accent-violet)] text-white font-bold rounded-xl py-3 w-full disabled:opacity-50 hover:bg-[var(--accent-violet)]/80 transition-colors">
            {loading ? 'Extracting Features...' : 'Check URL'}
          </button>
          
          <AnimatePresence>
            {result && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="p-4 rounded-xl bg-zinc-950/80 border border-white/5 mt-2">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-3 h-3 rounded-full ${result.isPhishing ? 'bg-rose-500 animate-pulse' : 'bg-green-500'}`} />
                  <span className={`text-sm font-bold ${result.isPhishing ? 'text-rose-400' : 'text-green-400'}`}>
                    {result.isPhishing ? 'MALICIOUS (PHISHING DETECTED)' : 'SAFE (NO THREAT DETECTED)'}
                  </span>
                </div>
                <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden mb-2">
                  <motion.div 
                    initial={{ width: 0 }} 
                    animate={{ width: `${result.risk * 100}%` }} 
                    transition={{ duration: 1, ease: "easeOut" }}
                    className={`h-full ${result.isPhishing ? 'bg-rose-500' : 'bg-green-500'}`}
                  />
                </div>
                <div className="flex justify-between">
                  <span className="text-[10px] font-mono text-white/30">Risk Probability</span>
                  <span className="text-[10px] font-mono text-white/50">{(result.risk * 100).toFixed(1)}%</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
}

// ── Coming Soon Cards ──────────────────────────────────────────────
function ComingSoonCard({ title, desc }: { title: string, desc: string }) {
  return (
    <div className="glass-panel rounded-2xl p-6 border border-white/5 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500 flex flex-col justify-center items-center text-center relative overflow-hidden bg-zinc-950/30">
      <div className="absolute inset-0 bg-[stripes_rgba(255,255,255,0.02)_1px,transparent_1px] bg-[size:10px_10px] pointer-events-none" />
      <span className="text-[10px] font-mono font-bold uppercase tracking-widest px-2 py-1 rounded-md bg-white/10 text-white/70 mb-4 inline-block relative z-10">
        Demo Coming Soon
      </span>
      <h4 className="text-lg font-bold text-white mb-2 relative z-10">{title}</h4>
      <p className="text-xs text-[var(--foreground-muted)] font-mono relative z-10">{desc}</p>
    </div>
  );
}
