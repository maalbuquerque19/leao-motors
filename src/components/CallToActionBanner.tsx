import { MessageCircle, ShieldCheck, MapPin } from "lucide-react";
import { WHATSAPP_MESSAGES, getWhatsAppUrl } from "@/data/siteData";

export default function CallToActionBanner() {
  return (
    <section className="relative py-16 sm:py-20 red-gradient-bg text-white overflow-hidden shadow-inner">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px] opacity-10 pointer-events-none" />
      <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-black/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider mb-6">
          <ShieldCheck className="w-4 h-4 text-white" />
          Atendimento Direto & Sem Compromisso
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight mb-4 text-white">
          PRECISA TROCAR O ÓLEO DO SEU CARRO?
        </h2>

        <p className="text-base sm:text-xl text-white/90 max-w-2xl mx-auto mb-8 font-normal leading-relaxed">
          Fale com nossa equipe e solicite informações sobre a troca de óleo de câmbio automático ou motor.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={getWhatsAppUrl(WHATSAPP_MESSAGES.geral)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white text-brand-red hover:bg-brand-ice font-extrabold px-8 py-4 rounded-xl text-base sm:text-lg shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 active:translate-y-0"
            id="banner-cta-especialista"
          >
            <MessageCircle className="w-5 h-5 fill-brand-red text-brand-red" />
            <span>Falar com um Especialista</span>
          </a>
        </div>

        <div className="mt-6 flex items-center justify-center gap-2 text-xs text-white/80">
          <MapPin className="w-3.5 h-3.5" />
          <span>Unidade em Carapicuíba - Av. Dep. Emílio Carlos, 628</span>
        </div>
      </div>
    </section>
  );
}
