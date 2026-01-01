'use client';

import React from 'react';
import Image from 'next/image';

export default function Section3() {
  return (
    <section className="relative py-40 px-6 bg-black text-white overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-br from-red-600/10 to-transparent -z-10" />
      <div className="absolute bottom-0 left-0 w-1/2 h-full bg-linear-to-tl from-rose-600/10 to-transparent -z-10" />
      
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <header className="mb-20 space-y-6">
          <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase italic">
            DON&apos;T SLEEP <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-red-500 to-rose-600">ON THE DRIP</span>
          </h2>
          <p className="text-white/40 text-xl md:text-2xl max-w-3xl mx-auto font-medium leading-relaxed">
            The season&apos;s biggest drops are moving fast. Once the clock hits zero, these prices vanish like smoke.
          </p>
        </header>

        {/* Big Countdown Display */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 max-w-5xl mx-auto mb-20 px-4">
          {[
            { label: 'Days', value: '00' },
            { label: 'Hours', value: '03' },
            { label: 'Mins', value: '24' },
            { label: 'Secs', value: '55' }
          ].map((item, index) => (
            <div key={item.label} className="group relative p-8 md:p-12 rounded-[40px] bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-white/10 transition-all duration-500">
              <div className="text-5xl md:text-7xl font-black tracking-tighter mb-2 group-hover:scale-110 transition-transform">{item.value}</div>
              <div className="text-xs md:text-sm font-black uppercase tracking-[0.3em] text-white/40">{item.label}</div>
              
              {/* Individual Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700 bg-red-600 blur-3xl -z-10 rounded-[40px]" />
            </div>
          ))}
        </div>

        <div className="space-y-8">
          <button className="px-16 py-6 bg-linear-to-r from-red-600 to-rose-700 text-white font-black uppercase tracking-[0.2em] rounded-full hover:shadow-[0_0_60px_rgba(225,29,72,0.4)] hover:scale-105 transition-all text-lg shadow-2xl">
            Secure Your Pair
          </button>
          <div className="flex items-center justify-center gap-8 opacity-40 grayscale group-hover:grayscale-0 transition-all">
            <Image src="/images/brands/nike.png" alt="Nike" width={100} height={40} className="h-4 md:h-6 w-auto object-contain" />
            <Image src="/images/brands/adidas.png" alt="Adidas" width={100} height={40} className="h-4 md:h-6 w-auto object-contain" />
            <Image src="/images/brands/jordan.png" alt="Jordan" width={100} height={40} className="h-4 md:h-6 w-auto object-contain" />
            <Image src="/images/brands/puma.png" alt="Puma" width={100} height={40} className="h-4 md:h-6 w-auto object-contain" />
          </div>
        </div>
      </div>

      {/* Extreme Decoration */}
      <div className="absolute -bottom-48 -right-48 w-160 h-160 bg-red-600/10 blur-[180px] rounded-full pulse" />
      <div className="absolute -top-48 -left-48 w-160 h-160 bg-rose-600/10 blur-[180px] rounded-full bounce-slow" />
    </section>
  );
}
