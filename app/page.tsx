'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Target, Sparkles, Mail } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const section1Ref = useRef<HTMLElement>(null);
  const section2Ref = useRef<HTMLElement>(null);
  const section3Ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Section Animation
      gsap.from('.hero-title', {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out',
      });

      gsap.from('.hero-description', {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.2,
        ease: 'power3.out',
      });

      gsap.from('.hero-cta', {
        opacity: 0,
        y: 20,
        duration: 1,
        delay: 0.4,
        ease: 'power3.out',
      });

      // Section 1 Animation
      gsap.from('.section-1', {
        opacity: 0,
        y: 60,
        duration: 1,
        scrollTrigger: {
          trigger: '.section-1',
          start: 'top 80%',
          end: 'top 50%',
          scrub: 1,
        },
      });

      // Section 2 Animation
      gsap.from('.section-2', {
        opacity: 0,
        y: 60,
        duration: 1,
        scrollTrigger: {
          trigger: '.section-2',
          start: 'top 80%',
          end: 'top 50%',
          scrub: 1,
        },
      });

      // Section 3 Animation
      gsap.from('.section-3', {
        opacity: 0,
        y: 60,
        duration: 1,
        scrollTrigger: {
          trigger: '.section-3',
          start: 'top 80%',
          end: 'top 50%',
          scrub: 1,
        },
      });

      // Icons Animation
      gsap.from('.icon-animate', {
        scale: 0,
        rotation: 180,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.section-1',
          start: 'top 70%',
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-linear-to-b from-zinc-950 via-zinc-900 to-black text-white">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-size-[64px_64px]"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center space-y-8">
          <h1 className="hero-title text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
            Amamos el deporte{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-cyan-400 to-blue-600">
              tanto como vos
            </span>
          </h1>

          <p className="hero-description text-xl md:text-2xl text-zinc-300 max-w-4xl mx-auto leading-relaxed">
            Queremos hacerlo más profesional contigo, involucrando todos los actores del ecosistema
            deportivo uruguayo. <span className="text-cyan-400 font-semibold">¿Porqué?</span>{' '}
            Nutrirnos de perspectivas complementarias se vuelve indispensable en el deporte del S.
            XXI si buscamos competir.
          </p>

          <div className="hero-cta pt-8">
            <Button
              size="lg"
              className="group bg-linear-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-6 text-lg rounded-full shadow-2xl shadow-blue-500/50 transition-all duration-300 hover:scale-105"
            >
              ¿Evolucionamos juntos?
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-zinc-500 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-zinc-500 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Section 1: Construir la Conexión */}
      <section
        ref={section1Ref}
        className="section-1 relative py-32 px-6 bg-linear-to-b from-black via-zinc-900 to-zinc-950"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-12">
            <div className="flex justify-center gap-8 mb-16">
              <div className="icon-animate w-20 h-20 rounded-full bg-linear-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-500/50">
                <Users className="w-10 h-10" />
              </div>
              <div className="icon-animate w-20 h-20 rounded-full bg-linear-to-br from-cyan-500 to-teal-500 flex items-center justify-center shadow-lg shadow-cyan-500/50">
                <Target className="w-10 h-10" />
              </div>
              <div className="icon-animate w-20 h-20 rounded-full bg-linear-to-br from-teal-500 to-blue-500 flex items-center justify-center shadow-lg shadow-teal-500/50">
                <Sparkles className="w-10 h-10" />
              </div>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
              ¿Qué deporte construimos?{' '}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-400">
                ¿Y si lo pensamos juntos?
              </span>
            </h2>

            <p className="text-xl md:text-2xl text-zinc-300 max-w-4xl mx-auto leading-relaxed">
              Directivos, Atletas, Empresarios, Políticos, Entrenadores y Profesionales del sector
              en un mismo lugar compartiendo experiencias, conocimiento e intereses en pos de un
              crecimiento exponencial del sector.
            </p>

            <div className="pt-8 space-y-6">
              <p className="text-lg md:text-xl text-cyan-400 font-semibold">
                Vení a aportar tú voz, energía e ideas.
              </p>
              <p className="text-base md:text-lg text-zinc-400 max-w-3xl mx-auto">
                Los Líderes de todas las áreas exponen los desafíos en su sector. Caracterizados
                por una época de{' '}
                <span className="text-white font-semibold">
                  rápidos avances tecnológicos, sobre información y globalización
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Acerca de la Marca */}
      <section
        ref={section2Ref}
        className="section-2 relative py-32 px-6 bg-linear-to-b from-zinc-950 via-black to-zinc-950"
      >
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-block p-1 rounded-full bg-linear-to-r from-blue-600 to-cyan-600">
            <div className="bg-black px-8 py-3 rounded-full">
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-400 font-semibold text-lg">
                Nuestro Equipo
              </span>
            </div>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            Somos un equipo de{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-400">
              jóvenes profesionales
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-zinc-300 leading-relaxed">
            que nos mueve el desafío impactar positivamente al país a través del deporte.
          </p>

          {/* Stats or visual elements */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16">
            <div className="p-8 rounded-2xl bg-linear-to-br from-zinc-900 to-zinc-800 border border-zinc-700 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105">
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-400">
                1000+
              </div>
              <p className="text-zinc-400 mt-2">Líderes del sector</p>
            </div>
            <div className="p-8 rounded-2xl bg-linear-to-br from-zinc-900 to-zinc-800 border border-zinc-700 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105">
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-teal-400">
                Hub
              </div>
              <p className="text-zinc-400 mt-2">Ecosistema deportivo</p>
            </div>
            <div className="p-8 rounded-2xl bg-linear-to-br from-zinc-900 to-zinc-800 border border-zinc-700 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105">
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-linear-to-r from-teal-400 to-blue-400">
                2026
              </div>
              <p className="text-zinc-400 mt-2">Mirando al futuro</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Call to Action Final */}
      <section
        ref={section3Ref}
        className="section-3 relative py-32 px-6 bg-linear-to-b from-zinc-950 to-black"
      >
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            No dudes en{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-400">
              contactarnos
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-zinc-300 leading-relaxed">
            Ahora sos parte del cambio
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button
              size="lg"
              className="group bg-linear-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-6 text-lg rounded-full shadow-2xl shadow-blue-500/50 transition-all duration-300 hover:scale-105"
            >
              <Mail className="mr-2 h-5 w-5" />
              Contactar
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="group border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105"
            >
              Agendar reunión
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-12 px-6">
        <div className="max-w-6xl mx-auto text-center text-zinc-500">
          <p>© 2026 URUSport SUMMIT. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
