'use client';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Plus, ChevronDown } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import Logo from './Logo';

// Registrar plugin de ScrollTrigger
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

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

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={heroRef}
      id="inicio"
      className="relative h-screen flex items-center overflow-hidden bg-[#203867]"
    >
      {/* Fondo de carga - se oculta cuando el video está listo */}
      <div 
        className={`absolute inset-0 bg-[#203867] transition-opacity duration-1000 ${
          videoLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      />

      {/* Video de fondo */}
      <video
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
          videoLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        muted
        loop
        playsInline
        autoPlay
        preload="auto"
        onLoadedData={() => setVideoLoaded(true)}
      >
        <source src="/videos/hero_video.mp4" type="video/mp4" />
        Tu navegador no soporta el elemento video.
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-[#1f1f1f]/40 via-[#1f1f1f]/50 to-[#1f1f1f]/30 z-10"></div>

      {/* Contenido del Hero */}
      <div className="relative z-10 w-full h-full flex flex-col px-6 lg:px-16 max-w-[1600px] mx-auto">
        {/* Layout móvil: Logo centrado, Card abajo */}
        <div className="lg:hidden flex flex-col justify-end min-h-screen relative">
          {/* Logo - Centrado vertical y horizontalmente */}
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="w-48 md:w-64">
              <Logo/>
            </div>
          </div>

          {/* Featured Card - Al final */}
          <div className="flex justify-center items-end pb-12 relative z-10">
            <div className="hero-content w-full max-w-xs md:max-w-sm">
              <div className="backdrop-blur-3xl bg-white/10 border border-white/30 rounded-2xl p-5 md:p-6 shadow-2xl transition-all duration-300 hover:bg-white/15 hover:border-white/40"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.08) 100%)',
                }}
              >
                <div className="flex flex-col items-start justify-between gap-6">
                  {/* Contenido principal */}
                  <div className="flex-1">
                    <div className="inline-block mb-3">
                      <span className="bg-[#203867]/90 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider font-['Space_Mono'] shadow-lg">
                        PRÓXIMAMENTE
                      </span>
                    </div>
                    
                    <h2 className="text-white text-xl font-bold mb-2 font-['Space_Mono'] leading-tight"
                      style={{ textShadow: '0 2px 12px rgba(0,0,0,0.6)' }}
                    >
                      URUSport SUMMIT 2026
                    </h2>
                    
                    <p className="text-white/90 text-base font-['Plus_Jakarta_Sans'] mb-2"
                      style={{ textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}
                    >
                  
                    </p>
                  </div>

                  {/* Icono más */}
                  <button
                    className="self-end w-11 h-11 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center hover:bg-[#2E96C4] hover:border-[#2E96C4] transition-all duration-300 group shadow-lg"
                    aria-label="Más información"
                  >
                    <Plus className="w-6 h-6 text-white group-hover:rotate-90 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Layout desktop: Logo izquierda, Card derecha */}
        <div className="hidden lg:flex lg:flex-row lg:items-center lg:justify-between w-full h-full">
          {/* Logo */}
          <div className="w-80 xl:w-96 ">
            <Logo/>
          </div>

          {/* Featured Card */}
          <div className="hero-content max-w-sm ">
            <div className="backdrop-blur-3xl bg-white/10 border border-white/30 rounded-2xl p-8 shadow-2xl transition-all duration-300 hover:bg-white/15 hover:border-white/40"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.08) 100%)',
              }}
            >
              <div className="flex flex-row items-center justify-between gap-8">
                {/* Contenido principal */}
                <div className="flex-1">
                  <div className="inline-block mb-3">
                    <span className="bg-[#203867]/90 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider font-['Space_Mono'] shadow-lg">
                      PRÓXIMAMENTE
                    </span>
                  </div>
                  
                  <h2 className="text-white text-4xl font-bold mb-3 font-['Space_Mono'] leading-tight"
                    style={{ textShadow: '0 2px 12px rgba(0,0,0,0.6)' }}
                  >
                    URUSport SUMMIT 2026
                  </h2>
                  
                  <p className="text-white/90 text-lg font-['Plus_Jakarta_Sans'] mb-2"
                    style={{ textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}
                  >
                
                  </p>
                </div>

                {/* Icono más */}
                <a
                  href="mailto:info@urusuportsummit.uy"
                  className="shrink-0 w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center hover:bg-[#2E96C4] hover:border-[#2E96C4] transition-all duration-300 group shadow-lg"
                  aria-label="Más información"
                >
                  <Plus className="w-7 h-7 text-white group-hover:rotate-90 transition-transform duration-300" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Indicador de scroll - flecha animada */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <button
          onClick={() => {
            const nextSection = document.getElementById('sobre-nosotros');
            if (nextSection) {
              nextSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
              });
            }
          }}
          className="group flex flex-col items-center gap-2 text-white/80 hover:text-white transition-colors duration-300 cursor-pointer"
          aria-label="Desplazarse hacia abajo"
        >
          <span className="text-xs font-['Plus_Jakarta_Sans'] uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Descubre más
          </span>
          <div className="w-10 h-10 rounded-full border-2 border-white/50 flex items-center justify-center group-hover:border-white group-hover:bg-white/10 transition-all duration-300">
            <ChevronDown className="w-5 h-5" />
          </div>
        </button>
      </div>

      {/* Gradiente inferior para suavizar la transición */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-white/10 to-transparent z-15 pointer-events-none"></div>
    </section>
  );
}
