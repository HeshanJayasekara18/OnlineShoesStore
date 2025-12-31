'use client';

import React from 'react';

const philosphyItems = [
  {
    title: "INNOVATION",
    description: "Pushing the boundaries of footwear technology to enhance performance and comfort for every athlete.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    gradient: "from-cyan-400 to-blue-600"
  },
  {
    title: "SUSTAINABILITY",
    description: "Committed to reducing our environmental footprint through recycled materials and ethical production.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    gradient: "from-green-400 to-emerald-600"
  },
  {
    title: "LEGACY",
    description: "Honoring the iconic designs that defined sneaker culture and paved the way for the future.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    gradient: "from-orange-400 to-red-600"
  }
];

export default function Section2() {
  return (
    <section className="relative py-32 px-6 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-7xl font-black tracking-tighter mb-6 uppercase text-black">
            THE VISION BEHIND <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-500 to-blue-600">THE GREATS</span>
          </h2>
          <p className="text-black/40 text-xl max-w-2xl mx-auto font-medium">
            Discover the core principles that drive the world&apos;s most iconic footwear brands.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {philosphyItems.map((item, index) => (
            <div 
              key={item.title}
              className="group relative p-12 rounded-[40px] bg-black/5 border border-black/5 hover:border-black/10 transition-all duration-500 hover:-translate-y-2"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Background Glow */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 bg-linear-to-br ${item.gradient} rounded-[40px]`} />
              
              <div className={`w-20 h-20 rounded-3xl bg-linear-to-br ${item.gradient} flex items-center justify-center mb-8 shadow-2xl group-hover:scale-110 transition-transform duration-500`}>
                <div className="text-white">
                  {item.icon}
                </div>
              </div>

              <h3 className="text-2xl font-black tracking-tight mb-4 text-black uppercase">{item.title}</h3>
              <p className="text-black/50 leading-relaxed font-medium group-hover:text-black/80 transition-colors">
                {item.description}
              </p>

              {/* Decorative Line */}
              <div className="mt-8 w-12 h-1 bg-black/5 rounded-full group-hover:w-full group-hover:bg-cyan-500/50 transition-all duration-700" />
            </div>
          ))}
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-br from-cyan-50/50 to-transparent -z-10" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />
    </section>
  );
}
