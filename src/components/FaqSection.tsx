import React, { useState } from 'react';
import { FAQS, WHATSAPP_NUMBER } from '../data/venueData.ts';
import { HelpCircle, ChevronDown, MessageCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    'Olá Konccy! Fiquei com uma dúvida sobre a locação do Espaço Inovação e gostaria de conversar com você.'
  )}`;

  return (
    <section className="py-20 md:py-28 bg-[#FAF7F2]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#C5A059] font-semibold mb-3">
            <HelpCircle className="w-4 h-4 text-[#C5A059]" />
            <span>Tire Suas Dúvidas</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#0C251C] mb-3">
            Perguntas Frequentes
          </h2>
          <p className="text-[#46574D] text-sm sm:text-base font-sans-ui">
            Respostas claras para você planejar seu evento com total segurança.
          </p>
        </div>

        <div className="space-y-3.5">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-[#C5A059]/25 overflow-hidden transition-all duration-200 shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <span className="font-serif-luxury text-lg font-bold text-[#0C251C]">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#C5A059] transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-sm text-[#46574D] leading-relaxed font-sans-ui border-t border-slate-50">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* WhatsApp Help Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-[#0C251C] text-white flex flex-col sm:flex-row items-center justify-between gap-4 border border-[#C5A059]/40 shadow-sm">
          <div>
            <h4 className="font-serif-luxury text-xl font-bold text-white mb-1">
              Tem alguma dúvida específica para seu evento?
            </h4>
            <p className="text-xs text-slate-300">
              A Konccy está online no WhatsApp para te ajudar a escolher o melhor formato.
            </p>
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 text-xs font-bold uppercase tracking-wider text-[#0C251C] bg-[#E5C378] hover:bg-[#D4AF37] rounded-xl transition-colors whitespace-nowrap shadow-sm"
          >
            <MessageCircle className="w-4 h-4 text-[#0C251C]" />
            <span>Falar no WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
