import Image from "next/image";
import Container from "../ui/container";
import { Typography } from "../ui/typography";
import { CircleCheckIcon } from "lucide-react";
import argentinaMapUrl from "@/public/assets/images/coverage/argentina.png";

interface ICoverage {
  id: string;
}

const provinces = [
  { name: "Jujuy", top: "8%", left: "33%" },
  { name: "Salta", top: "16%", left: "38%" },
  { name: "Formosa", top: "14%", left: "60%" },
  { name: "Tucumán", top: "20%", left: "36%" },
  { name: "Catamarca", top: "20%", left: "28%" },
  { name: "Santiago del Estero", top: "23%", left: "45%" },
  { name: "Chaco", top: "20%", left: "58%" },
  { name: "Corrientes", top: "25%", left: "70%" },
];

const MapMarker = () => (
  <span className="block size-1.5 md:size-3 xl:size-3.5 rounded-full border border-tonico md:border-2 bg-tonico/30" />
);

const Coverage = ({ id }: ICoverage) => {
  return (
    <section id={id} className="w-full min-h-screen lg:h-screen">
      <Container className="h-full flex flex-col xl:flex-row gap-10 py-16 lg:py-0">
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
            <Typography variant="subtitle 2" className="text-md">
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
                <Typography variant="subtitle 2" className="text-mediador">
                  Ubicaciones premium en zonas comerciales de alta densidad.
                </Typography>
              </li>
              <li className="flex items-center gap-4">
                <CircleCheckIcon
                  className="text-tonico shrink-0 mt-0.5"
                  size={20}
                />
                <Typography variant="subtitle 2" className="text-mediador">
                  Dispositivos digitales LED de última generación con métricas
                  reales.
                </Typography>
              </li>
              <li className="flex items-center gap-4">
                <CircleCheckIcon
                  className="text-tonico shrink-0 mt-0.5"
                  size={20}
                />
                <Typography variant="subtitle 2" className="text-mediador">
                  Formatos estáticos de gran escala (monocolumnas y
                  medianerías).
                </Typography>
              </li>
              <li className="flex items-center gap-4">
                <CircleCheckIcon
                  className="text-tonico shrink-0 mt-0.5"
                  size={20}
                />
                <Typography variant="subtitle 2" className="text-mediador">
                  Mantenimiento e iluminación garantizada 24/7.
                </Typography>
              </li>
            </ul>
          </div>
        </div>

        {/* Map with markers */}
        <div className="w-full md:w-2/3 md:mx-auto xl:w-1/2 flex p-10">
          <div className="relative w-full">
            <Image
              src={argentinaMapUrl}
              alt="Cobertura"
              className="object-cover w-full h-auto"
            />
            {provinces.map((province) => (
              <div
                key={province.name}
                className="absolute -translate-x-1/2 -translate-y-1/2 animate-pulse"
                style={{ top: province.top, left: province.left }}
              >
                <MapMarker />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Coverage;
