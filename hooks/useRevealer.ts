"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import CustomEase from "gsap/CustomEase";

gsap.registerPlugin(CustomEase);
CustomEase.create("hop", "0.9, 0, 0.1, 1");

export const useRevealer = () => {
  useGSAP(() => {
    // Estado inicial: cubre toda la pantalla
    gsap.set(".page-loader", {
      y: 0,
    });

    // Estado inicial del logo
    gsap.set(".loader-logo", {
      scale: 0.5,
      opacity: 0,
    });

    // Timeline para animación completa
    const tl = gsap.timeline({
      onComplete: () => {
        // Marcar como completado en sessionStorage después de la animación
        sessionStorage.setItem("hasLoadedBefore", "true");
      },
    });

    // Logo aparece con animación
    tl.to(".loader-logo", {
      scale: 1,
      opacity: 1,
      duration: 1.2,
      ease: "power3.out",
    })
    // Pequeño pulso
    .to(".loader-logo", {
      scale: 1.1,
      duration: 0.3,
      ease: "power2.inOut",
    }, "-=0.4")
    .to(".loader-logo", {
      scale: 1,
      duration: 0.3,
      ease: "power2.inOut",
    })
    // Pausa para apreciar
    .to({}, { duration: 0.8 })
    // El revealer se mueve hacia arriba hasta desaparecer
    .to(".page-loader", {
      y: "-100%",
      duration: 1.2,
      ease: "hop",
    }, "-=0.3");
  }, {});
};
