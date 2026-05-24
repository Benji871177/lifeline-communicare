/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeftRight, Heart, Sparkles, Phone, ShieldCheck, Mail, Siren, HelpCircle, ArrowRight } from 'lucide-react';

import { PageId } from './types';
import { COMPANY_DETAILS, CORE_PILLARS } from './data';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesList from './components/ServicesList';
import StatCounter from './components/StatCounter';
import SolutionsSection from './components/SolutionsSection';
import EmergencyGuide from './components/EmergencyGuide';
import ContactForm from './components/ContactForm';
import CommunityImpactSection from './components/CommunityImpactSection';

export default function App() {
  const [activePage, setActivePage] = useState<PageId>('home');

  const handlePageChange = (pageId: PageId) => {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div id="application-container" className="flex flex-col min-h-screen bg-slate-50 text-slate-800">
      
      {/* 1. Header Navigation Component */}
      <Navbar activePage={activePage} onPageChange={handlePageChange} />

      {/* 2. Main Module Page Switch Core */}
      <main id="primary-main-wrapper" className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={activePage}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
          >
            {activePage === 'home' && (
              <div id="home-view-group" className="space-y-0">
                {/* Full Premium Hero Introduction */}
                <HeroSection onPageChange={handlePageChange} />
                
                {/* Animated Experience Stat Counters */}
                <StatCounter />

                {/* Compact Embedded Spliced Emergency Banner */}
                <section id="fast-awareness-banner" className="bg-brand-red text-white py-14 overflow-hidden relative">
                  <div className="absolute inset-0 opacity-10">
                    <div className="w-full h-full bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]" />
                  </div>
                  
                  <div className="max-w-5xl mx-auto px-4 text-center space-y-6 relative z-10">
                    <div className="flex items-center justify-center space-x-2.5">
                      <Siren className="w-8 h-8 text-white fill-white/10 animate-pulse shrink-0" />
                      <span className="font-mono text-xs font-extrabold uppercase tracking-widest text-brand-red-light bg-white/15 px-3 py-1 rounded-full">
                        Critical Safety Bulletin
                      </span>
                    </div>

                    <h3 className="font-display font-extrabold text-2xl sm:text-3xl tracking-tight leading-snug">
                      “An emergency is a sudden, unexpected, and dangerous situation that poses an immediate threat to life or health.”
                    </h3>

                    <p className="text-zinc-100 text-sm max-w-2xl mx-auto leading-relaxed">
                      Our mission is to spread life-preserving knowledge throughout all school classrooms and corporate teams. In South Africa, quick and correct reaction during the golden hour reduces tragedy.
                    </p>

                    <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-4 text-xs font-mono">
                      <div className="bg-white/10 border border-white/20 p-3 rounded-xl flex items-center gap-2">
                        <ShieldCheck className="w-5 h-5 text-brand-accent shrink-0" />
                        <span className="font-bold">No Medical Background Required</span>
                      </div>
                      
                      <button
                        onClick={() => handlePageChange('emergency-prep')}
                        className="bg-white hover:bg-zinc-100 text-brand-red font-bold px-5.5 py-3 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg cursor-pointer inline-flex items-center gap-2"
                      >
                        <span>Access Emergency Guideline</span>
                        <ArrowRight className="w-4.5 h-4.5" />
                      </button>
                    </div>
                  </div>
                </section>

                {/* Focus and Reason: Community Targeted Audiences */}
                <CommunityImpactSection />

                {/* Dynamic Inline Services Highlights */}
                <ServicesList />

                {/* Sourcing Prompt Panel */}
                <section className="bg-zinc-900 text-white py-16 relative">
                  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
                    
                    <div className="space-y-3 max-w-2xl text-left">
                      <span className="text-xs font-mono font-bold text-brand-accent uppercase tracking-widest block">
                        Sourcing &amp; Spliced Supply Support
                      </span>
                      <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
                        Are your first aid stations and kit boxes fully prepared?
                      </h3>
                      <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                        We source, pack, and deliver emergency kit sets. We offer friendly safety replenishments and informational guides across Gauteng and broader South African regions.
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3.5 w-full sm:w-auto shrink-0">
                      <button
                        onClick={() => handlePageChange('solutions')}
                        className="bg-brand-red hover:bg-brand-red/90 text-white font-bold text-xs font-mono uppercase px-6 py-4.5 rounded-xl transition-all duration-300 hover:-translate-y-0.5 shadow-md shadow-brand-red/10 cursor-pointer"
                      >
                        Analyze Sourcing Options
                      </button>
                      
                      <button
                        onClick={() => handlePageChange('contact')}
                        className="bg-white/10 hover:bg-white/15 text-white font-medium text-xs font-mono uppercase px-6 py-4.5 rounded-xl transition-all duration-300 border border-white/15 cursor-pointer"
                      >
                        Submit Request
                      </button>
                    </div>

                  </div>
                </section>

                {/* Embed direct contact form section */}
                <ContactForm />
              </div>
            )}

            {/* Render targeted pages when customized navigation filters are on */}
            {activePage === 'about' && (
              <div id="about-page-view">
                <AboutSection />
                
                {/* Values detailed callout section */}
                <section className="bg-brand-blue-light/10 py-16 border-t border-zinc-100">
                  <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
                    <Heart className="w-12 h-12 text-brand-red fill-brand-red/10 animate-pulse mx-auto" />
                    <h3 className="font-display font-extrabold text-2xl text-brand-blue tracking-tight">
                      South African Civic Dedication
                    </h3>
                    <p className="text-zinc-600 text-sm leading-relaxed">
                      Founded by Lead Coordinator Robbie, Lifeline Communi-Care (Pty) Ltd operates with the single baseline aspiration of elevating first-responder efficiency across the general population. We work actively with schools, engineering centers, private health practices, and companies to coordinate emergency preparedness programs.
                    </p>
                    
                    <div className="pt-2 text-center">
                      <span className="font-mono text-zinc-400 text-xs uppercase tracking-wider block">Est. 2026 &bull; Registered Company No: {COMPANY_DETAILS.registrationNum}</span>
                    </div>
                  </div>
                </section>
              </div>
            )}

            {activePage === 'services' && (
              <div id="services-page-view">
                <ServicesList />
              </div>
            )}

            {activePage === 'solutions' && (
              <div id="solutions-page-view">
                <SolutionsSection onPageChange={handlePageChange} />
              </div>
            )}

            {activePage === 'emergency-prep' && (
              <div id="prep-page-view">
                <EmergencyGuide />
              </div>
            )}

            {activePage === 'contact' && (
              <div id="contact-page-view">
                <ContactForm />
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* 3. Footer Section Component */}
      <Footer onPageChange={handlePageChange} />

    </div>
  );
}
