'use client';

import dynamic from "next/dynamic";

const Shoe3D = dynamic(() => import("./Shoe3D"), { ssr: false });

export default function Section1() {
  return (
    <main className="relative pt-32 pb-40 px-6 overflow-hidden">
      {/* Decorative Background Glows */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-amber-500/10 blur-[150px] rounded-full animate-pulse -z-10" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-orange-600/10 blur-[150px] rounded-full animate-bounce-slow -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Text Content */}
          <div className="space-y-10 relative z-10">
            <div className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 backdrop-blur-md">
              <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-amber-400">
                New Arrivals 2025
              </span>
            </div>

            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.85] animate-in fade-in slide-in-from-bottom-8 duration-1000">
              GENTS<br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-400 via-orange-400 to-yellow-600">
                COLLECTION
              </span>
            </h1>

            <p className="text-white/60 text-lg md:text-xl max-w-xl font-medium tracking-wide leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
              Earth-toned precision meets uncompromising style. 
              Discover the warmth of the new season with our premium leather and performance drops.
            </p>

            <div className="flex flex-wrap gap-4 pt-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
              <button className="px-10 py-5 rounded-full bg-white text-black font-black uppercase tracking-widest hover:bg-amber-600 hover:text-white transition-all duration-500 shadow-2xl active:scale-95">
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
               <div className="absolute inset-0 bg-linear-to-br from-amber-500/20 to-orange-600/20 blur-3xl rounded-full animate-pulse opacity-50" />
            </div>
            
            {/* 3D Component */}
            <div className="relative z-10 w-full h-full">
               <Shoe3D modelUrl="/resource/3d model/brown3dmodel.glb" accentColor="#f59e0b" />
            </div>

            {/* Floating Badges */}
            <div className="absolute top-0 right-0 p-8 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl animate-bounce-slow z-20 pointer-events-none">
              <div className="text-2xl font-black text-white italic">CLASSIC</div>
              <div className="text-[10px] uppercase font-black tracking-widest text-amber-400">Timeless Style</div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decorative Rings */}
      <div className="absolute -bottom-40 -left-40 w-160 h-160 border border-white/5 rounded-full pointer-events-none" />
      <div className="absolute top-20 -right-20 w-80 h-80 border border-amber-500/5 rounded-full pointer-events-none" />
    </main>
  );
}
