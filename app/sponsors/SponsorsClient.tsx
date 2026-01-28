'use client';

import SponsorsSection from '@/components/sections/SponsorsSection';
import { sponsorPackages, currentSponsors, sponsorsPageContent } from '@/lib/sponsors-data';
import { Leaf, Building, Trophy, Shield, GraduationCap, Building2, Users, Briefcase, Star, Handshake, Mail, Phone, FileText, Target, ArrowLeft, Award, Medal, Crown, Flag, ArrowUpRight } from 'lucide-react';
import AnimatedText from '@/components/ui/AnimatedText';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function SponsorsClient() {
  const descriptionRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const [statsAnimated, setStatsAnimated] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
    }

    const ctx = gsap.context(() => {
      gsap.from('.hero-description', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: descriptionRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });

      // Animación para elementos gráficos flotantes
      gsap.to('.floating-graphic', {
        y: 20,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        stagger: {
          each: 0.5,
          from: 'random'
        }
      });
    }, descriptionRef);

    return () => ctx.revert();
  }, []);

  // Animación de estadísticas
  useEffect(() => {
    if (!statsRef.current || statsAnimated) return;

    const statsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !statsAnimated) {
            setStatsAnimated(true);

            const statElements = statsRef.current?.querySelectorAll('.stat-number');

            statElements?.forEach((element, index) => {
              const targetValue = parseInt(element.getAttribute('data-target') || '0');
              let currentValue = 0;
              const steps = 50; // Número de pasos
              const increment = Math.max(1, Math.floor(targetValue / steps)); // Mínimo 1 por paso

              const timer = setInterval(() => {
                currentValue += increment;
                if (currentValue >= targetValue) {
                  currentValue = targetValue;
                  clearInterval(timer);
                }
                // Siempre mostrar como entero con separadores de miles
                element.textContent = Math.floor(currentValue).toLocaleString();
              }, 25 + index * 80); // Stagger más rápido y fluido
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      statsObserver.observe(statsRef.current);
    }

    return () => statsObserver.disconnect();
  }, [statsAnimated]);

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen px-6 bg-linear-to-br from-[#203867] via-[#2a4a7a] to-[#1a2d5a] overflow-hidden flex items-center">
        {/* Video de fondo */}
        <div className="absolute inset-0 z-0">
          <iframe
            className="w-full h-full object-cover opacity-15 blur-[1px] scale-110 transform-gpu"
            src="https://www.youtube.com/embed/vy6FivZHRjQ?autoplay=1&mute=1&loop=1&playlist=vy6FivZHRjQ&controls=0&showinfo=0&modestbranding=1&iv_load_policy=3&disablekb=1&rel=0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="URUSport SUMMIT 2026 Background Video"
          ></iframe>
          {/* Overlay para fusionar con el fondo */}
          <div className="absolute inset-0 bg-linear-to-br from-[#203867]/70 via-[#2a4a7a]/75 to-primary/10 "></div>
        </div>

        {/* Elementos decorativos para modernidad */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          <div className="absolute bottom-1/4 left-1/10 w-32 h-32 opacity-20 floating-graphic">
            <img src="/images/graphics/estrella fina blanca.png" alt="" className="w-full h-full object-contain animate-spin" style={{ animationDuration: '90s' }} />
          </div>
          <div className="absolute top-1/4 right-1/10 w-40 h-40 opacity-15 floating-graphic" style={{ animationDelay: '1s' }}>
            <img src="/images/graphics/circulos blanco.png" alt="" className="w-full h-full object-contain" />
          </div>
        </div>

        <div className="relative max-w-5xl mx-auto text-center z-20 py-20">
          <div className="mb-6">
            <span className="flex items-center gap-2 w-fit mx-auto bg-[#f4c542]/20 text-[#f4c542] px-4 py-2 rounded-full text-sm font-semibold mb-4 border border-[#f4c542]/30">
            <ArrowUpRight/>  CRECIMIENTO SOSTENIBLE • INNOVACIÓN • IMPACTO
            </span>
          </div>

          <div className="mb-6">
            <AnimatedText
              text={sponsorsPageContent.hero.title}
              as="h1"
              className="text-white text-4xl lg:text-6xl font-bold font-['Space_Mono'] leading-tight"
              staggerDelay={0.02}
              duration={0.6}
              yOffset={80}
              triggerStart="top 90%"
            />
          </div>

          <div ref={descriptionRef} className="max-w-3xl mx-auto mb-8">
            {sponsorsPageContent.hero.description.split('\n\n').map((paragraph, index) => (
              <p key={index} className="hero-description text-white/90 text-lg lg:text-xl font-['Plus_Jakarta_Sans'] leading-relaxed mb-4 last:mb-0">
                {paragraph.split('**').map((part, partIndex) => (
                  partIndex % 2 === 1 ?
                    <span key={partIndex} className="font-bold text-[#f4c542] text-xl">{part}</span> :
                    part
                ))}
              </p>
            ))}
          </div>

          {/* Público objetivo destacado */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-8 mx-auto">
            {[
              { Icon: Building, label: 'Empresas' },
              { Icon: Trophy, label: 'Clubes' },
              { Icon: Flag, label: 'Federaciones' },
              { Icon: GraduationCap, label: 'Instituciones Educativas' },
              { Icon: Building2, label: 'Entes Estatales' },
              { Icon: Users, label: 'Público Deportivo' }
            ].map((item, index) => (
              <div key={index} className="flex gap-2 items-center justify-center rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex justify-center">
                  <item.Icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-white text-sm font-semibold text-center leading-tight">{item.label}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#contacto"
              className="group relative inline-flex items-center gap-3 bg-white text-[#203867] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-all duration-300 hover:scale-[1.05] hover:shadow-lg hover:shadow-gray-200/50 font-['Plus_Jakarta_Sans'] border border-gray-200/50 transform-gpu"
            >
              <span>{sponsorsPageContent.hero.cta}</span>
            </a>
            <div className="flex items-center gap-3 px-6 py-4 rounded-full">
              <div className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4 text-green-400 animate-pulse" />
                <span className="text-white font-semibold text-sm"> MOVIMIENTO ACTIVO</span>
              </div>
              <span className="text-white/80 text-sm font-['Plus_Jakarta_Sans']">  Únete al crecimiento sostenible</span>
            </div>
          </div>
        </div>
     
      </section>

      {/* Beneficios Section */}
      <section className="py-40 px-6 bg-linear-to-br from-slate-50 via-blue-50/30 to-indigo-50/20 relative overflow-hidden">
        {/* Gráficos de fondo para Beneficios */}
        <div className="absolute top-1/2 left-0 w-full opacity-[0.03] pointer-events-none -translate-y-1/2">
          <img src="/images/graphics/Lineas.png" alt="" className="w-full h-auto"/>
        </div>
        <div className="absolute top-20 right-10 w-32 h-32 floating-graphic">
          <img src="/images/graphics/Sticker.png" alt="" className="w-full h-full object-contain rotate-12" />
        </div>
        <div className="absolute bottom-20 left-10 w-32 h-32 floating-graphic">
          <img src="/images/graphics/Circulito.png" alt="" className="w-full h-full object-contain rotate-12" />
        </div>
        {/* Elementos decorativos más prominentes */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-linear-to-br from-blue-200/30 to-transparent rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-linear-to-tl from-indigo-200/30 to-transparent rounded-full translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-linear-to-r from-yellow-100/20 to-orange-100/20 rounded-full blur-3xl"></div>


       

        {/* Elementos flotantes geométricos representando movimiento deportivo */}
        <div className="absolute top-1/3 left-1/4 w-16 h-16 bg-[#203867]/10 rounded-full animate-bounce opacity-30" style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
        <div className="absolute top-2/3 right-1/4 w-12 h-12 bg-[#f4c542]/20 rounded-full animate-bounce opacity-40" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-8 h-8 bg-[#203867]/15 rounded-full animate-bounce opacity-25" style={{ animationDelay: '2s', animationDuration: '5s' }}></div>



        {/* Flechas curvas conectando las cards */}
        <div className="hidden lg:block">
          {/* Flecha de izquierda a centro */}
          <svg className="absolute top-1/2 left-1/4 -translate-y-1/2 w-48 h-24 opacity-20" viewBox="0 0 192 96">
            <path
              d="M0,48 Q48,24 96,48 T192,48"
              stroke="#203867"
              strokeWidth="1.5"
              fill="none"
              markerEnd="url(#arrowhead)"
            />
          </svg>

          {/* Flecha de centro a derecha */}
          <svg className="absolute top-1/2 right-1/4 -translate-y-1/2 w-48 h-24 opacity-20" viewBox="0 0 192 96">
            <path
              d="M0,48 Q48,72 96,48 T192,48"
              stroke="#203867"
              strokeWidth="1.5"
              fill="none"
              markerEnd="url(#arrowhead)"
            />
          </svg>

          {/* Definición de la flecha */}
          <svg className="absolute" width="0" height="0">
            <defs>
              <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="#203867" opacity="0.3" />
              </marker>
            </defs>
          </svg>
        </div>

      


        {/* Elementos flotantes adicionales */}
        <div className="absolute top-1/4 right-1/6 w-4 h-4 bg-[#f4c542]/20 rounded-full animate-ping opacity-40" style={{ animationDuration: '2s' }}></div>
        <div className="absolute bottom-1/4 left-1/6 w-3 h-3 bg-[#203867]/15 rounded-full animate-ping opacity-30" style={{ animationDuration: '2.5s', animationDelay: '1s' }}></div>

        {/* Patrón geométrico sutil */}
        <div className="absolute top-16 right-1/3 opacity-5">
          <svg width="60" height="60" viewBox="0 0 60 60">
            <circle cx="30" cy="30" r="25" stroke="#203867" strokeWidth="1" fill="none" className="animate-spin" style={{ animationDuration: '20s' }} />
            <circle cx="30" cy="30" r="15" stroke="#f4c542" strokeWidth="1" fill="none" className="animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />
          </svg>
        </div>

        {/* Elementos de energía/conexión */}
        <div className="hidden lg:block">
          <div className="absolute top-1/3 left-1/5 w-px h-16 bg-linear-to-b from-transparent via-[#203867]/20 to-transparent animate-pulse"></div>
          <div className="absolute top-1/3 right-1/5 w-px h-16 bg-linear-to-b from-transparent via-[#f4c542]/20 to-transparent animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-24">
            <AnimatedText
              text={sponsorsPageContent.benefits.title}
              as="h2"
              className="text-[#203867] text-4xl lg:text-5xl font-bold font-['Space_Mono']"
              staggerDelay={0.03}
              duration={0.7}
              yOffset={60}
              triggerStart="top 85%"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 relative">
            {/* Elementos de conexión entre cards */}
            <div className="hidden lg:block absolute top-1/2 left-1/3 -translate-y-1/2 w-1/3 h-px bg-linear-to-r from-transparent via-[#203867]/20 to-transparent group-hover:via-[#f4c542]/40 transition-all duration-500"></div>
            <div className="hidden lg:block absolute top-1/2 right-1/3 -translate-y-1/2 w-1/3 h-px bg-linear-to-l from-transparent via-[#203867]/20 to-transparent group-hover:via-[#f4c542]/40 transition-all duration-500"></div>

            {sponsorsPageContent.benefits.items.map((benefit, index) => (
              <div key={index} className="group relative">
                {/* Elementos decorativos que responden al hover */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-[#f4c542]/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-150 group-hover:rotate-12"></div>
                <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-[#203867]/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-125 group-hover:-rotate-12" style={{ transitionDelay: '0.1s' }}></div>

                {/* Partículas flotantes alrededor de cada card */}
                <div className="absolute -top-2 -right-2 w-2 h-2 bg-[#f4c542]/40 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-300" style={{ animationDuration: '1s' }}></div>
                <div className="absolute -bottom-2 -left-2 w-1.5 h-1.5 bg-[#203867]/40 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-300" style={{ animationDuration: '1.2s', animationDelay: '0.2s' }}></div>

                {/* Imagen de fondo con overlay */}
                <div className="relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-700 hover:-translate-y-4 transform-gpu">
                  <div className="aspect-4/5 relative">
                    <img
                      src={benefit.image}
                      alt={benefit.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Overlay gradiente */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent"></div>

                    {/* Contenido sobre la imagen */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                      <h3 className="text-2xl font-bold mb-4 font-['Space_Mono'] group-hover:text-[#f4c542] transition-colors duration-300">
                        {benefit.title}
                      </h3>
                      <p className="text-white/90 font-['Plus_Jakarta_Sans'] leading-relaxed text-lg">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Efecto de brillo en hover */}
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impacto en el Ecosistema Section */}
      <section className="relative py-24 px-6 bg-white overflow-hidden">

        <div className="relative max-w-7xl mx-auto ">
          
          <div className="text-center mb-16 relative">
                       {/* Logo sol inferior derecho */}
        
         
            <AnimatedText
              text="Impacto sostenible en todo el ecosistema"
              as="h2"
              className="text-[#203867] text-3xl lg:text-4xl font-bold font-['Space_Mono'] mb-6"
              staggerDelay={0.025}
              duration={0.6}
              yOffset={50}
              triggerStart="top 85%"
            />
            <p className="text-gray-600 text-lg font-['Plus_Jakarta_Sans'] max-w-3xl mx-auto">
              Nuestras alianzas crean oportunidades que benefician a todos los actores del deporte uruguayo
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Briefcase,
                title: 'Para Empresas',
                benefits: [
                  'Nuevos mercados y oportunidades comerciales',
                  'Alianzas estratégicas con actores del sector',
                  'Posicionamiento como líder en responsabilidad social',
                  'Acceso a talento deportivo calificado'
                ],
                color: 'from-blue-500 to-blue-600'
              },
              {
                icon: Trophy,
                title: 'Para Clubes',
                benefits: [
                  'Recursos adicionales para desarrollo deportivo',
                  'Conocimientos y metodologías innovadoras',
                  'Mayor visibilidad y reconocimiento',
                  'Oportunidades de colaboración institucional'
                ],
                color: 'from-green-500 to-green-600'
              },
              {
                icon: GraduationCap,
                title: 'Para Instituciones Educativas',
                benefits: [
                  'Conexión entre academia y sector profesional',
                  'Oportunidades de investigación aplicada',
                  'Desarrollo de programas deportivos académicos',
                  'Acceso a prácticas profesionales para estudiantes'
                ],
                color: 'from-purple-500 to-purple-600'
              },
              {
                icon: Building2,
                title: 'Para Federaciones',
                benefits: [
                  'Fortalecimiento de redes de colaboración',
                  'Mayor capacidad de gestión y organización',
                  'Desarrollo de políticas públicas efectivas',
                  'Amplificación de alcance e impacto'
                ],
                color: 'from-orange-500 to-orange-600'
              },
              {
                icon: Users,
                title: 'Para Dirigentes y Entrenadores',
                benefits: [
                  'Acceso a formación y actualización profesional',
                  'Oportunidades de networking y colaboración',
                  'Desarrollo de carrera y crecimiento personal',
                  'Participación en proyectos de alto impacto'
                ],
                color: 'from-red-500 to-red-600'
              },
              {
                icon: Star,
                title: 'Para Deportistas y Aficionados',
                benefits: [
                  'Mayor calidad en entrenamientos y competiciones',
                  'Oportunidades de desarrollo deportivo',
                  'Acceso a recursos y tecnología deportiva',
                  'Participación en comunidad deportiva inclusiva'
                ],
                color: 'from-teal-500 to-teal-600'
              }
            ].map((stakeholder, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-500 hover:-translate-y-3 transform-gpu group relative overflow-hidden">
                {/* Decorativo interno */}
                <div className="absolute -top-4 -right-4 w-12 h-12 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                  <img src="/images/graphics/mas amarillo.png" alt="" className="w-full h-full" />
                </div>
                <div className={`w-16 h-16 bg-linear-to-br ${stakeholder.color} rounded-2xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300`}>
                  <stakeholder.icon className="w-8 h-8" />
                </div>
                <h3 className="text-[#203867] text-xl font-bold mb-6 font-['Space_Mono']">
                  {stakeholder.title}
                </h3>
                <ul className="space-y-3">
                  {stakeholder.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-start text-gray-700 font-['Plus_Jakarta_Sans']">
                      <span className="text-[#f4c542] mr-3 mt-1">✓</span>
                      <span className="text-sm leading-relaxed">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Línea decorativa */}
          <div
          style={{
            width: '100vw',
            display: 'flex',
            justifyContent: 'center',
          }}
          >
            
          </div>


          {/* Estadísticas de impacto */}
          {/* <div className="mt-20 bg-linear-to-r from-[#203867] to-[#1a2d5a] rounded-3xl p-12 text-white relative overflow-hidden">
        
            <div className="text-center mb-12">
              <h3 className="text-2xl lg:text-3xl font-bold mb-4 font-['Space_Mono']">
                Impacto medible, crecimiento sostenible
              </h3>
              <p className="text-white/80 text-lg font-['Plus_Jakarta_Sans']">
                Nuestras alianzas generan resultados tangibles para todo el ecosistema
              </p>
            </div>

            <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: '1000', label: 'Asistentes conectados' },
                { number: '200', label: 'Alianzas generadas' },
                { number: '50', label: 'Proyectos impulsados' },
                { number: '15', label: 'Sectores beneficiados' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div
                    className="stat-number text-3xl lg:text-4xl font-bold text-[#f4c542] mb-2 font-['Space_Mono']"
                    data-target={stat.number}
                  >
                    0
                  </div>
                  <div className="text-white/80 text-sm font-['Plus_Jakarta_Sans']">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
            
          </div>
           */}
        </div>
         
      </section>

      {/* Por qué ser Sponsor Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        {/* Elementos decorativos para sensación de movimiento */}
        {/* <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-20 right-10 w-48 h-48 opacity-10 floating-graphic">
             <img src="/images/graphics/estrella fina blanca.png" alt="" className="w-full h-full object-contain filter invert" />
          </div>
          <div className="absolute bottom-20 left-10 w-40 h-40 opacity-10 floating-graphic" style={{ animationDelay: '1.5s' }}>
             <img src="/images/graphics/estrella fina blanca.png" alt="" className="w-full h-full object-contain filter invert" />
          </div>
          <div className="absolute top-1/2 left-1/4 w-32 h-32 opacity-5 floating-graphic">
             <img src="/images/graphics/Igual.png" alt="" className="w-full h-full object-contain" />
          </div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-primary rounded-full blur-md opacity-20"></div>
          <div className="absolute top-1/3 right-1/5 w-24 h-24 opacity-20 floating-graphic rotate-[-15deg]" style={{ animationDelay: '0.7s' }}>
            <img src="/images/graphics/estrella fina blanca.png" alt="" className="w-full h-full object-contain" />
          </div>
        </div> */}


        {/* Elementos flotantes geométricos representando movimiento deportivo */}
        <div className="absolute top-1/3 left-1/4 w-16 h-16 bg-[#203867]/10 rounded-full animate-bounce opacity-30" style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
        <div className="absolute top-2/3 right-1/4 w-12 h-12 bg-[#f4c542]/20 rounded-full animate-bounce opacity-40" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-8 h-8 bg-[#203867]/15 rounded-full animate-bounce opacity-25" style={{ animationDelay: '2s', animationDuration: '5s' }}></div>


        {/* Elementos flotantes adicionales */}
        <div className="absolute top-1/4 right-1/6 w-4 h-4 bg-[#f4c542]/20 rounded-full animate-ping opacity-40" style={{ animationDuration: '2s' }}></div>
        <div className="absolute bottom-1/4 left-1/6 w-3 h-3 bg-[#203867]/15 rounded-full animate-ping opacity-30" style={{ animationDuration: '2.5s', animationDelay: '1s' }}></div>


        {/* Elementos de energía/conexión */}
        <div className="hidden lg:block absolute top-1/3 left-1/5 w-px h-16 bg-linear-to-b from-transparent via-[#203867]/20 to-transparent animate-pulse z-0"></div>
        <div className="hidden lg:block absolute top-1/3 right-1/5 w-px h-16 bg-linear-to-b from-transparent via-[#f4c542]/20 to-transparent animate-pulse z-0" style={{ animationDelay: '0.5s' }}></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <AnimatedText
              text={sponsorsPageContent.whySponsor.title}
              as="h2"
              className="text-[#203867] text-3xl lg:text-4xl font-bold font-['Space_Mono']"
              staggerDelay={0.03}
              duration={0.7}
              yOffset={60}
              triggerStart="top 85%"
            />
          </div>
          <div className="absolute top-48 -left-50 opacity-70 hover:opacity-90 transition-opacity duration-500">
          <img
            src="/images/logo_sun.svg"
            className="w-100 h-100 object-contain animate-spin"
            style={{ animationDuration: '90s' }}
          />
        </div>
       
          <div className="bg-linear-to-r from-[#203867] to-[#1a2d5a] text-white p-12 rounded-2xl relative overflow-hidden">
            
            {/* Elementos decorativos dentro del bloque de texto */}
            <div className="absolute top-4 right-4 w-8 h-8 bg-[#f4c542]/20 rounded-full animate-pulse opacity-60"></div>
            <div className="absolute bottom-4 left-4 w-6 h-6 bg-white/10 rounded-full animate-pulse opacity-40" style={{ animationDelay: '0.5s' }}></div>

            {sponsorsPageContent.whySponsor.description.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-lg lg:text-xl font-['Plus_Jakarta_Sans'] leading-relaxed mb-8 last:mb-0">
                {paragraph.split('**').map((part, partIndex) => {
                  if (partIndex % 2 === 1) {
                    return <span key={partIndex} className="font-semibold text-[#f4c542]">{part}</span>;
                  }
                  return part;
                })}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Paquetes de Sponsorship */}
      {/* <section className="py-24 px-6 bg-linear-to-br from-gray-50 to-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
          <img src="/images/graphics/Lineas.png" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <AnimatedText
              text="Paquetes de Sponsorship"
              as="h2"
              className="text-[#203867] text-3xl lg:text-4xl font-bold font-['Space_Mono'] mb-6"
              staggerDelay={0.025}
              duration={0.6}
              yOffset={50}
              triggerStart="top 85%"
            />
            <p className="text-gray-600 text-lg font-['Plus_Jakarta_Sans'] max-w-3xl mx-auto">
              Elige el paquete que mejor se adapte a tus objetivos de crecimiento sostenible y contribución al ecosistema deportivo
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sponsorPackages.map((pkg, index) => (
              <div
                key={pkg.id}
                className={`bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 transform-gpu group ${pkg.featured ? 'border-2 border-[#f4c542] relative hover:shadow-[#f4c542]/30' : 'hover:shadow-gray-300/50'}`}
              >
                {pkg.featured && (
                  <>
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                      <span className="bg-[#f4c542] text-[#203867] px-4 py-2 rounded-full font-bold text-sm uppercase">
                        {pkg.name}
                      </span>
                    </div>
                    <div className="absolute -top-8 -right-8 w-20 h-20 opacity-30 floating-graphic">
                      <img src="/images/graphics/Sticker.png" alt="" className="w-full h-full object-contain" />
                    </div>
                     <div className="absolute top-1/2 -left-6 w-12 h-12 opacity-20 -rotate-90">
                      <img src="/images/graphics/Flecha.png" alt="" className="w-full h-full object-contain" />
                    </div>
                  </>
                )}
                <div className={pkg.featured ? 'mt-6' : ''}>
                  <h3 className="text-[#203867] text-2xl font-bold mb-6 font-['Space_Mono'] text-center">
                    {pkg.name}
                  </h3>
                  <div className="space-y-4">
                    {pkg.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className={`pb-3 ${benefitIndex < pkg.benefits.length - 1 ? 'border-b border-gray-200' : ''}`}>
                        <p className="text-gray-700 font-['Plus_Jakarta_Sans']">
                          {benefit}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 text-center">
                    <span className="text-2xl font-bold text-[#203867] font-['Space_Mono']">
                      {pkg.investment}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <SponsorsSection />
        </div>
      </section> */}

      {/* Llamada a la Acción Final */}
      <section id="contacto" className="relative py-32 px-6 bg-linear-to-br from-[#203867] via-[#2a4a7a] to-[#1a2d5a] overflow-hidden">
        {/* Elementos decorativos */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-40 h-40 border-2 border-[#f4c542] rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 border border-green-400 rounded-full"></div>
          <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-[#f4c542]/20 rounded-full"></div>
        </div>

        <div className="relative max-w-5xl mx-auto text-center z-10">
          <div className="mb-8">
            <span className="inline-block bg-[#f4c542]/20 text-[#f4c542] px-6 py-3 rounded-full text-sm font-bold border border-[#f4c542]/30">
            JUNTOS CONSTRUYENDO EL FUTURO SOSTENIBLE DEL DEPORTE URUGUAYO
            </span>
          </div>

          <div className="mb-8">
            <AnimatedText
              text={sponsorsPageContent.finalCTA.title}
              as="h2"
              className="text-white text-3xl lg:text-5xl font-bold font-['Space_Mono'] leading-tight"
              staggerDelay={0.02}
              duration={0.6}
              yOffset={70}
              triggerStart="top 85%"
            />
          </div>

          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-white/90 text-lg lg:text-xl font-['Plus_Jakarta_Sans'] leading-relaxed">
              {sponsorsPageContent.finalCTA.description.split('\n\n').map((paragraph, index) => (
                <span key={index}>
                  {paragraph.split('**').map((part, partIndex) => (
                    partIndex % 2 === 1 ?
                      <span key={partIndex} className="font-bold text-[#f4c542] text-xl">{part}</span> :
                      part
                  ))}
                  {index < sponsorsPageContent.finalCTA.description.split('\n\n').length - 1 && <><br /><br /></>}
                </span>
              ))}
            </p>
          </div>

          <div className="mb-12 relative flex justify-center">
            <div className="bg-white/95 backdrop-blur-sm p-10 rounded-3xl shadow-2xl border border-white/20 w-full">
            <div className="mb-6 relative">
              <Handshake className="w-20 h-20 mx-auto opacity-50" color='#203867' />
            
              
            </div>
            <h3 className="text-[#203867] text-2xl lg:text-3xl font-bold mb-8 font-['Space_Mono']">
              {sponsorsPageContent.finalCTA.cta}
            </h3>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <a
                href={`mailto:${sponsorsPageContent.finalCTA.email}`}
                className="bg-linear-to-r from-[#f4c542] to-[#e6b83a] text-[#203867] px-10 py-5 rounded-xl font-bold text-lg hover:from-[#e6b83a] hover:to-[#f4c542] transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-[#f4c542]/50 transform-gpu font-['Plus_Jakarta_Sans'] shadow-lg flex items-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Contactar por Email
              </a>
              <div className="text-center">
                <div className="text-[#203867] font-bold font-['Plus_Jakarta_Sans'] text-lg">
                  {sponsorsPageContent.finalCTA.email}
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-8">
              <p className="text-gray-700 font-['Plus_Jakarta_Sans'] mb-4">
                ¿Tenés preguntas sobre nuestros paquetes? ¿Necesitás un paquete personalizado?
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <span className="bg-[#203867]/10 text-[#203867] px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  Llamadas personalizadas
                </span>
                <span className="bg-[#203867]/10 text-[#203867] px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  Propuestas a medida
                </span>
                <span className="bg-[#203867]/10 text-[#203867] px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                  <Target className="w-4 h-4" />
                  ROI garantizado
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>
    </main>
  );
}
