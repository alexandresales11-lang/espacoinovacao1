import React from 'react';
import { VENUE_INFO, WHATSAPP_NUMBER } from '../data/venueData.ts';
import { Heart, Sparkles, MessageCircle, CheckCircle2 } from 'lucide-react';

export const HostSection: React.FC = () => {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    'Olá Konccy! Gostei muito de conhecer o Espaço Inovação pelo site e gostaria de agendar uma visita com você para conhecer o local.'
  )}`;

  return (
    <section className="py-20 md:py-28 bg-[#FAF7F2] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-[#C5A059]/30 p-8 sm:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Host Photo & Badge */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative">
                {/* Decorative border frame */}
                <div className="absolute -inset-2.5 rounded-3xl border-2 border-dashed border-[#C5A059]/40 pointer-events-none" />
                <div className="relative rounded-2xl overflow-hidden aspect-[3/4] w-64 sm:w-72 shadow-xl bg-[#0C251C]">
                  <img
                    src={VENUE_INFO.hostPhoto}
                    alt="Konccy - Fundadora e Gestora do Espaço Inovação"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://i.imgur.com/MOQduAR.jpeg';
                    }}
                  />
                  <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-[#0C251C] via-[#0C251C]/70 to-transparent text-white text-center">
                    <span className="font-serif-luxury text-xl font-bold block">
                      {VENUE_INFO.hostName}
                    </span>
                    <span className="text-xs text-[#E5C378] tracking-wider uppercase font-medium">
                      Anfitriã & Gestora
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Host Story & Message */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#C5A059] font-semibold mb-3">
                <Heart className="w-4 h-4 text-[#C5A059] fill-[#C5A059]/20" />
                <span>Atendimento Humano e Exclusivo</span>
              </div>

              <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#0C251C] mb-4 leading-tight">
                "Cuidamos de cada detalhe para que seu dia seja impecável."
              </h2>

              <p className="text-[#46574D] text-sm sm:text-base leading-relaxed mb-6 font-sans-ui">
                Olá! Sou a <strong>Konccy</strong>, dona e anfitriã do Espaço Inovação. Criei este
                espaço com o propósito de oferecer em Jacobina um ambiente onde elegância e aconchego
                se encontram com a natureza.
              </p>

              <p className="text-[#46574D] text-sm sm:text-base leading-relaxed mb-8 font-sans-ui">
                Seja para o sonho de um casamento, a emoção de uma valsa de 15 anos, um aniversário
                com piscina ou a confraternização da sua equipe, nosso compromisso é garantir que você
                se preocupe apenas em comemorar. Nós garantimos o salão climatizado, mesas, cadeiras,
                cozinha e toda a estrutura pronta.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full mb-8">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#0C251C]">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
                  <span>Flexibilidade de horários e visitas prévias</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#0C251C]">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
                  <span>Liberdade para seus fornecedores</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#0C251C]">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
                  <span>Suporte direto e atencioso via WhatsApp</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#0C251C]">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
                  <span>Contrato transparente e sem surpresas</span>
                </div>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-[#0C251C] hover:bg-[#133829] rounded-xl border border-[#C5A059]/50 transition-colors shadow-sm"
              >
                <MessageCircle className="w-4 h-4 text-[#E5C378]" />
                <span>Agendar uma Visita Presencial com Konccy</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
