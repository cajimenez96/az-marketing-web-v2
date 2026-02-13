// app/layout.tsx
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { siteConfig } from "@/config/site";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),

  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`, // Ej: "Contacto | AZ Marketing"
  },

  description: siteConfig.description,

  applicationName: siteConfig.name,

  authors: [
    {
      name: siteConfig.name,
      url: siteConfig.url,
    },
    {
      name: siteConfig.author.name,
      url: siteConfig.author.url,
    },
  ],

  creator: siteConfig.author.name,
  publisher: siteConfig.name,

  keywords: siteConfig.keywords,

  icons: siteConfig.icons,

  openGraph: {
    type: "website",
    locale: "es_AR",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Agencia Integral en Tucumán`,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "./",
  },

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="es">
      {/* Tip: Aquí podrías agregar la clase de tu fuente variable si usas next/font 
        Ejemplo: <body className={varienFont.className}> 
      */}
      <body className="bg-dominante">
        <div className="noise-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
