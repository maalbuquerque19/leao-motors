import Image from "next/image";
import { MessageCircle, Activity, CheckCircle2, XCircle, Award, ShieldCheck, Car } from "lucide-react";
import { WHATSAPP_MESSAGES, getWhatsAppUrl } from "@/data/siteData";

export default function MaintenanceEducation() {
  return (
    <section id="metodo-dialise" className="py-20 sm:py-28 bg-brand-ice overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* BLOCK 1: MÉTODO TROCA POR DIÁLISE VS TROCA PARCIAL */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Image Column */}
          <div className="lg:col-span-6 relative">
            <div className="relative h-80 sm:h-[480px] w-full rounded-2xl overflow-hidden shadow-card border border-brand-gray-light bg-brand-dark group">
              <Image
                src="/images/atf-machine.jpg"
                alt="Máquina de diálise para troca 100% de fluido de câmbio automático com visores de óleo novo e usado na Leão Motors"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-xl border border-white/50 shadow-md">
                <p className="text-xs font-extrabold uppercase tracking-wider text-brand-red flex items-center gap-1.5 mb-1">
                  <Activity className="w-4 h-4" />
                  Visores Transparentes na Máquina de Diálise
                </p>
                <p className="text-xs sm:text-sm text-brand-graphite font-semibold">
                  Você vê ao vivo o óleo escuro e degradado saindo da transmissão e o fluido novo e limpo assumindo 100% do sistema.
                </p>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-36 h-36 bg-brand-red/10 rounded-2xl -z-10 blur-xl"></div>
          </div>

          {/* Text Column: Diálise vs Parcial */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red/10 border border-brand-red/20 text-brand-red text-xs font-bold uppercase tracking-wider mb-4">
              <Activity className="w-3.5 h-3.5" />
              Entenda o Método Técnico
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-graphite uppercase tracking-tight leading-tight mb-5">
              TROCA POR DIÁLISE (100%) VS. TROCA PARCIAL POR GRAVIDADE
            </h2>

            <div className="w-16 h-1.5 bg-brand-red mb-6 rounded-full"></div>

            <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-normal mb-6">
              Muita gente não sabe, mas abrir apenas o bujão do cárter (troca parcial por gravidade) esgota somente <strong>40% a 50% do fluido</strong> — mais da metade do óleo velho e contaminado continua presa dentro do <strong>conversor de torque, corpo de válvulas e radiador do câmbio</strong>.
            </p>

            {/* Comparison Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                <div className="flex items-center gap-2 text-gray-500 font-extrabold text-sm uppercase mb-2">
                  <XCircle className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  <span>Troca Parcial Comum</span>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Retira apenas metade do fluido. O óleo novo se mistura imediatamente com o óleo velho oxidado que ficou no conversor de torque.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl border-2 border-brand-red shadow-sm">
                <div className="flex items-center gap-2 text-brand-red font-extrabold text-sm uppercase mb-2">
                  <CheckCircle2 className="w-5 h-5 text-brand-red flex-shrink-0" />
                  <span>Diálise na Leão Motors</span>
                </div>
                <p className="text-xs sm:text-sm text-brand-graphite font-medium leading-relaxed">
                  Conectada às linhas de fluxo do câmbio, substitui <strong>até 100% do fluido</strong> na mesma vazão e pressão de trabalho da caixa, sem forçar solenoides.
                </p>
              </div>
            </div>

            <a
              href={getWhatsAppUrl(WHATSAPP_MESSAGES.cambioAutomatico)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 bg-brand-red hover:bg-brand-red-dark text-white font-bold py-4 px-7 rounded-xl shadow-red hover:shadow-red-lg transition-all text-sm sm:text-base transform hover:-translate-y-0.5 active:translate-y-0"
              id="btn-tirar-duvidas"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              <span>Avaliar o Câmbio do Meu Carro no WhatsApp</span>
            </a>
          </div>
        </div>

        {/* BLOCK 2: SOBRE NÓS — 40 ANOS DE TRADIÇÃO E EXPERIÊNCIA */}
        <div
          id="sobre"
          className="bg-white rounded-3xl p-8 sm:p-12 border border-brand-gray-light shadow-card"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red/10 border border-brand-red/20 text-brand-red text-xs font-bold uppercase tracking-wider">
                <Award className="w-3.5 h-3.5" />
                Sobre a Leão Motors Lubrificantes
              </div>

              <h2 className="text-2xl sm:text-4xl font-black text-brand-graphite uppercase tracking-tight">
                40 ANOS FAZENDO BOM SERVIÇO AUTOMOTIVO COM HONESTIDADE E RIGOR TÉCNICO
              </h2>

              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                A <strong>Leão Motors Lubrificantes</strong> nasceu da paixão por mecânica bem feita e acumula <strong>40 anos de experiência prática</strong> cuidando do patrimônio de motoristas de Carapicuíba, Barueri, Osasco e região.
              </p>

              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                Sabemos que o câmbio automático é um dos conjuntos mais caros e sensíveis do carro — e que a maior preocupação do proprietário é entregar o veículo nas mãos de quem realmente domina o procedimento. Por isso, aqui na Leão Motors <strong>não existe serviço às escuras</strong>: você conversa direto com especialistas experientes, acompanha a abertura dos frascos lacrados e vê o resultado nos visores da máquina de diálise.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3">
                <div className="bg-brand-ice p-4 rounded-xl border border-brand-gray-light">
                  <p className="text-xl font-black text-brand-red">40 Anos</p>
                  <p className="text-xs font-bold text-brand-graphite mt-0.5">
                    De experiência e tradição no setor automotivo
                  </p>
                </div>
                <div className="bg-brand-ice p-4 rounded-xl border border-brand-gray-light">
                  <p className="text-xl font-black text-brand-red">100% Visível</p>
                  <p className="text-xs font-bold text-brand-graphite mt-0.5">
                    Acompanhe na oficina ou por vídeo no WhatsApp
                  </p>
                </div>
                <div className="bg-brand-ice p-4 rounded-xl border border-brand-gray-light">
                  <p className="text-xl font-black text-brand-red">Até 3km</p>
                  <p className="text-xs font-bold text-brand-graphite mt-0.5">
                    Sistema Leva e Traz Grátis com total segurança
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-brand-dark text-white rounded-2xl p-6 sm:p-8 border border-white/10 space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-brand-red flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-black uppercase tracking-tight">
                    Compromisso Leão Motors
                  </h3>
                  <p className="text-xs text-gray-300">
                    Por que nossos clientes voltam e indicam
                  </p>
                </div>
              </div>

              <ul className="space-y-3 text-xs sm:text-sm text-gray-200">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-red flex-shrink-0 mt-0.5" />
                  <span>Diagnóstico honesto: só recomendamos o que o seu carro realmente precisa.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-red flex-shrink-0 mt-0.5" />
                  <span>Consulta por placa e chassi para aplicar a norma exata do fabricante.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-red flex-shrink-0 mt-0.5" />
                  <span>Garantia em nota fiscal em todas as trocas de óleo de câmbio e motor.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Car className="w-4 h-4 text-brand-red flex-shrink-0 mt-0.5" />
                  <span>Sistema Leva e Traz gratuito até 3km para você não perder seu dia de trabalho.</span>
                </li>
              </ul>

              <a
                href={getWhatsAppUrl(WHATSAPP_MESSAGES.levaETraz)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white font-bold py-3.5 px-5 rounded-xl shadow-red transition-all text-sm"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Agendar com Leva e Traz Grátis</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
