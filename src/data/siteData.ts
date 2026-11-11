export const COMPANY_INFO = {
  name: "Leão Motors",
  legalName: "Leão Motors Lubrificantes",
  tagline: "40 Anos de Experiência em Lubrificação e Câmbio Automático em Carapicuíba",
  phone: "(11) 97671-5552",
  phoneRaw: "5511976715552",
  phoneTel: "+5511976715552",
  whatsappBaseUrl: "https://wa.me/5511976715552",
  address: {
    street: "Av. Dep. Emílio Carlos, 628",
    neighborhood: "Vila Caldas",
    city: "Carapicuíba",
    state: "SP",
    zip: "06310-160",
    full: "Av. Dep. Emílio Carlos, 628 - Vila Caldas, Carapicuíba - SP, 06310-160",
  },
  businessHours: "Seg a Sex: 08h às 18h | Sáb: 08h às 13h",
  businessHoursShort: "Seg-Sex 08h-18h | Sáb 08h-13h",
  pricing: {
    oleoMotorFrom: "R$ 189",
    cambioAutomaticoFrom: "R$ 690",
  },
  brands: [
    "Motul",
    "Mobil",
    "Castrol",
    "Petronas Selenia",
    "Valvoline",
    "TotalEnergies",
    "Febi Bilstein",
  ],
  transmissionTypes: [
    "CVT (Toyota, Honda, Nissan, Renault)",
    "Aisin 6 e 8 marchas (Jeep, Fiat, VW, Peugeot)",
    "DSG / S-Tronic (Volkswagen e Audi)",
    "GM 6T30 / 6T40 (Onix, Cruze, Spin, Tracker)",
    "ZF 8HP / 9HP (BMW, Land Rover, Jeep, Ram)",
  ],
  instagramUrl: "https://www.instagram.com/leaomotorslubrificantes/",
  instagramHandle: "@leaomotorslubrificantes",
  googleReviewsUrl:
    "https://www.google.com/maps/search/?api=1&query=Le%C3%A3o+Motors+Lubrificantes+Av.+Dep.+Em%C3%ADlio+Carlos+628+Carapicu%C3%ADba",
  googleMapsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=Av.+Dep.+Em%C3%ADlio+Carlos,+628+-+Vila+Caldas,+Carapicu%C3%ADba+-+SP,+06310-160",
  googleMapsEmbed:
    "https://maps.google.com/maps?q=Av.+Dep.+Em%C3%ADlio+Carlos,+628+-+Vila+Caldas,+Carapicu%C3%ADba+-+SP,+06310-160&t=&z=16&ie=UTF8&iwloc=&output=embed",
};

export const WHATSAPP_MESSAGES = {
  cambioAutomatico:
    "Olá! Vim pelo site e quero solicitar um orçamento para troca de óleo do câmbio automático por diálise para o meu veículo.",
  oleoMotor:
    "Olá! Vim pelo site e quero agendar a troca de óleo do motor do meu veículo.",
  levaETraz:
    "Olá! Vim pelo site e quero agendar a manutenção do meu carro utilizando o Sistema Leva e Traz (até 3km).",
  geral:
    "Olá! Encontrei vocês pelo site e quero um orçamento para troca de óleo do meu veículo.",
  duvidas:
    "Olá! Quero tirar uma dúvida técnica sobre a troca de óleo de câmbio automático / motor do meu carro.",
};

export const getWhatsAppUrl = (message: string) => {
  return `${COMPANY_INFO.whatsappBaseUrl}?text=${encodeURIComponent(message)}`;
};
