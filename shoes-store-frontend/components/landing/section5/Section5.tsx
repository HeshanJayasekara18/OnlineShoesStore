'use client';

import React, { useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface CategoryCardProps {
  title: string;
  description: string;
  imageSrc: string;
  gradient: string;
  delay: number;
}

const CategoryCard = ({ title, description, imageSrc, gradient, delay }: CategoryCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group relative"
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Card Container */}
      <div className={`relative h-[500px] rounded-3xl overflow-hidden transition-all duration-700 ease-out transform ${isHovered ? 'scale-105 shadow-2xl' : 'shadow-xl'}`}>
        
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={imageSrc} 
            alt={title}
            className={`w-full h-full object-cover transition-all duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
          />
          
          {/* Gradient Overlay */}
          <div className={`absolute inset-0 bg-linear-to-br ${gradient} mix-blend-multiply transition-opacity duration-700 ${isHovered ? 'opacity-70' : 'opacity-50'}`}></div>
          
          {/* Dark Bottom Gradient */}
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"></div>
        </div>

        {/* Floating Sparkle Effect */}
        {isHovered && (
          <div className="absolute top-8 right-8 animate-bounce">
            <Sparkles className="text-white/80" size={28} />
          </div>
        )}

        {/* Content */}
        <div className="relative h-full flex flex-col justify-end p-8 z-10">
          
          {/* Category Label */}
          <div className={`mb-4 transition-all duration-500 transform ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <span className="inline-block bg-white/20 backdrop-blur-md text-white text-xs font-bold px-4 py-1.5 rounded-full border border-white/30">
              NEW ARRIVALS
            </span>
          </div>

          {/* Title */}
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-3 transition-all duration-500 transform">
            {title}
          </h2>

          {/* Description */}
          <p className={`text-white/90 text-lg mb-6 transition-all duration-500 transform ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            {description}
          </p>

          {/* CTA Button */}
          <button className={`group/btn flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform ${isHovered ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'} w-fit`}>
            <span>Shop Now</span>
            <ArrowRight 
              size={22} 
              className="transition-transform duration-300 group-hover/btn:translate-x-1"
            />
          </button>
        </div>

        {/* Animated Border */}
        <div className={`absolute inset-0 rounded-3xl transition-all duration-700 ${isHovered ? 'ring-4 ring-white/50 ring-offset-4' : ''}`}></div>
      </div>
    </div>
  );
};

export  function Section5() {
  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-6 py-2 rounded-full border border-blue-200 mb-4">
            <Sparkles size={18} />
            <span className="text-sm font-semibold uppercase tracking-wide">Shop by Category</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 tracking-tight">
            Find Your Perfect
            <span className="block mt-2 pb-2 bg-linear-to-r from-blue-500 to-blue-500 bg-clip-text text-transparent">
              Style Match
            </span>
          </h1>
          
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Explore our curated collections designed for every member of your family
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Ladies Category */}
          <CategoryCard
            title="Ladies"
            description="Elegant designs that blend style with comfort"
            imageSrc="https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?w=600&q=80"
            gradient="from-pink-500/60 to-rose-500/60"
            delay={0}
          />

          {/* Gents Category */}
          <CategoryCard
            title="Gents"
            description="Bold and sophisticated sneakers for men"
            imageSrc="https://images.unsplash.com/photo-1552346154-21d32810aba3?w=600&q=80"
            gradient="from-blue-600/60 to-cyan-500/60"
            delay={150}
          />

          {/* Kids Category */}
          <CategoryCard
            title="Kids"
            description="Fun, colorful designs for the little ones"
            imageSrc="https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=600&q=80"
            gradient="from-amber-500/60 to-orange-500/60"
            delay={300}
          />
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 text-lg mb-6">
            Can&apos;t decide? Explore all our collections
          </p>
          <button className="group bg-black text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center gap-2 mx-auto">
            <span>View All Categories</span>
            <ArrowRight 
              size={22} 
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-bounce {
          animation: float 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}