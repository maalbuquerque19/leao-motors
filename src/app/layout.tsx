import type { Metadata, Viewport } from "next";
import "./globals.css";
import { COMPANY_INFO } from "@/data/siteData";

export const viewport: Viewport = {
  themeColor: "#D71920",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://leaomotors.com.br"),
  title: "Troca de Óleo de Câmbio Automático em Carapicuíba | Leão Motors",
  description:
    "Especialistas em troca de óleo de câmbio automático e troca de óleo de motor em Carapicuíba - SP. Atendimento técnico especializado na Av. Dep. Emílio Carlos, 628 - Vila Caldas. Solicite orçamento pelo WhatsApp!",
  keywords: [
    "Troca de óleo de câmbio automático em Carapicuíba",
    "Troca de óleo de motor em Carapicuíba",
    "Troca de óleo de câmbio automático",
    "Troca de óleo de transmissão automática",
    "Troca de óleo automotivo Carapicuíba",
    "Troca de óleo Vila Caldas",
    "Troca de óleo de carro Carapicuíba",
    "Serviço de troca de óleo automotivo",
    "Leão Motors Carapicuíba",
  ],
  authors: [{ name: "Leão Motors Lubrificantes" }],
  creator: "Leão Motors",
  publisher: "Leão Motors",
  alternates: {
    canonical: "https://leaomotors.com.br",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://leaomotors.com.br",
    siteName: "Leão Motors Lubrificantes",
    title: "Troca de Óleo de Câmbio Automático em Carapicuíba | Leão Motors",
    description:
      "Troca de óleo de câmbio automático e motor com rigor técnico em Carapicuíba. Cuidado especializado e preventivo para seu veículo.",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Leão Motors - Oficina Especializada em Câmbio Automático e Óleo em Carapicuíba",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Troca de Óleo de Câmbio Automático em Carapicuíba | Leão Motors",
    description:
      "Serviço especializado de troca de óleo de câmbio automático e motor em Carapicuíba - SP.",
    images: ["/images/hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: "Leão Motors Lubrificantes",
  alternateName: "Leão Motors",
  description:
    "Centro especializado em troca de fluido de transmissão automática e troca de óleo de motor com rigor técnico em Carapicuíba, SP.",
  url: "https://leaomotors.com.br",
  telephone: "+55-11-97671-5552",
  priceRange: "$$",
  image: "https://leaomotors.com.br/images/hero.jpg",
  logo: "https://leaomotors.com.br/images/logo.jpeg",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Av. Dep. Emílio Carlos, 628",
    addressLocality: "Carapicuíba",
    addressRegion: "SP",
    postalCode: "06310-160",
    addressCountry: "BR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -23.5238,
    longitude: -46.8365,
  },
  areaServed: [
    {
      "@type": "City",
      name: "Carapicuíba",
    },
    {
      "@type": "City",
      name: "Barueri",
    },
    {
      "@type": "City",
      name: "Osasco",
    },
    {
      "@type": "City",
      name: "Santana de Parnaíba",
    },
    {
      "@type": "City",
      name: "Cotia",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Serviços de Lubrificação Automotiva",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Troca de Óleo de Câmbio Automático",
          description: "Substituição do fluido de transmissão automática conforme especificações da montadora.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Troca de Óleo de Motor",
          description: "Troca de óleo lubrificante de motor com seleção de viscosidade e especificações recomendadas.",
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="icon" href="/images/logo.jpeg" />
      </head>
      <body className="antialiased min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
