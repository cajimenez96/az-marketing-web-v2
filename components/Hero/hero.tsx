"use client";

import { CircleChevronDownIcon } from "lucide-react";
import { Typography } from "../ui/typography";
import { Button } from "../ui/button";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

interface IHero {
  id?: string;
}

const Hero = ({ id }: IHero) => {
  const handleConocenos = () => {
    gsap.registerPlugin(ScrollToPlugin);

    gsap.to(window, {
      duration: 1.2,
      scrollTo: { y: "#nosotros", offsetY: 80 },
      ease: "power3.inOut",
      onComplete: () => {
        const target = document.getElementById("nosotros");
        if (!target) return;
        gsap.fromTo(
          target,
          { scale: 1.015, filter: "brightness(1.12)" },
          {
            scale: 1,
            filter: "brightness(1)",
            duration: 0.6,
            ease: "power2.out",
          },
        );
      },
    });
  };

  return (
    <section
      id={id}
      className="h-screen mx-auto pt-[15%] md:pt-[10%] lg:pt-[5%]"
    >
      <div className="h-full flex flex-col justify-evenly items-center gap-10">
        <div className="w-fit">
          <div className="flex flex-col justify-center items-center">
            <Typography
              variant="display 1"
              className="text-[50px] md:text-[100px] lg:text-[150px]"
            >
              NO SOMOS SOLO
            </Typography>
            <div className="bg-tonico w-fit px-5 rounded-[4px]! -rotate-1 -mt-4 md:-mt-8 lg:-mt-12">
              <Typography
                variant="display subtitle"
                className="text-dominante text-[23px] md:text-[50px] lg:text-[78px]"
                style={{ letterSpacing: ".15rem" }}
              >
                UNA AGENCIA DE MARKETING
              </Typography>
            </div>
          </div>
          <div className="text-center mt-[52px] mx-auto">
            <Typography
              variant="subtitle"
              className="text-[18px]! md:text-[24px]! whitespace-break-spaces height leading-responsive"
            >
              {`Te ayudamos a crecer integrando\n contenido para redes, desarrollo web\n y publicidad.`}
            </Typography>
          </div>
        </div>

        <Button
          variant="link"
          className="hover:no-underline"
          onClick={handleConocenos}
        >
          <span className="flex items-center gap-2">
            <Typography variant="subtitle" className="uppercase text-lg">
              CONÓCENOS
            </Typography>
            <CircleChevronDownIcon
              size={24}
              className="text-mediador animate-pulse"
            />
          </span>
        </Button>
      </div>
    </section>
  );
};

export default Hero;
