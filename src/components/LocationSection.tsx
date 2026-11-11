import { MapPin, Navigation, MessageCircle, Phone, Clock, ExternalLink, Instagram, Star } from "lucide-react";
import { COMPANY_INFO, WHATSAPP_MESSAGES, getWhatsAppUrl } from "@/data/siteData";

export default function LocationSection() {
  return (
    <section id="localizacao" className="py-20 sm:py-28 bg-brand-ice">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red/10 border border-brand-red/20 text-brand-red text-xs font-bold uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5" />
            Fácil Acesso + Leva e Traz até 3km
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-graphite uppercase tracking-tight">
            VISITE NOSSA OFICINA EM CARAPICUÍBA
          </h2>
          <div className="w-20 h-1.5 bg-brand-red mx-auto mt-4 mb-5 rounded-full"></div>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-normal">
            Unidade própria na Vila Caldas com fácil acesso para Carapicuíba, Barueri, Osasco, Jandira e Cotia.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Info Card (5 cols) */}
          <div className="lg:col-span-5 bg-white rounded-2xl p-7 sm:p-9 border border-brand-gray-light shadow-card flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 pb-6 mb-6 border-b border-brand-gray-light">
                <div className="w-12 h-12 rounded-xl bg-brand-red/10 text-brand-red flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-graphite">{COMPANY_INFO.name}</h3>
                  <p className="text-xs text-gray-500">{COMPANY_INFO.legalName} • 40 Anos</p>
                </div>
              </div>

              <div className="space-y-5">
                {/* Endereço */}
                <div>
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
                    Endereço Completo
                  </h4>
                  <p className="text-base font-semibold text-brand-graphite leading-relaxed">
                    {COMPANY_INFO.address.street}
                    <br />
                    {COMPANY_INFO.address.neighborhood} - {COMPANY_INFO.address.city} - {COMPANY_INFO.address.state}
                    <br />
                    <span className="text-sm font-normal text-gray-500">CEP: {COMPANY_INFO.address.zip}</span>
                  </p>
                </div>

                {/* Telefone e WhatsApp */}
                <div>
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
                    Telefone Direto e WhatsApp
                  </h4>
                  <a
                    href={`tel:${COMPANY_INFO.phoneTel}`}
                    className="text-lg font-bold text-brand-red hover:underline flex items-center gap-2"
                  >
                    <Phone className="w-4 h-4 text-brand-red" />
                    {COMPANY_INFO.phone}
                  </a>
                </div>

                {/* Horário de Funcionamento Oficial */}
                <div className="bg-brand-ice p-4 rounded-xl border border-brand-gray-light">
                  <h4 className="text-xs font-bold text-brand-graphite uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-brand-red" />
                    Horário de Funcionamento
                  </h4>
                  <p className="text-sm font-extrabold text-brand-graphite">
                    Segunda a Sexta: 08h às 18h
                  </p>
                  <p className="text-sm font-extrabold text-brand-graphite">
                    Sábado: 08h às 13h
                  </p>
                </div>

                {/* Links Sociais: Instagram & Google Meu Negócio */}
                <div className="flex flex-wrap items-center gap-3 pt-1">
                  <a
                    href={COMPANY_INFO.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-graphite hover:text-brand-red bg-brand-ice px-3.5 py-2 rounded-lg border border-brand-gray-light transition-colors"
                  >
                    <Instagram className="w-4 h-4 text-brand-red" />
                    <span>Instagram Oficial</span>
                  </a>
                  <a
                    href={COMPANY_INFO.googleReviewsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-graphite hover:text-brand-red bg-brand-ice px-3.5 py-2 rounded-lg border border-brand-gray-light transition-colors"
                  >
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    <span>Google Meu Negócio</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8 pt-6 border-t border-brand-gray-light">
              <a
                href={COMPANY_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white font-bold py-3.5 px-4 rounded-xl text-sm shadow-red hover:shadow-red-lg transition-all"
                id="btn-como-chegar"
              >
                <Navigation className="w-4 h-4" />
                <span>Traçar Rota no Mapa</span>
              </a>

              <a
                href={getWhatsAppUrl(WHATSAPP_MESSAGES.levaETraz)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-brand-ice text-brand-graphite border border-brand-gray-light font-bold py-3.5 px-4 rounded-xl text-sm transition-all shadow-sm"
                id="btn-whatsapp-local"
              >
                <MessageCircle className="w-4 h-4 text-brand-red" />
                <span>Pedir Leva e Traz</span>
              </a>
            </div>
          </div>

          {/* Interactive Google Map Embed (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl overflow-hidden border border-brand-gray-light shadow-card min-h-[380px] sm:min-h-[460px] relative">
            <iframe
              title="Localização da Leão Motors em Carapicuíba"
              src={COMPANY_INFO.googleMapsEmbed}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "100%" }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full min-h-[380px] lg:min-h-full"
            />
            {/* Overlay pill for direct Google Maps open */}
            <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl border border-brand-gray-light shadow-md flex items-center gap-2 text-xs font-semibold text-brand-graphite">
              <a
                href={COMPANY_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-brand-red"
              >
                <span>Abrir no Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 text-brand-red" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
