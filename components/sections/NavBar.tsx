'use client';

import React, { useState, useEffect } from 'react';

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#inicio', label: 'Inicio' },
    { href: '#embajadores', label: 'Embajadores' },
    { href: '#hub', label: 'El Hub' },
    { href: '#sponsors', label: 'Sponsors' },
  ];

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav 
      className={`flex flex-row items-center justify-between fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-out ${
        isScrolled ? 'w-[95%] md:w-[90%]' : 'w-[98%] md:w-[95%]'
      } max-w-7xl`}
    >
      {/* Logo */}
      <a 
            href="#inicio" 
            className="text-white font-bold text-xl md:text-2xl font-['Space_Mono'] hover:text-[#F8B124] transition-all duration-300"
          >
            URUSport SUMMIT 2026
          </a>
      <div
        className={`relative backdrop-blur-2xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl transition-all duration-500 ${
          isScrolled ? 'shadow-[0_8px_32px_rgba(0,0,0,0.3)]' : 'shadow-[0_8px_32px_rgba(0,0,0,0.2)]'
        }`}
        style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 100%)',
        }}
      >
        {/* Desktop & Mobile Header */}
        <div className="flex items-center justify-between px-6 md:px-8 py-4">
          

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/90 hover:text-[#F8B124] transition-all duration-300 uppercase tracking-wider text-sm font-['Space_Mono'] font-medium relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#F8B124] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <button className="bg-secondary text-white px-6 py-2.5 rounded-2xl text-xs font-bold uppercase tracking-wider hover:from-[#F8B124] hover:to-[#F8B124] transition-all duration-300 shadow-lg font-['Space_Mono'] hover:scale-105 hover:shadow-xl">
              Registrarse
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-xl transition-all duration-300"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-6 pb-6 space-y-3 border-t border-white/10 pt-4">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="block text-white/90 hover:text-[#F8B124] hover:bg-white/10 px-4 py-3 rounded-xl transition-all duration-300 uppercase tracking-wider text-sm font-['Space_Mono'] font-medium"
                style={{
                  animationDelay: `${index * 50}ms`,
                }}
              >
                {link.label}
              </a>
            ))}
            <button 
              onClick={handleLinkClick}
              className="w-full bg-gradient-to-r from-[#2E96C4] to-[#203867] text-white px-6 py-3 rounded-2xl text-sm font-bold uppercase tracking-wider hover:from-[#F8B124] hover:to-[#F8B124] transition-all duration-300 shadow-lg font-['Space_Mono'] mt-2"
            >
              Registrarse
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
