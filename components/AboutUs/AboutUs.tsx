import { TrendingUp, Users, Clock, MapPin } from 'lucide-react'
import Image from 'next/image'

const aboutImageUrl = "/assets/images/about/about-us.avif"

interface IAboutUs {
  id: string
}

interface Stat {
  value: string
  label: string
  icon: React.ReactNode
}

const AboutUs = ({ id }: IAboutUs) => {
  const stats: Stat[] = [
    {
      value: '10+',
      label: 'Años de Experiencia',
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      value: '200+',
      label: 'Proyectos Exitosos',
      icon: <Users className="w-6 h-6" />
    },
    {
      value: '8',
      label: 'Provincias',
      icon: <MapPin className="w-6 h-6" />
    },
    {
      value: '24/7',
      label: 'Soporte',
      icon: <Clock className="w-6 h-6" />
    }
  ]

  return (
    <section id={id} className="relative w-screen overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section Badge */}
        <div className="mb-8">
          <p className="text-jordy-blue font-semibold tracking-wider uppercase text-sm">
            NUESTRA VISIÓN
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Main Headline */}
            <h2 className="font-syne text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Una visión integral para un mercado híper-conectado.
            </h2>

            {/* Description */}
            <div className="space-y-4 text-lavender/80 text-base md:text-lg leading-relaxed">
              <p>
                En AZ Marketing, no creemos en soluciones aisladas. Entendemos que el éxito de una marca
                moderna depende de la sinergia entre su presencia digital, su eficiencia tecnológica y su
                impacto en el mundo físico.
              </p>
              <p>
                Combinamos el análisis de datos con la creatividad publicitaria para ofrecer estrategias 360°
                que realmente muevan la aguja del negocio. Creamos ecosistemas de comunicación donde la
                estrategia digital, el desarrollo tecnológico y la publicidad exterior trabajan en perfecta sincronía.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 p-4 hover:border-jordy-blue/50 transition-all duration-300 group"
                >
                  <div className="flex flex-col items-start gap-2">
                    <div className="text-jordy-blue/70 group-hover:text-jordy-blue transition-colors duration-300">
                      {stat.icon}
                    </div>
                    <div className="text-2xl md:text-3xl font-bold font-syne text-transparent bg-clip-text bg-linear-to-r from-jordy-blue to-lavender">
                      {stat.value}
                    </div>
                    <div className="text-lavender/60 text-xs font-medium leading-tight">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative order-first lg:order-last">
            {/* Image Container with Glow Effect */}
            <div className="relative group">
              {/* Glow Background */}
              <div className="absolute -inset-4 bg-linear-to-r from-jordy-blue/20 via-ylnmn-blue/20 to-lavender/20 rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>

              {/* Badge Overlay */}
              {/* <div className="absolute -top-5 -right-3 lg:-right-10 px-4 py-2 rounded-full bg-jordy-blue/90 backdrop-blur-sm text-white text-xs font-semibold z-10 shadow-lg">
                <span className="block">RESULTADO COMPROBABLES</span>
              </div> */}

              {/* Image Frame */}
              <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm p-2">
                <div className="relative rounded-xl overflow-hidden aspect-4/3">
                  {/* Placeholder - Replace with actual image */}
                  <div className="absolute inset-0 bg-linear-to-br from-oxford-blue via-oxford-blue/80 to-ylnmn-blue/60"></div>

                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-oxford-blue/40 via-transparent to-transparent pointer-events-none"></div>

                  {/* Content Placeholder */}
                  <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                    <Image
                      src={aboutImageUrl}
                      alt="AZ Marketing Cultura"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      width={600}
                      height={1024}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Section - Additional Value Props */}
        <div className="mt-16 pt-12 border-t border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-3">
              <h3 className="font-syne text-xl font-bold text-white">
                Estrategia Data-Driven
              </h3>
              <p className="text-lavender/70 text-sm leading-relaxed">
                Cada decisión respaldada por métricas reales. Medimos, optimizamos y escalamos en base a resultados concretos.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="font-syne text-xl font-bold text-white">
                Soluciones Integradas
              </h3>
              <p className="text-lavender/70 text-sm leading-relaxed">
                No dividimos tu proyecto en silos. Unificamos digital, tecnología y medios físicos bajo una misma narrativa.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="font-syne text-xl font-bold text-white">
                Experiencia Regional
              </h3>
              <p className="text-lavender/70 text-sm leading-relaxed">
                Más de 15 años dominando el NOA/NEA. Conocemos cada mercado, cada audiencia, cada oportunidad.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default AboutUs
