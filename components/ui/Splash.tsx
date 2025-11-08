"use client";

import { useState, useRef } from "react";
import logoSun from "@/public/images/logo_sun.svg";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

// Registrar el plugin useGSAP
gsap.registerPlugin(useGSAP);

export default function Splash({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useGSAP(
    () => {
      if (!imageRef.current || !containerRef.current) return;

      // Establecer estado inicial sin blur y elementos invisibles
      gsap.set(imageRef.current, { opacity: 0 });

      // Crear timeline de GSAP con animación fluida
      const tl = gsap.timeline({

      });

      tl
        // Fase 1: Aparición de la imagen
        .to(imageRef.current, {
          opacity: 1,
          duration: 1.2,
          ease: "power2.out",
        })
        // Fase 2: Giros con frenado suave y progresivo
        .to(
          imageRef.current,
          {
            rotation: 180,
            duration: 2,
            ease: "power3.out", // Frenado muy suave - empieza rápido y frena progresivamente
          },
          "-=1"
        )
        .to(containerRef.current, {
                    scale: 1.5,
                    filter: "blur(20px)",
                    opacity: 0,
                    duration: 0.3,
                    ease: "power2.in",
                    transformOrigin: "center center",
                    onComplete: () => {
                      setLoading(false);
                    }
                  });
        // Overlap sutil para transición fluida
    },
    { scope: containerRef }
  ); // scope delimita el contexto de las animaciones

  return (
    <>
      {/* Contenido de la web siempre renderizado debajo */}
      {children}
      
      {/* Splash screen por encima */}
      {loading && (
        <div
          ref={containerRef}
          className="splash-container fixed inset-0 w-full h-screen flex items-center justify-center bg-[#e8e8ed] z-50"
        >
          <div className="absolute w-[280px] h-[158px] mx-auto -rotate-90 -translate-x-1/4">
            <div 
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[48%] w-[300px] h-[158px]"
              style={{
                maskImage: 'radial-gradient(ellipse 140px 80px at center, rgba(0,0,0,1) 40%, rgba(0,0,0,0.8) 60%, rgba(0,0,0,0) 100%)',
                WebkitMaskImage: 'radial-gradient(ellipse 300px 150px at center, rgba(0,0,0,1) 40%, rgba(0,0,0,0.8) 60%, rgba(0,0,0,0) 100%)',
              }}
            >
              <Image
                ref={imageRef}
                src={logoSun}
                alt="URUSport SUMMIT 2026"
                width={100}
                height={100}
                className="w-[300px] h-[300px] object-contain opacity-0"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
