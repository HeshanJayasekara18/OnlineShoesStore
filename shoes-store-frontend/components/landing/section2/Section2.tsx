'use client';

import React, { useState } from 'react';
import { ShoppingCart, Eye } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { StaticImageData } from 'next/image';
import { useCart } from '@/context/CartContext';
import { playGenieEffect } from '@/lib/animations';
import { products as centralProducts } from '@/lib/products';
import greenshoe from '../../../resource/images/greenNike.png'
import pinkshoe from '../../../resource/images/pinkN.png'
import rednike from '../../../resource/images/rednike.png'
import whiteShoe from '../../../resource/images/whiteNike.png'

interface SneakerCardProps {
  name: string;
  price: string;
  color: string;
  imageSrc: string | StaticImageData;
  isNew: boolean;
  bgColor: string;
  id: string;
}

const SneakerCard = ({ name, price, color, imageSrc, isNew, bgColor, id }: SneakerCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    const fullProduct = centralProducts.find(p => p.id === id);
    if (fullProduct) {
      const imgUrl = typeof imageSrc === 'string' ? imageSrc : (imageSrc as StaticImageData).src;
      playGenieEffect(imgUrl, e.currentTarget as HTMLElement);
      addToCart(fullProduct, 1, fullProduct.sizes[0], fullProduct.colors[0].name);
    }
  };

  return (
    <div 
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`${bgColor} rounded-2xl overflow-hidden transition-all duration-500 ease-out transform ${isHovered ? 'scale-105 shadow-2xl' : 'shadow-lg'}`}>
        {isNew && (
          <div className="absolute top-4 right-4 z-10">
            <span className="bg-white text-black text-xs font-bold px-3 py-1 rounded-full shadow-md">
              NEW
            </span>
          </div>
        )}
        
        <section className="bg-linear-to-br from-gray-50 to-white py-24 px-4 md:px-8 relative overflow-hidden flex items-center justify-center">
          <Image 
            src={imageSrc} 
            alt={name}
            width={400}
            height={400}
            className={`w-full h-auto object-contain transition-all duration-700 ease-out ${isHovered ? 'scale-110 rotate-6' : 'scale-100 rotate-0'}`}
          />
        </section>
      </div>

      <div className="mt-4 space-y-2">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-bold text-lg text-gray-900 transition-colors duration-300 group-hover:text-blue-600">
              {name}
            </h3>
            <p className="text-sm text-gray-500">{color}</p>
          </div>
          <p className="font-bold text-xl text-gray-900">${price}</p>
        </div>

        <div className="flex gap-2">
          <button 
            onClick={handleAddToCart}
            className={`flex-1 bg-black text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 transform ${
              isHovered ? 'bg-blue-600 scale-105 shadow-lg' : 'hover:bg-gray-800'
            }`}
          >
            <ShoppingCart size={18} />
            <span className="text-sm">Add to Cart</span>
          </button>
          <Link 
            href={`/item-description/${id}`}
            className={`px-4 bg-gray-100 text-black py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:bg-gray-200 border border-black/5 ${
              isHovered ? 'scale-105 shadow-md' : ''
            }`}
          >
            <Eye size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export function Section2() {
  return (
    <div id="featured-selection" className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8 flex-wrap gap-4">
          <div className="flex items-center gap-2 text-sm text-green-600">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="font-medium">Guaranteed Fit or Money Back</span>
          </div>
          
          <div className="flex items-center gap-6">
            <Image src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg" alt="Visa" width={60} height={24} className="h-6 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300" />
            <Image src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" width={60} height={32} className="h-8 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300" />
            <span className="text-blue-600 font-bold text-lg opacity-70 hover:opacity-100 transition-opacity duration-300">koko</span>
            <span className="text-gray-700 font-bold opacity-70 hover:opacity-100 transition-opacity duration-300">G Pay</span>
          </div>
        </div>

        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-600 tracking-tighter">
            FRESH DROPS
          </h2>
          <div className="w-32 h-1 bg-linear-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <SneakerCard
            id="lp1"
            name="Neon Runner X1"
            price="149"
            color="Red/White"
            isNew={true}
            bgColor="bg-linear-to-br from-red-500 to-red-600"
            imageSrc={rednike}
          />

          <SneakerCard
            id="lp2"
            name="Velocity Blue"
            price="129"
            color="Blue/Grey"
            isNew={true}
            bgColor="bg-linear-to-br from-gray-800 to-black"
            imageSrc={pinkshoe}
          />

          <SneakerCard
            id="lp3"
            name="Urban Trekker"
            price="189"
            color="Green/Black"
            isNew={true}
            bgColor="bg-linear-to-br from-lime-400 to-green-500"
            imageSrc={greenshoe}
          />

          <SneakerCard
            id="lp4"
            name="Cloud Strider"
            price="159"
            color="Black/White"
            isNew={true}
            bgColor="bg-gradient-to-br from-gray-200 to-gray-300"
            imageSrc={whiteShoe}
          />
        </div>
      </div>
    </div>
  );
}