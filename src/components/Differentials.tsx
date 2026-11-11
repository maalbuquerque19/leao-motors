import { Car, Award, Gauge, ShieldCheck, Sparkles } from "lucide-react";

export default function Differentials() {
  const differentials = [
    {
      icon: Car,
      title: "Leva e Traz Grátis até 3km",
      description:
        "Sem tempo para vir até a oficina? Buscamos e entregamos seu carro em casa ou no trabalho (até 3km) e enviamos vídeos de todo o serviço pelo WhatsApp.",
      highlight: "Destaque Exclusivo",
    },
    {
      icon: Award,
      title: "40 Anos de Experiência",
      description:
        "Quatro décadas de tradição e serviço bem feito. Você conversa direto com quem entende de câmbio automático e lubrificação automotiva na prática.",
      highlight: "Tradição e Confiança",
    },
    {
      icon: Gauge,
      title: "Diálise Computadorizada 100%",
      description:
        "Enquanto a troca comum por gravidade deixa até 50% de óleo sujo no conversor de torque, nossa máquina substitui até 100% do fluido com precisão.",
      highlight: "Tecnologia de Ponta",
    },
    {
      icon: ShieldCheck,
      title: "Óleos Lacrados & Garantia",
      description:
        "Fluidos 100% originais (Motul, Mobil, Castrol, Petronas, Valvoline e Febi) abertos na sua frente, com garantia total de serviço e nota fiscal.",
      highlight: "Segurança Total",
    },
  ];

  return (
    <section id="diferenciais" className="py-20 sm:py-24 bg-white border-y border-brand-gray-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red/10 border border-brand-red/20 text-brand-red text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Por Que Escolher a Leão Motors?
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-graphite uppercase tracking-tight">
            DIFERENCIAIS QUE PROTEGEM O SEU PATRIMÔNIO
          </h2>
          <div className="w-20 h-1.5 bg-brand-red mx-auto mt-4 mb-5 rounded-full"></div>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-normal">
            Unimos 40 anos de experiência mecânica, maquinário de última geração e comodidade total para você não correr riscos com o câmbio ou motor do seu carro.
          </p>
        </div>

        {/* 4 Cards */}
        <div id="leva-e-traz" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {differentials.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-brand-ice/50 hover:bg-white rounded-2xl p-6 sm:p-7 border border-brand-gray-light hover:border-brand-red/40 hover:shadow-card-hover transition-all duration-300 flex flex-col group"
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="w-14 h-14 rounded-xl bg-white group-hover:bg-brand-red border border-brand-gray-light group-hover:border-brand-red flex items-center justify-center text-brand-red group-hover:text-white transition-all duration-300 shadow-sm">
                    <Icon className="w-7 h-7" />
                  </div>
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-brand-red bg-brand-red/10 px-2.5 py-1 rounded-full">
                    {item.highlight}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-brand-graphite mb-3 group-hover:text-brand-red transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
