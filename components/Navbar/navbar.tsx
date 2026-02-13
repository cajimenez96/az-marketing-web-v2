"use client";

import { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { Menu, X, ArrowRight } from "lucide-react";
import Image from "next/image";
import logoUrl from "../../public/assets/images/AZ.png";
import Link from "next/link";

const navItems = [
  { name: "Inicio", href: "/" },
  { name: "Nosotros", href: "#nosotros" },
  { name: "Servicios", href: "#servicios" },
  { name: "Cobertura", href: "#cobertura" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    const handleScroll = () => {
      // Handle navbar background
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Handle active section
      const sections = navItems.map((item) => item.href.substring(1));
      let currentSection = "inicio";

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Adjust offset as needed, e.g., considering navbar height
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = section;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    // Smooth scroll to section
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
          isScrolled
            ? "bg-dominante/90 shadow-lg backdrop-blur-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="shrink-0">
              <Link href="/" className="flex items-center space-x-3">
                <Image
                  src={logoUrl}
                  alt="AZ Marketing Logo"
                  width={83}
                  height={50}
                />
              </Link>
            </div>

            {/* Navigation Items - Desktop */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`font-sora text-mediador hover:text-mediador text-md transition-colors duration-200 relative group ${
                    activeSection === item.href.substring(1)
                      ? "font-medium"
                      : "font-thin"
                  }`}
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
              <Button className="font-sora font-medium text-md">
                <Link href="#contacto">Hablemos</Link>
              </Button>
            </div>

            <div />

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(true)}
                className="text-tonico hover:text-tonico/90 focus:outline-none transition-colors duration-200"
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
        className={`fixed inset-0 z-60 md:hidden transition-all duration-300 ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-oxford-blue/95 backdrop-blur-lg"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Menu Content */}
        <div
          className={`relative flex flex-col bg-white/5 backdrop-blur-2xl border-l border-white/10 ml-auto w-full h-screen transition-transform duration-500 ease-out pb-5 ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <div className="flex items-center space-x-3">
              <Image
                src={logoUrl}
                alt="AZ Marketing"
                className="object-contain"
                width={50}
                height={50}
              />
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-tonico hover:text-tonico/90 transition-colors duration-200"
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
                  className={`${
                    isMobileMenuOpen
                      ? "animate-fade-in-up opacity-100"
                      : "opacity-0"
                  }`}
                >
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    className={`group flex items-center justify-between py-4 px-4 rounded-xl text-mediador hover:bg-mediador/10 transition-all duration-200 ${
                      activeSection === item.href.substring(1)
                        ? "font-medium bg-mediador/5"
                        : "font-thin"
                    }`}
                  >
                    <span className="text-lg">{item.name}</span>
                    <ArrowRight className="w-5 h-5 text-lavender opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Hablemos Button */}
          <div className="p-2">
            <Button className="w-full">
              <Link href="#contacto">
                Hablemos
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
