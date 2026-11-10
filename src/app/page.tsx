import Header from "@/components/Header";
import Hero from "@/components/Hero";
import QuickQuoteForm from "@/components/QuickQuoteForm";
import Services from "@/components/Services";
import Differentials from "@/components/Differentials";
import MaintenanceEducation from "@/components/MaintenanceEducation";
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
      {/* 1. Header Fixo & Responsivo */}
      <Header />

      <main>
        {/* 2. Hero - Primeira dobra com H1 único e CTAs */}
        <Hero />

        {/* Formulário Rápido de Orçamento com envio direto para o WhatsApp */}
        <QuickQuoteForm />

        {/* 3. Nossos Serviços (Câmbio Automático & Motor) */}
        <Services />

        {/* 4. Diferenciais Técnicos e de Atendimento */}
        <Differentials />

        {/* 5. Importância da Manutenção do Fluido e Transmissão */}
        <MaintenanceEducation />

        {/* 6. Como Funciona o Atendimento em 3 Etapas */}
        <HowItWorks />

        {/* 7. Faixa Vermelha de Chamada para Conversão */}
        <CallToActionBanner />

        {/* 8. Perguntas Frequentes (FAQ interativo em Accordion) */}
        <FAQ />

        {/* 9. Localização em Carapicuíba com Google Maps e Rotas */}
        <LocationSection />
      </main>

      {/* 10. Rodapé Institucional Completo */}
      <Footer />

      {/* Botão Flutuante do WhatsApp */}
      <FloatingWhatsApp />

      {/* Barra Fixa Inferior Mobile */}
      <MobileStickyBar />
    </div>
  );
}
