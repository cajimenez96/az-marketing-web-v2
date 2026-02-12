import { CircleChevronDownIcon } from "lucide-react";
import { Typography } from "../ui/typography";
import { Button } from "../ui/button";
import Link from "next/link";

interface IHero {
  id?: string;
}

const Hero = ({ id }: IHero) => {
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
              {`Te ayudamos a crecer integrando\n contenido para redes, desarrollo web\n y publicidad en vía publica.`}
            </Typography>
          </div>
        </div>

        <Button variant="link" className="hover:no-underline">
          <Link href="#nosotros" className="flex items-center gap-2">
          <Typography variant="subtitle" className="uppercase text-lg">
            CONÓCENOS
          </Typography>
          <CircleChevronDownIcon
            size={24}
            className="text-mediador animate-pulse"
          />
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default Hero;
