/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AlertTriangle, Activity, Heart, ArrowRightCircle, ShieldAlert } from 'lucide-react';
import { EMERGENCY_GUIDES, COMPANY_DETAILS } from '../data';

export default function EmergencyGuide() {
  const [selectedGuideId, setSelectedGuideId] = useState(EMERGENCY_GUIDES[0].id);

  const activeGuide = EMERGENCY_GUIDES.find((g) => g.id === selectedGuideId) || EMERGENCY_GUIDES[0];

  return (
    <section id="emergency-prep-section" className="py-20 bg-zinc-50 border-t border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div id="prep-header" className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <span className="text-sm font-bold text-brand-red uppercase tracking-widest font-mono">
            Interactive First Responder Toolkit
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-brand-blue tracking-tight">
            Emergency Awareness &amp; Preparedness Blueprint
          </h2>
          <div className="h-1 w-20 bg-brand-red mx-auto rounded-full" />
          
          {/* Critical Citation Badge */}
          <div className="inline-flex items-center space-x-2 bg-brand-red/10 border border-brand-red/20 px-4 py-2 rounded-2xl text-xs text-brand-red font-mono font-bold uppercase mt-2">
            <AlertTriangle className="w-4 h-4 text-brand-red animate-bounce shrink-0" />
            <span>CRITICAL EMERGENCY BULLETIN</span>
          </div>

          <p className="text-zinc-600 text-sm leading-relaxed max-w-2xl mx-auto pt-3">
            Our priority is to spread life-preserving knowledge throughout school classrooms, local churches, and neighborhood teams. Below is an interactive snapshot of three direct step-by-step responder workflows taught within our community-driven emergency awareness sessions.
          </p>
        </div>

        {/* Dynamic Selector Layout Grid */}
        <div id="prep-interaction-body" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-left">
          
          {/* Left Column - List Selector Tabs */}
          <div id="guide-sidebar" className="lg:col-span-4 space-y-3.5">
            <h3 className="text-zinc-400 font-mono text-[10px] uppercase tracking-wider font-extrabold mb-2 text-left">
              Select Response Procedure
            </h3>
            
            {EMERGENCY_GUIDES.map((guide) => {
              const isSelected = guide.id === selectedGuideId;
              return (
                <button
                  key={guide.id}
                  id={`guide-tab-${guide.id}`}
                  onClick={() => setSelectedGuideId(guide.id)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 flex items-center justify-between cursor-pointer group hover:scale-[1.01] ${
                    isSelected
                      ? 'bg-brand-blue text-white border-brand-blue shadow-lg'
                      : 'bg-white text-zinc-700 border-zinc-200/60 hover:border-brand-red/30'
                  }`}
                >
                  <div className="space-y-1">
                    <span className={`block text-[10px] font-mono uppercase tracking-wider ${isSelected ? 'text-brand-accent' : 'text-zinc-400'}`}>
                      Active Routine
                    </span>
                    <span className="block font-display font-bold text-sm tracking-tight text-left">
                      {guide.title}
                    </span>
                  </div>

                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ml-3 transition-colors duration-200 ${
                    isSelected ? 'bg-brand-red text-white' : 'bg-zinc-100 text-zinc-400 group-hover:bg-brand-red-light group-hover:text-brand-red'
                  }`}>
                    <Activity className={`w-4 h-4 ${isSelected ? 'animate-pulse' : ''}`} />
                  </div>
                </button>
              );
            })}

            {/* Quick callout warning representing physical document */}
            <div className="p-5.5 bg-brand-red-light border border-brand-red/15 rounded-2xl space-y-2 text-zinc-900">
              <span className="text-[10px] font-mono uppercase text-brand-red font-bold flex items-center gap-1.5 text-left">
                <ShieldAlert className="w-4 h-4 shrink-0" />
                <span>Immediate Danger Note</span>
              </span>
              <p className="text-[11px] leading-relaxed text-zinc-700 text-left">
                These summaries are for general civic awareness. For personalized emergency awareness presentations, interactive community infoshare workshops, and emergency readiness tips within your home, school, church, or organization, feel free to schedule our community sessions.
              </p>
            </div>
          </div>

          {/* Right Column - Steps Dynamic Content Display Card */}
          <div id="guide-detail-display" className="lg:col-span-8 bg-white border border-zinc-200/60 rounded-3xl p-8 lg:p-10 shadow-sm relative overflow-hidden min-h-[500px]">
            {/* Absolute Watermark ECG line */}
            <div className="absolute right-0 bottom-0 select-none opacity-[0.03] pointer-events-none transform translate-y-10 translate-x-10">
              <Heart className="w-96 h-96 text-brand-red fill-current" />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeGuide.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="space-y-8 text-left"
              >
                
                {/* Header Profile Info inside box */}
                <div className="border-b border-zinc-100 pb-6">
                  <div className="inline-flex items-center space-x-2 bg-brand-red-light text-brand-red px-3 py-1 rounded-full text-[10px] font-bold font-mono uppercase tracking-wider mb-3">
                    <span>CPR/Trauma Core Protocol</span>
                  </div>
                  <h3 className="font-display font-extrabold text-2xl text-brand-blue tracking-tight text-left">
                    {activeGuide.title} Instruction Flow
                  </h3>
                  
                  <div className="mt-4 p-4.5 bg-zinc-50 border border-zinc-100 rounded-xl space-y-1 text-[11px] leading-relaxed text-zinc-600 text-left">
                    <span className="font-bold text-zinc-700 uppercase block tracking-wider font-mono">Presenting Symptom Clues:</span>
                    <p>{activeGuide.symptom}</p>
                  </div>
                </div>

                {/* Steps Mapping */}
                <div className="space-y-4">
                  <h4 className="text-[10px] uppercase font-mono tracking-wider font-extrabold text-zinc-400 mb-2">Step-by-Step Response Manual:</h4>
                  <div className="grid grid-cols-1 gap-3.5">
                    {activeGuide.steps.map((step, idx) => (
                      <div key={idx} className="flex items-start bg-zinc-50/50 hover:bg-zinc-50 border border-zinc-100 rounded-2xl p-4.5 transition-colors duration-200 text-left">
                        <span className="w-6.5 h-6.5 bg-brand-blue text-white rounded-full flex items-center justify-center text-xs font-mono font-bold shrink-0 mr-3.5 mt-0.5 shadow-sm">
                          {idx + 1}
                        </span>
                        <p className="text-zinc-700 text-xs sm:text-sm leading-relaxed pt-0.5">
                          {step}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Guideline Disclaimer */}
                <div className="border-t border-zinc-100 pt-6 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-zinc-500 gap-4">
                  <p className="italic shrink-1 max-w-lg text-left">
                    <strong>Critical Guideline:&nbsp;</strong>{activeGuide.notes}
                  </p>
                  
                  <a
                    href="#contact-form-anchor"
                    className="flex items-center justify-center space-x-2.5 bg-brand-blue hover:bg-brand-blue-light text-white font-bold py-2.5 px-5 rounded-xl font-mono text-[11px] transition-colors duration-150 uppercase"
                  >
                    <span>Request Onsite Training Info</span>
                    <ArrowRightCircle className="w-4 h-4" />
                  </a>
                </div>

              </motion.div>
            </AnimatePresence>

          </div>

        </div>

      </div>
    </section>
  );
}
