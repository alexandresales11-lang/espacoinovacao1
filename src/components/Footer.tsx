import React from 'react';
import { LotusLogo } from './LotusLogo.tsx';
import { VENUE_INFO, WHATSAPP_DISPLAY, WHATSAPP_NUMBER } from '../data/venueData.ts';
import { MapPin, Phone, MessageCircle, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    'Olá Konccy! Estive navegando pelo site do Espaço Inovação e gostaria de informações.'
  )}`;

  return (
    <footer className="bg-[#081711] text-slate-300 border-t border-[#C5A059]/30 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-2.5 mb-4">
              <LotusLogo size={36} />
              <div>
                <span className="font-serif-luxury text-xl font-bold tracking-wider text-white block">
                  ESPAÇO INOVAÇÃO
                </span>
                <span className="text-[11px] text-[#C5A059] tracking-widest uppercase">
                  Jacobina · Bahia
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 font-sans-ui max-w-sm leading-relaxed mb-6">
              O novo conceito em espaço de festas e eventos em Jacobina. Salão climatizado, área externa com piscina e capacidade estruturada para mais de 300 convidados.
            </p>

            <p className="font-script-luxury text-2xl text-[#E5C378]">
              {VENUE_INFO.tagline}
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3 flex flex-col">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E5C378] mb-4">
              Navegação
            </span>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <a href="#ambientes" className="hover:text-[#E5C378] transition-colors">
                  Ambientes & Piscina
                </a>
              </li>
              <li>
                <a href="#estrutura" className="hover:text-[#E5C378] transition-colors">
                  Estrutura & Capacidade
                </a>
              </li>
              <li>
                <a href="#galeria" className="hover:text-[#E5C378] transition-colors">
                  Galeria de Fotos Reais
                </a>
              </li>
              <li>
                <a href="#simulador" className="hover:text-[#E5C378] transition-colors">
                  Simulador de Orçamento
                </a>
              </li>
              <li>
                <a href="#localizacao" className="hover:text-[#E5C378] transition-colors">
                  Localização no Catuaba
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Contact */}
          <div className="lg:col-span-4 flex flex-col">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E5C378] mb-4">
              Contato & Visitas
            </span>
            <div className="space-y-3 text-xs text-slate-300 mb-6">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <span>{VENUE_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>{WHATSAPP_DISPLAY} · Konccy</span>
              </div>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-[#0C251C] bg-[#E5C378] hover:bg-[#D4AF37] rounded-xl transition-colors shadow-sm"
            >
              <MessageCircle className="w-4 h-4 text-[#0C251C]" />
              <span>Chamar no WhatsApp ({WHATSAPP_DISPLAY})</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Espaço Inovação. Todos os direitos reservados. Jacobina - BA.</p>
          <div className="flex items-center gap-1 text-slate-400">
            <span>Criado com carinho para momentos memoráveis</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
