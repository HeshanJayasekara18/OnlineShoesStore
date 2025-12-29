'use client';

import React from 'react';
import { ShoppingCart } from 'lucide-react';

interface CartProps {
  isScrolled: boolean;
  variant: 'navbar-desktop' | 'navbar-mobile' | 'floating';
}

export const Cart: React.FC<CartProps> = ({ isScrolled, variant }) => {
  const cartCount = 0; // This can be moved to a state management solution later

  if (variant === 'navbar-desktop') {
    return (
      <button className={`text-white/70 hover:text-white transition-all duration-500 relative group animate-in fade-in zoom-in ${
        isScrolled ? "opacity-0 scale-50 pointer-events-none" : "opacity-100 scale-100"
      }`}>
        <ShoppingCart size={22} />
        <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-black group-hover:scale-110 transition-transform">
          {cartCount}
        </span>
      </button>
    );
  }

  if (variant === 'navbar-mobile') {
    return (
      <button className={`text-white p-3 backdrop-blur-xl bg-black/40 rounded-2xl border border-white/10 shadow-xl relative group active:scale-95 transition-all duration-500 animate-in fade-in zoom-in ${
        isScrolled ? "opacity-0 scale-50 pointer-events-none" : "opacity-100 scale-100"
      }`}>
        <ShoppingCart size={20} />
        <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-[8px] font-bold w-4 h-4 rounded-full flex items-center justify-center border-2 border-black">
          {cartCount}
        </span>
      </button>
    );
  }

  if (variant === 'floating') {
    return (
      <div className={`fixed bottom-10 right-10 z-999 transition-all duration-700 transform ${
        isScrolled ? "translate-y-0 opacity-100 scale-100" : "translate-y-40 opacity-0 scale-50 pointer-events-none"
      }`}>
        <button className="relative group bg-blue-600 hover:bg-blue-500 text-white p-6 rounded-2xl shadow-[0_20px_50px_-15px_rgba(37,99,235,0.6)] transition-all duration-300 hover:scale-110 active:scale-95 border border-white/20">
          <ShoppingCart size={32} />
          <span className="absolute -top-3 -right-3 bg-white text-blue-600 text-xs font-black w-7 h-7 rounded-full flex items-center justify-center border-4 border-blue-600 shadow-lg">
            {cartCount}
          </span>
          <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-black/80 backdrop-blur-md text-white text-xs font-bold px-4 py-2 rounded-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity translate-x-4 group-hover:translate-x-0 pointer-events-none border border-white/10">
            View Your Cart
          </div>
        </button>
      </div>
    );
  }

  return null;
};
