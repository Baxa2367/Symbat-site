import React from 'react';
import { ChevronDown, Film } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full h-screen flex flex-col justify-end pb-24 sm:pb-32 overflow-hidden select-none bg-[#fff7e8]">
      {/* Background with cinematic slow zoom animation */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center animate-slow-zoom scale-105"
          style={{ 
            backgroundImage: url('/photo/1.jpeg'),
            filter: 'contrast(1.05) brightness(1.08) saturate(1.15) sepia(0.14)'
          }}
        />
        {/* Editorial gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#fff7e8] via-[#fff7e8]/70 to-[#f6e2bb]/40 z-10" />
        <div className="absolute inset-0 bg-[#b46f1f]/5 mix-blend-color-burn z-10" />
      </div>

      {/* VHS scanline simulation */}
      <div className="vhs-line" />
      
      {/* Film grain layer overlay */}
      <div className="film-grain absolute inset-0 z-20 pointer-events-none" />

      {/* Main content layer */}
      <div className="relative z-30 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Editorial meta label */}
        <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[#f0d4a3]/60 backdrop-blur-sm border border-[#d7ad68] mb-6 rounded text-[#75522e] text-xs tracking-widest uppercase animate-fade-in">
          <Film className="w-3.5 h-3.5 text-[#d79b2b]" />
          <span>Архив хроникасы // 1970–1990</span>
        </div>

        {/* Cinematic Title */}
        <h1 className="font-headline text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-[#402715] drop-shadow-lg leading-tight sm:leading-none mb-6">
          Өткеннің <br />
          <span className="text-[#3b2415] italic font-normal">жылуы</span>
        </h1>

        {/* Subtitle */}
        <p className="font-body font-light text-lg sm:text-2xl text-[#604020] max-w-2xl border-l-2 border-[#b46f1f] pl-4 py-1 tracking-wide leading-relaxed">
          «Посткеңестік ностальгия феномені: аға буын неге КСРО кезеңін қазіргі уақыттан комфорттырақ деп санайды?»
        </p>

        {/* Bottom micro-info row */}
        <div className="mt-12 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-[#956b3a] border-t border-[#e7cca0] pt-6 space-y-4 sm:space-y-0">
          <div className="flex items-center space-x-6">
            <div>
              <span className="block text-[10px] text-[#b2824a] uppercase">Формат</span>
              <span className="text-[#75522e]">Modern Digital Documentary</span>
            </div>
            <div>
              <span className="block text-[10px] text-[#b2824a] uppercase">Оқу ұзақтығы</span>
              <span className="text-[#75522e]">12 минуттық лонгрид</span>
            </div>
            <div>
              <span className="block text-[10px] text-[#b2824a] uppercase">Фокус</span>
              <span className="text-[#75522e]">Аға буын психологиясы</span>
            </div>
          </div>

          {/* Prompt to scroll */}
          <a 
            href="#intro" 
            className="group flex items-center space-x-2 text-[#75522e] hover:text-[#3b2415] transition-colors self-start sm:self-auto"
          >
            <span className="text-xs uppercase tracking-widest">Төменге жылжыңыз</span>
            <span className="p-2 rounded-full bg-[#e7cca0] border border-[#d7ad68] group-hover:border-[#c99143] transition-all">
              <ChevronDown className="w-3.5 h-3.5 text-[#d79b2b] animate-bounce" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};
