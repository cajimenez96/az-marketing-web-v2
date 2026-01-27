import { MapPin, CheckCircle2 } from 'lucide-react'
import Image from 'next/image'

const argentinaMapUrl = "/assets/svg/argentina.svg"

interface ICoverage {
  id: string
}

interface Province {
  name: string
  hasPoint?: boolean
}

const Coverage = ({ id }: ICoverage) => {
  const provinces: Province[] = [
    { name: 'Tucumán', hasPoint: true },
    { name: 'Salta', hasPoint: true },
    { name: 'Jujuy', hasPoint: true },
    { name: 'Santiago del Estero', hasPoint: true },
    { name: 'Catamarca', hasPoint: true },
    { name: 'Formosa', hasPoint: true },
    { name: 'Chaco', hasPoint: true },
    { name: 'Corrientes', hasPoint: true }
  ]

  const features = [
    'Ubicaciones premium en zonas comerciales de alta densidad.',
    'Dispositivos digitales LED de última generación con métricas reales.',
    'Formatos estáticos de gran escala (monocolumnas y medianerías).',
    'Mantenimiento e iluminación garantizada 24/7.'
  ]

  const stats = [
    { value: '500+', label: 'Ubicaciones Premium' },
    { value: '8', label: 'Provincias' }
  ]



  return (
    <section id={id} className="relative min-h-screen w-screen overflow-hidden py-20">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-jordy-blue font-semibold mb-4 tracking-wider uppercase text-sm">
            NUESTRA RED OOH
          </p>
          <h2 className="font-syne text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Dominamos los puntos críticos del Norte Argentino.
          </h2>
          <p className="text-lavender/90 text-lg md:text-xl max-w-3xl mx-auto">
            No se trata de estar en todos lados, sino de estar donde tu audiencia está más receptiva.
            Contamos con una red exclusiva de dispositivos en las principales arterias de Tucumán, Salta,
            Jujuy, Chaco y Corrientes.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left Column - Content */}
          <div className="space-y-8 order-2 lg:order-1">

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 p-6 hover:border-jordy-blue/50 transition-all duration-300"
                >
                  <div className="text-4xl lg:text-5xl font-bold font-syne text-transparent bg-clip-text bg-linear-to-r from-jordy-blue to-lavender mb-2">
                    {stat.value}
                  </div>
                  <div className="text-lavender/70 text-sm font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Provinces List */}
            <div className="space-y-4">
              <h3 className="font-syne text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <MapPin className="w-6 h-6 text-jordy-blue" />
                Presencia estratégica
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {provinces.map((province, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-lavender/80 hover:text-white transition-colors duration-300"
                  >
                    <CheckCircle2 className="w-4 h-4 text-jordy-blue shrink-0" />
                    <span className="text-sm">{province.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Features List */}
            <div className="space-y-3">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 text-lavender/70 text-sm leading-relaxed"
                >
                  <CheckCircle2 className="w-5 h-5 text-jordy-blue/60 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column - Map */}
          <div className="relative order-1 lg:order-2">
            {/* Map Container with Glow Effect */}
            <div className="relative group">
              {/* Glow Background */}
              <div className="absolute -inset-8 bg-linear-to-r from-jordy-blue/10 via-ylnmn-blue/10 to-lavender/10 rounded-full blur-3xl opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>

              {/* Map Badge */}
              <div className="absolute top-4 right-4 px-4 py-2 rounded-full bg-jordy-blue/20 backdrop-blur-sm border border-jordy-blue/40 text-white text-xs font-semibold z-10">
                Región Destacada
                <span className="block text-[10px] text-lavender/80 mt-0.5">NOA / NEA</span>
              </div>

              {/* Map SVG */}
              <div className="relative">
                <Image
                  src={argentinaMapUrl}
                  alt="Mapa de Argentina - Cobertura NOA/NEA"
                  className="object-contain"
                  width={500}
                  height={500}
                  style={{ filter: 'drop-shadow(0 0 40px rgba(143, 179, 226, 0.3))' }}
                />
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Coverage
