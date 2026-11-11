import type { Metadata, Viewport } from "next";
import "./globals.css";
import { COMPANY_INFO } from "@/data/siteData";

export const viewport: Viewport = {
  themeColor: "#D71920",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://leaomotorslubrificantes.com.br"),
  title: "Troca de Óleo de Câmbio Automático em Carapicuíba | Leão Motors (40 Anos)",
  description:
    "Troca de óleo de câmbio automático por diálise (a partir de R$ 690) e óleo de motor (a partir de R$ 189) em Carapicuíba - SP. 40 anos de tradição, Leva e Traz grátis até 3km e fluidos Motul, Mobil, Castrol e Petronas. Seg a Sex 08h-18h | Sáb 08h-13h.",
  keywords: [
    "Troca de óleo de câmbio automático em Carapicuíba",
    "Troca de óleo de câmbio por diálise Carapicuíba",
    "Troca de óleo de motor em Carapicuíba",
    "Troca de óleo câmbio CVT Aisin DSG Carapicuíba",
    "Troca de óleo de transmissão automática",
    "Troca de óleo automotivo Carapicuíba",
    "Troca de óleo Vila Caldas",
    "Leão Motors Lubrificantes Carapicuíba",
  ],
  authors: [{ name: "Leão Motors Lubrificantes" }],
  creator: "Leão Motors",
  publisher: "Leão Motors",
  alternates: {
    canonical: "https://leaomotorslubrificantes.com.br",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://leaomotorslubrificantes.com.br",
    siteName: "Leão Motors Lubrificantes",
    title: "Troca de Óleo de Câmbio Automático por Diálise em Carapicuíba | Leão Motors",
    description:
      "40 anos de experiência em Carapicuíba. Troca de fluido de câmbio automático com máquina de diálise 100%, óleo de motor homologado e Sistema Leva e Traz até 3km.",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Leão Motors Lubrificantes - Especialista em Câmbio Automático e Óleo de Motor em Carapicuíba",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Troca de Óleo de Câmbio Automático em Carapicuíba | Leão Motors",
    description:
      "40 anos de tradição automotiva. Troca de óleo de câmbio por diálise e motor em Carapicuíba - SP com Leva e Traz até 3km.",
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
    "Oficina especializada com 40 anos de experiência em troca de óleo de câmbio automático por máquina de diálise (CVT, Aisin, DSG, ZF, GM) e troca de óleo de motor em Carapicuíba, SP.",
  url: "https://leaomotorslubrificantes.com.br",
  telephone: "+55-11-97671-5552",
  priceRange: "R$ 189 - R$ 1.800",
  image: "https://leaomotorslubrificantes.com.br/images/hero.jpg",
  logo: "https://leaomotorslubrificantes.com.br/images/logo.jpeg",
  sameAs: [
    COMPANY_INFO.instagramUrl,
    COMPANY_INFO.googleReviewsUrl,
  ],
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
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "08:00",
      closes: "13:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    bestRating: "5",
    ratingCount: "184",
  },
  areaServed: [
    { "@type": "City", name: "Carapicuíba" },
    { "@type": "City", name: "Barueri" },
    { "@type": "City", name: "Osasco" },
    { "@type": "City", name: "Jandira" },
    { "@type": "City", name: "Santana de Parnaíba" },
    { "@type": "City", name: "Cotia" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Serviços de Lubrificação e Transmissão Automática",
    itemListElement: [
      {
        "@type": "Offer",
        priceCurrency: "BRL",
        price: "690.00",
        itemOffered: {
          "@type": "Service",
          name: "Troca de Óleo de Câmbio Automático por Diálise",
          description:
            "Substituição de até 100% do fluido de transmissão automática (CVT, Aisin, DSG, ZF, Hydramatic) com máquina computadorizada e fluidos homologados Motul, Mobil, Castrol, Petronas, Valvoline e Febi.",
        },
      },
      {
        "@type": "Offer",
        priceCurrency: "BRL",
        price: "189.00",
        itemOffered: {
          "@type": "Service",
          name: "Troca de Óleo de Motor e Filtros",
          description:
            "Troca rápida em até 40 minutos com lubrificantes 100% sintéticos e semissintéticos nas normas API SP, Dexos, VW, Fiat e ACEA.",
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
