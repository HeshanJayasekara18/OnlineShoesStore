'use client';

import { ImageSlider } from './ImageSlider';
import redshoe from '../../../resource/images/redshoe-landing.png';
import orangeshoe from '../../../resource/images/orangeshoe-landing.png';
import greenshoe from '../../../resource/images/greenshoe-landing.png';
import blueshoe from '../../../resource/images/blueshoe-landing.png';

export function Section1() {
  const currentYear = new Date().getFullYear();

  const sliderImages = [orangeshoe, redshoe, greenshoe, blueshoe];
  return (
    <div className="relative  pt-12 md:pt-16 pb-24 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400/10 blur-[120px] rounded-full animate-pulse -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-400/10 blur-[120px] rounded-full animate-bounce-slow -z-10" />

      {/* Main Content */}
      <div className="max-w-7xl mt-20 mx-auto px-6">
        {/* Hero Text */}
        <div className="mb-16 md:mb-24 text-center">
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-xl">
             <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-white">
               Aether Official Showcase {currentYear}
             </span>
          </div>
          
          <h1 className="text-5xl sm:text-7xl md:text-9xl font-black text-black leading-[0.85] mb-8 uppercase tracking-tighter">
            DEFINE YOUR<br />
            <span className="relative inline-block px-4 py-2 mt-4">
              <span className="relative z-10 text-white">
                STRIDE
              </span>
              <div className="absolute inset-0 bg-linear-to-r from-cyan-500/10 to-blue-600/10 blur-xl -z-10" />
            </span>
          </h1>
          
          <p className="text-black text-sm md:text-lg max-w-2xl mx-auto mt-8 md:mt-12 leading-relaxed px-4 font-medium italic">
            &quot;Bold aesthetics for the modern creator. The perfect fusion of street-ready looks and all-day performance comfort.&quot;
          </p>
        </div>

        {/* Image Slider Component */}
        <div className="relative max-w-6xl mx-auto">
          {/* Main Slider */}
          <ImageSlider autoplayDelay={5000} resumeDelay={10000} images={sliderImages} />
        </div>
      </div>

      {/* Modern Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 group cursor-pointer opacity-50 hover:opacity-100 transition-opacity">
        <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-400">Scroll</span>
        <div className="w-px h-12 bg-linear-to-b from-gray-400 to-transparent relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-black animate-scroll-line" />
        </div>
      </div>
    </div>
  );
}
