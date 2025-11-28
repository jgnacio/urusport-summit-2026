'use client';

import React, { useState, useEffect } from 'react';
import CurvedLoop from '@/components/ui/CurvedLoop';

const ChangeSection = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Detectar si es desktop (lg breakpoint = 1024px)
    const checkIsDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    checkIsDesktop();
    window.addEventListener('resize', checkIsDesktop);

    return () => {
      window.removeEventListener('resize', checkIsDesktop);
    };
  }, []);

  // No mostrar en mobile
  if (!isDesktop) {
    return null;
  }
  return (
    <section id="change" className="w-full h-0 relative top-100 bg-transparent pointer-events-none -z-10">
      <CurvedLoop
        marqueeText="SÉ PARTE DEL CAMBIO"
        speed={0.3}
        curveAmount={130}
        direction="left"
        interactive={true}
        className="text-[#1d3461]"
      />
    </section>
  );
};

export default ChangeSection;

