/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, Heart, UserRoundCheck, Star, Siren } from 'lucide-react';
import { COMPANY_DETAILS } from '../data';
import { PageId } from '../types';

interface HeroSectionProps {
  onPageChange: (pageId: PageId) => void;
}

export default function HeroSection({ onPageChange }: HeroSectionProps) {
  return (
    <div id="hero-banner" className="relative bg-brand-blue overflow-hidden min-h-[90vh] flex items-center pt-8 pb-16">
      
      {/* Absolute Tech Background Layout Ornaments */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-brand-red rounded-full filter blur-[120px] mix-blend-screen animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-brand-accent rounded-full filter blur-[100px] mix-blend-screen" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Content Info Column */}
          <div id="hero-content-left" className="lg:col-span-7 space-y-8 text-left">
            
            {/* Top Corporate Status Badge & Big Display Title */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-3"
              >
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-black tracking-tighter uppercase leading-none select-none">
                  <span className="text-white">LIFELINE</span>{' '}
                  <span className="text-brand-red block sm:inline">COMMUNI-CARE <span className="text-zinc-400 text-lg sm:text-2xl md:text-3xl lg:text-4xl font-sans tracking-normal font-medium capitalize select-none align-middle ml-1.5 sm:ml-2">Pty Ltd</span></span>
                </h1>
              </motion.div>

              {/* Elegantly Polished Slogan with sequential staggered entrance */}
              <div className="flex flex-wrap items-center gap-x-3.5 gap-y-1.5 text-sm sm:text-base md:text-lg font-mono font-extrabold tracking-widest uppercase select-none pb-2">
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.35, delay: 0.15 }}
                  className="text-white bg-white/5 border border-white/10 px-2.5 py-1 rounded-lg"
                >
                  Be Aware.
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.35, delay: 0.35 }}
                  className="text-brand-red bg-brand-red/10 border border-brand-red/20 px-2.5 py-1 rounded-lg"
                >
                  Be Prepared.
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.35, delay: 0.55 }}
                  className="text-white bg-brand-red px-2.5 py-1 rounded-lg shadow-sm shadow-brand-red/20"
                >
                  Save Lives.
                </motion.span>
              </div>

              <div className="space-y-4">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.65 }}
                  className="text-zinc-300 text-lg md:text-xl font-normal leading-relaxed max-w-2xl"
                >
                  We empower schools, sporting bodies, neighbourhood watches, church ministries, youth programs, and community groups across South Africa through accessible emergency awareness infoshare sessions and interactive lessons.
                </motion.p>
              </div>
            </div>

            {/* Special Callout: "Critical Emergency Bulletin" */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="p-5 bg-brand-red border border-white/10 rounded-2xl shadow-xl shadow-brand-red/10 flex items-start space-x-4 max-w-xl"
            >
              <div className="bg-white/15 p-3 rounded-xl border border-white/20 shrink-0">
                <Siren className="w-6 h-6 text-white animate-pulse" />
              </div>
              <div className="space-y-1.5 flex-1 text-left">
                <h4 className="text-white text-xs font-mono font-extrabold tracking-widest uppercase">
                  Critical Emergency Bulletin
                </h4>
                <p className="text-white text-sm font-medium leading-relaxed italic">
                  “An emergency is a sudden, unexpected, and dangerous situation that poses an immediate threat to life or health.”
                </p>
              </div>
            </motion.div>

            {/* Action CTA Trigger Hub */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
            >
              <button
                id="hero-primary-cta"
                onClick={() => onPageChange('services')}
                className="flex items-center justify-center space-x-2.5 bg-brand-red hover:bg-brand-red/90 text-white font-bold px-7.5 py-4 rounded-xl shadow-lg shadow-brand-red/30 transition-all duration-300 hover:shadow-brand-red/45 hover:-translate-y-0.5 cursor-pointer leading-none"
              >
                <span>Explore Community Services</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                id="hero-secondary-cta"
                onClick={() => onPageChange('contact')}
                className="flex items-center justify-center space-x-2 bg-brand-blue-light hover:bg-brand-blue-snug/15 text-white font-medium px-7.5 py-4 rounded-xl border border-white/15 transition-all duration-300 hover:-translate-y-0.5 whitespace-nowrap cursor-pointer hover:bg-white/5"
              >
                <span>Book Awareness Workshop</span>
              </button>
            </motion.div>

          </div>

          {/* Right Layout Presentation Widget */}
          <div id="hero-graphic-right" className="lg:col-span-5 relative flex flex-col items-center justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="w-full max-w-md bg-zinc-950/30 border border-white/10 rounded-3xl shadow-2xl overflow-hidden relative group"
            >
              {/* Beautiful Community Infoshare Photo */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-900/40 to-transparent z-10" />
                <img
                  src="https://i.postimg.cc/1zSpfBTn/community-cohesion.png"
                  alt="Community Life-saving Coordination and Discussion"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                
                {/* Floating pill for Infoshare audience */}
                <span className="absolute top-4 left-4 z-20 bg-brand-red text-white font-mono text-[10px] font-extrabold uppercase px-3 py-1 rounded-full shadow-md tracking-wider">
                  Community Infoshare
                </span>
              </div>

              {/* Informative text body overlay */}
              <div className="p-6 relative z-10 bg-brand-blue/95 border-t border-white/5 space-y-4">
                <div className="space-y-1">
                  <h3 className="text-white text-base font-bold tracking-tight">
                    Accessible, Equipment-Free Emergency Guidance
                  </h3>
                  <p className="text-zinc-300 text-xs leading-relaxed">
                    Designed to inspire confidence in schools, sporting bodies, neighbourhood watches, and community groups alike.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-1 border-t border-white/10">
                  <div className="bg-white/5 p-2.5 rounded-xl border border-white/10 text-center">
                    <span className="block text-brand-red font-mono font-bold text-xs uppercase">No Equipment</span>
                    <span className="text-[10px] text-zinc-400">Pure Information Share</span>
                  </div>
                  <div className="bg-white/5 p-2.5 rounded-xl border border-white/10 text-center">
                    <span className="block text-emerald-400 font-mono font-bold text-xs uppercase">Interactive</span>
                    <span className="text-[10px] text-zinc-400">Engaging Awareness Talks</span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-[11px] text-zinc-400 font-mono pt-1">
                  <span>Targeted Audiences:</span>
                  <span className="text-white font-semibold flex items-center gap-1">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand-red animate-pulse" />
                    Schools, Sports &amp; Watches
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

    </div>
  );
}
