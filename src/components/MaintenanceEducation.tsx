import Image from "next/image";
import { MessageCircle, HelpCircle, ThermometerSun, ShieldCheck, Activity } from "lucide-react";
import { WHATSAPP_MESSAGES, getWhatsAppUrl } from "@/data/siteData";

export default function MaintenanceEducation() {
  return (
    <section id="sobre" className="py-20 sm:py-28 bg-brand-ice overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Image Column */}
          <div className="lg:col-span-6 relative">
            <div className="relative h-80 sm:h-[450px] w-full rounded-2xl overflow-hidden shadow-card border border-brand-gray-light bg-brand-dark group">
              <Image
                src="/images/atf-machine.jpg"
                alt="Máquina profissional para troca de fluido de câmbio automático com visores de óleo novo e usado"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-white/50 shadow-md">
                <p className="text-xs font-bold uppercase tracking-wider text-brand-red flex items-center gap-1.5 mb-1">
                  <Activity className="w-4 h-4" />
                  Procedimento Técnico Recomendado
                </p>
                <p className="text-xs sm:text-sm text-brand-graphite font-semibold">
                  Substituição planejada do fluido preserva solenoides, discos de fricção e conversor de torque.
                </p>
              </div>
            </div>

            {/* Decorative background red accent */}
            <div className="absolute -bottom-6 -right-6 w-36 h-36 bg-brand-red/10 rounded-2xl -z-10 blur-xl"></div>
          </div>

          {/* Text Column */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red/10 border border-brand-red/20 text-brand-red text-xs font-bold uppercase tracking-wider mb-4">
              <HelpCircle className="w-3.5 h-3.5" />
              Guia Preventivo
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-graphite uppercase tracking-tight leading-tight mb-6">
              QUANDO FOI A ÚLTIMA VEZ QUE VOCÊ TROCOU O ÓLEO DO SEU CÂMBIO?
            </h2>

            <div className="w-16 h-1 bg-brand-red mb-6 rounded-full"></div>

            <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-normal mb-6">
              O fluido da transmissão automática desempenha funções primordiais na lubrificação das engrenagens, no controle de pressão hidráulica dos solenoides e na dissipação contínua de calor.
            </p>

            <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-normal mb-8">
              A necessidade de substituição depende do modelo do veículo, da transmissão instalada, das condições de uso (tráfego urbano, carga) e das recomendações do fabricante.
            </p>

            {/* Key benefits list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-3 bg-white p-3.5 rounded-xl border border-brand-gray-light shadow-sm">
                <ThermometerSun className="w-5 h-5 text-brand-red flex-shrink-0" />
                <span className="text-xs sm:text-sm font-bold text-brand-graphite">Controle térmico ideal</span>
              </div>
              <div className="flex items-center gap-3 bg-white p-3.5 rounded-xl border border-brand-gray-light shadow-sm">
                <ShieldCheck className="w-5 h-5 text-brand-red flex-shrink-0" />
                <span className="text-xs sm:text-sm font-bold text-brand-graphite">Prevenção de desgastes</span>
              </div>
            </div>

            {/* Call to action highlight card */}
            <div className="bg-white p-6 rounded-2xl border-l-4 border-l-brand-red border border-brand-gray-light shadow-sm mb-8">
              <p className="text-base sm:text-lg font-bold text-brand-graphite mb-2">
                Não sabe quando realizar a manutenção?
              </p>
              <p className="text-sm text-gray-600 mb-5">
                Entre em contato com a equipe da Leão Motors e consulte as orientações indicadas para o modelo e ano do seu carro.
              </p>
              <a
                href={getWhatsAppUrl(WHATSAPP_MESSAGES.duvidas)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-brand-red hover:bg-brand-red-dark text-white font-bold py-3.5 px-6 rounded-xl shadow-red hover:shadow-red-lg transition-all text-sm sm:text-base transform hover:-translate-y-0.5 active:translate-y-0"
                id="btn-tirar-duvidas"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Tirar Minhas Dúvidas</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
