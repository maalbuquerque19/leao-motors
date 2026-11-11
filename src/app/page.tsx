import Header from "@/components/Header";
import Hero from "@/components/Hero";
import QuickQuoteForm from "@/components/QuickQuoteForm";
import Services from "@/components/Services";
import Differentials from "@/components/Differentials";
import MaintenanceEducation from "@/components/MaintenanceEducation";
import SocialProof from "@/components/SocialProof";
import HowItWorks from "@/components/HowItWorks";
import CallToActionBanner from "@/components/CallToActionBanner";
import FAQ from "@/components/FAQ";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import MobileStickyBar from "@/components/MobileStickyBar";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white">
      {/* 1. Header Fixo com Barra de Horário, Leva e Traz, Telefone e Instagram */}
      <Header />

      <main>
        {/* 2. Hero - Primeira dobra com H1 único, Preços de Referência, Leva e Traz e 40 Anos */}
        <Hero />

        {/* Formulário Rápido de Orçamento com envio direto para o WhatsApp e aviso LGPD */}
        <QuickQuoteForm />

        {/* 3. Nossos Serviços (Câmbio Automático por Diálise & Motor com Preços e Marcas) */}
        <Services />

        {/* 4. Diferenciais Técnicos, Leva e Traz até 3km e 40 Anos de Experiência */}
        <Differentials />

        {/* 5. Método Troca por Diálise (100%) vs Parcial + Sobre Nós (40 Anos) */}
        <MaintenanceEducation />

        {/* 6. Prova Social: Avaliações do Google Meu Negócio e Números de Autoridade */}
        <SocialProof />

        {/* 7. Como Funciona o Atendimento em 3 Etapas */}
        <HowItWorks />

        {/* 8. Faixa Vermelha de Chamada para Conversão */}
        <CallToActionBanner />

        {/* 9. Perguntas Frequentes (FAQ interativo com Preços, Método e Horários) */}
        <FAQ />

        {/* 10. Localização em Carapicuíba com Horário Oficial, Google Maps e Redes */}
        <LocationSection />
      </main>

      {/* 11. Rodapé Institucional Completo com Link para Política de Privacidade (LGPD) */}
      <Footer />

      {/* Botão Flutuante do WhatsApp */}
      <FloatingWhatsApp />

      {/* Barra Fixa Inferior Mobile */}
      <MobileStickyBar />
    </div>
  );
}
