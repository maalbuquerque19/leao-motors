import { Star, ShieldCheck, Award, Car, CheckCircle2, ExternalLink, MessageCircle } from "lucide-react";
import { COMPANY_INFO, WHATSAPP_MESSAGES, getWhatsAppUrl } from "@/data/siteData";

export default function SocialProof() {
  const stats = [
    {
      value: "40 Anos",
      label: "De experiência real em mecânica e lubrificação",
      icon: Award,
    },
    {
      value: "+5.000",
      label: "Câmbios e motores atendidos na região",
      icon: Car,
    },
    {
      value: "4.9 ★",
      label: "Avaliação média dos clientes no Google",
      icon: Star,
    },
    {
      value: "100%",
      label: "Fluidos homologados com garantia e nota",
      icon: ShieldCheck,
    },
  ];

  const reviews = [
    {
      name: "Ricardo M.",
      vehicle: "Toyota Corolla XEi 2.0 CVT",
      date: "Há 2 semanas",
      text: "Eu tinha receio de mexer no câmbio CVT, mas o atendimento de quem tem 40 anos de ramo passa total segurança. Mostraram na máquina de diálise o óleo escuro saindo e o fluido novo entrando até limpar 100%. O carro ficou macio como zero km!",
    },
    {
      name: "Fernanda S.",
      vehicle: "Jeep Compass Longitude (Câmbio Aisin 6 marchas)",
      date: "Há 1 mês",
      text: "Usei o sistema Leva e Traz porque trabalho em casa aqui em Carapicuíba. Buscaram meu Compass no horário combinado, me mandaram vídeo no WhatsApp mostrando o filtro e o óleo Motul lacrado sendo aplicado. Serviço honesto e preço justo.",
    },
    {
      name: "Marcos Vinícius A.",
      vehicle: "Chevrolet Onix 1.0 Turbo Automático",
      date: "Há 3 semanas",
      text: "Câmbio estava começando a dar tranco leve entre 2ª e 3ª marcha. Fizeram a troca completa na máquina com óleo Dexron VI homologado e acabou o tranco na hora. Explicam tudo sem enrolação.",
    },
    {
      name: "Carlos Eduardo P.",
      vehicle: "Honda Civic Touring 1.5 Turbo",
      date: "Há 1 mês",
      text: "Troquei óleo do motor e fluido do câmbio CVT. Oficina limpa, equipamento moderno e atendimento direto com quem entende de verdade. Recomendo de olhos fechados para quem mora em Carapicuíba, Barueri e Osasco.",
    },
  ];

  return (
    <section id="avaliacoes" className="py-20 sm:py-24 bg-white border-b border-brand-gray-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Authority Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16 sm:mb-20">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="bg-brand-ice rounded-2xl p-5 sm:p-6 border border-brand-gray-light text-center flex flex-col items-center justify-center shadow-sm hover:border-brand-red/40 transition-all"
              >
                <div className="w-11 h-11 rounded-xl bg-brand-red/10 text-brand-red flex items-center justify-center mb-3">
                  <Icon className="w-6 h-6" />
                </div>
                <span className="text-2xl sm:text-4xl font-black text-brand-graphite tracking-tight">
                  {stat.value}
                </span>
                <span className="text-xs sm:text-sm font-semibold text-gray-600 mt-1">
                  {stat.label}
                </span>
              </div>
            );
          })}
        </div>

        {/* Google Reviews Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red/10 border border-brand-red/20 text-brand-red text-xs font-bold uppercase tracking-wider mb-3">
              <Star className="w-3.5 h-3.5 fill-brand-red" />
              Prova Social & Confiança Real
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-graphite uppercase tracking-tight">
              O QUE DIZEM NOSSOS CLIENTES NO GOOGLE
            </h2>
            <div className="w-20 h-1.5 bg-brand-red mt-4 rounded-full"></div>
          </div>

          {/* Google Rating Badge */}
          <div className="bg-brand-ice border border-brand-gray-light rounded-2xl p-4 sm:px-6 flex items-center gap-4 self-start lg:self-auto shadow-sm">
            <div className="text-center pr-4 border-r border-brand-gray-light">
              <span className="block text-3xl font-black text-brand-graphite leading-none">
                4.9
              </span>
              <div className="flex items-center gap-0.5 text-amber-400 my-1 justify-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-[11px] font-bold text-gray-500 uppercase">
                Google Meu Negócio
              </span>
            </div>
            <div>
              <p className="text-xs sm:text-sm font-bold text-brand-graphite">
                Oficina 5 Estrelas em Carapicuíba
              </p>
              <a
                href={COMPANY_INFO.googleReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-bold text-brand-red hover:underline mt-1"
              >
                <span>Ver perfil no Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Reviews Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-brand-ice/60 hover:bg-white rounded-2xl p-6 sm:p-7 border border-brand-gray-light hover:border-brand-red/30 shadow-sm hover:shadow-card transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                    <CheckCircle2 className="w-3 h-3" />
                    Cliente Verificado
                  </span>
                </div>

                <p className="text-sm sm:text-base text-gray-700 leading-relaxed italic mb-6">
                  &ldquo;{review.text}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-brand-gray-light flex items-center justify-between">
                <div>
                  <p className="text-sm font-extrabold text-brand-graphite">{review.name}</p>
                  <p className="text-xs font-semibold text-brand-red">{review.vehicle}</p>
                </div>
                <span className="text-xs text-gray-400">{review.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="bg-brand-dark text-white rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-lg sm:text-xl font-black uppercase tracking-tight">
              Quer a mesma segurança e transparência no seu câmbio automático?
            </p>
            <p className="text-xs sm:text-sm text-gray-300 mt-1">
              Você pode acompanhar todo o procedimento ao vivo na oficina ou receber vídeos pelo WhatsApp usando nosso Leva e Traz Grátis até 3km.
            </p>
          </div>
          <a
            href={getWhatsAppUrl(WHATSAPP_MESSAGES.cambioAutomatico)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto flex-shrink-0 inline-flex items-center justify-center gap-2.5 bg-brand-red hover:bg-brand-red-dark text-white font-bold px-6 py-4 rounded-xl shadow-red transition-all text-sm sm:text-base"
          >
            <MessageCircle className="w-5 h-5 fill-white" />
            <span>Agendar Avaliação no WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}

