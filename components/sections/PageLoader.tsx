"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";
import { useRevealer } from "@/hooks/useRevealer";

export default function PageLoader() {
  const [shouldShow, setShouldShow] = useState(false);

  useEffect(() => {
    // Solo mostrar el loader en la primera carga
    const hasLoaded = sessionStorage.getItem("hasLoadedBefore");

    if (!hasLoaded) {
      setShouldShow(true);
    }
  }, []);

  // Usar el hook personalizado para la animación
  useRevealer();

  // Si no debe mostrarse, no renderizar nada
  if (!shouldShow) return null;

  return (
    <div className="page-loader fixed inset-0 z-10001 flex items-center justify-center bg-linear-to-br  backdrop-blur-3xl">
      <div className="loader-logo w-32 md:w-40 lg:w-48">
        <Logo  />
      </div>
    </div>
  );
}

