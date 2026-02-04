import { Code2, Share2, Megaphone, ArrowUpRight, Zap } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";
import { Typography } from "../ui/typography";

const socialImageUrl = "/assets/images/services/develop.avif";
const publicImageUrl = "/assets/images/services/via-publica.jpg";
const developImageUrl = "/assets/images/services/systems.png";

interface IServices {
  id: string;
}

interface IService {
  id: string;
  title: string;
  description: string;
  image: string;
}

// ServiceCard component - Extracted outside to avoid recreation each render
const ServiceCard = ({ service }: { service: IService }) => (
  <div className="border-r-[0.25px] border-mediator min-h-[500px]">
    <div className="px-10 pb-20 flex items-end h-full">
      <div className="flex flex-col gap-5 h-[120px]">
        <Typography variant="subtitle 2" className="text-xl font-semibold">
          {service.title}
        </Typography>
        <Typography variant="subtitle 2" className="text-md">
          {service.description}
        </Typography>
      </div>
    </div>
  </div>
);

const Services = ({ id }: IServices) => {
  const services: IService[] = [
    {
      id: "social",
      title: "Gestión Integral de Redes",
      description:
        "Creamos y gestionamos comunidades auténticas en todas las plataformas sociales, con contenido estratégico que conecta con tu audiencia.",
      image: developImageUrl,
    },
    {
      id: "development",
      title: "Desarrollo Web y Sistemas",
      description:
        "Desarrollamos soluciones tecnológicas a medida que optimizan procesos y mejoran la experiencia de tus clientes.",
      image: developImageUrl,
    },
    {
      id: "advertising",
      title: "Publicidad en Vía Pública",
      description:
        "Conectamos tu marca con miles de personas cada día a través de ubicaciones estratégicas en todo el Norte Argentino.",
      image: publicImageUrl,
    },
  ];

  return (
    <section id={id} className="h-screen mx-auto">
      <div className="w-full border-t-[0.25px] border-mediator"></div>

      <div className="text-center my-5">
        <Typography
          variant="display 1"
          className="text-center font-medium text-[6rem] lg:text-[8rem]"
        >
          NUESTROS SERVICIOS
        </Typography>
      </div>

      <div className="flex mb-10">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>

      <div className="w-full bg-mediador/10 py-10 px-20 rounded-[6px]">
        <div className="flex justify-between items-center gap-10">
          <div className="flex flex-col">
            <Typography variant="display 1" className="">
              ESTRATEGIA
            </Typography>
            <Typography variant="display 1" className="">
              360°
            </Typography>
          </div>
          <div className="w-1/2">
            <Typography variant="subtitle 2" className="text-sm">
              Incluye todos los puntos de contacto con tu audiencia. Desde la
              comunicación en redes sociales hasta el impacto visual en la
              calle, cada elemento trabaja en conjunto para fortalecer tu marca
              y generar resultados medibles.
            </Typography>
          </div>
          <Button>Conocer más</Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
