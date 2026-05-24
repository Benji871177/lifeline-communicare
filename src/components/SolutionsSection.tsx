/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BriefcaseMedical, CheckCircle, PackageOpen, HelpCircle, ShieldAlert, BadgeInfo, PhoneCall, Check } from 'lucide-react';
import { PRODUCTS_DATA, COMPANY_DETAILS } from '../data';

export default function SolutionsSection() {
  const [filter, setFilter] = useState<'all' | 'kits' | 'consumables'>('all');

  const filteredProducts = PRODUCTS_DATA.filter((product) => {
    if (filter === 'all') return true;
    return product.category === filter;
  });

  return (
    <section id="solutions-section" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div id="solutions-header" className="max-w-3xl mx-auto text-center mb-12 space-y-4">
          <span className="text-sm font-bold text-brand-red uppercase tracking-widest font-mono">
            Logistical Infrastructure
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-brand-blue tracking-tight">
            Compliance Kits &amp; Clinical Supplies
          </h2>
          <div className="h-1 w-20 bg-brand-red mx-auto rounded-full" />
          <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
            All medical products, consumables, and emergency units are sourced to meet strict regional safety standards. We offer regular maintenance plans where Robbie's logistics team physically inspects, restocks, and cleans cabinets.
          </p>
        </div>

        {/* Tab Filter buttons */}
        <div id="solutions-tabs" className="flex items-center justify-center space-x-3 mb-12">
          {(['all', 'kits', 'consumables'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all duration-300 uppercase font-mono cursor-pointer ${
                filter === tab
                  ? 'bg-brand-blue text-white shadow-md'
                  : 'bg-zinc-100 text-zinc-500 hover:text-brand-blue hover:bg-zinc-200'
              }`}
            >
              {tab === 'all' ? 'All Solutions' : tab === 'kits' ? 'First Aid Kits' : 'Consumables & Packs'}
            </button>
          ))}
        </div>

        {/* Dynamic Cards Grid */}
        <div id="solutions-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="bg-zinc-50 border border-zinc-100 hover:border-brand-red/30 rounded-3xl p-6.5 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                
                {/* Visual Header Representation */}
                <div className="space-y-6">
                  <div className="relative h-44 w-full bg-brand-blue-light rounded-2xl overflow-hidden flex items-center justify-center border border-white/5 shadow-inner">
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-blue-light/50 to-brand-blue" />
                    
                    {/* Abstract Stylized Shape Placeholder */}
                    <div className="relative flex flex-col items-center justify-center text-center space-y-2 z-10 p-4">
                      <div className="w-11 h-11 bg-brand-red/10 border border-brand-red/20 rounded-full flex items-center justify-center text-brand-red">
                        <BriefcaseMedical className="w-5.5 h-5.5" />
                      </div>
                      <span className="text-[10px] uppercase font-mono tracking-widest text-brand-accent">Certified Sourcing Lot</span>
                    </div>

                    <span className="absolute bottom-3 right-3 text-[10px] font-mono uppercase bg-white/5 text-zinc-300 border border-white/10 px-2.5 py-1 rounded-md">
                      {product.category}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-display font-bold text-lg text-zinc-900 tracking-tight text-left">
                      {product.name}
                    </h3>
                    <p className="text-zinc-600 text-[11px] leading-relaxed mt-2 text-left">
                      {product.description}
                    </p>
                  </div>

                  {/* Core Content specifications */}
                  <div className="space-y-2.5 border-t border-zinc-200/50 pt-4 text-left">
                    <h4 className="text-[10px] uppercase font-mono tracking-wider font-bold text-zinc-400">Box Contents Include:</h4>
                    <ul className="space-y-1.5 text-xs text-zinc-600">
                      {product.specifications.slice(0, 3).map((spec, sIdx) => (
                        <li key={sIdx} className="flex items-start gap-2 text-left">
                          <Check className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Badges */}
                <div className="flex flex-col gap-3 mt-6 pt-4 border-t border-zinc-200/50">
                  <div className="flex flex-wrap gap-1.5 justify-start">
                    {product.highlights.map((hlt, hIdx) => (
                      <span key={hIdx} className="text-[9px] font-mono uppercase bg-brand-red-light text-brand-red px-2 py-0.5 rounded-full font-bold">
                        {hlt}
                      </span>
                    ))}
                  </div>

                  <a
                    href="#contact-form-hub"
                    onClick={() => {
                      const cForm = document.getElementById('contact-form-anchor');
                      if (cForm) {
                        cForm.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="w-full text-center py-2 bg-brand-blue hover:bg-brand-blue-light text-white text-xs font-bold rounded-lg transition-colors duration-150 cursor-pointer text-left"
                  >
                    Request Sourcing Quote
                  </a>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Regulatory Banner Info Block */}
        <div id="solutions-compliance-info" className="mt-16 bg-brand-blue-light/15 border border-brand-blue-light/20 p-8 rounded-3xl text-left flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center space-x-2 bg-brand-red/10 border border-brand-red/30 px-3 py-1 rounded-md text-[10px] font-mono text-brand-red font-bold uppercase">
              <ShieldAlert className="w-3.5 h-3.5" />
              <span>South Africa Safety Regulatory Compliance</span>
            </div>
            
            <h3 className="font-display font-extrabold text-white text-lg tracking-tight">
              Workplace Safety Regulation Compliance Audits
            </h3>
            
            <p className="text-zinc-600 text-xs leading-relaxed">
              Did you know that keeping expired elements in a corporate First Aid box violates national safety criteria? We provide structured replacement auditing solutions. Robbie's team will physically visit your South African offices, catalog current stock, remove expired materials, and supply authenticated, sterile components.
            </p>
          </div>

          <div className="shrink-0 space-y-3.5 w-full md:w-auto">
            <div className="p-4.5 bg-white border border-zinc-150 rounded-2xl shadow-sm text-center">
              <span className="block text-[10px] font-mono uppercase tracking-wider text-zinc-400 mb-1">Direct Procurement</span>
              <a
                href={`tel:${COMPANY_DETAILS.phonePrimary.replace(/\s+/g, '')}`}
                className="inline-flex items-center space-x-2.5 text-brand-red hover:text-brand-red/85 font-mono text-xs font-extrabold"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Call Lead Officer: {COMPANY_DETAILS.phonePrimary}</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
