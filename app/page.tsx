import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import Home from "@/components/home/home";
// import Particles from "@/components/ui/Particles";

export const metadata: Metadata = {
  title: {
    absolute: siteConfig.title,
  },
  description: siteConfig.description,
};

export default function HomePage() {
  return (
    <>
      {/* <div className="fixed inset-0 z-10 pointer-events-none">
        <Particles
          particleCount={150}
          particleSpread={12}
          speed={0.08}
          particleColors={["#8FB3E2", "#D9E1F1", "#31487A"]}
          alphaParticles={true}
          particleBaseSize={80}
          sizeRandomness={0.8}
          cameraDistance={25}
          moveParticlesOnHover={true}
          particleHoverFactor={0.5}
        />
      </div> */}
      <Home />
    </>
  );
}
