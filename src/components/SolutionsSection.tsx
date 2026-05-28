/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BriefcaseMedical, CheckCircle, PackageOpen, HelpCircle, ShieldAlert, BadgeInfo, PhoneCall, Check } from 'lucide-react';
import { PRODUCTS_DATA, COMPANY_DETAILS } from '../data';
import { PageId } from '../types';

interface SolutionsSectionProps {
  onPageChange?: (pageId: PageId) => void;
}

export default function SolutionsSection({ onPageChange }: SolutionsSectionProps) {
  const [filter, setFilter] = useState<'all' | 'kits' | 'consumables'>('all');

  const filteredProducts = PRODUCTS_DATA.filter((product) => {
    if (filter === 'all') return true;
    return product.category === filter;
  });

  const handleInquire = (productName: string, category: string) => {
    (window as any).__selectedProduct = { productName, category };

    const event = new CustomEvent('request-supplies', {
      detail: { productName, category }
    });
    window.dispatchEvent(event);

    const cForm = document.getElementById('contact-form-anchor');
    if (cForm) {
      cForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setTimeout(() => {
        const nameInput = document.getElementById('fullName');
        if (nameInput) nameInput.focus();
      }, 800);
    } else if (onPageChange) {
      onPageChange('contact');
    }
  };

  return (
    <section id="solutions-section" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div id="solutions-header" className="max-w-3xl mx-auto text-center mb-12 space-y-4">
          <span className="text-sm font-bold text-brand-red uppercase tracking-widest font-mono">
            Supplies &amp; Sourcing
          </span>
          <h2 id="solutions-main-title" className="text-3xl sm:text-4xl font-display font-extrabold text-brand-blue tracking-tight">
            First Aid Kits &amp; Essential Sourcing
          </h2>
          <div className="h-1 w-20 bg-brand-red mx-auto rounded-full" />
          <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
            We supply lightweight grab-and-go packs, simple community kits, and premium restock packs tailored for doctors, nurses, schools, local churches, and clinics to make clinical sourcing fast, sterile, and worry-free.
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
              {tab === 'all' ? 'All Items' : tab === 'kits' ? 'Grab-and-Go Bags & Kits' : 'Refills & Supplies'}
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
                      <span className="text-[10px] uppercase font-mono tracking-widest text-brand-accent">
                        {product.id === 'sterile-consumables-pack' ? 'Clinical Grade Refills' : 'Ready for Communities'}
                      </span>
                    </div>

                    <span className="absolute bottom-3 right-3 text-[10px] font-mono uppercase bg-white/5 text-zinc-300 border border-white/10 px-2.5 py-1 rounded-md">
                      {product.id === 'sterile-consumables-pack' ? 'Practitioner Refill' : product.category === 'kits' ? 'Grab-and-Go Bag' : product.category}
                    </span>
                    {product.id === 'sterile-consumables-pack' && (
                      <span className="absolute top-3 right-3 text-[9px] font-bold font-mono tracking-wider bg-brand-red text-white border border-brand-red/50 px-2.5 py-0.5 rounded-full uppercase shadow">
                        For Doctors &amp; Nurses
                      </span>
                    )}
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

                {/* Bottom Badges & Action */}
                <div className="flex flex-col gap-3 mt-6 pt-4 border-t border-zinc-200/50">
                  {product.highlights && product.highlights.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 justify-start">
                      {product.highlights.map((hlt, hIdx) => (
                        <span key={hIdx} className="text-[9px] font-mono uppercase bg-brand-red-light text-brand-red px-2 py-0.5 rounded-full font-bold">
                          {hlt}
                        </span>
                      ))}
                    </div>
                  )}

                  <button
                    type="button"
                    onClick={() => handleInquire(product.name, product.category)}
                    className="w-full text-center py-2 bg-brand-blue hover:bg-brand-blue-light text-white text-xs font-bold rounded-lg transition-colors duration-150 cursor-pointer block"
                  >
                    Inquire About Supplies
                  </button>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Dynamic Sourcing Disclaimer */}
        <div id="solutions-product-disclaimer" className="mt-8 text-center max-w-2xl mx-auto">
          <p className="text-[10px] text-zinc-400 font-mono leading-relaxed">
            * <strong className="text-zinc-500 font-bold uppercase">Product &amp; Medical Sourcing Disclaimer:</strong> Lifeline Communi-Care (Pty) Ltd is an educational provider and certified distributor. All first aid bag contents, dental clinical consumables, and sterile emergency supplies are sourced exclusively from SABS/ISO accredited medical manufacturing partners. Specific item layouts and brand packaging may evolve slightly depending on direct factory restocking cycles.
          </p>
        </div>

        {/* Regulatory Banner Info Block */}
        <div id="solutions-compliance-info" className="mt-20 bg-gradient-to-br from-zinc-50 via-white to-zinc-50 border-2 border-brand-red/40 p-8 sm:p-10 rounded-3xl text-left shadow-lg relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Accent decoration for eye-catching appearance */}
          <div className="absolute top-0 left-0 w-2 h-full bg-brand-red" />
          
          <div className="space-y-4 max-w-3xl pl-2">
            <div className="inline-flex items-center space-x-2 bg-brand-red/10 border border-brand-red/30 px-3.5 py-1.5 rounded-full text-[10px] font-mono text-brand-red font-bold uppercase tracking-wider">
              <ShieldAlert className="w-4 h-4 text-brand-red animate-pulse animate-duration-1000" />
              <span>South Africa Emergency Awareness Support</span>
            </div>
            
            <h3 className="font-display font-extrabold text-brand-blue text-xl sm:text-2xl tracking-tight leading-tight">
              First Aid Kit Replenishment &amp; Support
            </h3>
            
            <p className="text-zinc-700 text-xs sm:text-sm leading-relaxed">
              <strong className="text-brand-red font-extrabold">Did you know that keeping expired elements in educational or community First Aid boxes makes them unsafe to use?</strong> We provide friendly restocking suggestions and supply support. Robbie's team can supply clean, fresh materials to keep your kits up-to-date and ready for your school, church, or organization.
            </p>
          </div>

          <div className="shrink-0 w-full md:w-auto">
            <div className="p-5.5 bg-white border border-brand-red/20 rounded-2xl shadow-sm text-center">
              <span className="block text-[10px] font-mono uppercase tracking-widest text-zinc-500 mb-2 font-bold">Inquire Directly</span>
              <a
                href={`tel:${COMPANY_DETAILS.phonePrimary.replace(/\s+/g, '')}`}
                className="inline-flex items-center space-x-2 bg-brand-red hover:bg-brand-red/90 text-white px-5 py-3 rounded-xl shadow-md transition-all duration-150 font-mono text-xs font-extrabold"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Call Robbie: {COMPANY_DETAILS.phonePrimary}</span>
              </a>
              <span className="block text-[10px] text-zinc-400 mt-2 font-semibold">Fast, helpful response</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
