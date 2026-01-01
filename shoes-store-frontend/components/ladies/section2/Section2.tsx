'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { Filter, Search, ShoppingCart, ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import { playGenieEffect } from '@/lib/animations';
import { products } from '@/lib/products';

const brands = ["ALL", "NIKE", "ADIDAS", "PUMA", "JORDAN", "YEEZY", "CONVERSE"];
const categories = ["ALL", "Athletic", "Casual", "Luxury", "Street", "Classic"];
const colors = ["ALL", "Pink", "Purple", "White", "Black", "Rose", "Lavender"];

const ladiesProducts = [
  { id: "l1", name: "Air Max Plus OG", brand: "Nike", price: 180, category: "Athletic", image: "/images/brands/nike.png", color: "Pink", bgColor: "bg-pink-50" },
  { id: "l2", name: "Forum Bonega", brand: "Adidas", price: 110, category: "Casual", image: "/images/brands/adidas.png", color: "White", bgColor: "bg-purple-50" },
  { id: "l3", name: "Mayze Stack", brand: "Puma", price: 120, category: "Street", image: "/images/brands/puma.png", color: "Rose", bgColor: "bg-rose-50" },
  { id: "l4", name: "Chuck Taylor Lift", brand: "Converse", price: 75, category: "Classic", image: "/images/brands/converse.png", color: "White", bgColor: "bg-indigo-50" },
  { id: "l5", name: "Jordan 1 Elevate", brand: "Jordan", price: 145, category: "Athletic", image: "/images/brands/jordan.png", color: "Lavender", bgColor: "bg-orange-50" },
  { id: "l6", name: "Yeezy Slide Pure", brand: "Yeezy", price: 70, category: "Casual", image: "/images/brands/yeezy.png", color: "Rose", bgColor: "bg-stone-50" },
  { id: "l7", name: "NMD R1 V3", brand: "Adidas", price: 160, category: "Athletic", image: "/images/brands/adidas.png", color: "Purple", bgColor: "bg-purple-50" },
  { id: "l8", name: "Air Force 1 Shadow", brand: "Nike", price: 120, category: "Casual", image: "/images/brands/nike.png", color: "Pink", bgColor: "bg-pink-50" },
  { id: "l9", name: "Cali Dream", brand: "Puma", price: 90, category: "Street", image: "/images/brands/puma.png", color: "White", bgColor: "bg-rose-50" },
  { id: "l10", name: "Run Star Hike", brand: "Converse", price: 110, category: "Classic", image: "/images/brands/converse.png", color: "Black", bgColor: "bg-indigo-50" },
  { id: "l11", name: "Jordan 1 Zoom", brand: "Jordan", price: 150, category: "Athletic", image: "/images/brands/jordan.png", color: "Pink", bgColor: "bg-orange-50" },
  { id: "l12", name: "Yeezy 350 V2", brand: "Yeezy", price: 230, category: "Luxury", image: "/images/brands/yeezy.png", color: "Lavender", bgColor: "bg-stone-50" },
  { id: "l13", name: "Dunk Low Next Nature", brand: "Nike", price: 115, category: "Casual", image: "/images/brands/nike.png", color: "Rose", bgColor: "bg-pink-50" },
  { id: "l14", name: "Ozweego", brand: "Adidas", price: 120, category: "Street", image: "/images/brands/adidas.png", color: "White", bgColor: "bg-purple-50" },
  { id: "l15", name: "Suede Mayu", brand: "Puma", price: 100, category: "Classic", image: "/images/brands/puma.png", color: "Black", bgColor: "bg-rose-50" },
  { id: "l16", name: "All Star Move", brand: "Converse", price: 85, category: "Street", image: "/images/brands/converse.png", color: "Pink", bgColor: "bg-indigo-50" },
  { id: "l17", name: "Jordan 1 Low", brand: "Jordan", price: 110, category: "Classic", image: "/images/brands/jordan.png", color: "Purple", bgColor: "bg-orange-50" },
  { id: "l18", name: "Yeezy 700 V3", brand: "Yeezy", price: 210, category: "Luxury", image: "/images/brands/yeezy.png", color: "White", bgColor: "bg-stone-50" },
  { id: "l19", name: "Air Max 270", brand: "Nike", price: 160, category: "Athletic", image: "/images/brands/nike.png", color: "Lavender", bgColor: "bg-pink-50" },
  { id: "l20", name: "Superstar Bold", brand: "Adidas", price: 110, category: "Classic", image: "/images/brands/adidas.png", color: "Rose", bgColor: "bg-purple-50" },
  // Page 2 Items
  { id: "l21", name: "Waffle One", brand: "Nike", price: 100, category: "Casual", image: "/images/brands/nike.png", color: "White", bgColor: "bg-pink-50" },
  { id: "l22", name: "Stan Smith Bonega", brand: "Adidas", price: 100, category: "Classic", image: "/images/brands/adidas.png", color: "Pink", bgColor: "bg-purple-50" },
  { id: "l23", name: "Cruise Rider", brand: "Puma", price: 85, category: "Street", image: "/images/brands/puma.png", color: "Purple", bgColor: "bg-rose-50" },
  { id: "l24", name: "Run Star Motion", brand: "Converse", price: 120, category: "Luxury", image: "/images/brands/converse.png", color: "Rose", bgColor: "bg-indigo-50" },
  { id: "l25", name: "Jordan 1 Mid", brand: "Jordan", price: 125, category: "Athletic", image: "/images/brands/jordan.png", color: "Black", bgColor: "bg-orange-50" },
  { id: "l26", name: "Yeezy Slide Bone", brand: "Yeezy", price: 70, category: "Casual", image: "/images/brands/yeezy.png", color: "White", bgColor: "bg-stone-50" },
  { id: "l27", name: "VaporMax Plus", brand: "Nike", price: 210, category: "Athletic", image: "/images/brands/nike.png", color: "Purple", bgColor: "bg-pink-50" },
  { id: "l28", name: "Adilette 22", brand: "Adidas", price: 60, category: "Casual", image: "/images/brands/adidas.png", color: "Rose", bgColor: "bg-purple-50" },
  { id: "l29", name: "Mayze Lth", brand: "Puma", price: 90, category: "Street", image: "/images/brands/puma.png", color: "Lavender", bgColor: "bg-rose-50" },
  { id: "l30", name: "Chuck 70 Archive", brand: "Converse", price: 95, category: "Classic", image: "/images/brands/converse.png", color: "Pink", bgColor: "bg-indigo-50" },
  { id: "l31", name: "Jordan 4 Canyon", brand: "Jordan", price: 200, category: "Luxury", image: "/images/brands/jordan.png", color: "Purple", bgColor: "bg-orange-50" },
  { id: "l32", name: "Yeezy 350 Ash", brand: "Yeezy", price: 220, category: "Luxury", image: "/images/brands/yeezy.png", color: "Rose", bgColor: "bg-stone-50" },
  { id: "l33", name: "Huarache Luxe", brand: "Nike", price: 140, category: "Athletic", image: "/images/brands/nike.png", color: "Black", bgColor: "bg-pink-50" },
  { id: "l34", name: "Gazelle Bold", brand: "Adidas", price: 120, category: "Classic", image: "/images/brands/adidas.png", color: "Pink", bgColor: "bg-purple-50" },
  { id: "l35", name: "Slipstream Hi", brand: "Puma", price: 110, category: "Street", image: "/images/brands/puma.png", color: "White", bgColor: "bg-rose-50" },
  { id: "l36", name: "Chuck Taylor 70 Plus", brand: "Converse", price: 100, category: "Street", image: "/images/brands/converse.png", color: "Lavender", bgColor: "bg-indigo-50" },
  { id: "l37", name: "Jordan 1 Low SE", brand: "Jordan", price: 120, category: "Casual", image: "/images/brands/jordan.png", color: "Rose", bgColor: "bg-orange-50" },
  { id: "l38", name: "Yeezy 700 Mauve", brand: "Yeezy", price: 240, category: "Luxury", image: "/images/brands/yeezy.png", color: "Purple", bgColor: "bg-stone-50" },
  { id: "l39", name: "Air Max Dawn", brand: "Nike", price: 115, category: "Casual", image: "/images/brands/nike.png", color: "Rose", bgColor: "bg-pink-50" },
  { id: "l40", name: "Forum Exhibit", brand: "Adidas", price: 110, category: "Street", image: "/images/brands/adidas.png", color: "Lavender", bgColor: "bg-purple-50" },
];

const ITEMS_PER_PAGE = 20;

export default function Section2() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("ALL");
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [selectedColor, setSelectedColor] = useState("ALL");
  const [maxPrice, setMaxPrice] = useState(300);
  const [currentPage, setCurrentPage] = useState(1);
  const [showFilters, setShowFilters] = useState(true);
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent, productId: string, productImage: string) => {
    e.preventDefault();
    const fullProduct = products.find(p => p.id === productId);
    if (fullProduct) {
      playGenieEffect(productImage, e.currentTarget as HTMLElement);
      addToCart(fullProduct, 1, fullProduct.sizes[0], fullProduct.colors[0].name);
    }
  };

  const filteredProducts = useMemo(() => {
    return ladiesProducts.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesBrand = selectedBrand === "ALL" || product.brand.toUpperCase() === selectedBrand;
      const matchesCategory = selectedCategory === "ALL" || product.category === selectedCategory;
      const matchesColor = selectedColor === "ALL" || product.color === selectedColor;
      const matchesPrice = product.price <= maxPrice;
      return matchesSearch && matchesBrand && matchesCategory && matchesColor && matchesPrice;
    });
  }, [searchQuery, selectedBrand, selectedCategory, selectedColor, maxPrice]);

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = filteredProducts.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: document.getElementById('ladies-collection')?.offsetTop || 0, behavior: 'smooth' });
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedBrand, selectedCategory, selectedColor, maxPrice]);

  return (
    <section id="ladies-collection" className="py-32 px-6 bg-white overflow-hidden scroll-mt-20">
      <div className="max-w-[1600px] mx-auto">
        <header className="mb-20">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter uppercase text-black">
            FEATURED <span className="text-pink-500">SELECTION</span>
          </h2>
          <p className="text-black/40 text-lg font-medium max-w-xl mt-4">
            Explore our curated collection of 40+ premium styles. Use the filters to find your perfect fit.
          </p>
        </header>

        {/* Top bar - Search, Categories & Toggle */}
        <div className="mb-16 pb-8 border-b border-black/5 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="flex flex-col gap-6">
            {/* Categories */}
            <div className="flex flex-wrap gap-3 items-center">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-black/20 mr-4">Select Category</span>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-8 py-4 rounded-2xl text-[10px] font-black tracking-widest uppercase transition-all duration-300 ${
                    selectedCategory === cat 
                      ? "bg-black text-white shadow-xl scale-105" 
                      : "bg-white text-black/30 border border-black/5 hover:bg-black/5 hover:text-black"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Filter Toggle Button */}
            <button 
              onClick={() => setShowFilters(!showFilters)}
              className={`hidden lg:flex items-center gap-3 px-6 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all w-fit ${
                showFilters 
                  ? "bg-black text-white shadow-xl" 
                  : "bg-white text-black/30 border border-black/5 hover:bg-black/5 hover:text-black"
              }`}
            >
              <Filter size={16} className={showFilters ? "text-pink-500" : ""} />
              {showFilters ? "Hide Filters" : "Show Filters"}
            </button>
          </div>

          {/* Search Bar */}
          <div className="relative w-full lg:w-96">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-pink-500" size={18} />
            <input 
              type="text" 
              placeholder="Search products..." 
              className="w-full pl-16 pr-8 py-5 bg-black/3 rounded-3xl border border-black/5 text-black font-bold placeholder:text-black/20 focus:outline-none focus:ring-4 focus:ring-pink-500/10 transition-all shadow-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar Filters */}
          <aside className={`lg:w-64 space-y-12 lg:sticky lg:top-32 h-fit transition-all duration-500 ${
            showFilters ? "translate-x-0 opacity-100 block" : "-translate-x-10 opacity-0 hidden"
          }`}>
            {/* Brands */}
            <div className="space-y-4">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-black/40 flex items-center gap-2">
                <Filter size={14} className="text-pink-500" /> Brands
              </label>
              <div className="flex flex-wrap gap-2">
                {brands.map((brand) => (
                  <button
                    key={brand}
                    onClick={() => setSelectedBrand(brand)}
                    className={`px-4 py-2.5 rounded-xl text-[9px] font-black tracking-widest uppercase transition-all ${
                      selectedBrand === brand 
                        ? "bg-pink-500 text-white shadow-lg shadow-pink-500/30 scale-105" 
                        : "bg-white text-black/30 border border-black/5 hover:bg-black/5 hover:text-black"
                    }`}
                  >
                    {brand}
                  </button>
                ))}
              </div>
            </div>

            {/* Price */}
            <div className="space-y-4 pt-6 border-t border-black/5">
              <div className="flex items-center justify-between">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-black/40">Max Price</label>
                <span className="text-sm font-black text-pink-500">${maxPrice}</span>
              </div>
              <input 
                type="range" 
                min="50" 
                max="300" 
                step="10"
                value={maxPrice}
                onChange={(e) => setMaxPrice(parseInt(e.target.value))}
                className="w-full h-2 bg-black/5 rounded-lg appearance-none cursor-pointer accent-pink-500 transition-all hover:accent-pink-600"
              />
            </div>

            {/* Colors */}
            <div className="space-y-4 pt-6 border-t border-black/5">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-black/40">Colors</label>
              <div className="flex flex-wrap gap-2">
                {colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 rounded-xl text-[9px] font-black tracking-widest uppercase transition-all ${
                      selectedColor === color 
                        ? "ring-2 ring-pink-500 ring-offset-2 bg-black text-white" 
                        : "bg-white text-black/30 border border-black/5 hover:bg-black/5"
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            <button 
              onClick={() => {
                setSearchQuery("");
                setSelectedBrand("ALL");
                setSelectedCategory("ALL");
                setSelectedColor("ALL");
                setMaxPrice(300);
              }}
              className="w-full py-4 text-[10px] font-black uppercase tracking-widest text-black/20 hover:text-pink-500 transition-colors"
            >
              Reset All Filters
            </button>
          </aside>

          {/* Product Grid Area */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-10">
              {currentItems.length > 0 ? (
                currentItems.map((product) => (
                  <div key={product.id} className="group relative">
                    {/* Product Card Image Container */}
                    <div className={`relative aspect-square rounded-4xl ${product.bgColor} border border-black/5 overflow-hidden transition-all duration-500 hover:shadow-xl`}>
                      
                      {/* Brand Badge */}
                      <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-md rounded-full border border-black/5 z-20">
                        <span className="text-[8px] font-black uppercase tracking-widest text-black/60">{product.brand}</span>
                      </div>

                      {/* Product Image - Maximized Preview */}
                      <div className="absolute inset-0 p-2 flex items-center justify-center">
                        <Image 
                          src={product.image} 
                          alt={product.name} 
                          width={400}
                          height={400}
                          className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-110"
                        />
                      </div>

                      {/* Quick Actions (Bottom Popup) */}
                      <div className="absolute bottom-4 left-3 right-3 z-30 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 lg:translate-y-4 lg:group-hover:translate-y-0 transition-all duration-300 flex flex-col gap-2">
                        <button 
                          onClick={(e) => handleAddToCart(e, product.id, product.image)}
                          className="w-full py-2.5 bg-black text-white rounded-xl font-black uppercase text-[8px] tracking-widest flex items-center justify-center gap-2 shadow-2xl hover:bg-pink-500 transition-colors"
                        >
                          <ShoppingCart size={11} />
                          Add to Cart
                        </button>
                        <Link 
                          href={`/item-description/${product.id}`}
                          className="w-full py-2.5 bg-white text-black rounded-xl font-black uppercase text-[8px] tracking-widest flex items-center justify-center gap-2 shadow-2xl border border-black/5 hover:bg-gray-100 transition-colors"
                        >
                          <Eye size={11} />
                          View Item
                        </Link>
                      </div>

                      {/* Glass Overlay on Hover */}
                      <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                    </div>

                    {/* Product Info - Modern Layout */}
                    <div className="mt-6 flex flex-col gap-1 px-1">
                      <div className="flex justify-between items-baseline gap-4">
                        <h3 className="text-sm font-black text-black uppercase tracking-tight truncate">{product.name}</h3>
                        <span className="text-base font-black text-black">${product.price}</span>
                      </div>
                      <div className="flex gap-2">
                         <span className="text-[9px] font-bold text-black/30 uppercase tracking-widest">{product.category}</span>
                         <span className="text-[9px] font-bold text-pink-400 uppercase tracking-widest">• {product.color}</span>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-full py-40 text-center space-y-6">
                  <div className="w-24 h-24 bg-black/3 rounded-full flex items-center justify-center mx-auto">
                    <Filter size={40} className="text-black/10" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-black text-black uppercase tracking-tighter">No items found</h3>
                    <p className="text-black/40 font-medium">Try broadening your filters or clearing the search.</p>
                  </div>
                </div>
              )}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="mt-32 flex flex-col items-center gap-8">
                <div className="flex items-center gap-3">
                  <button 
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`w-14 h-14 rounded-2xl border border-black/5 flex items-center justify-center transition-all ${
                      currentPage === 1 ? "opacity-20 cursor-not-allowed" : "hover:bg-black hover:text-white shadow-xl hover:-translate-x-1"
                    }`}
                  >
                    <ChevronLeft size={24} />
                  </button>
                  
                  <div className="flex items-center gap-2">
                    {[...Array(totalPages)].map((_, i) => (
                      <button
                        key={i + 1}
                        onClick={() => handlePageChange(i + 1)}
                        className={`w-14 h-14 rounded-2xl font-black text-sm transition-all ${
                          currentPage === i + 1 
                            ? "bg-pink-500 text-white shadow-xl shadow-pink-500/30 scale-110" 
                            : "bg-black/3 text-black/40 hover:bg-black/10 hover:text-black border border-black/5"
                        }`}
                      >
                        {String(i + 1).padStart(2, '0')}
                      </button>
                    ))}
                  </div>

                  <button 
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`w-14 h-14 rounded-2xl border border-black/5 flex items-center justify-center transition-all ${
                      currentPage === totalPages ? "opacity-20 cursor-not-allowed" : "hover:bg-black hover:text-white shadow-xl hover:translate-x-1"
                    }`}
                  >
                    <ChevronRight size={24} />
                  </button>
                </div>
                
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-black/20">
                  Showing {startIndex + 1} to {Math.min(startIndex + ITEMS_PER_PAGE, filteredProducts.length)} of {filteredProducts.length} Results
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
