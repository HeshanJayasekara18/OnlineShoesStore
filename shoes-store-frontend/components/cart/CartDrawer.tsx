'use client';

import React from 'react';
import { X, ShoppingBag, Trash2, Minus, Plus, ArrowRight } from 'lucide-react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';

export const CartDrawer: React.FC = () => {
  const pathname = usePathname();
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, cartTotal, cartCount } = useCart();

  if (!isCartOpen || pathname === '/login' || pathname === '/register') return null;

  return (
    <div className="fixed inset-0 z-200 flex justify-end">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500 animate-in fade-in"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col animate-in slide-in-from-right duration-500">
        {/* Header */}
        <div className="p-8 border-b border-black/5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <ShoppingBag className="text-black" size={24} />
            <h2 className="text-2xl font-black tracking-tighter uppercase text-black">Your Cart</h2>
            <span className="bg-black text-white text-[10px] font-black px-2 py-0.5 rounded-full">{cartCount}</span>
          </div>
          <button 
            onClick={() => setIsCartOpen(false)}
            className="p-2 hover:bg-black/5 rounded-full transition-colors group"
          >
            <X size={24} className="text-black/40 group-hover:text-black" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-8 space-y-8 custom-scrollbar">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center space-y-6 opacity-40">
              <div className="w-20 h-20 bg-black/5 rounded-full flex items-center justify-center">
                <ShoppingBag size={40} />
              </div>
              <p className="text-sm font-black uppercase tracking-widest text-black">Your cart is empty</p>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="px-8 py-4 bg-black text-white rounded-2xl font-black uppercase text-[10px] tracking-widest hover:scale-105 transition-all"
              >
                Start Shopping
              </button>
            </div>
          ) : (
            cart.map((item) => (
              <div key={`${item.id}-${item.selectedSize}-${item.selectedColor}`} className="flex gap-6 group">
                <div className="w-24 h-24 bg-black/3 rounded-2xl overflow-hidden shrink-0 relative">
                  <Image 
                    src={item.image} 
                    alt={item.name} 
                    width={100}
                    height={100}
                    className="w-full h-full object-contain p-2 group-hover:scale-110 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                
                <div className="flex-1 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-sm font-black uppercase tracking-tight text-black">{item.name}</h3>
                      <p className="text-[10px] font-bold text-black/40 uppercase tracking-widest mt-1">
                        Size: {item.selectedSize} • {item.selectedColor}
                      </p>
                    </div>
                    <button 
                      onClick={() => removeFromCart(item.id, item.selectedSize, item.selectedColor)}
                      className="text-black/20 hover:text-red-500 transition-colors"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                  
                  <div className="flex justify-between items-center mt-4">
                    <div className="flex items-center bg-black/5 rounded-xl p-1 gap-2">
                      <button 
                        onClick={() => updateQuantity(item.id, item.selectedSize, item.selectedColor, item.quantity - 1)}
                        className="w-8 h-8 flex items-center justify-center hover:bg-white rounded-lg transition-all"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="text-xs font-black w-4 text-center">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.selectedSize, item.selectedColor, item.quantity + 1)}
                        className="w-8 h-8 flex items-center justify-center hover:bg-white rounded-lg transition-all"
                      >
                        <Plus size={12} />
                      </button>
                    </div>
                    <span className="text-sm font-black text-black">${(parseFloat(item.price) * item.quantity).toFixed(2)}</span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="p-8 border-t border-black/5 space-y-6 bg-white">
            <div className="space-y-2">
              <div className="flex justify-between text-black/40 text-[10px] font-black uppercase tracking-widest">
                <span>Subtotal</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-black/40 text-[10px] font-black uppercase tracking-widest">
                <span>Shipping</span>
                <span>FREE</span>
              </div>
              <div className="pt-4 flex justify-between text-black text-xl font-black tracking-tighter uppercase">
                <span>Total</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
            </div>
            
            <button className="w-full bg-black text-white py-6 rounded-3xl font-black uppercase text-[11px] tracking-[0.3em] flex items-center justify-center gap-3 shadow-2xl hover:scale-[1.02] active:scale-95 transition-all group">
              Checkout
              <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
