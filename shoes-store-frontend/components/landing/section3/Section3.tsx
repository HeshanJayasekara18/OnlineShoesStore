'use client';

import React, { useState } from 'react';
import { ArrowRight, Maximize2 } from 'lucide-react';

export function Section3() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 flex items-center justify-center p-8">
      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div className="space-y-6">
          {/* Virtual Fitting Room Badge */}
          <div className="inline-flex items-center gap-2 bg-cyan-50 text-cyan-600 px-4 py-2 rounded-full border border-cyan-200">
            <Maximize2 size={16} />
            <span className="text-sm font-semibold uppercase tracking-wide">Virtual Fitting Room</span>
          </div>

          {/* Main Heading */}
          <div className="space-y-2">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              AR TRY-ON
            </h1>
            <div className="relative inline-block">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                TECHNOLOGY
              </h1>
              <div className="absolute -bottom-2 left-0 w-3/4 h-3 bg-blue-500 -z-10 rounded"></div>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-600 text-lg leading-relaxed max-w-md">
            Unsure about the fit? Use our advanced AR technology to see exactly how they look on your feet. Scan, visualize, and buy with confidence.
          </p>

          {/* CTA Button */}
          <button 
            className="group bg-black text-white px-8 py-4 rounded-full font-semibold flex items-center gap-3 hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <span>Try It Now</span>
            <ArrowRight 
              size={20} 
              className={`transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`}
            />
          </button>
        </div>

        {/* Right Content - Phone Mockup */}
        <div className="relative flex justify-center lg:justify-end">
          {/* Floating Animation Container */}
          <div className="relative animate-float">
            {/* Phone Frame */}
            <div className="relative w-[300px] md:w-[350px] bg-linear-to-br from-gray-800 to-black rounded-[3rem] p-3 shadow-2xl transform hover:scale-105 transition-transform duration-500">
              {/* Inner Phone */}
              <div className="bg-gray-200 rounded-[2.5rem] overflow-hidden relative">
                {/* Status Bar */}
                <div className="absolute top-0 left-0 right-0 flex justify-between items-center px-6 py-3 text-xs text-gray-600 z-20 bg-linear-to-b from-gray-200 to-transparent">
                  <span className="font-semibold">9:41 AM</span>
                  <span className="font-semibold">AR FITTING</span>
                </div>

                {/* AR Content */}
                <div className="relative aspect-9/16 bg-linear-to-br from-gray-300 via-gray-200 to-gray-300">
                  {/* Sneaker Image */}
                  <img 
                    src="https://images.unsplash.com/photo-1543508282-6319a3e2621f?w=500&q=80" 
                    alt="AR Sneaker View"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  
                  {/* AR Scanning Frame */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-4/5 h-2/5 border-4 border-cyan-400 rounded-lg animate-pulse">
                      {/* Corner Brackets */}
                      <div className="absolute -top-1 -left-1 w-8 h-8 border-l-4 border-t-4 border-cyan-400 rounded-tl-lg"></div>
                      <div className="absolute -top-1 -right-1 w-8 h-8 border-r-4 border-t-4 border-cyan-400 rounded-tr-lg"></div>
                      <div className="absolute -bottom-1 -left-1 w-8 h-8 border-l-4 border-b-4 border-cyan-400 rounded-bl-lg"></div>
                      <div className="absolute -bottom-1 -right-1 w-8 h-8 border-r-4 border-b-4 border-cyan-400 rounded-br-lg"></div>
                      
                      {/* Scanning Line */}
                      <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-cyan-400 to-transparent animate-scan"></div>
                    </div>
                  </div>

                  {/* Info Cards */}
                  <div className="absolute top-20 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg">
                    <p className="text-xs font-semibold text-gray-700">Nike Air Max 90</p>
                    <p className="text-xs text-gray-500">Size: US 10</p>
                  </div>

                  <div className="absolute top-36 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg">
                    <p className="text-xs font-semibold text-green-600">✓ Perfect Fit</p>
                  </div>
                </div>

                {/* Bottom Home Indicator */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1.5 bg-white rounded-full"></div>
              </div>
            </div>

            {/* Glow Effect */}
            <div className="absolute inset-0 bg-linear-to-r from-cyan-400/20 to-blue-500/20 rounded-[3rem] blur-2xl -z-10"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes scan {
          0% {
            top: 0;
          }
          100% {
            top: 100%;
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-scan {
          animation: scan 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}