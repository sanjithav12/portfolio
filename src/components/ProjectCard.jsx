import React, { useRef, useState } from 'react';

/**
 * ProjectCard
 * 3D perspective tilt glass card with dynamic cursor shine reflection,
 * smooth translateY(-6px) hover lift, and cyber-emerald rim lighting.
 */
export default function ProjectCard({ project }) {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const [shinePos, setShinePos] = useState({ x: 0, y: 0, opacity: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Subtle 3D tilt calculation (max ~8 degrees for comfortable ergonomics)
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;

    setTilt({ rotateX, rotateY });
    setShinePos({ x, y, opacity: 1 });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ rotateX: 0, rotateY: 0 });
    setShinePos((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: isHovered
          ? `perspective(1000px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) translateY(-6px)`
          : 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)',
        transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out, box-shadow 0.5s ease-out',
      }}
      className={`relative group rounded-2xl bg-gradient-to-b from-[#111620]/85 to-[#0d1117]/95 border backdrop-blur-xl p-6 sm:p-7 flex flex-col justify-between overflow-hidden cursor-pointer select-none ${
        isHovered
          ? 'border-emerald-400/60 shadow-[0_16px_40px_-8px_rgba(16,185,129,0.35)] shadow-emerald-950/40'
          : 'border-emerald-500/20 shadow-[0_8px_30px_rgba(0,0,0,0.5)]'
      }`}
    >
      {/* 1. Dynamic Cursor Light Reflection / Specular Shine Overlay */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300 z-10"
        style={{
          opacity: shinePos.opacity,
          background: `radial-gradient(circle 240px at ${shinePos.x}px ${shinePos.y}px, rgba(16, 185, 129, 0.18), rgba(163, 230, 53, 0.06), transparent 70%)`,
        }}
        aria-hidden="true"
      />

      {/* 2. Top Rim Light Accent Bar */}
      <div
        className={`absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-emerald-400 to-transparent transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-20'
        }`}
        aria-hidden="true"
      />

      {/* 3. Card Header: Category Badge + Status / Action Icons */}
      <div className="relative z-20 flex items-center justify-between gap-3 mb-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-950/60 text-emerald-300 border border-emerald-500/30 group-hover:border-emerald-400/60 group-hover:bg-emerald-900/40 transition-colors">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
          {project.badge}
        </span>

        <div className="flex items-center gap-2">
          {project.featured && (
            <span className="text-[10px] uppercase font-mono font-bold tracking-wider px-2 py-0.5 rounded bg-lime-400/10 text-lime-300 border border-lime-400/30">
              Featured
            </span>
          )}
          {/* GitHub / External Link preview pill */}
          <a
            href={project.links?.demo || '#'}
            onClick={(e) => e.stopPropagation()}
            className="w-8 h-8 rounded-lg flex items-center justify-center bg-carbon-800/80 border border-emerald-500/20 text-slate-300 hover:text-emerald-300 hover:border-emerald-400/50 hover:bg-emerald-950/40 transition-all"
            title="View Code or Demo"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>

      {/* 4. Project Title & Description */}
      <div className="relative z-20 mb-5 flex-1">
        <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-emerald-300 transition-colors tracking-tight mb-3 flex items-center gap-2">
          <span>{project.title}</span>
          <span className="text-emerald-400/40 group-hover:text-lime-300 group-hover:translate-x-1 transition-all duration-200">
            →
          </span>
        </h3>
        <p className="text-sm text-slate-300 font-normal leading-relaxed line-clamp-4 group-hover:text-slate-200 transition-colors">
          {project.description}
        </p>

        {/* Highlight Bullets / Key Capabilities */}
        {project.highlights && (
          <div className="mt-4 pt-3 border-t border-emerald-500/10 flex flex-col gap-1.5">
            {project.highlights.map((highlight, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs text-emerald-300/80 font-mono">
                <span className="w-1 h-1 rounded-full bg-lime-400"></span>
                <span>{highlight}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 5. Footer: Tech Tags & Quick Action */}
      <div className="relative z-20 pt-4 border-t border-emerald-500/15">
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tech.map((item) => (
            <span
              key={item}
              className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium text-slate-300 bg-[#161b22]/90 border border-emerald-500/15 group-hover:border-emerald-500/30 group-hover:text-emerald-200 transition-colors"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between text-xs font-mono">
          <span className="text-slate-400">{project.type}</span>
          <span className="inline-flex items-center gap-1 text-emerald-400 group-hover:text-lime-300 font-semibold transition-colors">
            <span>Explore Details</span>
            <span className="group-hover:translate-x-1 transition-transform">↗</span>
          </span>
        </div>
      </div>
    </div>
  );
}

