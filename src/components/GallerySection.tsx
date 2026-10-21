import React, { useState } from 'react';
import { GALLERY_IMAGES, VenueImage } from '../data/venueData.ts';
import { Camera, X, ChevronLeft, ChevronRight, Maximize2, Sparkles } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('todos');
  const [selectedImage, setSelectedImage] = useState<VenueImage | null>(null);

  const categories = [
    { id: 'todos', label: 'Todas as Fotos' },
    { id: 'piscina', label: 'Piscina & Lazer' },
    { id: 'coberta', label: 'Área Coberta & Mesas' },
    { id: 'salao', label: 'Salão Climatizado' },
    { id: 'jardim', label: 'Jardim & Natureza' },
    { id: 'banheiros', label: 'Banheiros & Lavabo' },
    { id: 'entrada', label: 'Entrada & Fachada' },
  ];

  const filteredImages =
    activeCategory === 'todos'
      ? GALLERY_IMAGES
      : GALLERY_IMAGES.filter((img) => img.category === activeCategory);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedImage) return;
    const currentIndex = filteredImages.findIndex((img) => img.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setSelectedImage(filteredImages[prevIndex]);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedImage) return;
    const currentIndex = filteredImages.findIndex((img) => img.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setSelectedImage(filteredImages[nextIndex]);
  };

  return (
    <section id="galeria" className="py-20 md:py-28 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#C5A059] font-semibold mb-3">
            <Camera className="w-4 h-4 text-[#C5A059]" />
            <span>Tour Fotográfico Real</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0C251C] mb-4">
            Conheça Cada Cantinho do Espaço
          </h2>
          <p className="text-[#46574D] text-sm sm:text-base font-sans-ui max-w-2xl mx-auto leading-relaxed">
            Fotos autênticas da nossa estrutura em Jacobina: ambientes arejados, piscina cristalina,
            salão climatizado e acabamento de alto padrão.
          </p>
        </div>

        {/* Filter Tabs (Interactive Segmented Control) */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap shrink-0 transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#0C251C] text-white border border-[#C5A059] shadow-sm'
                  : 'bg-white text-[#46574D] border border-[#C5A059]/20 hover:border-[#C5A059]/60'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              onClick={() => setSelectedImage(image)}
              className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-[#0C251C] cursor-pointer border border-[#C5A059]/25 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <img
                src={image.url}
                alt={image.title}
                referrerPolicy="no-referrer"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    'https://i.imgur.com/yw4NkBg.jpeg';
                }}
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C251C] via-[#0C251C]/40 to-transparent opacity-80 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-serif-luxury text-lg font-bold text-white leading-tight">
                      {image.title}
                    </h3>
                    <p className="text-xs text-slate-200 line-clamp-1 mt-1">
                      {image.description}
                    </p>
                  </div>
                  <div className="w-8 h-8 rounded-lg bg-[#C5A059] text-[#0C251C] flex items-center justify-center shrink-0 ml-3">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-white hover:text-[#C5A059] border border-white/20 transition-colors"
                aria-label="Fechar visualização"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Navigation Arrows */}
              <button
                onClick={handlePrev}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 p-2.5 rounded-full bg-black/60 text-white hover:text-[#C5A059] border border-white/20 transition-colors"
                aria-label="Foto anterior"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={handleNext}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 p-2.5 rounded-full bg-black/60 text-white hover:text-[#C5A059] border border-white/20 transition-colors"
                aria-label="Próxima foto"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Image */}
              <div className="rounded-2xl overflow-hidden max-h-[75vh] w-full flex items-center justify-center bg-black">
                <img
                  src={selectedImage.url}
                  alt={selectedImage.title}
                  referrerPolicy="no-referrer"
                  className="max-h-[75vh] max-w-full object-contain"
                />
              </div>

              {/* Caption */}
              <div className="mt-4 text-center max-w-2xl px-4">
                <h4 className="font-serif-luxury text-xl font-bold text-white mb-1">
                  {selectedImage.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-300">
                  {selectedImage.description}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
