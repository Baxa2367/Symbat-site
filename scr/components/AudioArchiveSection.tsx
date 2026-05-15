import React, { useRef, useState } from 'react';
import { Music2, Play, Radio, Square } from 'lucide-react';
import { SectionBackground } from './SectionBackground';

const audioSrc = '/photo/Ermek_Serkebaev_-_Ty_da_S_jem_men_(SkySound.cc).mp3';

const formatTime = (value: number) => {
  if (!Number.isFinite(value)) return '0:00';
  const minutes = Math.floor(value / 60);
  const seconds = Math.floor(value % 60);
  return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
};

export const AudioArchiveSection: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const toggleAudio = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      return;
    }

    try {
      await audio.play();
      setIsPlaying(true);
    } catch {
      setIsPlaying(false);
    }
  };

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <section id="audio-archive" className="py-24 sm:py-32 bg-[#fff7e8] border-b border-[#e7cca0] relative overflow-hidden" style={{ backgroundImage: `url('/photo/8.jpeg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <SectionBackground
        src="/photo/8.jpeg"
        overlayClassName=""
        imageClassName="opacity-100"
      />

      <audio
        ref={audioRef}
        src={audioSrc}
        preload="metadata"
        onLoadedMetadata={(event) => setDuration(event.currentTarget.duration)}
        onTimeUpdate={(event) => setCurrentTime(event.currentTarget.currentTime)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => {
          setIsPlaying(false);
          setCurrentTime(0);
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative p-6 sm:p-8 rounded-lg bg-[#f4d9a9]/80 border-l-4 border-[#b46f1f] shadow-2xl">
          <div className="flex items-center space-x-2 text-xs font-mono text-[#d79b2b] uppercase tracking-widest">
            <Music2 className="w-4 h-4 text-[#b46f1f]" />
            <span>08 // Аудио архив</span>
          </div>
          <h2 className="font-headline text-3xl sm:text-5xl text-[#3b2415] font-normal leading-tight">
            Әуен арқылы естелікке оралу
          </h2>
          <p className="font-body text-[#75522e] text-sm sm:text-base font-light">
            Бұл бөлімде архивтік көңіл-күйді нақты аудио арқылы сезінуге болады.
          </p>
        </div>

        <div className={`p-6 sm:p-8 rounded-lg border transition-all duration-500 bg-[#fff0d1]/90 backdrop-blur-sm ${
          isPlaying ? 'border-[#b46f1f] shadow-2xl ring-1 ring-[#b46f1f]/20' : 'border-[#d7ad68]/80'
        }`}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-3 flex flex-col sm:flex-row lg:flex-col justify-between sm:items-center lg:items-start gap-4 border-b lg:border-b-0 lg:border-r border-[#d7ad68] pb-4 lg:pb-0 lg:pr-6">
              <button
                onClick={toggleAudio}
                className={`group flex items-center space-x-3 px-4 py-3 rounded-md transition-all w-full sm:w-auto lg:w-full justify-center sm:justify-start ${
                  isPlaying
                    ? 'bg-[#b46f1f] text-[#fff7e8]'
                    : 'bg-[#e6bf7c] hover:bg-[#d19a45] text-[#4d311c] border border-[#d7ad68]'
                }`}
              >
                {isPlaying ? (
                  <>
                    <Square className="w-4 h-4 fill-current animate-pulse" />
                    <span className="text-xs font-mono tracking-wider font-semibold">ТОҚТАТУ</span>
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 fill-current text-[#b46f1f] group-hover:text-[#3b2415] transition-colors" />
                    <span className="text-xs font-mono tracking-wider">ТЫҢДАУ</span>
                  </>
                )}
              </button>

              <div className="w-full flex flex-col space-y-1.5">
                <div className="flex items-end justify-between h-8 px-1 bg-[#f0d4a3]/40 rounded border border-[#e7cca0] overflow-hidden">
                  {[4, 12, 8, 16, 5, 20, 14, 24, 10, 18, 6, 22, 12, 28, 8, 16, 4].map((height, i) => {
                    const activeH = isPlaying ? Math.max(4, Math.sin(currentTime * 5 + i) * 14 + 14) : height * 0.3;
                    return (
                      <div
                        key={i}
                        className={`w-1 rounded-t transition-all duration-150 ${
                          isPlaying ? 'bg-[#b46f1f]' : 'bg-[#d3a764]'
                        }`}
                        style={{ height: `${activeH}px` }}
                      />
                    );
                  })}
                </div>

                <div className="h-1.5 bg-[#f0d4a3]/60 rounded-full border border-[#e7cca0] overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#b46f1f] to-[#d79b2b] transition-all duration-150"
                    style={{ width: `${progress}%` }}
                  />
                </div>

                <div className="flex justify-between text-[10px] font-mono text-[#956b3a] px-0.5">
                  <span className={isPlaying ? 'text-[#b46f1f] font-bold' : ''}>
                    {formatTime(currentTime)}
                  </span>
                  <span>{formatTime(duration)}</span>
                </div>
              </div>

              <div className="hidden lg:flex items-center text-[10px] text-[#b2824a] font-mono space-x-1">
                <Radio className="w-3 h-3 text-[#d79b2b]" />
                <span>MP3 // ARCHIVE TRACK</span>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-4">
              <p className="font-headline italic text-lg sm:text-xl text-[#4d311c] leading-relaxed font-light">
                Әуен кейде мәтіннен де тез әсер етеді: ол өткен уақыттың реңін, адамның ішкі күйін және сағыныштың жылы үнін бір сәтте жеткізеді.
              </p>
            </div>

            <div className="lg:col-span-3 flex items-center space-x-4 lg:justify-end border-t lg:border-t-0 border-[#e7cca0] pt-4 lg:pt-0" >
              <div className="w-16 h-16 rounded-full overflow-hidden shrink-0 border border-[#c99143] sepia-[.18] saturate-125 contrast-110 brightness-105">
                <img src="/photo/8.jpeg" alt="Аудио архив" className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="font-headline text-base text-[#3b2415] font-normal">
                  Ermek Serkebaev
                </h4>
                <span className="block text-xs font-mono text-[#d79b2b]">
                  Tynda suem men
                </span>
                <span className="block text-[11px] text-[#956b3a] font-light mt-0.5">
                  Аудио жазба • mp3
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};