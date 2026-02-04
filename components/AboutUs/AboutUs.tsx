import { TrendingUp, Users, Clock, MapPin } from "lucide-react";
import Image from "next/image";
import { Typography } from "../ui/typography";

const aboutImageUrl = "/assets/images/about/about-us.avif";

interface IAboutUs {
  id: string;
}

interface Stat {
  value: string;
  label: string;
  icon: React.ReactNode;
}

const AboutUs = ({ id }: IAboutUs) => {
  const stats: Stat[] = [
    {
      value: "10+",
      label: "Años de Experiencia",
      icon: <TrendingUp className="w-6 h-6" />,
    },
    {
      value: "200+",
      label: "Proyectos Exitosos",
      icon: <Users className="w-6 h-6" />,
    },
    {
      value: "8",
      label: "Provincias",
      icon: <MapPin className="w-6 h-6" />,
    },
    {
      value: "24/7",
      label: "Soporte",
      icon: <Clock className="w-6 h-6" />,
    },
  ];

  return (
    <section id={id} className="h-screen mx-auto pb-10">
      <div className="h-full flex justify-evenly items-center gap-10">
        <div className="md:w-1/2">
          <div className="flex flex-col mx-auto">
            <div className="flex flex-col mx-auto xl:mx-0">
              <Typography
                variant="display 1"
                className="font-medium text-[6rem] lg:text-[9rem] -mb-12 lg:-mb-14"
              >
                VIVIMOS
              </Typography>
              <Typography
                variant="display subtitle 1"
                className="font-medium text-[3.8rem] lg:text-[5.6rem] text-tonico lg:-my-4 whitespace-nowrap"
              >
                UN PRESENTE
              </Typography>
              <Typography
                variant="display subtitle 1"
                className="font-medium text-[2.7rem] lg:text-[4rem] text-tonico -mt-7 lg:-mt-6 whitespace-nowrap"
              >
                HIPER-CONECTADO
              </Typography>
            </div>

            <div className="flex flex-col gap-2 max-w-[530px] md:gap-8 mt-5">
              <Typography variant="subtitle 1" className="text-sm lg:text-lg">
                No creemos en soluciones únicas. Ante un entorno saturado de
                información, el éxito de una marca y su llegada al público
                dependen de la conexión entre su presencia digital, su
                desarrollo tecnológico y su impacto en el mundo real.
              </Typography>

              <Typography variant="subtitle 1" className="text-sm lg:text-lg">
                Combinamos datos y creatividad para crear estrategias que
                funcionan de verdad. Ofrecemos sistemas de comunicación donde lo
                digital y la publicidad tradicional trabajan juntas para hacer
                crecer tu marca.
              </Typography>
            </div>
          </div>
        </div>
        <div className="w-1/2"></div>
      </div>
    </section>
  );
};

export default AboutUs;
