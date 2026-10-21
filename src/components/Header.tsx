import React, { useState, useEffect } from 'react';
import { LotusLogo } from './LotusLogo.tsx';
import { WHATSAPP_NUMBER } from '../data/venueData.ts';
import { MessageCircle, Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappDirectUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    'Olá Konccy! Acessei o site do Espaço Inovação e gostaria de saber sobre disponibilidade e valores para um evento.'
  )}`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FAF7F2]/95 backdrop-blur-md shadow-sm border-b border-[#C5A059]/20 py-3'
          : 'bg-[#FAF7F2]/80 backdrop-blur-sm border-b border-[#C5A059]/15 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Single element brand wordmark */}
          <a
            href="#"
            className="flex items-center gap-2.5 text-slate-900 group whitespace-nowrap shrink-0"
            aria-label="Espaço Inovação Início"
          >
            <LotusLogo size={32} />
            <div className="flex flex-col">
              <span className="font-serif-luxury text-xl sm:text-2xl font-bold tracking-wider text-[#0C251C] leading-none">
                ESPAÇO INOVAÇÃO
              </span>
            </div>
          </a>

          {/* Zone 2: 4-5 single-line clean nav links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#1E2922]">
            <a
              href="#ambientes"
              className="hover:text-[#C5A059] transition-colors whitespace-nowrap shrink-0"
            >
              Ambientes
            </a>
            <a
              href="#estrutura"
              className="hover:text-[#C5A059] transition-colors whitespace-nowrap shrink-0"
            >
              Estrutura
            </a>
            <a
              href="#galeria"
              className="hover:text-[#C5A059] transition-colors whitespace-nowrap shrink-0"
            >
              Galeria
            </a>
            <a
              href="#simulador"
              className="hover:text-[#C5A059] transition-colors whitespace-nowrap shrink-0 font-semibold text-[#0C251C]"
            >
              Simulador
            </a>
            <a
              href="#localizacao"
              className="hover:text-[#C5A059] transition-colors whitespace-nowrap shrink-0"
            >
              Localização
            </a>
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href={whatsappDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#0C251C] hover:bg-[#133829] border border-[#C5A059]/40 rounded-lg transition-colors whitespace-nowrap shrink-0 shadow-sm"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#E5C378]" />
              <span>Reservar no WhatsApp</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#0C251C] hover:text-[#C5A059] focus:outline-none"
              aria-label="Abrir menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 pb-4 border-t border-[#C5A059]/20 flex flex-col gap-3">
            <a
              href="#ambientes"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-[#0C251C] hover:text-[#C5A059] py-1"
            >
              Ambientes
            </a>
            <a
              href="#estrutura"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-[#0C251C] hover:text-[#C5A059] py-1"
            >
              Estrutura
            </a>
            <a
              href="#galeria"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-[#0C251C] hover:text-[#C5A059] py-1"
            >
              Galeria de Fotos
            </a>
            <a
              href="#simulador"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-semibold text-[#0C251C] hover:text-[#C5A059] py-1"
            >
              Simulador de Evento
            </a>
            <a
              href="#localizacao"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-[#0C251C] hover:text-[#C5A059] py-1"
            >
              Localização & Mapa
            </a>
            <a
              href={whatsappDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#0C251C] rounded-lg border border-[#C5A059]/40"
            >
              <MessageCircle className="w-4 h-4 text-[#E5C378]" />
              <span>Chamar no WhatsApp</span>
            </a>
          </div>
        )}
      </div>
    </header>
  );
};
