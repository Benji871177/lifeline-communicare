/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { Award, ShieldCheck, HeartHandshake, History } from 'lucide-react';

export default function StatCounter() {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    let currentValue = 0;
    const endValue = 38;
    const totalDuration = 1800; // 1.8 seconds duration
    const stepTime = Math.floor(totalDuration / endValue);

    const timer = setInterval(() => {
      currentValue += 1;
      setCount(currentValue);
      if (currentValue >= endValue) {
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [hasStarted]);

  return (
    <section 
      ref={sectionRef}
      id="expertise-counter-section" 
      className="py-16 bg-white border-y border-zinc-100 relative overflow-hidden"
    >
      <div className="absolute right-0 top-0 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute left-0 bottom-0 w-80 h-80 bg-brand-blue/5 rounded-full blur-3xl -z-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Main high-impact red counter */}
          <div id="stat-main-headline-block" className="col-span-12 lg:col-span-5 text-center lg:text-left space-y-4">
            <span className="text-xs font-mono font-bold tracking-widest text-brand-red uppercase block">
              Established Safety Competence
            </span>
            <div className="inline-flex items-center justify-center lg:justify-start gap-1.5">
              <span className="text-7xl sm:text-8xl font-display font-extrabold text-brand-red tracking-tighter select-none">
                +{count}
              </span>
              <div className="text-left flex flex-col justify-center">
                <span className="text-2xl sm:text-3xl font-display font-extrabold text-zinc-950 uppercase leading-none tracking-tight">
                  Years
                </span>
                <span className="text-xs font-semibold text-zinc-500 font-mono tracking-tight mt-1">
                  of Expertise
                </span>
              </div>
            </div>
            <p className="text-zinc-650 text-sm max-w-md mx-auto lg:mx-0 leading-relaxed">
              With over three decades of professional emergency, clinical support, and classroom safety expertise, Robbie and the team deliver engaging educational sessions.
            </p>
          </div>

          {/* Spliced grid items demonstrating expertise details */}
          <div id="expertise-bullets-block" className="col-span-12 lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            <div className="bg-zinc-50 border border-zinc-100 p-5 rounded-2xl flex items-start space-x-4 hover:shadow-md transition-shadow">
              <div className="p-3 bg-brand-red/10 rounded-xl text-brand-red shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div className="space-y-1 text-left">
                <h4 className="font-display font-bold text-sm text-zinc-900">Community-Driven Sharing</h4>
                <p className="text-zinc-500 text-xs leading-relaxed font-sans">
                  Simple, equipment-free demonstrations designed for school readiness and civic confidence.
                </p>
              </div>
            </div>

            <div className="bg-zinc-50 border border-zinc-100 p-5 rounded-2xl flex items-start space-x-4 hover:shadow-md transition-shadow">
              <div className="p-3 bg-brand-red/10 rounded-xl text-brand-red shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className="space-y-1 text-left">
                <h4 className="font-display font-bold text-sm text-zinc-900">Essential Sourced Kits</h4>
                <p className="text-zinc-500 text-xs leading-relaxed font-sans">
                  Safely sourced first aid kits and clinical supplies tailored for churches, youth programs, and local businesses.
                </p>
              </div>
            </div>

            <div className="bg-zinc-50 border border-zinc-100 p-5 rounded-2xl flex items-start space-x-4 hover:shadow-md transition-shadow">
              <div className="p-3 bg-brand-red/10 rounded-xl text-brand-red shrink-0">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <div className="space-y-1 text-left">
                <h4 className="font-display font-bold text-sm text-zinc-900">Personalized Safety Talks</h4>
                <p className="text-zinc-500 text-xs leading-relaxed font-sans">
                  Custom interactive sessions and friendly lessons led directly by Robbie, a veteran medical professional.
                </p>
              </div>
            </div>

            <div className="bg-zinc-50 border border-zinc-100 p-5 rounded-2xl flex items-start space-x-4 hover:shadow-md transition-shadow">
              <div className="p-3 bg-brand-red/10 rounded-xl text-brand-red shrink-0">
                <History className="w-6 h-6" />
              </div>
              <div className="space-y-1 text-left">
                <h4 className="font-display font-bold text-sm text-zinc-900">Gauteng & Beyond Coverage</h4>
                <p className="text-zinc-500 text-xs leading-relaxed font-sans">
                  Building deep local safety partnerships, maintaining reliable safety cabinets, and training life-savers.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
