export const COMPANY_INFO = {
  name: "Leão Motors",
  legalName: "Leão Motors Lubrificantes",
  tagline: "Especialista em Troca de Óleo de Câmbio Automático e Motor em Carapicuíba",
  phone: "(11) 97671-5552",
  phoneRaw: "5511976715552",
  whatsappBaseUrl: "https://wa.me/5511976715552",
  address: {
    street: "Av. Dep. Emílio Carlos, 628",
    neighborhood: "Vila Caldas",
    city: "Carapicuíba",
    state: "SP",
    zip: "06310-160",
    full: "Av. Dep. Emílio Carlos, 628 - Vila Caldas, Carapicuíba - SP, 06310-160",
  },
  // Campo editável de horário de atendimento conforme solicitado
  businessHours: "Consulte nosso horário de atendimento via WhatsApp",
  // Links de rotas no Google Maps
  googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=Av.+Dep.+Em%C3%ADlio+Carlos,+628+-+Vila+Caldas,+Carapicu%C3%ADba+-+SP,+06310-160",
  googleMapsEmbed: "https://maps.google.com/maps?q=Av.+Dep.+Em%C3%ADlio+Carlos,+628+-+Vila+Caldas,+Carapicu%C3%ADba+-+SP,+06310-160&t=&z=16&ie=UTF8&iwloc=&output=embed",
};

export const WHATSAPP_MESSAGES = {
  cambioAutomatico: "Olá! Vim pelo site e gostaria de solicitar um orçamento para troca de óleo do câmbio automático do meu veículo.",
  oleoMotor: "Olá! Vim pelo site e gostaria de solicitar um orçamento para troca de óleo do motor do meu veículo.",
  geral: "Olá! Encontrei vocês pelo site e gostaria de mais informações sobre os serviços.",
  duvidas: "Olá! Gostaria de tirar algumas dúvidas sobre a manutenção preventiva do meu veículo.",
};

export const getWhatsAppUrl = (message: string) => {
  return `${COMPANY_INFO.whatsappBaseUrl}?text=${encodeURIComponent(message)}`;
};
