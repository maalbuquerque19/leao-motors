import { Wrench, Users, ShieldAlert, MapPin, Sparkles } from "lucide-react";

export default function Differentials() {
  const differentials = [
    {
      icon: Wrench,
      title: "Atenção Técnica",
      description:
        "Serviço orientado criteriosamente pelas necessidades, manuais e especificações técnicas de cada modelo de veículo.",
    },
    {
      icon: Users,
      title: "Atendimento Personalizado",
      description:
        "Converse diretamente com nossa equipe técnica e tire todas as suas dúvidas com transparência antes de agendar sua visita.",
    },
    {
      icon: ShieldAlert,
      title: "Manutenção Preventiva",
      description:
        "Cuidados planejados que evitam desgastes prematuros e ajudam a preservar a integridade mecânica e o valor do seu carro.",
    },
    {
      icon: MapPin,
      title: "Localização Acessível",
      description:
        "Fácil acesso na Av. Deputado Emílio Carlos, 628 - Vila Caldas, ponto tradicional e estratégico em Carapicuíba.",
    },
  ];

  return (
    <section id="diferenciais" className="py-20 sm:py-24 bg-white border-y border-brand-gray-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red/10 border border-brand-red/20 text-brand-red text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Compromisso com o Cliente
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-graphite uppercase tracking-tight">
            SEU CARRO MERECE ATENÇÃO EM CADA DETALHE
          </h2>
          <div className="w-20 h-1.5 bg-brand-red mx-auto mt-4 mb-5 rounded-full"></div>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-normal">
            Nosso compromisso é entregar um atendimento claro, transparente e tecnicamente alinhado às recomendações do fabricante do seu veículo.
          </p>
        </div>

        {/* 4 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {differentials.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-brand-ice/50 hover:bg-white rounded-2xl p-6 sm:p-7 border border-brand-gray-light hover:border-brand-red/40 hover:shadow-card-hover transition-all duration-300 flex flex-col group"
              >
                <div className="w-14 h-14 rounded-xl bg-white group-hover:bg-brand-red border border-brand-gray-light group-hover:border-brand-red flex items-center justify-center text-brand-red group-hover:text-white transition-all duration-300 shadow-sm mb-6">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-brand-graphite mb-3 group-hover:text-brand-red transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
