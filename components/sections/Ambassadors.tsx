'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Users } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import SebaCoatesHover from '@/public/images/SebastianCoates.jpeg';
import SebaCoates from '@/public/images/SebastianCoates3.webp';
import ChrisNamus from '@/public/images/ChrisNamus2.jpg';
import ChrisNamusHover from '@/public/images/ChrisNamus3.jpg';
import MarcosSarraute from '@/public/images/MarcosSarraute.jpg';
import MarcosSarrauteHover from '@/public/images/MarcosSarraute1.jpg';
import PatriciaPita from '@/public/images/PatriciaPita1.jpg';
import PatriciaPitaHover from '@/public/images/PatriciaPita.jpg';
import SebastianOttonello from '@/public/images/SebastianOttonello3.png';
import SebastianOttonelloHover from '@/public/images/SebastianOttonello1.jpg';
import DoloresMoreira from '@/public/images/DoloresMoreira.jpg';
import DoloresMoreiraHover from '@/public/images/DoloresMoreira2.webp';

// Registrar plugin de ScrollTrigger
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Tipo para los embajadores
type Ambassador = {
  id: number;
  name: string;
  discipline: string;
  image: string | { src: string };
  hoverImage: string | { src: string } | null;
  color: string;
};

const ambassadors: Ambassador[] = [
  {
    id: 1,
    name: 'Chris Namús',
    discipline: 'Boxeo',
    image: ChrisNamus,
    hoverImage: ChrisNamusHover,
    color: '#F8B124',
  },

  {
    id: 3,
    name: 'Marcos Sarraute',
    discipline: 'Remo',
    image: MarcosSarraute,
    hoverImage: MarcosSarrauteHover,
    color: '#2E96C4',
  },
  {
    id: 4,
    name: 'Patricia Pita',
    discipline: 'Automovilismo',
    image: PatriciaPita,
    hoverImage: PatriciaPitaHover,
    color: '#7C4212',
  },
  {
    id: 6,
    name: 'Dolores moreira',
    discipline: 'Vela',
    image: DoloresMoreira,
    hoverImage: DoloresMoreiraHover,
    color: '#2E96C4',
  },
  {
    id: 5,
    name: 'Sebastián Ottonello',
    discipline: 'Basket',
    image: SebastianOttonello,
    hoverImage: SebastianOttonelloHover,
    color: '#203867',
  },

  {
    id: 2,
    name: 'Sebastián Coates',
    discipline: 'Fútbol',
    image: SebaCoates,
    hoverImage: SebaCoatesHover,
    color: '#203867',
  },
];

// Componente individual de la tarjeta con animaciones
function AmbassadorCard({ ambassador }: { ambassador: Ambassador }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mainImageRef = useRef<HTMLImageElement>(null);
  const hoverImageRef = useRef<HTMLImageElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    const mainImage = mainImageRef.current;
    const hoverImage = hoverImageRef.current;
    const name = nameRef.current;
    const badge = badgeRef.current;
    const overlay = overlayRef.current;

    if (!card || !mainImage || !name || !badge || !overlay) return;

    // Timeline para el hover
    const tl = gsap.timeline({ paused: true });

    // Animaciones de la imagen
    tl.to(mainImage, {
      scale: 1.1,
      duration: 0.6,
      ease: 'power2.out',
    }, 0);

    // Si existe imagen de hover, animarla
    if (hoverImage && ambassador.hoverImage) {
      tl.to(mainImage, {
        opacity: 0,
        filter: 'blur(8px)',
        duration: 0.4,
        ease: 'power2.inOut',
      }, 0);

      tl.to(hoverImage, {
        opacity: 1,
        filter: 'blur(0px)',
        scale: 1.1,
        duration: 0.6,
        ease: 'power2.out',
      }, 0);
    } else {
      // Si no hay imagen de hover, aplicar brillo y saturación
      tl.to(mainImage, {
        filter: 'brightness(1.1) saturate(1.2)',
        duration: 0.4,
        ease: 'power2.out',
      }, 0);
    }

    // Micro-interacciones del overlay
    tl.to(overlay, {
      background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 100%)',
      duration: 0.4,
      ease: 'power2.inOut',
    }, 0);

    // Micro-interacciones del nombre
    tl.to(name, {
      duration: 0.3,
      ease: 'back.out(2)',
    }, 0.1);

    // Micro-interacciones del badge
    tl.to(badge, {
      y: -3,
      scale: 1.1,
      boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
      duration: 0.3,
      ease: 'back.out(2)',
    }, 0.15);

    // Event listeners
    const handleMouseEnter = () => {
      tl.play();
    };

    const handleMouseLeave = () => {
      tl.reverse();
    };

    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mouseenter', handleMouseEnter);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [ambassador.hoverImage]);

  const imageSrc = typeof ambassador.image === 'string' ? ambassador.image : ambassador.image.src;
  const hoverImageSrc = ambassador.hoverImage ? (typeof ambassador.hoverImage === 'string' ? ambassador.hoverImage : ambassador.hoverImage.src) : null;

  return (
    <div ref={cardRef} className='w-full h-full rounded-lg relative overflow-hidden cursor-pointer'>
      {/* Imagen principal */}
      <img
        ref={mainImageRef}
        src={imageSrc}
        alt={ambassador.name}
        className='absolute inset-0 w-full h-full object-cover'
        style={{ transformOrigin: 'center center' }}
      />
      
      {/* Imagen de hover (si existe) */}
      {hoverImageSrc && (
        <img
          ref={hoverImageRef}
          src={hoverImageSrc}
          alt={`${ambassador.name} hover`}
          className='absolute inset-0 w-full h-full object-cover'
          style={{ 
            opacity: 0, 
            filter: 'blur(8px)',
            transformOrigin: 'center center'
          }}
        />
      )}

      {/* Overlay con gradiente */}
      <div 
        ref={overlayRef}
        className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6'
      >
        <h3 ref={nameRef} className='text-white text-2xl font-bold mb-2'>
          {ambassador.name}
        </h3>
        <div ref={badgeRef} className='inline-block'>
          <Badge style={{ backgroundColor: ambassador.color }} className="text-white">
            {ambassador.discipline}
          </Badge>
        </div>
      </div>
    </div>
  );
}

export default function AmbassadorsSection() {
  const headerRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<SVGSVGElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    // Animación del header
    if (headerRef.current && iconRef.current && titleRef.current) {
      gsap.from(iconRef.current, {
        rotation: -180,
        scale: 0,
        opacity: 0,
        duration: 0.8,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: headerRef.current,
          start: 'top 85%',
        },
      });

      gsap.from(titleRef.current, {
        x: -30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: headerRef.current,
          start: 'top 85%',
        },
      });
    }

    // Animación de cards con scroll trigger
    gsap.from('.ambassador-card', {
      opacity: 0,
      y: 60,
      scale: 0.9,
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
        <div ref={headerRef} className="flex items-center gap-4 mb-12">
          <Users ref={iconRef} className="w-8 h-8 text-[#2E96C4]" />
          <h2 ref={titleRef} className="text-[#203867] text-xl font-semibold uppercase tracking-wide font-['Space_Mono']">
            Nuestros Embajadores
          </h2>
        </div>

        {/* Bento Grid */}
        <div className='grid grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr] grid-rows-2 gap-4 bento-grid'>
            {/* Card 1 - col-span-6 */}
            <div className='col-span-6 h-[45vh] rounded-[10px] overflow-hidden ambassador-card'>
              <AmbassadorCard ambassador={ambassadors[0]} />
            </div>

            {/* Card 2 - col-span-4 */}
            <div className='col-span-4 h-[45vh] rounded-[10px] overflow-hidden ambassador-card'>
              <AmbassadorCard ambassador={ambassadors[1]} />
            </div>

            {/* Card 3 - col-span-4 */}
            <div className='col-span-4 h-[45vh] rounded-[10px] overflow-hidden ambassador-card'>
              <AmbassadorCard ambassador={ambassadors[2]} />
            </div>

            {/* Card 4 - col-span-4 */}
            <div className='col-span-4 h-[45vh] rounded-[10px] overflow-hidden ambassador-card'>
              <AmbassadorCard ambassador={ambassadors[3]} />
            </div>

            {/* Card 5 - col-span-4 */}
            <div className='col-span-4 h-[45vh] rounded-[10px] overflow-hidden ambassador-card'>
              <AmbassadorCard ambassador={ambassadors[4]} />
            </div>

            {/* Card 6 - col-span-6 */}
            <div className='col-span-6 h-[45vh] rounded-[10px] overflow-hidden ambassador-card'>
              <AmbassadorCard ambassador={ambassadors[5]} />
            </div>
        </div>
      </div>
    </section>
  );
}
