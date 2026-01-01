'use client';

import { ArrowRight, Zap, Target, Shield } from 'lucide-react';
import Image from 'next/image';

export default function Section3() {
  return (
    <section className="relative py-40 px-6 bg-black text-white overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-br from-amber-600/10 to-transparent -z-10" />
      <div className="absolute bottom-0 left-0 w-1/2 h-full bg-linear-to-tl from-orange-600/10 to-transparent -z-10" />
      
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          {/* Visual Side */}
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 rounded-[60px] overflow-hidden border border-white/10 group">
              <Image 
                src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=800&q=80" 
                alt="Elite Performance" 
                width={800}
                height={1000}
                className="w-full h-auto aspect-4/5 object-cover transition-all duration-1000 group-hover:scale-110"
                priority
              />
              <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-60" />
              
              {/* Glassmorphism Title Overlay */}
              <div className="absolute bottom-12 left-12 right-12 p-8 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[40px]">
                <h3 className="text-3xl font-black tracking-tighter mb-2 italic">AMBER VELOCITY</h3>
                <p className="text-white/40 font-medium uppercase text-xs tracking-[0.2em]">Next-Gen Craftsmanship</p>
              </div>
            </div>

            {/* Decorative Floating Elements */}
            <div className="absolute -top-12 -right-12 w-40 h-40 bg-amber-500/20 blur-3xl rounded-full animate-pulse" />
            <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-orange-500/20 blur-3xl rounded-full animate-bounce-slow" />
          </div>

          {/* Content Side */}
          <div className="lg:w-1/2 space-y-12">
            <header className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-400">
                <Target size={16} />
                <span className="text-xs font-black uppercase tracking-widest">Heritage Edit</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.9]">
                POWER IN <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-400 to-orange-600 italic">EVERY STEP</span>
              </h2>
              <p className="text-white/40 text-xl font-medium leading-relaxed max-w-lg">
                Crafted for the modern gentleman. We blend traditional durability with high-performance engineering.
              </p>
            </header>

            <div className="grid sm:grid-cols-2 gap-8">
              <div className="p-8 bg-white/5 border border-white/5 rounded-[40px] hover:bg-white/10 transition-colors group">
                <div className="w-12 h-12 bg-amber-500/20 rounded-2xl flex items-center justify-center mb-6 text-amber-400 group-hover:scale-110 transition-transform">
                  <Zap size={24} />
                </div>
                <h4 className="text-xl font-bold mb-2">Maximum Energy</h4>
                <p className="text-white/40 text-sm">Advanced responsive cushioning that adapts to your natural stride.</p>
              </div>

              <div className="p-8 bg-white/5 border border-white/5 rounded-[40px] hover:bg-white/10 transition-colors group">
                <div className="w-12 h-12 bg-orange-500/20 rounded-2xl flex items-center justify-center mb-6 text-orange-400 group-hover:scale-110 transition-transform">
                  <Shield size={24} />
                </div>
                <h4 className="text-xl font-bold mb-2">Rugged Heritage</h4>
                <p className="text-white/40 text-sm">Premium leather and reinforced mesh for lasting wear in any condition.</p>
              </div>
            </div>

            <button className="group flex items-center gap-4 text-2xl font-black tracking-tighter uppercase hover:text-amber-400 transition-colors">
              Explore Performance
              <ArrowRight className="w-8 h-8 group-hover:translate-x-4 transition-transform text-amber-500" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
