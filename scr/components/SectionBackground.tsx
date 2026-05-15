import React from 'react';

interface SectionBackgroundProps {
  src: string;
  overlayClassName?: string;
  imageClassName?: string;
}

export const SectionBackground: React.FC<SectionBackgroundProps> = ({
  src,
  overlayClassName = 'bg-[#fff7e8]/85',
  imageClassName = '',
}) => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <img
        src={src}
        alt=""
        aria-hidden="true"
        className={`w-full h-full object-cover ${imageClassName}`}
      />
      {overlayClassName && <div className={`absolute inset-0 ${overlayClassName}`} />}
    </div>
  );
};