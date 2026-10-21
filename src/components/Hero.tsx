import React from 'react';
import { LotusLogo } from './LotusLogo.tsx';
import { WHATSAPP_NUMBER } from '../data/venueData.ts';
import {
  Users,
  Sparkles,
  TreePine,
  Wind,
  Armchair,
  ChefHat,
  Bath,
  ArrowRight,
  MessageCircle,
} from 'lucide-react';

export const Hero: React.FC = () => {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    'Olá Konccy! Estou no site do Espaço Inovação e gostaria de verificar disponibilidade de datas para meu evento.'
  )}`;

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-[#FAF7F2]">
      {/* Subtle warm glow background matching the reference flyer */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#F3E6CD]/60 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Brand Message & Key Callouts */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Top Brand Tag with Lotus */}
            <div className="flex items-center gap-3 mb-4">
              <LotusLogo size={36} />
              <div className="flex flex-col">
                <span className="text-xs uppercase tracking-[0.25em] text-[#C5A059] font-semibold">
                  Jacobina · Bahia
                </span>
                <span className="font-serif-luxury text-sm tracking-wider text-[#0C251C] font-semibold">
                  ESPAÇO PARA EVENTOS EXCLUSIVOS
                </span>
              </div>
            </div>

            {/* Signature Greeting Typography from Reference Image */}
            <div className="relative mb-3">
              <span className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0C251C] tracking-tight block">
                Sejam
              </span>
              <span className="font-script-luxury text-5xl sm:text-6xl lg:text-7xl text-[#C5A059] block -mt-3 sm:-mt-5 transform -rotate-1 origin-left">
                bem vindos
              </span>
            </div>

            {/* Subheading in clean serif caps */}
            <h1 className="font-serif-luxury text-lg sm:text-xl lg:text-2xl font-semibold tracking-wide text-[#0C251C] uppercase mb-5 leading-snug">
              Ao novo conceito em espaço de festa de Jacobina.
            </h1>

            <p className="text-base text-[#46574D] max-w-xl mb-8 leading-relaxed font-sans-ui">
              O cenário perfeito para celebrar casamentos, 15 anos, aniversários e confraternizações.
              Ambientes integrados com piscina, salão fechado climatizado e toda a infraestrutura pronta
              para encantar seus convidados.
            </p>

            {/* Iconic Capacity Hero Card - Exact design from Reference Flyer */}
            <div className="w-full max-w-lg mb-8 rounded-2xl p-5 border border-[#C5A059]/40 bg-gradient-to-r from-[#0C251C] via-[#102F23] to-[#0A1F17] text-white shadow-md relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#C5A059]/10 rounded-full blur-2xl" />
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-14 h-14 rounded-xl bg-[#FAF7F2]/10 border border-[#C5A059]/40 flex items-center justify-center shrink-0">
                  <Users className="w-7 h-7 text-[#E5C378]" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#E5C378] font-medium block">
                    Capacidade Estruturada
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-serif-luxury font-bold text-white tracking-tight">
                      300+
                    </span>
                    <span className="text-sm font-medium text-slate-200">
                      Convidados com total conforto
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <a
                href="#simulador"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold tracking-wide text-white bg-[#0C251C] hover:bg-[#153D2E] rounded-xl border border-[#C5A059]/50 transition-all shadow-sm group"
              >
                <span>Simular Meu Evento</span>
                <ArrowRight className="w-4 h-4 text-[#E5C378] group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold tracking-wide text-[#0C251C] bg-[#FAF7F2] hover:bg-white rounded-xl border border-[#C5A059] transition-all shadow-sm"
              >
                <MessageCircle className="w-4 h-4 text-[#C5A059]" />
                <span>Conversar com Konccy</span>
              </a>
            </div>
          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl p-2 bg-gradient-to-b from-[#C5A059]/40 to-[#0C251C]/20 shadow-xl">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-[#0C251C]">
                <img
                  src="https://i.imgur.com/yw4NkBg.jpeg"
                  alt="Área da piscina e natureza do Espaço Inovação em Jacobina"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  onError={(e) => {
                    // Fallback to second image if network blocks one
                    (e.target as HTMLImageElement).src = 'https://i.imgur.com/CKFRWj4.jpeg';
                  }}
                />

                {/* Overlaid Elegant Tag */}
                <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-[#0C251C] via-[#0C251C]/70 to-transparent">
                  <div className="flex items-center gap-2 text-xs text-[#E5C378] uppercase tracking-wider font-semibold mb-1">
                    <Sparkles className="w-3.5 h-3.5 text-[#E5C378]" />
                    <span>Lazer & Sofisticação</span>
                  </div>
                  <p className="text-white font-serif-luxury text-lg font-medium leading-snug">
                    Piscina privativa integrada à natureza exuberante
                  </p>
                </div>
              </div>

              {/* Floating Mini Highlight Card */}
              <div className="absolute -bottom-5 -left-5 bg-white/95 backdrop-blur-md rounded-xl p-3.5 border border-[#C5A059]/30 shadow-lg hidden sm:flex items-center gap-3 max-w-xs">
                <div className="w-10 h-10 rounded-lg bg-[#FAF7F2] border border-[#C5A059]/40 flex items-center justify-center shrink-0">
                  <Wind className="w-5 h-5 text-[#0C251C]" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#0C251C]">Salão Climatizado</div>
                  <div className="text-[11px] text-[#5C6B62]">Conforto para dias quentes</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 6 Quick Features Grid - Directly Matching the Flyer Bottom Matrix */}
        <div className="mt-14 pt-8 border-t border-[#C5A059]/25 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <div className="flex flex-col items-center text-center p-3 rounded-xl bg-white/60 border border-[#C5A059]/20 hover:border-[#C5A059]/50 transition-colors">
            <TreePine className="w-6 h-6 text-[#C5A059] mb-2" />
            <span className="text-xs font-semibold text-[#0C251C] leading-tight">
              Área Aberta com Natureza
            </span>
          </div>

          <div className="flex flex-col items-center text-center p-3 rounded-xl bg-white/60 border border-[#C5A059]/20 hover:border-[#C5A059]/50 transition-colors">
            <Wind className="w-6 h-6 text-[#C5A059] mb-2" />
            <span className="text-xs font-semibold text-[#0C251C] leading-tight">
              Salão Climatizado
            </span>
          </div>

          <div className="flex flex-col items-center text-center p-3 rounded-xl bg-white/60 border border-[#C5A059]/20 hover:border-[#C5A059]/50 transition-colors">
            <Users className="w-6 h-6 text-[#C5A059] mb-2" />
            <span className="text-xs font-semibold text-[#0C251C] leading-tight">
              Capacidade 300+ Pessoas
            </span>
          </div>

          <div className="flex flex-col items-center text-center p-3 rounded-xl bg-white/60 border border-[#C5A059]/20 hover:border-[#C5A059]/50 transition-colors">
            <Armchair className="w-6 h-6 text-[#C5A059] mb-2" />
            <span className="text-xs font-semibold text-[#0C251C] leading-tight">
              Cadeiras e Mesas
            </span>
          </div>

          <div className="flex flex-col items-center text-center p-3 rounded-xl bg-white/60 border border-[#C5A059]/20 hover:border-[#C5A059]/50 transition-colors">
            <ChefHat className="w-6 h-6 text-[#C5A059] mb-2" />
            <span className="text-xs font-semibold text-[#0C251C] leading-tight">
              Cozinha Equipada
            </span>
          </div>

          <div className="flex flex-col items-center text-center p-3 rounded-xl bg-white/60 border border-[#C5A059]/20 hover:border-[#C5A059]/50 transition-colors">
            <Bath className="w-6 h-6 text-[#C5A059] mb-2" />
            <span className="text-xs font-semibold text-[#0C251C] leading-tight">
              Banheiros com Lavabo
            </span>
          </div>
        </div>

        {/* Elegant Signature Ribbon from Flyer */}
        <div className="mt-8 text-center px-4 py-3 rounded-2xl bg-[#0C251C] text-[#E5C378] border border-[#C5A059]/40 max-w-2xl mx-auto shadow-sm">
          <p className="font-script-luxury text-2xl sm:text-3xl tracking-wide">
            Natureza, elegância e experiências inesquecíveis em um só lugar.
          </p>
        </div>
      </div>
    </section>
  );
};
