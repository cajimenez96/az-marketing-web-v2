"use client";

import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";

export function useLocomotiveScroll() {
  const locomotiveRef = useRef<LocomotiveScroll | null>(null);
  const isInitialized = useRef(false);

  useEffect(() => {
    // Verificar que estamos en el cliente
    if (typeof window === "undefined" || isInitialized.current) return;

    // Inicializar Locomotive Scroll con opciones optimizadas
    locomotiveRef.current = new LocomotiveScroll({
      lenisOptions: {
        // Suavizado del scroll
        lerp: 0.1, // Valor entre 0 y 1 (más bajo = más suave pero más lento)
        duration: 1.2, // Duración de la animación
        orientation: "vertical", // Orientación del scroll
        gestureOrientation: "vertical",
        smoothWheel: true, // Suavizado con rueda del mouse
        wheelMultiplier: 1, // Multiplicador de velocidad de la rueda
        touchMultiplier: 2, // Multiplicador para touch
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Función de easing personalizada
      },
    });

    isInitialized.current = true;

    // Función para manejar resize (importante para Next.js routing)
    const handleResize = () => {
      locomotiveRef.current?.resize();
    };

    // Escuchar eventos de resize para recalcular dimensiones
    window.addEventListener("resize", handleResize);

    // Trigger inicial después de que todo el contenido cargue
    const timer = setTimeout(() => {
      handleResize();
    }, 100);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timer);
      locomotiveRef.current?.destroy();
      locomotiveRef.current = null;
      isInitialized.current = false;
    };
  }, []);

  // Métodos útiles
  const scrollTo = (target: string | number, options?: { offset?: number; duration?: number }) => {
    if (locomotiveRef.current) {
      locomotiveRef.current.scrollTo(target, {
        offset: options?.offset || 0,
        duration: options?.duration || 1000,
      });
    }
  };

  const resize = () => {
    locomotiveRef.current?.resize();
  };

  return {
    locomotive: locomotiveRef,
    scrollTo,
    resize,
  };
}
