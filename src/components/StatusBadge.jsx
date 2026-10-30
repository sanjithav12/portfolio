import React from 'react';

/**
 * StatusBadge
 * Animated blinking radar pill: '🟢 Student Developer // Open for Internships'
 * Features dual-layer ping radar wave and cyber-emerald border styling.
 */
export default function StatusBadge() {
  return (
    <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-carbon-900/80 border border-emerald-500/30 backdrop-blur-md shadow-[0_0_20px_rgba(16,185,129,0.15)] hover:border-emerald-400/60 transition-all duration-300 group cursor-default">
      {/* Radar Dot with Multi-Stage Pulse */}
      <span className="relative flex h-2.5 w-2.5 items-center justify-center">
        {/* Outer expanding radar wave */}
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 duration-1000"></span>
        {/* Secondary softer glow ring */}
        <span className="absolute inline-flex h-4 w-4 rounded-full bg-emerald-500/20 group-hover:bg-emerald-500/40 transition-colors"></span>
        {/* Solid core indicator */}
        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400 shadow-[0_0_8px_#34d399]"></span>
      </span>

      {/* Badge Text with Monospace Terminal Aesthetic */}
      <span className="font-mono text-xs sm:text-sm font-medium text-emerald-200/90 tracking-wider">
        Student Developer <span className="text-emerald-500/70 font-semibold mx-1">//</span>{' '}
        <span className="text-lime-400 font-semibold group-hover:text-lime-300 transition-colors">
          Open for Internships
        </span>
      </span>

      {/* Cyber Corner Sparkle */}
      <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-sm bg-emerald-500/40 group-hover:bg-emerald-400 transition-colors"></span>
    </div>
  );
}

