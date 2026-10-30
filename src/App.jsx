import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import EducationJourneySection from './components/EducationJourneySection';
import MatrixGridCanvas from './components/MatrixGridCanvas';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#0d1117] text-slate-100 overflow-x-hidden selection:bg-emerald-500 selection:text-black">
      {/* 1. Interactive HTML5 Matrix-Dot Grid Canvas with Perspective Ripple */}
      <MatrixGridCanvas />

      {/* Cyber subtle scanline overlay for retro-futuristic atmosphere */}
      <div className="cyber-scanlines fixed inset-0 pointer-events-none z-10 opacity-30" />

      {/* 2. Floating Frosted-Glass Navbar (Fixed at Top) */}
      <Navbar />

      {/* 3. Main Content Flow */}
      <main className="relative z-20">
        {/* Intro 'Hero' Screen */}
        <Hero />

        {/* Featured Projects Showcase (Directly below the Intro section) */}
        <ProjectsSection />

        {/* Tech Stack & Skills (Directly below the Projects section) */}
        <SkillsSection />

        {/* Education & Campus Journey (Directly below the Skills section) */}
        <EducationJourneySection />

        {/* About Section */}
        <section id="about" className="py-20 px-4 sm:px-6 max-w-5xl mx-auto border-t border-emerald-500/15">
          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono text-emerald-400 text-sm">01.</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">About Sanjitha</h2>
            <div className="h-[1px] flex-1 bg-emerald-500/20 max-w-xs"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-carbon-900/60 border border-emerald-500/20 backdrop-blur-md">
              <h3 className="text-lg font-semibold text-emerald-300 mb-2">CS Engineering Journey</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Currently in my 2nd year at K S Institute of Technology, diving deep into data structures, algorithms,
                and modern system architectures. I love bridging theoretical computer science with intuitive human-centric UI/UX.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-carbon-900/60 border border-emerald-500/20 backdrop-blur-md">
              <h3 className="text-lg font-semibold text-lime-300 mb-2">Vision & Passion</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Aiming to build high-performance web applications powered by generative AI models and intelligent automations. Always eager to collaborate on hackathons, open-source repos, and high-impact internships.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4 sm:px-6 max-w-5xl mx-auto border-t border-emerald-500/15">
          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono text-emerald-400 text-sm">02.</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Get in Touch</h2>
            <div className="h-[1px] flex-1 bg-emerald-500/20 max-w-xs"></div>
          </div>
          <div className="p-8 rounded-2xl bg-gradient-to-br from-carbon-900/90 to-carbon-850/80 border border-emerald-500/30 text-center max-w-xl mx-auto backdrop-blur-xl shadow-[0_0_30px_rgba(16,185,129,0.15)]">
            <h3 className="text-xl font-bold text-white mb-2">Ready to create something impactful?</h3>
            <p className="text-sm text-slate-300 mb-6">
              I am actively looking for internship roles and open-source opportunities. My inbox is always open!
            </p>
            <a
              href="mailto:sanjitha.v@ksit.edu"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-mono text-sm font-semibold text-carbon-950 bg-gradient-to-r from-emerald-400 to-lime-400 hover:from-emerald-300 hover:to-lime-300 shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all hover:-translate-y-0.5"
            >
              <span>sanjitha.v@ksit.edu</span>
              <span>↗</span>
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-20 py-8 px-4 text-center border-t border-emerald-500/15 bg-carbon-950/80">
        <p className="font-mono text-xs text-slate-400">
          Designed & Crafted with <span className="text-emerald-400">Cyber-Emerald</span> by{' '}
          <span className="text-white font-semibold">Sanjitha V</span> • CS @ KSIT
        </p>
      </footer>
    </div>
  );
}
