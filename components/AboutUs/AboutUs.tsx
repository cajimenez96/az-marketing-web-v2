import { Typography } from "../ui/typography";
import Image from "next/image";
import aboutUs from "@/public/assets/images/about/about-us.jpg";

interface IAboutUs {
  id: string;
}

const AboutUs = ({ id }: IAboutUs) => {
  return (
    <section id={id} className="relative w-full h-screen overflow-hidden">
      <div className="h-full relative z-10 mx-auto flex flex-col md:flex-row items-center">
        <div className="w-full z-10 px-7 lg:pl-[100px] xl:pl-[210px]">
          <div className="flex flex-col pt-10 md:pt-0">
            <Typography className="font-oswald font-medium text-[80px] md:text-[130px] lg:text-[150px] leading-20 md:leading-24 lg:leading-36 text-mediador">
              VIVIMOS
            </Typography>
            <Typography className="font-oswald font-medium text-[60px] md:text-[82px] lg:text-[96px] leading-14 md:leading-28 lg:leading-[100px] text-tonico">
              UN PRESENTE
            </Typography>
            <Typography className="font-oswald font-medium text-[40px] md:text-[58px] lg:text-[69px] leading-12 md:leading-10 lg:leading-[76px] text-tonico">
              HIPER-CONECTADO
            </Typography>
          </div>

          <div className="flex flex-col gap-2 max-w-[490px] md:gap-8 mt-10">
            <Typography variant="subtitle 2" className="text-md">
              No creemos en soluciones únicas. Ante un entorno saturado de
              información, el éxito de una marca y su llegada al público
              dependen de la conexión entre su presencia digital, su desarrollo
              tecnológico y su impacto en el mundo real.
            </Typography>

            <Typography variant="subtitle 2" className="text-md">
              Combinamos datos y creatividad para crear estrategias que
              funcionan de verdad. Ofrecemos sistemas de comunicación donde lo
              digital y la publicidad tradicional trabajan juntas para hacer
              crecer tu marca.
            </Typography>
          </div>
        </div>
        <div className="absolute -inset-1 z-0">
          <Image
            src={aboutUs}
            alt="Nosotros"
            className="w-full h-full object-cover lg:object-fill"
          />
          <div
            className="
            h-full
              absolute -inset-2 md:inset-0
              bg-linear-to-b md:bg-linear-to-r
              from-dominante
              via-dominante/95
              to-transparent
            "
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
