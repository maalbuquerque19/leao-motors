import { MessageCircle, Car, MapPin, Phone } from "lucide-react";
import { COMPANY_INFO, WHATSAPP_MESSAGES, getWhatsAppUrl } from "@/data/siteData";

export default function CallToActionBanner() {
  return (
    <section className="relative py-16 sm:py-20 red-gradient-bg text-white overflow-hidden shadow-inner">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px] opacity-10 pointer-events-none" />
      <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-black/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md text-white text-xs sm:text-sm font-extrabold uppercase tracking-wider mb-6">
          <Car className="w-4 h-4 text-white" />
          Sistema Leva e Traz Grátis até 3km • 40 Anos de Experiência
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight mb-4 text-white">
          NÃO ESPERE O CÂMBIO DAR TRANCO PARA CUIDAR DO SEU CARRO!
        </h2>

        <p className="text-base sm:text-xl text-white/95 max-w-3xl mx-auto mb-8 font-normal leading-relaxed">
          Evite reparos de R$ 8.000 a R$ 15.000 na transmissão. Faça a troca preventiva por diálise (a partir de{" "}
          <strong>{COMPANY_INFO.pricing.cambioAutomaticoFrom}</strong>) ou óleo de motor (a partir de{" "}
          <strong>{COMPANY_INFO.pricing.oleoMotorFrom}</strong>) com garantia e buscarmos seu carro sem custo em até 3km.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={getWhatsAppUrl(WHATSAPP_MESSAGES.cambioAutomatico)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white text-brand-red hover:bg-brand-ice font-extrabold px-8 py-4 rounded-xl text-base sm:text-lg shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 active:translate-y-0"
            id="banner-cta-especialista"
          >
            <MessageCircle className="w-5 h-5 fill-brand-red text-brand-red" />
            <span>Pedir Orçamento + Leva e Traz no WhatsApp</span>
          </a>

          <a
            href={`tel:${COMPANY_INFO.phoneTel}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-black/25 hover:bg-black/40 border border-white/30 text-white font-bold px-6 py-4 rounded-xl text-base transition-all"
          >
            <Phone className="w-4 h-4" />
            <span>Ligar: {COMPANY_INFO.phone}</span>
          </a>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-white/90 font-medium">
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="w-4 h-4" />
            Av. Dep. Emílio Carlos, 628 - Vila Caldas, Carapicuíba
          </span>
          <span>•</span>
          <span>{COMPANY_INFO.businessHours}</span>
        </div>
      </div>
    </section>
  );
}
