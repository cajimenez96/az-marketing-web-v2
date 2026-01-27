import { Phone, Mail, MapPin, Send } from 'lucide-react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'

interface IContact {
  id?: string
}

const Contact = ({ id }: IContact) => {
  return (
    <section id={id} className="relative py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

          {/* Left Column - Contact Info */}
          <div className="space-y-8 text-white">
            {/* Heading */}
            <div className="space-y-4">
              <h2 className="font-syne text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                ¿Listo para escalar tu negocio?
              </h2>
              <p className="text-lavender/90 text-lg leading-relaxed max-w-lg">
                Hablamos sobre tus objetivos y cómo nuestra visión integral puede ayudarte a alcanzarlos.
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-space-cadet/60 backdrop-blur-sm">
                  <Phone className="w-5 h-5 text-jordy-blue" />
                </div>
                <div>
                  <p className="text-lavender/60 text-sm uppercase tracking-wider mb-1">LLAMANOS</p>
                  <p className="text-white text-lg font-medium">+54 9 381 517-6162</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-space-cadet/60 backdrop-blur-sm">
                  <Mail className="w-5 h-5 text-jordy-blue" />
                </div>
                <div>
                  <p className="text-lavender/60 text-sm uppercase tracking-wider mb-1">ESCRIBINOS</p>
                  <p className="text-white text-lg font-medium">hola@azmarketing.com</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-space-cadet/60 backdrop-blur-sm">
                  <MapPin className="w-5 h-5 text-jordy-blue" />
                </div>
                <div>
                  <p className="text-lavender/60 text-sm uppercase tracking-wider mb-1">OFICINA</p>
                  <p className="text-white text-lg font-medium">San Miguel de Tucumán, Argentina</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="relative">
            {/* Background Glow */}
            <div className="absolute -inset-4 bg-linear-to-r from-jordy-blue/10 via-ylnmn-blue/10 to-lavender/10 rounded-3xl blur-2xl opacity-50"></div>

            {/* Form Container with Glassmorphism */}
            <div className="relative bg-space-cadet/40 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-2xl">
              <form className="space-y-6">
                {/* Name and Company Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="nombre" className="text-lavender/80 text-sm uppercase tracking-wider">
                      Nombre
                    </label>
                    <Input
                      id="nombre"
                      type="text"
                      placeholder="John Doe"
                      className="bg-ylnmn-blue/30 border-jordy-blue/30 text-white placeholder:text-lavender/40 focus:border-jordy-blue focus:ring-jordy-blue/20"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="empresa" className="text-lavender/80 text-sm uppercase tracking-wider">
                      Empresa
                    </label>
                    <Input
                      id="empresa"
                      type="text"
                      placeholder="Acme Inc."
                      className="bg-ylnmn-blue/30 border-jordy-blue/30 text-white placeholder:text-lavender/40 focus:border-jordy-blue focus:ring-jordy-blue/20"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="email" className="text-lavender/80 text-sm uppercase tracking-wider">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@acme.com"
                    className="bg-ylnmn-blue/30 border-jordy-blue/30 text-white placeholder:text-lavender/40 focus:border-jordy-blue focus:ring-jordy-blue/20"
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label htmlFor="mensaje" className="text-lavender/80 text-sm uppercase tracking-wider">
                    Mensaje
                  </label>
                  <Textarea
                    id="mensaje"
                    placeholder="¿En qué podemos ayudarte?"
                    rows={5}
                    className="bg-ylnmn-blue/30 border-jordy-blue/30 text-white placeholder:text-lavender/40 focus:border-jordy-blue focus:ring-jordy-blue/20 resize-none"
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full h-14 bg-linear-to-r from-jordy-blue to-lavender text-oxford-blue font-semibold text-base rounded-xl hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(143,179,226,0.4)] transition-all duration-300"
                >
                  Enviar mensaje
                  <Send className="w-5 h-5" />
                </Button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Contact
