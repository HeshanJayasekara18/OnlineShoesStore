'use client';

import React, { useState, useMemo } from 'react';

const products = [
  { id: 1, name: "Air Max Pulse", originalPrice: 160, salePrice: 99, discount: "38%", category: "Nike", colorName: "Red", colorGradient: "from-red-500 to-orange-500", image: "/images/brands/nike.png" },
  { id: 2, name: "Ultraboost Light", originalPrice: 190, salePrice: 120, discount: "36%", category: "Adidas", colorName: "Blue", colorGradient: "from-blue-500 to-cyan-500", image: "/images/brands/adidas.png" },
  { id: 3, name: "RS-X Efekt", originalPrice: 110, salePrice: 65, discount: "40%", category: "Puma", colorName: "Pink", colorGradient: "from-purple-500 to-pink-500", image: "/images/brands/puma.png" },
  { id: 4, name: "Jordan Retro 4", originalPrice: 210, salePrice: 175, discount: "16%", category: "Jordan", colorName: "Black", colorGradient: "from-red-600 to-black", image: "/images/brands/jordan.png" },
  { id: 5, name: "Boost 350 V2", originalPrice: 230, salePrice: 150, discount: "35%", category: "Yeezy", colorName: "Gold", colorGradient: "from-orange-400 to-yellow-600", image: "/images/brands/yeezy.png" },
  { id: 6, name: "Chuck 70", originalPrice: 90, salePrice: 45, discount: "50%", category: "Converse", colorName: "Black", colorGradient: "from-gray-400 to-black", image: "/images/brands/converse.png" },
  { id: 7, name: "Air Force 1", originalPrice: 110, salePrice: 85, discount: "22%", category: "Nike", colorName: "White", colorGradient: "from-blue-400 to-blue-600", image: "/images/brands/nike.png" },
  { id: 8, name: "Stan Smith", originalPrice: 100, salePrice: 55, discount: "45%", category: "Adidas", colorName: "Green", colorGradient: "from-green-400 to-emerald-600", image: "/images/brands/adidas.png" },
  { id: 9, name: "Dunk Low", originalPrice: 120, salePrice: 95, discount: "20%", category: "Nike", colorName: "Red", colorGradient: "from-orange-500 to-red-600", image: "/images/brands/nike.png" },
  { id: 10, name: "Suede Classic", originalPrice: 85, salePrice: 40, discount: "52%", category: "Puma", colorName: "Pink", colorGradient: "from-rose-400 to-rose-600", image: "/images/brands/puma.png" },
  { id: 11, name: "Air Jordan 1", originalPrice: 180, salePrice: 140, discount: "22%", category: "Jordan", colorName: "Red", colorGradient: "from-red-500 to-red-800", image: "/images/brands/jordan.png" },
  { id: 12, name: "Forum Low", originalPrice: 100, salePrice: 70, discount: "30%", category: "Adidas", colorName: "Blue", colorGradient: "from-indigo-400 to-indigo-600", image: "/images/brands/adidas.png" },
];

const categories = ["ALL", "NIKE", "ADIDAS", "PUMA", "JORDAN", "YEEZY", "CONVERSE"];
const colors = ["ALL", "Black", "Red", "Blue", "Gold", "White", "Green", "Pink"];
const ITEMS_PER_PAGE = 6;

export default function Section2() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [selectedColor, setSelectedColor] = useState("ALL");
  const [maxPrice, setMaxPrice] = useState(250);
  const [currentPage, setCurrentPage] = useState(1);

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === "ALL" || product.category.toUpperCase() === selectedCategory;
      const matchesColor = selectedColor === "ALL" || product.colorName.toUpperCase() === selectedColor.toUpperCase();
      const matchesPrice = product.salePrice <= maxPrice;
      return matchesSearch && matchesCategory && matchesColor && matchesPrice;
    });
  }, [searchQuery, selectedCategory, selectedColor, maxPrice]);

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const currentItems = filteredProducts.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    const section = document.getElementById('sale-grid');
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="sale-grid" className="relative py-32 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <header className="mb-20 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase text-black">
                FLASH <span className="text-red-600">DEALS</span>
              </h2>
              <p className="text-black/40 text-lg font-medium max-w-xl">
                Exclusive offers available for a limited time. Refine your search to find the perfect pair at the right price.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="px-6 py-3 bg-red-600 text-white rounded-2xl font-black uppercase text-sm tracking-widest shadow-2xl animate-pulse">
                Ends in 03:24:55
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6 p-8 bg-black/[0.03] border border-black/5 rounded-[40px] shadow-sm">
            {/* Top Row: Search and Category */}
            <div className="flex flex-col lg:flex-row gap-8 items-center justify-between">
              <div className="relative w-full lg:w-96">
                <input 
                  type="text" 
                  placeholder="Search products..." 
                  className="w-full pl-14 pr-6 py-4 bg-white rounded-3xl border border-black/5 text-black font-medium placeholder:text-black/20 focus:outline-none focus:ring-2 focus:ring-red-600/20 transition-all shadow-sm"
                  value={searchQuery}
                  onChange={(e) => {
                      setSearchQuery(e.target.value);
                      setCurrentPage(1);
                  }}
                />
                <svg className="absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 text-black/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => {
                      setSelectedCategory(cat);
                      setCurrentPage(1);
                    }}
                    className={`px-6 py-3 rounded-full text-xs font-black tracking-widest uppercase transition-all duration-300 ${
                      selectedCategory === cat 
                        ? "bg-black text-white shadow-xl scale-105" 
                        : "bg-white text-black/40 border border-black/5 hover:bg-black/5 hover:text-black"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Bottom Row: Price and Color */}
            <div className="flex flex-col lg:flex-row gap-12 items-center justify-between pt-6 border-t border-black/5">
              {/* Color Filter */}
              <div className="flex flex-col gap-4 w-full lg:w-auto">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-black/40 text-center lg:text-left ml-2">Filter by Color</span>
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
                  {colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => {
                        setSelectedColor(color);
                        setCurrentPage(1);
                      }}
                      className={`px-4 py-2 rounded-2xl text-[10px] font-black tracking-widest uppercase transition-all duration-300 ${
                        selectedColor === color 
                          ? "bg-red-600 text-white shadow-lg active:scale-95" 
                          : "bg-white text-black/30 border border-black/5 hover:bg-black/5 hover:text-black"
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Slider */}
              <div className="flex flex-col gap-4 w-full lg:w-96">
                <div className="flex items-center justify-between px-2">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-black/40">Price Range</span>
                  <span className="text-sm font-black text-red-600 italic">UP TO ${maxPrice}</span>
                </div>
                <input 
                  type="range" 
                  min="40" 
                  max="250" 
                  step="10"
                  value={maxPrice}
                  onChange={(e) => {
                    setMaxPrice(parseInt(e.target.value));
                    setCurrentPage(1);
                  }}
                  className="w-full h-2 bg-black/5 rounded-lg appearance-none cursor-pointer accent-red-600 transition-all hover:accent-red-500"
                />
              </div>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 min-h-[800px]">
          {currentItems.length > 0 ? (
            currentItems.map((product) => (
              <div key={product.id} className="group relative bg-black/[0.03] border border-black/5 rounded-[40px] p-8 hover:bg-white hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] transition-all duration-700 hover:-translate-y-2 overflow-hidden">
                <div className={`absolute top-6 right-6 px-4 py-2 rounded-2xl bg-linear-to-r ${product.colorGradient} text-white font-black text-sm z-10 shadow-lg`}>
                  -{product.discount}
                </div>
                
                <div className="relative h-64 mb-10 flex items-center justify-center">
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 bg-linear-to-br ${product.colorGradient} blur-3xl`} />
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-contain group-hover:scale-110 group-hover:rotate-6 transition-all duration-700 drop-shadow-2xl"
                  />
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                        <h3 className="text-2xl font-black tracking-tight text-black uppercase">{product.name}</h3>
                        <p className="text-[10px] font-bold text-black/20 uppercase tracking-[0.2em]">{product.category} • {product.colorName}</p>
                    </div>
                  </div>
                  <div className="flex items-baseline gap-4">
                    <span className="text-3xl font-black text-red-600">${product.salePrice}</span>
                    <span className="text-xl font-bold text-black/20 line-through">${product.originalPrice}</span>
                  </div>
                  
                  <button className="w-full py-4 rounded-3xl border-2 border-black/5 font-black uppercase tracking-widest group-hover:bg-black group-hover:text-white group-hover:border-black transition-all duration-500 shadow-sm active:scale-95">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full flex flex-col items-center justify-center py-40">
                <div className="w-24 h-24 bg-black/5 rounded-full flex items-center justify-center mb-6">
                    <svg className="w-12 h-12 text-black/10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>
                <h3 className="text-2xl font-black text-black uppercase tracking-tighter">No products found</h3>
                <p className="text-black/40 font-medium">Try adjusting your filters or search query.</p>
            </div>
          )}
        </div>

        {totalPages > 1 && (
          <div className="mt-20 flex items-center justify-center gap-4">
            <button 
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`p-4 rounded-3xl border border-black/5 transition-all ${
                currentPage === 1 ? "opacity-20 cursor-not-allowed" : "hover:bg-black hover:text-white shadow-lg active:scale-90"
              }`}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <div className="flex items-center gap-2">
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i + 1}
                  onClick={() => handlePageChange(i + 1)}
                  className={`w-14 h-14 rounded-3xl font-black transition-all ${
                    currentPage === i + 1 
                      ? "bg-black text-white shadow-xl scale-110" 
                      : "bg-black/[0.03] text-black/40 hover:bg-black/10 hover:text-black border border-black/5"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>

            <button 
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`p-4 rounded-3xl border border-black/5 transition-all ${
                currentPage === totalPages ? "opacity-20 cursor-not-allowed" : "hover:bg-black hover:text-white shadow-lg active:scale-90"
              }`}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        )}
      </div>

      <div className="absolute top-0 right-0 w-1/3 h-full bg-linear-to-br from-red-50/50 to-transparent -z-10" />
      <div className="absolute bottom-0 left-0 w-1/3 h-full bg-linear-to-tr from-rose-50/50 to-transparent -z-10" />
    </section>
  );
}
