import React from 'react';
import { Quote } from 'lucide-react';
import { SectionBackground } from './SectionBackground';

export const IntroSection: React.FC = () => {
  return (
    <section id="intro" className="py-24 sm:py-36 bg-[#fff7e8] relative z-30 border-b border-[#e7cca0] overflow-hidden">
      <SectionBackground
        src="/photo/2.jpeg"
        overlayClassName=""
        imageClassName="opacity-90"
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Intro Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text content */}
          <div className="lg:col-span-7 space-y-8">
            
            <div className="space-y-2">
              <span className="text-[#b46f1f] text-xs font-semibold tracking-widest uppercase block">
                01 // Феномен кіріспесі
              </span>
              <h2 className="font-headline text-3xl sm:text-4xl text-[#3b2415] font-normal leading-snug">
                Өткен шаққа деген сағыныш — жай ғана эмоция емес
              </h2>
            </div>

            {/* Stylized Quote Block */}
            <div className="relative p-6 sm:p-8 rounded-lg bg-[#f4d9a9]/80 border-l-4 border-[#b46f1f] shadow-2xl">
              <Quote className="absolute top-4 right-4 w-12 h-12 text-[#d9b978] pointer-events-none select-none opacity-40" />
              <p className="font-headline italic text-xl sm:text-2xl text-[#4d311c] leading-relaxed relative z-10">
                «Кеңес кезінде жақсы болды» деген сөзді естіген кезде, жастар жиі езу тартады. Бірақ бұл сөзді айтып отырған адам — бос армандаушы емес...
              </p>
            </div>

            {/* Deep Journalism editorial breakdown */}
            <div className="relative p-6 sm:p-8 rounded-lg bg-[#f4d9a9]/80 border-l-4 border-[#b46f1f] shadow-2xl">
              <Quote className="absolute top-4 right-4 w-12 h-12 text-[#d9b978] pointer-events-none select-none opacity-40" />
              <p className="font-headline italic text-xl sm:text-2xl text-[#4d311c] leading-relaxed relative z-10">
                Бүгінгі таңда посткеңестік кеңістіктегі зерттеушілер таңғаларлық парадоксты байқайды: дүкен сөрелері толы, шекаралар ашық, ақпарат қолжетімді болғанымен, миллиондаған адамдар өткен ғасырдың 70-80 жылдарын ең бақытты, жайлы кезең ретінде еске алады.
              </p>
              <p className="font-headline italic text-xl sm:text-2xl text-[#4d311c] leading-relaxed relative z-10">
                Бұл құбылысты тек <span className="text-[#4d311c] font-medium">«жастық шақты сағыну»</span> деп жеңілдетуге болмайды. Бұл — қазіргі заманның созылмалы күйзелісіне, әлеуметтік қорғансыздыққа және ертеңгі күнге деген сенімсіздікке берілген ұжымдық психологиялық реакция. 
              </p>
              <p className="font-headline italic text-xl sm:text-2xl text-[#4d311c] leading-relaxed relative z-10">
                Бұл зерттеуде біз сандарға, тарихи фактілерге және адамдардың шынайы естеліктеріне сүйене отырып, ностальгияның нақты анатомиясын ашамыз.
              </p>
            </div>

          </div>

          {/* Right Archive image with frame styling */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative background outline mimicking classic print offset */}
              <div className="absolute inset-0 border border-[#d79b2b]/30 translate-x-3 translate-y-3 rounded-sm pointer-events-none" />
              
              <div className="relative bg-[#f4d9a9] p-3 shadow-2xl rounded-sm">
                <img 
                  src="/images/soviet-intro.jpg" 
                  alt="КСРО кезеңін еске алу"
                  className="w-full h-auto object-cover filter sepia-[.18] saturate-125 hover:sepia-0 transition-all duration-700 contrast-110 brightness-105"
                />
                
                {/* Photo Caption */}
                <div className="mt-3 flex items-center justify-between text-[11px] text-[#956b3a] font-mono border-t border-[#d7ad68] pt-2">
                  <span>АРХИВ // СУРЕТ №42-В</span>
                  <span className="text-[#b46f1f]">1978 ЖЫЛ</span>
                </div>
              </div>

              {/* Little detail block overlay */}
              <div className="absolute -bottom-6 -left-6 bg-[#f0d4a3]/90 border border-[#d7ad68] p-3 hidden sm:block max-w-xs backdrop-blur-sm">
                <span className="text-[10px] text-[#d79b2b] uppercase tracking-widest block font-mono">Контекст</span>
                <p className="text-xs text-[#75522e] mt-1 font-light">
                  Отбасылық альбомдар — кеңестік тұрақтылықтың басты визуалды куәгері.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
