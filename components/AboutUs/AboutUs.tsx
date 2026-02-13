import { Typography } from "../ui/typography";
import Image from "next/image";
import aboutUs from "@/public/assets/images/about/about-us.jpg";
import Container from "../ui/container";

interface IAboutUs {
  id: string;
}

const AboutUs = ({ id }: IAboutUs) => {
  return (
    <section id={id} className="relative w-full overflow-hidden">
      <Container className="px-0 overflow-hidden">
        {/* Desktop Layout: Imagen como fondo absoluto */}
        <div className="hidden lg:flex relative z-10 min-h-screen items-center">
          <div className="flex flex-col gap-8 max-w-lg py-20">
            <div className="flex flex-col">
              <Typography className="font-oswald font-medium text-[150px] leading-[130px] text-mediador">
                VIVIMOS
              </Typography>
              <Typography className="font-oswald font-medium text-[96px] leading-[100px] text-tonico">
                UN PRESENTE
              </Typography>
              <Typography className="font-oswald font-medium text-[69px] leading-[76px] text-tonico">
                HIPER-CONECTADO
              </Typography>
            </div>

            <div className="flex flex-col gap-4">
              <Typography variant="sora light">
                No creemos en soluciones únicas. Ante un entorno saturado de
                información, el éxito de una marca y su llegada al público
                dependen de la conexión entre su presencia digital, su desarrollo
                tecnológico y su impacto en el mundo real.
              </Typography>

              <Typography variant="sora light">
                Combinamos datos y creatividad para crear estrategias que
                funcionan de verdad. Ofrecemos sistemas de comunicación donde lo
                digital y la publicidad tradicional trabajan juntas para hacer
                crecer tu marca.
              </Typography>
            </div>
          </div>
        </div>

        {/* Mobile/Tablet Layout: Columna con texto arriba e imagen abajo */}
        <div className="relative lg:hidden flex flex-col">
          {/* Texto primero - fondo completo */}
          <div className="bg-dominante px-8">
            <div className="flex flex-col gap-6 md:gap-8">
              <div className="flex flex-col">
                <Typography className="font-oswald font-medium text-[60px] md:text-[100px] leading-[55px] md:leading-[90px] text-mediador">
                  VIVIMOS
                </Typography>
                <Typography className="font-oswald font-medium text-[45px] md:text-[70px] leading-[42px] md:leading-[68px] text-tonico">
                  UN PRESENTE
                </Typography>
                <Typography className="font-oswald font-medium text-[32px] md:text-[50px] leading-[34px] md:leading-[52px] text-tonico">
                  HIPER-CONECTADO
                </Typography>
              </div>

              <div className="flex flex-col gap-3 md:gap-4">
                <Typography variant="sora light" className="text-sm md:text-base">
                  No creemos en soluciones únicas. Ante un entorno saturado de
                  información, el éxito de una marca y su llegada al público
                  dependen de la conexión entre su presencia digital, su desarrollo
                  tecnológico y su impacto en el mundo real.
                </Typography>

                <Typography variant="sora light" className="text-sm md:text-base">
                  Combinamos datos y creatividad para crear estrategias que
                  funcionan de verdad. Ofrecemos sistemas de comunicación donde lo
                  digital y la publicidad tradicional trabajan juntas para hacer
                  crecer tu marca.
                </Typography>
              </div>
            </div>
          </div>

          {/* Imagen después */}
          <div className="w-full relative">
            <Image
              src={aboutUs}
              alt="Nosotros"
              className="w-full h-auto object-cover"
            />
            {/* Overlay gradient desde arriba para efecto de difuminado */}
            <div className="absolute inset-0 bg-linear-to-b from-dominante via-dominante/70 via-50% to-transparent" />
          </div>
        </div>

        {/* Imagen de fondo para Desktop */}
        <div className="hidden lg:block absolute inset-0 z-0">
          <Image
            src={aboutUs}
            alt="Nosotros"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-r from-dominante via-dominante/95 via-50% to-transparent" />
        </div>
      </Container>
    </section>
  );
};

export default AboutUs;
