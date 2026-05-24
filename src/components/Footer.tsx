/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Mail, Phone, MapPin, Activity, Heart, ShieldAlert } from 'lucide-react';
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
    { id: 'emergency-prep', label: 'Emergency Guides' },
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
              <div className="flex items-center justify-center w-14 h-14 bg-white rounded-xl border border-brand-red overflow-hidden shadow-sm p-1">
                <img
                  src="https://i.postimg.cc/hvqPMQ0g/Whats-App-Image-2026-05-24-at-17-09-18.jpg"
                  alt="Lifeline Communi-Care Logo"
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="font-display font-bold text-lg tracking-tight">
                LIFELINE <span className="text-brand-red">COMMUNI-CARE</span>
              </span>
            </div>
            
            <p className="text-zinc-400 text-sm leading-relaxed max-w-sm">
              We empower communities through strategic emergency awareness and compliance preparedness programmes. No medical background required.
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
                <span>Formal Workplace First Aid Training Accreditations</span>
              </li>
              <li className="flex items-start gap-1">
                <span className="text-brand-red">&bull;</span>
                <span>Replenishment &amp; Auditing of Regulatory Safety Cabinets</span>
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
            <h3 className="font-display text-sm font-semibold tracking-wider text-zinc-300 uppercase">
              Direct Contact
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
                  <a href={`mailto:${COMPANY_DETAILS.emailAlternate}`} className="hover:text-white transition-colors duration-150 font-mono text-[11px] text-zinc-400 truncate">
                    {COMPANY_DETAILS.emailAlternate}
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

        {/* Legal & Compliance Bottom Bar */}
        <div id="footer-compliance-row" className="border-t border-white/5 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-zinc-400">
          <div className="text-center md:text-left space-y-1">
            <p>&copy; {currentYear} {COMPANY_DETAILS.name}. All Rights Reserved.</p>
            <p className="font-mono text-[10px] text-zinc-500">
              Registration No: {COMPANY_DETAILS.registrationNum} &bull; South Africa Business Directory Compliance
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
