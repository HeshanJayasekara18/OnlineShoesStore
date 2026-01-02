'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { Cart } from "../../cart/Cart";
import { User, LogOut } from "lucide-react";

export function Navbar() {
    const pathname = usePathname();
    const { user, logout, isAuthenticated } = useAuth();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 150) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (pathname === '/login' || pathname === '/register') return null;

    const navLinks = [
        { name: "HOME", path: "/" },
        { name: "LADIES", path: "/ladies#ladies-collection" },
        { name: "GENTS", path: "/gents#gents-collection" },
        { name: "BRANDS", path: "/brands" },
        { name: "SALE", path: "/sale" },
    ];

    return (
        <>
            <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
                isScrolled 
                    ? "py-4 bg-black/40 backdrop-blur-xl border-b border-white/10 shadow-2xl" 
                    : "py-8 bg-transparent"
            }`}>
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                <Link href="/">
                    <span className="text-white text-2xl font-black tracking-tighter drop-shadow-lg cursor-pointer hover:scale-105 transition-transform block">
                        AETHER
                    </span>
                </Link>

                {/* Desktop Menu */}
                <div className={`hidden md:flex items-center gap-1 transition-all duration-500 ${
                    isScrolled 
                        ? "bg-white/5 backdrop-blur-md" 
                        : "bg-black/20 backdrop-blur-xl"
                } rounded-full p-1.5 border border-white/10 shadow-2xl`}>
                    {navLinks.map((link) => (
                        <Link 
                            key={link.name} 
                            href={link.path}
                            className={`px-8 py-2.5 rounded-full font-bold transition-all duration-300 text-xs tracking-[0.2em] ${
                                (pathname === link.path || 
                                 (link.path === "/" && pathname === "/") ||
                                 (link.path.startsWith("/ladies") && pathname.startsWith("/ladies")) ||
                                 (link.path.startsWith("/gents") && pathname.startsWith("/gents")))
                                    ? "bg-black text-white shadow-2xl scale-105 border border-white/20" 
                                    : "text-white/70 hover:bg-black hover:text-white hover:scale-105"
                            }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                <div className="hidden md:flex items-center gap-6">
                    {isAuthenticated ? (
                        <div className="flex items-center gap-6">
                            <div className="flex items-center gap-2 text-white/70 hover:text-white transition-colors cursor-default">
                                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
                                    <User size={14} />
                                </div>
                                <span className="text-[10px] font-black uppercase tracking-widest">{user?.name}</span>
                            </div>
                            <button 
                                onClick={logout}
                                className="text-white/40 hover:text-white transition-all flex items-center gap-2 group"
                            >
                                <LogOut size={16} className="group-hover:translate-x-0.5 transition-transform" />
                                <span className="text-[10px] font-black uppercase tracking-widest">Logout</span>
                            </button>
                        </div>
                    ) : (
                        <Link 
                            href="/login"
                            className="text-white/70 hover:text-white font-bold text-xs tracking-[0.2em] transition-colors"
                        >
                            Sign In
                        </Link>
                    )}
                    <div className="flex items-center gap-4">
                        <Cart isScrolled={isScrolled} variant="navbar-desktop" />
                        {!isAuthenticated && (
                            <Link 
                                href="/register"
                                className="bg-black text-white px-8 py-2.5 rounded-full font-bold transition-all text-xs tracking-[0.2em] border border-white/20 hover:scale-105 shadow-xl hover:bg-white hover:text-black duration-300"
                            >
                                Register
                            </Link>
                        )}
                    </div>
                </div>

                {/* Mobile Menu Button Group */}
                <div className="md:hidden flex items-center gap-3">
                    <Cart isScrolled={isScrolled} variant="navbar-mobile" />
                    <button
                        className="text-white p-3 backdrop-blur-xl bg-black/40 rounded-2xl border border-white/10 shadow-xl"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {isMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2.5}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2.5}
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-full left-6 right-6 mt-4 bg-black/95 backdrop-blur-3xl rounded-[40px] p-8 border border-white/10 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.5)] overflow-hidden animate-in fade-in slide-in-from-top-4 duration-500 z-50">
                    <div className="flex flex-col gap-3">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.path}
                                className={`font-black tracking-[0.2em] transition-all text-left px-8 py-5 rounded-3xl border text-sm ${
                                    (pathname === link.path || 
                                     (link.path === "/" && pathname === "/") ||
                                     (link.path.startsWith("/ladies") && pathname.startsWith("/ladies")) ||
                                     (link.path.startsWith("/gents") && pathname.startsWith("/gents")))
                                        ? "bg-white/10 text-white border-white/20 shadow-inner" 
                                        : "text-white/40 border-transparent hover:bg-white/5 hover:text-white"
                                }`}
                                onClick={() => {
                                    setIsMenuOpen(false);
                                }}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="/login"
                            className="bg-white/10 text-white border border-white/10 font-black tracking-[0.2em] text-center py-5 rounded-3xl mt-6 hover:bg-white/20 transition-all text-sm"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Sign In
                        </Link>
                        <Link
                            href="/register"
                            className="bg-white text-black font-black tracking-[0.2em] text-center py-5 rounded-3xl shadow-2xl hover:scale-[1.02] active:scale-95 transition-all text-sm"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Register
                        </Link>
                    </div>
                </div>
            )}

            </nav>
            <Cart isScrolled={isScrolled} variant="floating" />
        </>
    );
}
