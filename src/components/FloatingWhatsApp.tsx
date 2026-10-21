import React from 'react';
import { WHATSAPP_NUMBER } from '../data/venueData.ts';
import { MessageCircle } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    'Olá Konccy! Gostaria de consultar valores e disponibilidade para um evento no Espaço Inovação.'
  )}`;

  return (
    <aside aria-label="Atendimento rápido via WhatsApp" className="fixed bottom-5 right-5 z-40">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com Konccy no WhatsApp"
        className="flex items-center gap-2.5 px-4 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 group border border-white/20"
      >
        <MessageCircle className="w-5 h-5 fill-white stroke-[#25D366]" />
        <span className="text-xs font-bold tracking-wide whitespace-nowrap">
          Falar com Konccy
        </span>
      </a>
    </aside>
  );
};
