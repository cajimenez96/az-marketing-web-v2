import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import Home from "@/pages/Home/home";

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
      <Home />
    </>
  );
}
