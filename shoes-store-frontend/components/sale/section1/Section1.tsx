'use client';

import React from 'react';

export default function Section1() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 justify-center bg-linear-to-b from-red-600 via-rose-900 to-black text-white overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-500/30 blur-[120px] rounded-full animate-pulse -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-rose-500/20 blur-[120px] rounded-full animate-bounce-slow -z-10" />
      
      <div className="max-w-7xl mx-auto px-6 text-center z-10">
        <header className="space-y-6">
          <div className="inline-block px-6 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="text-sm font-black tracking-[0.3em] uppercase">Limited Time Offer</span>
          </div>
          
          <h1 className="text-7xl md:text-[10rem] font-black tracking-tighter leading-none uppercase italic animate-in fade-in zoom-in-95 duration-1000">
            SEASON <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-red-400 via-rose-500 to-orange-500">SALE</span>
          </h1>
          
          <p className="text-white/60 text-xl md:text-2xl max-w-2xl mx-auto font-medium tracking-tight animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
            UP TO <span className="text-white font-black text-3xl">70% OFF</span> ON ALL PREMIUM COLLECTIONS.
          </p>
          
          <div className="pt-10 flex flex-col md:flex-row gap-4 justify-center items-center animate-in fade-in slide-in-from-bottom-12 duration-700 delay-500">
            <button 
              onClick={() => document.getElementById('sale-grid')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-12 py-5 bg-white text-black font-black uppercase tracking-widest rounded-full hover:scale-110 active:scale-95 transition-all shadow-[0_0_40px_rgba(255,255,255,0.3)]"
            >
              Shop Now
            </button>
            <button className="px-12 py-5 bg-white/5 border border-white/10 backdrop-blur-md text-white font-black uppercase tracking-widest rounded-full hover:bg-white/10 transition-all">
              View Catalog
            </button>
          </div>
        </header>
      </div>

      {/* Decorative Text Overlay */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] select-none pointer-events-none -z-10">
        <span className="text-[30rem] font-black tracking-tighter uppercase whitespace-nowrap">OFFER</span>
      </div>
    </section>
  );
}
