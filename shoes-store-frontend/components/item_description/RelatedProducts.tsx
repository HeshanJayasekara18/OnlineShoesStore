'use client';

import React from 'react';
import { products } from '@/lib/products';
import { ShoppingCart, Eye } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import { playGenieEffect } from '@/lib/animations';

interface RelatedProductsProps {
    currentProductId: string;
    category: string;
}

export default function RelatedProducts({ currentProductId, category }: RelatedProductsProps) {
    const { addToCart } = useCart();
    
    const related = products
        .filter(p => p.id !== currentProductId && p.category === category)
        .slice(0, 4);

    const handleAddToCart = (e: React.MouseEvent, product: any) => {
        e.preventDefault();
        playGenieEffect(product.image, e.currentTarget as HTMLElement);
        addToCart(product, 1, product.sizes[0], product.colors[0].name);
    };

    if (related.length === 0) return null;

    return (
        <section className="pt-20 border-t border-black/5 mt-20">
            <div className="space-y-12">
                <div className="flex justify-between items-end">
                    <div className="space-y-4">
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-black/20">Recommendations</span>
                        <h2 className="text-4xl font-black text-black tracking-tighter uppercase leading-none">
                            You May Also <span className="text-black/20">Like</span>
                        </h2>
                    </div>
                    <Link href="/ladies" className="text-xs font-black uppercase tracking-widest text-black hover:underline underline-offset-8 transition-all">
                        View All
                    </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {related.map((product) => (
                        <div key={product.id} className="group relative flex flex-col">
                            {/* Product Image Card */}
                            <div className="relative aspect-4/5 bg-black/3 rounded-4xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:scale-[1.02]">
                                <div className="absolute inset-0 p-8 flex items-center justify-center">
                                    <Image 
                                        src={product.image} 
                                        alt={product.name} 
                                        width={400}
                                        height={500}
                                        className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
                                    />
                                </div>

                                {/* Hover Actions */}
                                <div className="absolute bottom-4 left-3 right-3 z-30 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 lg:translate-y-4 lg:group-hover:translate-y-0 transition-all duration-300 flex flex-col gap-2">
                                    <button 
                                        onClick={(e) => handleAddToCart(e, product)}
                                        className="w-full py-2.5 bg-black text-white rounded-xl font-black uppercase text-[8px] tracking-widest flex items-center justify-center gap-2 shadow-2xl hover:bg-black/80 transition-colors"
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
                            </div>

                            {/* Info */}
                            <div className="mt-6 flex flex-col gap-1 px-1">
                                <div className="flex justify-between items-baseline gap-4">
                                    <h3 className="text-sm font-black text-black uppercase tracking-tight truncate">{product.name}</h3>
                                    <span className="text-base font-black text-black">${product.price}</span>
                                </div>
                                <span className="text-[9px] font-bold text-black/30 uppercase tracking-widest">{product.category}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
