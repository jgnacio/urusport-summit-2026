import React from 'react';
import { Users } from 'lucide-react';
import AnimatedText from '../ui/AnimatedText';

export default function TeamSection() {
  return (
    <section id="hub" className="relative py-24 px-6 bg-[#203867]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header con Icono */}
        <div className="flex items-center gap-4 mb-12">
          <Users className="w-8 h-8 text-[#F8B124]" />
          <h2 className="text-white text-xl font-semibold uppercase tracking-wide font-['Space_Mono']">
            El Equipo
          </h2>
        </div>

        <div className="space-y-8 max-w-4xl">
        <AnimatedText
            text="Somos un equipo de jóvenes profesionales"
            className="text-white text-3xl md:text-4xl lg:text-6xl font-bold leading-tight font-['Space_Mono'] tracking-tight"
            staggerDelay={0.02}
            duration={0.6}
            yOffset={7}
            triggerStart="top bottom"
          />
          <p className="text-white/90 text-lg lg:text-xl leading-relaxed font-['Plus_Jakarta_Sans']">
            que nos mueve el desafío impactar positivamente al país a través del deporte. Conectamos líderes, atletas, empresarios y entrenadores para construir juntos el futuro deportivo de Uruguay.
          </p>
        </div>
      </div>
    </section>
  );
}
