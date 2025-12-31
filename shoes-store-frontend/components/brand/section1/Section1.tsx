'use client';



export default function Section1() {
  const brands = [
    { name: "NIKE", description: "Just Do It", color: "from-orange-500 to-red-600", image: "/images/brands/nike.png" },
    { name: "ADIDAS", description: "Impossible is Nothing", color: "from-blue-500 to-indigo-600", image: "/images/brands/adidas.png" },
    { name: "PUMA", description: "Forever Faster", color: "from-gray-700 to-black", image: "/images/brands/puma.png" },
    { name: "JORDAN", description: "Quality Inspired by the Greatest", color: "from-red-600 to-black", image: "/images/brands/jordan.png" },
    { name: "YEEZY", description: "Designed by Kanye West", color: "from-stone-500 to-stone-700", image: "/images/brands/yeezy.png" },
    { name: "CONVERSE", description: "Chucks are for Everyone", color: "from-zinc-400 to-zinc-600", image: "/images/brands/converse.png" }
  ];

  return (
    <div className="relative min-h-screen bg-linear-to-b from-cyan-400 to-black text-white overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400/20 blur-[120px] rounded-full animate-pulse -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-400/20 blur-[120px] rounded-full animate-bounce-slow -z-10" />

      <main className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <header className="mb-20">
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-4 animate-in fade-in slide-in-from-bottom-8 duration-700">
              ELITE <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-white/20">BRANDS</span>
            </h1>
            <p className="text-white/60 text-lg md:text-xl max-w-2xl font-medium tracking-wide leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
              Explore our curated selection of the world&apos;s most prestigious footwear labels. 
              Engineering excellence meets street-ready aesthetics.
            </p>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {brands.map((brand, index) => (
              <div 
                key={brand.name}
                className="group relative h-112 md:h-96 rounded-[40px] overflow-hidden border border-white/5 bg-white/5 backdrop-blur-sm hover:border-white/20 transition-all duration-500 hover:scale-[1.02] md:hover:-translate-y-2 animate-in fade-in slide-in-from-bottom-8"
                style={{ animationDelay: `${(index + 3) * 100}ms` }}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 opacity-10 md:opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-linear-to-br ${brand.color}`} />
                
                {/* Brand Image */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center opacity-60 md:opacity-40 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110 pointer-events-none">
                  <img 
                    src={brand.image} 
                    alt={brand.name} 
                    className="w-3/4 h-3/4 object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)] group-hover:drop-shadow-[0_30px_60px_rgba(0,0,0,0.5)] transition-all duration-700 -rotate-12 group-hover:rotate-0"
                  />
                </div>

                <div className="relative h-full p-8 md:p-10 flex flex-col justify-between z-10">
                  <div className="bg-white/5 backdrop-blur-xl p-5 md:p-6 rounded-3xl border border-white/10 w-fit">
                    <h2 className="text-2xl md:text-3xl font-black tracking-tighter mb-2 text-white">{brand.name}</h2>
                    <p className="text-white/40 font-medium group-hover:text-white/70 transition-colors uppercase text-[9px] md:text-[10px] tracking-widest leading-none">{brand.description}</p>
                  </div>
                  
                  <button className="self-start px-8 py-4 rounded-2xl bg-white text-black font-black text-[10px] md:text-xs tracking-widest hover:bg-cyan-400 hover:text-black transition-all duration-500 opacity-100 md:opacity-0 group-hover:opacity-100 translate-y-0 md:translate-y-4 group-hover:translate-y-0 shadow-2xl active:scale-95">
                    EXPLORE COLLECTION
                  </button>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 -mr-12 -mt-12 w-48 h-48 bg-white/5 rounded-full blur-3xl group-hover:bg-cyan-400/20 transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
        </main>
    </div>
  );
}
