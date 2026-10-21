import React, { useState } from 'react';
import { WHATSAPP_NUMBER, WHATSAPP_DISPLAY, EVENT_TYPES } from '../data/venueData.ts';
import { Send, MessageCircle, Calendar, Users, Phone, User, CheckCircle2 } from 'lucide-react';

export const ReservationForm: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [eventType, setEventType] = useState('Casamento');
  const [date, setDate] = useState('');
  const [guests, setGuests] = useState('100');
  const [notes, setNotes] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formattedDate = date
      ? new Date(date + 'T00:00:00').toLocaleDateString('pt-BR')
      : 'A combinar';

    const message = `✨ *SOLICITAÇÃO DE RESERVA - ESPAÇO INOVAÇÃO* ✨

Olá Konccy! Gostaria de consultar a reserva do espaço:

👤 *Nome:* ${name}
📱 *WhatsApp:* ${phone}
🎉 *Evento:* ${eventType}
👥 *Convidados:* ~${guests} pessoas
📅 *Data Desejada:* ${formattedDate}
${notes ? `📝 *Observações:* ${notes}` : ''}

Podemos verificar se essa data está disponível?`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="reserva" className="py-20 md:py-28 bg-[#0C251C] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-xs uppercase tracking-[0.2em] text-[#E5C378] font-semibold block mb-2">
            Reserva Rápida & Sem Burocracia
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Garanta Sua Data no Espaço Inovação
          </h2>
          <p className="text-slate-300 text-sm sm:text-base font-sans-ui">
            Preencha os dados abaixo para falar diretamente com a Konccy no WhatsApp e receber
            uma proposta personalizada com prioridade na agenda.
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-[#102F23] rounded-3xl border border-[#C5A059]/40 p-6 sm:p-10 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="text-xs uppercase tracking-wider text-[#E5C378] font-semibold block mb-2">
                  Seu Nome Completo *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  <input
                    type="text"
                    required
                    placeholder="Ex: Maria Fernandes"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-[#0A1F17] border border-[#C5A059]/30 rounded-xl text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#C5A059]"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs uppercase tracking-wider text-[#E5C378] font-semibold block mb-2">
                  Seu WhatsApp *
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  <input
                    type="tel"
                    required
                    placeholder="(74) 99999-9999"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-[#0A1F17] border border-[#C5A059]/30 rounded-xl text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#C5A059]"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              <div>
                <label className="text-xs uppercase tracking-wider text-[#E5C378] font-semibold block mb-2">
                  Tipo de Evento
                </label>
                <select
                  value={eventType}
                  onChange={(e) => setEventType(e.target.value)}
                  className="w-full px-3.5 py-3 bg-[#0A1F17] border border-[#C5A059]/30 rounded-xl text-xs sm:text-sm text-white focus:outline-none focus:border-[#C5A059]"
                >
                  <option value="Casamento">Casamento</option>
                  <option value="Festa de 15 Anos">Festa de 15 Anos</option>
                  <option value="Aniversário">Aniversário</option>
                  <option value="Confraternização">Confraternização</option>
                  <option value="Formatura">Formatura</option>
                  <option value="Festa Infantil">Festa Infantil</option>
                  <option value="Outro Evento">Outro Formato</option>
                </select>
              </div>

              <div>
                <label className="text-xs uppercase tracking-wider text-[#E5C378] font-semibold block mb-2">
                  Estimativa de Convidados
                </label>
                <div className="relative">
                  <Users className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  <input
                    type="number"
                    min="10"
                    max="400"
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-[#0A1F17] border border-[#C5A059]/30 rounded-xl text-xs sm:text-sm text-white focus:outline-none focus:border-[#C5A059]"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs uppercase tracking-wider text-[#E5C378] font-semibold block mb-2">
                  Data Pretendida
                </label>
                <div className="relative">
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-3.5 py-3 bg-[#0A1F17] border border-[#C5A059]/30 rounded-xl text-xs sm:text-sm text-white focus:outline-none focus:border-[#C5A059]"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="text-xs uppercase tracking-wider text-[#E5C378] font-semibold block mb-2">
                Observações ou Dúvidas (Opcional)
              </label>
              <textarea
                rows={3}
                placeholder="Ex: Gostaria de saber sobre horários para montagem da decoração..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full p-3.5 bg-[#0A1F17] border border-[#C5A059]/30 rounded-xl text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#C5A059]"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 px-6 rounded-xl font-bold text-xs uppercase tracking-wider text-[#0C251C] bg-gradient-to-r from-[#EAD293] via-[#C5A059] to-[#D8B26E] hover:opacity-95 transition-all shadow-lg flex items-center justify-center gap-2.5 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-[#0C251C]" />
              <span>Enviar Pedido de Reserva pelo WhatsApp</span>
            </button>

            <div className="flex items-center justify-center gap-2 text-center text-xs text-slate-300 pt-2">
              <CheckCircle2 className="w-4 h-4 text-[#E5C378]" />
              <span>Atendimento ágil diretamente pelo WhatsApp ({WHATSAPP_DISPLAY})</span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
