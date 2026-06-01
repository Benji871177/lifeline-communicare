/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { School, Church, Users, Trophy, HeartHandshake, HelpCircle, Shield } from 'lucide-react';

interface SectorItem {
  id: string;
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  why: string;
}

const SECTOR_DATA: SectorItem[] = [
  {
    id: 'schools',
    icon: School,
    title: 'Schools & Crèches',
    description: 'Bustling classrooms, athletic fields, and playgrounds.',
    why: 'Young children are active and adventurous. Our awareness talks empower educators, caretakers, and assistants with the basic readiness to manage minor injuries, choking, medical emergencies or play-area falls calmly.'
  },
  {
    id: 'sporting-bodies',
    icon: Trophy,
    title: 'Sporting Bodies & Clubs',
    description: 'Active leagues, sports fields, and recreational clubs.',
    why: 'Athletic fields are hotbeds for minor sprains, physical impact, fractures, or heat exhaustion. Equipping coaches, referees, and team coordinators with basic emergency awareness keeps sporting groups safe.'
  },
  {
    id: 'neighbourhood-watches',
    icon: Shield,
    title: 'Neighbourhood Watches',
    description: 'Community patrols, CPF groups, and local block watches.',
    why: 'Patrollers and community watches are often the first on the scene during active neighborhood distress. Basic, equipment-free emergency awareness helps you provide critical support when minutes count.'
  },
  {
    id: 'churches-ministries',
    icon: Church,
    title: 'Churches & Worship Spaces',
    description: 'Multi-generational gatherings and congregational spaces.',
    why: 'Congregations gather hundreds of young and elderly citizens alike. Preparing welcome helpers, volunteers, and ushers to manage weather related illnesses, fainting, or sudden distress symptoms to preserve life.'
  },
  {
    id: 'youth-groups',
    icon: Users,
    title: 'Youth Groups & Programs',
    description: 'Extra-curricular programs, community bands, and scouts.',
    why: 'We inspire young minds to take an active, helpful role in community care. Simple interactive sessions raise confidence, safety awareness, and responsible peer-to-peer response habits.'
  }
];

export default function CommunityImpactSection() {
  return (
    <section id="community-impact-section" className="py-20 bg-white relative overflow-hidden">
      {/* Visual background details */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-blue-light/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Split Layout: Left Description & Image, Right Target Sectors Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Visual Column */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <div className="space-y-4">
              <span className="inline-flex items-center space-x-2 bg-brand-red/10 text-brand-red border border-brand-red/25 px-3 py-1 rounded-full text-xs font-bold tracking-wider font-mono uppercase">
                <HeartHandshake className="w-3.5 h-3.5" />
                <span>Our Target Communities</span>
              </span>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-brand-blue leading-tight tracking-tight">
                Who We Target &amp; <br />
                <span className="text-brand-red">Why We Do It</span>
              </h2>
              
              <p className="text-zinc-650 text-base leading-relaxed font-sans">
                Emergency readiness shouldn't be trapped behind daunting medical textbooks or strict clinical institutions. Lifeline Communi-Care exists to demystify medical response frameworks for local gathering spots where everyday citizens interact the most.
              </p>
            </div>

            {/* Curated Community Photo Aspect */}
            <div className="relative rounded-3xl overflow-hidden shadow-md border border-zinc-200 group bg-white p-3">
              <img
                src="https://i.postimg.cc/pTFhCn3s/images.jpg"
                alt="Community members collaborating on emergency awareness and health discussions"
                className="w-full h-auto object-contain rounded-2xl group-hover:scale-[1.01] transition-transform duration-500 bg-white mix-blend-multiply brightness-[1.2] contrast-[1.35] saturate-[1.1]"
                referrerPolicy="no-referrer"
              />
              <div className="mt-3 p-3.5 bg-zinc-50 border border-zinc-150 rounded-xl text-left">
                <span className="text-xs sm:text-sm font-sans tracking-wide uppercase font-black text-brand-red block mb-1.5">Active Grassroots Reach</span>
                <p className="text-xs text-zinc-650 leading-relaxed font-sans">
                  Bringing friendly, low-pressure emergency awareness directly to local halls, classrooms, meeting spaces, and community centers.
                </p>
              </div>
            </div>

            <div className="bg-brand-blue-light/10 border border-brand-blue-light/25 p-5.5 rounded-2xl flex items-start gap-4">
              <HelpCircle className="w-6 h-6 text-brand-red shrink-0 mt-0.5" />
              <div className="space-y-1.5">
                <h4 className="font-display font-black text-sm sm:text-base text-brand-blue uppercase tracking-wide">No Medical Background Needed?</h4>
                <p className="text-zinc-650 text-xs leading-relaxed font-sans">
                  Absolutely none! All our interactive community sessions are customized so that any grandmother, pupil, coach, or educator can absorb the core elements immediately.
                </p>
              </div>
            </div>
          </div>

          {/* Right Sectors Grid Column */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-display font-extrabold text-xl text-zinc-900 tracking-tight text-left border-b border-zinc-100 pb-3">
              Fostering Readiness Where Life Actually Happens
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
              {SECTOR_DATA.map((sector, index) => {
                const IconComp = sector.icon;
                return (
                  <motion.div
                    key={sector.id}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-zinc-50 border border-zinc-200/60 rounded-2xl p-6 hover:shadow-md transition-all duration-300 hover:border-brand-red/20 group hover:bg-white"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-brand-red/10 text-brand-red flex items-center justify-center shrink-0 group-hover:bg-brand-red group-hover:text-white transition-colors duration-300">
                        <IconComp className="w-5.5 h-5.5" />
                      </div>
                      <h4 className="font-display font-extrabold text-sm sm:text-base text-zinc-900 tracking-tight group-hover:text-brand-red transition-colors duration-200">
                        {sector.title}
                      </h4>
                    </div>

                    <p className="text-zinc-500 text-[11px] uppercase tracking-wider font-mono mb-2">
                      {sector.description}
                    </p>
                    
                    <p className="text-zinc-650 text-xs leading-relaxed font-sans">
                      {sector.why}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            {/* Bottom summary encouragement note */}
            <div className="p-6 bg-zinc-90 w-full border border-dashed border-zinc-200 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
              <p className="text-xs text-zinc-900 max-w-md font-sans font-bold leading-relaxed">
                Whether you lead a neighbourhood watch, manage a sports team, support a school, or coordinate a congregation, we can curate the ideal awareness talk for your group.
              </p>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  const targetElement = document.getElementById('contact-form-section');
                  if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="text-xs font-mono font-bold tracking-wider text-brand-red hover:underline shrink-0 flex items-center gap-1.5"
              >
                <span>Discuss Your Venue</span>
                <span>&rarr;</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
