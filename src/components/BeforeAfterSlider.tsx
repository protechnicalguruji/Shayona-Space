import React, { useState, useRef, useEffect } from 'react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  projectName?: string;
}

export default function BeforeAfterSlider({ beforeImage, afterImage, projectName }: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50); // percentage (0 - 100)
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove, { passive: true });
      window.addEventListener('touchend', handleMouseUp);
    } else {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging]);

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
  };

  return (
    <div className="flex flex-col gap-3">
      <div className="flex justify-between items-center px-1">
        <span className="font-mono text-xs uppercase tracking-widest text-[#B08D57]">Visual Demarcation</span>
        <span className="font-mono text-xs uppercase tracking-widest text-neutral-400">Drag to Compare</span>
      </div>
      <div 
        ref={containerRef} 
        className="relative w-full aspect-[16/10] overflow-hidden rounded shadow-2xl border border-neutral-200 select-none cursor-ew-resize"
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        id={`before-after-slider-${projectName?.replace(/\s+/g, '-').toLowerCase() || 'default'}`}
      >
        {/* Before Image (Left side / base) */}
        <div className="absolute inset-0 w-full h-full">
          <img 
            src={beforeImage} 
            alt="Before configuration" 
            className="w-full h-full object-cover pointer-events-none"
            referrerPolicy="no-referrer"
          />
          <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md border border-[#B08D57]/30 text-white font-mono text-[10px] uppercase tracking-widest px-3 py-1 rounded">
            Before Restoration
          </div>
        </div>

        {/* After Image (Right side / overlays on top with clip-path) */}
        <div 
          className="absolute inset-0 w-full h-full overflow-hidden transition-all duration-75"
          style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
        >
          <img 
            src={afterImage} 
            alt="After completed layout" 
            className="absolute inset-0 w-full h-full object-cover pointer-events-none filter brightness-105"
            style={{ width: containerRef.current?.getBoundingClientRect().width }}
            referrerPolicy="no-referrer"
          />
          <div className="absolute top-4 right-4 bg-[#B08D57]/90 backdrop-blur-md text-white font-mono text-[10px] uppercase tracking-widest px-3 py-1 rounded">
            Completed Masterpiece
          </div>
        </div>

        {/* Separator Line */}
        <div 
          className="absolute top-0 bottom-0 w-[2px] bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] z-20 pointer-events-none"
          style={{ left: `${sliderPosition}%` }}
        />

        {/* Drag Handle */}
        <div 
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white shadow-2xl border-2 border-[#B08D57] flex items-center justify-center z-30 pointer-events-none"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="flex gap-[4px] text-[#B08D57]">
            <svg className="w-3 h-3 fill-current rotate-180" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
            <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
