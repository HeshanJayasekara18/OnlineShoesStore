'use client';

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import { getProductById } from '@/lib/products';
import ProductGallery from '@/components/item_description/ProductGallery';
import ProductInfo from '@/components/item_description/ProductInfo';
import { Navbar } from '@/components/common/navbar/Navbar';

import RelatedProducts from '@/components/item_description/RelatedProducts';

export default function ItemDescriptionPage() {
    const params = useParams();
    const id = params.id as string;
    const product = getProductById(id);

    if (!product) {
        return (
            <div className="min-h-screen bg-white flex items-center justify-center">
                <div className="text-center space-y-4">
                    <h1 className="text-4xl font-black text-black/10 tracking-widest uppercase">Product Not Found</h1>
                    <p className="text-black/40">The product you're looking for doesn't exist.</p>
                    <a href="/" className="inline-block mt-4 text-sm font-bold underline underline-offset-4 hover:text-black transition-colors">Return to Home</a>
                </div>
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            
            <div className="pt-32 pb-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                    {/* Left: Image Gallery */}
                    <ProductGallery images={product.images} name={product.name} />

                    {/* Right: Product Info & Actions */}
                    <ProductInfo product={product} />
                </div>

                {/* Bottom: Related Products */}
                <RelatedProducts currentProductId={product.id} category={product.category} />
            </div>
        </main>
    );
}
