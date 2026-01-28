'use client';

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determinar si estamos en la página de inicio
  const isHomePage = pathname === '/';

  // Configurar enlaces según la página actual
  const navLinks = [
    { href: isHomePage ? '#inicio' : '/#inicio', label: 'Inicio' },
    { href: isHomePage ? '#about-us' : '/#about-us', label: 'Summit' },
    { href: isHomePage ? '#ambassadors' : '/#ambassadors', label: 'Embajadores' },
    { href: isHomePage ? '#hub' : '/#hub', label: 'Equipo' },
    { href: '/sponsors', label: 'Sponsors' },
  ];

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav 
      className={`flex flex-row items-center justify-center md:justify-between fixed z-50 transition-all duration-500 ease-out ${
        isScrolled ? 'top-2 md:top-4' : 'top-4'
      } ${
        // En móvil: ancho completo sin márgenes, en desktop: centrado con márgenes
        isScrolled 
          ? 'w-full md:w-[90%] md:left-1/2 md:-translate-x-1/2' 
          : 'w-full md:w-[95%] md:left-1/2 md:-translate-x-1/2'
      } max-w-7xl`}
    >
      {/* Logo - Solo visible en desktop, fuera de la barra */}
      <Link
            href={isHomePage ? "#inicio" : "/#inicio"}
            className="text-white inverted-colors: font-bold text-xl hidden md:block md:text-2xl font-['Space_Mono'] hover:text-[#F8B124] transition-all duration-300"
          >
            URUSport SUMMIT 2026
          </Link>
      <div
        className={`relative backdrop-blur-3xl bg-black/30 border border-white/20 rounded-3xl shadow-2xl transition-all duration-500 w-[90%] md:w-auto ${
          isScrolled ? 'shadow-[0_8px_32px_rgba(0,0,0,0.3)]' : 'shadow-[0_8px_32px_rgba(0,0,0,0.2)]'
        } md:rounded-3xl`}
        style={{
          background: 'linear-gradient(135deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.3) 100%)',
        }}
      >
        {/* Desktop & Mobile Header */}
        <div className="flex items-center justify-between px-6 md:px-8 py-4">
          {/* Logo móvil - Visible solo en mobile dentro de la barra */}
          <Link
            href={isHomePage ? "#inicio" : "/#inicio"}
            className="flex items-center md:hidden"
          >
            <img
              src="/images/logo_urusport_summit_2026.webp"
              alt="URUSport SUMMIT 2026"
              className="h-8 w-auto"
            />
          </Link>
          

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white hover:text-[#F8B124] transition-all duration-300 uppercase tracking-wider text-sm font-['Space_Mono'] font-medium relative group"
                style={{ textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#F8B124] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            <a href="mailto:info@urusuportsummit.uy" className="bg-secondary text-white px-6 py-2.5 rounded-2xl text-xs font-bold uppercase tracking-wider hover:from-[#F8B124] hover:to-[#F8B124] transition-all duration-300 shadow-lg font-['Space_Mono'] hover:scale-105 hover:shadow-xl">
              Registrarse
            </a>
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
              <Link
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="block text-white hover:text-[#F8B124] hover:bg-black/20 px-4 py-3 rounded-xl transition-all duration-300 uppercase tracking-wider text-sm font-['Space_Mono'] font-medium relative group"
                style={{
                  animationDelay: `${index * 50}ms`,
                  textShadow: '0 2px 8px rgba(0,0,0,0.5)',
                }}
              >
                {link.label}
                <span className="absolute -bottom-1 left-4 w-0 h-0.5 bg-[#F8B124] transition-all duration-300 group-hover:w-[calc(100%-2rem)]"></span>
              </Link>
            ))}
            <a href="mailto:info@urusuportsummit.uy" className="bg-secondary text-white w-full px-6 py-2.5 rounded-2xl text-xs font-bold uppercase tracking-wider hover:from-[#F8B124] hover:to-[#F8B124] transition-all duration-300 shadow-lg font-['Space_Mono'] hover:scale-105 hover:shadow-xl inline-block text-center">
              Registrarse
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
