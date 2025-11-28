'use client';

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Badge } from '@/components/ui/badge';
import AnimatedText from '@/components/ui/AnimatedText';
import { ambassadorsData } from '@/lib/ambassadors-data';

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
  slug?: string;
};

const ambassadors: Ambassador[] = ambassadorsData.map((amb) => ({
  id: amb.id,
  name: amb.name,
  discipline: amb.discipline,
  image: amb.image,
  hoverImage: amb.hoverImage,
  color: amb.color,
  slug: amb.slug,
}));

// Componente individual de la tarjeta con animaciones
function AmbassadorCard({ ambassador }: { ambassador: Ambassador }) {
  const router = useRouter();
  const cardRef = useRef<HTMLDivElement>(null);
  const mainImageRef = useRef<HTMLImageElement>(null);
  const hoverImageRef = useRef<HTMLImageElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    if (ambassador.slug) {
      router.push(`/embajadores/${ambassador.slug}`);
    }
  };

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
    <div 
      ref={cardRef} 
      onClick={handleClick}
      className='w-full h-full rounded-lg relative overflow-hidden cursor-pointer'
    >
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
{/* overlay */}
      <div className='w-full h-full absolute inset-0 bg-[#203867]/10 p-4 sm:p-5 md:p-6'></div>

      {/* Overlay con gradiente */}
      <div 
        ref={overlayRef}
        className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 sm:p-5 md:p-6 z-10'
      >
        <h3 ref={nameRef} className='text-white text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2'>
          {ambassador.name}
        </h3>
        <div ref={badgeRef} className='inline-block'>
          <Badge style={{ backgroundColor: ambassador.color }} className="text-white text-xs sm:text-sm">
            {ambassador.discipline}
          </Badge>
        </div>
      </div>
    </div>
  );
}

export default function AmbassadorsSection() {
  const gridRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const introTitleRef = useRef<HTMLHeadingElement>(null);
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

  useEffect(() => {
    if (!gridRef.current || cardsRef.current.length === 0 || !sectionRef.current || !introTitleRef.current) return;

    const ctx = gsap.context(() => {
      // Posiciones y rotaciones iniciales únicas para cada tarjeta
      const initialStates = [
        { x: -800, y: -300, rotation: -45, scale: 0.3 },  // Card 1: desde arriba izquierda
        { x: 600, y: -400, rotation: 35, scale: 0.25 },   // Card 2: desde arriba derecha
        { x: -700, y: 200, rotation: -60, scale: 0.35 },  // Card 3: desde izquierda
        { x: 800, y: 150, rotation: 50, scale: 0.3 },     // Card 4: desde derecha
        { x: -600, y: 500, rotation: -40, scale: 0.28 },  // Card 5: desde abajo izquierda
        { x: 700, y: 600, rotation: 55, scale: 0.32 },    // Card 6: desde abajo derecha
      ];

      // Aplicar estados iniciales
      cardsRef.current.forEach((card, index) => {
        if (card && initialStates[index]) {
          gsap.set(card, {
            x: initialStates[index].x,
            y: initialStates[index].y,
            rotation: initialStates[index].rotation,
            scale: initialStates[index].scale,
            opacity: 0,
            filter: 'blur(20px)',
          });
        }
      });

      // Timeline principal con ScrollTrigger
      const mainTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: isDesktop ? 'center center' : 'top center',
          end: isDesktop ? '+=200%' : '+=150%',
          scrub: 1.5,
          pin: isDesktop ? sectionRef.current : false,
          anticipatePin: 1,
        },
      });

      // Fase 1: Mostrar título intro y mantenerlo un momento
      mainTimeline.from(introTitleRef.current, {
        opacity: 0,
        y: 50,
        duration: 0.5,
        ease: 'power2.out',
      }, 0);

      // Mantener el título visible
      mainTimeline.to({}, { duration: 0.3 }, 0.5);

      // Fase 2: Desvanecer el título mientras empiezan a aparecer las cards
      mainTimeline.to(introTitleRef.current, {
        opacity: 0,
        y: -30,
        duration: 0.4,
        ease: 'power2.in',
      }, 0.8);

      // Fase 3: Animar cada tarjeta con efectos únicos
      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        // Crear timeline para cada tarjeta
        mainTimeline.to(card, {
          x: 0,
          y: 0,
          rotation: 0,
          scale: 1,
          opacity: 1,
          filter: 'blur(0px)',
          duration: 1.5,
          ease: 'power4.out',
        }, 0.9 + (index * 0.08)); // Stagger secuencial empezando después del fade del título

        // Efecto de "rebote" al llegar a la posición
        mainTimeline.to(card, {
          scale: 1.03,
          duration: 0.2,
          ease: 'power3.inOut',
        }, 0.9 + (index * 0.08) + 1.5);

        mainTimeline.to(card, {
          scale: 1,
          duration: 0.5,
          ease: 'back.out(2)',
        }, 0.9 + (index * 0.08) + 1.7);
      });

    });

    return () => {
      ctx.revert();
    };
  }, [isDesktop]);

  return (
    <section ref={sectionRef} id="embajadores" className="relative py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 overflow-hidden min-h-screen flex items-center justify-center">
      {/* Título de introducción que se desvanece - Posicionado absolutamente */}
      {
        isDesktop && (
<div 
        ref={introTitleRef}
        className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none px-4"
      >
        <div className="text-[#203867] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold uppercase text-center tracking-tight leading-tight font-['Space_Mono']">
          <AnimatedText
            text="EMBAJADORES QUE INSPIRAN"
            className="text-[#203867] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold uppercase tracking-tight leading-tight font-['Space_Mono']"
            staggerDelay={0.04}
            duration={1}
            yOffset={120}
            triggerStart="top bottom"
          />
        </div>
      </div>
        )
      }
      
      {/* Título animado rotado (solo desktop) */}
      <div 
        className="hidden lg:block lg:absolute lg:top-1/2 lg:left-10 z-10" 
        style={{ 
          transform: 'translate(0, -50%) rotate(-90deg)', 
          transformOrigin: 'left center' 
        }}
      >
        
      </div>

      <div className="max-w-7xl mx-auto w-full">
      {
        !isDesktop && (
          <AnimatedText
            text="Embajadores que inspiran"
            className="text-[#203867] text-center w-full text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold uppercase tracking-tight font-['Space_Mono']"
            staggerDelay={0.04}
            duration={1}
            yOffset={120}
            triggerStart="top bottom"
          />
        )
      }
        {/* Bento Grid - Responsive */}
        <div ref={gridRef} className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 lg:grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr] gap-4 bento-grid'>
            {/* Card 1 - col-span-6 en desktop, full en mobile */}
            <div ref={(el) => { if (el) cardsRef.current[0] = el; }} className='col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-6 h-[350px] sm:h-[400px] md:h-[45vh] rounded-[10px] overflow-hidden ambassador-card'>
              <AmbassadorCard ambassador={ambassadors[0]} />
            </div>

            {/* Card 2 - col-span-4 en desktop */}
            <div ref={(el) => { if (el) cardsRef.current[1] = el; }} className='col-span-1 sm:col-span-1 md:col-span-2 lg:col-span-4 h-[350px] sm:h-[400px] md:h-[45vh] rounded-[10px] overflow-hidden ambassador-card'>
              <AmbassadorCard ambassador={ambassadors[1]} />
            </div>

            {/* Card 3 - col-span-4 en desktop */}
            <div ref={(el) => { if (el) cardsRef.current[2] = el; }} className='col-span-1 sm:col-span-1 md:col-span-2 lg:col-span-4 h-[350px] sm:h-[400px] md:h-[45vh] rounded-[10px] overflow-hidden ambassador-card'>
              <AmbassadorCard ambassador={ambassadors[2]} />
            </div>

            {/* Card 4 - col-span-4 en desktop */}
            <div ref={(el) => { if (el) cardsRef.current[3] = el; }} className='col-span-1 sm:col-span-1 md:col-span-2 lg:col-span-4 h-[350px] sm:h-[400px] md:h-[45vh] rounded-[10px] overflow-hidden ambassador-card'>
              <AmbassadorCard ambassador={ambassadors[3]} />
            </div>

            {/* Card 5 - col-span-4 en desktop */}
            <div ref={(el) => { if (el) cardsRef.current[4] = el; }} className='col-span-1 sm:col-span-1 md:col-span-2 lg:col-span-4 h-[350px] sm:h-[400px] md:h-[45vh] rounded-[10px] overflow-hidden ambassador-card'>
              <AmbassadorCard ambassador={ambassadors[4]} />
            </div>

            {/* Card 6 - col-span-6 en desktop, full en mobile */}
            <div ref={(el) => { if (el) cardsRef.current[5] = el; }} className='col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-6 h-[350px] sm:h-[400px] md:h-[45vh] rounded-[10px] overflow-hidden ambassador-card'>
              <AmbassadorCard ambassador={ambassadors[5]} />
            </div>
        </div>
      </div>
    </section>
  );
}
