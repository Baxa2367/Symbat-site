import React, { useState } from 'react';
import { Layers, ArrowRight, ArrowLeft } from 'lucide-react';
import { SectionBackground } from './SectionBackground';

interface ComparePoint {
  category: string;
  ussr: string;
  ussrTag: string;
  modern: string;
  modernTag: string;
}

export const ComparisonSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<number>(0);

  const points: ComparePoint[] = [
    {
      category: 'Тұрақтылық',
      ussr: 'Жоғары деңгейдегі абсолюттік болжамдылық. Тауар бағасы ондаған жылдар бойы өзгермеді.',
      ussrTag: 'Кепілдендірілген',
      modern: 'Динамикалық, бірақ тұрақсыз нарық. Инфляция мен жаһандық дағдарыстарға тәуелділік.',
      modernTag: 'Өзгермелі'
    },
    {
      category: 'Жұмыс және еңбек',
      ussr: 'Оқуды аяқтаған соң міндетті жолдама. Жұмыссыз қалу қаупі мүлдем жоқ.',
      ussrTag: 'Міндетті қамту',
      modern: 'Жоғары бәсекелестік. Өзін-өзі дамыту мүмкіндігі шексіз, бірақ кепілдік жоқ.',
      modernTag: 'Бәсекелестік'
    },
    {
      category: 'Медициналық қызмет',
      ussr: 'Барлық азаматтар үшін толықтай тегін және бірыңғай стандартталған емдеу жүйесі.',
      ussrTag: 'Тегін стандарт',
      modern: 'Заманауи технологиялар мен ақылы жеке клиникалардың дамуы, бірақ қымбатшылық.',
      modernTag: 'Сапалы / Ақылы'
    },
    {
      category: 'Әлеуметтік теңсіздік',
      ussr: 'Минималды алшақтық. Халықтың басым көпшілігі орташа біркелкі деңгейде өмір сүрді.',
      ussrTag: 'Біркелкілік',
      modern: 'Байлар мен кедейлер арасындағы үлкен алшақтық. Табыс деңгейінің әртүрлілігі.',
      modernTag: 'Қатты жіктелген'
    },
    {
      category: 'Болашаққа сенім',
      ussr: 'Мемлекеттің қорғауында болу сезімі. Қарттық пен зейнет жасынан қорықпау.',
      ussrTag: 'Қорғаныс сезімі',
      modern: 'Жеке жауапкершілік. Әр адам өз болашағын өзі ғана қамтамасыз етуге міндетті.',
      modernTag: 'Жеке жауапкершілік'
    }
  ];

  return (
    <section id="compare" className="py-24 sm:py-32 bg-[#f7e7c7] border-b border-[#e7cca0] relative overflow-hidden">
      <SectionBackground
        src="/photo/5.jpeg"
        overlayClassName=""
        imageClassName="opacity-100"
      />
      
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#b46f1f]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title Block */}
        <div className="relative p-6 sm:p-8 rounded-lg bg-[#f4d9a9]/80 border-l-4 border-[#b46f1f] shadow-2xl">
          <div className="inline-flex items-center space-x-2 text-xs font-mono text-[#d79b2b] uppercase tracking-widest">
            <Layers className="w-4 h-4 text-[#b46f1f]" />
            <span>04 // Параллельді талдау</span>
          </div>
          <h2 className="font-headline text-3xl sm:text-5xl text-[#3b2415] font-normal">
            Екі дәуірдің таразысы
          </h2>
          <p className="font-body text-[#75522e] text-sm sm:text-base font-light">
            Жүйелердің айырмашылығын түсіну үшін біз екі қоғамның басты сипаттамаларын салыстырдық. Төмендегі санаттарды басып ауыстырыңыз.
          </p>
        </div>

        {/* Visual interactive "Venn Diagram / Intersection" concept selector */}
        <div className="mb-12 flex flex-wrap justify-center gap-2 sm:gap-4">
          {points.map((pt, idx) => (
            <button
              key={pt.category}
              onClick={() => setActiveCategory(idx)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                activeCategory === idx
                  ? 'bg-[#b46f1f] text-[#fff7e8] shadow-lg scale-105'
                  : 'bg-[#e6bf7c] text-[#75522e] hover:text-[#4d311c] border border-[#d7ad68]'
              }`}
            >
              {pt.category}
            </button>
          ))}
        </div>

        {/* Split screen content display */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-xl overflow-hidden border border-[#d7ad68] shadow-2xl">
          
          {/* Left Side: USSR */}
          <div className="bg-gradient-to-br from-[#f1d1a0] to-[#fff7e8] p-8 sm:p-12 relative border-b lg:border-b-0 lg:border-r border-[#d7ad68] flex flex-col justify-between">
            {/* Background absolute text */}
            <span className="absolute right-4 bottom-4 font-headline text-8xl font-bold text-[#3b2415]/[0.02] select-none pointer-events-none">
              КСРО
            </span>

            <div>
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#b46f1f]" />
                  <span className="text-xs font-mono text-[#75522e] uppercase tracking-wider">Кеңес кезеңі</span>
                </div>
                <span className="px-2.5 py-1 rounded bg-[#b46f1f]/20 text-[#b46f1f] font-mono text-xs">
                  {points[activeCategory].ussrTag}
                </span>
              </div>

              <h3 className="font-headline text-3xl text-[#3b2415] font-normal mb-6">
                {points[activeCategory].category}
              </h3>

              <p className="font-body text-[#604020] text-base sm:text-lg font-light leading-relaxed">
                {points[activeCategory].ussr}
              </p>
            </div>

            {/* Micro details bottom indicator */}
            <div className="mt-12 pt-6 border-t border-[#d7ad68]/60 flex items-center text-xs text-[#956b3a] space-x-2">
              <ArrowLeft className="w-4 h-4 text-[#b46f1f]" />
              <span>Ұжымдық қамқорлық басым</span>
            </div>
          </div>

          {/* Right Side: Modern Society */}
          <div className="bg-gradient-to-bl from-[#f8e3bd] to-[#fff7e8] p-8 sm:p-12 relative flex flex-col justify-between">
            {/* Background absolute text */}
            <span className="absolute left-4 bottom-4 font-headline text-8xl font-bold text-[#3b2415]/[0.02] select-none pointer-events-none">
              ҚАЗІР
            </span>

            <div>
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#d79b2b]" />
                  <span className="text-xs font-mono text-[#75522e] uppercase tracking-wider">Қазіргі қоғам</span>
                </div>
                <span className="px-2.5 py-1 rounded bg-[#d79b2b]/20 text-[#d79b2b] font-mono text-xs">
                  {points[activeCategory].modernTag}
                </span>
              </div>

              <h3 className="font-headline text-3xl text-[#3b2415] font-normal mb-6">
                {points[activeCategory].category}
              </h3>

              <p className="font-body text-[#604020] text-base sm:text-lg font-light leading-relaxed">
                {points[activeCategory].modern}
              </p>
            </div>

            {/* Micro details bottom indicator */}
            <div className="mt-12 pt-6 border-t border-[#d7ad68]/60 flex items-center justify-end text-xs text-[#956b3a] space-x-2">
              <span>Жеке еркіндік пен мүмкіндік басым</span>
              <ArrowRight className="w-4 h-4 text-[#d79b2b]" />
            </div>
          </div>

        </div>

        {/* Venn Diagram Summary Footer */}
        <div className="mt-12 max-w-2xl mx-auto text-center p-6 rounded-lg bg-[#fff7e8] border border-[#d7ad68]/80">
          <p className="text-xs text-[#75522e] leading-relaxed font-light">
            <span className="text-[#d79b2b] font-medium block mb-1 uppercase tracking-wider">Қиылысу нүктесі (Venn Intersection)</span>
            Екі жүйенің ортақ тілегі — <strong className="text-[#4d311c] font-normal">адамның бақыты мен тыныштығы</strong>. Бірақ оған жету жолдары екі түрлі философияға негізделген: бірінде мемлекет бәрін шешсе, екіншісінде азамат өзіне ғана сүйенеді.
          </p>
        </div>

      </div>
    </section>
  );
};
