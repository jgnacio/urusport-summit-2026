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

  // Dividir el texto en palabras
  const words = text.split(' ');
  let letterIndex = 0;

  return (
    <Component
      ref={containerRef as any}
      className={`block overflow-visible ${className}`}
      style={{ perspective: '1000px' }}
    >
      {words.map((word, wordIndex) => (
        <span
          key={wordIndex}
          className="inline-block whitespace-nowrap"
          style={{ marginRight: wordIndex < words.length - 1 ? '0.3em' : '0' }}
        >
          {word.split('').map((char, charIndex) => {
            const currentIndex = letterIndex++;
            return (
              <span
                key={charIndex}
                ref={(el) => {
                  if (el) lettersRef.current[currentIndex] = el;
                }}
                className="inline-block"
                style={{
                  transformOrigin: 'bottom center',
                }}
              >
                {char}
              </span>
            );
          })}
        </span>
      ))}
    </Component>
  );
}

