"use client";
import React, { useState, useEffect, useCallback } from 'react';
import { cn } from '@/app/lib/utils';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  
  const handleScroll = useCallback(() => {
    const isScrolled = window.scrollY > 50;
    setScrolled(isScrolled);
  }, []);
  
  useEffect(() => {
    // Load local Sarpanch font
    const style = document.createElement('style');
    style.textContent = `
      @font-face {
        font-family: 'Sarpanch';
        src: url('/FONTS/Sarpanch-Regular.ttf') format('truetype');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
      }
    `;
    document.head.appendChild(style);
    
    // Check initial scroll position
    handleScroll();
   
    window.addEventListener('scroll', handleScroll, { passive: true });
   
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.head.removeChild(style);
    };
  }, [handleScroll]);
  
  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-12",
        scrolled
          ? "py-2 bg black/80 backdrop-blur-md border-b border-gray-200/20 shadow-sm"
          : "py-6 bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left Side - Bennett Logo */}
        <div className="flex items-center">
          <div className="px-3 py-2 rounded-lg">
            <img 
              src="/bennett.png" 
              alt="Bennett Logo" 
              className="h-12 w-auto"
            />
          </div>
        </div>
        
        {/* Center Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a 
            href="/home" 
            className="font-medium transition-colors hover:opacity-80 text-sm"
            style={{ 
              color: '#04509D',
              fontFamily: 'Sarpanch, sans-serif'
            }}
          >
            Home
          </a>
          <a 
            href="/programs" 
            className="font-medium transition-colors hover:opacity-80 text-sm"
            style={{ 
              color: '#04509D',
              fontFamily: 'Sarpanch, sans-serif'
            }}
          >
            Programs
          </a>
          <a 
            href="/visits" 

            className="font-medium transition-colors hover:opacity-80 text-sm"
            style={{ 
              color: '#04509D',
              fontFamily: 'Sarpanch, sans-serif'
            }}
          >
            Visits
          </a>
          <a 
            href="#" 
            className="font-medium transition-colors hover:opacity-80 text-sm"
            style={{ 
              color: '#04509D',
              fontFamily: 'Sarpanch, sans-serif'
            }}
          >
            Contact
          </a>
        </nav>
        
        {/* Right Side - Times Logo */}
        <div className="flex items-center">
          <div className="px-3 py-2 rounded-lg">
            <img 
              src="/times.png" 
              alt="Times Logo" 
              className="h-12 w-auto"
            />
          </div>
        </div>
      </div>
      
      {/* Mobile Menu Button - only show on small screens */}
      <div className="md:hidden absolute right-6 top-1/2 transform -translate-y-1/2">
        <button 
          className="p-2"
          style={{ color: '#04509D' }}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;