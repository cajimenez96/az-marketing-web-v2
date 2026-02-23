"use client";

import { useEffect, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

interface ScrollProviderProps {
  children: ReactNode;
}

export default function ScrollProvider({ children }: ScrollProviderProps) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    ScrollTrigger.config({
      ignoreMobileResize: true,
    });

    // Animate all .reveal elements on scroll
    // toggleActions: "play none none reset" → replays every time the element re-enters the viewport
    const revealElements = gsap.utils.toArray<HTMLElement>(".reveal");

    revealElements.forEach((el) => {
      // Set initial hidden state
      gsap.set(el, { opacity: 0, y: 60 });

      // Attach the animation to a ScrollTrigger so it replays on re-entry
      const anim = gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        paused: true,
      });

      ScrollTrigger.create({
        trigger: el,
        start: "top 85%",
        // play on enter, reset (revert to initial state) when element leaves back up
        toggleActions: "play none none reset",
        onEnter: () => anim.play(),
        onLeaveBack: () => anim.pause(0),
      });
    });

    const onLoad = () => ScrollTrigger.refresh();
    window.addEventListener("load", onLoad);

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      window.removeEventListener("load", onLoad);
    };
  }, []);

  return <>{children}</>;
}
