"use client";

import { useEffect, useRef } from "react";
import Logo from "./Logo";
import { gsap } from "gsap";

function Revealer() {
  const revealerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Estado inicial: oculto
    if (revealerRef.current) {
      gsap.set(revealerRef.current, {
        opacity: 0,
        pointerEvents: "none",
        clipPath: "circle(0% at 50% 50%)"
      });
    }

    if (logoRef.current) {
      gsap.set(logoRef.current, {
        scale: 0.7,
        opacity: 0
      });
    }

    // Función para manejar la transición
    const handleTransition = () => {
      if (!revealerRef.current || !logoRef.current) return;

      const timeline = gsap.timeline();

      timeline
        .set(revealerRef.current, { opacity: 1, pointerEvents: "auto" })
        .to(revealerRef.current, {
          clipPath: "circle(100% at 50% 50%)",
          duration: 0.6,
          ease: "power3.inOut",
        })
        .to(
          logoRef.current,
          {
            scale: 1,
            opacity: 1,
            duration: 0.5,
            ease: "power2.out",
          },
          "-=0.4"
        )
        .to(logoRef.current, {
          scale: 1.05,
          duration: 0.2,
          ease: "power2.inOut",
        })
        .to(
          revealerRef.current,
          {
            opacity: 0,
            clipPath: "circle(0% at 50% 50%)",
            duration: 0.6,
            ease: "power3.inOut",
          },
          "+=0.2"
        )
        .to(
          logoRef.current,
          {
            opacity: 0,
            scale: 0.8,
            duration: 0.4,
            ease: "power2.inOut",
          },
          "-=0.5"
        )
        .set(revealerRef.current, { pointerEvents: "none" });
    };

    // Escuchar eventos de navegación y view transitions
    const handleViewTransition = () => {
      // Pequeño delay para asegurar que la transición de página haya empezado
      setTimeout(handleTransition, 50);
    };

    // Escuchar diferentes eventos que pueden indicar navegación
    window.addEventListener("popstate", handleTransition);
    window.addEventListener("beforeunload", handleTransition);

    // También escuchar cambios en la URL (para navegación programática)
    let currentUrl = window.location.href;
    const observer = new MutationObserver(() => {
      if (window.location.href !== currentUrl) {
        currentUrl = window.location.href;
        handleTransition();
      }
    });

    // Observar cambios en el body que puedan indicar navegación
    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      window.removeEventListener("popstate", handleTransition);
      window.removeEventListener("beforeunload", handleTransition);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={revealerRef}
      className="revealer fixed inset-0 z-9998 flex justify-center items-center bg-linear-to-br from-white/10 via-white/10 to-white/10"
    >
      <div ref={logoRef} className="w-60 md:w-60 lg:w-32 z-9999 bg-white/10 rounded-2xl p-6 border border-white/40 backdrop-blur-3xl">
        <Logo isoType />
      </div>
    </div>
  );
}

export default Revealer;

