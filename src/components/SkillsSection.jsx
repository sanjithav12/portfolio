import React from 'react';

/**
 * SkillsSection
 * Interactive Tech Stack & Skills showcase categorized into:
 * 1. Languages
 * 2. Frameworks & Tools
 * 3. Core CS Concepts
 *
 * Each badge features an official icon, hover scale (scale-105),
 * emerald border glow, and a comfort-level tooltip.
 */
export default function SkillsSection() {
  const skillCategories = [
    {
      title: 'Programming Languages',
      badge: 'Syntax & Logic',
      icon: '⌨️',
      skills: [
        {
          name: 'C++',
          level: 'Proficient',
          levelType: 'proficient',
          iconType: 'cpp',
        },
        {
          name: 'Python',
          level: 'Proficient',
          levelType: 'proficient',
          iconType: 'python',
        },
        {
          name: 'JavaScript',
          level: 'Proficient',
          levelType: 'proficient',
          iconType: 'javascript',
        },
        {
          name: 'Java',
          level: 'Familiar',
          levelType: 'familiar',
          iconType: 'java',
        },
        {
          name: 'TypeScript',
          level: 'Familiar',
          levelType: 'familiar',
          iconType: 'typescript',
        },
        {
          name: 'SQL',
          level: 'Proficient',
          levelType: 'proficient',
          iconType: 'sql',
        },
      ],
    },
    {
      title: 'Frameworks & Tools',
      badge: 'Development & Build',
      icon: '⚙️',
      skills: [
        {
          name: 'React',
          level: 'Proficient',
          levelType: 'proficient',
          iconType: 'react',
        },
        {
          name: 'Tailwind CSS',
          level: 'Proficient',
          levelType: 'proficient',
          iconType: 'tailwind',
        },
        {
          name: 'Node.js',
          level: 'Familiar',
          levelType: 'familiar',
          iconType: 'nodejs',
        },
        {
          name: 'Git / GitHub',
          level: 'Proficient',
          levelType: 'proficient',
          iconType: 'github',
        },
        {
          name: 'FastAPI',
          level: 'Currently Learning',
          levelType: 'learning',
          iconType: 'fastapi',
        },
        {
          name: 'Next.js',
          level: 'Currently Learning',
          levelType: 'learning',
          iconType: 'nextjs',
        },
      ],
    },
    {
      title: 'Core CS Concepts',
      badge: 'Foundations & Theory',
      icon: '🧠',
      skills: [
        {
          name: 'Data Structures',
          level: 'Proficient',
          levelType: 'proficient',
          iconType: 'dsa',
        },
        {
          name: 'OOP',
          level: 'Proficient',
          levelType: 'proficient',
          iconType: 'oop',
        },
        {
          name: 'DBMS',
          level: 'Proficient',
          levelType: 'proficient',
          iconType: 'dbms',
        },
        {
          name: 'Operating Systems',
          level: 'Familiar',
          levelType: 'familiar',
          iconType: 'os',
        },
        {
          name: 'Algorithms (C++)',
          level: 'Proficient',
          levelType: 'proficient',
          iconType: 'algo',
        },
        {
          name: 'Computer Networks',
          level: 'Familiar',
          levelType: 'familiar',
          iconType: 'cn',
        },
      ],
    },
  ];

  // Helper for comfort-level indicator styling
  const getLevelStyles = (type) => {
    switch (type) {
      case 'proficient':
        return {
          dot: 'bg-emerald-400 shadow-[0_0_8px_#34d399]',
          text: 'text-emerald-300',
          border: 'border-emerald-500/40',
        };
      case 'familiar':
        return {
          dot: 'bg-lime-400 shadow-[0_0_8px_#a3e635]',
          text: 'text-lime-300',
          border: 'border-lime-500/40',
        };
      case 'learning':
        return {
          dot: 'bg-teal-300 animate-pulse shadow-[0_0_8px_#5eead4]',
          text: 'text-teal-200',
          border: 'border-teal-500/40',
        };
      default:
        return {
          dot: 'bg-slate-400',
          text: 'text-slate-300',
          border: 'border-slate-500/40',
        };
    }
  };

  // Render official crisp SVG logos
  const renderSkillIcon = (type) => {
    switch (type) {
      case 'cpp':
        return (
          <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none">
            <path d="M12 2L3 7v10l9 5 9-5V7l-9-5z" fill="#00599C" fillOpacity="0.2" stroke="#00599C" strokeWidth="1.5" />
            <path d="M9.5 9a3.5 3.5 0 100 6h1.5" stroke="#659AD2" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M15 12h3m-1.5-1.5v3m3.5-1.5h3m-1.5-1.5v3" stroke="#659AD2" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        );
      case 'python':
        return (
          <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24">
            <path d="M11.9 2c-3.1 0-4.9 1.4-4.9 3.2v2.4h5v.8H5.2c-1.8 0-3.2 1.4-3.2 4.1s1.1 4.1 3.2 4.1h1.7v-2.4c0-2.2 1.9-4.1 4.1-4.1h5.8V7.7c0-2.4-2.1-4.1-4.9-4.1v-.8c0-.5-.5-.8-.8-.8z" fill="#387EB8" />
            <path d="M12.1 22c3.1 0 4.9-1.4 4.9-3.2v-2.4h-5v-.8h6.8c1.8 0 3.2-1.4 3.2-4.1s-1.1-4.1-3.2-4.1h-1.7v2.4c0 2.2-1.9 4.1-4.1 4.1H7.2v2.4c0 2.4 2.1 4.1 4.9 4.1v.8c0 .5.5.8.8.8z" fill="#FFE052" />
            <circle cx="8.8" cy="5.2" r=".9" fill="#fff" />
            <circle cx="15.2" cy="18.8" r=".9" fill="#fff" />
          </svg>
        );
      case 'javascript':
        return (
          <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24">
            <rect width="24" height="24" rx="4" fill="#F7DF1E" />
            <path d="M7 17.5c.8.6 1.8 1 2.9 1 2.3 0 3.7-1.4 3.7-3.4v-6.9h-2.1v6.8c0 1.3-.8 2-1.8 2-.7 0-1.4-.3-1.9-.7l-.8 1.2zm8.5-.2c1 .7 2.1 1.1 3.4 1.1 2.6 0 4.2-1.4 4.2-3.6 0-1.9-1.2-2.9-3.2-3.7l-.8-.3c-1.2-.5-1.7-.9-1.7-1.7 0-.8.6-1.4 1.7-1.4.9 0 1.7.3 2.3.8l.8-1.4c-.8-.6-1.8-.9-2.9-.9-2.4 0-3.9 1.4-3.9 3.5 0 1.9 1.2 2.9 3 3.6l.8.3c1.3.5 1.9 1 1.9 1.8 0 .9-.8 1.6-2 1.6-1.2 0-2.2-.5-2.9-1.2l-.8 1.4z" fill="#000" />
          </svg>
        );
      case 'java':
        return (
          <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none">
            <path d="M8 17c2 1 6 1 8 0m-9 3c3 1.5 7 1.5 10 0" stroke="#EA2D2E" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M12 3c-1.5 2-2 4 0 6 2 2 1.5 4 0 6m4-11c-1.5 2-2 4 0 6 2 2 1.5 4 0 6" stroke="#5382A1" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        );
      case 'typescript':
        return (
          <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24">
            <rect width="24" height="24" rx="4" fill="#3178C6" />
            <path d="M5 9.5h6.5v1.8H9v6.7H6.8v-6.7H5V9.5zm9 5.8c.8.6 1.8.9 2.8.9 1.3 0 2-.6 2-1.4 0-.8-.7-1.2-1.9-1.7l-.7-.3c-1.8-.7-2.6-1.6-2.6-3 0-1.9 1.4-3.2 3.8-3.2 1.2 0 2.2.4 2.9.9l-.7 1.6c-.6-.4-1.3-.7-2.1-.7-1.1 0-1.8.6-1.8 1.3 0 .7.6 1.1 1.8 1.5l.7.3c1.9.7 2.8 1.7 2.8 3.1 0 2.1-1.6 3.3-4.1 3.3-1.4 0-2.6-.4-3.4-1.1l.6-1.8z" fill="#fff" />
          </svg>
        );
      case 'sql':
        return (
          <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="1.6">
            <ellipse cx="12" cy="5" rx="8" ry="3" />
            <path d="M4 5v6c0 1.66 3.58 3 8 3s8-1.34 8-3V5" />
            <path d="M4 11v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" />
          </svg>
        );
      case 'react':
        return (
          <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none">
            <ellipse cx="12" cy="12" rx="3.5" ry="9" stroke="#61DAFB" strokeWidth="1.2" transform="rotate(30 12 12)" />
            <ellipse cx="12" cy="12" rx="3.5" ry="9" stroke="#61DAFB" strokeWidth="1.2" transform="rotate(90 12 12)" />
            <ellipse cx="12" cy="12" rx="3.5" ry="9" stroke="#61DAFB" strokeWidth="1.2" transform="rotate(150 12 12)" />
            <circle cx="12" cy="12" r="2" fill="#61DAFB" />
          </svg>
        );
      case 'tailwind':
        return (
          <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="#38BDF8">
            <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.335 6.182 14.974 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.335 13.382 8.974 12 6.001 12z" />
          </svg>
        );
      case 'nodejs':
        return (
          <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none">
            <path d="M12 2l9 5.2v10.4L12 23l-9-5.4V7.2L12 2z" stroke="#68A063" strokeWidth="1.6" fill="#68A063" fillOpacity="0.15" />
            <path d="M12 7v10m-4-3l4 3 4-3" stroke="#68A063" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );
      case 'github':
        return (
          <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="#e6edf3">
            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
          </svg>
        );
      case 'fastapi':
        return (
          <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" fill="#009688" fillOpacity="0.2" stroke="#009688" strokeWidth="1.5" />
            <path d="M12 4L6 14h5l-1 6 6-10h-5l1-6z" fill="#009688" />
          </svg>
        );
      case 'nextjs':
        return (
          <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" fill="#000" stroke="#fff" strokeWidth="1.2" />
            <path d="M8 8v8m0 0l7-9m-3 9V11" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" />
          </svg>
        );
      case 'dsa':
        return (
          <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="1.6">
            <circle cx="12" cy="5" r="2.5" />
            <circle cx="6" cy="18" r="2.5" />
            <circle cx="18" cy="18" r="2.5" />
            <path d="M10.5 7.5L7.5 15.5m9-8l-3 8" />
          </svg>
        );
      case 'oop':
        return (
          <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="#a3e635" strokeWidth="1.6">
            <rect x="3" y="3" width="7" height="7" rx="1.5" />
            <rect x="14" y="3" width="7" height="7" rx="1.5" />
            <rect x="8.5" y="14" width="7" height="7" rx="1.5" />
            <path d="M6.5 10v2a2 2 0 002 2h7a2 2 0 002-2v-2" />
          </svg>
        );
      case 'dbms':
        return (
          <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="1.6">
            <path d="M4 6c0-1.66 3.58-3 8-3s8 1.34 8 3-3.58 3-8 3-8-1.34-8-3z" />
            <path d="M4 6v5c0 1.66 3.58 3 8 3s8-1.34 8-3V6" />
            <path d="M4 11v5c0 1.66 3.58 3 8 3s8-1.34 8-3v-5" />
          </svg>
        );
      case 'os':
        return (
          <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="#6ee7b7" strokeWidth="1.6">
            <rect x="4" y="4" width="16" height="16" rx="3" />
            <rect x="9" y="9" width="6" height="6" rx="1" />
            <path d="M9 1v3m6-3v3m-6 16v3m6-3v3M1 9h3m-3 6h3m16-6h3m-3 6h3" />
          </svg>
        );
      case 'algo':
        return (
          <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="1.6">
            <path d="M4 19l4-6 4 4 8-10" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="20" cy="7" r="2" fill="#10b981" />
          </svg>
        );
      case 'cn':
        return (
          <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="#a3e635" strokeWidth="1.6">
            <circle cx="12" cy="12" r="9" />
            <path d="M3.6 9h16.8M3.6 15h16.8" />
            <ellipse cx="12" cy="12" rx="4" ry="9" />
          </svg>
        );
      default:
        return <span className="text-emerald-400 font-mono text-sm">✦</span>;
    }
  };

  return (
    <section id="skills" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-20 border-t border-emerald-500/15">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/25 mb-4">
          <span className="w-2 h-2 rounded-full bg-lime-400 animate-pulse"></span>
          <span className="font-mono text-xs text-emerald-300 font-semibold uppercase tracking-wider">
            Technical Proficiency
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
          Tech Stack & <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-lime-300 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(16,185,129,0.3)]">Skills</span>
        </h2>
        <p className="max-w-2xl text-slate-300 text-sm sm:text-base leading-relaxed">
          Categorized toolset spanning low-level algorithms, modern reactive web architectures, and foundational computer science principles.
        </p>

        {/* Legend for Comfort Levels */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-6 px-4 py-2 rounded-2xl bg-[#111620]/60 border border-emerald-500/15 backdrop-blur-md">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_6px_#34d399]"></span>
            <span>Proficient</span>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
            <span className="w-2 h-2 rounded-full bg-lime-400 shadow-[0_0_6px_#a3e635]"></span>
            <span>Familiar</span>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
            <span className="w-2 h-2 rounded-full bg-teal-300 animate-pulse shadow-[0_0_6px_#5eead4]"></span>
            <span>Currently Learning</span>
          </div>
        </div>
      </div>

      {/* 3 Categorized Glass Card Columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 items-start">
        {skillCategories.map((category, catIdx) => (
          <div
            key={catIdx}
            className="rounded-2xl bg-gradient-to-b from-[#111620]/80 to-[#0d1117]/90 border border-emerald-500/20 backdrop-blur-xl p-6 sm:p-7 shadow-[0_8px_30px_rgba(0,0,0,0.5)] hover:border-emerald-500/35 transition-all duration-300 flex flex-col justify-between"
          >
            {/* Category Header */}
            <div className="flex items-center justify-between gap-3 mb-6 pb-4 border-b border-emerald-500/15">
              <div className="flex items-center gap-2.5">
                <span className="text-xl" role="img" aria-label={category.title}>
                  {category.icon}
                </span>
                <h3 className="text-lg font-bold text-white tracking-tight">
                  {category.title}
                </h3>
              </div>
              <span className="text-[11px] font-mono text-emerald-400/80 bg-emerald-950/40 border border-emerald-500/25 px-2 py-0.5 rounded-full">
                {category.skills.length} Skills
              </span>
            </div>

            {/* Badges Grid with Official Icons & Interactive Tooltips */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {category.skills.map((skill, skillIdx) => {
                const style = getLevelStyles(skill.levelType);
                return (
                  <div
                    key={skillIdx}
                    className="group relative flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-[#161b22]/70 border border-emerald-500/15 hover:border-emerald-400/70 hover:bg-emerald-950/30 hover:scale-105 hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all duration-200 cursor-pointer select-none"
                  >
                    {/* Official Tech Icon */}
                    {renderSkillIcon(skill.iconType)}

                    {/* Skill Label */}
                    <span className="text-xs font-mono font-medium text-slate-200 group-hover:text-white transition-colors truncate">
                      {skill.name}
                    </span>

                    {/* Interactive Tooltip with Comfort Level (Positioned above badge on hover) */}
                    <div className="absolute -top-9 left-1/2 -translate-x-1/2 pointer-events-none opacity-0 group-hover:opacity-100 group-hover:-top-10 transition-all duration-200 z-30">
                      <div className={`px-2.5 py-1 rounded-md bg-[#07090d]/95 border ${style.border} text-[11px] font-mono whitespace-nowrap shadow-[0_4px_16px_rgba(0,0,0,0.8)] flex items-center gap-1.5 backdrop-blur-md`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${style.dot}`}></span>
                        <span className={style.text}>{skill.level}</span>
                      </div>
                      {/* Tooltip tiny bottom arrow */}
                      <div className={`w-1.5 h-1.5 rotate-45 bg-[#07090d] border-r border-b ${style.border} mx-auto -mt-1`}></div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Category Micro Footer */}
            <div className="mt-6 pt-4 border-t border-emerald-500/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span>{category.badge}</span>
              <span className="text-emerald-400/60">CS @ KSIT</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

