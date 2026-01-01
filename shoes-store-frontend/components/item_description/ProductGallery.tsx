'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface ProductGalleryProps {
    images: string[];
    name: string;
}

export default function ProductGallery({ images, name }: ProductGalleryProps) {
    const [selectedImage, setSelectedImage] = useState(0);

    return (
        <div className="flex flex-col-reverse md:flex-row gap-6">
            {/* Thumbnails */}
            <div className="flex flex-row md:flex-col gap-4 overflow-x-auto md:overflow-y-auto no-scrollbar">
                {images.map((image, index) => (
                    <button
                        key={index}
                        onClick={() => setSelectedImage(index)}
                        className={`relative w-20 h-20 bg-black/3 rounded-2xl overflow-hidden shrink-0 transition-all duration-300 border-2 ${
                            selectedImage === index ? "border-black shadow-lg" : "border-transparent opacity-60 hover:opacity-100"
                        }`}
                    >
                        <Image 
                            src={image} 
                            alt={`${name} index ${index}`} 
                            width={100}
                            height={100}
                            className="w-full h-full object-contain p-2" 
                        />
                    </button>
                ))}
            </div>

            <div className="flex-1 aspect-4/5 bg-black/3 rounded-[2.5rem] flex items-center justify-center p-8 relative overflow-hidden group">
                <Image 
                    src={images[selectedImage]} 
                    alt={name} 
                    width={800}
                    height={1000}
                    className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
                    priority={selectedImage === 0}
                />
                
                {/* Decorative background elements */}
                <div className="absolute -top-20 -left-20 w-64 h-64 bg-black/3 rounded-full blur-3xl" />
                <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-black/3 rounded-full blur-3xl" />
            </div>
        </div>
    );
}
