'use client';

import React from 'react';
import { Mail, Lock, Github, Phone, ArrowLeft, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import regimg from '../../public/images/regimg.jpg';

export default function LoginPage() {
    return (
        <div className="h-screen w-full bg-white flex overflow-hidden">
            {/* Left Side: Fixed Storytelling */}
            <div className="hidden md:flex md:w-[45%] relative bg-[#4a544d] h-full shrink-0">
                <Image 
                    src={regimg} 
                    alt="Aether Collection"
                    width={1200}
                    height={1600}
                    className="w-full h-full object-cover"
                    priority
                    unoptimized
                />
                
                <div className="absolute inset-0 p-12 lg:p-16 flex flex-col justify-between">
                    <div className="mt-8">
                        <span className="text-white/60 text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">Welcome Back</span>
                        <div className="flex items-center gap-6">
                            <span className="text-white/40 text-[11px] font-black uppercase tracking-[0.2em] hover:text-white cursor-pointer transition-colors">Exclusive</span>
                            <Link href="/">
                                <button className="bg-white/10 backdrop-blur-md border border-white/20 px-8 py-2.5 rounded-full text-white text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all">
                                    Back to Shop
                                </button>
                            </Link>
                        </div>
                    </div>

                    <div className="space-y-8 mb-8">
                        <div className="flex items-center gap-6">
                            <div className="w-14 h-14 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 flex items-center justify-center">
                                <div className="w-10 h-10 rounded-full bg-linear-to-br from-white/40 to-white/10" />
                            </div>
                            <div>
                                <h3 className="text-white text-2xl font-black uppercase tracking-tighter leading-none mb-1">AETHER</h3>
                                <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest">Premium Footwear</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Side: Scrollable Sign In Form */}
            <div 
                className="flex-1 h-full bg-white overflow-y-auto no-scrollbar flex flex-col items-center overscroll-contain touch-pan-y"
                data-lenis-prevent
            >
                <div className="w-full max-w-md space-y-12 py-20 px-8 md:px-0">
                    <div className="flex justify-between items-center">
                        <h2 className="text-3xl font-black tracking-tighter uppercase text-black">AETHER</h2>
                        <div className="flex items-center gap-3 px-4 py-2 bg-black/5 rounded-full cursor-pointer hover:bg-black/10 transition-all">
                            <span className="text-[11px] font-black text-black/60">EN</span>
                            <div className="w-5 h-3.5 bg-linear-to-br from-blue-500 to-red-500 rounded-[2px]" />
                        </div>
                    </div>

                    <div className="text-center space-y-3">
                        <h1 className="text-5xl font-black text-black tracking-tighter uppercase">Sign In</h1>
                        <p className="text-[11px] font-bold text-black/40 uppercase tracking-[0.2em]">Access your premium collection</p>
                    </div>

                    <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                        <div className="relative group">
                            <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
                                <Mail size={16} className="text-black/20 group-focus-within:text-black transition-colors" />
                            </div>
                            <input 
                                type="email" 
                                placeholder="Email Address" 
                                className="w-full bg-black/3 border-none rounded-3xl py-5 pl-14 pr-6 text-xs font-bold text-black focus:ring-2 focus:ring-black/5 transition-all outline-none placeholder:text-black/20"
                            />
                        </div>

                        <div className="relative group">
                            <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
                                <Lock size={16} className="text-black/20 group-focus-within:text-black transition-colors" />
                            </div>
                            <input 
                                type="password" 
                                placeholder="Password" 
                                className="w-full bg-black/3 border-none rounded-3xl py-5 pl-14 pr-6 text-xs font-bold text-black focus:ring-2 focus:ring-black/5 transition-all outline-none placeholder:text-black/20"
                            />
                        </div>

                        <div className="flex justify-end pr-2">
                            <span className="text-[10px] font-bold text-black/40 uppercase tracking-[0.2em] hover:text-black cursor-pointer transition-colors">Forgot Password?</span>
                        </div>

                        <button className="w-full bg-black text-white py-6 rounded-3xl font-black uppercase text-[12px] tracking-[0.4em] shadow-2xl hover:scale-[1.02] active:scale-95 transition-all mt-6 shadow-black/20">
                            Sign In
                        </button>
                    </form>

                    <div className="relative flex items-center gap-6 py-4">
                        <div className="flex-1 h-px bg-black/5" />
                        <span className="text-[10px] font-black text-black/20 uppercase tracking-[0.3em]">OR</span>
                        <div className="flex-1 h-px bg-black/5" />
                    </div>

                    <div className="space-y-6">
                        <button className="w-full bg-white border border-black/5 py-5 rounded-3xl flex items-center justify-center gap-5 hover:bg-black/3 transition-all shadow-xl shadow-black/5">
                            <Image src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" width={22} height={22} />
                            <span className="text-[11px] font-black uppercase tracking-[0.2em] text-black">Sign in with Google</span>
                        </button>
                        
                        <div className="text-center">
                            <span className="text-[11px] font-bold text-black/40 uppercase tracking-[0.2em]">
                                New to Aether?{' '}
                                <Link href="/register" className="text-black underline font-black hover:text-black/70 transition-colors">
                                    Register Now
                                </Link>
                            </span>
                        </div>
                    </div>

                    <div className="flex justify-center gap-10 pt-8 border-t border-black/5">
                        {[Github, Phone, Mail].map((Icon, i) => (
                            <Icon key={i} size={22} className="text-black/20 hover:text-black cursor-pointer transition-all hover:scale-110" />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
