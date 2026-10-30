import React, { useState } from 'react';
import ProjectCard from './ProjectCard';

/**
 * ProjectsSection
 * Showcase section featuring filter pills and a responsive 3-column grid
 * of 3 student projects with 3D perspective tilt and specular shine effects.
 */
export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All', count: 3 },
    { id: 'web-apps', label: 'Web Apps', count: 3 },
    { id: 'ai-ml', label: 'AI / ML', count: 2 },
    { id: 'mini-projects', label: 'Mini-Projects', count: 1 },
  ];

  const projectsData = [
    {
      id: 'student-mgmt',
      title: 'Student Management System',
      badge: 'Web App',
      type: 'Academic Portal',
      featured: false,
      categories: ['all', 'web-apps', 'mini-projects'],
      description:
        'A web-based application designed to manage student information, attendance, academic records, and performance efficiently. It provides an admin dashboard to add, update, delete, and retrieve student details easily.',
      highlights: [
        'Admin Dashboard & Role-based Access Control',
        'Attendance Tracking & Performance Analytics',
        'Rapid CRUD operations with secure database queries',
      ],
      tech: ['React', 'Node.js', 'MySQL', 'Tailwind CSS', 'REST API'],
      links: {
        demo: '#',
        github: '#',
      },
    },
    {
      id: 'arthamitra',
      title: 'Arthamitra',
      badge: 'Social Impact // Voice AI',
      type: 'Community Fintech',
      featured: true,
      categories: ['all', 'web-apps', 'ai-ml'],
      description:
        'A Kannada-friendly mobile/web app for the urban slum community of Raagigudda (Vivekananda Colony), helping families track irregular daily income, expenses and savings goals. It also matches each household to the government schemes it qualifies for and shows the documents needed to apply, with short financial-literacy lessons and voice input for low-literacy users.',
      highlights: [
        'Kannada voice input assistance for low-literacy users',
        'Automatic qualification engine for government schemes',
        'Irregular daily cashflow tracker & savings modules',
      ],
      tech: ['React', 'Voice AI', 'Kannada NLP', 'FastAPI', 'Tailwind'],
      links: {
        demo: '#',
        github: '#',
      },
    },
    {
      id: 'smart-retail',
      title: 'Smart Retail Management System',
      badge: 'Predictive ML & Retail',
      type: 'Intelligent Inventory',
      featured: true,
      categories: ['all', 'ai-ml', 'web-apps'],
      description:
        'A smart retail management system that helps small retailers manage inventory, track sales, and receive low-stock alerts. It uses past sales data to predict future product demand and recommend the right quantity to restock.',
      highlights: [
        'ML sales forecasting based on past seasonal trends',
        'Dynamic low-stock notification triggers',
        'Intelligent restock quantity recommendation engine',
      ],
      tech: ['Python', 'Scikit-Learn', 'React', 'FastAPI', 'Chart.js'],
      links: {
        demo: '#',
        github: '#',
      },
    },
  ];

  const filteredProjects = projectsData.filter((p) =>
    p.categories.includes(activeFilter)
  );

  return (
    <section id="projects" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-20">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/25 mb-4">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
          <span className="font-mono text-xs text-emerald-300 font-semibold uppercase tracking-wider">
            Portfolio Showcase
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
          Featured{' '}
          <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-lime-300 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(16,185,129,0.3)]">
            Projects
          </span>
        </h2>
        <p className="max-w-2xl text-slate-300 text-sm sm:text-base leading-relaxed">
          Real-world applications engineered for community empowerment, academic efficiency, and data-driven intelligence.
        </p>
      </div>

      {/* Filter Pill Row */}
      <div className="flex items-center justify-center mb-12">
        <div className="inline-flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 p-1.5 rounded-2xl bg-carbon-900/80 border border-emerald-500/25 backdrop-blur-xl shadow-[0_4px_20px_rgba(0,0,0,0.4)]">
          {filters.map((filter) => {
            const isActive = activeFilter === filter.id;
            return (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`relative px-4 py-2 rounded-xl text-xs sm:text-sm font-mono font-medium transition-all duration-300 cursor-pointer focus:outline-none ${
                  isActive
                    ? 'text-carbon-950 bg-gradient-to-r from-emerald-400 to-lime-400 shadow-[0_0_15px_rgba(16,185,129,0.4)] font-bold'
                    : 'text-slate-300 hover:text-white hover:bg-emerald-500/10'
                }`}
              >
                <span>{filter.label}</span>
                <span
                  className={`ml-1.5 text-[11px] px-1.5 py-0.2 rounded-full ${
                    isActive ? 'bg-black/20 text-carbon-950' : 'bg-carbon-800 text-emerald-400/80'
                  }`}
                >
                  {filter.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 3-Column Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 items-stretch">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="transition-all duration-500 transform animate-fade-in flex"
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>

      {/* Grid Bottom Summary & GitHub Link */}
      <div className="mt-14 pt-8 border-t border-emerald-500/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
          <span className="w-2 h-2 rounded-full bg-lime-400"></span>
          <span>Showing {filteredProjects.length} of {projectsData.length} projects</span>
        </div>

        <a
          href="https://github.com"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-semibold text-emerald-300 hover:text-white bg-carbon-900/60 hover:bg-emerald-500/10 border border-emerald-500/30 hover:border-emerald-400 transition-all group"
        >
          <span>View More on GitHub</span>
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </a>
      </div>
    </section>
  );
}

