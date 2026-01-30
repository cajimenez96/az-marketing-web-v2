// Contact Information
export const CONTACT_INFO = {
  phone: {
    display: "+54 9 381 517-6162",
    whatsappLink: "https://wa.link/lfq2pm",
    label: "LLAMANOS",
  },
  email: {
    address: "hola@azmarketing.com",
    label: "ESCRIBINOS",
  },
  location: {
    city: "Tucumán, Argentina",
    label: "OFICINA",
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
  heading: "¿Listo para escalar tu negocio?",
  description: "Hablamos sobre tus objetivos y cómo nuestra visión integral puede ayudarte a alcanzarlos.",
} as const;
