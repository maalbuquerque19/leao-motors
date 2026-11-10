"use client";

import { MessageCircle } from "lucide-react";
import { WHATSAPP_MESSAGES, getWhatsAppUrl } from "@/data/siteData";

export default function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-20 md:bottom-6 right-5 z-40 flex items-center group">
      {/* Tooltip on hover (desktop) */}
      <span className="hidden sm:inline-block mr-3 bg-white text-brand-graphite text-xs font-bold py-1.5 px-3 rounded-full shadow-lg border border-brand-gray-light transition-all opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 pointer-events-none whitespace-nowrap">
        Fale conosco no WhatsApp
      </span>

      <a
        href={getWhatsAppUrl(WHATSAPP_MESSAGES.geral)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Iniciar conversa no WhatsApp"
        className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full shadow-2xl transition-all transform hover:scale-110 active:scale-95 animate-pulseGlow"
        id="floating-whatsapp-btn"
      >
        <MessageCircle className="w-8 h-8 fill-white" />
        <span className="sr-only">WhatsApp</span>
      </a>
    </div>
  );
}
