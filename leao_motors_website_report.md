# Leão Motors Lubrificantes — Desenvolvimento do Site Profissional

Desenvolvemos o site completo para a **Leão Motors Lubrificantes**, projetado com foco em alta conversão, autoridade técnica e SEO local para a cidade de **Carapicuíba - SP**.

---

## 🎨 1. Identidade Visual (Vermelho e Branco)

Seguindo rigorosamente as diretrizes da marca e o logotipo oficial da empresa:
- **Vermelho Principal:** `#D71920` (Botões de WhatsApp, badges de destaque, acentos e bordas ativas)
- **Vermelho Escuro:** `#A80F18` (Hover states e gradientes de profundidade)
- **Branco:** `#FFFFFF` (Fundo predominante, transmitindo ambiente limpo, técnico e profissional)
- **Branco Gelo:** `#F8F9FA` (Seções de contraste e inputs)
- **Grafite:** `#252525` (Tipografia e elementos de alto contraste)
- **Cinza Claro:** `#E9ECEF` (Bordas suaves de cards)

---

## 🏗️ 2. Estrutura das Seções Implementadas

| Seção | Descrição Técnica & Conteúdo | Componente |
| :--- | :--- | :--- |
| **Header Fixo** | Barra superior com endereço e telefone, logotipo oficial da Leão Motors, navegação rápida e botão de CTA *"Agendar pelo WhatsApp"* com menu responsivo mobile. | [`Header.tsx`](file:///c:/Users/Marcos%20Albuquerque/OneDrive/Desktop/Site%20Leão%20Motors/src/components/Header.tsx) |
| **Hero (Primeira Dobra)** | Título único H1: *"TROCA DE ÓLEO DE CÂMBIO AUTOMÁTICO EM CARAPICUÍBA"*, subtítulo técnico, dois CTAs de conversão e badges de confiança com imagem de oficina premium. | [`Hero.tsx`](file:///c:/Users/Marcos%20Albuquerque/OneDrive/Desktop/Site%20Leão%20Motors/src/components/Hero.tsx) |
| **Formulário Rápido** | Card destacado para captura rápida de leads (Nome, Modelo, Ano, Serviço) que monta a mensagem estruturada e abre direto no WhatsApp da empresa. | [`QuickQuoteForm.tsx`](file:///c:/Users/Marcos%20Albuquerque/OneDrive/Desktop/Site%20Leão%20Motors/src/components/QuickQuoteForm.tsx) |
| **Nossos Serviços** | Cards modernos para *Troca de Óleo de Câmbio Automático* e *Troca de Óleo de Motor*, com fotos de alta qualidade, especificações técnicas e links específicos no WhatsApp. | [`Services.tsx`](file:///c:/Users/Marcos%20Albuquerque/OneDrive/Desktop/Site%20Leão%20Motors/src/components/Services.tsx) |
| **Diferenciais** | 4 cards com ícones modernos: Atenção Técnica, Atendimento Personalizado, Manutenção Preventiva e Localização Acessível. | [`Differentials.tsx`](file:///c:/Users/Marcos%20Albuquerque/OneDrive/Desktop/Site%20Leão%20Motors/src/components/Differentials.tsx) |
| **Importância da Manutenção** | Seção educativa com imagem detalhada de máquina de troca com visores de fluido limpo e usado, explicando controle térmico, lubrificação e conversão de torque. | [`MaintenanceEducation.tsx`](file:///c:/Users/Marcos%20Albuquerque/OneDrive/Desktop/Site%20Leão%20Motors/src/components/MaintenanceEducation.tsx) |
| **Como Funciona** | Fluxo visual em 3 passos conectados: 01 Entre em contato, 02 Consulte o serviço, 03 Agende sua visita. | [`HowItWorks.tsx`](file:///c:/Users/Marcos%20Albuquerque/OneDrive/Desktop/Site%20Leão%20Motors/src/components/HowItWorks.tsx) |
| **Chamada para Conversão** | Faixa vermelha marcante com botão branco em alto contraste para falar diretamente com um especialista via WhatsApp. | [`CallToActionBanner.tsx`](file:///c:/Users/Marcos%20Albuquerque/OneDrive/Desktop/Site%20Leão%20Motors/src/components/CallToActionBanner.tsx) |
| **FAQ Interativo** | Accordion com 5 dúvidas cruciais dos motoristas sobre trocas de câmbio e óleo, mais botão *"Tenho Outra Dúvida"*. | [`FAQ.tsx`](file:///c:/Users/Marcos%20Albuquerque/OneDrive/Desktop/Site%20Leão%20Motors/src/components/FAQ.tsx) |
| **Localização** | Card completo com endereço na Av. Dep. Emílio Carlos, 628, botões *"Como Chegar"* e *"Falar no WhatsApp"*, com mapa interativo do Google Maps. | [`LocationSection.tsx`](file:///c:/Users/Marcos%20Albuquerque/OneDrive/Desktop/Site%20Leão%20Motors/src/components/LocationSection.tsx) |
| **Rodapé** | Fundo grafite elegante com logotipo, dados institucionais, links rápidos, campo editável de horário e modal da Política de Privacidade. | [`Footer.tsx`](file:///c:/Users/Marcos%20Albuquerque/OneDrive/Desktop/Site%20Leão%20Motors/src/components/Footer.tsx) |
| **Botão Flutuante & Mobile Bar** | Botão flutuante animado do WhatsApp e barra inferior fixa para smartphones. | [`FloatingWhatsApp.tsx`](file:///c:/Users/Marcos%20Albuquerque/OneDrive/Desktop/Site%20Leão%20Motors/src/components/FloatingWhatsApp.tsx) |

---

## ⚡ 3. Otimizações de SEO Local & Performance

- **Title Tag:** `Troca de Óleo de Câmbio Automático em Carapicuíba | Leão Motors`
- **Hierarquia:** Apenas 1 `<h1>` na página principal, com títulos secundários `<h2>` e `<h3>` semanticamente estruturados.
- **Dados Estruturados:** Schema.org `AutoRepair` configurado com endereço real, geolocalização (-23.5238, -46.8365), catálogo de serviços e cidades atendidas (Carapicuíba, Barueri, Osasco, Santana de Parnaíba e Cotia).
- **Metatags Sociais:** Open Graph e Twitter Cards completos.
- **Sitemap & Robots:** Endpoints nativos `/sitemap.xml` e `/robots.txt` criados e testados.
- **Next.js 14 App Router:** Compilação estática (`SSG`) garantindo First Load JS de apenas ~109 kB e velocidade máxima de carregamento.
