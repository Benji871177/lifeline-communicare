/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Mail, Phone, MapPin, Activity, Heart, ShieldAlert, Info, AlertTriangle } from 'lucide-react';
import { PageId } from '../types';
import { COMPANY_DETAILS } from '../data';

interface FooterProps {
  onPageChange: (page: PageId) => void;
}

export default function Footer({ onPageChange }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { id: 'home', label: 'Company Home' },
    { id: 'about', label: 'About Our Vision' },
    { id: 'services', label: 'Our Services' },
    { id: 'solutions', label: 'Supplies & Kits' },
    { id: 'sponsorship', label: 'Corporate Sponsorship' },
    { id: 'contact', label: 'Contact Helpdesk' },
  ] as const;

  const handleLinkClick = (pageId: PageId) => {
    onPageChange(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="app-footer" className="bg-brand-blue text-white border-t-2 border-brand-red pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-left">
          
          {/* Brand Presentation & Taglines */}
          <div id="footer-branding-column" className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center w-28 h-28 sm:w-36 sm:h-36 bg-white rounded-2xl border-2 border-brand-red overflow-hidden shadow-xl p-1.5 transition-all duration-300">
                <img
                  src="https://i.postimg.cc/hvqPMQ0g/Whats-App-Image-2026-05-24-at-17-09-18.jpg"
                  alt="Lifeline Communi-Care Logo"
                  className="w-full h-full object-contain scale-[1.35] bg-white mix-blend-multiply brightness-[1.5] contrast-[1.7] saturate-[1.45] transition-all duration-300"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            
            <p className="text-zinc-400 text-sm leading-relaxed max-w-sm">
              We empower communities through strategic emergency awareness and friendly emergency preparedness sessions.
            </p>

            <div className="inline-flex items-center space-x-2 bg-brand-red/10 border border-brand-red/30 px-3 py-1.5 rounded-lg text-xs font-mono text-brand-red font-semibold">
              <ShieldAlert className="w-4.5 h-4.5 text-brand-red" />
              <span>{COMPANY_DETAILS.slogan}</span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div id="footer-navigation-column">
            <h3 className="font-display text-sm font-semibold tracking-wider text-zinc-300 uppercase mb-5">
              Service Modules
            </h3>
            <ul className="space-y-2.5 text-sm">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleLinkClick(link.id)}
                    className="text-zinc-400 hover:text-white hover:translate-x-1.5 transition-all duration-200 inline-flex items-center cursor-pointer text-left"
                  >
                    <span className="text-brand-red mr-1.5 font-bold">&rsaquo;</span>
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Scope Bulletins */}
          <div id="footer-services-column">
            <h3 className="font-display text-sm font-semibold tracking-wider text-zinc-300 uppercase mb-5">
              General Capabilities
            </h3>
            <ul className="space-y-2 text-xs text-zinc-400 leading-relaxed">
              <li className="flex items-start gap-1">
                <span className="text-brand-red">&bull;</span>
                <span>Community &amp; Classroom Emergency Infoshare Sessions</span>
              </li>
              <li className="flex items-start gap-1">
                <span className="text-brand-red">&bull;</span>
                <span>Sourcing &amp; Replenishment of First Aid Kit Stations</span>
              </li>
              <li className="flex items-start gap-1">
                <span className="text-brand-red">&bull;</span>
                <span>Sterile Clinical Supplies for Dentists &amp; General Practises</span>
              </li>
              <li className="flex items-start gap-1">
                <span className="text-brand-red">&bull;</span>
                <span>Vocational Talks promoting active Trauma Response EMS paths</span>
              </li>
            </ul>
          </div>

          {/* Core Contacts Robbie Info */}
          <div id="footer-contacts-column" className="space-y-4">
            <h3 className="font-display text-sm font-semibold tracking-wider text-zinc-300">
              Speak with Robbie &amp; his dynamic team directly
            </h3>
            <p className="text-xs text-zinc-400 font-mono italic">
              Speak directly with Lead Officer Robbie:
            </p>

            <div className="space-y-3.5 text-sm text-zinc-300">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-brand-red shrink-0" />
                <div className="flex flex-col">
                  <a href={`tel:${COMPANY_DETAILS.phonePrimary.replace(/\s+/g, '')}`} className="font-mono hover:text-white transition-colors duration-150">
                    {COMPANY_DETAILS.phonePrimary} (Primary)
                  </a>
                  <a href={`tel:${COMPANY_DETAILS.phoneAlternate.replace(/\s+/g, '')}`} className="font-mono text-zinc-400 text-xs hover:text-white transition-colors duration-150">
                    {COMPANY_DETAILS.phoneAlternate} (Alternate)
                  </a>
                </div>
              </div>

              <div id="footer-email-row" className="flex items-start space-x-3">
                <Mail className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                <div className="flex flex-col min-w-0">
                  <a href={`mailto:${COMPANY_DETAILS.emailPrimary}`} className="hover:text-white transition-colors duration-150 font-mono text-xs truncate">
                    {COMPANY_DETAILS.emailPrimary}
                  </a>
                </div>
              </div>

              <div id="footer-location-row" className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                <span className="text-xs text-zinc-400 leading-normal">
                  {COMPANY_DETAILS.region}
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Legal Disclaimers & Compliance Panels */}
        <div id="footer-disclaimer-panel" className="mt-16 pt-8 border-t border-white/10 space-y-6">
          <div className="flex items-center space-x-2 bg-brand-red/10 border border-brand-red/20 rounded-xl px-4 py-2 w-fit">
            <AlertTriangle className="w-4 h-4 text-brand-red shrink-0" />
            <span className="text-[10px] font-bold font-mono text-brand-red uppercase tracking-wider">Company Legal Disclaimer &amp; Regulatory Notice</span>
          </div>

          <div className="p-5 rounded-2xl bg-[#cc0000]/5 border border-[#cc0000]/10 text-left max-w-5xl">
            <p className="text-xs text-white font-bold leading-relaxed">
              <strong className="text-brand-red">DISCLAIMER:</strong> Lifeline Communi-care (Pty) Ltd provides emergency awareness and preparedness information for educational purposes only. The content is not a substitute for professional medical training, advice, diagnosis or treatment. In any emergency, always call <strong className="text-brand-red">112</strong> or <strong className="text-brand-red">021 480 7700 (Toll Free)</strong> immediately.
              <span className="block mt-2">
                Lifeline Communi-care (Pty) Ltd, it's members, facilitators and associates accept no liability for any loss, injury or damage arising from the use of this information. Participation is at your own risk.
              </span>
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-[11px] text-zinc-400 leading-relaxed text-left">
            <div className="space-y-1.5 p-4 rounded-2xl bg-white/[0.02] border border-white/5">
              <span className="font-mono font-bold text-zinc-200 text-xs block border-b border-white/5 pb-1 uppercase tracking-tight">1. Educational Scope</span>
              <p className="text-zinc-400">
                All Lifeline Communi-Care training, classroom awareness, and emergency simulations are informational and designed to promote emergency preparedness. They do not constitute clinical nursing, therapy, or paraphysical medical licensure.
              </p>
            </div>

            <div className="space-y-1.5 p-4 rounded-2xl bg-white/[0.02] border border-white/5">
              <span className="font-mono font-bold text-zinc-200 text-xs block border-b border-white/5 pb-1 uppercase tracking-tight">2. Supply Sourcing T&amp;Cs</span>
              <p className="text-zinc-400">
                First Aid kit materials, medical refills, and dental supplies are secured from approved certified manufacturing partners. Customers must evaluate kit expiries and follow guidelines associated with individual treatment gear.
              </p>
            </div>

            <div className="space-y-1.5 p-4 rounded-2xl bg-white/[0.02] border border-white/5">
              <span className="font-mono font-bold text-zinc-200 text-xs block border-b border-white/5 pb-1 uppercase tracking-tight">3. Not a Live EMS Line</span>
              <p className="text-zinc-400">
                The dispatches and server channels on this website are for consultations and scheduled coordination only. In the event of a live medical emergency in South Africa, please dial national responders immediately (e.g., <strong className="text-brand-red">10111</strong>, <strong className="text-brand-red">10177</strong>, or <strong className="text-brand-red">112</strong>).
              </p>
            </div>

            <div className="space-y-1.5 p-4 rounded-2xl bg-white/[0.02] border border-white/5">
              <span className="font-mono font-bold text-zinc-200 text-xs block border-b border-white/5 pb-1 uppercase tracking-tight">4. POPIA Privacy Statement</span>
              <p className="text-zinc-400">
                In absolute adherence to the Protection of Personal Information Act (POPIA), all contact records, inquiry details, or corporate correspondence are preserved solely to answer requests and process services, and are never shared.
              </p>
            </div>
          </div>
        </div>

        {/* Legal & Compliance Bottom Bar */}
        <div id="footer-compliance-row" className="border-t border-white/5 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-zinc-400">
          <div className="text-center md:text-left space-y-1">
            <p>&copy; {currentYear} {COMPANY_DETAILS.name}. All Rights Reserved.</p>
            <p className="font-mono text-[10px] text-zinc-500">
              Registration No: {COMPANY_DETAILS.registrationNum} &bull; Registered South African Business Listing
            </p>
          </div>
          
          <div id="footer-motto-badge" className="mt-4 md:mt-0 px-4 py-2 bg-brand-blue-light border border-white/5 rounded-xl flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-brand-red animate-pulse" />
            <span className="text-[10px] uppercase font-mono tracking-wider font-semibold text-zinc-300">
              {COMPANY_DETAILS.quote}
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
