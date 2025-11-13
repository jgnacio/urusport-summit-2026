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
  const videoRef = useRef<HTMLVideoElement>(null);

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

    // Iniciar el video después de que termine la animación del Splash
    // La animación del Splash dura aproximadamente 2.5 segundos
    const videoTimer = setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play().catch((error) => {
          console.log('Error al reproducir el video:', error);
        });
      }
    }, 2400); // 2.6 segundos para asegurar que el Splash haya terminado

    return () => {
      ctx.revert();
      clearTimeout(videoTimer);
    };
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
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        muted
        loop
        playsInline
      >
        <source src="/videos/hero_video.mp4" type="video/mp4" />
        Tu navegador no soporta el elemento video.
      </video>

      {/* Dark Overlay */}

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
                      Marzo 2026
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
                    Mayo 2026
                  </p>
                </div>

                {/* Icono más */}
                <button
                  className="shrink-0 w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center hover:bg-[#2E96C4] hover:border-[#2E96C4] transition-all duration-300 group shadow-lg"
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
