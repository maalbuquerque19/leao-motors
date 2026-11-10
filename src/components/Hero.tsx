import Image from "next/image";
import { MessageCircle, ArrowRight, ShieldCheck, Cog, Gauge, MapPin, Car } from "lucide-react";
import { COMPANY_INFO, WHATSAPP_MESSAGES, getWhatsAppUrl } from "@/data/siteData";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-[92vh] sm:min-h-screen flex items-center pt-24 sm:pt-28 pb-16 overflow-hidden bg-brand-dark"
    >
      {/* Background Image with optimized Next.js Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.jpg"
          alt="Oficina especializada Leão Motors em Carapicuíba com maquinário moderno para troca de óleo"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Dark & Red Gradient Overlay for High Contrast and Brand Immersion */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#101114]/95 via-[#101114]/90 to-[#101114]/70 sm:to-[#101114]/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#101114] via-transparent to-transparent opacity-80" />

        {/* Marca d'água do Logo Leão Motors */}
        <div className="absolute right-4 sm:right-12 lg:right-20 top-1/2 -translate-y-1/2 w-64 h-64 sm:w-80 sm:h-80 lg:w-[440px] lg:h-[440px] pointer-events-none select-none opacity-[0.08] sm:opacity-[0.10]">
          <Image
            src="/images/logo-watermark.png"
            alt="Marca d'água Leão Motors"
            fill
            className="object-contain"
          />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          {/* Badge: Sistema Leva e Traz */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs sm:text-sm font-semibold mb-6 animate-pulse">
            <span className="w-2 h-2 rounded-full bg-brand-red"></span>
            <Car className="w-3.5 h-3.5 text-brand-red" />
            <span>Sistema Leva e Traz até 3km</span>
          </div>

          {/* Single H1 Title */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight leading-[1.1] mb-6">
            TROCA DE ÓLEO DE{" "}
            <span className="text-brand-red bg-clip-text text-transparent bg-gradient-to-r from-brand-red via-brand-red-light to-white">
              CÂMBIO AUTOMÁTICO
            </span>{" "}
            EM CARAPICUÍBA
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-xl text-gray-200 leading-relaxed font-normal mb-8 max-w-2xl">
            Seu veículo merece cuidados especializados. Realizamos troca de óleo de câmbio automático e troca de óleo de motor com atenção rigorosa às especificações do seu veículo.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <a
              href={getWhatsAppUrl(WHATSAPP_MESSAGES.geral)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-brand-red hover:bg-brand-red-dark text-white px-8 py-4 rounded-xl text-base sm:text-lg font-bold shadow-red hover:shadow-red-lg transition-all transform hover:-translate-y-1 active:translate-y-0"
              id="hero-cta-whatsapp"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              <span>Solicitar Orçamento no WhatsApp</span>
            </a>

            <a
              href="#servicos"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-md px-6 py-4 rounded-xl text-base font-semibold transition-all hover:-translate-y-0.5"
            >
              <span>Conheça Nossos Serviços</span>
              <ArrowRight className="w-4 h-4 text-brand-red" />
            </a>
          </div>

          {/* Trust Highlights / Mini cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-white/15">
            <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 p-3 rounded-lg">
              <div className="p-2 bg-brand-red/20 rounded-lg text-brand-red">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-gray-300">Localização</p>
                <p className="text-sm font-bold text-white">Vila Caldas - Carapicuíba</p>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 p-3 rounded-lg">
              <div className="p-2 bg-brand-red/20 rounded-lg text-brand-red">
                <Cog className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-gray-300">Especialidade 01</p>
                <p className="text-sm font-bold text-white">Câmbio Automático</p>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 p-3 rounded-lg">
              <div className="p-2 bg-brand-red/20 rounded-lg text-brand-red">
                <Gauge className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-gray-300">Especialidade 02</p>
                <p className="text-sm font-bold text-white">Óleo de Motor</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
