'use client';

import React, { useEffect } from 'react';
import Header from '@/components/sections/Header';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import AmbassadorsSection from '@/components/sections/Ambassadors';
import TeamSection from '@/components/sections/TeamSection';
import SponsorsSection from '@/components/sections/SponsorsSection';
import ChangeSection from '@/components/sections/ChangeSection';
import CTASection from '@/components/sections/CTASection';

export default function Home() {
  useEffect(() => {
    // Manejar el hash en la URL para scroll directo a la sección
    const hash = window.location.hash;
    if (hash) {
      // Pequeño delay para asegurar que el DOM esté completamente renderizado
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          const isDesktop = window.innerWidth >= 1024;
          
          if (isDesktop) {
            // En desktop, calcular posición con offset personalizado
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - 150; // Ajustar 150px hacia arriba para mejor vista
            
            window.scrollTo({
              top: offsetPosition,
              behavior: 'auto' // Scroll instantáneo
            });
          } else {
            // En mobile, scroll instantáneo centrado
            element.scrollIntoView({ 
              behavior: 'auto',
              block: 'center'
            });
          }
        }
      }, 50); // Reducido el delay también para que sea más rápido
    }
  }, []);

  return (
    <div className="min-h-screen text-background">
      <Header />
      <main>
        <HeroSection />
      <ChangeSection />
        <AboutSection />
        <AmbassadorsSection />
        <TeamSection />
        <SponsorsSection />
        <CTASection />
      </main>
    </div>
  );
}
