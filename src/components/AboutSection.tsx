/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Eye, ShieldAlert, Activity, HeartHandshake, ShieldCheck, HelpCircle, FlameKindling, Stars } from 'lucide-react';
import { CORE_PILLARS, COMPANY_DETAILS } from '../data';

const iconMap: Record<string, React.ComponentType<any>> = {
  Eye,
  ShieldAlert,
  Activity,
  HeartHandshake
};

export default function AboutSection() {
  return (
    <section id="about-us-section" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro Header */}
        <div id="about-header" className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-sm font-bold text-brand-red uppercase tracking-widest font-mono">
            Who We Are
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-brand-blue tracking-tight">
            Empowering Communities Through Knowledge &amp; Action
          </h2>
          <div className="h-1 w-20 bg-brand-red mx-auto rounded-full" />
          <p className="text-zinc-600 text-base sm:text-lg leading-relaxed pt-2">
            LIFELINE COMMUNI-CARE (PTY) LTD is a premier, South African-based medical emergency support and friendly safety training group. We specialize in transforming passive environments into active safety-first zones.
          </p>
        </div>

        {/* 4 Pillars Grid (extracted from visual cards in the uploaded pamphlet) */}
        <div id="about-pillars" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20 text-left">
          {CORE_PILLARS.map((pillar, idx) => {
            const IconComponent = iconMap[pillar.icon] || ShieldAlert;
            return (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-zinc-50 hover:bg-white border border-zinc-100 hover:border-brand-red/20 rounded-2xl p-6.5 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative group"
              >
                {/* Accent border highlight on hover */}
                <div className="absolute inset-x-0 top-0 h-1 bg-transparent group-hover:bg-brand-red transition-all duration-300 rounded-t-2xl" />

                <div className="w-12 h-12 rounded-xl bg-brand-red-light flex items-center justify-center text-brand-red mb-5 transition-transform duration-300 group-hover:scale-110">
                  <IconComponent className="w-6 h-6" />
                </div>
                
                <h3 className="font-display font-bold text-zinc-900 text-lg tracking-tight mb-2.5">
                  {pillar.title}
                </h3>
                
                <p className="text-zinc-600 text-xs leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Diagonal Feature Split Section (Medical definition & company values) */}
        <div id="about-split-details" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-left pt-10 border-t border-zinc-100">
          
          {/* Left Column representing emergency values & citation */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center space-x-2 bg-brand-blue/5 border border-brand-blue/15 px-3 py-1 rounded-md text-xs font-mono text-brand-blue font-semibold">
              <Stars className="w-3.5 h-3.5 text-brand-red animate-pulse" />
              <span>Defining Structural Emergency Integrity</span>
            </div>

            <blockquote className="border-l-4 border-brand-red pl-5 py-2">
              <span className="block text-xl font-display font-bold text-brand-blue leading-normal italic">
                “An EMERGENCY is a sudden, unexpected, and dangerous situation that poses an immediate threat to life or health.”
              </span>
              <cite className="block text-xs font-mono text-zinc-500 mt-2 not-italic">
                &mdash; Lifeline Communi-Care Foundation Guidelines
              </cite>
            </blockquote>

            <p className="text-zinc-600 text-sm leading-relaxed">
              When trauma, shock, or respiratory distress strikes, every second dictates the barrier between injury recovery or unfortunate loss of life. That is why we are heavily invested in making educational safety sharing, medical kits support, and medical-grade materials accessible without complex institutional backdrops.
            </p>

            <div className="space-y-3.5 pt-2">
              <div className="flex items-center space-x-3 text-sm text-zinc-700">
                <ShieldCheck className="w-5 h-5 text-brand-red shrink-0" />
                <span><strong>No barriers to learning:</strong> Anyone can learn, everyone can assist, lives are saved.</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-zinc-700">
                <ShieldCheck className="w-5 h-5 text-brand-red shrink-0" />
                <span><strong>Fresh Sourced Materials:</strong> All medical kits are pre-stocked with sterile, safe, and up-to-date elements.</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-zinc-700">
                <ShieldCheck className="w-5 h-5 text-brand-red shrink-0" />
                <span><strong>Local Community Dedication:</strong> Specifically tailored for schools, sporting bodies, neighbourhood watches, youth groups, and homes throughout South Africa.</span>
              </div>
            </div>
          </div>

          {/* Right Column showing graphic badge representation */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            <div className="w-full max-w-md bg-gradient-to-br from-brand-blue to-brand-blue-light text-white p-8 rounded-3xl shadow-xl space-y-6 relative overflow-hidden">
              <div className="absolute -right-16 -top-16 w-32 h-32 bg-white/5 rounded-full" />
              
              <h3 className="font-display font-extrabold text-xl tracking-tight text-white border-b border-white/10 pb-4">
                Community Core Highlights
              </h3>

              <div className="space-y-4">
                <div className="p-4 bg-white/5 rounded-2xl border border-white/10 hover:border-brand-red/50 transition-all duration-300">
                  <span className="block text-xs font-mono text-brand-accent uppercase font-bold tracking-wider mb-1">Empowerment Commitment</span>
                  <p className="text-zinc-300 text-xs">
                    We empower communities through strategic awareness programs, instilling practical skills to build high safety performance standards.
                  </p>
                </div>

                <div className="p-4 bg-white/5 rounded-2xl border border-white/10 hover:border-brand-red/50 transition-all duration-300">
                  <span className="block text-xs font-mono text-brand-accent uppercase font-bold tracking-wider mb-1">Equipment Integrity</span>
                  <p className="text-zinc-300 text-xs text-left">
                    We supply, source, deliver and maintain emergency-ready response equipment to guarantee non-stop backup and immediate readiness.
                  </p>
                </div>
              </div>

              <div className="pt-2 text-center">
                <p className="font-mono text-xs text-brand-red font-bold uppercase tracking-widest mt-2">
                  &bull; BE AWARE &bull; BE PREPARED &bull; SAVE LIVES &bull;
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
