'use client';

import dynamic from "next/dynamic";

const Shoe3D = dynamic(() => import("./Shoe3D"), { ssr: false });

export default function Section1() {
  return (
    <main id="section1" className="relative pt-32 pb-40 px-6 overflow-hidden">
      {/* Decorative Background Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-pink-500/10 blur-[150px] rounded-full animate-pulse -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/10 blur-[150px] rounded-full animate-bounce-slow -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Text Content */}
          <div className="space-y-10 relative z-10">
            <div className="inline-block px-4 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/20 backdrop-blur-md">
              <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-pink-400">
                New Arrivals 2025
              </span>
            </div>

            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.85] animate-in fade-in slide-in-from-bottom-8 duration-1000">
              LADIES<br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-pink-400 via-rose-400 to-purple-600">
                COLLECTION
              </span>
            </h1>

            <p className="text-white/60 text-lg md:text-xl max-w-xl font-medium tracking-wide leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
              Elevate your every step with our premium selection. 
              Engineering meets high-fashion aesthetics for the modern woman.
            </p>

            <div className="flex flex-wrap gap-4 pt-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
              <button 
                onClick={() => document.getElementById('ladies-collection')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-10 py-5 rounded-full bg-white text-black font-black uppercase tracking-widest hover:bg-pink-500 hover:text-white transition-all duration-500 shadow-2xl active:scale-95"
              >
                Shop Now
              </button>
              <button className="px-10 py-5 rounded-full bg-white/5 text-white border border-white/10 font-black uppercase tracking-widest hover:bg-white/10 transition-all duration-500 backdrop-blur-md">
                View Trends
              </button>
            </div>
          </div>

          {/* 3D Visual Showcase */}
          <div className="relative group h-[600px] lg:block hidden">
            <div className="absolute inset-0 z-0">
               <div className="absolute inset-0 bg-linear-to-br from-pink-500/20 to-purple-600/20 blur-3xl rounded-full animate-pulse opacity-50" />
            </div>
            
            {/* 3D Component */}
            <div className="relative z-10 w-full h-full">
               <Shoe3D />
            </div>

            {/* Floating Badges */}
            <div className="absolute top-0 right-0 p-8 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl animate-bounce-slow z-20 pointer-events-none">
              <div className="text-2xl font-black text-white italic">40% OFF</div>
              <div className="text-[10px] uppercase font-black tracking-widest text-pink-400">Limited Edition</div>
            </div>
            
            
          </div>
        </div>
      </div>

      {/* Background Decorative Rings */}
      <div className="absolute -bottom-40 -right-40 w-160 h-160 border border-white/5 rounded-full pointer-events-none" />
      <div className="absolute top-20 -left-20 w-80 h-80 border border-pink-500/5 rounded-full pointer-events-none" />
    </main>
  );
}
