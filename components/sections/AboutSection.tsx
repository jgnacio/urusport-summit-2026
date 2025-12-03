import React from 'react';
import { ArrowRight, Target } from 'lucide-react';
import AnimatedText from '../ui/AnimatedText';

export default function AboutSection() {
  return (
    <section id="sobre-nosotros" className="relative py-16 md:py-24 px-6 bg-[#203867] overflow-hidden">
      <div className="bg-[#203867] w-full h-full absolute top-0 left-0 -z-20"></div>
      <div className="relative max-w-6xl mx-auto z-10">
        {/* Section Header con Icono */}
        <div className="flex items-center gap-4 mb-12">
          <Target className="w-8 h-8 text-[#F8B124]" />
          <h2 className="text-white text-xl font-semibold uppercase tracking-wide font-['Space_Mono']">
            Acerca del Summit
          </h2>
        </div>

        <div className="space-y-8">
          <AnimatedText
            text="¿Qué deporte construimos? ¿Y si lo pensamos juntos?"
            className="text-white text-3xl md:text-4xl lg:text-6xl font-bold leading-tight font-['Space_Mono'] tracking-tight"
            staggerDelay={0.02}
            duration={0.6}
            yOffset={7}
            triggerStart="top bottom"
          />
          <p className="text-white/90 text-lg lg:text-xl leading-relaxed max-w-4xl font-['Plus_Jakarta_Sans']">
            Directivos, Atletas, Empresarios, Políticos, Entrenadores y Profesionales del sector en un mismo lugar compartiendo experiencias, conocimiento e intereses en pos de un crecimiento exponencial del sector.
          </p>
          <div className="pt-6">
            <a href="mailto:info@urusuportsummit.uy" className="inline-flex items-center gap-3 bg-[#2E96C4] text-white px-8 py-4 rounded-2xl text-sm font-bold uppercase tracking-wider hover:bg-[#F8B124] transition-all duration-300 shadow-xl font-['Space_Mono']">
              Únete al Movimiento
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
