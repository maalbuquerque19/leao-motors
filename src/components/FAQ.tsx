"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";
import { COMPANY_INFO, WHATSAPP_MESSAGES, getWhatsAppUrl } from "@/data/siteData";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Quanto custa a troca de óleo de câmbio automático e de motor?",
      answer: `A troca de óleo de motor parte de ${COMPANY_INFO.pricing.oleoMotorFrom} e a troca de óleo de câmbio automático por máquina de diálise parte de ${COMPANY_INFO.pricing.cambioAutomaticoFrom}. O valor exato depende da litragem da caixa (normalmente de 6 a 10 litros na troca completa), da norma exigida pela montadora (Dexron VI, WS, HCF-2, NS-3, AW-1, DSG, ZF) e do modelo do filtro. Envie o modelo e ano do seu carro no WhatsApp e passamos o orçamento fechado na hora!`,
    },
    {
      question: "Vocês fazem a troca de câmbio por máquina de diálise (100%) ou parcial?",
      answer:
        "Realizamos a troca completa com Máquina de Diálise Computadorizada, que substitui até 100% do fluido (incluindo o óleo velho retido no conversor de torque e no radiador), usando a própria pressão de trabalho do câmbio. Antes do procedimento, fazemos uma avaliação prévia gratuita da saúde da transmissão.",
    },
    {
      question: "Quando devo trocar o óleo do câmbio automático?",
      answer:
        "Para uso urbano no Brasil (trânsito intenso, subidas e calor), fabricantes de transmissões como Aisin e ZF recomendam a troca preventiva entre 40.000 km e 60.000 km (ou a cada 3 a 4 anos). Mesmo quando o manual chama o fluido de 'longa vida', o óleo sofre oxidação térmica e perde viscosidade, o que pode gerar trancos, patinação e desgaste caro das solenoides.",
    },
    {
      question: "Como funciona o Sistema Leva e Traz Grátis até 3km?",
      answer:
        "Se você mora ou trabalha em um raio de até 3km da nossa oficina em Carapicuíba, buscamos seu veículo no horário agendado, realizamos o serviço enviando vídeos dos frascos lacrados (Motul, Mobil, Castrol, Petronas, Valvoline ou Febi) e do visor da máquina de diálise pelo WhatsApp, e devolvemos seu carro pronto com total segurança.",
    },
    {
      question: "Qual o horário de funcionamento e onde vocês ficam?",
      answer: `Atendemos de ${COMPANY_INFO.businessHours}, na ${COMPANY_INFO.address.full}. Temos fácil acesso para motoristas de Carapicuíba, Barueri, Osasco, Jandira e Cotia.`,
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="duvidas" className="py-20 sm:py-24 bg-white border-b border-brand-gray-light">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red/10 border border-brand-red/20 text-brand-red text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            Respostas Diretas e Sem Enrolação
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-graphite uppercase tracking-tight">
            PERGUNTAS FREQUENTES
          </h2>
          <div className="w-20 h-1.5 bg-brand-red mx-auto mt-4 mb-4 rounded-full"></div>
          <p className="text-base text-gray-600 font-normal">
            Tire suas dúvidas sobre preços, prazos, método por diálise e garantia.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "border-brand-red/50 bg-white shadow-card"
                    : "border-brand-gray-light bg-brand-ice/60 hover:bg-white"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-brand-graphite focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-3">
                    <span
                      className={`w-2 h-2 rounded-full flex-shrink-0 transition-colors ${
                        isOpen ? "bg-brand-red" : "bg-gray-400"
                      }`}
                    />
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? "bg-brand-red text-white rotate-180"
                        : "bg-white text-gray-400 border border-brand-gray-light"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-gray-600 leading-relaxed border-t border-brand-gray-light/50">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Button below FAQ */}
        <div className="text-center mt-12 pt-4">
          <p className="text-sm text-gray-600 mb-4">
            Quer saber quantos litros e qual óleo exato o seu carro utiliza?
          </p>
          <a
            href={getWhatsAppUrl(WHATSAPP_MESSAGES.duvidas)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 bg-brand-red hover:bg-brand-red-dark text-white font-bold py-3.5 px-8 rounded-xl shadow-red hover:shadow-red-lg transition-all text-sm sm:text-base transform hover:-translate-y-0.5 active:translate-y-0"
            id="faq-btn-duvidas"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Perguntar para o Especialista no WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
