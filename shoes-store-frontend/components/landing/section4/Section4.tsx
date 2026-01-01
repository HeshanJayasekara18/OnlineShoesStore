'use client';

import React, { useState } from 'react';
import { Star, Heart, Eye, ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import { playGenieEffect } from '@/lib/animations';
import { products as centralProducts } from '@/lib/products';

interface ProductCardProps {
  name: string;
  price: string;
  imageSrc: string;
  bgColor: string;
  delay: number;
  id: string;
}

const ProductCard = ({ name, price, imageSrc, bgColor, delay, id }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    const fullProduct = centralProducts.find(p => p.id === id);
    if (fullProduct) {
      playGenieEffect(imageSrc, e.currentTarget as HTMLElement);
      addToCart(fullProduct, 1, fullProduct.sizes[0], fullProduct.colors[0].name);
    }
  };

  return (
    <div 
      className="group relative"
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Card Container */}
      <div className={`relative ${bgColor} rounded-2xl overflow-hidden transition-all duration-500 ease-out transform ${isHovered ? 'scale-105 shadow-2xl -translate-y-2' : 'shadow-lg'}`}>
        
        {/* Like Button */}
        <button 
          onClick={() => setIsLiked(!isLiked)}
          className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-md hover:scale-110 transition-transform duration-300"
        >
          <Heart 
            size={20} 
            className={`transition-colors duration-300 ${isLiked ? 'fill-red-500 text-red-500' : 'text-gray-600'}`}
          />
        </button>

        {/* Product Image */}
        <div className="aspect-square p-8 flex items-center justify-center overflow-hidden">
          <Image 
            src={imageSrc} 
            alt={name}
            width={500}
            height={500}
            className={`w-full h-auto object-contain transition-all duration-700 ease-out ${isHovered ? 'scale-110 rotate-3' : 'scale-100 rotate-0'}`}
          />
        </div>

        {/* Hover Overlay */}
        <div className={`absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 ${isHovered ? 'opacity-100' : ''}`}>
          <div className="absolute bottom-6 left-6 right-6 flex flex-col gap-2">
            <Link 
              href={`/item-description/${id}`}
              className="bg-white text-black w-full py-2.5 rounded-xl font-bold text-xs tracking-widest uppercase flex items-center justify-center gap-2 hover:bg-gray-100 transition-all duration-300 transform hover:scale-[1.02]"
            >
              <Eye size={16} />
              View Item
            </Link>
            <button 
              onClick={handleAddToCart}
              className="bg-black text-white w-full py-2.5 rounded-xl font-bold text-xs tracking-widest uppercase flex items-center justify-center gap-2 hover:bg-gray-800 transition-all duration-300 transform hover:scale-[1.02] border border-white/10"
            >
              <ShoppingCart size={16} />
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* Product Info */}
      <div className="mt-4 space-y-1">
        <h3 className="font-bold text-xl text-gray-900 transition-colors duration-300 group-hover:text-blue-600">
          {name}
        </h3>
        <div className="flex items-center justify-between">
          <p className="font-bold text-2xl text-gray-900">${price}</p>
          <div className="flex items-center gap-1">
            <Star size={16} className="fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-semibold text-gray-600">4.8</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export function Section4() {
  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-white py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-12 space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 tracking-tight">
            CROWD FAVORITES
          </h1>
          <p className="text-gray-600 text-lg">
            Top rated by our community of runners
          </p>
          
          {/* Decorative Line */}
          <div className="flex justify-center pt-2">
            <div className="w-24 h-1 bg-linear-to-r from-blue-500 to-purple-500 rounded-full"></div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          <ProductCard
            id="l1"
            name="Aura Glide-X"
            price="160"
            imageSrc="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80"
            bgColor="bg-linear-to-br from-blue-400 to-blue-500"
            delay={0}
          />

          <ProductCard
            id="g1"
            name="Phantom Stealth"
            price="170"
            imageSrc="https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=500&q=80"
            bgColor="bg-linear-to-br from-gray-300 to-gray-400"
            delay={100}
          />

          <ProductCard
            id="l2"
            name="Velvet Strider"
            price="155"
            imageSrc="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=500&q=80"
            bgColor="bg-linear-to-br from-pink-300 to-purple-300"
            delay={200}
          />
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-12">
          <button className="group bg-black text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center gap-2">
            <span>View All Products</span>
            <svg 
              className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}