'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Plus, ChevronDown, Calendar } from 'lucide-react';
import Logo from './Logo';
import ChangeSection from './ChangeSection';

// Registrar plugin de ScrollTrigger
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animación del hero
      gsap.from('.hero-content', {
        opacity: 0,
        y: 50,
        duration: 1.2,
        ease: 'power3.out',
        stagger: 0.2,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#1f1f1f]"
    >
      <div className="absolute inset-0 bg-linear-to-b from-[#1f1f1f]/40 via-[#1f1f1f]/50 to-[#1f1f1f]/30 z-10"></div>

      {/* Video de fondo */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/videos/hero_video.mp4" type="video/mp4" />
        Tu navegador no soporta el elemento video.
      </video>

      {/* Dark Overlay */}

      {/* Contenido del Hero */}
      <div className="relative z-10 w-full px-6 lg:px-16 max-w-[1600px] mx-auto">
        <div className="flex flex-col items-center lg:flex-row lg:items-center lg:justify-center w-full gap-12 lg:gap-24 xl:gap-32">
          {/* Logo Hero - Solo visible en desktop */}
          <div className="hidden lg:block lg:w-80 xl:w-96">
            <div className="max-w-sm">
              <Logo/>
            </div>
          </div>

          {/* Featured Card - Flotante */}
          <div className="hero-content w-full max-w-md lg:max-w-lg xl:max-w-xl">
            <div className="bg-white rounded-2xl p-6 md:p-8  shadow-2xl backdrop-blur-sm">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 lg:gap-10">
                {/* Contenido principal */}
                <div className="flex-1">
                  <div className="inline-block mb-4">
                    <span className="bg-[#203867] text-white px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider font-['Space_Mono']">
                      PRÓXIMAMENTE
                    </span>
                  </div>
                  
                  <h2 className="text-[#1f1f1f] text-2xl md:text-4xl font-bold mb-3 font-['Space_Mono'] leading-tight">
                    URUSport Summit 2026
                  </h2>
                  
                  <p className="text-[#1f1f1f]/80 text-lg font-['Plus_Jakarta_Sans'] mb-2">
                    Marzo 2026
                  </p>
                </div>

                {/* Icono más - estilo moon/toggle */}
                <button
                  className="shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#1f1f1f] flex items-center justify-center hover:bg-[#2E96C4] transition-all duration-300 group"
                  aria-label="Más información"
                >
                  <Plus className="w-7 h-7 text-white group-hover:rotate-90 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Sección inferior - CTA para explorar eventos
      <div className="absolute bottom-0 left-0 right-0 bg-background py-8 md:py-12 rounded-t-4xl z-20">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-16">
          <button
            onClick={() => {
              const eventsSection = document.getElementById('eventos');
              if (eventsSection) {
                eventsSection.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start'
                });
              }
            }}
            className="group flex items-center gap-4 text-secondary hover:text-[#2E96C4] transition-colors duration-300 cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <Calendar className="w-6 h-6 text-[#2E96C4] group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-base md:text-lg font-semibold font-['Space_Mono'] uppercase tracking-wide">
                Explora todos los eventos próximos
              </h3>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm font-['Plus_Jakarta_Sans'] text-secondary/70 group-hover:text-[#2E96C4]/70 transition-colors duration-300">
                Ver más
              </span>
              <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
            </div>
          </button>
        </div>
      </div> */}
    </section>
  );
}
