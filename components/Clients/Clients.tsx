import Image from "next/image"

const logos = [
  "/assets/images/companies/7.png",
  "/assets/images/companies/8.png",
  "/assets/images/companies/9.png",
  "/assets/images/companies/10.png",
  "/assets/images/companies/11.png",
  "/assets/images/companies/12.png",
  "/assets/images/companies/13.png",
  "/assets/images/companies/CAPO.jpg",
  "/assets/images/companies/WERCHOW.jpg",
  "/assets/images/companies/ruddys.jpg",
  "/assets/images/companies/Logo.png",
  "/assets/images/companies/logo-azul.png",
]

interface IClients {
  id?: string
}

const Clients = ({ id }: IClients) => {
  return (
    <section id={id} className="relative w-screen overflow-hidden py-16 lg:py-20 border-y border-white/5">
      {/* Title */}
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <p className="text-center text-lavender/40 text-xs font-bold uppercase tracking-[0.3em]">
          Empresas que confían en nosotros
        </p>
      </div>

      {/* Carousel Container */}
      <div className="relative overflow-hidden w-full">
        {/* Gradient overlays to fade out marquee ends */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-linear-to-r from-oxford-blue to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-linear-to-l from-oxford-blue to-transparent z-10 pointer-events-none"></div>

        {/* Marquee */}
        <div className="flex animate-marquee whitespace-nowrap gap-12 md:gap-16 lg:gap-20 py-4">
          {/* Duplicate logos twice for seamless loop */}
          {[...logos, ...logos].map((logo, idx) => (
            <div
              key={idx}
              className="shrink-0 w-32 h-20 md:w-40 md:h-24 flex items-center justify-center grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <Image
                src={logo}
                alt={`Cliente ${idx + 1}`}
                className="object-contain"
                width={120}
                height={120}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Clients
