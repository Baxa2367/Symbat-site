import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Sparkles } from 'lucide-react';

export const Navigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [readingProgress, setReadingProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
      
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setReadingProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const chapters = [
    { id: 'intro', label: 'Кіріспе' },
    { id: 'stats', label: 'Статистика' },
    { id: 'reasons', label: 'Факторлар' },
    { id: 'compare', label: 'Салыстыру' },
    { id: 'interview', label: 'Дауыстар' },
    { id: 'history', label: 'Тарихи жад' },
  ];

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-[#fff7e8]/90 backdrop-blur-md border-b border-[#d7ad68] py-3' : 'bg-transparent py-6'
    }`}>
      {/* Top progress bar */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#e7cca0]">
        <div 
          className="h-full bg-gradient-to-r from-[#b46f1f] via-[#d79b2b] to-[#e8b94f] transition-all duration-150"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center space-x-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="w-2 h-2 rounded-full bg-[#b46f1f] animate-pulse" />
          <span className="font-headline tracking-widest text-xs uppercase text-[#75522e] hover:text-[#3b2415] transition-colors">
            DOCU // КСРО феномені
          </span>
        </div>

        {/* Chapters navigation for desktop */}
        <nav className="hidden lg:flex items-center space-x-6 text-xs text-[#75522e]">
          {chapters.map((ch) => (
            <button
              key={ch.id}
              onClick={() => scrollTo(ch.id)}
              className="hover:text-[#e8b94f] transition-colors relative py-1 group tracking-wide"
            >
              {ch.label}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#b46f1f] transition-all group-hover:w-full" />
            </button>
          ))}
        </nav>

        {/* Ambient Mode toggler */}
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setSoundEnabled(!soundEnabled)}
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full border border-[#d7ad68] bg-[#f4d9a9]/60 text-xs text-[#75522e] hover:text-[#3b2415] hover:border-[#c99143] transition-all"
            title="Интерактивті дыбысты қосу/өшіру"
          >
            {soundEnabled ? (
              <>
                <Volume2 className="w-3.5 h-3.5 text-[#b46f1f]" />
                <span className="hidden sm:inline text-[11px]">Аудио: ON</span>
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5 text-[#956b3a]" />
                <span className="hidden sm:inline text-[11px]">Аудио: OFF</span>
              </>
            )}
          </button>
          
          <div className="hidden sm:flex items-center space-x-1 px-2.5 py-1 rounded bg-[#b46f1f]/10 text-[#b46f1f] border border-[#b46f1f]/20 text-[10px] tracking-wider uppercase">
            <Sparkles className="w-3 h-3 mr-1" />
            <span>Interactive Longread</span>
          </div>
        </div>
      </div>
    </header>
  );
};
