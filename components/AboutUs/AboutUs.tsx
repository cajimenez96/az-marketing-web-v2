import { Typography } from "../ui/typography";

interface IAboutUs {
  id: string;
}

const AboutUs = ({ id }: IAboutUs) => {
  return (
    <section id={id} className="mx-auto">
      <div className="flex justify-evenly items-center gap-10">
        <div className="md:w-1/2">
          <div className="flex flex-col mx-auto">
            <div className="flex flex-col mx-auto xl:mx-0">
              <Typography
                variant="display 1"
                className="font-medium text-[6rem] lg:text-[8rem] -mb-12 lg:-mb-14"
              >
                VIVIMOS
              </Typography>
              <Typography
                variant="display subtitle 1"
                className="font-medium text-[3.8rem] lg:text-[5rem] text-tonico lg:-my-2 whitespace-nowrap"
              >
                UN PRESENTE
              </Typography>
              <Typography
                variant="display subtitle 1"
                className="font-medium text-[2.7rem] lg:text-[3.5rem] text-tonico -mt-7 lg:-mt-8 whitespace-nowrap"
              >
                HIPER-CONECTADO
              </Typography>
            </div>

            <div className="flex flex-col gap-2 max-w-[490px] md:gap-8 mt-5">
              <Typography variant="subtitle 2" className="text-md">
                No creemos en soluciones únicas. Ante un entorno saturado de
                información, el éxito de una marca y su llegada al público
                dependen de la conexión entre su presencia digital, su
                desarrollo tecnológico y su impacto en el mundo real.
              </Typography>

              <Typography variant="subtitle 2" className="text-md">
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
