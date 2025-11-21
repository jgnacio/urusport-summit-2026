import React from 'react';
import { ArrowRight } from 'lucide-react';
import ChangeSection from './ChangeSection';
import AnimatedText from '../ui/AnimatedText';

export default function CTASection() {
  return (
    <section
      className="relative h-[60vh] flex items-center overflow-hidden"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=2070&auto=format&fit=crop)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#1f1f1f]/70"></div>

      {/* Contenido */}
      <div className="relative z-10 w-full px-6 text-center max-w-5xl mx-auto">
      <AnimatedText
            text="SÉ PARTE DEL CAMBIO"
            className="text-white text-4xl lg:text-6xl font-bold leading-tight font-['Space_Mono'] tracking-tight"
            staggerDelay={0.04}
            duration={0.6}
            yOffset={120}
            triggerStart="center bottom"
          />
        <p className="text-white/90 text-lg lg:text-2xl mb-12 max-w-3xl mx-auto font-['Plus_Jakarta_Sans']">
          Únete al movimiento que está transformando el deporte uruguayo
        </p>
        <a href="mailto:info@urusuportsummit.uy" className="inline-flex items-center gap-3 bg-[#2E96C4] text-white px-10 py-5 rounded-2xl text-base font-bold uppercase tracking-wider hover:bg-[#F8B124] transition-all duration-300 shadow-2xl font-['Space_Mono']">
          Contactar Ahora
          <ArrowRight className="w-6 h-6" />
        </a>
      </div>
    </section>
  );
}
