import { Code2, Share2, Megaphone, ArrowUpRight, Zap } from 'lucide-react'
import { Button } from '../ui/button'
import Image from 'next/image'

const socialImageUrl = "/assets/images/services/develop.avif"
const publicImageUrl = "/assets/images/services/via-publica.jpg"
const developImageUrl = "/assets/images/services/systems.png"

interface IServices {
  id: string
}

interface IService {
  id: string
  title: string
  subtitle?: string
  description: string
  image: string
  icon: React.ReactNode
  tags?: string[]
  features?: string[]
}

// ServiceCard component - Extracted outside to avoid recreation each render
const ServiceCard = ({ service }: { service: IService }) => (
  <div
    className={`group relative overflow-hidden rounded-2xl bg-[#1E2E4F]/40 backdrop-blur-md border border-white/10 hover:border-jordy-blue/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-jordy-blue/20 h-[500px] lg:w-[410px] lg:h-[500px]!`}
  >
    {/* Image Container */}
    <div className="relative h-full overflow-hidden">
      <Image
        src={service.image}
        alt={service.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        width={400}
        height={500}
      />
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-[#1E2E4F] via-[#1E2E4F]/70 to-transparent"></div>

      {/* Icon Badge */}
      <div className="absolute top-4 left-4 p-2.5 rounded-xl bg-jordy-blue/20 backdrop-blur-sm border border-white/20 text-white">
        {service.icon}
      </div>

      {/* Subtitle Badge (si existe) */}
      {service.subtitle && (
        <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-jordy-blue/30 backdrop-blur-sm border border-jordy-blue/50 text-white text-xs font-semibold">
          {service.subtitle}
        </div>
      )}

      {/* Content Overlay */}
      <div className={`absolute inset-0 flex flex-col justify-end p-6`}>
        {/* Title */}
        <h3 className={`font-syne font-bold text-white mb-3 group-hover:text-jordy-blue transition-colors duration-300 text-xl lg:text-2xl`}>
          {service.title}
        </h3>

        {/* Description */}
        <p className={`text-lavender/90 leading-relaxed mb-4 text-base lg:text-lg`}>
          {service.description}
        </p>

        {/* Tags or Features */}
        {service.tags && (
          <div className="flex flex-wrap gap-2 mb-4">
            {service.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-medium rounded-full bg-jordy-blue/20 text-jordy-blue border border-jordy-blue/30"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {service.features && (
          <ul className="space-y-1.5 mb-4">
            {service.features.map((feature) => (
              <li
                key={feature}
                className="text-lavender/70 text-xs flex items-center gap-2"
              >
                <span className="w-1 h-1 rounded-full bg-jordy-blue"></span>
                {feature}
              </li>
            ))}
          </ul>
        )}

        {/* CTA Link */}
        <Button variant="link" className="group/btn inline-flex items-center gap-2 text-jordy-blue font-semibold text-sm hover:gap-3 transition-all duration-300 w-fit">
          Ver cobertura
          <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:rotate-45" />
        </Button>
      </div>
    </div>
  </div>
)

const Services = ({ id }: IServices) => {
  const services: IService[] = [
    {
      id: 'social',
      title: 'Gestión Integral de Redes',
      subtitle: 'Social Media Management',
      description: 'Creamos y gestionamos comunidades auténticas en todas las plataformas sociales, con contenido estratégico que conecta con tu audiencia.',
      image: socialImageUrl,
      icon: <Share2 className="w-6 h-6" />,
      tags: [
        'Content Marketing',
        'Community Management',
        'Social Ads',
        'Influencer Marketing'
      ]
    },
    {
      id: 'development',
      title: 'Desarrollo Web y Sistemas',
      subtitle: 'CRM | ERP | Plataformas Custom',
      description: 'Desarrollamos soluciones tecnológicas a medida que optimizan procesos y mejoran la experiencia de tus clientes.',
      image: developImageUrl,
      icon: <Code2 className="w-6 h-6" />,
      tags: ['Webs', 'Aplicaciones', 'CRM', 'ERP', 'Sistemas a medidas']
    },
    {
      id: 'advertising',
      title: 'Publicidad en Vía Pública',
      subtitle: 'COBERTURA NOA/NEA',
      description: 'Conectamos tu marca con miles de personas cada día a través de ubicaciones estratégicas en todo el Norte Argentino.',
      image: publicImageUrl,
      icon: <Megaphone className="w-6 h-6" />,
      tags: ['Pantallas Digitales', 'Gigantografías', 'Vallas', 'Estáticos']
    }
  ]

  return (
    <section id={id}>
      <div className="relative min-h-screen w-screen overflow-hidden z-10 max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-jordy-blue font-semibold mb-4 tracking-wider uppercase text-sm">
            ¿QUÉ TE OFRECEMOS?
          </p>
          <h2 className="font-syne text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Nuestros Servicios
          </h2>
          <p className="text-lavender/90 text-lg md:text-xl max-w-3xl mx-auto">
            Soluciones integrales que impulsan tu marca desde la estrategia hasta la ejecución
          </p>
        </div>

        {/* Services Grid - Custom Layout */}
        <div className="space-y-6 lg:space-y-6">
          {/* Row 1: 2 Small Cards + 1 Large Card */}
          <div className="flex flex-col lg:flex-row gap-6 h-auto">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          {/* Row 2: Estrategia 360° - Full Width */}
          <div className="relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-lavender/50 transition-all duration-500">
            <div className="p-8 lg:p-10 flex flex-col lg:flex-row items-center gap-8">
              {/* Icon */}
              <div className="shrink-0 p-6 rounded-2xl bg-linear-to-br from-jordy-blue/20 to-lavender/20 border border-white/20">
                <Zap className="w-16 h-16 text-white" />
              </div>

              {/* Content */}
              <div className="flex-1 text-center lg:text-left">
                <h3 className="font-syne text-3xl lg:text-4xl font-bold text-white mb-3">
                  Estrategia 360°
                </h3>
                <p className="text-lavender/80 text-base lg:text-lg leading-relaxed max-w-3xl">
                  Diseñamos estrategias integrales que conectan todos los puntos de contacto con tu audiencia.
                  Desde la primera impresión en redes sociales hasta el impacto visual en la calle, cada elemento
                  trabaja en conjunto para fortalecer tu marca y generar resultados medibles.
                </p>
              </div>

              {/* CTA Button */}
              <div className="shrink-0">
                <Button
                  variant="outline"
                  className="gap-3 bg-linear-to-r from-jordy-blue to-lavender h-12 px-8 rounded-full font-semibold text-oxford-blue hover:scale-105 hover:shadow-[0_0_30px_rgba(143,179,226,0.5)] transition-all duration-300"
                >
                  Conocer más
                  <ArrowUpRight className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Services
