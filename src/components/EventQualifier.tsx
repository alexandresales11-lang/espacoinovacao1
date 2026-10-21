import React, { useState } from 'react';
import { EVENT_TYPES, WHATSAPP_NUMBER, WHATSAPP_DISPLAY } from '../data/venueData.ts';
import {
  Users,
  Calendar,
  Clock,
  Sparkles,
  CheckCircle2,
  Send,
  HelpCircle,
  PartyPopper,
  ShieldCheck,
} from 'lucide-react';

export const EventQualifier: React.FC = () => {
  const [selectedEventType, setSelectedEventType] = useState<string>('casamento');
  const [guestCount, setGuestCount] = useState<number>(120);
  const [selectedSpaces, setSelectedSpaces] = useState<string[]>([
    'Salão Climatizado',
    'Área da Piscina',
    'Espaço Coberto com Churrasqueira',
  ]);
  const [preferredShift, setPreferredShift] = useState<string>('Dia Inteiro');
  const [eventDate, setEventDate] = useState<string>('');
  const [clientName, setClientName] = useState<string>('');
  const [clientPhone, setClientPhone] = useState<string>('');
  const [needBuffetHelp, setNeedBuffetHelp] = useState<boolean>(false);

  const toggleSpace = (space: string) => {
    if (selectedSpaces.includes(space)) {
      if (selectedSpaces.length > 1) {
        setSelectedSpaces(selectedSpaces.filter((s) => s !== space));
      }
    } else {
      setSelectedSpaces([...selectedSpaces, space]);
    }
  };

  // Build WhatsApp text
  const currentEventObj = EVENT_TYPES.find((e) => e.id === selectedEventType) || EVENT_TYPES[0];

  const handleSendToWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();

    const formattedDate = eventDate
      ? new Date(eventDate + 'T00:00:00').toLocaleDateString('pt-BR')
      : 'A definir com a Konccy';

    const message = `✨ *ORÇAMENTO & PRÉ-RESERVA - ESPAÇO INOVAÇÃO* ✨

Olá Konccy! Montei uma simulação pelo site do Espaço Inovação e gostaria de verificar disponibilidade e valores para meu evento:

👤 *Nome:* ${clientName || 'Cliente do Site'}
📱 *WhatsApp:* ${clientPhone || 'Não informado'}
🎉 *Tipo de Evento:* ${currentEventObj.label}
👥 *Quantidade de Convidados:* ~${guestCount} pessoas
📅 *Data Pretendida:* ${formattedDate}
⏰ *Período/Turno:* ${preferredShift}
🏡 *Ambientes de Interesse:*
${selectedSpaces.map((s) => `  • ${s}`).join('\n')}
${needBuffetHelp ? '🍽️ *Indicação:* Gostaria de recomendações de buffet/decoração parceiros.' : ''}

Poderia me informar se essa data está disponível e como podemos agendar uma visita? Aguardo seu retorno! Obrigado(a).`;

    const encoded = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="simulador" className="py-16 md:py-24 bg-[#0C251C] text-white relative">
      {/* Visual background textures */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#C5A059_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#E5C378] font-semibold mb-3">
            <Sparkles className="w-4 h-4 text-[#E5C378]" />
            <span>Ferramenta Tecnológica de Cotação</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            Simulador de Evento & Pré-Qualificação
          </h2>
          <p className="text-slate-300 text-sm sm:text-base font-sans-ui leading-relaxed">
            Personalize seu evento em 1 minuto. Veja a compatibilidade dos ambientes em tempo real
            e envie sua proposta já formatada direto para o WhatsApp da Konccy, sem burocracia!
          </p>
        </div>

        {/* Qualifier Card Container */}
        <div className="bg-[#113125] border border-[#C5A059]/30 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl">
          <form onSubmit={handleSendToWhatsApp}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              {/* Left Column: Interactive Controls */}
              <div className="lg:col-span-7 flex flex-col gap-8">
                {/* Step 1: Tipo de Evento */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <label className="text-xs uppercase tracking-widest text-[#E5C378] font-semibold flex items-center gap-2">
                      <PartyPopper className="w-4 h-4" />
                      <span>1. Qual é o tipo da sua comemoração?</span>
                    </label>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {EVENT_TYPES.map((type) => (
                      <button
                        type="button"
                        key={type.id}
                        onClick={() => {
                          setSelectedEventType(type.id);
                          setGuestCount(type.defaultGuests);
                        }}
                        className={`text-left p-3 rounded-xl border transition-all text-xs flex flex-col justify-between min-h-[64px] ${
                          selectedEventType === type.id
                            ? 'bg-[#C5A059] text-[#0C251C] border-[#E5C378] font-bold shadow-md'
                            : 'bg-[#0E281F] text-slate-200 border-[#C5A059]/20 hover:border-[#C5A059]/60'
                        }`}
                      >
                        <span className="font-semibold block">{type.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Step 2: Quantidade de Convidados */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-xs uppercase tracking-widest text-[#E5C378] font-semibold flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      <span>2. Estimativa de convidados</span>
                    </label>
                    <span className="text-lg font-serif-luxury font-bold text-[#E5C378]">
                      {guestCount} pessoas
                    </span>
                  </div>

                  <input
                    type="range"
                    min="20"
                    max="350"
                    step="10"
                    value={guestCount}
                    onChange={(e) => setGuestCount(Number(e.target.value))}
                    className="w-full h-2 bg-[#0C251C] rounded-lg appearance-none cursor-pointer accent-[#C5A059] mb-3"
                  />

                  <div className="flex flex-wrap gap-2">
                    {[50, 100, 150, 200, 300].map((num) => (
                      <button
                        type="button"
                        key={num}
                        onClick={() => setGuestCount(num)}
                        className={`px-3 py-1 rounded-lg text-xs font-medium border transition-colors ${
                          guestCount === num
                            ? 'bg-[#E5C378] text-[#0C251C] border-[#E5C378]'
                            : 'bg-[#0E281F] text-slate-300 border-[#C5A059]/20 hover:text-white'
                        }`}
                      >
                        {num} convidados
                      </button>
                    ))}
                  </div>
                </div>

                {/* Step 3: Ambientes de Interesse */}
                <div>
                  <label className="text-xs uppercase tracking-widest text-[#E5C378] font-semibold flex items-center gap-2 mb-3">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>3. Quais ambientes você deseja utilizar?</span>
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {[
                      'Salão Climatizado',
                      'Área da Piscina',
                      'Espaço Coberto com Churrasqueira',
                      'Cozinha Completa para Buffet',
                      'Jardim e Área Externa',
                      'Mobiliário Completo (Mesas e Cadeiras)',
                    ].map((space) => {
                      const isChecked = selectedSpaces.includes(space);
                      return (
                        <button
                          type="button"
                          key={space}
                          onClick={() => toggleSpace(space)}
                          className={`flex items-center gap-3 p-3 rounded-xl border text-xs text-left transition-all ${
                            isChecked
                              ? 'bg-[#0E281F] text-white border-[#C5A059] shadow-sm'
                              : 'bg-[#0A1D16] text-slate-400 border-white/10 hover:border-[#C5A059]/30'
                          }`}
                        >
                          <div
                            className={`w-4 h-4 rounded flex items-center justify-center shrink-0 border ${
                              isChecked
                                ? 'bg-[#C5A059] border-[#C5A059] text-[#0C251C]'
                                : 'border-slate-500'
                            }`}
                          >
                            {isChecked && <CheckCircle2 className="w-3.5 h-3.5 stroke-[3]" />}
                          </div>
                          <span className="font-medium">{space}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Step 4: Turno e Data */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs uppercase tracking-widest text-[#E5C378] font-semibold flex items-center gap-2 mb-2">
                      <Clock className="w-4 h-4" />
                      <span>4. Turno preferido</span>
                    </label>
                    <select
                      value={preferredShift}
                      onChange={(e) => setPreferredShift(e.target.value)}
                      className="w-full bg-[#0E281F] border border-[#C5A059]/30 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#C5A059]"
                    >
                      <option value="Dia Inteiro (Manhã até Noite)">Dia Inteiro (Manhã até Noite)</option>
                      <option value="Diurno (Manhã / Tarde)">Diurno (Manhã / Tarde)</option>
                      <option value="Noturno (Fim de Tarde / Noite)">Noturno (Fim de Tarde / Noite)</option>
                      <option value="Fim de Semana Completo">Fim de Semana Completo</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs uppercase tracking-widest text-[#E5C378] font-semibold flex items-center gap-2 mb-2">
                      <Calendar className="w-4 h-4" />
                      <span>Data pretendida (opcional)</span>
                    </label>
                    <input
                      type="date"
                      value={eventDate}
                      onChange={(e) => setEventDate(e.target.value)}
                      className="w-full bg-[#0E281F] border border-[#C5A059]/30 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#C5A059]"
                    />
                  </div>
                </div>

                {/* Step 5: Identificação Rápida */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-white/10">
                  <div>
                    <label className="text-xs text-slate-300 block mb-1">Seu Nome</label>
                    <input
                      type="text"
                      placeholder="Ex: Amanda Silva"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      required
                      className="w-full bg-[#0E281F] border border-[#C5A059]/30 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#C5A059]"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-slate-300 block mb-1">Seu WhatsApp</label>
                    <input
                      type="tel"
                      placeholder="(74) 99999-9999"
                      value={clientPhone}
                      onChange={(e) => setClientPhone(e.target.value)}
                      className="w-full bg-[#0E281F] border border-[#C5A059]/30 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#C5A059]"
                    />
                  </div>
                </div>

                {/* Additional toggle */}
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="buffetHelp"
                    checked={needBuffetHelp}
                    onChange={(e) => setNeedBuffetHelp(e.target.checked)}
                    className="rounded bg-[#0E281F] border-[#C5A059]/40 text-[#C5A059] focus:ring-0 cursor-pointer"
                  />
                  <label htmlFor="buffetHelp" className="text-xs text-slate-300 cursor-pointer">
                    Desejo receber indicações de buffets, decoração ou fotógrafos recomendados em Jacobina.
                  </label>
                </div>
              </div>

              {/* Right Column: Dynamic Live Pre-Qualification Card */}
              <div className="lg:col-span-5 flex flex-col justify-between bg-[#0A1F17] border border-[#C5A059]/40 rounded-2xl p-6 sm:p-7 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-[#C5A059]/10 rounded-full blur-2xl pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between border-b border-[#C5A059]/20 pb-4 mb-5">
                    <div>
                      <span className="text-[11px] uppercase tracking-widest text-[#E5C378] font-bold block">
                        Diagnóstico em Tempo Real
                      </span>
                      <h3 className="font-serif-luxury text-xl font-bold text-white">
                        Resumo do seu Evento
                      </h3>
                    </div>
                    <div className="text-right">
                      <span className="text-xs px-2.5 py-1 rounded bg-[#0C251C] text-[#E5C378] border border-[#C5A059]/40 font-mono">
                        Jacobina - BA
                      </span>
                    </div>
                  </div>

                  {/* Compatibility Pill */}
                  <div className="bg-[#102F23] border border-[#C5A059]/30 rounded-xl p-3.5 mb-5">
                    <div className="flex items-center gap-2 text-xs font-semibold text-[#E5C378] mb-1">
                      <ShieldCheck className="w-4 h-4 text-[#E5C378]" />
                      <span>Espaço 100% Compatível</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      O Espaço Inovação comporta com folga até <strong>300+ pessoas</strong>. O seu plano de{' '}
                      <strong>{guestCount} convidados</strong> terá excelente circulação, segurança e
                      espaço para dança e buffet!
                    </p>
                  </div>

                  {/* Live Spec List */}
                  <div className="space-y-3 text-xs mb-6 text-slate-300">
                    <div className="flex justify-between py-1.5 border-b border-white/5">
                      <span className="text-slate-400">Celebração:</span>
                      <span className="font-semibold text-white">{currentEventObj.label}</span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-white/5">
                      <span className="text-slate-400">Público Estimado:</span>
                      <span className="font-semibold text-[#E5C378]">{guestCount} convidados</span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-white/5">
                      <span className="text-slate-400">Turno Desejado:</span>
                      <span className="font-semibold text-white">{preferredShift}</span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-white/5">
                      <span className="text-slate-400">Data Pretendida:</span>
                      <span className="font-semibold text-white">
                        {eventDate
                          ? new Date(eventDate + 'T00:00:00').toLocaleDateString('pt-BR')
                          : 'A combinar'}
                      </span>
                    </div>
                    <div className="py-1.5">
                      <span className="text-slate-400 block mb-1">Ambientes Selecionados:</span>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedSpaces.map((s) => (
                          <span
                            key={s}
                            className="bg-[#123628] text-slate-200 border border-[#C5A059]/25 rounded px-2 py-0.5 text-[11px]"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Host note */}
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-[#0E281F] border border-white/5 mb-6">
                    <img
                      src="https://i.imgur.com/RnP9jNx.jpeg"
                      alt="Konccy - Dona do Espaço Inovação"
                      referrerPolicy="no-referrer"
                      className="w-10 h-10 rounded-full object-cover border border-[#C5A059]"
                    />
                    <div className="text-xs">
                      <div className="font-semibold text-white">Atendimento por Konccy</div>
                      <div className="text-slate-400 text-[11px]">Dona e gestora do Espaço Inovação</div>
                    </div>
                  </div>
                </div>

                {/* Primary Submit Action directly to WhatsApp 74991205293 */}
                <div>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2.5 py-4 px-6 rounded-xl font-bold text-xs uppercase tracking-wider text-[#0C251C] bg-gradient-to-r from-[#EAD293] via-[#C5A059] to-[#D8B26E] hover:opacity-95 transition-all shadow-lg cursor-pointer"
                  >
                    <Send className="w-4 h-4 text-[#0C251C]" />
                    <span>Enviar Cotação Pré-Preenchida no WhatsApp</span>
                  </button>
                  <p className="text-center text-[11px] text-slate-400 mt-2">
                    Envia diretamente para o número oficial: <strong>{WHATSAPP_DISPLAY}</strong>
                  </p>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
