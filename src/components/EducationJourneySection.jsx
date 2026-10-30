import React from 'react';

/**
 * EducationJourneySection
 * Highlights college background at K S Institute of Technology,
 * interactive milestone timeline with illuminated emerald spine & glowing nodes,
 * and a compact 2x2 accomplishment callout grid.
 */
export default function EducationJourneySection() {
  const milestones = [
    {
      year: '2026',
      badge: 'National Finalist',
      title: 'Selected for Smart India Hackathon (SIH)',
      subtitle: 'Inter-College Selection Round • Team Lead & Core Dev',
      description:
        'Secured 1st place in the rigorous internal college screening round at K S Institute of Technology, earning nomination to represent the institution at the national Smart India Hackathon (SIH).',
      tags: ['Smart India Hackathon', 'Inter-College Winner', 'Problem Solver'],
      status: 'Current Milestone',
      statusColor: 'emerald',
    },
    {
      year: '2025',
      badge: 'Applied Software Engineering',
      title: 'Built Smart Retail Intelligence Application',
      subtitle: 'Inventory Optimization & Demand Forecasting',
      description:
        'Engineered a complete retail management and sales forecasting application for local merchants, incorporating automated low-stock triggers and machine learning demand predictions.',
      tags: ['Python / ML', 'React & FastAPI', 'Small Business Tech'],
      status: 'Shipped Project',
      statusColor: 'lime',
    },
    {
      year: '2025',
      badge: 'Technical Symposium',
      title: 'Competed at Utkarsh Tech Fest',
      subtitle: 'Annual Engineering Symposium & Hackathon',
      description:
        'Actively participated in competitive coding contests, algorithmic problem-solving sprints, and rapid prototyping hackathons alongside fellow engineering students.',
      tags: ['Hackathon', 'Competitive Programming', 'Rapid Prototyping'],
      status: 'Participated',
      statusColor: 'teal',
    },
  ];

  const achievements = [
    {
      icon: '🏆',
      title: '1st Place Winner',
      subtitle: 'University Hackathon Qualifier',
      detail: 'Selected for SIH among 50+ college project submissions',
      highlight: 'Top 1% Team',
      color: 'from-amber-400/20 to-emerald-500/10',
      border: 'hover:border-emerald-400/60',
    },
    {
      icon: '⚡',
      title: '150+ LeetCode Problems',
      subtitle: 'Algorithmic Problem Solving',
      detail: 'Consistent practice across Data Structures & Algorithms in C++',
      highlight: 'Active Practice',
      color: 'from-emerald-500/20 to-lime-500/10',
      border: 'hover:border-lime-400/60',
    },
    {
      icon: '👥',
      title: 'Tech Club Organizer',
      subtitle: 'KSIT Campus Mentorship',
      detail: 'Organizing peer coding workshops and hackathon prep groups',
      highlight: 'Community Lead',
      color: 'from-teal-500/20 to-emerald-500/10',
      border: 'hover:border-teal-400/60',
    },
    {
      icon: '📜',
      title: 'Full-Stack Certified',
      subtitle: 'Modern Web Architecture',
      detail: 'Certified in React, Node.js, and relational database systems',
      highlight: 'Industry Verified',
      color: 'from-lime-500/20 to-emerald-500/10',
      border: 'hover:border-emerald-400/60',
    },
  ];

  return (
    <section
      id="campus-life"
      className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-20 border-t border-emerald-500/15"
    >
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/25 mb-4">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
          <span className="font-mono text-xs text-emerald-300 font-semibold uppercase tracking-wider">
            Academic Track & Milestones
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
          Education &{' '}
          <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-lime-300 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(16,185,129,0.3)]">
            Campus Journey
          </span>
        </h2>
        <p className="max-w-2xl text-slate-300 text-sm sm:text-base leading-relaxed">
          Balancing computer science theory at K S Institute of Technology with competitive hackathons, software ventures, and community leadership.
        </p>

        {/* College Banner Card */}
        <div className="mt-8 w-full max-w-3xl p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-[#111620]/90 via-[#0d1117]/95 to-[#111620]/90 border border-emerald-500/25 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-lime-500/20 border border-emerald-500/30 flex items-center justify-center flex-shrink-0 text-2xl">
              🎓
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                  B.E. in Computer Science & Engineering
                </h3>
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  2nd Year
                </span>
              </div>
              <p className="text-xs sm:text-sm text-emerald-400/90 font-medium">
                K S Institute of Technology (KSIT), Bangalore
              </p>
              <p className="text-xs text-slate-400 mt-0.5 font-mono">
                Affiliated to VTU • Graduating Class of 2028
              </p>
            </div>
          </div>

          <div className="flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto pt-3 sm:pt-0 border-t sm:border-t-0 border-emerald-500/15 gap-1">
            <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
              Focus Areas
            </span>
            <span className="text-xs font-mono font-semibold text-lime-300">
              DSA • Full-Stack • AI
            </span>
          </div>
        </div>
      </div>

      {/* Main Grid: Interactive Milestone Timeline (Left/Center) + Accomplishment Callouts (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-start">
        
        {/* LEFT COLUMN (Timeline: 7 Cols) */}
        <div className="lg:col-span-7">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <span className="text-lg">⏳</span>
              <h3 className="text-xl font-bold text-white tracking-tight">
                Milestone Timeline
              </h3>
            </div>
            <span className="font-mono text-xs text-emerald-400 bg-emerald-950/40 border border-emerald-500/20 px-2.5 py-1 rounded-full">
              Key Turning Points
            </span>
          </div>

          {/* Vertical Illuminated Timeline Container */}
          <div className="relative pl-6 sm:pl-8">
            {/* The Illuminated Emerald Spine */}
            <div
              className="absolute left-[13px] sm:left-[17px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-emerald-400 via-teal-400 to-lime-400 shadow-[0_0_10px_rgba(16,185,129,0.5)]"
              aria-hidden="true"
            />

            {/* Timeline Items */}
            <div className="flex flex-col gap-8">
              {milestones.map((item, index) => (
                <div key={index} className="relative group">
                  {/* Glowing Nodal Dot on the Spine */}
                  <div className="absolute -left-[23px] sm:-left-[27px] top-1.5 flex items-center justify-center">
                    {/* Outer pulse wave */}
                    <span className="animate-ping absolute inline-flex h-5 w-5 rounded-full bg-emerald-400 opacity-60"></span>
                    {/* Glowing outer ring */}
                    <div className="relative flex items-center justify-center w-5 h-5 rounded-full bg-[#0d1117] border-2 border-emerald-400 shadow-[0_0_12px_#34d399] group-hover:scale-125 group-hover:border-lime-400 transition-all duration-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-lime-300"></div>
                    </div>
                  </div>

                  {/* Milestone Card */}
                  <div className="rounded-2xl bg-gradient-to-b from-[#111620]/90 to-[#0d1117]/90 border border-emerald-500/20 hover:border-emerald-400/60 p-5 sm:p-6 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.4)] hover:shadow-[0_12px_35px_-8px_rgba(16,185,129,0.3)] hover:-translate-y-1 transition-all duration-300 group">
                    {/* Top Row: Year Pill & Category Badge */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <div className="flex items-center gap-2">
                        <span className="px-3 py-1 rounded-full font-mono text-xs font-bold text-carbon-950 bg-gradient-to-r from-emerald-400 to-lime-400 shadow-[0_0_12px_rgba(16,185,129,0.4)]">
                          {item.year}
                        </span>
                        <span className="text-xs font-mono font-medium text-emerald-300/90 bg-emerald-950/40 border border-emerald-500/25 px-2.5 py-0.5 rounded-full">
                          {item.badge}
                        </span>
                      </div>
                      <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-lime-400"></span>
                        {item.status}
                      </span>
                    </div>

                    {/* Title & Subtitle */}
                    <h4 className="text-lg sm:text-xl font-bold text-white group-hover:text-emerald-300 transition-colors tracking-tight mb-1">
                      {item.title}
                    </h4>
                    <p className="text-xs font-mono text-emerald-400/80 mb-3">
                      {item.subtitle}
                    </p>

                    {/* Description */}
                    <p className="text-sm text-slate-300 leading-relaxed mb-4">
                      {item.description}
                    </p>

                    {/* Skill / Activity Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-emerald-500/10">
                      {item.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-0.5 rounded-md text-[11px] font-mono font-medium text-slate-300 bg-[#161b22]/90 border border-emerald-500/15 group-hover:border-emerald-500/30 transition-colors"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN (2x2 Accomplishment Badges: 5 Cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between h-full">
          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <span className="text-lg">🏅</span>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Accomplishments
                </h3>
              </div>
              <span className="font-mono text-xs text-lime-400 bg-emerald-950/40 border border-emerald-500/20 px-2.5 py-1 rounded-full">
                Key Credentials
              </span>
            </div>

            {/* 2x2 Grid of Achievement Callout Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {achievements.map((item, idx) => (
                <div
                  key={idx}
                  className={`group relative rounded-2xl bg-gradient-to-b ${item.color} from-[#111620]/90 to-[#0d1117]/95 border border-emerald-500/20 ${item.border} p-5 backdrop-blur-xl shadow-[0_8px_24px_rgba(0,0,0,0.4)] hover:shadow-[0_12px_30px_rgba(16,185,129,0.25)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between cursor-default`}
                >
                  {/* Top Bar with Icon and Highlight Tag */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-2xl filter drop-shadow-[0_0_8px_rgba(16,185,129,0.3)]">
                        {item.icon}
                      </span>
                      <span className="text-[10px] uppercase font-mono font-bold tracking-wider px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/25 group-hover:bg-emerald-500/20 transition-colors">
                        {item.highlight}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors tracking-tight mb-1">
                      {item.title}
                    </h4>
                    <p className="text-xs font-mono text-emerald-400/80 mb-2">
                      {item.subtitle}
                    </p>
                    <p className="text-xs text-slate-300 leading-relaxed font-normal">
                      {item.detail}
                    </p>
                  </div>

                  {/* Bottom Accent Dash */}
                  <div className="mt-4 pt-3 border-t border-emerald-500/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span className="group-hover:text-lime-300 transition-colors">Verified</span>
                    <span className="text-emerald-400/70 group-hover:translate-x-0.5 transition-transform">✓</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Hackathon / Campus Quote Card */}
          <div className="mt-6 p-5 rounded-2xl bg-gradient-to-br from-emerald-950/30 to-[#111620]/80 border border-emerald-500/20 backdrop-blur-md">
            <div className="flex items-start gap-3">
              <span className="text-emerald-400 font-mono text-xl leading-none">“</span>
              <p className="text-xs sm:text-sm text-slate-300 italic leading-relaxed">
                Hackathons and peer projects at KSIT pushed me from following tutorials to building production-grade software that solves real social challenges.
              </p>
            </div>
            <div className="mt-3 pt-2 border-t border-emerald-500/15 flex items-center justify-between text-xs font-mono text-emerald-400/80">
              <span>Sanjitha V</span>
              <span>CS @ KSIT • 2026</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

