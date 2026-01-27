import { ArrowRight, ChevronsDown } from 'lucide-react'
import { Button } from '../ui/button'
import Image from 'next/image'

interface IHero {
  id?: string
}

const Hero = ({ id }: IHero) => {
  return (
    <section id={id}>
      <div className="relative h-screen w-screen overflow-hidden">
        {/* Content Container - Flexbox vertical layout */}
        <div className="relative z-10 h-full max-w-7xl mx-auto px-6 lg:px-8 flex flex-col justify-between lg:justify-center py-6 lg:py-0">

          {/* Main Content Area */}
          <div className="flex items-center lg:items-center">
            {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full"> */}
            <div className="flex flex-col lg:flex-row items-center lg:items-center lg:justify-between w-full mt-22 lg:mt-0">

              {/* Left Content */}
              <div className="space-y-6 text-white w-full md:max-w-1/2">
                {/* Badge */}
                <div className="inline-flex items-center gap-3 bg-[#1E2E4F]/60 backdrop-blur-sm px-6 py-3 rounded-full">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-linear-to-br from-[#8FB3E2] to-[#31487A] border-2 border-[#1E2E4F]"></div>
                    <div className="w-8 h-8 rounded-full bg-linear-to-br from-[#31487A] to-[#192338] border-2 border-[#1E2E4F]"></div>
                    <div className="w-8 h-8 rounded-full bg-linear-to-br from-[#D9E1F1] to-[#8FB3E2] border-2 border-[#1E2E4F]"></div>
                  </div>
                  <span className="text-lavender text-sm font-medium">
                    15+ años en el mercado
                  </span>
                </div>

                {/* Main Heading */}
                <h1 className="font-syne text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
                  Estrategia,<br />
                  Tecnología y<br />
                  Publicidad en un solo lugar.
                </h1>

                {/* Subheading */}
                <p className="text-lavender/90 text-base md:text-xl leading-relaxed max-w-lg">
                  Ayudamos a las marcas a crecer integrando comunicación, desarrollo y medios OOH.
                </p>

                {/* CTA Button - Desktop only */}
                <div className="block pt-4">
                  <Button
                    variant="outline"
                    className="gap-3 bg-linear-to-r from-jordy-blue to-lavender w-full lg:w-[210px] h-[68px] rounded-full font-medium text-lg text-[#192338] hover:scale-105 hover:shadow-[0_0_30px_rgba(143,179,226,0.5)] transition-all duration-300 whitespace-nowrap cursor-pointer"
                  >
                    Hablemos
                    <ArrowRight />
                  </Button>
                </div>
              </div>

              {/* Right Content - Floating Image */}
              <div className="hidden lg:flex justify-center items-center">
                <div className="relative group">
                  {/* Glow Effect */}
                  <div className="absolute -inset-4 bg-linear-to-r from-jordy-blue/20 via-ylnmn-blue/20 to-lavender/20 rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>

                  {/* Image Container with Glassmorphism */}
                  <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl transform transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-jordy-blue/20">
                    <Image
                      src="/assets/images/hero.jpg"
                      alt="AZ Marketing Dashboard"
                      className="object-cover"
                      width={400}
                      height={500}
                    />

                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-linear-to-t from-oxford-blue/40 via-transparent to-transparent pointer-events-none"></div>
                  </div>

                  {/* Floating Elements */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-jordy-blue/20 rounded-full blur-xl animate-pulse"></div>
                  <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-lavender/10 rounded-full blur-2xl animate-pulse delay-150"></div>
                </div>
              </div>

            </div>
          </div>

          {/* Bottom Section - Mobile CTA + Scroll Indicator */}
          <div className="flex flex-col items-center gap-6 pb-6 lg:hidden">
            {/* Scroll Down Button - Mobile */}
            <Button
              variant="outline"
              className="border-jordy-blue animate-bounce rounded-full h-12 w-12 p-0"
            >
              <ChevronsDown className="w-5 h-5" />
            </Button>
          </div>

        </div>

        {/* Bottom Gradient Overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-oxford-blue to-transparent pointer-events-none z-20"></div>
      </div>
    </section>
  )
}

export default Hero