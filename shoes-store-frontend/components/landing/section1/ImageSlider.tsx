'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';

interface ImageSliderProps {
  images: (string | StaticImageData)[];
  autoplayDelay?: number;
  resumeDelay?: number;
}

const sliderThemes = [
  { gradient: "from-red-500/10 via-red-500/5 to-transparent", accent: "bg-red-500", text: "text-red-500" },
  { gradient: "from-orange-500/10 via-orange-500/5 to-transparent", accent: "bg-orange-500", text: "text-orange-500" },
  { gradient: "from-green-500/10 via-green-500/5 to-transparent", accent: "bg-green-500", text: "text-green-500" },
  { gradient: "from-blue-500/10 via-blue-500/5 to-transparent", accent: "bg-blue-500", text: "text-blue-500" },
];

export function ImageSlider({
  images,
  autoplayDelay = 5000,
  resumeDelay = 10000
}: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const autoplayTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const resumeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Main autoplay effect
  useEffect(() => {
    if (!isAutoplay) return;

    autoplayTimeoutRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, autoplayDelay);

    return () => {
      if (autoplayTimeoutRef.current) clearInterval(autoplayTimeoutRef.current);
    };
  }, [isAutoplay, images.length, autoplayDelay]);

  // Resume autoplay after user interaction
  const handleUserInteraction = () => {
    setIsAutoplay(false);
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    resumeTimeoutRef.current = setTimeout(() => {
      setIsAutoplay(true);
    }, resumeDelay);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    handleUserInteraction();
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    handleUserInteraction();
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    handleUserInteraction();
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') goToPrevious();
      if (e.key === 'ArrowRight') goToNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [images.length]);

  const currentTheme = sliderThemes[currentIndex % sliderThemes.length];

  return (
    <div className="relative w-full group/slider">
      {/* Slider Container */}
      <div className="relative rounded-[32px] md:rounded-[60px] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.3)] bg-white aspect-square sm:aspect-[1.5/1] md:aspect-video border border-gray-100 transition-all duration-700">
        
        {/* Dynamic Background Gradient */}
        <div className={`absolute inset-0 bg-linear-to-br ${currentTheme.gradient} transition-all duration-1000`} />

        {/* Images with smooth zoom/fade transition */}
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] p-4 sm:p-12 md:p-24 ${
              index === currentIndex 
                ? 'opacity-100 scale-100 rotate-0 translate-x-0' 
                : index < currentIndex 
                  ? 'opacity-0 scale-90 -rotate-6 -translate-x-full' 
                  : 'opacity-0 scale-90 rotate-6 translate-x-full'
            }`}
          >
            <div className="relative w-full h-full drop-shadow-[0_40px_40px_rgba(0,0,0,0.2)]">
              <Image
                src={image}
                alt={`Shoe ${index + 1}`}
                fill
                className={`w-full h-full object-contain transition-transform duration-2000 ${index === currentIndex ? 'scale-105' : 'scale-90'}`}
                priority={index === 0}
              />
            </div>
          </div>
        ))}

        {/* Autoplay Progress Bar */}
        {isAutoplay && (
          <div className="absolute top-0 left-0 w-full h-1.5 bg-black/5 z-30">
            <div 
              className={`h-full ${currentTheme.accent} transition-all duration-100 linear`}
              style={{
                width: '100%',
                animation: `progress ${autoplayDelay}ms linear`,
              }}
            />
          </div>
        )}

        {/* Premium Overlay Content - Glassmorphism */}
        <div className="absolute top-4 left-4 md:top-12 md:left-12 z-10">
          <div className="backdrop-blur-xl bg-white/80 border border-white/60 p-4 md:p-8 rounded-[24px] md:rounded-[32px] shadow-2xl space-y-2 md:space-y-4 max-w-[200px] sm:max-w-xs md:max-w-md transform transition-all duration-700 delay-300">
            <span className={`text-[10px] md:text-sm font-bold uppercase tracking-[0.2em] ${currentTheme.text}`}>
              New Collection 2026
            </span>
            <h2 className="text-xl sm:text-3xl md:text-5xl font-black text-black leading-tight drop-shadow-sm">
              THE WEEKLY <br />
              <span className="text-gray-900">
                DROP
              </span>
            </h2>
            <div className="flex items-center gap-4 pt-1 md:pt-2">
              <Link href="/#featured-selection" className="bg-black text-white px-4 py-2 md:px-8 md:py-4 rounded-xl md:rounded-2xl font-bold hover:bg-gray-800 transition-all active:scale-95 text-[10px] md:text-base shadow-lg shadow-black/20 group/btn flex items-center gap-2">
                SHOP NOW
                <svg className="w-3 h-3 md:w-4 md:h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Styled Navigation Buttons */}
        <div className="absolute bottom-4 right-4 md:bottom-12 md:right-12 z-20 flex gap-2 md:gap-4">
          <button
            onClick={goToPrevious}
            className="backdrop-blur-xl bg-white/60 hover:bg-white border border-white/40 p-3 md:p-5 rounded-2xl md:rounded-3xl transition-all active:scale-90 shadow-xl group/nav"
            aria-label="Previous slide"
          >
            <svg className="w-4 h-4 md:w-6 md:h-6 text-black group-hover/nav:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={goToNext}
            className="backdrop-blur-xl bg-white/60 hover:bg-white border border-white/40 p-3 md:p-5 rounded-2xl md:rounded-3xl transition-all active:scale-90 shadow-xl group/nav"
            aria-label="Next slide"
          >
            <svg className="w-4 h-4 md:w-6 md:h-6 text-black group-hover/nav:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Modern Indicators */}
      <div className="flex justify-center items-center gap-4 mt-12">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className="group/indicator relative h-8 flex items-center p-2"
            aria-label={`Go to slide ${index + 1}`}
          >
            <div className={`h-1.5 rounded-full transition-all duration-500 bg-gray-300 ${
              index === currentIndex ? `w-12 ${currentTheme.accent}` : 'w-6 hover:bg-gray-400'
            }`} />
            {index === currentIndex && (
              <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-black text-gray-400 uppercase tracking-widest whitespace-nowrap">
                0{index + 1}
              </span>
            )}
          </button>
        ))}
      </div>

      <style jsx>{`
        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </div>
  );
}
