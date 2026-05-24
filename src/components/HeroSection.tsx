/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, Heart, UserRoundCheck, Star } from 'lucide-react';
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
            
            {/* Top Corporate Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 bg-brand-red/10 border border-brand-red/30 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider text-brand-red font-mono uppercase"
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-red opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-red"></span>
              </span>
              <span>Lifeline Communi-Care (Pty) Ltd</span>
            </motion.div>

            {/* Dominant Headline */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-white leading-[1.1]"
              >
                Be Aware. <br />
                <span className="text-brand-red">Be Prepared.</span> <br />
                Save Lives.
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-zinc-300 text-lg md:text-xl font-normal leading-relaxed max-w-2xl"
              >
                We empower industries, healthcare clinics, school academies, and private citizens across South Africa through comprehensive emergency response blueprints, high-tier medical supply chains, and accredited training.
              </motion.p>
            </div>

            {/* Special Callout: "NO MEDICAL BACKGROUND REQUIRED" */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="p-5 bg-brand-blue-light/80 border border-white/10 rounded-2xl shadow-xl flex items-start space-x-4 max-w-xl"
            >
              <div className="bg-brand-red/10 p-3 rounded-xl border border-brand-red/25 shrink-0">
                <ShieldCheck className="w-6 h-6 text-brand-red" />
              </div>
              <div className="space-y-1">
                <h4 className="text-white text-sm font-bold tracking-wide uppercase">
                  No Medical Background Required
                </h4>
                <p className="text-zinc-400 text-xs leading-relaxed">
                  Anyone can learn. Everyone can help. We provide real-world simulation courses where everyday citizens learn step-by-step to preserve lives during immediate trauma threats.
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
                <span>Explore Core Services</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                id="hero-secondary-cta"
                onClick={() => onPageChange('contact')}
                className="flex items-center justify-center space-x-2 bg-brand-blue-light hover:bg-brand-blue-snug/15 text-white font-medium px-7.5 py-4 rounded-xl border border-white/15 transition-all duration-300 hover:-translate-y-0.5 whitespace-nowrap cursor-pointer hover:bg-white/5"
              >
                <span>Request Custom Sourcing</span>
              </button>
            </motion.div>

          </div>

          {/* Right Layout Presentation Widget */}
          <div id="hero-graphic-right" className="lg:col-span-5 relative flex items-center justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="w-full max-w-md relative bg-gradient-to-br from-brand-blue-light to-brand-blue/90 border border-white/10 p-8 rounded-3xl shadow-2xl overflow-hidden text-left"
            >
              {/* Dynamic ECG Scan Graphic Ornament */}
              <div className="absolute inset-0 opacity-15 ecg-glow select-none pointer-events-none">
                <div className="w-full h-full border-t border-brand-red border-dashed top-1/2 absolute" />
              </div>

              {/* Card Title & Heart Indicator */}
              <div className="flex items-center justify-between mb-8 pb-5 border-b border-white/10">
                <div className="flex items-center space-x-3">
                  <div className="w-9 h-9 rounded-xl bg-brand-red/20 border border-brand-red/40 flex items-center justify-center text-brand-red">
                    <Heart className="w-4.5 h-4.5 fill-current animate-pulse" />
                  </div>
                  <div>
                    <span className="block text-white font-bold text-sm">Emergency Readiness</span>
                    <span className="text-[10px] uppercase font-mono tracking-wider text-brand-accent">S.A. Active Response</span>
                  </div>
                </div>
                <span className="px-3 py-1 bg-white/5 rounded-full text-[10px] font-mono text-zinc-300 uppercase shrink-0">
                  Ready Status
                </span>
              </div>

              {/* Core Indicators */}
              <div className="space-y-5.5 relative">
                
                <div className="flex items-start space-x-3.5">
                  <div className="w-7 h-7 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center text-brand-accent mt-0.5 shrink-0">
                    <Star className="w-3.5 h-3.5 fill-current" />
                  </div>
                  <div>
                    <h5 className="text-white text-xs font-bold uppercase tracking-wide">Accredited First Aid Curriculum</h5>
                    <p className="text-zinc-400 text-[11px] leading-relaxed">
                      Syllabuses complying with corporate, regional health, and school safety criteria.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="w-7 h-7 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center text-brand-accent mt-0.5 shrink-0">
                    <UserRoundCheck className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h5 className="text-white text-xs font-bold uppercase tracking-wide">Corporate Auditing &amp; Refills</h5>
                    <p className="text-zinc-400 text-[11px] leading-relaxed">
                      Full inspection oversight to swap out expired components and restock medicine boxes.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="w-7 h-7 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center text-brand-red mt-0.5 shrink-0">
                    <Heart className="w-3.5 h-3.5 fill-current" />
                  </div>
                  <div>
                    <h5 className="text-white text-xs font-bold uppercase tracking-wide">Save Lives Guarantee</h5>
                    <p className="text-zinc-400 text-[11px] leading-relaxed text-left">
                      Equipping businesses and communities to deploy lifesaving compression cycles instantly.
                    </p>
                  </div>
                </div>

              </div>

              {/* Display metric ribbon representing reliability */}
              <div className="relative mt-8 pt-5 border-t border-white/10 flex items-center justify-between text-xs text-zinc-400 font-mono">
                <span>South Africa General Support:</span>
                <span className="text-brand-red font-bold animate-pulse">&bull; 24/7 HELPDESK ACTIVE</span>
              </div>
              
            </motion.div>
          </div>

        </div>
      </div>

    </div>
  );
}
