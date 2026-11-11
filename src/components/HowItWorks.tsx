import { MessageSquare, ClipboardCheck, Car, ArrowRight } from "lucide-react";
import { WHATSAPP_MESSAGES, getWhatsAppUrl } from "@/data/siteData";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: MessageSquare,
      title: "Informe seu veículo no WhatsApp",
      description:
        "Envie o modelo, ano e motorização (ou a placa). Em poucos minutos consultamos a especificação exata da montadora e a litragem do seu câmbio ou motor.",
    },
    {
      number: "02",
      icon: ClipboardCheck,
      title: "Receba o orçamento fechado",
      description:
        "Informamos o valor transparente (Motor a partir de R$ 189 | Câmbio a partir de R$ 690), as marcas homologadas disponíveis e o tempo estimado do serviço.",
    },
    {
      number: "03",
      icon: Car,
      title: "Venha até nós ou use o Leva e Traz",
      description:
        "Traga seu carro na Av. Dep. Emílio Carlos, 628 ou solicite nosso Sistema Leva e Traz Grátis (até 3km) com envio de vídeos de todo o procedimento no WhatsApp.",
    },
  ];

  return (
    <section className="py-20 sm:py-24 bg-white border-b border-brand-gray-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red/10 border border-brand-red/20 text-brand-red text-xs font-bold uppercase tracking-wider mb-3">
            Passo a Passo Simples
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-graphite uppercase tracking-tight">
            COMO FUNCIONA O ATENDIMENTO
          </h2>
          <div className="w-20 h-1.5 bg-brand-red mx-auto mt-4 mb-5 rounded-full"></div>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-normal">
            Sem filas e sem surpresas no orçamento: você sabe exatamente qual fluido será aplicado e quanto vai investir antes mesmo de sair de casa.
          </p>
        </div>

        {/* 3 Steps with visual connector */}
        <div className="relative">
          {/* Connector Line (visible on desktop) */}
          <div className="hidden md:block absolute top-1/2 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-brand-red/20 via-brand-red to-brand-red/20 -translate-y-12 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 border border-brand-gray-light shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col items-center text-center group"
                >
                  {/* Step badge */}
                  <div className="relative mb-6">
                    <div className="w-20 h-20 rounded-2xl bg-brand-ice group-hover:bg-brand-red border-2 border-brand-gray-light group-hover:border-brand-red flex items-center justify-center text-brand-red group-hover:text-white transition-all duration-300 shadow-sm">
                      <Icon className="w-9 h-9" />
                    </div>
                    <span className="absolute -top-3 -right-3 bg-brand-red group-hover:bg-brand-dark text-white text-xs font-black px-2.5 py-1 rounded-full shadow">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-brand-graphite mb-3 group-hover:text-brand-red transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA to start Step 1 */}
        <div className="text-center mt-12 sm:mt-16">
          <a
            href={getWhatsAppUrl(WHATSAPP_MESSAGES.geral)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 text-brand-red hover:text-brand-red-dark font-bold text-base sm:text-lg group"
          >
            <span>Consultar especificação e valor para o meu carro agora</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
