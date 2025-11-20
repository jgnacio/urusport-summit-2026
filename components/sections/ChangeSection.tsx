'use client';

import React from 'react';
import CurvedLoop from '@/components/ui/CurvedLoop';

const ChangeSection = () => {
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

