import React, { useRef, useState } from 'react';
import { Mic, Play, Radio, Square, Video } from 'lucide-react';
import { SectionBackground } from './SectionBackground';

const videoSrc = 'https://www.youtube.com/embed/ltY6HvJurrs'
const audioSrc = '/photo/audio1.mp3';

const formatTime = (value: number) => {
  if (!Number.isFinite(value)) return '0:00';
  const minutes = Math.floor(value / 60);
  const seconds = Math.floor(value % 60);
  return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
};

export const InterviewSection: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);


  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <section id="interview" className="py-24 sm:py-32 bg-[#fff7e8] border-b border-[#e7cca0] relative overflow-hidden">
      <SectionBackground
        src="/photo/6.jpeg"
        overlayClassName=""
        imageClassName="opacity-100"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative p-6 sm:p-8 rounded-lg bg-[#f4d9a9]/80 border-l-4 border-[#b46f1f] shadow-2xl">
          <div className="flex items-center space-x-2 text-xs font-mono text-[#d79b2b] uppercase tracking-widest">
            <Mic className="w-4 h-4 text-[#b46f1f]" />
            <span>05 // Видео және аудио сұхбат</span>
          </div>
          <h2 className="font-headline text-3xl sm:text-5xl text-[#3b2415] font-normal leading-tight">
            Сұхбат: естелік пен дауыс
          </h2>
          <p className="font-body text-[#75522e] text-sm sm:text-base font-light leading-relaxed">
            Бұл бөлімде алдымен бейне сұхбат көрсетіледі, ал төменгі блокта сол материалдың аудио нұсқасы тыңдалады.
          </p>
        </div>
      

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-8 rounded-xl overflow-hidden border border-[#d7ad68]/80 bg-[#fff0d1]/90 shadow-2xl backdrop-blur-sm">
            <div className="relative aspect-video bg-[#3b2415]">
               <iframe
                   src="https://www.youtube.com/embed/ltY6HvJurrs"
                    title="YouTube video interview"
                       frameBorder="0"
                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                   allowFullScreen
                    className="w-full h-full"
                />
           {/* Оставляем бейдж только если он не мешает клику по видео. Если мешает, уберите pointer-events-none или поменяйте на hover */}
           <div className="pointer-events-none absolute left-4 top-4 inline-flex items-center space-x-2 rounded bg-[#fff7e8]/90 px-3 py-1.5 text-[10px] font-mono uppercase tracking-widest text-[#5b3519] border border-[#d7ad68]">
                <Video className="w-3.5 h-3.5 text-[#b46f1f]" />
                <span>Video interview</span>
           </div>
            </div>
         </div>

          <div className="lg:col-span-4 rounded-xl border border-[#d7ad68]/80 bg-[#fff0d1]/90 p-6 sm:p-8 shadow-xl backdrop-blur-sm flex flex-col justify-between">
            <div className="space-y-5">
              <div className="inline-flex items-center space-x-2 text-[10px] font-mono uppercase tracking-widest text-[#d79b2b]">
                <Radio className="w-3.5 h-3.5 text-[#b46f1f]" />
                <span>Archive frame</span>
              </div>
              <p className="font-headline italic text-xl sm:text-2xl text-[#4d311c] leading-relaxed font-light">
                Сұхбаттың бейне форматы кейіпкердің дауысын ғана емес, көзқарасын, кідірісін және эмоциясын да сақтайды.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 border-t border-[#e7cca0] pt-5 text-xs">
              <div>
                <span className="block text-[10px] text-[#956b3a] uppercase font-mono">Формат</span>
                <span className="text-[#4d311c] font-medium">MP4 video</span>
              </div>
              <div>
                <span className="block text-[10px] text-[#956b3a] uppercase font-mono">Материал</span>
                <span className="text-[#4d311c] font-medium">Сұхбат</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};