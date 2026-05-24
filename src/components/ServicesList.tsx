/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GraduationCap, BriefcaseMedical, PackageCheck, UsersRound, Check, X, PhoneCall, ArrowRight } from 'lucide-react';
import { SERVICES_DATA, COMPANY_DETAILS } from '../data';
import { ServiceItem } from '../types';

const iconMap: Record<string, React.ComponentType<any>> = {
  GraduationCap,
  BriefcaseMedical,
  PackageCheck,
  UsersRound,
};

const getNumberColorClass = (id: string) => {
  switch (id) {
    case 'first-aid-training':
      return 'from-red-500 via-orange-500 to-amber-500';
    case 'kits-supply-maintenance':
      return 'from-emerald-500 via-teal-500 to-cyan-500';
    case 'medical-consumables':
      return 'from-blue-600 via-indigo-500 to-sky-400';
    case 'ems-career-talks':
      return 'from-purple-600 via-pink-500 to-rose-400';
    default:
      return 'from-brand-red to-rose-500';
  }
};

export default function ServicesList() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const handleQuoteDispatch = (service: ServiceItem, e?: React.MouseEvent) => {
    if (e) {
      e.stopPropagation(); // Avoid double click triggers
    }
    const event = new CustomEvent('request-quote', {
      detail: { serviceId: service.id, serviceTitle: service.title }
    });
    window.dispatchEvent(event);
    setSelectedService(null);
  };

  return (
    <section id="services-list-section" className="py-20 bg-zinc-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div id="services-header" className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <span className="text-sm font-bold text-brand-red uppercase tracking-widest font-mono">
            Extracted Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-brand-blue tracking-tight">
            Our Certified Emergency Portfolios
          </h2>
          <div className="h-1 w-20 bg-brand-red mx-auto rounded-full" />
          <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
            Directly sourced and managed by Lead Representative Robbie. Every capability complies with corporate, school, and clinical guidelines across South Africa. Click on any card below to focus full details and benefits.
          </p>
        </div>

        {/* 4 Core Services Grid */}
        <div id="services-grid" className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {SERVICES_DATA.map((service, index) => {
            const IconComp = iconMap[service.iconName] || BriefcaseMedical;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => setSelectedService(service)}
                className="bg-white border border-zinc-200/60 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:border-brand-red/30 cursor-pointer group flex flex-col justify-between"
              >
                <div className="space-y-6">
                  {/* Card Header Label vs Large Serial Index */}
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 rounded-2xl bg-brand-red-light flex items-center justify-center text-brand-red group-hover:scale-105 transition-transform duration-300">
                      <IconComp className="w-7.5 h-7.5" />
                    </div>
                    <span className={`font-mono text-5xl font-extrabold bg-gradient-to-r ${getNumberColorClass(service.id)} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300 select-none`}>
                      {service.numberLabel}
                    </span>
                  </div>

                  {/* Title & Slogan */}
                  <div className="space-y-2">
                    <h3 className="font-display font-bold text-xl text-zinc-900 tracking-tight group-hover:text-brand-red transition-colors duration-200 text-left">
                      {service.title}
                    </h3>
                    <p className="text-zinc-500 text-xs leading-normal">
                      {service.shortDescription}
                    </p>
                  </div>

                  {/* Bullet Highlights */}
                  <ul className="space-y-2 text-xs text-zinc-600 border-t border-zinc-100 pt-5">
                    {service.benefits.slice(0, 2).map((b, i) => (
                      <li key={i} className="flex items-start gap-2 text-left">
                        <Check className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer interactive actions */}
                <div className="flex items-center justify-between mt-8 pt-4 border-t border-zinc-100">
                  <div className="flex items-center space-x-2 text-xs font-semibold text-zinc-500 group-hover:text-zinc-800 transition-colors duration-200">
                    <span>Analyze Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>

                  <button
                    onClick={(e) => handleQuoteDispatch(service, e)}
                    className="bg-brand-red/10 group-hover:bg-brand-red hover:!bg-brand-red/90 text-brand-red group-hover:text-white px-4.5 py-2.5 rounded-xl text-xs font-bold transition-all duration-300 cursor-pointer"
                  >
                    Request a Quote &rarr;
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Dynamic Detail Overlay Focus Center */}
        <AnimatePresence>
          {selectedService && (
            <div id="service-overlay-modal" className="relative z-[100] cursor-default">
              
              {/* Darkened blur divider background */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedService(null)}
                className="fixed inset-0 bg-brand-blue/80 backdrop-blur-md"
              />

              <div className="fixed inset-0 z-50 overflow-y-auto px-4 py-12 flex items-center justify-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 30 }}
                  transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                  className="bg-white rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl border border-zinc-200 text-left relative"
                >
                  
                  {/* Modal Header Bar with Background Theme */}
                  <div className="p-6 bg-brand-blue text-white flex items-center justify-between relative">
                    <div className="flex items-center space-x-3.5">
                      <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-brand-accent">
                        {React.createElement(iconMap[selectedService.iconName] || BriefcaseMedical, { className: "w-5.5 h-5.5" })}
                      </div>
                      <div>
                        <span className="block text-[10px] font-mono uppercase tracking-wider text-brand-accent">Service Profile {selectedService.numberLabel}</span>
                        <h4 className="font-display font-semibold text-white tracking-tight">{selectedService.title}</h4>
                      </div>
                    </div>
                    
                    {/* Compact X close buttons */}
                    <button
                      id="close-service-modal"
                      onClick={() => setSelectedService(null)}
                      className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white transition-colors duration-150 cursor-pointer"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Modal Body Content */}
                  <div className="p-8 space-y-6">
                    <div>
                      <h5 className="text-[11px] font-mono tracking-wider uppercase text-zinc-400 mb-2">Scope of Program</h5>
                      <p className="text-zinc-600 text-sm leading-relaxed text-left">
                        {selectedService.fullDescription}
                      </p>
                    </div>

                    <div className="space-y-3.5 border-t border-zinc-100 pt-5 text-left">
                      <h5 className="text-[11px] font-mono tracking-wider uppercase text-zinc-400 mb-1">Key Delivery Specifications</h5>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        {selectedService.benefits.map((benefit, bIdx) => (
                          <div key={bIdx} className="flex items-start text-xs text-zinc-700 bg-zinc-50 border border-zinc-100 p-3 rounded-xl gap-2">
                            <Check className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                            <span>{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Quick Interactive Quote Request & Form triggers */}
                    <div className="bg-brand-red/5 border border-brand-red/10 rounded-2xl p-5 mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                      <div className="space-y-1 text-center sm:text-left">
                        <span className="block text-zinc-800 text-sm font-bold">Request immediate enrollment &amp; quote</span>
                        <p className="text-zinc-500 text-[11px] leading-normal font-mono">Instantly configure proposal options in the contact desk form</p>
                      </div>
                      
                      <div className="flex items-center gap-2.5">
                        <button
                          onClick={() => handleQuoteDispatch(selectedService)}
                          className="bg-brand-red hover:bg-brand-red/90 text-white font-bold font-mono text-xs px-5 py-3 rounded-xl transition-all duration-150 hover:shadow-lg uppercase cursor-pointer"
                        >
                          Request a Quote &rarr;
                        </button>
                      </div>
                    </div>
                  </div>

                </motion.div>
              </div>

            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
