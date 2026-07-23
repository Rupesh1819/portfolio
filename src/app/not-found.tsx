import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center p-4">
      <div className="glass-panel p-8 md:p-16 rounded-3xl max-w-2xl w-full text-center border border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[var(--accent-cyan)]/5 blur-3xl rounded-full pointer-events-none" />
        
        <div className="relative z-10">
          <h1 className="text-6xl md:text-8xl font-bold font-mono text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-cyan)] to-[var(--accent-violet)] mb-4">
            404
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Endpoint Not Found</h2>
          <p className="text-[var(--foreground-muted)] text-lg mb-10 max-w-md mx-auto">
            The requested route does not exist within the current architecture. It may have been deprecated or moved.
          </p>
          
          <Link href="/" className="btn-primary inline-flex items-center gap-2">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            Return to Dashboard
          </Link>
        </div>
      </div>
    </main>
  );
}
