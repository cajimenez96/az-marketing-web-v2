export const siteConfig = {
  name: "AZ Comunicación",
  // El título largo para la Home
  title: "AZ Comunicación | Comunicación y Marketing en un solo lugar",
  description: 
    "Potencia tu marca con AZ Comunicación. Expertos en Desarrollo de Software, Gestión de Redes Sociales y Publicidad en Vía Pública (Carteles y LED) en Tucumán, NOA y NEA. Comunicación y Marketing en un solo lugar.",
  
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
