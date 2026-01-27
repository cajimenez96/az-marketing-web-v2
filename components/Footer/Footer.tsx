import { Instagram, Linkedin, Twitter } from 'lucide-react'
import Image from 'next/image'

const logoUrl = "/assets/images/AZ.png"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/azmarketing' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/azmarketing' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/azmarketing' },
  ]

  return (
    <footer className="relative bg-[#1a2840] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">

          {/* Logo and Brand */}
          <div className="flex items-center space-x-3">
            <Image
              src={logoUrl}
              alt="AZ Marketing Logo"
              className="object-contain"
              width={50}
              height={50}
            />
            <span className="text-white text-lg font-bold tracking-wide font-syne">
              MARKETING
            </span>
          </div>

          {/* Copyright */}
          <div className="text-lavender/60 text-sm text-center">
            © {currentYear} AZ Marketing. Todos los derechos reservados.
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lavender/60 hover:text-jordy-blue transition-colors duration-300"
                  aria-label={social.name}
                >
                  <Icon className="w-5 h-5" />
                </a>
              )
            })}
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer
