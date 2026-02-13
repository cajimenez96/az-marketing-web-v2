"use client";

import { type ReactNode, useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  /** Clase de delay: scroll-reveal-delay-1 a scroll-reveal-delay-4 */
  delay?: 0 | 1 | 2 | 3 | 4;
  /** Porcentaje del elemento visible para disparar (0-1). Por defecto 0.12 */
  threshold?: number;
  /** Margen negativo en px para activar un poco antes de que entre del todo */
  rootMargin?: string;
}

const ScrollReveal = ({
  children,
  className,
  delay = 0,
  threshold = 0.12,
  rootMargin = "0px 0px -48px 0px",
}: ScrollRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  const delayClass =
    delay > 0 ? `scroll-reveal-delay-${delay}` : undefined;

  return (
    <div
      ref={ref}
      className={cn(
        "scroll-reveal",
        isVisible && "scroll-reveal-visible",
        delayClass,
        className
      )}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
