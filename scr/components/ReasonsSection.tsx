import React, { useState } from 'react';
import {
  HeartPulse,
  GraduationCap,
  Briefcase,
  ShieldCheck,
  Scale,
  Award,
  Globe,
} from 'lucide-react';
import { SectionBackground } from './SectionBackground';

interface ReasonCard {
  id: string;
  title: string;
  icon: React.ReactNode;
  summary: string;
  details: string;
  image: string;
}

export const ReasonsSection: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const reasons: ReasonCard[] = [
    {
      id: 'med',
      title: 'Тегін медицина',
      icon: <HeartPulse className="w-6 h-6" />,
      summary: 'Ақысыз, қолжетімді және тұрақты денсаулық сақтау кепілдігі.',
      details:
        'Дәрігерге көріну немесе ота жасату қаржылық апатқа әкелмейтін. Профилактикалық тексерулер барлық мекемелерде жүйелі түрде жүргізілді.',
      image: '/images/soviet-medicine.jpg',
    },
    {
      id: 'edu',
      title: 'Тегін білім',
      icon: <GraduationCap className="w-6 h-6" />,
      summary: 'Балабақшадан бастап жоғары оқу орнына дейінгі тегін жүйе.',
      details:
        'Кез келген ауыл баласы біліміне қарай Мәскеу немесе Алматының ең таңдаулы университеттеріне түсе алатын. Студенттер жатақхана және стипендиямен толық қамтылды.',
      image: '/images/soviet-education.jpg',
    },
    {
      id: 'work',
      title: 'Кепілді жұмыс',
      icon: <Briefcase className="w-6 h-6" />,
      summary: 'Оқуды бітірген жас маманға міндетті жұмыс орнын беру.',
      details:
        '«Жұмыссыздық» ұғымы ресми түрде болмады. Әрбір азаматтың тұрақты жалақысы және кезекті демалысы заңмен қорғалды.',
      image: '/images/soviet-profession.jpg',
    },
    {
      id: 'stab',
      title: 'Тұрақтылық',
      icon: <ShieldCheck className="w-6 h-6" />,
      summary: 'Бағаның ондаған жылдар бойы өзгермеуі және болжамдылық.',
      details:
        'Нанның бағасы немесе пәтер ақысы жылдар бойы бір қалыпта тұрды. Адамдар 5-10 жылдан кейін өмірі қандай болатынын нақты білетін.',
      image: '/images/hero-soviet-archive.jpg',
    },
    {
      id: 'eq',
      title: 'Теңсіздіктің аз болуы',
      icon: <Scale className="w-6 h-6" />,
      summary: 'Байлар мен кедейлер арасындағы алшақтықтың төмендігі.',
      details:
        'Қоғамда көзге ұрып тұратын сән-салтанат немесе төтенше кедейлік болмады. Көпшілік бірдей пәтерлерде тұрып, бірдей киінді, ортақ құндылықтармен өмір сүрді.',
      image: '/images/tensizdik.jpeg',
    },
    {
      id: 'prof',
      title: 'Кәсіпке құрмет',
      icon: <Award className="w-6 h-6" />,
      summary: 'Еңбек адамының, жұмысшы мен мұғалімнің жоғары мәртебесі.',
      details:
        'Зауыт жұмысшысы, шахтер немесе инженер қоғамның нағыз қаһармандары саналды. Олардың еңбегі газеттерде жазылып, үкіметтік марапаттар берілді.',
      image: '/images/kurmet.jpeg',
    },
    {
      id: 'power',
      title: 'Ұлы держава сезімі',
      icon: <Globe className="w-6 h-6" />,
      summary: 'Ғарышты бағындырған, әлемдегі ең ірі мемлекеттің бөлшегі болу.',
      details:
        'Қарапайым адамдар алып державаның күш-қуатын сезінді. Бұл оларға жеке басының маңыздылығы мен ұжымдық мақтаныш сезімін сыйлады.',
      image: '/images/ulyderzhava.jpeg',
    },
  ];

  return (
    <section
      id="reasons"
      className="py-24 sm:py-32 bg-[#fff7e8] border-b border-[#e7cca0] relative overflow-hidden"
    >
      <SectionBackground
        src="/photo/4.jpeg"
        overlayClassName=""
        imageClassName="opacity-100"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-2xl">
            <span className="text-xs font-mono text-[#d79b2b] uppercase tracking-widest block mb-2">
              03 // Сағыныш факторлары
            </span>
            <h2 className="font-headline text-3xl sm:text-5xl text-[#3b2415] font-normal leading-tight">
              Неге сағынады? Жеті іргетас
            </h2>
          </div>
          <p className="font-body text-[#75522e] text-xs sm:text-sm max-w-sm mt-4 md:mt-0 border-l border-[#d7ad68] pl-4 py-1">
            Кеңестік жүйе адамның базалық қауіпсіздік қажеттіліктерін толық
            жапты. Төмендегі кәртішкелердің үстіне апарып, тарихи мәнді
            көріңіз.
          </p>
        </div>

        {/* Cinematic Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {reasons.map((item, index) => {
            const isHovered = hoveredCard === item.id;
            const isWide = index === 6;

            return (
              <div
                key={item.id}
                onMouseEnter={() => setHoveredCard(item.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`group relative rounded-lg overflow-hidden border transition-all duration-500 bg-[#fff0d1] ${
                  isWide ? 'lg:col-span-3 lg:grid lg:grid-cols-2' : ''
                } ${
                  isHovered
                    ? 'border-[#b46f1f] shadow-2xl scale-[1.01]'
                    : 'border-[#d7ad68]/80 hover:border-[#c99143]'
                }`}
              >
                {/* Card content */}
                <div className="p-0 flex flex-col h-full">
                  <div className="h-44 overflow-hidden relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-2 left-2 p-2 rounded-md bg-[#fff7e8]/90">
                      {item.icon}
                    </div>
                  </div>
                  <div className="p-6 space-y-3">
                    <h3 className="font-headline text-xl">{item.title}</h3>
                    <p className="text-sm text-[#d79b2b]">{item.summary}</p>
                    <p className="text-xs text-[#75522e]">{item.details}</p>
                  </div>
                </div>

                {/* Micro action tag */}
                <div className="pt-2 flex items-center justify-between text-[10px] text-[#b2824a] uppercase tracking-widest font-mono">
                  <span>Психологиялық тірек</span>
                  <span className="group-hover:text-[#b46f1f] transition-colors">
                    ● АРХИВ КУӘЛІГІ
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Analytical summary */}
        <div className="mt-16 p-6 rounded-lg bg-gradient-to-r from-[#fff0d1] to-[#fff7e8] border border-[#d7ad68] flex flex-col sm:flex-row items-center justify-between text-center sm:text-left gap-6">
          <div className="space-y-1">
            <span className="text-xs text-[#956b3a] uppercase tracking-wider block font-mono">
              Аналитикалық қорытынды
            </span>
            <p className="text-sm text-[#604020]">
              Бұл факторлардың барлығы дерлік адамның{' '}
              <strong className="text-[#3b2415] font-semibold">
                болашақ алдындағы үрейін
              </strong>{' '}
              жоюға бағытталған еді.
            </p>
          </div>
          <a
            href="#compare"
            className="px-4 py-2 text-xs bg-[#e6bf7c] hover:bg-[#d19a45] text-[#5b3519] border border-[#d7ad68] rounded transition-all whitespace-nowrap"
          >
            Салыстыруға өту →
          </a>
        </div>
      </div>
    </section>
  );
};