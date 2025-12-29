'use client';
import React from 'react';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-blue-700 via-blue-600 to-blue-950 text-white">
      
      {/* Newsletter Section */}
      <div className="border-b border-blue-800/50">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">Stay In The Loop</h3>
              <p className="text-blue-200">Subscribe to get special offers, new releases and more.</p>
            </div>
            <div className="flex w-full md:w-auto gap-2">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 md:w-80 px-6 py-3 rounded-full bg-blue-900/50 border border-blue-700/50 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
              />
              <button className="bg-white text-blue-950 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
                <span className="hidden sm:inline">Subscribe</span>
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Company Info */}
          <div className="space-y-4">
            <span className="text-white text-2xl font-black tracking-tighter drop-shadow-lg cursor-pointer hover:scale-105 transition-transform">
              AETHER
            </span>
            <p className="text-blue-200 leading-relaxed">
              Your ultimate destination for the latest and greatest in sneaker culture. Step into style.
            </p>
            <div className="flex gap-3 pt-2">
              <a href="#" className="bg-blue-800/50 p-2.5 rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-blue-800/50 p-2.5 rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-blue-800/50 p-2.5 rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1">
                <Twitter size={20} />
              </a>
              <a href="#" className="bg-blue-800/50 p-2.5 rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-blue-100">Shop</h4>
            <ul className="space-y-3">
              {['New Arrivals', 'Men', 'Women', 'Kids', 'Sale', 'Collections'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-blue-200 hover:text-white hover:translate-x-2 inline-block transition-all duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-blue-100">Customer Service</h4>
            <ul className="space-y-3">
              {['Contact Us', 'Shipping Info', 'Returns', 'Size Guide', 'Track Order', 'FAQs'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-blue-200 hover:text-white hover:translate-x-2 inline-block transition-all duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-blue-100">Get In Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-blue-200 group">
                <MapPin size={20} className="mt-1 flex-shrink-0 group-hover:text-white transition-colors duration-300" />
                <span className="group-hover:text-white transition-colors duration-300">
                  123 Malabe Street, Fashion District, NY 10001
                </span>
              </li>
              <li className="flex items-center gap-3 text-blue-200 group hover:text-white transition-colors duration-300 cursor-pointer">
                <Phone size={20} className="flex-shrink-0" />
                <span>+94 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-blue-200 group hover:text-white transition-colors duration-300 cursor-pointer">
                <Mail size={20} className="flex-shrink-0" />
                <span>hello@aether.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-blue-800/50">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-blue-300">
            <p>© {currentYear} AETHER. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors duration-300">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors duration-300">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}