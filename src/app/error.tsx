'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-screen flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-panel p-8 md:p-12 rounded-3xl max-w-lg w-full text-center border border-red-500/20 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-red-500/5 blur-3xl rounded-full" />
        
        <div className="relative z-10">
          <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-500/10 text-red-500 mb-6">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
          </span>
          
          <h2 className="text-2xl font-bold text-white mb-4">A Runtime Anomaly Occurred</h2>
          <p className="text-[var(--foreground-muted)] mb-8">
            The application encountered an unexpected error. Please try resetting the boundary or return to the safety of the homepage.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => reset()}
              className="btn-primary"
            >
              Initialize Reset
            </button>
            <Link href="/" className="btn-secondary">
              Return Home
            </Link>
          </div>
        </div>
      </motion.div>
    </main>
  );
}
