/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Menu, X, Phone, Heart, Activity } from 'lucide-react';
import { PageId } from '../types';
import { COMPANY_DETAILS } from '../data';

interface NavbarProps {
  activePage: PageId;
  onPageChange: (page: PageId) => void;
}

export default function Navbar({ activePage, onPageChange }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Our Services' },
    { id: 'solutions', label: 'Supplies & Solutions' },
    { id: 'emergency-prep', label: 'Emergency Prep' },
    { id: 'contact', label: 'Contact' },
  ] as const;

  const handleNavClick = (pageId: PageId) => {
    onPageChange(pageId);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav id="app-navbar" className="sticky top-0 z-50 glass-header shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Brand Name */}
          <div 
            id="nav-logo-container"
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={() => handleNavClick('home')}
          >
            <div className="relative flex items-center justify-center w-11 h-11 bg-white rounded-full border-2 border-brand-red shadow-md transition-all duration-300 group-hover:scale-105">
              <Heart className="w-6 h-6 text-brand-red fill-brand-red/10 transition-colors duration-300 group-hover:fill-brand-red/30" />
              <Activity className="absolute inset-0 m-auto w-4.5 h-4.5 text-brand-blue" />
            </div>
            <div className="flex flex-col">
              <span className="text-white font-display font-bold tracking-tight text-lg leading-none flex items-center gap-1.5">
                LIFELINE <span className="text-brand-red font-extrabold">COMMUNI-CARE</span>
              </span>
              <span className="text-[10px] text-zinc-400 font-mono tracking-wider mt-1 text-left">
                (PTY) LTD &bull; EST. 2026
              </span>
            </div>
          </div>

          {/* Desktop Navigation Link Groups */}
          <div id="nav-desktop-links" className="hidden md:flex items-center space-x-1.5">
            {navItems.map((item) => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-brand-red text-white shadow-md shadow-brand-red/20'
                      : 'text-zinc-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* Top-Right Rapid Phone CTA for Robbie */}
          <div id="nav-cta-container" className="hidden lg:flex items-center">
            <a
              id="header-phone-cta"
              href={`tel:${COMPANY_DETAILS.phonePrimary.replace(/\s+/g, '')}`}
              className="flex items-center space-x-2 bg-white hover:bg-zinc-100 text-brand-blue font-semibold px-4.5 py-2 rounded-xl text-sm tracking-wide shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 border border-zinc-200"
            >
              <Phone className="w-4 h-4 text-brand-red fill-brand-red" />
              <span className="font-mono text-xs">{COMPANY_DETAILS.phonePrimary}</span>
            </a>
          </div>

          {/* Mobile Menu Action Button */}
          <div id="nav-mobile-action" className="flex md:hidden">
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-zinc-300 hover:text-white hover:bg-white/5 focus:outline-none cursor-pointer"
              aria-label="Toggle Navigation Options"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Slide Outline */}
      {isOpen && (
        <div id="nav-mobile-drawer" className="md:hidden bg-brand-blue border-t border-white/5 transition-all duration-300">
          <div className="px-2 pt-3 pb-6 space-y-1.5 sm:px-3 shadow-2xl">
            {navItems.map((item) => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  id={`mobile-nav-link-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`block w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-brand-red text-white shadow-inner'
                      : 'text-zinc-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
            
            <div className="pt-4 px-4 border-t border-white/5">
              <p className="text-xs text-zinc-400 mb-2 font-mono text-left">CRITICAL EMS CALL ROBBIE:</p>
              <a
                id="mobile-drawer-phone-cta"
                href={`tel:${COMPANY_DETAILS.phonePrimary.replace(/\s+/g, '')}`}
                className="flex items-center justify-center space-x-2 bg-brand-red-light text-brand-red py-3 rounded-xl font-bold text-sm tracking-wide hover:bg-brand-red hover:text-white transition-colors duration-200"
              >
                <Phone className="w-4 h-4 fill-current" />
                <span className="font-mono">{COMPANY_DETAILS.phonePrimary}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
