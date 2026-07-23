export default function Loading() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-[var(--background)] z-[9999] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[var(--accent-cyan)]/10 blur-[100px] rounded-full" />
      
      <div className="relative flex items-center justify-center w-32 h-32 mb-8">
        {/* Pulsing Rings */}
        <div className="absolute inset-0 border border-[var(--accent-cyan)]/20 rounded-full animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
        <div className="absolute inset-4 border border-[var(--accent-violet)]/30 rounded-full animate-[ping_2.5s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
        
        {/* Solid Core */}
        <div className="absolute inset-8 bg-gradient-to-tr from-[var(--accent-cyan)] to-[var(--accent-violet)] rounded-full blur-md opacity-50 animate-pulse"></div>
        <div className="relative z-10 w-4 h-4 bg-white rounded-full shadow-[0_0_20px_#fff]"></div>
      </div>

      {/* Loading Text */}
      <div className="flex flex-col items-center gap-2">
        <span className="font-mono text-[var(--accent-cyan)] text-sm tracking-[0.3em] uppercase font-bold animate-pulse">Initializing System</span>
        <div className="flex gap-1">
          <span className="w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
          <span className="w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
          <span className="w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
        </div>
      </div>
    </div>
  );
}
