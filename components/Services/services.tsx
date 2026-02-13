import { Button } from "../ui/button";
import Image from "next/image";
import { Typography } from "../ui/typography";
import Container from "../ui/container";
import Link from "next/link";

const socialImageUrl = "/assets/images/services/social.png";
const publicImageUrl = "/assets/images/services/public.png";
const developImageUrl = "/assets/images/services/develop.png";

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
  <div className="relative w-full h-[500px] lg:h-[678px] overflow-hidden">
    <Image
      src={service.image}
      width={500}
      height={500}
      alt={service.title}
      className="absolute inset-0 w-full h-full object-cover object-top"
    />
    <div className="absolute inset-0 bg-linear-to-t from-dominante from-10% via-dominante/60 via-40% to-transparent to-60%" />
    <div className="relative h-full flex items-end  px-8 py-3 lg:text-left">
      <div className="flex flex-col gap-3 h-[30%]">
        <Typography
          variant="subtitle 2"
          className="text-xl"
        >
          {service.title}
        </Typography>
        <Typography variant="sora light" className="text-lg">
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
      image: socialImageUrl,
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
    <section id={id} className="mx-auto text-center my-[55px]!">
      <>
        <Typography className="font-oswald font-medium text-[45px] md:text-[80px] lg:text-[px] text-mediador whitespace-nowrap">
          NUESTROS SERVICIOS
        </Typography>
      </>

      <Container className="mt-10 sm:px-0">
        <div className="w-full flex flex-col lg:flex-row justify-center gap-10">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </Container>

      <Container className="mt-10">
        <div className="w-full bg-mediador/10 rounded-[6px] p-6">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
            <div className="flex flex-col">
              <Typography variant="display 1" className="">
                ESTRATEGIA
              </Typography>
              <Typography variant="display 1" className="">
                360°
              </Typography>
            </div>
            <div className="lg:w-1/2">
              <Typography variant="subtitle 2" className="text-sm">
                Incluye todos los puntos de contacto con tu audiencia. Desde la
                comunicación en redes sociales hasta el impacto visual en la
                calle, cada elemento trabaja en conjunto para fortalecer tu
                marca y generar resultados medibles.
              </Typography>
            </div>
              <Link href="#contacto">
            <Button variant="default">
                Conocer más
            </Button>
              </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Services;
