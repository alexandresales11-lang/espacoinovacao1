import React, { useState } from 'react';
import { VENUE_INFO } from '../data/venueData.ts';
import { MapPin, Navigation, ExternalLink, Copy, Check, Car, Shield } from 'lucide-react';

export const LocationSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(VENUE_INFO.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  // Google Maps embed URL for Jacobina, Catuaba
  const mapEmbedUrl =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.5!2d-40.518!3d-11.181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7166a0000000001%3A0x0!2sJacobina%2C%20BA!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr';

  return (
    <section id="localizacao" className="py-20 md:py-28 bg-[#FAF7F2] border-t border-[#C5A059]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Address Details */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#C5A059] font-semibold mb-3">
              <MapPin className="w-4 h-4 text-[#C5A059]" />
              <span>Fácil Acesso em Jacobina</span>
            </div>

            <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#0C251C] mb-4">
              Localização Privilegiada & Tranquila
            </h2>

            <p className="text-[#46574D] text-sm sm:text-base font-sans-ui mb-6 leading-relaxed">
              O Espaço Inovação está situado no bairro Catuaba, uma região sossegada de Jacobina com
              ar puro, fácil acesso para os convidados e amplo espaço para estacionamento.
            </p>

            {/* Address Box */}
            <div className="w-full bg-white rounded-2xl border border-[#C5A059]/30 p-5 mb-6 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] border border-[#C5A059]/30 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-[#0C251C]" />
                </div>
                <div className="flex-1">
                  <span className="text-[11px] uppercase tracking-wider text-[#C5A059] font-bold block mb-1">
                    Endereço Oficial
                  </span>
                  <p className="text-sm font-semibold text-[#0C251C] leading-snug">
                    {VENUE_INFO.address}
                  </p>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={handleCopyAddress}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0C251C] hover:text-[#C5A059] transition-colors cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span className="text-emerald-700">Endereço Copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-[#C5A059]" />
                      <span>Copiar Endereço</span>
                    </>
                  )}
                </button>
                <span className="text-[11px] text-[#5C6B62]">CEP 44700-000</span>
              </div>
            </div>

            {/* Perks */}
            <div className="grid grid-cols-2 gap-3 w-full mb-8">
              <div className="flex items-center gap-2 p-3 rounded-xl bg-white border border-[#C5A059]/20 text-xs font-medium text-[#0C251C]">
                <Car className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>Estacionamento no local</span>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-xl bg-white border border-[#C5A059]/20 text-xs font-medium text-[#0C251C]">
                <Shield className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>Rua calma e segura</span>
              </div>
            </div>

            {/* Direct Navigation Links */}
            <div className="flex flex-wrap gap-3 w-full">
              <a
                href={VENUE_INFO.googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 text-xs font-bold uppercase tracking-wider text-white bg-[#0C251C] hover:bg-[#133829] rounded-xl border border-[#C5A059]/40 transition-colors shadow-sm"
              >
                <Navigation className="w-4 h-4 text-[#E5C378]" />
                <span>Abrir no Google Maps</span>
              </a>

              <a
                href={VENUE_INFO.wazeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 text-xs font-bold uppercase tracking-wider text-[#0C251C] bg-white hover:bg-[#FAF7F2] rounded-xl border border-[#C5A059] transition-colors shadow-sm"
              >
                <ExternalLink className="w-4 h-4 text-[#C5A059]" />
                <span>Navegar pelo Waze</span>
              </a>
            </div>
          </div>

          {/* Interactive Map Visual */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl overflow-hidden border border-[#C5A059]/40 shadow-xl bg-white relative">
              <div className="bg-[#0C251C] text-[#E5C378] px-5 py-3.5 flex items-center justify-between border-b border-[#C5A059]/30">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#E5C378]" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-white">
                    Jacobina - BA · Segunda Travessa São Francisco de Assis
                  </span>
                </div>
                <span className="text-[11px] text-slate-300 hidden sm:inline">Catuaba</span>
              </div>

              <div className="relative aspect-[16/10] w-full bg-[#EAE5DC]">
                <iframe
                  title="Localização Espaço Inovação em Jacobina"
                  src={mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />

                {/* Floating Map Pin Badge */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-xl border border-[#C5A059]/40 shadow-md">
                  <div className="text-xs font-bold text-[#0C251C]">Espaço Inovação</div>
                  <div className="text-[11px] text-[#5C6B62]">Catuaba, Jacobina - BA</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
