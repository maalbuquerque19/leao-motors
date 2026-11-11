import { MessageCircle, Phone } from "lucide-react";
import { COMPANY_INFO, WHATSAPP_MESSAGES, getWhatsAppUrl } from "@/data/siteData";

export default function MobileStickyBar() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-brand-gray-light p-2.5 shadow-[0_-4px_15px_rgba(0,0,0,0.08)]">
      <div className="max-w-md mx-auto grid grid-cols-2 gap-2">
        <a
          href={`tel:${COMPANY_INFO.phoneTel}`}
          className="flex items-center justify-center gap-1.5 py-3 px-3 bg-brand-ice hover:bg-gray-200 text-brand-graphite rounded-xl font-bold text-xs border border-brand-gray-light transition-all text-center"
        >
          <Phone className="w-3.5 h-3.5 text-brand-red flex-shrink-0" />
          <span>Ligar Agora</span>
        </a>

        <a
          href={getWhatsAppUrl(WHATSAPP_MESSAGES.geral)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 py-3 px-3 bg-brand-red hover:bg-brand-red-dark text-white rounded-xl font-bold text-xs shadow-red transition-all text-center"
          id="mobile-bottom-whatsapp-btn"
        >
          <MessageCircle className="w-4 h-4 fill-white flex-shrink-0" />
          <span>Orçamento + Leva e Traz</span>
        </a>
      </div>
    </div>
  );
}
