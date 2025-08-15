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
    // Check initial scroll position
    handleScroll();
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-12",
        scrolled 
          ? "py-2 bg-white/80 backdrop-blur-md border-b border-gray-200/20 shadow-sm" 
          : "py-6 bg-transparent"
      )}
    >
      {/* Add your header content here */}
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-xl font-bold">
          Your Logo
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
            Home
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
            About
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
            Services
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;