'use client';

import React, { useState } from 'react';
import { ArrowRight, ArrowLeft, Mail, Phone, Lock, User, Github, Loader2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../context/AuthContext';
import regimg from '../../public/images/regimg.jpg';

export default function RegisterPage() {
    const { register } = useAuth();
    const router = useRouter();
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        password: '',
        confirmPassword: '',
        agree: false
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        if (!formData.name || !formData.email || !formData.password) {
            setError('Please fill in required fields');
            return;
        }

        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        if (!formData.agree) {
            setError('You must agree to the conditions');
            return;
        }

        setLoading(true);
        try {
            await register(formData);
            router.push('/');
        } catch (err: any) {
            setError(err.message || 'Registration failed');
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    return (
        <div className="h-screen w-full bg-white flex overflow-hidden">
            {/* Left Side: Fixed Featured Collection */}
            <div className="hidden md:flex md:w-[45%] relative bg-[#4a544d] h-full shrink-0">
                <Image 
                    src={regimg} 
                    alt="Featured Collection"
                    width={1200}
                    height={1600}
                    className="w-full h-full object-cover"
                    priority
                    unoptimized
                />
                
                {/* Content Overlay */}
                <div className="absolute inset-0 p-12 lg:p-16 flex flex-col justify-between">
                    <div className="mt-8">
                        <span className="text-white/60 text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">Featured Collection</span>
                        <div className="flex items-center gap-6">
                            <span className="text-white/40 text-[11px] font-black uppercase tracking-[0.2em] hover:text-white cursor-pointer transition-colors">Explore</span>
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
                                <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest">Future of Footwear</p>
                            </div>
                        </div>
                        
                        <div className="flex gap-3">
                            <button className="p-4 bg-white/10 backdrop-blur-xl border border-white/10 rounded-full hover:bg-white/20 transition-all group">
                                <ArrowLeft size={20} className="text-white group-hover:-translate-x-1 transition-transform" />
                            </button>
                            <button className="p-4 bg-white/10 backdrop-blur-xl border border-white/10 rounded-full hover:bg-white/20 transition-all group">
                                <ArrowRight size={20} className="text-white group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Side: Scrollable Registration Form */}
            <div 
                className="flex-1 h-full bg-white overflow-y-auto no-scrollbar flex flex-col items-center overscroll-contain touch-pan-y"
                data-lenis-prevent
            >
                <div className="w-full max-w-md space-y-12 py-20 px-8 md:px-0">
                    {/* Header */}
                    <div className="flex justify-between items-center">
                        <h2 className="text-3xl font-black tracking-tighter uppercase text-black">AETHER</h2>
                        <div className="flex items-center gap-3 px-4 py-2 bg-black/5 rounded-full cursor-pointer hover:bg-black/10 transition-all">
                            <span className="text-[11px] font-black text-black/60">EN</span>
                            <div className="w-5 h-3.5 bg-linear-to-br from-blue-500 to-red-500 rounded-[2px]" />
                        </div>
                    </div>

                    <div className="text-center space-y-3">
                        <h1 className="text-5xl font-black text-black tracking-tighter uppercase">Create Account</h1>
                        <p className="text-[11px] font-bold text-black/40 uppercase tracking-[0.2em]">Join the AETHER community today</p>
                    </div>

                    {error && (
                        <div className="bg-red-50 border border-red-100 p-4 rounded-2xl">
                            <p className="text-red-500 text-[10px] font-black uppercase tracking-widest text-center">{error}</p>
                        </div>
                    )}

                    {/* Form */}
                    <form className="space-y-5" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-2 gap-5">
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
                                    <User size={16} className="text-black/20 group-focus-within:text-black transition-colors" />
                                </div>
                                <input 
                                    name="name"
                                    type="text" 
                                    placeholder="Full Name" 
                                    className="w-full bg-black/3 border-none rounded-3xl py-5 pl-14 pr-6 text-xs font-bold text-black focus:ring-2 focus:ring-black/5 transition-all outline-none placeholder:text-black/20"
                                    value={formData.name}
                                    onChange={handleChange}
                                    disabled={loading}
                                />
                            </div>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
                                    <Phone size={16} className="text-black/20 group-focus-within:text-black transition-colors" />
                                </div>
                                <input 
                                    name="phone"
                                    type="text" 
                                    placeholder="Mobile Number" 
                                    className="w-full bg-black/3 border-none rounded-3xl py-5 pl-14 pr-6 text-xs font-bold text-black focus:ring-2 focus:ring-black/5 transition-all outline-none placeholder:text-black/20"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    disabled={loading}
                                />
                            </div>
                        </div>

                        <div className="relative group">
                            <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
                                <Mail size={16} className="text-black/20 group-focus-within:text-black transition-colors" />
                            </div>
                            <input 
                                name="email"
                                type="email" 
                                placeholder="Email Address" 
                                className="w-full bg-black/3 border-none rounded-3xl py-5 pl-14 pr-6 text-xs font-bold text-black focus:ring-2 focus:ring-black/5 transition-all outline-none placeholder:text-black/20"
                                value={formData.email}
                                onChange={handleChange}
                                disabled={loading}
                            />
                        </div>

                        <div className="relative group">
                            <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
                                <Lock size={16} className="text-black/20 group-focus-within:text-black transition-colors" />
                            </div>
                            <input 
                                name="password"
                                type="password" 
                                placeholder="Password" 
                                className="w-full bg-black/3 border-none rounded-3xl py-5 pl-14 pr-6 text-xs font-bold text-black focus:ring-2 focus:ring-black/5 transition-all outline-none placeholder:text-black/20"
                                value={formData.password}
                                onChange={handleChange}
                                disabled={loading}
                            />
                        </div>

                        <div className="relative group">
                            <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
                                <Lock size={16} className="text-black/20 group-focus-within:text-black transition-colors" />
                            </div>
                            <input 
                                name="confirmPassword"
                                type="password" 
                                placeholder="Re-enter Password" 
                                className="w-full bg-black/3 border-none rounded-3xl py-5 pl-14 pr-6 text-xs font-bold text-black focus:ring-2 focus:ring-black/5 transition-all outline-none placeholder:text-black/20"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                disabled={loading}
                            />
                        </div>

                        <div className="flex items-center gap-4 py-3">
                            <input 
                                name="agree"
                                type="checkbox" 
                                className="w-5 h-5 rounded-lg border-black/10 text-black focus:ring-black/5 cursor-pointer" 
                                checked={formData.agree}
                                onChange={handleChange}
                                disabled={loading}
                            />
                            <span className="text-[11px] font-bold text-black/40 uppercase tracking-widest leading-none">I agree to the <span className="text-black underline cursor-pointer font-black">Terms & Conditions</span></span>
                        </div>

                        <button 
                            type="submit"
                            disabled={loading}
                            className="w-full bg-black text-white py-6 rounded-3xl font-black uppercase text-[12px] tracking-[0.4em] shadow-2xl hover:scale-[1.02] active:scale-95 transition-all mt-6 shadow-black/20 flex items-center justify-center disabled:opacity-50 disabled:hover:scale-100"
                        >
                            {loading ? <Loader2 className="animate-spin text-white" size={20} /> : 'Create Account'}
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
                            <span className="text-[11px] font-black uppercase tracking-[0.2em] text-black">Sign up with Google</span>
                        </button>
                        
                        <div className="text-center">
                            <span className="text-[11px] font-bold text-black/40 uppercase tracking-[0.2em]">
                                Already have an account?{' '}
                                <Link href="/login" className="text-black underline font-black hover:text-black/70 transition-colors">
                                    Sign In
                                </Link>
                            </span>
                        </div>
                    </div>

                    {/* Social Links */}
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
