/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Award, PenTool, HeartHandshake, Users, ArrowRight } from 'lucide-react';

import { PageId } from '../types';

interface CorporateSponsorshipSectionProps {
  onPageChange?: (pageId: PageId) => void;
}

export default function CorporateSponsorshipSection({ onPageChange }: CorporateSponsorshipSectionProps) {
  const handleSponsorClick = () => {
    (window as any).__corporateSponsorship = true;
    
    const event = new CustomEvent('request-sponsorship', {
      detail: { targetAffiliate: '[Describe your chosen school / sporting body / affiliate here]' }
    });
    window.dispatchEvent(event);

    if (onPageChange) {
      onPageChange('contact');
    }
  };

  const steps = [
    {
      icon: <Users className="w-5 h-5 text-brand-red" />,
      title: "1. Choose Your Beneficiary",
      desc: "Sponsor a school, sports club, youth group, neighbourhood watch, or any community affiliate of your choice."
    },
    {
      icon: <Award className="w-5 h-5 text-brand-red" />,
      title: "2. Lifeline Delivers",
      desc: "Robbie & our experienced team conduct the friendly, low-pressure Emergency Awareness or certified Level 1-3 course."
    },
    {
      icon: <PenTool className="w-5 h-5 text-brand-red" />,
      title: "3. Corporate Branding",
      desc: "Boost your goodwill with custom branded pens, notepads, or pull-up banners of your business on-site."
    }
  ];

  return (
    <section id="corporate-sponsorship-section" className="py-20 bg-gradient-to-b from-slate-50 to-white border-t border-zinc-100 relative overflow-hidden">
      
      {/* Background Graphic Accent */}
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute left-0 top-1/4 w-72 h-72 bg-brand-blue/5 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono font-extrabold text-[#D32F2F] tracking-widest uppercase bg-brand-red/10 px-3.5 py-1.5 rounded-full inline-block">
            Community Partnerships &amp; Sponsorship
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-zinc-900 tracking-tight leading-none">
            Sponsor Emergency Awareness Sessions
          </h2>
          <div className="h-1 w-20 bg-brand-red mx-auto rounded-full" />
          <p className="text-zinc-650 text-base sm:text-lg leading-relaxed">
            Empower your organization to save lives. Align your community support with direct civic upliftment. Corporates can sponsor hands-on training for groups of their choice with customized branding.
          </p>
        </div>

        {/* Dual Split Details & Options Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch mb-16">
          
          {/* Left Column: Visual feature blocks */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div className="space-y-4 text-left">
              <h3 className="font-display font-black text-xl sm:text-2xl text-brand-blue tracking-tight">
                High-Impact Co-Branding Opportunity
              </h3>
              <p className="text-zinc-600 text-sm leading-relaxed">
                By sponsoring local emergency readiness sessions, you ensure critical lifesaving orientation is delivered to communities who need it most. Plus, we integrate your corporate identity right into the learning experience.
              </p>
            </div>

            {/* Feature Cards Grid (Bento Style) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 text-left">
              
              <div className="bg-white border border-zinc-150 p-5 rounded-2xl shadow-sm hover:border-[#D32F2F]/30 transition-all duration-300">
                <span className="p-2.5 bg-brand-red/5 rounded-xl inline-block mb-3.5 text-brand-red">
                  <PenTool className="w-5 h-5" />
                </span>
                <h4 className="font-bold text-sm text-zinc-900 mb-1.5">Branding At Venues</h4>
                <p className="text-xs text-zinc-500 leading-normal">
                  Promote your brand at training hotspots with custom folders, notebooks, pens, and promotional banners.
                </p>
              </div>

              <div className="bg-white border border-zinc-150 p-5 rounded-2xl shadow-sm hover:border-[#38BDF8]/30 transition-all duration-300">
                <span className="p-2.5 bg-brand-blue-light/5 rounded-xl inline-block mb-3.5 text-brand-blue">
                  <HeartHandshake className="w-5 h-5" />
                </span>
                <h4 className="font-bold text-sm text-zinc-900 mb-1.5">Your Choice of Affiliate</h4>
                <p className="text-xs text-zinc-500 leading-normal">
                  Direct the safety investment into sports clubs, community schools, neighborhood watch teams, or non-profits.
                </p>
              </div>

              <div className="bg-white border border-zinc-150 p-5 rounded-2xl shadow-sm hover:border-[#38BDF8]/30 transition-all duration-300">
                <span className="p-2.5 bg-[#10B981]/5 rounded-xl inline-block mb-3.5 text-[#10B981]">
                  <Award className="w-5 h-5" />
                </span>
                <h4 className="font-bold text-sm text-zinc-900 mb-1.5">Accredited Levels 1-3</h4>
                <p className="text-xs text-zinc-500 leading-normal">
                  Optionally offer staff regulatory certifications alongside sponsored community first-aid lectures. (T&amp;Cs apply)
                </p>
              </div>

            </div>

          </div>

          {/* Right Column: Step-by-Step Sponsorship Process */}
          <div className="lg:col-span-5 bg-zinc-900 text-white rounded-3xl p-8 flex flex-col justify-between border border-zinc-800 shadow-xl">
            <div className="space-y-6">
              <div className="text-left space-y-1">
                <span className="font-mono text-[10px] text-brand-accent tracking-widest uppercase font-bold">SIMPLE WORKFLOW</span>
                <h3 className="font-display font-extrabold text-xl text-white">How Sponsoring Works</h3>
              </div>

              <div className="space-y-5 text-left">
                {steps.map((step, idx) => (
                  <div key={idx} className="flex gap-4 items-start bg-white/5 p-4 rounded-xl border border-white/5">
                    <div className="bg-white rounded-lg p-2 shrink-0">{step.icon}</div>
                    <div className="space-y-1">
                      <h4 className="font-bold text-xs text-zinc-100">{step.title}</h4>
                      <p className="text-zinc-400 text-[11px] leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick CTAs */}
            <div className="mt-8 pt-6 border-t border-white/5 space-y-3.5 text-left">
              <p className="text-[10px] text-zinc-500 font-mono tracking-wide leading-normal">
                Interested in supporting South African community resilience? Click below to describe your preferred sponsorship target:
              </p>
              
              <button
                onClick={() => handleSponsorClick()}
                className="w-full bg-brand-red hover:bg-[#B71C1C] text-white font-mono text-xs font-bold py-4 px-5 rounded-xl transition-all duration-300 uppercase flex items-center justify-between group cursor-pointer shadow-lg shadow-brand-red/10 animate-pulse hover:animate-none"
              >
                <span>Describe what you will be sponsoring</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <p className="text-center text-[9px] text-zinc-500 font-mono mt-2 block">
                All sponsorship inquiries are routed directly to <span className="text-brand-accent">info@lifelinecommunicare.co.za</span>
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
