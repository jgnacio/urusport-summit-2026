'use client';

import React from 'react';
import CurvedLoop from '@/components/ui/CurvedLoop';

const ChangeSection = () => {
  return (
    <section id="change" className="w-full h-32 md:h-40 lg:h-[330px] relative top-30 bg-transparent pointer-events-none z-10">
      <CurvedLoop
        marqueeText="SÉ PARTE DEL CAMBIO"
        speed={1.5}
        curveAmount={-130}
        direction="left"
        interactive={true}
        className="text-secondary"
      />
    </section>
  );
};

export default ChangeSection;

