"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, MessageCircle, Clock, ShieldCheck, X } from "lucide-react";
import { COMPANY_INFO, WHATSAPP_MESSAGES, getWhatsAppUrl } from "@/data/siteData";

export default function Footer() {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

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
              Especialistas em troca de óleo de câmbio automático e motor em Carapicuíba. Cuidado técnico, respeito às especificações e compromisso com o seu veículo.
            </p>
            <div className="pt-2">
              <a
                href={getWhatsAppUrl(WHATSAPP_MESSAGES.geral)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white bg-brand-red hover:bg-brand-red-dark px-4 py-2 rounded-lg transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-white" />
                Falar no WhatsApp
              </a>
            </div>
          </div>

          {/* Col 2: Serviços */}
          <div>
            <h4 className="text-base font-bold uppercase tracking-wider text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-red" />
              Nossos Serviços
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li>
                <a
                  href="#servicos"
                  className="hover:text-brand-red transition-colors flex items-center gap-1.5"
                >
                  Troca de Óleo de Câmbio Automático
                </a>
              </li>
              <li>
                <a
                  href="#servicos"
                  className="hover:text-brand-red transition-colors flex items-center gap-1.5"
                >
                  Troca de Óleo de Motor
                </a>
              </li>
              <li>
                <a
                  href="#servicos"
                  className="hover:text-brand-red transition-colors flex items-center gap-1.5"
                >
                  Verificação de Fluidos & Especificações
                </a>
              </li>
              <li>
                <a
                  href="#sobre"
                  className="hover:text-brand-red transition-colors flex items-center gap-1.5"
                >
                  Orientações de Manutenção Preventiva
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
                  Serviços
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-brand-red transition-colors">
                  Sobre Nós & Manutenção
                </a>
              </li>
              <li>
                <a href="#diferenciais" className="hover:text-brand-red transition-colors">
                  Diferenciais
                </a>
              </li>
              <li>
                <a href="#duvidas" className="hover:text-brand-red transition-colors">
                  Dúvidas Frequentes
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
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="hover:text-white font-medium"
                >
                  {COMPANY_INFO.phone}
                </a>
              </p>

              <div className="pt-2 border-t border-gray-800">
                <p className="text-xs font-bold text-gray-300 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-brand-red" />
                  Horário de Atendimento
                </p>
                <p className="text-xs text-gray-400">
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
            <button
              onClick={() => setIsPrivacyOpen(true)}
              className="hover:text-white transition-colors underline"
            >
              Política de Privacidade
            </button>
            <a
              href="#inicio"
              className="hover:text-white transition-colors"
            >
              Voltar ao topo ↑
            </a>
          </div>
        </div>
      </div>

      {/* Privacy Policy Modal */}
      {isPrivacyOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white text-brand-graphite rounded-2xl max-w-2xl w-full p-6 sm:p-8 max-h-[85vh] overflow-y-auto shadow-2xl relative">
            <div className="flex justify-between items-center pb-4 mb-4 border-b border-gray-200">
              <h3 className="text-xl font-bold text-brand-graphite flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-brand-red" />
                Política de Privacidade
              </h3>
              <button
                onClick={() => setIsPrivacyOpen(false)}
                className="p-1 rounded-lg text-gray-400 hover:text-gray-700"
                aria-label="Fechar"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
              <p>
                A <strong>{COMPANY_INFO.legalName}</strong> valoriza a privacidade e a segurança dos dados de seus clientes e visitantes.
              </p>
              <h4 className="font-bold text-brand-graphite">1. Coleta de Informações</h4>
              <p>
                Os dados fornecidos em nossos formulários (como nome e dados do veículo) são utilizados estritamente para o envio direto de sua solicitação de orçamento via WhatsApp e para o atendimento técnico personalizado. Não comercializamos nem repassamos informações a terceiros.
              </p>
              <h4 className="font-bold text-brand-graphite">2. Comunicação via WhatsApp</h4>
              <p>
                Ao iniciar um contato pelo WhatsApp através do site, a conversa seguirá os termos de segurança e privacidade do próprio aplicativo WhatsApp (Meta).
              </p>
              <h4 className="font-bold text-brand-graphite">3. Dúvidas</h4>
              <p>
                Para dúvidas sobre o uso das suas informações, entre em contato através do nosso telefone/WhatsApp oficial: {COMPANY_INFO.phone}.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-gray-100 text-right">
              <button
                onClick={() => setIsPrivacyOpen(false)}
                className="bg-brand-red text-white px-5 py-2 rounded-xl text-sm font-bold hover:bg-brand-red-dark transition-colors"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
