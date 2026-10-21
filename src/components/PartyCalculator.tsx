import React, { useState } from 'react';
import { WHATSAPP_NUMBER } from '../data/venueData.ts';
import { Calculator, Utensils, Beer, GlassWater, Armchair, Share2, Sparkles } from 'lucide-react';

export const PartyCalculator: React.FC = () => {
  const [people, setPeople] = useState<number>(100);
  const [durationHours, setDurationHours] = useState<number>(6);
  const [hasBeer, setHasBeer] = useState<boolean>(true);

  // Estimative calculations
  const tablesCount = Math.ceil(people / 4); // 4 chairs per table
  const chairsCount = people;
  const meatKg = Math.round((people * 0.45 * 10) / 10); // 450g per person for barbecue
  const sodaLiters = Math.round(people * 0.7); // 700ml per person
  const waterLiters = Math.round(people * 0.5); // 500ml per person
  const beerCans = hasBeer ? Math.round(people * 0.75 * 4) : 0; // ~4 cans per adult drinker
  const waitersRecommended = Math.max(1, Math.ceil(people / 35));

  const handleSendToWhatsApp = () => {
    const text = `📊 *PLANEJAMENTO CALCULADO - ESPAÇO INOVAÇÃO* 📊

Olá Konccy! Usei a Calculadora do Espaço Inovação para planejar minha festa:

👥 *Convidados:* ${people} pessoas
⏰ *Duração Prevista:* ${durationHours} horas
🪑 *Mesas Necessárias:* ~${tablesCount} mesas (inclusas no espaço!)
🥩 *Estimativa Buffet/Churrasco:* ~${meatKg} kg
🥤 *Refrigerantes/Sucos:* ~${sodaLiters} litros
💧 *Água Mineral:* ~${waterLiters} litros
${hasBeer ? `🍺 *Cerveja Estimada:* ~${beerCans} latas` : '🚫 *Evento sem bebidas alcoólicas*'}
👨‍🍳 *Apoio / Garçons Recomendados:* ~${waitersRecommended} profissionais

Gostaria de agendar uma visita para ver como dispor essas mesas no salão e na área da piscina!`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-16 md:py-20 bg-[#FAF7F2] border-y border-[#C5A059]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#C5A059] font-semibold mb-2">
            <Calculator className="w-4 h-4 text-[#C5A059]" />
            <span>Ferramenta de Apoio Gratuita</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#0C251C] mb-3">
            Calculadora Prática para sua Festa
          </h2>
          <p className="text-sm sm:text-base text-[#46574D]">
            Planeje bebidas, buffet e disposição das mesas do Espaço Inovação em segundos.
            Zero complicação para o anfitrião!
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-[#C5A059]/30 p-6 sm:p-8 shadow-sm">
          {/* Sliders */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 pb-8 border-b border-slate-100">
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs uppercase tracking-wider text-[#0C251C] font-bold">
                  Convidados
                </span>
                <span className="text-base font-bold text-[#C5A059] font-mono">{people}</span>
              </div>
              <input
                type="range"
                min="20"
                max="320"
                step="5"
                value={people}
                onChange={(e) => setPeople(Number(e.target.value))}
                className="w-full h-2 bg-[#FAF7F2] rounded-lg appearance-none cursor-pointer accent-[#C5A059]"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs uppercase tracking-wider text-[#0C251C] font-bold">
                  Duração da Festa
                </span>
                <span className="text-base font-bold text-[#C5A059] font-mono">
                  {durationHours} horas
                </span>
              </div>
              <input
                type="range"
                min="3"
                max="12"
                step="1"
                value={durationHours}
                onChange={(e) => setDurationHours(Number(e.target.value))}
                className="w-full h-2 bg-[#FAF7F2] rounded-lg appearance-none cursor-pointer accent-[#C5A059]"
              />
            </div>

            <div className="flex flex-col justify-end">
              <label className="flex items-center gap-2.5 p-2.5 bg-[#FAF7F2] rounded-xl border border-[#C5A059]/20 cursor-pointer text-xs font-semibold text-[#0C251C]">
                <input
                  type="checkbox"
                  checked={hasBeer}
                  onChange={(e) => setHasBeer(e.target.checked)}
                  className="rounded text-[#C5A059] focus:ring-0"
                />
                <span>Incluir estimativa de cerveja</span>
              </label>
            </div>
          </div>

          {/* Results Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#C5A059]/20 flex flex-col items-center text-center">
              <Armchair className="w-5 h-5 text-[#C5A059] mb-1.5" />
              <span className="text-[11px] text-[#5C6B62] uppercase tracking-wider font-semibold">
                Mesas Inclusas
              </span>
              <span className="text-2xl font-serif-luxury font-bold text-[#0C251C] my-0.5">
                ~{tablesCount}
              </span>
              <span className="text-[10px] text-[#5C6B62]">(4 pessoas por mesa)</span>
            </div>

            <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#C5A059]/20 flex flex-col items-center text-center">
              <GlassWater className="w-5 h-5 text-[#C5A059] mb-1.5" />
              <span className="text-[11px] text-[#5C6B62] uppercase tracking-wider font-semibold">
                Refrigerante & Suco
              </span>
              <span className="text-2xl font-serif-luxury font-bold text-[#0C251C] my-0.5">
                ~{sodaLiters} L
              </span>
              <span className="text-[10px] text-[#5C6B62]">+ {waterLiters}L de água</span>
            </div>

            <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#C5A059]/20 flex flex-col items-center text-center">
              <Utensils className="w-5 h-5 text-[#C5A059] mb-1.5" />
              <span className="text-[11px] text-[#5C6B62] uppercase tracking-wider font-semibold">
                Carne / Buffet
              </span>
              <span className="text-2xl font-serif-luxury font-bold text-[#0C251C] my-0.5">
                ~{meatKg} kg
              </span>
              <span className="text-[10px] text-[#5C6B62]">Cozinha pronta p/ buffet</span>
            </div>

            <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#C5A059]/20 flex flex-col items-center text-center">
              <Beer className="w-5 h-5 text-[#C5A059] mb-1.5" />
              <span className="text-[11px] text-[#5C6B62] uppercase tracking-wider font-semibold">
                {hasBeer ? 'Cerveja Estimada' : 'Sem Álcool'}
              </span>
              <span className="text-2xl font-serif-luxury font-bold text-[#0C251C] my-0.5">
                {hasBeer ? `~${beerCans}` : '0'}
              </span>
              <span className="text-[10px] text-[#5C6B62]">
                {hasBeer ? 'latas geladas' : 'evento sem álcool'}
              </span>
            </div>
          </div>

          {/* Action Row */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-100">
            <div className="flex items-center gap-2 text-xs text-[#5C6B62]">
              <Sparkles className="w-4 h-4 text-[#C5A059] shrink-0" />
              <span>O Espaço Inovação já conta com freezer, pias e churrasqueira para seu evento.</span>
            </div>

            <button
              onClick={handleSendToWhatsApp}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#0C251C] hover:bg-[#133829] rounded-xl border border-[#C5A059]/50 transition-colors shadow-sm cursor-pointer whitespace-nowrap"
            >
              <Share2 className="w-3.5 h-3.5 text-[#E5C378]" />
              <span>Enviar esse Cálculo no WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
