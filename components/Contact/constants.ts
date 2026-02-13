// Contact Information
export const CONTACT_INFO = {
  phone: {
    display: "+54 9 381 517-6162",
    whatsappLink: "https://wa.link/lfq2pm",
    label: "LLAMANOS",
  },
  email: {
    address: "hola@azmarketing.com.ar",
    label: "ESCRIBINOS",
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
