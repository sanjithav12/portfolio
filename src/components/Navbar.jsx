import React, { useState, useEffect } from 'react';

/**
 * Navbar
 * Floating frosted-glass navbar fixed at top.
 * Features Sanjitha's brand mark, cyber navigation links, and animated mobile drawer.
 */
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Campus Life', href: '#campus-life' },
    { name: 'Contact', href: '#contact' },
  ];

  // Track scroll position to enhance frosted blur & border opacity
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4 sm:pt-5 transition-all duration-300">
      <nav
        className={`max-w-6xl mx-auto rounded-2xl transition-all duration-500 ${
          isScrolled
            ? 'bg-[#0d1117]/85 border border-emerald-500/30 backdrop-blur-xl shadow-[0_12px_40px_rgba(0,0,0,0.7)] shadow-emerald-950/30 py-3 px-5 sm:px-7'
            : 'bg-[#0d1117]/60 border border-emerald-500/15 backdrop-blur-lg shadow-[0_8px_24px_rgba(0,0,0,0.4)] py-3.5 px-5 sm:px-7'
        }`}
        aria-label="Main Navigation"
      >
        <div className="flex items-center justify-between">
          {/* Logo / Brand Mark */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-lg p-1"
          >
            {/* Cyber Monogram Badge */}
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500/20 to-lime-500/10 border border-emerald-500/30 group-hover:border-emerald-400 group-hover:shadow-[0_0_16px_rgba(16,185,129,0.5)] transition-all duration-300">
              <span className="font-mono font-bold text-base bg-gradient-to-r from-emerald-400 to-lime-300 bg-clip-text text-transparent">
                SV
              </span>
              <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            </div>

            {/* Name & Title */}
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-base sm:text-lg tracking-tight text-white group-hover:text-emerald-300 transition-colors">
                  Sanjitha V
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-lime-400"></span>
              </div>
              <span className="text-[11px] font-mono text-emerald-400/70 tracking-wider">
                CS @ KSIT
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.name.toLowerCase().replace(' ', '-');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setActiveSection(link.name.toLowerCase().replace(' ', '-'))}
                  className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 group ${
                    isActive
                      ? 'text-emerald-300 bg-emerald-950/40'
                      : 'text-slate-300 hover:text-white hover:bg-emerald-500/10'
                  }`}
                >
                  <span className="relative z-10">{link.name}</span>
                  {/* Subtle hover bottom cyber dash */}
                  <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-gradient-to-r from-emerald-400 to-lime-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full origin-left"></span>
                </a>
              );
            })}
          </div>

          {/* Action / Connect Quick Button (Desktop) */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              className="relative inline-flex items-center justify-center px-4 py-2 text-xs font-mono font-semibold tracking-wide text-emerald-300 hover:text-white rounded-xl border border-emerald-500/40 hover:border-lime-400 bg-emerald-950/30 hover:bg-emerald-500/20 hover:shadow-[0_0_20px_rgba(16,185,129,0.35)] transition-all duration-300 group"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-2 group-hover:bg-lime-300 animate-pulse"></span>
              Say Hello
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden relative p-2.5 rounded-xl border border-emerald-500/25 bg-emerald-950/30 text-emerald-400 hover:text-white hover:border-emerald-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 transition-colors"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            <div className="w-5 h-4 flex flex-col justify-between items-center relative">
              <span
                className={`w-full h-0.5 bg-current rounded-full transition-transform duration-300 ${
                  mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                }`}
              ></span>
              <span
                className={`w-full h-0.5 bg-current rounded-full transition-opacity duration-300 ${
                  mobileMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              ></span>
              <span
                className={`w-full h-0.5 bg-current rounded-full transition-transform duration-300 ${
                  mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                }`}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile Dropdown Drawer */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen ? 'max-h-96 opacity-100 mt-4 pt-4 border-t border-emerald-500/20' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col gap-2 pb-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium text-slate-200 hover:text-emerald-300 hover:bg-emerald-950/40 border border-transparent hover:border-emerald-500/25 transition-all"
              >
                <span>{link.name}</span>
                <span className="font-mono text-xs text-emerald-500/60">→</span>
              </a>
            ))}
            <div className="pt-2 mt-2 border-t border-emerald-500/15">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl font-mono text-xs font-semibold text-carbon-900 bg-gradient-to-r from-emerald-400 to-lime-400 hover:from-emerald-300 hover:to-lime-300 shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-all"
              >
                <span>Get In Touch</span>
                <span>👋</span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

