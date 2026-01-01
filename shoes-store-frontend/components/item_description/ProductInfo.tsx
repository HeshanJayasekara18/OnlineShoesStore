'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { ShoppingCart, Star, Heart, Share2, ShieldCheck, Truck, RefreshCw } from 'lucide-react';
import { Product } from '@/lib/products';
import { useCart } from '@/context/CartContext';
import { playGenieEffect } from '@/lib/animations';

interface ProductInfoProps {
    product: Product;
}

export default function ProductInfo({ product }: ProductInfoProps) {
    const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
    const [selectedColor, setSelectedColor] = useState(product.colors[0].name);
    const [quantity, setQuantity] = useState(1);
    const [isWishlisted, setIsWishlisted] = useState(false);
    const { addToCart, setIsCartOpen } = useCart();
    const addToCartRef = React.useRef<HTMLButtonElement>(null);

    const handleAddToCart = () => {
        if (addToCartRef.current) {
            playGenieEffect(product.image, addToCartRef.current);
            addToCart(product, quantity, selectedSize, selectedColor);
        }
    };

    return (
        <div className="flex flex-col space-y-10">
            {/* Header */}
            <div className="space-y-4">
                <div className="flex justify-between items-start">
                    <div className="space-y-2">
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-black/40">{product.brand} • {product.category}</span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-black tracking-tighter uppercase leading-none">
                            {product.name}
                        </h1>
                    </div>
                    <div className="flex gap-2">
                        <button 
                            onClick={() => setIsWishlisted(!isWishlisted)}
                            className="p-3 bg-black/3 rounded-2xl hover:bg-black/5 transition-colors group"
                        >
                            <Heart size={20} className={isWishlisted ? "fill-red-500 text-red-500" : "text-black/40 group-hover:text-black"} />
                        </button>
                        <button className="p-3 bg-black/3 rounded-2xl hover:bg-black/5 transition-colors group">
                            <Share2 size={20} className="text-black/40 group-hover:text-black" />
                        </button>
                    </div>
                </div>

                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                        <div className="flex">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} size={14} className={i < Math.floor(product.reviews.rating) ? "fill-amber-400 text-amber-400" : "text-black/10"} />
                            ))}
                        </div>
                        <span className="text-xs font-black text-black">{product.reviews.rating}</span>
                        <span className="text-xs font-bold text-black/30">({product.reviews.count} Reviews)</span>
                    </div>
                    <div className="h-4 w-px bg-black/10" />
                    <span className="text-xs font-black text-green-600 uppercase tracking-widest">In Stock</span>
                </div>

                <div className="flex items-baseline gap-4">
                    <span className="text-5xl font-black text-black">${product.price}</span>
                    <span className="text-lg font-bold text-black/20 line-through tracking-tighter">$249</span>
                </div>
            </div>

            {/* Selection Area */}
            <div className="space-y-8">
                {/* Color Selection */}
                <div className="space-y-4">
                    <div className="flex justify-between items-center">
                        <label className="text-[10px] font-black uppercase tracking-[0.3em] text-black/60">Color: <span className="text-black tracking-widest">{selectedColor}</span></label>
                    </div>
                    <div className="flex gap-3">
                        {product.colors.map((color) => (
                            <button
                                key={color.name}
                                onClick={() => setSelectedColor(color.name)}
                                className={`w-10 h-10 rounded-full border-2 transition-all p-0.5 ${
                                    selectedColor === color.name ? "border-black scale-110" : "border-transparent"
                                }`}
                            >
                                <div className="w-full h-full rounded-full shadow-inner" style={{ backgroundColor: color.hex }} />
                            </button>
                        ))}
                    </div>
                </div>

                {/* Size Selection */}
                <div className="space-y-4">
                    <div className="flex justify-between items-center">
                        <label className="text-[10px] font-black uppercase tracking-[0.3em] text-black/60">Select Size</label>
                        <button className="text-[10px] font-black uppercase tracking-widest text-black/30 underline underline-offset-4 hover:text-black">Size Guide</button>
                    </div>
                    <div className="grid grid-cols-4 gap-3">
                        {product.sizes.map((size) => (
                            <button
                                key={size}
                                onClick={() => setSelectedSize(size)}
                                className={`py-4 rounded-2xl text-xs font-black transition-all border ${
                                    selectedSize === size 
                                        ? "bg-black text-white border-black shadow-xl" 
                                        : "bg-white text-black/40 border-black/5 hover:border-black/20 hover:text-black"
                                }`}
                            >
                                {size}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Quantity */}
                <div className="space-y-4">
                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-black/60">Quantity</label>
                    <div className="flex items-center w-fit bg-black/40 rounded-2xl p-1 border border-black/5">
                        <button 
                            onClick={() => setQuantity(Math.max(1, quantity - 1))}
                            className="w-12 h-12 flex items-center justify-center text-xl font-black text-black/80 hover:text-black transition-colors"
                        >
                            -
                        </button>
                        <span className="w-12 h-12 flex items-center justify-center font-black text-sm">{quantity}</span>
                        <button 
                            onClick={() => setQuantity(quantity + 1)}
                            className="w-12 h-12 flex items-center justify-center text-xl font-black text-black/80 hover:text-black transition-colors"
                        >
                            +
                        </button>
                    </div>
                </div>
            </div>

            {/* Actions */}
            <div className="space-y-4 pt-4">
                <div className="flex gap-4">
                    <button 
                        onClick={() => {
                            addToCart(product, quantity, selectedSize, selectedColor);
                            setIsCartOpen(true);
                        }}
                        className="flex-2 bg-black text-white py-6 rounded-4xl font-black uppercase text-[11px] tracking-[0.3em] flex items-center justify-center gap-3 shadow-2xl hover:scale-[1.02] active:scale-95 transition-all"
                    >
                        Buy Now
                    </button>
                    <button 
                        ref={addToCartRef}
                        onClick={handleAddToCart}
                        className="flex-1 bg-white text-black border-2 border-black/5 py-6 rounded-4xl font-black uppercase text-[11px] tracking-[0.3em] flex items-center justify-center gap-3 hover:bg-black/3 active:scale-95 transition-all"
                    >
                        <ShoppingCart size={18} />
                    </button>
                </div>
            </div>

            {/* Product Description */}
            <div className="space-y-6 pt-10 border-t border-black/5">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-black/60">Product Description</label>
                <div className="space-y-4">
                    <p className="text-sm font-medium text-black/60 leading-relaxed uppercase tracking-tight">
                        {product.description}
                    </p>
                    {product.descriptionImage && (
                        <div className="w-full aspect-video rounded-4xl bg-black/3 overflow-hidden relative group">
                            <Image 
                                src={product.descriptionImage} 
                                alt={`${product.name} detail`} 
                                width={800}
                                height={450}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/10 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-700" />
                        </div>
                    )}
                </div>
            </div>

            {/* Features/Trust */}
            <div className="grid grid-cols-3 gap-4 pt-10 border-t border-black/5">
                {[
                  { icon: <Truck size={16} />, title: "Free Shipping", sub: "Orders over $150" },
                  { icon: <RefreshCw size={16} />, title: "30 Days Return", sub: "Easy exchange" },
                  { icon: <ShieldCheck size={16} />, title: "2 Year Warranty", sub: "100% Original" }
                ].map((item, i) => (
                    <div key={i} className="flex flex-col gap-2 items-center text-center">
                        <div className="w-10 h-10 bg-black/3 rounded-full flex items-center justify-center text-black/60">
                            {item.icon}
                        </div>
                        <div className="space-y-0.5">
                            <p className="text-[9px] font-black uppercase tracking-widest text-black">{item.title}</p>
                            <p className="text-[8px] font-bold text-black/30 uppercase tracking-tighter">{item.sub}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
