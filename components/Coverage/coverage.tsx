import Image from "next/image";
import Container from "../ui/container";
import { Typography } from "../ui/typography";
import { CircleCheckIcon } from "lucide-react";
import argentinaMapUrl from "@/public/assets/images/coverage/argentina.png";

interface ICoverage {
  id: string;
}

const Coverage = ({ id }: ICoverage) => {
  return (
    <section id={id} className="w-full min-h-fit">
      <Container className="h-full flex flex-col xl:flex-row gap-10 lg:py-0">
        {/* Text content */}
        <div className="w-full xl:w-1/2">
          <div className="flex flex-col w-full">
            <Typography className="font-oswald font-medium text-[70px] md:text-[130px] lg:text-[150px] leading-20 md:leading-24 lg:leading-36 text-mediador">
              DOMINAMOS
            </Typography>
            <Typography className="font-oswald font-medium text-[38px] md:text-[82px] lg:text-[80px] leading-12 md:leading-28 lg:leading-[100px] text-tonico whitespace-nowrap">
              LOS PUNTOS CRÍTICOS
            </Typography>
            <Typography className="font-oswald font-medium text-[38px] md:text-[58px] lg:text-[60px] leading-12 md:leading-10 lg:leading-[76px] text-tonico whitespace-nowrap">
              DEL NORTE ARGENTINO
            </Typography>
          </div>

          <div className="flex flex-col gap-2 md:gap-8 mt-10 w-full">
            <Typography variant="subtitle" className="text-lg">
              No se trata de estar en todos lados, sino de estar donde tu
              audiencia está más receptiva. Para ello contamos con una red
              exclusiva de dispositivos en las principales arterias de Tucumán,
              Salta, Jujuy, Chaco y Corrientes.
            </Typography>

            <ul className="text-md flex flex-col gap-3">
              <li className="flex items-center gap-4">
                <CircleCheckIcon
                  className="text-tonico shrink-0 mt-0.5"
                  size={20}
                />
                <Typography variant="sora light" className="text-md">
                  Ubicaciones premium en zonas comerciales de alta densidad.
                </Typography>
              </li>
              <li className="flex items-center gap-4">
                <CircleCheckIcon
                  className="text-tonico shrink-0 mt-0.5"
                  size={20}
                />
                <Typography variant="sora light" className="text-md">
                  Dispositivos digitales LED de última generación con métricas
                  reales.
                </Typography>
              </li>
              <li className="flex items-center gap-4">
                <CircleCheckIcon
                  className="text-tonico shrink-0 mt-0.5"
                  size={20}
                />
                <Typography variant="sora light" className="text-md">
                  Formatos estáticos de gran escala (monocolumnas y
                  medianerías).
                </Typography>
              </li>
              <li className="flex items-center gap-4">
                <CircleCheckIcon
                  className="text-tonico shrink-0 mt-0.5"
                  size={20}
                />
                <Typography variant="sora light" className="text-md">
                  Mantenimiento e iluminación garantizada 24/7.
                </Typography>
              </li>
            </ul>
          </div>
        </div>

        {/* Map with markers */}
        <div className="md:w-2/3 md:mx-auto w-fill flex">
          <div>
            <Image
              src={argentinaMapUrl}
              alt="Cobertura"
              className="w-lg object-center object-fill animate-pulse"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Coverage;
