import Image from "next/image";
import { MessageCircle, CheckCircle2, Cog, Droplets, ArrowRight, Clock, ShieldCheck, Car } from "lucide-react";
import { COMPANY_INFO, WHATSAPP_MESSAGES, getWhatsAppUrl } from "@/data/siteData";

export default function Services() {
  return (
    <section id="servicos" className="py-20 sm:py-28 bg-brand-ice">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red/10 border border-brand-red/20 text-brand-red text-xs font-bold uppercase tracking-wider mb-3">
            <Droplets className="w-3.5 h-3.5" />
            Serviços com Garantia & Preço Transparente
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-graphite uppercase tracking-tight">
            ESPECIALIDADES E VALORES DE REFERÊNCIA
          </h2>
          <div className="w-20 h-1.5 bg-brand-red mx-auto mt-4 mb-5 rounded-full"></div>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-normal">
            Trabalhamos exclusivamente com fluidos homologados pelas montadoras, ferramental computadorizado e garantia em todos os serviços.
          </p>
        </div>

        {/* 2 Main Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 mb-14">
          {/* CARD 1 — TROCA DE ÓLEO DE CÂMBIO AUTOMÁTICO */}
          <div
            id="cambio-automatico"
            className="bg-white rounded-2xl overflow-hidden border border-brand-gray-light shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col group"
          >
            {/* Image Container */}
            <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-brand-graphite">
              <Image
                src="/images/cambio-automatico.jpg"
                alt="Troca de óleo de câmbio automático por diálise computadorizada em Carapicuíba"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute top-4 left-4 bg-brand-red text-white text-xs font-black uppercase px-3 py-1.5 rounded-md tracking-wider flex items-center gap-1.5 shadow-md">
                <Cog className="w-3.5 h-3.5" />
                Máquina de Diálise 100%
              </div>
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-white">
                <div>
                  <span className="text-[11px] uppercase tracking-wider font-bold text-gray-300 block">
                    Valor de referência
                  </span>
                  <span className="text-2xl sm:text-3xl font-black text-white">
                    A partir de {COMPANY_INFO.pricing.cambioAutomaticoFrom}
                  </span>
                </div>
                <span className="inline-flex items-center gap-1 bg-black/60 backdrop-blur-sm border border-white/20 px-3 py-1 rounded-lg text-xs font-bold">
                  <Clock className="w-3.5 h-3.5 text-brand-red" />
                  1h30 a 2h30
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-graphite uppercase tracking-tight mb-3">
                  Troca de Óleo de Câmbio Automático por Diálise
                </h3>

                <p className="text-gray-600 leading-relaxed text-sm sm:text-base mb-6">
                  Substituímos até <strong>100% do fluido velho</strong> (inclusive o óleo retido no conversor de torque e radiador) utilizando máquina de diálise computadorizada. Atendemos câmbios <strong>CVT, Aisin (6 e 8 marchas), DSG, ZF e Hydramatic (GM)</strong>.
                </p>

                {/* Technical Highlights */}
                <div className="space-y-3 mb-6 bg-brand-ice/80 p-5 rounded-xl border border-brand-gray-light">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-red flex-shrink-0 mt-0.5" />
                    <span className="text-sm font-semibold text-brand-graphite">
                      <strong>Diagnóstico prévio gratuito:</strong> testamos a pressão e o estado do fluido antes de iniciar.
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-red flex-shrink-0 mt-0.5" />
                    <span className="text-sm font-semibold text-brand-graphite">
                      <strong>Fluidos 100% homologados:</strong> normas Dexron VI, Toyota WS, Honda HCF-2/DW-1, Nissan NS-3, Aisin AW-1 e ZF Lifeguard.
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-red flex-shrink-0 mt-0.5" />
                    <span className="text-sm font-semibold text-brand-graphite">
                      <strong>Transparência total:</strong> veja o óleo usado saindo e o novo entrando pelo visor da máquina + Garantia em nota.
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div>
                <a
                  href={getWhatsAppUrl(WHATSAPP_MESSAGES.cambioAutomatico)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-3 bg-brand-red hover:bg-brand-red-dark text-white font-bold py-4 px-6 rounded-xl shadow-red hover:shadow-red-lg transition-all text-base transform hover:-translate-y-0.5 active:translate-y-0"
                  id="btn-orcamento-cambio"
                >
                  <MessageCircle className="w-5 h-5 fill-white" />
                  <span>Cotar Câmbio do Meu Carro no WhatsApp</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </a>
                <p className="text-[11px] text-gray-500 text-center mt-2">
                  *O valor exato varia conforme a litragem da caixa, norma do fluido e filtro do modelo.
                </p>
              </div>
            </div>
          </div>

          {/* CARD 2 — TROCA DE ÓLEO DE MOTOR */}
          <div
            id="oleo-motor"
            className="bg-white rounded-2xl overflow-hidden border border-brand-gray-light shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col group"
          >
            {/* Image Container */}
            <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-brand-graphite">
              <Image
                src="/images/oleo-motor.jpg"
                alt="Troca de óleo de motor e filtros com lubrificantes sintéticos em Carapicuíba"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute top-4 left-4 bg-brand-graphite text-white text-xs font-black uppercase px-3 py-1.5 rounded-md tracking-wider flex items-center gap-1.5 shadow-md border border-white/20">
                <Droplets className="w-3.5 h-3.5 text-brand-red" />
                Serviço Rápido em 40 Min
              </div>
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-white">
                <div>
                  <span className="text-[11px] uppercase tracking-wider font-bold text-gray-300 block">
                    Óleo + Filtro de Óleo
                  </span>
                  <span className="text-2xl sm:text-3xl font-black text-white">
                    A partir de {COMPANY_INFO.pricing.oleoMotorFrom}
                  </span>
                </div>
                <span className="inline-flex items-center gap-1 bg-black/60 backdrop-blur-sm border border-white/20 px-3 py-1 rounded-lg text-xs font-bold">
                  <Clock className="w-3.5 h-3.5 text-brand-red" />
                  Até 40 min
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-graphite uppercase tracking-tight mb-3">
                  Troca de Óleo de Motor e Filtros
                </h3>

                <p className="text-gray-600 leading-relaxed text-sm sm:text-base mb-6">
                  Proteja motores aspirados, <strong>Turbo (TSI, Ecotec, Firefly, TGDI)</strong> e correias banhadas a óleo com o lubrificante na viscosidade e norma exatas exigidas pelo fabricante (0W20, 5W30, 5W40, 10W40).
                </p>

                {/* Technical Highlights */}
                <div className="space-y-3 mb-6 bg-brand-ice/80 p-5 rounded-xl border border-brand-gray-light">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-red flex-shrink-0 mt-0.5" />
                    <span className="text-sm font-semibold text-brand-graphite">
                      <strong>Óleos 100% lacrados:</strong> trabalhamos com Motul, Mobil, Castrol, Petronas Selenia, Valvoline e TotalEnergies.
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-red flex-shrink-0 mt-0.5" />
                    <span className="text-sm font-semibold text-brand-graphite">
                      <strong>Linha completa de filtros:</strong> filtro de óleo, ar do motor, combustível e cabine (ar-condicionado) de primeira linha.
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-red flex-shrink-0 mt-0.5" />
                    <span className="text-sm font-semibold text-brand-graphite">
                      <strong>Check-up preventivo incluso:</strong> verificação gratuita de fluido de freio, arrefecimento e direção.
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div>
                <a
                  href={getWhatsAppUrl(WHATSAPP_MESSAGES.oleoMotor)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-3 bg-brand-red hover:bg-brand-red-dark text-white font-bold py-4 px-6 rounded-xl shadow-red hover:shadow-red-lg transition-all text-base transform hover:-translate-y-0.5 active:translate-y-0"
                  id="btn-orcamento-motor"
                >
                  <MessageCircle className="w-5 h-5 fill-white" />
                  <span>Agendar Troca de Óleo de Motor</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </a>
                <p className="text-[11px] text-gray-500 text-center mt-2">
                  *Inclui opção de Sistema Leva e Traz Grátis em até 3km de distância.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Brands & Homologations Bar */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-brand-gray-light shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-brand-red mb-1">
                <ShieldCheck className="w-4 h-4" />
                Marcas Homologadas de Fábrica
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-brand-graphite uppercase tracking-tight">
                TRABALHAMOS COM AS MELHORES MARCAS DO MUNDO
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 mt-1">
                Nada de óleo genérico: aplicamos exatamente a especificação técnica do manual do seu carro (Onix, Spin, Tracker, Corolla, Civic, Kicks, Versa, Compass, Renegade, Toro, Creta, HB20, T-Cross, Nivus e importados).
              </p>
            </div>

            <div className="lg:col-span-7 flex flex-wrap items-center gap-2.5 sm:gap-3">
              {COMPANY_INFO.brands.map((brand) => (
                <span
                  key={brand}
                  className="px-4 py-2.5 rounded-xl bg-brand-ice border border-brand-gray-light text-brand-graphite font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-sm"
                >
                  {brand}
                </span>
              ))}
              <a
                href={getWhatsAppUrl(WHATSAPP_MESSAGES.levaETraz)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-brand-red text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-sm hover:bg-brand-red-dark transition-colors"
              >
                <Car className="w-4 h-4" />
                <span>Leva e Traz Grátis até 3km</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
