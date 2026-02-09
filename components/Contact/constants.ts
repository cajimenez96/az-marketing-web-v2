// Contact Information
export const CONTACT_INFO = {
  phone: {
    display: "+54 9 381 517-6162",
    whatsappLink: "https://wa.link/lfq2pm",
    label: "LLAMANOS",
  },
  email: {
    address: "hola@azcomunicacion.com",
    label: "ESCRIBINOS",
  },
  location: {
    city: "San Miguel de Tucumán, Argentina",
    label: "VEN A VERNOS",
  },
} as const;

// Form Field Labels
export const FORM_LABELS = {
  nombre: "Nombre",
  empresa: "Empresa",
  email: "Email",
  telefono: "Teléfono",
  mensaje: "Mensaje",
} as const;

// Form Placeholders
export const FORM_PLACEHOLDERS = {
  nombre: "John Doe",
  empresa: "Acme Inc.",
  email: "john@acme.com",
  telefono: "+54 9 381 123-4567",
  mensaje: "¿En qué podemos ayudarte?",
} as const;

// Status Messages
export const STATUS_MESSAGES = {
  success: "¡Mensaje enviado exitosamente! Te contactaremos pronto.",
  error: "Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.",
  sending: "Enviando...",
  submit: "Enviar mensaje",
} as const;

// Section Content
export const SECTION_CONTENT = {
  description: "Coméntanos cuales son tus objetivos y te asesoraremos de que manera nuestro trabajo puede ayudarte a alcanzarlos.",
} as const;
