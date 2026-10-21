import React, { useState } from 'react';
import { Waves, Wind, Armchair, Bath, Trees, ArrowRight, MessageCircle } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../data/venueData.ts';

export const AmbientesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'piscina' | 'salao' | 'coberta' | 'banheiros'>('piscina');

  const ambientes = {
    piscina: {
      title: 'Piscina & Área Externa',
      subtitle: 'Sol, ar fresco e integração com o verde tropical',
      description:
        'Uma piscina límpida cercada por área para mesas de apoio, coqueiros e espaço para montagem de tendas ou palco para música ao vivo. O ambiente favorito para celebrações diurnas e noites agradáveis em Jacobina.',
      image: 'https://i.imgur.com/yw4NkBg.jpeg',
      features: [
        'Piscina com área para adultos e crianças',
        'Cenário fotogênico para fotos ao ar livre',
        'Integração direta com a área coberta',
      ],
    },
    salao: {
      title: 'Salão Fechado Climatizado',
      subtitle: 'Conforto acústico e térmico para qualquer estação',
      description:
        'Salão nobre com ar-condicionado de alta capacidade, acabamento refinado com portas de vidro, piso polido e iluminação aconchegante. O espaço ideal para a mesa do bolo, recepção formal, valsa e cerimônia.',
      image: 'https://i.imgur.com/sY0EA6y.jpeg',
      features: [
        'Totalmente climatizado com ar-condicionado',
        'Portas de vidro com iluminação natural',
        'Piso elegante e acabamento de alto padrão',
      ],
    },
    coberta: {
      title: 'Área Coberta com Churrasqueira',
      subtitle: 'Amplo espaço ventilado e protegido do sol e chuva',
      description:
        'Galpão espaçoso com pé-direito alto, estrutura em madeira e telhado amplo. Já equipado com mesas e cadeiras completas, balcão gourmet, churrasqueira e acesso rápido à cozinha.',
      image: 'https://i.imgur.com/xRR2VAl.jpeg',
      features: [
        'Mobiliário completo de mesas e cadeiras incluso',
        'Churrasqueira e bancada de apoio gourmet',
        'Espaço amplo para buffet e pista de dança',
      ],
    },
    banheiros: {
      title: 'Banheiros com Lavabo Requintado',
      subtitle: 'Higiene, granito e acessibilidade para sua família',
      description:
        'Sanitários individuais masculino e feminino projetados com bancadas em granito, espelhos amplos, louças sanitárias de primeira linha e ambiente com acessibilidade e suporte para crianças.',
      image: 'https://i.imgur.com/R9VrRtc.jpeg',
      features: [
        'Divisão masculino e feminino com cabines privativas',
        'Bancada em pedra granito e torneiras modernas',
        'Acessibilidade e conforto para todas as idades',
      ],
    },
  };

  const current = ambientes[activeTab];

  return (
    <section id="ambientes" className="py-20 md:py-28 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-[0.2em] text-[#C5A059] font-semibold block mb-3">
            Ambientes Projetados para Encantar
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0C251C] mb-4">
            Espaços Integrados e Versáteis
          </h2>
          <p className="text-[#46574D] text-sm sm:text-base font-sans-ui max-w-2xl mx-auto leading-relaxed">
            Seja um casamento requintado, um aniversário de 15 anos ou uma descontraída festa com
            piscina, nossa arquitetura oferece o ambiente perfeito para cada momento da festa.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex justify-center mb-10 overflow-x-auto pb-2">
          <div className="inline-flex p-1.5 bg-[#0C251C] rounded-2xl border border-[#C5A059]/30">
            <button
              onClick={() => setActiveTab('piscina')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                activeTab === 'piscina'
                  ? 'bg-[#E5C378] text-[#0C251C] shadow-sm'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <Waves className="w-4 h-4" />
              <span>Piscina & Lazer</span>
            </button>

            <button
              onClick={() => setActiveTab('salao')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                activeTab === 'salao'
                  ? 'bg-[#E5C378] text-[#0C251C] shadow-sm'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <Wind className="w-4 h-4" />
              <span>Salão Climatizado</span>
            </button>

            <button
              onClick={() => setActiveTab('coberta')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                activeTab === 'coberta'
                  ? 'bg-[#E5C378] text-[#0C251C] shadow-sm'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <Armchair className="w-4 h-4" />
              <span>Área Coberta & Mesas</span>
            </button>

            <button
              onClick={() => setActiveTab('banheiros')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                activeTab === 'banheiros'
                  ? 'bg-[#E5C378] text-[#0C251C] shadow-sm'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <Bath className="w-4 h-4" />
              <span>Banheiros & Lavabo</span>
            </button>
          </div>
        </div>

        {/* Dynamic Display Panel */}
        <div className="bg-white rounded-3xl border border-[#C5A059]/30 overflow-hidden shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Visual Photo */}
            <div className="lg:col-span-7 relative min-h-[360px] lg:min-h-[460px] bg-[#0C251C]">
              <img
                src={current.image}
                alt={current.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://i.imgur.com/yw4NkBg.jpeg';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:hidden" />
            </div>

            {/* Content Details */}
            <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#C5A059] font-bold block mb-2">
                  Destaque do Ambiente
                </span>
                <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#0C251C] mb-2 leading-tight">
                  {current.title}
                </h3>
                <p className="text-xs text-[#C5A059] font-medium mb-4">
                  {current.subtitle}
                </p>

                <p className="text-sm text-[#46574D] font-sans-ui leading-relaxed mb-6">
                  {current.description}
                </p>

                <div className="space-y-2.5 mb-8">
                  {current.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs font-medium text-[#0C251C]">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#C5A059] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                <a
                  href="#simulador"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#0C251C] hover:bg-[#133829] rounded-xl border border-[#C5A059]/40 transition-colors shadow-sm"
                >
                  <span>Incluir na Minha Simulação</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#E5C378]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
