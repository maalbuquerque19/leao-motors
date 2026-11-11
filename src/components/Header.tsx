"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Menu, X, MapPin, Clock, Car, Phone, Instagram } from "lucide-react";
import { COMPANY_INFO, WHATSAPP_MESSAGES, getWhatsAppUrl } from "@/data/siteData";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Início", href: "#inicio" },
    { label: "Serviços & Preços", href: "#servicos" },
    { label: "Método Diálise", href: "#metodo-dialise" },
    { label: "Avaliações", href: "#avaliacoes" },
    { label: "Sobre (40 Anos)", href: "#sobre" },
    { label: "Dúvidas", href: "#duvidas" },
    { label: "Localização", href: "#localizacao" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Info Bar: Horário, Leva e Traz, Telefone e Instagram */}
      <div className="bg-brand-dark text-white text-[11px] sm:text-xs border-b border-white/10 py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5 font-semibold text-gray-200">
              <Clock className="w-3.5 h-3.5 text-brand-red flex-shrink-0" />
              <span>{COMPANY_INFO.businessHours}</span>
            </span>
            <span className="hidden lg:inline-flex items-center gap-1.5 font-semibold text-gray-300">
              <MapPin className="w-3.5 h-3.5 text-brand-red flex-shrink-0" />
              <span>Av. Dep. Emílio Carlos, 628 - Carapicuíba</span>
            </span>
          </div>

          <div className="flex items-center gap-3 sm:gap-4 ml-auto">
            <a
              href={getWhatsAppUrl(WHATSAPP_MESSAGES.levaETraz)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-brand-red/20 border border-brand-red/40 text-white px-2.5 py-0.5 rounded-full font-bold hover:bg-brand-red transition-colors"
            >
              <Car className="w-3.5 h-3.5 text-brand-red" />
              <span>Leva e Traz Grátis até 3km</span>
            </a>

            <a
              href={`tel:${COMPANY_INFO.phoneTel}`}
              className="hidden sm:inline-flex items-center gap-1 font-bold text-white hover:text-brand-red transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-brand-red" />
              <span>{COMPANY_INFO.phone}</span>
            </a>

            <a
              href={COMPANY_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram da Leão Motors"
              className="inline-flex items-center gap-1 text-gray-300 hover:text-white transition-colors"
            >
              <Instagram className="w-3.5 h-3.5 text-brand-red" />
              <span className="hidden xl:inline">{COMPANY_INFO.instagramHandle}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div
        className={`transition-all duration-300 ${
          isScrolled
            ? "bg-white shadow-md border-b border-brand-gray-light py-2"
            : "bg-white/95 backdrop-blur-md border-b border-brand-gray-light/60 py-2.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16">
            {/* Logo */}
            <Link href="#inicio" className="flex items-center gap-3 group">
              <div className="relative h-12 w-28 sm:h-14 sm:w-32 flex items-center">
                <Image
                  src="/images/logo-clean.png"
                  alt="Leão Motors"
                  fill
                  priority
                  className="object-contain object-left"
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-5 xl:space-x-6">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-brand-graphite hover:text-brand-red text-xs xl:text-sm font-bold transition-colors tracking-wide"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* WhatsApp CTA Button */}
            <div className="hidden md:flex items-center">
              <a
                href={getWhatsAppUrl(WHATSAPP_MESSAGES.geral)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-red hover:shadow-red-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                id="header-cta-whatsapp"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Agendar pelo WhatsApp</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center lg:hidden gap-2">
              <a
                href={getWhatsAppUrl(WHATSAPP_MESSAGES.geral)}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-brand-red text-white rounded-full shadow-sm"
                aria-label="Falar no WhatsApp"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
              </a>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                type="button"
                className="p-2 text-brand-graphite hover:text-brand-red focus:outline-none"
                aria-label="Abrir menu"
                id="mobile-menu-toggle"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-brand-gray-light shadow-xl px-4 pt-3 pb-6 animate-fadeIn">
            <nav className="flex flex-col space-y-2.5">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-brand-graphite hover:text-brand-red hover:bg-brand-ice px-3 py-2 rounded-lg font-semibold text-base transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2 space-y-2">
                <a
                  href={getWhatsAppUrl(WHATSAPP_MESSAGES.geral)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full bg-brand-red hover:bg-brand-red-dark text-white px-5 py-3 rounded-lg text-center font-bold shadow-red"
                >
                  <MessageCircle className="w-5 h-5 fill-white" />
                  Agendar pelo WhatsApp
                </a>
              </div>
              <div className="text-xs text-center text-gray-600 pt-2 border-t border-gray-100 space-y-1">
                <p className="flex items-center justify-center gap-1 font-semibold">
                  <Clock className="w-3.5 h-3.5 text-brand-red" />
                  {COMPANY_INFO.businessHours}
                </p>
                <p className="flex items-center justify-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-brand-red" />
                  Av. Dep. Emílio Carlos, 628 - Carapicuíba
                </p>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
