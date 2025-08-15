// components/MainFooter.js

"use client";
import React from 'react';
import Link from 'next/link';
import { FaTwitter, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

export default function MainFooter() {
  const accentColor1 = "#A41D33"; // $madder
  const accentColor2 = "#04509D"; // $polynesian-blue

  const footerLinks = [
    { href: "/team", label: "Our Team" },
    { href: "/about", label: "About Us" },
    { href: "/programs", label: "Programs" },
    { href: "/visits", label: "Global Visits" },
    { href: "/contact", label: "Contact" },
  ];

  const socialLinks = [
    { href: "#", icon: <FaTwitter />, label: "Twitter" },
    { href: "#", icon: <FaGithub />, label: "GitHub" },
    { href: "#", icon: <FaLinkedin />, label: "LinkedIn" },
    { href: "#", icon: <FaInstagram />, label: "Instagram" },
  ];

  return (
    // The background is now solid black. The overflow-hidden is kept as good practice.
    <footer className="bg-black text-white relative z-40"> 

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 sm:py-24 relative z-10">
        {/* Grid layout updated to 3 columns for a balanced look on larger screens */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Column 1: Logo and description */}
          <div className="md:col-span-1">
            <h2 className="text-3xl font-['TAN-Pearl'] mb-4">OIA</h2>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm font-['Sarpanch']">
              Empowering global leaders through comprehensive international education and fostering cross-cultural collaboration.
            </p>
            <div className="flex space-x-5 mt-6">
              {socialLinks.map((link) => (
                <a 
                  key={link.label}
                  href={link.href} 
                  aria-label={link.label}
                  className="text-gray-400 hover:text-white transition-transform duration-300 hover:scale-110"
                >
                  {React.cloneElement(link.icon, { className: "w-5 h-5" })}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick links */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase text-gray-300 mb-4 font-['TAN-Pearl']">
              Explore
            </h3>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-sm group font-['Sarpanch']"
                  >
                    {link.label}
                    <span 
                      className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5"
                      style={{ background: `linear-gradient(90deg, ${accentColor1}, ${accentColor2})` }}
                    ></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact info */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase text-gray-300 mb-4 font-['TAN-Pearl']">
              Contact Us
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <span className="mt-0.5 mr-3 flex-shrink-0 " style={{ color: accentColor2 }} >📍</span>
                <span className="text-gray-400 font-['Sarpanch']">123 Education Street, Knowledge Park, Delhi, India</span>
              </li>
              <li className="flex items-start">
                <span className="mt-0.5 mr-3 flex-shrink-0" style={{ color: accentColor2 }}>✉️</span>
                <a href="mailto:info@oia.com" className="text-gray-400 hover:text-white transition-colors duration-300 font-['Sarpanch']">
                  info@oia.com
                </a>
              </li>
              <li className="flex items-start">
                <span className="mt-0.5 mr-3 flex-shrink-0" style={{ color: accentColor2 }}>📞</span>
                <a href="tel:+4401413459976" className="text-gray-400 hover:text-white transition-colors duration-300 font-['Sarpanch']">
                  +44 (0)141 345 9976
                </a>
              </li>
            </ul>
          </div>
          
          {/* Column 4: Newsletter/CTA has been removed. */}

        </div>

        {/* Bottom bar */}
        <div className="mt-16 sm:mt-24 pt-8 text-center">
          <p className="text-xs text-gray-500 font-['Sarpanch']">
            &copy; {new Date().getFullYear()} OIA - Office of International Affairs. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}