import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, ArrowLeft, Phone, MapPin, MessageCircle } from "lucide-react";
import { COMPANY_INFO, WHATSAPP_MESSAGES, getWhatsAppUrl } from "@/data/siteData";

export const metadata: Metadata = {
  title: "Política de Privacidade e LGPD | Leão Motors Lubrificantes",
  description:
    "Política de Privacidade e proteção de dados pessoais (LGPD) da Leão Motors Lubrificantes em Carapicuíba - SP.",
  alternates: {
    canonical: "https://leaomotorslubrificantes.com.br/politica-de-privacidade",
  },
};

export default function PoliticaDePrivacidadePage() {
  return (
    <div className="min-h-screen bg-brand-ice py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-card border border-brand-gray-light p-6 sm:p-10">
        <div className="mb-8 pb-6 border-b border-brand-gray-light flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-brand-red/10 text-brand-red flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-black text-brand-graphite uppercase tracking-tight">
                Política de Privacidade (LGPD)
              </h1>
              <p className="text-xs sm:text-sm text-gray-500">
                {COMPANY_INFO.legalName} — Atualizada em {new Date().getFullYear()}
              </p>
            </div>
          </div>

          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-bold text-brand-red hover:text-brand-red-dark transition-colors self-start sm:self-auto"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar ao Site</span>
          </Link>
        </div>

        <div className="space-y-6 text-sm sm:text-base text-gray-700 leading-relaxed">
          <p>
            A <strong>{COMPANY_INFO.legalName}</strong>, localizada na{" "}
            {COMPANY_INFO.address.full}, respeita a sua privacidade e atua em
            conformidade com a{" "}
            <strong>
              Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018 — LGPD)
            </strong>
            .
          </p>

          <div>
            <h2 className="text-lg font-extrabold text-brand-graphite mb-2">
              1. Dados Coletados e Finalidade
            </h2>
            <p>
              Quando você preenche o formulário de orçamento rápido em nosso
              site (informando seu <strong>nome</strong>,{" "}
              <strong>modelo do veículo</strong>, <strong>ano</strong> e{" "}
              <strong>serviço desejado</strong>), esses dados não são gravados
              em banco de dados externo nem compartilhados com terceiros: eles
              são processados diretamente no seu navegador apenas para montar a
              mensagem de atendimento enviada ao nosso WhatsApp oficial.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-extrabold text-brand-graphite mb-2">
              2. Compartilhamento de Informações
            </h2>
            <p>
              Não vendemos, alugamos ou repassamos seus dados pessoais ou de
              contato para terceiros. As informações enviadas via WhatsApp são
              utilizadas exclusivamente pela nossa equipe técnica para elaborar
              orçamentos, verificar a especificação correta do óleo/fluido do
              seu veículo e agendar seu atendimento ou o serviço de Leva e Traz.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-extrabold text-brand-graphite mb-2">
              3. Direitos do Titular (Art. 18 da LGPD)
            </h2>
            <p>
              Você pode, a qualquer momento, solicitar a confirmação, correção
              ou exclusão do seu histórico de contato em nossos canais de
              atendimento entrando em contato direto pelo telefone ou WhatsApp{" "}
              <a
                href={`tel:${COMPANY_INFO.phoneTel}`}
                className="text-brand-red font-bold hover:underline"
              >
                {COMPANY_INFO.phone}
              </a>
              .
            </p>
          </div>

          <div className="bg-brand-ice p-5 rounded-xl border border-brand-gray-light space-y-2 text-xs sm:text-sm">
            <p className="font-bold text-brand-graphite">
              Controlador dos Dados / Canal de Atendimento:
            </p>
            <p className="flex items-center gap-2 text-gray-600">
              <MapPin className="w-4 h-4 text-brand-red flex-shrink-0" />
              <span>{COMPANY_INFO.address.full}</span>
            </p>
            <p className="flex items-center gap-2 text-gray-600">
              <Phone className="w-4 h-4 text-brand-red flex-shrink-0" />
              <a
                href={`tel:${COMPANY_INFO.phoneTel}`}
                className="hover:text-brand-red font-semibold"
              >
                {COMPANY_INFO.phone}
              </a>
            </p>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-brand-gray-light flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-brand-gray-light text-brand-graphite font-bold hover:bg-brand-ice transition-colors text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar para a Página Inicial</span>
          </Link>

          <a
            href={getWhatsAppUrl(WHATSAPP_MESSAGES.geral)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-brand-red hover:bg-brand-red-dark text-white font-bold shadow-red transition-all text-sm"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Falar no WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}

