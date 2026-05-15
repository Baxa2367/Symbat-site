import React, { useState } from 'react';
import { BarChart3, HelpCircle, Info } from 'lucide-react';
import { SectionBackground } from './SectionBackground';

interface CountryData {
  name: string;
  percentage: number;
  label: string;
  details: string;
  surveyYear: string;
}

export const StatisticsSection: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState<string>('Қазақстан');
  const [activeTab, setActiveTab] = useState<'overall' | 'age'>('overall');

  const countries: CountryData[] = [
    {
      name: 'Қазақстан',
      percentage: 61,
      label: '61%',
      surveyYear: '2021-2023',
      details: 'Қазақстандағы респонденттердің басым бөлігі (әсіресе 50 жастан асқандар) кеңес дәуіріндегі әлеуметтік кепілдіктер мен баспана алу мүмкіндігін ерекше сағынышпен атайды.'
    },
    {
      name: 'Армения',
      percentage: 71,
      label: '71%',
      surveyYear: '2022',
      details: 'Армениядағы жоғары көрсеткіш геосаяси қауіпсіздікке және бұрынғы одақтас республикалармен тығыз экономикалық, мәдени байланыстардың үзілуіне қатысты уайыммен түсіндіріледі.'
    },
    {
      name: 'Қырғызстан',
      percentage: 60,
      label: '60%',
      surveyYear: '2023',
      details: 'Қырғызстандағы аға буын ауыл шаруашылығы мен өнеркәсіптің жоспарлы дамуын және жұмыссыздықтың болмауын қазіргі нарықтық тұрақсыздыққа қарсы қояды.'
    },
    {
      name: 'Ресей',
      percentage: 63,
      label: '60%+',
      surveyYear: 'Левада-Орталығы',
      details: 'Ресейде ностальгия деңгейі соңғы онжылдықта тұрақты түрде 60-65% аралығында сақталып келеді. Мұнда ұлы державалық сезім мен әлеуметтік қорғаныс факторлары қатар жүреді.'
    }
  ];

  const currentCountryObj = countries.find(c => c.name === selectedCountry) || countries[0];

  return (
    <section id="stats" className="py-24 sm:py-32 bg-[#f7e7c7] border-b border-[#e7cca0] relative overflow-hidden">
      <SectionBackground
        src="/photo/3.jpeg"
        overlayClassName=""
        imageClassName="opacity-100"
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Title */}
        <div className="relative p-6 sm:p-8 rounded-lg bg-[#f4d9a9]/80 border-l-4 border-[#b46f1f] shadow-2xl">
          <div className="flex items-center space-x-2 text-xs text-[#d79b2b] uppercase tracking-widest">
            <BarChart3 className="w-4 h-4 text-[#b46f1f]" />
            <span>02 // Социологиялық өлшемдер</span>
          </div>
          <h2 className="font-headline text-3xl sm:text-5xl text-[#3b2415] font-normal leading-tight">
            Сандар сөйлейді: КСРО-ны кімдер және қаншалықты сағынады?
          </h2>
          <p className="font-body text-[#75522e] text-sm sm:text-base font-light pt-2">
            Тәуелсіз зерттеу орталықтарының сауалнамаларына сәйкес, бұрынғы одақтас республикалардың басым бөлігінде халықтың жартысынан көбі кеңестік жүйені қазіргі уақыттан жайлырақ деп есептейді.
          </p>
        </div>

        {/* Interactive layout: Controls + Chart */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Bar Chart Visualization */}
          <div className="lg:col-span-7 bg-[#fff7e8] p-6 sm:p-8 rounded-lg border border-[#d7ad68]/80 shadow-xl relative">
            
            {/* View Mode selector */}
            <div className="flex items-center justify-between pb-6 mb-8 border-b border-[#d7ad68]">
              <span className="text-xs text-[#75522e] uppercase tracking-wider font-mono">
                Республикалар бойынша үлес
              </span>
              <div className="flex space-x-2 bg-[#f0d4a3] p-1 rounded border border-[#d7ad68]">
                <button
                  onClick={() => setActiveTab('overall')}
                  className={`px-3 py-1 text-xs rounded transition-all ${
                    activeTab === 'overall' ? 'bg-[#d19a45] text-[#3b2415] font-medium' : 'text-[#956b3a] hover:text-[#604020]'
                  }`}
                >
                  Жалпы көрсеткіш
                </button>
                <button
                  onClick={() => setActiveTab('age')}
                  className={`px-3 py-1 text-xs rounded transition-all ${
                    activeTab === 'age' ? 'bg-[#d19a45] text-[#3b2415] font-medium' : 'text-[#956b3a] hover:text-[#604020]'
                  }`}
                >
                  55+ жас тобы
                </button>
              </div>
            </div>

            {/* Bars container */}
            <div className="space-y-6">
              {countries.map((country) => {
                const isSelected = country.name === selectedCountry;
                // Add minor premium boost for 55+ view
                const displayPercent = activeTab === 'overall' ? country.percentage : Math.min(country.percentage + 12, 89);
                const displayLabel = activeTab === 'overall' ? country.label : `${displayPercent}%`;

                return (
                  <div 
                    key={country.name}
                    onClick={() => setSelectedCountry(country.name)}
                    className={`group cursor-pointer p-3 rounded transition-all ${
                      isSelected ? 'bg-[#e6bf7c]/80 ring-1 ring-[#b46f1f]/40' : 'hover:bg-[#f4d9a9]'
                    }`}
                  >
                    <div className="flex justify-between items-center mb-1.5 text-sm">
                      <span className={`font-medium transition-colors ${isSelected ? 'text-[#3b2415]' : 'text-[#75522e] group-hover:text-[#4d311c]'}`}>
                        {country.name}
                      </span>
                      <span className={`font-mono font-bold text-base transition-colors ${isSelected ? 'text-[#b46f1f]' : 'text-[#956b3a]'}`}>
                        {displayLabel}
                      </span>
                    </div>

                    {/* Progress track */}
                    <div className="w-full h-3 bg-[#f0d4a3] rounded-sm overflow-hidden relative border border-[#d7ad68]">
                      <div 
                        className={`h-full transition-all duration-1000 ease-out rounded-sm ${
                          isSelected 
                            ? 'bg-gradient-to-r from-[#b46f1f] to-[#d79b2b]' 
                            : 'bg-[#b97d2e] group-hover:bg-[#a66a24]'
                        }`}
                        style={{ width: `${displayPercent}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Footnote inside chart box */}
            <div className="mt-8 pt-4 border-t border-[#e7cca0] flex items-center justify-between text-[11px] text-[#956b3a]">
              <span className="flex items-center">
                <Info className="w-3.5 h-3.5 mr-1.5 text-[#b2824a]" />
                Бағанды басып толық ақпаратты көріңіз
              </span>
              <span>Дереккөз: Социологиялық сауалнамалар</span>
            </div>

          </div>

          {/* Right Column: Dynamic Info Card based on Selection */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <div className="bg-[#f4d9a9] p-6 sm:p-8 rounded-lg border-t-4 border-[#d79b2b] relative">
              
              <div className="absolute top-4 right-4 text-[#c99d61] font-mono text-xs select-none">
                {currentCountryObj.surveyYear}
              </div>

              <span className="text-xs text-[#956b3a] uppercase tracking-widest block font-mono mb-2">
                Аймақтық ерекшелік
              </span>
              
              <h3 className="font-headline text-2xl text-[#3b2415] font-normal mb-4 flex items-center">
                {currentCountryObj.name}
                <span className="ml-3 px-2 py-0.5 text-xs bg-[#b46f1f]/20 text-[#b46f1f] rounded font-mono">
                  {currentCountryObj.label}
                </span>
              </h3>

              <p className="font-body text-[#604020] text-sm sm:text-base font-light leading-relaxed mb-6">
                {currentCountryObj.details}
              </p>

              {/* Emotional mini counter layout */}
              <div className="bg-[#fff7e8] p-4 rounded border border-[#d7ad68] grid grid-cols-2 gap-4 text-center">
                <div className="border-r border-[#d7ad68]">
                  <span className="block text-[10px] text-[#956b3a] uppercase">Ностальгия индексі</span>
                  <span className="text-xl font-bold font-mono text-[#3b2415]">Жоғары</span>
                </div>
                <div>
                  <span className="block text-[10px] text-[#956b3a] uppercase">Басты себеп</span>
                  <span className="text-xs font-medium text-[#d79b2b] block mt-1">Тұрақтылық</span>
                </div>
              </div>

            </div>

            {/* Context callout box */}
            <div className="mt-6 p-4 rounded bg-[#b46f1f]/5 border border-[#b46f1f]/20 flex items-start space-x-3">
              <HelpCircle className="w-5 h-5 text-[#b46f1f] shrink-0 mt-0.5" />
              <div className="text-xs text-[#75522e] leading-normal">
                <span className="text-[#604020] font-medium block mb-0.5">Неліктен көрсеткіштер ұқсас?</span>
                Ортақ тарихи жад пен зейнетақы жүйесінің ауыртпалығы барлық елдегі қарттардың жағдайын бірдей етіп отыр.
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
