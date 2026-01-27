"use client"

import { useState, useEffect } from 'react'
import { Button } from '../ui/button'
import { Menu, X, ArrowRight } from 'lucide-react'
import Image from 'next/image'

const logoUrl = "/assets/images/AZ.png"

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  const navItems = [
    { name: 'Inicio', href: '#' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Cobertura', href: '#cobertura' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Contacto', href: '#contacto' },
  ]

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false)
    // Smooth scroll to section
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${isScrolled
          ? 'bg-oxford-blue/90 shadow-lg backdrop-blur-sm'
          : 'bg-transparent'
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="shrink-0">
              <a href="#" className="flex items-center space-x-3">
                <Image
                  src={logoUrl}
                  alt="AZ Marketing Logo"
                  className="object-contain"
                  width={50}
                  height={50}
                />
                <span className="text-white text-xl font-bold tracking-wide font-syne">
                  AZ Marketing
                </span>
              </a>
            </div>

            {/* Navigation Items - Desktop */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-lavender hover:text-white text-sm font-medium transition-colors duration-200 relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>

            {/* CTA Button - Desktop */}
            <div className="hidden md:block">
              <Button variant='outline' className='p-6 border-2 rounded-full text-sm font-medium'>
                Hablemos
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(true)}
                className="text-white hover:text-white/80 focus:outline-none transition-colors duration-200"
                aria-label="Open menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-60 md:hidden transition-all duration-300 ${isMobileMenuOpen
          ? 'opacity-100 pointer-events-auto'
          : 'opacity-0 pointer-events-none'
          }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-oxford-blue/95 backdrop-blur-lg"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Menu Content */}
        <div
          className={`relative h-full flex flex-col bg-white/5 backdrop-blur-2xl border-l border-white/10 ml-auto max-w-sm w-full transition-transform duration-500 ease-out ${isMobileMenuOpen
            ? 'translate-x-0'
            : 'translate-x-full'
            }`}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <div className="flex items-center space-x-3">
              <Image src={logoUrl} alt="AZ Marketing" className="object-contain" width={50} height={50} />
              <span className="text-white font-bold text-lg font-syne">AZ Marketing</span>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white/80 hover:text-white transition-colors duration-200"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Items */}
          <nav className="flex-1 overflow-y-auto px-6 py-8">
            <ul className="space-y-2">
              {navItems.map((item, index) => (
                <li
                  key={item.name}
                  style={{
                    animationDelay: `${index * 50}ms`,
                  }}
                  className={`${isMobileMenuOpen
                    ? 'animate-fade-in-up opacity-100'
                    : 'opacity-0'
                    }`}
                >
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavClick(item.href)
                    }}
                    className="group flex items-center justify-between py-4 px-4 rounded-xl text-white hover:bg-white/10 transition-all duration-200"
                  >
                    <span className="text-lg font-medium">{item.name}</span>
                    <ArrowRight className="w-5 h-5 text-lavender opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA Button - Mobile */}
          <div className="p-6 border-t border-white/10">
            <Button
              variant="outline"
              className="gap-3 bg-linear-to-r from-jordy-blue to-lavender w-full h-14 rounded-full font-semibold text-base text-oxford-blue hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(143,179,226,0.5)] transition-all duration-300"
              onClick={() => handleNavClick('#contacto')}
            >
              Hablemos
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar