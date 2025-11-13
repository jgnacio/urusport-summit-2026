'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Users } from 'lucide-react';

// Registrar plugin de ScrollTrigger
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const ambassadors = [
  {
    id: 1,
    name: 'Sebastián Coates',
    discipline: 'Fútbol',
    image: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=2070&auto=format&fit=crop',
    color: '#203867',
  },
  {
    id: 2,
    name: 'Chris Namús',
    discipline: 'Boxeo',
    image: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=2070&auto=format&fit=crop',
    color: '#F8B124',
  },
  {
    id: 3,
    name: 'Marcos Sarraute',
    discipline: 'Remo',
    image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?q=80&w=2070&auto=format&fit=crop',
    color: '#2E96C4',
  },
  {
    id: 4,
    name: 'Patricia Pita',
    discipline: 'Automovilismo',
    image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=2070&auto=format&fit=crop',
    color: '#7C4212',
  },
  {
    id: 5,
    name: 'Sebastián Ottonello',
    discipline: 'Basket',
    image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=2070&auto=format&fit=crop',
    color: '#203867',
  },
];

export default function EventsSection() {
  useEffect(() => {
    // Animación de cards con scroll trigger
    gsap.from('.ambassador-card', {
      opacity: 0,
      y: 40,
      duration: 0.9,
      stagger: 0.12,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.bento-grid',
        start: 'top 80%',
      },
    });
  }, []);

  return (
    <section id="embajadores" className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <Users className="w-8 h-8 text-[#2E96C4]" />
          <h2 className="text-[#203867] text-xl font-semibold uppercase tracking-wide font-['Space_Mono']">
            Nuestros Embajadores
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="bento-grid grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 auto-rows-[240px]">
          {/* Sebastián Coates - Grande (2x2) */}
          <div className="ambassador-card md:col-span-2 md:row-span-2 group relative rounded-2xl overflow-hidden cursor-pointer">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              style={{
                backgroundImage: `url(${ambassadors[0].image})`,
              }}
            ></div>
            <div className="absolute inset-0 bg-linear-to-t from-black/95 via-black/50 to-transparent"></div>
            
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <span 
                className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white font-['Space_Mono'] mb-3"
                style={{ backgroundColor: ambassadors[0].color }}
              >
                {ambassadors[0].discipline}
              </span>
              <h3 className="text-white text-3xl font-bold font-['Space_Mono'] leading-tight">
                {ambassadors[0].name}
              </h3>
            </div>
          </div>

          {/* Chris Namús - Mediano (2x1) */}
          <div className="ambassador-card md:col-span-2 group relative rounded-2xl overflow-hidden cursor-pointer">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              style={{
                backgroundImage: `url(${ambassadors[1].image})`,
              }}
            ></div>
            <div className="absolute inset-0 bg-linear-to-t from-black/95 via-black/50 to-transparent"></div>
            
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <span 
                className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white font-['Space_Mono'] mb-2"
                style={{ backgroundColor: ambassadors[1].color }}
              >
                {ambassadors[1].discipline}
              </span>
              <h3 className="text-white text-2xl font-bold font-['Space_Mono']">
                {ambassadors[1].name}
              </h3>
            </div>
          </div>

          {/* Marcos Sarraute - Vertical (1x2) */}
          <div className="ambassador-card md:col-span-2 md:row-span-2 group relative rounded-2xl overflow-hidden cursor-pointer">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              style={{
                backgroundImage: `url(${ambassadors[2].image})`,
              }}
            ></div>
            <div className="absolute inset-0 bg-linear-to-t from-black/95 via-black/50 to-transparent"></div>
            
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <span 
                className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white font-['Space_Mono'] mb-3"
                style={{ backgroundColor: ambassadors[2].color }}
              >
                {ambassadors[2].discipline}
              </span>
              <h3 className="text-white text-3xl font-bold font-['Space_Mono'] leading-tight">
                {ambassadors[2].name}
              </h3>
            </div>
          </div>

          {/* Patricia Pita - Mediano (2x1) */}
          <div className="ambassador-card md:col-span-2 group relative rounded-2xl overflow-hidden cursor-pointer">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              style={{
                backgroundImage: `url(${ambassadors[3].image})`,
              }}
            ></div>
            <div className="absolute inset-0 bg-linear-to-t from-black/95 via-black/50 to-transparent"></div>
            
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <span 
                className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white font-['Space_Mono'] mb-2"
                style={{ backgroundColor: ambassadors[3].color }}
              >
                {ambassadors[3].discipline}
              </span>
              <h3 className="text-white text-2xl font-bold font-['Space_Mono']">
                {ambassadors[3].name}
              </h3>
            </div>
          </div>

          {/* Sebastián Ottonello - Ancho (4x1) */}
          <div className="ambassador-card md:col-span-4 group relative rounded-2xl overflow-hidden cursor-pointer">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              style={{
                backgroundImage: `url(${ambassadors[4].image})`,
              }}
            ></div>
            <div className="absolute inset-0 bg-linear-to-r from-black/95 via-black/50 to-transparent"></div>
            
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <span 
                className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white font-['Space_Mono'] mb-2"
                style={{ backgroundColor: ambassadors[4].color }}
              >
                {ambassadors[4].discipline}
              </span>
              <h3 className="text-white text-2xl font-bold font-['Space_Mono']">
                {ambassadors[4].name}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
