"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Menu, X, MapPin } from "lucide-react";
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
    { label: "Serviços", href: "#servicos" },
    { label: "Sobre Nós", href: "#sobre" },
    { label: "Diferenciais", href: "#diferenciais" },
    { label: "Dúvidas", href: "#duvidas" },
    { label: "Localização", href: "#localizacao" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md border-b border-brand-gray-light py-2"
          : "bg-white/95 backdrop-blur-md border-b border-brand-gray-light/60 py-3"
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
          <nav className="hidden md:flex items-center space-x-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-brand-graphite hover:text-brand-red text-sm font-semibold transition-colors tracking-wide"
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
          <div className="flex items-center md:hidden gap-2">
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
        <div className="md:hidden bg-white border-b border-brand-gray-light shadow-xl px-4 pt-3 pb-6 animate-fadeIn">
          <nav className="flex flex-col space-y-3">
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
            <div className="pt-2">
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
            <div className="text-xs text-center text-gray-500 pt-2 border-t border-gray-100 flex items-center justify-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-brand-red" />
              Av. Dep. Emílio Carlos, 628 - Carapicuíba
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
