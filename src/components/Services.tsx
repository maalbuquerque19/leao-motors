import Image from "next/image";
import { MessageCircle, CheckCircle2, Cog, Droplets, ArrowRight } from "lucide-react";
import { WHATSAPP_MESSAGES, getWhatsAppUrl } from "@/data/siteData";

export default function Services() {
  return (
    <section id="servicos" className="py-20 sm:py-28 bg-brand-ice">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red/10 border border-brand-red/20 text-brand-red text-xs font-bold uppercase tracking-wider mb-3">
            <Droplets className="w-3.5 h-3.5" />
            Especialidades Automotivas
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-graphite uppercase tracking-tight">
            OS CUIDADOS QUE SEU VEÍCULO PRECISA
          </h2>
          <div className="w-20 h-1.5 bg-brand-red mx-auto mt-4 mb-5 rounded-full"></div>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-normal">
            Conheça nossos serviços e solicite uma avaliação para identificar a manutenção adequada ao seu veículo.
          </p>
        </div>

        {/* 2 Main Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {/* CARD 1 — TROCA DE ÓLEO DE CÂMBIO AUTOMÁTICO */}
          <div className="bg-white rounded-2xl overflow-hidden border border-brand-gray-light shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col group">
            {/* Image Container */}
            <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-brand-graphite">
              <Image
                src="/images/cambio-automatico.jpg"
                alt="Transmissão automática detalhada com fluido ATF limpo"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute top-4 left-4 bg-brand-red text-white text-xs font-black uppercase px-3 py-1.5 rounded-md tracking-wider flex items-center gap-1.5 shadow-md">
                <Cog className="w-3.5 h-3.5" />
                Alta Precisão Técnica
              </div>
            </div>

            {/* Content */}
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-graphite uppercase tracking-tight mb-4 flex items-center gap-2">
                  <span>Troca de Óleo de Câmbio Automático</span>
                </h3>

                <p className="text-gray-600 leading-relaxed text-sm sm:text-base mb-6">
                  A manutenção do fluido da transmissão automática é importante para o funcionamento adequado do câmbio. Nossa equipe realiza o serviço considerando as recomendações técnicas aplicáveis ao veículo.
                </p>

                {/* Technical Highlights */}
                <div className="space-y-3 mb-8 bg-brand-ice/80 p-5 rounded-xl border border-brand-gray-light">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-red flex-shrink-0 mt-0.5" />
                    <span className="text-sm font-semibold text-brand-graphite">
                      Verificação das especificações do fluido recomendadas pela montadora.
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-red flex-shrink-0 mt-0.5" />
                    <span className="text-sm font-semibold text-brand-graphite">
                      Atenção minuciosa ao procedimento recomendado para cada transmissão.
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-red flex-shrink-0 mt-0.5" />
                    <span className="text-sm font-semibold text-brand-graphite">
                      Serviço direcionado à conservação e vida útil da transmissão.
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <a
                href={getWhatsAppUrl(WHATSAPP_MESSAGES.cambioAutomatico)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-3 bg-brand-red hover:bg-brand-red-dark text-white font-bold py-4 px-6 rounded-xl shadow-red hover:shadow-red-lg transition-all text-base transform hover:-translate-y-0.5 active:translate-y-0"
                id="btn-orcamento-cambio"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>Orçamento para Câmbio Automático</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>

          {/* CARD 2 — TROCA DE ÓLEO DE MOTOR */}
          <div className="bg-white rounded-2xl overflow-hidden border border-brand-gray-light shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col group">
            {/* Image Container */}
            <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-brand-graphite">
              <Image
                src="/images/oleo-motor.jpg"
                alt="Profissional realizando a troca de óleo de motor com lubrificante premium"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute top-4 left-4 bg-brand-graphite text-white text-xs font-black uppercase px-3 py-1.5 rounded-md tracking-wider flex items-center gap-1.5 shadow-md border border-white/20">
                <Droplets className="w-3.5 h-3.5 text-brand-red" />
                Manutenção Essencial
              </div>
            </div>

            {/* Content */}
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-graphite uppercase tracking-tight mb-4">
                  Troca de Óleo de Motor
                </h3>

                <p className="text-gray-600 leading-relaxed text-sm sm:text-base mb-6">
                  Mantenha a lubrificação do motor em dia. A troca de óleo, realizada conforme as especificações do fabricante, contribui para a proteção e o funcionamento adequado do veículo.
                </p>

                {/* Technical Highlights */}
                <div className="space-y-3 mb-8 bg-brand-ice/80 p-5 rounded-xl border border-brand-gray-light">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-red flex-shrink-0 mt-0.5" />
                    <span className="text-sm font-semibold text-brand-graphite">
                      Seleção rigorosa do óleo conforme as normas e viscosidade exigidas.
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-red flex-shrink-0 mt-0.5" />
                    <span className="text-sm font-semibold text-brand-graphite">
                      Atenção aos intervalos recomendados de quilometragem e tempo.
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-red flex-shrink-0 mt-0.5" />
                    <span className="text-sm font-semibold text-brand-graphite">
                      Verificação da aplicação e substituição dos filtros necessários.
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <a
                href={getWhatsAppUrl(WHATSAPP_MESSAGES.oleoMotor)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-3 bg-brand-red hover:bg-brand-red-dark text-white font-bold py-4 px-6 rounded-xl shadow-red hover:shadow-red-lg transition-all text-base transform hover:-translate-y-0.5 active:translate-y-0"
                id="btn-orcamento-motor"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>Orçamento para Óleo de Motor</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
