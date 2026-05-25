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
import ContactForm from './components/ContactForm';
import CommunityImpactSection from './components/CommunityImpactSection';
import CorporateSponsorshipSection from './components/CorporateSponsorshipSection';

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
                        We source, pack, and deliver emergency kit sets. We offer friendly emergency replenishments and informational guides nationwide (T&C Apply) across South Africa.
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
                      Founded by Lead Coordinator Robbie, Lifeline Communi-Care (Pty) Ltd operates with the single baseline aspiration of elevating first-responder efficiency across the general population. We work actively with schools, sporting bodies, neighbourhood watches, and community clinics to coordinate emergency preparedness programs.
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

            {activePage === 'sponsorship' && (
              <div id="sponsorship-page-view">
                <CorporateSponsorshipSection onPageChange={handlePageChange} />
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
