'use client';

export default function Section1() {
  return (
    <main className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-20">
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-4 animate-in fade-in slide-in-from-bottom-8 duration-700">
            GENTS <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-600">COLLECTION</span>
          </h1>
          <p className="text-white/60 text-xl max-w-2xl font-medium tracking-wide leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
            Discover the ultimate in men's footwear. From high-performance athletics to sophisticated street style.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Placeholder for Gents Products */}
          <div className="h-96 rounded-[40px] bg-white/5 border border-white/10 flex items-center justify-center">
             <p className="text-white/20 font-black uppercase text-xl">Coming Soon</p>
          </div>
        </div>
      </div>
    </main>
  );
}
