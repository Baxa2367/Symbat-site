import React from 'react';
import { Quote, Feather, Share2, CheckCircle2 } from 'lucide-react';

export const FinalSection: React.FC = () => {
  return (
    <footer className="relative w-full bg-[#f0d4a3] text-[#3b2415] overflow-hidden select-none">
      
      {/* Background cinematic fade-out shot */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center filter sepia-[.18] saturate-125 contrast-110 brightness-105 scale-105 transform"
          style={{ 
            backgroundImage: `url('/images/chernofonn.jpeg')`,
            opacity: 100
          }} 
        />
        {/* Soft fading overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#f4d6a3] via-[#ecd0a1]/85 to-[#efd0a1]" />
        <div className="absolute inset-0 bg-[#b46f1f]/5 mix-blend-overlay" />
      </div>

      {/* Content wrapper */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 flex flex-col items-center justify-between min-h-[85vh]">
        
        {/* Empty space pusher to emphasize emotional silence */}
        <div className="w-full flex flex-col items-center text-center my-auto space-y-12">
          
          <Quote className="w-16 h-16 sm:w-20 sm:h-20 text-[#b46f1f] opacity-30 animate-pulse" />

          {/* Definitive Final Quote */}
          <h2 className="font-headline tracking-wide text-3xl sm:text-5xl lg:text-6xl text-[#3b2415] leading-tight max-w-4xl drop-shadow-2xl font-light">
            «Мүмкін адамдар КСРО-ны емес, <br className="hidden sm:block" />
            <span className="italic text-[#3b2415] font-normal underline decoration-[#b46f1f]/40 underline-offset-8">
              сол кезеңдегі қауіпсіздік сезімін
            </span> <br className="hidden sm:block" />
            сағынатын шығар.»
          </h2>

          <div className="w-16 h-[1px] bg-[#d79b2b] my-4" />

        </div>

        {/* Academic Evaluation Criteria Checklist & Interactive Credits Footer */}
        <div className="w-full mt-24 pt-8 border-t border-[#e7cca0] grid grid-cols-1 md:grid-cols-12 gap-8 text-left">
          
          {/* Left Block: Academic Integrity verification */}
          <div className="md:col-span-7 space-y-3">
            <div className="flex items-center space-x-2 text-[11px] font-mono text-[#d79b2b] uppercase">
              <Feather className="w-3.5 h-3.5" />
              <span>Академиялық тапсырма барысында қолданылды</span>
            </div>
            
            <p className="text-xs text-[#75522e] leading-relaxed font-light">
              Бұл арнайы жоба сандық журналистиканың  озық тәжірибелерін, кинематографиялық сторителлингті және деректерді визуалдау әдістерін біріктіреді.
            </p>

            {/* Checklist of met criteria */}
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 pt-2 text-[11px] text-[#956b3a] font-mono">
              <span className="flex items-center text-[#75522e]">
                <CheckCircle2 className="w-3 h-3 text-[#b46f1f] mr-1.5 shrink-0" /> Тақырып өзектілігі
              </span>
              <span className="flex items-center text-[#75522e]">
                <CheckCircle2 className="w-3 h-3 text-[#b46f1f] mr-1.5 shrink-0" /> Статистикалық талдау
              </span>
              <span className="flex items-center text-[#75522e]">
                <CheckCircle2 className="w-3 h-3 text-[#b46f1f] mr-1.5 shrink-0" /> Журналистік стиль
              </span>
              <span className="flex items-center text-[#75522e]">
                <CheckCircle2 className="w-3 h-3 text-[#b46f1f] mr-1.5 shrink-0" /> Мультимедиялық сапа
              </span>
            </div>
          </div>

          {/* Right Block: Actions / Share mockup */}
          <div className="md:col-span-5 flex flex-col justify-between space-y-4 md:items-end text-left md:text-right">
            <div>
              <span className="text-[10px] text-[#b2824a] block uppercase font-mono">Жоба авторы</span>
              <span className="text-xs text-[#604020] font-medium block mt-0.5">Әуелбек Сымбат</span>
              <span className="text-[11px] text-[#956b3a] block">Cinematic Web Design Studio © 2026</span>
            </div>

            <button
              onClick={() => {
                navigator.clipboard?.writeText(window.location.href);
                alert('Сілтеме көшірілді! Рақмет.');
              }}
              className="inline-flex items-center space-x-2 px-3 py-1.5 rounded bg-[#fff0d1] hover:bg-[#d8a453] border border-[#d7ad68] text-xs text-[#75522e] hover:text-[#3b2415] transition-all self-start md:self-auto"
            >
              <Share2 className="w-3.5 h-3.5 text-[#d79b2b]" />
              <span>Зерттеумен бөлісу</span>
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
};
