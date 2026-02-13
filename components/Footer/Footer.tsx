import { FacebookIcon, InstagramIcon } from "lucide-react";
import Image from "next/image";
import { Typography } from "../ui/typography";
import Link from "next/link";

const logoUrl = "/assets/images/AZ.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "Instagram",
      icon: InstagramIcon,
      href: "https://www.instagram.com/azmarketing.tuc?igsh=MWI2em96d2hqMjNvag%3D%3D&utm_source=qr",
    },
    {
      name: "Facebook",
      icon: FacebookIcon,
      href: "https://www.facebook.com/profile.php?id=61586706999839",
    },
  ];

  return (
    <footer className="relative bg-transparent border-t border-mediador/10 mt-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo and Brand */}
          <Link href="/" className="flex items-center space-x-1">
            <Image
              src={logoUrl}
              alt="AZ Comunicaciones Logo"
              className="object-contain"
              width={50}
              height={50}
            />
            <span className="text-mediador text-lg font-bold tracking-wide font-sora">
              Marketing
            </span>
          </Link>

          {/* Copyright */}
          <Typography className="text-mediador/60 text-sm text-center">
            © {currentYear} AZ Marketing. Todos los derechos reservados.
          </Typography>

          {/* Social Media Icons */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-mediador/60 hover:text-tonico transition-colors duration-300"
                  aria-label={social.name}
                >
                  <Icon className="w-5 h-5" />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
