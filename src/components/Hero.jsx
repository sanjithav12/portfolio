import React from 'react';
import StatusBadge from './StatusBadge';

/**
 * Hero Section
 * Opening intro screen for Sanjitha V's student developer portfolio.
 * Theme: Cyber-Emerald / Dark Mode (#0d1117) with neon emerald (#10b981) and bright lime accents.
 */
export default function Hero() {
  const techPills = [
    { name: 'React', icon: '⚛️' },
    { name: 'Tailwind CSS', icon: '🎨' },
    { name: 'JavaScript / TS', icon: '⚡' },
    { name: 'Python', icon: '🐍' },
    { name: 'AI & ML', icon: '🧠' },
    { name: 'Next.js', icon: '▲' },
    { name: 'Git / GitHub', icon: '🐙' },
  ];

  const highlights = [
    { label: 'Academic Standing', value: '2nd Year CS', sub: 'K S Inst. of Tech' },
    { label: 'Core Focus', value: 'Web & AI Apps', sub: 'Full-Stack Development' },
    { label: 'Location', value: 'Bangalore, India', sub: 'Available Globally' },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Ambient Glows (Deep Emerald & Lime) */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[450px] bg-gradient-to-tr from-emerald-500/15 via-teal-500/10 to-lime-500/10 blur-[120px] rounded-full pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 -left-20 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-emerald-600/10 blur-[100px] rounded-full pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto w-full flex flex-col items-center text-center relative z-10">
        {/* 1. Status Badge: Blinking Radar Pill */}
        <div className="mb-6 sm:mb-8 animate-fade-in">
          <StatusBadge />
        </div>

        {/* 2. Main Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.15] sm:leading-[1.12] mb-6">
          Hey, I am{' '}
          <span className="relative inline-block">
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-lime-300 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(16,185,129,0.35)]">
              Sanjitha V
            </span>
            {/* Cyber under-glow line */}
            <span className="absolute -bottom-1 left-0 right-0 h-[3px] bg-gradient-to-r from-emerald-500 via-teal-400 to-lime-400 rounded-full opacity-70"></span>
          </span>
          <br className="hidden sm:inline" />
          <span className="block mt-2 sm:mt-1 text-slate-100 font-bold">
            Building the{' '}
            <span className="text-emerald-400 underline decoration-emerald-500/40 decoration-wavy decoration-1 underline-offset-8">
              Future of Tech
            </span>
            .
          </span>
        </h1>

        {/* 3. Student Bio */}
        <p className="max-w-2xl text-base sm:text-lg md:text-xl text-slate-300 font-normal leading-relaxed mb-8 sm:mb-10 text-balance">
          2nd Year Computer Science Student at{' '}
          <span className="text-emerald-300 font-semibold border-b border-emerald-500/30 pb-0.5">
            K S Institute of Technology
          </span>{' '}
          passionate about{' '}
          <span className="text-white font-medium">web development</span>,{' '}
          <span className="text-lime-300 font-medium">AI</span>, and building real-world projects.
        </p>

        {/* 4. Action Buttons (Primary Emerald Glowing & Secondary Outline) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 w-full sm:w-auto mb-14">
          {/* Primary Action Button: Glowing Emerald with Lift */}
          <a
            href="#projects"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl font-semibold text-sm sm:text-base text-carbon-950 bg-gradient-to-r from-emerald-400 via-emerald-500 to-lime-400 hover:from-emerald-300 hover:to-lime-300 shadow-[0_0_25px_rgba(16,185,129,0.45)] hover:shadow-[0_0_35px_rgba(16,185,129,0.7)] hover:-translate-y-1 active:translate-y-0 transition-all duration-300 group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
          >
            <span>View My Projects</span>
            <svg
              className="w-4 h-4 text-carbon-950 group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>

          {/* Secondary Action Button: Outline with Crisp Cyber Border */}
          <a
            href="#resume"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-medium text-sm sm:text-base text-emerald-300 hover:text-white bg-carbon-900/60 hover:bg-emerald-500/10 border border-emerald-500/40 hover:border-lime-400/80 backdrop-blur-sm shadow-[0_0_15px_rgba(16,185,129,0.1)] hover:shadow-[0_0_25px_rgba(163,230,53,0.25)] hover:-translate-y-1 active:translate-y-0 transition-all duration-300 group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
          >
            <svg
              className="w-4 h-4 text-emerald-400 group-hover:text-lime-300 group-hover:translate-y-0.5 transition-all duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <span>Download Resume / CV</span>
          </a>
        </div>

        {/* Quick Highlights / Student Credentials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 w-full max-w-2xl mb-12">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="p-3.5 sm:p-4 rounded-xl bg-carbon-900/60 border border-emerald-500/20 backdrop-blur-md hover:border-emerald-500/40 hover:bg-carbon-850/80 transition-all duration-300 text-left group"
            >
              <div className="text-[11px] font-mono text-emerald-400/70 uppercase tracking-wider mb-1">
                {item.label}
              </div>
              <div className="text-base sm:text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                {item.value}
              </div>
              <div className="text-xs text-slate-400 font-normal">
                {item.sub}
              </div>
            </div>
          ))}
        </div>

        {/* 5. Tech Stack Micro-Pills */}
        <div className="flex flex-col items-center gap-3">
          <span className="font-mono text-xs uppercase tracking-widest text-slate-400 flex items-center gap-2">
            <span className="w-2 h-[1px] bg-emerald-500/40"></span>
            Tech Stack & Focus
            <span className="w-2 h-[1px] bg-emerald-500/40"></span>
          </span>
          <div className="flex flex-wrap justify-center gap-2 max-w-xl">
            {techPills.map((tech) => (
              <span
                key={tech.name}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono font-medium text-slate-300 bg-carbon-800/70 border border-emerald-500/15 hover:border-emerald-400/50 hover:text-emerald-300 hover:bg-emerald-950/30 transition-all duration-200 cursor-default"
              >
                <span>{tech.icon}</span>
                <span>{tech.name}</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Subtle Scroll Down Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-60 hover:opacity-100 transition-opacity">
        <span className="font-mono text-[11px] text-emerald-400/80 tracking-widest uppercase">
          Explore
        </span>
        <div className="w-5 h-8 rounded-full border border-emerald-500/40 flex justify-center pt-1.5">
          <div className="w-1 h-2 rounded-full bg-emerald-400 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}

