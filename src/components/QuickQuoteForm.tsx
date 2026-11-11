"use client";

import { useState } from "react";
import Link from "next/link";
import { Send, Car, Calendar, User, Wrench, CheckCircle, ShieldCheck } from "lucide-react";
import { getWhatsAppUrl } from "@/data/siteData";

export default function QuickQuoteForm() {
  const [formData, setFormData] = useState({
    nome: "",
    modelo: "",
    ano: "",
    servico: "Câmbio Automático (Diálise 100%)",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.nome.trim()) newErrors.nome = "Por favor, informe seu nome.";
    if (!formData.modelo.trim()) newErrors.modelo = "Informe o modelo do veículo.";
    if (!formData.ano.trim()) newErrors.ano = "Informe o ano do veículo.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const message = `Olá! Vim pelo formulário do site da Leão Motors:
• Nome: ${formData.nome}
• Veículo: ${formData.modelo}
• Ano: ${formData.ano}
• Serviço Desejado: ${formData.servico}

Quero saber a especificação exata do óleo e o valor para o meu veículo.`;

    const url = getWhatsAppUrl(message);
    window.open(url, "_blank");
  };

  return (
    <section className="relative -mt-10 sm:-mt-14 z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-2xl shadow-card border border-brand-gray-light p-6 sm:p-8 md:p-10">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8 pb-6 border-b border-brand-gray-light">
          <div>
            <span className="inline-block px-3 py-1 rounded-full bg-brand-red/10 text-brand-red text-xs font-bold uppercase tracking-wider mb-2">
              Orçamento Imediato + Sistema Leva e Traz
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-graphite">
              Descubra o Óleo Exato e o Valor para o Seu Carro
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mt-1">
              Informe seu veículo e receba no WhatsApp a especificação original da montadora, marcas disponíveis e o orçamento completo.
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs font-bold text-brand-graphite bg-brand-ice px-4 py-2.5 rounded-lg border border-brand-gray-light self-start lg:self-auto">
            <CheckCircle className="w-4 h-4 text-brand-red flex-shrink-0" />
            <span>Atendimento rápido • Leva e Traz Grátis até 3km</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {/* Nome */}
          <div>
            <label htmlFor="quote-nome" className="block text-xs font-bold text-brand-graphite uppercase tracking-wider mb-1.5">
              Seu Nome *
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                <User className="w-4 h-4" />
              </div>
              <input
                id="quote-nome"
                type="text"
                placeholder="Ex: Carlos Silva"
                value={formData.nome}
                onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                className={`w-full pl-10 pr-3 py-3 bg-brand-ice border ${
                  errors.nome ? "border-brand-red ring-1 ring-brand-red" : "border-brand-gray-light"
                } rounded-xl text-sm text-brand-graphite placeholder-gray-400 focus:outline-none focus:bg-white focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-all`}
              />
            </div>
            {errors.nome && <p className="text-xs text-brand-red mt-1">{errors.nome}</p>}
          </div>

          {/* Modelo */}
          <div>
            <label htmlFor="quote-modelo" className="block text-xs font-bold text-brand-graphite uppercase tracking-wider mb-1.5">
              Modelo e Motor *
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                <Car className="w-4 h-4" />
              </div>
              <input
                id="quote-modelo"
                type="text"
                placeholder="Ex: Corolla 2.0 / Onix 1.0 Turbo"
                value={formData.modelo}
                onChange={(e) => setFormData({ ...formData, modelo: e.target.value })}
                className={`w-full pl-10 pr-3 py-3 bg-brand-ice border ${
                  errors.modelo ? "border-brand-red ring-1 ring-brand-red" : "border-brand-gray-light"
                } rounded-xl text-sm text-brand-graphite placeholder-gray-400 focus:outline-none focus:bg-white focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-all`}
              />
            </div>
            {errors.modelo && <p className="text-xs text-brand-red mt-1">{errors.modelo}</p>}
          </div>

          {/* Ano */}
          <div>
            <label htmlFor="quote-ano" className="block text-xs font-bold text-brand-graphite uppercase tracking-wider mb-1.5">
              Ano do Veículo *
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                <Calendar className="w-4 h-4" />
              </div>
              <input
                id="quote-ano"
                type="text"
                placeholder="Ex: 2021"
                value={formData.ano}
                onChange={(e) => setFormData({ ...formData, ano: e.target.value })}
                className={`w-full pl-10 pr-3 py-3 bg-brand-ice border ${
                  errors.ano ? "border-brand-red ring-1 ring-brand-red" : "border-brand-gray-light"
                } rounded-xl text-sm text-brand-graphite placeholder-gray-400 focus:outline-none focus:bg-white focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-all`}
              />
            </div>
            {errors.ano && <p className="text-xs text-brand-red mt-1">{errors.ano}</p>}
          </div>

          {/* Serviço Desejado */}
          <div>
            <label htmlFor="quote-servico" className="block text-xs font-bold text-brand-graphite uppercase tracking-wider mb-1.5">
              Serviço Desejado *
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                <Wrench className="w-4 h-4" />
              </div>
              <select
                id="quote-servico"
                value={formData.servico}
                onChange={(e) => setFormData({ ...formData, servico: e.target.value })}
                className="w-full pl-10 pr-3 py-3 bg-brand-ice border border-brand-gray-light rounded-xl text-sm text-brand-graphite focus:outline-none focus:bg-white focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-all cursor-pointer"
              >
                <option value="Câmbio Automático (Diálise 100%)">Troca de Óleo Câmbio Automático (Diálise)</option>
                <option value="Óleo de Motor + Filtros">Troca de Óleo de Motor + Filtros</option>
                <option value="Câmbio Automático + Óleo de Motor">Pacote Completo (Câmbio + Motor)</option>
                <option value="Agendar com Leva e Traz (até 3km)">Quero Agendar com Leva e Traz (até 3km)</option>
              </select>
            </div>
          </div>

          {/* Submit Button */}
          <div className="sm:col-span-2 lg:col-span-4 mt-2">
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-3 bg-brand-red hover:bg-brand-red-dark text-white font-bold py-3.5 px-6 rounded-xl shadow-red hover:shadow-red-lg transition-all text-base transform hover:-translate-y-0.5 active:translate-y-0"
              id="quote-form-submit"
            >
              <Send className="w-4 h-4" />
              <span>Receber Orçamento Agora no WhatsApp</span>
            </button>
            <p className="text-center text-xs text-gray-500 mt-2.5 flex flex-wrap items-center justify-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-brand-red inline" />
              <span>
                Seus dados são usados apenas para montar sua mensagem no WhatsApp, conforme nossa{" "}
                <Link
                  href="/politica-de-privacidade"
                  className="text-brand-red font-semibold underline hover:text-brand-red-dark"
                >
                  Política de Privacidade (LGPD)
                </Link>
                .
              </span>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
