import React from 'react';
import { AlertCircle, History, FileText, UserX, Flame } from 'lucide-react';
import { SectionBackground } from './SectionBackground';

interface WarningItem {
  title: string;
  period: string;
  icon: React.ReactNode;
  desc: string;
}

export const WarningSection: React.FC = () => {
  const warnings: WarningItem[] = [
    {
      title: 'Ашаршылық зобалаңы',
      period: '1931–1933 жылдар',
      icon: <Flame className="w-5 h-5 text-[#b46f1f]" />,
      desc: 'Күштеп ұжымдастыру саясаты салдарынан миллиондаған қазақ аштықтан қырылды немесе босып кетті. Бұл ұлттың демографиялық және генетикалық кодына салынған ең ауыр жара болды.'
    },
    {
      title: 'Саяси репрессиялар',
      period: '1937–1938 жылдар',
      icon: <UserX className="w-5 h-5 text-[#b46f1f]" />,
      desc: 'Алаш зиялылары, ақын-жазушылар мен мемлекет қайраткерлері жаппай атылды немесе ГУЛАГ лагерьлеріне айдалды. Ұлттың ойлайтын миы мен көшбасшылары жойылды.'
    },
    {
      title: 'Тоталды цензура',
      period: 'Жүйелі түрде',
      icon: <FileText className="w-5 h-5 text-[#956b3a]" />,
      desc: 'Сөз бостандығы, баламалы пікір немесе билікті сынау қылмыс саналды. Барлық ақпарат құралдары, әдебиет пен өнер тек партиялық идеологияның шеңберінде ғана қызмет етті.'
    },
    {
      title: 'Ұлттық мәдениетке қысым',
      period: 'Орыстандыру саясаты',
      icon: <History className="w-5 h-5 text-[#956b3a]" />,
      desc: 'Қазақ мектептерінің жабылуы, тілдің қолдану аясының тарылуы, дін мен дәстүрге тыйым салу. Халықты тамырынан ажыратып, бірыңғай «кеңес халқын» жасауға ұмтылу.'
    }
  ];

  return (
    <section id="history" className="py-24 sm:py-36 bg-[#efd0a1] relative border-b border-[#e7cca0] overflow-hidden">
      <SectionBackground
        src="/images/chernofon.jpeg"
        overlayClassName=""
        imageClassName="opacity-100"
      />
      
      {/* Absolute strict top warning red line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-[#b46f1f]/40" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Balanced perspective context header */}
        <div className="relative p-6 sm:p-8 rounded-lg bg-[#f4d9a9]/80 border-l-4 border-[#b46f1f] shadow-2xl">
          <div className="flex items-center space-x-2 text-xs font-mono text-[#b46f1f] uppercase tracking-widest">
            <AlertCircle className="w-4 h-4" />
            <span>07 // Объективті тарихи жад</span>
          </div>
          
          <h2 className="font-headline text-3xl sm:text-5xl text-[#3b2415] font-normal tracking-tight">
            Медалдің екінші жағы: Неліктен сағыныш тарихи шындықты алмастырмауы тиіс?
          </h2>

          <p className="font-body text-[#75522e] text-sm sm:text-base font-light leading-relaxed border-l border-[#d7ad68] pl-4">
            Журналистік зерттеудің басты талабы — теңгерімді көзқарас (balanced perspective). Аға буынның әлеуметтік жайлылықты сағынуын түсінуге болады, бірақ бұл жүйенің адамзат алдындағы қылмыстарын ақтауға негіз бола алмайды.
          </p>
        </div>

        {/* Deep highly serious grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {warnings.map((item, idx) => (
            <div 
              key={idx}
              className="p-8 rounded bg-[#fff7e8] border border-[#e7cca0] hover:border-[#d7ad68] transition-colors flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                
                {/* Header row */}
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded bg-[#f0d4a3] border border-[#d7ad68]">
                    {item.icon}
                  </div>
                  <span className="text-xs font-mono text-[#b46f1f] bg-[#b46f1f]/10 px-2 py-0.5 rounded border border-[#b46f1f]/20">
                    {item.period}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-headline text-xl text-[#3b2415] font-normal">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="font-body text-xs sm:text-sm text-[#75522e] font-light leading-relaxed">
                  {item.desc}
                </p>

              </div>

              {/* Bottom tag */}
              <div className="pt-4 border-t border-[#e7cca0]/80 text-[10px] font-mono text-[#b2824a] uppercase tracking-wider">
                Трагедиялық факт // Тарихи құжаттармен расталған
              </div>

            </div>
          ))}
        </div>

        {/* Editorial statement block */}
        <div className="mt-16 p-8 rounded-lg bg-gradient-to-b from-[#fff7e8] to-[#f6e2bb] border border-[#e7cca0] text-center max-w-4xl mx-auto">
          <p className="font-headline italic text-lg sm:text-xl text-[#604020] leading-relaxed font-light">
            «Кеңес Одағы берген әлеуметтік кепілдіктердің құны — адамның бас бостандығы мен ұлттың табиғи даму құқығы болды.»
          </p>
          <span className="block text-xs font-mono text-[#d79b2b] uppercase tracking-widest mt-4">
            — Тарихи аксиома
          </span>
        </div>

      </div>
    </section>
  );
};
