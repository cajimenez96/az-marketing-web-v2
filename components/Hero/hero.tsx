import {
  ArrowRight,
  ChevronsDown,
  CircleChevronDown,
  CircleChevronDownIcon,
} from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";
import { Typography } from "../ui/typography";

interface IHero {
  id?: string;
}

const Hero = ({ id }: IHero) => {
  return (
    <section id={id} className="h-screen mx-auto pb-10">
      <div className="h-full flex flex-col justify-evenly items-center gap-10">
        <div className="w-fit">
          <div className="flex flex-col justify-center items-center">
            <Typography
              variant="display 1"
              className="text-[3rem] lg:text-[8rem] xl:text-[9.37rem]"
            >
              NO SOMOS SOLO
            </Typography>
            <div className="bg-tonico w-fit px-5 rounded-[6px] -rotate-1 -mt-3 lg:-mt-12">
              <Typography
                variant="display subtitle 1"
                className="text-dominante text-[1.32rem] lg:text-[3.5rem] xl:text-[4.6rem]"
                style={{ letterSpacing: "0.1em" }}
              >
                UNA AGENCIA DE MARKETING
              </Typography>
            </div>
          </div>
          <div className="text-center max-w-sm lg:max-w-md mt-10 mx-auto">
            <Typography variant="subtitle 1" className="text-md lg:text-lg">
              Te ayudamos a crecer integrando contenido para redes, desarrollo
              web y publicidad en vía publica .
            </Typography>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Typography variant="subtitle 1" className="uppercase text-lg">
            CONÓCENOS
          </Typography>
          <CircleChevronDownIcon
            size={24}
            className="text-mediador animate-pulse"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
