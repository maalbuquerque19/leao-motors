import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, MessageCircle, Clock, Instagram, Star } from "lucide-react";
import { COMPANY_INFO, WHATSAPP_MESSAGES, getWhatsAppUrl } from "@/data/siteData";

export default function Footer() {
  return (
    <footer className="relative bg-[#151618] text-white pt-16 pb-24 md:pb-12 border-t-4 border-brand-red overflow-hidden">
      {/* Marca d'água do Logo com cores no fundo do Rodapé */}
      <div className="absolute right-0 sm:right-6 lg:right-16 -bottom-10 sm:-bottom-6 w-64 h-64 sm:w-80 sm:h-80 lg:w-[380px] lg:h-[380px] pointer-events-none select-none opacity-10 lg:opacity-15">
        <Image
          src="/images/logo-color-dark.png"
          alt="Marca d'água Leão Motors"
          fill
          className="object-contain"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Col 1: Brand & Bio */}
          <div className="space-y-4">
            <div className="relative h-14 w-36">
              <Image
                src="/images/logo-color-dark.png"
                alt="Leão Motors Lubrificantes"
                fill
                className="object-contain object-left"
              />
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              40 anos de tradição e experiência em Carapicuíba. Troca de óleo de câmbio automático 100% por máquina de diálise, óleo de motor homologado e Sistema Leva e Traz Grátis até 3km.
            </p>
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <a
                href={getWhatsAppUrl(WHATSAPP_MESSAGES.geral)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white bg-brand-red hover:bg-brand-red-dark px-4 py-2.5 rounded-lg transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-white" />
                WhatsApp
              </a>
              <a
                href={COMPANY_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Leão Motors"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-300 hover:text-white bg-white/10 hover:bg-white/20 px-3.5 py-2.5 rounded-lg transition-colors"
              >
                <Instagram className="w-3.5 h-3.5 text-brand-red" />
                <span>Instagram</span>
              </a>
              <a
                href={COMPANY_INFO.googleReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Avaliações no Google"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-300 hover:text-white bg-white/10 hover:bg-white/20 px-3.5 py-2.5 rounded-lg transition-colors"
              >
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span>Google 4.9★</span>
              </a>
            </div>
          </div>

          {/* Col 2: Serviços (Todos apontando para seções reais) */}
          <div>
            <h4 className="text-base font-bold uppercase tracking-wider text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-red" />
              Nossos Serviços
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li>
                <a
                  href="#cambio-automatico"
                  className="hover:text-brand-red transition-colors flex items-center gap-1.5"
                >
                  Troca de Óleo de Câmbio (A partir de {COMPANY_INFO.pricing.cambioAutomaticoFrom})
                </a>
              </li>
              <li>
                <a
                  href="#oleo-motor"
                  className="hover:text-brand-red transition-colors flex items-center gap-1.5"
                >
                  Troca de Óleo de Motor (A partir de {COMPANY_INFO.pricing.oleoMotorFrom})
                </a>
              </li>
              <li>
                <a
                  href="#metodo-dialise"
                  className="hover:text-brand-red transition-colors flex items-center gap-1.5"
                >
                  Método por Máquina de Diálise 100%
                </a>
              </li>
              <li>
                <a
                  href="#leva-e-traz"
                  className="hover:text-brand-red transition-colors flex items-center gap-1.5"
                >
                  Sistema Leva e Traz Grátis até 3km
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Navegação Rápida */}
          <div>
            <h4 className="text-base font-bold uppercase tracking-wider text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-red" />
              Navegação
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li>
                <a href="#inicio" className="hover:text-brand-red transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-brand-red transition-colors">
                  Serviços e Preços
                </a>
              </li>
              <li>
                <a href="#avaliacoes" className="hover:text-brand-red transition-colors">
                  Avaliações de Clientes (Google)
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-brand-red transition-colors">
                  Sobre Nós (40 Anos de Tradição)
                </a>
              </li>
              <li>
                <a href="#duvidas" className="hover:text-brand-red transition-colors">
                  Perguntas Frequentes
                </a>
              </li>
              <li>
                <a href="#localizacao" className="hover:text-brand-red transition-colors">
                  Localização em Carapicuíba
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contato & Unidade */}
          <div>
            <h4 className="text-base font-bold uppercase tracking-wider text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-red" />
              Unidade Carapicuíba
            </h4>
            <div className="space-y-3 text-sm text-gray-400">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-brand-red flex-shrink-0 mt-1" />
                <span>
                  {COMPANY_INFO.address.street}
                  <br />
                  {COMPANY_INFO.address.neighborhood} - {COMPANY_INFO.address.city} - {COMPANY_INFO.address.state}
                  <br />
                  CEP: {COMPANY_INFO.address.zip}
                </span>
              </p>

              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-brand-red flex-shrink-0" />
                <a
                  href={`tel:${COMPANY_INFO.phoneTel}`}
                  className="hover:text-white font-bold text-white"
                >
                  {COMPANY_INFO.phone}
                </a>
              </p>

              <div className="pt-2 border-t border-gray-800">
                <p className="text-xs font-bold text-gray-300 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-brand-red" />
                  Horário de Funcionamento
                </p>
                <p className="text-xs font-semibold text-white">
                  {COMPANY_INFO.businessHours}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 text-xs text-gray-400 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} {COMPANY_INFO.legalName}. Todos os direitos reservados.</p>
          <div className="flex items-center gap-6">
            <Link
              href="/politica-de-privacidade"
              className="hover:text-white transition-colors underline font-medium"
            >
              Política de Privacidade (LGPD)
            </Link>
            <a
              href="#inicio"
              className="hover:text-white transition-colors"
            >
              Voltar ao topo ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
