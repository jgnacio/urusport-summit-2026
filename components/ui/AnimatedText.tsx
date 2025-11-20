'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Registrar plugin de ScrollTrigger
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

type AnimatedTextProps = {
  text: string;
  className?: string;
  staggerDelay?: number;
  duration?: number;
  yOffset?: number;
  triggerStart?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
};

export default function AnimatedText({
  text,
  className = '',
  staggerDelay = 0.03,
  duration = 0.8,
  yOffset = 100,
  triggerStart = 'top 85%',
  as: Component = 'h2',
}: AnimatedTextProps) {
  const containerRef = useRef<HTMLElement>(null);
  const lettersRef = useRef<HTMLSpanElement[]>([]);

  useEffect(() => {
    if (!containerRef.current || lettersRef.current.length === 0) return;

    const ctx = gsap.context(() => {
      gsap.from(lettersRef.current, {
        y: yOffset,
        opacity: 0,
        rotateX: -90,
        stagger: staggerDelay,
        duration: duration,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: triggerStart,
          toggleActions: 'play none none none',
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, [text, staggerDelay, duration, yOffset, triggerStart]);

  // Dividir el texto en caracteres, preservando espacios
  const characters = text.split('');

  return (
    <Component
      ref={containerRef as any}
      className={`inline-block overflow-hidden ${className}`}
      style={{ perspective: '1000px' }}
    >
      {characters.map((char, index) => (
        <span
          key={index}
          ref={(el) => {
            if (el) lettersRef.current[index] = el;
          }}
          className="inline-block"
          style={{
            transformOrigin: 'bottom center',
            // Preservar espacios
            ...(char === ' ' ? { width: '0.3em' } : {}),
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </Component>
  );
}

