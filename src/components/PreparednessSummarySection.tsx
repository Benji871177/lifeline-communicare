/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Heart, Target, Flag, ArrowRight, ShieldAlert, CheckCircle } from 'lucide-react';
import { PageId } from '../types';

interface PreparednessSummarySectionProps {
  onPageChange: (page: PageId) => void;
}

export default function PreparednessSummarySection({ onPageChange }: PreparednessSummarySectionProps) {
  return (
    <section id="preparedness-summary-block" className="py-20 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden border-t border-zinc-100">
      
      {/* Visual background details */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-brand-red/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-blue/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Block: Strategic Copy & Intimidating Visual */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            <div className="flex items-center space-x-2 bg-brand-red/10 border border-brand-red/15 rounded-full px-4 py-1 w-fit">
              <ShieldAlert className="w-3.5 h-3.5 text-brand-red shrink-0" />
              <span className="text-[10px] font-bold font-mono text-brand-red uppercase tracking-wider">
                Emergency Readiness Campaign
              </span>
            </div>

            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight leading-tighter uppercase">
              KNOWLEDGE TODAY, CONFIDENCE TOMORROW. <br/>
              <span className="text-brand-red">PREPARED FOR ANYTHING.</span>
            </h2>

            <p className="text-sm sm:text-base text-zinc-650 leading-relaxed">
              At Lifeline Communi-Care, we believe that an active community is a resilient one. Our mission goes beyond classroom certification—we strive to plant practical muscle-memory reflexes across South African schools, neighborhood coalitions, and local congregations.
            </p>

            {/* Quick Preview of the Goals */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start space-x-2.5">
                <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center mt-0.5 shrink-0">
                  <CheckCircle className="w-3 h-3 text-emerald-600" />
                </div>
                <p className="text-xs text-zinc-600">
                  Increase community-wide emergency coordination.
                </p>
              </div>

              <div className="flex items-start space-x-2.5">
                <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center mt-0.5 shrink-0">
                  <CheckCircle className="w-3 h-3 text-emerald-600" />
                </div>
                <p className="text-xs text-zinc-600">
                  Equip citizens with simple, intuitive first aid.
                </p>
              </div>

              <div className="flex items-start space-x-2.5">
                <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center mt-0.5 shrink-0">
                  <CheckCircle className="w-3 h-3 text-emerald-600" />
                </div>
                <p className="text-xs text-zinc-600">
                  Promote decisive, quick action in panic states.
                </p>
              </div>

              <div className="flex items-start space-x-2.5">
                <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center mt-0.5 shrink-0">
                  <CheckCircle className="w-3 h-3 text-emerald-600" />
                </div>
                <p className="text-xs text-zinc-600">
                  Democratize safety knowledge for all backgrounds.
                </p>
              </div>
            </div>

            {/* Mission Snippet Block */}
            <div className="p-5 border-l-4 border-brand-red bg-zinc-50 rounded-r-2xl space-y-1">
              <span className="font-mono text-[10px] font-bold text-zinc-400 uppercase tracking-widest block">
                Our Baseline Mandate
              </span>
              <p className="text-zinc-700 italic text-xs leading-relaxed">
                "To empower individuals and communities with life-saving knowledge and practical skills, creating a culture of awareness, preparedness and response that saves lives."
              </p>
            </div>

          </div>

          {/* Right Block: Teaser Card (Builds Curiosity to click) */}
          <div className="lg:col-span-5">
            <motion.div 
              id="teaser-curiosity-card"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="bg-brand-blue border border-white/10 rounded-3xl p-6 sm:p-8 text-white text-left space-y-6 shadow-xl relative overflow-hidden"
            >
              {/* Slashed Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-red/10 via-transparent to-brand-blue/30 opacity-60 pointer-events-none" />
              
              <div className="space-y-2 relative z-10">
                <span className="text-[10px] bg-brand-red/20 border border-brand-red/30 px-3 py-1 rounded text-brand-accent font-mono uppercase tracking-wider inline-block">
                  No Background Required
                </span>
                <h3 className="font-display font-extrabold text-xl tracking-tight leading-tighter uppercase">
                  Do you know the life-saving protocols?
                </h3>
                <p className="text-zinc-300 text-xs leading-relaxed">
                  Our customized training solutions teach critical techniques. No medical history or professional certification path is necessary. We bring the training directly to your regional headquarters.
                </p>
              </div>

              {/* Curiosity Points */}
              <div className="space-y-3 bg-white/[0.04] p-4 rounded-xl border border-white/5 relative z-10 text-[11px] leading-relaxed text-zinc-350">
                <p className="m-0 font-bold text-zinc-200">What you will uncover on our portal:</p>
                <ul className="list-disc pl-4 space-y-1 text-zinc-400">
                  <li>Our 5 foundational values (Care, Integrity, Excellence, and more)</li>
                  <li>Official contact coordinates &amp; Cape Town regional team details</li>
                  <li>Legal emergency disclaimers &amp; paraphysical response rules</li>
                  <li>How to book a volunteer info-share seminar</li>
                </ul>
              </div>

              {/* Call to action button */}
              <div className="relative z-10 pt-2">
                <button
                  type="button"
                  onClick={() => onPageChange('preparedness')}
                  className="w-full bg-brand-red hover:bg-brand-red/95 text-white font-bold font-mono text-xs uppercase tracking-wider py-4 rounded-xl flex items-center justify-center space-x-2.5 transition-all duration-300 hover:shadow-lg shadow-brand-red/10 cursor-pointer"
                >
                  <span>Read Our Mission, Vision &amp; Values</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
