export const siteConfig = {
  name: "AZ Marketing",
  // El título largo para la Home
  title: "AZ Marketing | Marketing y Comunicación en un solo lugar",
  description: 
    "Potencia tu marca con AZ Marketing. Expertos en Desarrollo de Software, Gestión de Redes Sociales y Publicidad en Tucumán, NOA y NEA. Marketing y Comunicación en un solo lugar.",
  
  // URL base con fallback seguro
  url: "https://azmarketing.com.ar",
  
  // Información del creador/autor
  author: {
    name: "Carlos Jimenez",
    url: "https://azmarketing.com.ar", // O tu portfolio personal si prefieres
  },
  
  // Palabras clave para SEO
  keywords: [
    "Agencia de Marketing Tucumán",
    "Agencia de Marketing NOA",
    "Agencia de Marketing NEA",
    "Desarrollo de Software",
    "Gestión de Redes Sociales",
    "Publicidad en Vía Pública",
    "Publicidad en Tucumán",
    "Publicidad en NOA",
    "Publicidad en NEA",
    "Publicidad",
    "Carteles y LED",
    "NOA",
    "NEA",
    "Sistemas CRM a medida",
  ],

  // Rutas de imágenes
  ogImage: "/assets/images/site/favicon.ico",
  icons: {
    icon: "/assets/images/site/favicon.ico",
    apple: "/assets/images/site/favicon.ico", 
  },
}

export type SiteConfig = typeof siteConfig
