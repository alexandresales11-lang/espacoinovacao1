import React from 'react';
import {
  Trees,
  Snowflake,
  Users,
  Armchair,
  ChefHat,
  Bath,
  Waves,
  ShieldCheck,
  Check,
} from 'lucide-react';
import { AMENITIES } from '../data/venueData.ts';

const iconMap: Record<string, React.ReactNode> = {
  Trees: <Trees className="w-6 h-6 text-[#E5C378]" />,
  Snowflake: <Snowflake className="w-6 h-6 text-[#E5C378]" />,
  Users: <Users className="w-6 h-6 text-[#E5C378]" />,
  Armchair: <Armchair className="w-6 h-6 text-[#E5C378]" />,
  ChefHat: <ChefHat className="w-6 h-6 text-[#E5C378]" />,
  Bath: <Bath className="w-6 h-6 text-[#E5C378]" />,
  Waves: <Waves className="w-6 h-6 text-[#E5C378]" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-[#E5C378]" />,
};

export const AmenitiesSection: React.FC = () => {
  return (
    <section id="estrutura" className="py-20 md:py-28 bg-[#0C251C] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#E5C378] font-semibold block mb-3">
            Infraestrutura Completa
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 tracking-tight">
            Tudo o que seu evento precisa em um só lugar
          </h2>
          <p className="text-slate-300 text-sm sm:text-base font-sans-ui max-w-2xl mx-auto leading-relaxed">
            Desenvolvido para oferecer elegância, conforto térmico e total praticidade tanto para
            os anfitriões quanto para os convidados.
          </p>
        </div>

        {/* Bento Grid Layout of Amenities */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {AMENITIES.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#102F23]/80 border border-[#C5A059]/30 rounded-2xl p-6 transition-all duration-300 hover:border-[#C5A059] hover:-translate-y-1 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#0C251C] border border-[#C5A059]/40 flex items-center justify-center mb-5">
                  {iconMap[item.icon] || <Check className="w-6 h-6 text-[#E5C378]" />}
                </div>
                <h3 className="font-serif-luxury text-xl font-bold text-white mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm font-sans-ui leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#C5A059]/20 flex items-center justify-between text-[11px] text-[#E5C378]">
                <span>Incluso na locação</span>
                <Check className="w-4 h-4 text-[#E5C378]" />
              </div>
            </div>
          ))}
        </div>

        {/* Highlight quote banner */}
        <div className="mt-16 text-center max-w-xl mx-auto">
          <p className="font-script-luxury text-3xl sm:text-4xl text-[#E5C378]">
            Feito para momentos inesquecíveis
          </p>
          <div className="w-16 h-0.5 bg-[#C5A059]/40 mx-auto mt-2" />
        </div>
      </div>
    </section>
  );
};
