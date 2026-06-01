/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { 
  Heart, 
  ShieldCheck, 
  Activity, 
  CheckCircle, 
  Target, 
  Users, 
  Phone, 
  Mail, 
  AlertTriangle, 
  Flag, 
  Zap, 
  Compass,
  Globe,
  Award
} from 'lucide-react';
import { COMPANY_DETAILS } from '../data';
import { PageId } from '../types';

interface PreparednessPortalProps {
  onPageChange: (page: PageId) => void;
}

export default function PreparednessPortal({ onPageChange }: PreparednessPortalProps) {
  const values = [
    {
      name: 'CARE',
      desc: 'We care about people and the communities we serve.',
      icon: Heart,
      iconColor: 'text-[#0c2340]',
      bgColor: 'bg-zinc-100',
    },
    {
      name: 'INTEGRITY',
      desc: 'We act with honesty, transparency and respect.',
      icon: ShieldCheck,
      iconColor: 'text-[#0c2340]',
      bgColor: 'bg-zinc-100',
    },
    {
      name: 'EMPOWERMENT',
      desc: 'We equip others with the knowledge to save lives.',
      icon: Award,
      iconColor: 'text-[#0c2340]',
      bgColor: 'bg-zinc-100',
    },
    {
      name: 'TEAMWORK',
      desc: 'We achieve more together through collaboration.',
      icon: Users,
      iconColor: 'text-[#0c2340]',
      bgColor: 'bg-zinc-100',
    },
    {
      name: 'EXCELLENCE',
      desc: 'We are committed to delivering quality and making a difference.',
      icon: Activity,
      iconColor: 'text-[#0c2340]',
      bgColor: 'bg-zinc-100',
    },
  ];

  const goals = [
    'Increase community awareness and preparedness for emergencies.',
    'Equip individuals with practical, easy-to-understand life-saving knowledge.',
    'Promote confidence and quick action in times of emergency.',
    'Build safer, stronger and more resilient communities.',
    'Make life-saving education accessible to all.',
  ];

  return (
    <div id="preparedness-portal-view" className="py-8 bg-[#f8fafc] text-zinc-900 leading-normal selection:bg-brand-red selection:text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Dynamic Nav Breadcrumb indicator */}
        <div className="flex items-center space-x-2 text-xs font-mono text-zinc-500">
          <span className="cursor-pointer hover:text-brand-red transition-colors" onClick={() => onPageChange('home')}>Home</span>
          <span>/</span>
          <span className="text-zinc-800 font-bold">Emergency Awareness (Brochure)</span>
        </div>

        {/* Brochure Core Container mimicking the paper flyer layout */}
        <div className="bg-white border border-zinc-200 shadow-2xl rounded-3xl overflow-hidden p-6 sm:p-10 space-y-8">
          
          {/* Main Brochure Header replica block */}
          <div className="flex flex-col md:flex-row items-center md:items-stretch justify-between gap-6 pb-6 border-b border-zinc-100">
            
            {/* Lifeline Letterhead logo style block */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-3 shrink-0">
              <div className="w-24 h-24 sm:w-28 sm:h-28 bg-white border border-zinc-100 rounded-2xl p-1 shadow-md flex items-center justify-center">
                <img
                  src="https://i.postimg.cc/hvqPMQ0g/Whats-App-Image-2026-05-24-at-17-09-18.jpg"
                  alt="Lifeline Communi-Care (Pty) Ltd"
                  className="w-full h-full object-contain scale-[1.3] bg-white mix-blend-multiply"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="space-y-0.5">
                <h1 className="font-display font-black text-xl tracking-tight text-brand-blue uppercase leading-none">
                  LIFELINE
                </h1>
                <p className="font-mono text-brand-red font-bold text-[9px] tracking-widest uppercase">
                  COMMUNI-CARE <span className="text-zinc-400 font-normal">(PTY) LTD</span>
                </p>
                
                {/* Heart rate wave mini SVG widget */}
                <div className="flex items-center space-x-1 pt-1 justify-center md:justify-start">
                  <span className="h-[2px] w-6 bg-brand-red inline-block"></span>
                  <svg width="24" height="12" viewBox="0 0 24 12" fill="none" className="text-brand-red stroke-current stroke-2 shrink-0">
                    <path d="M0,6 H6 L9,1 L12,11 L15,6 H24" />
                  </svg>
                  <span className="h-[2px] w-6 bg-brand-red inline-block"></span>
                </div>

                <p className="text-[8px] font-mono font-bold text-zinc-500 uppercase tracking-widest pt-1">
                  BE AWARE &bull; BE PREPARED &bull; SAVE LIVES
                </p>
              </div>
            </div>

            {/* Main title block */}
            <div className="flex flex-col justify-center items-center md:items-end text-center md:text-right space-y-3 md:pl-6 md:border-l border-zinc-100 max-w-xl">
              <span className="bg-[#cc0000]/10 border border-[#cc0000]/25 text-[#cc0000] px-4 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase">
                Official Orientation Brochure
              </span>
              <h2 className="font-display font-black text-3xl sm:text-4xl text-[#0c2340] leading-none uppercase tracking-tight">
                EMERGENCY
              </h2>
              <h2 className="font-display font-black text-3xl sm:text-4xl text-[#cc0000] leading-none uppercase tracking-tight -mt-2">
                AWARENESS &amp; PREPAREDNESS
              </h2>
              <div className="space-y-1">
                <p className="font-display font-bold text-zinc-850 text-xs sm:text-sm tracking-wide">
                  Knowledge today, Confidence tomorrow. Prepared for anything.
                </p>
              </div>
            </div>

          </div>

          {/* Intro statement banner row mimicking the flyer exactly */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch border-b border-zinc-100 pb-8">
            
            {/* Left text message */}
            <div className="lg:col-span-8 flex items-center space-x-4 bg-zinc-50 border border-zinc-200/60 p-5 rounded-2xl text-left">
              <div className="bg-[#0c2340] text-white p-3 rounded-xl shrink-0 hidden sm:flex items-center justify-center">
                <Users className="w-6 h-6" />
              </div>
              <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed font-sans">
                <strong>Lifeline Communi-Care</strong> is committed to empowering communities through practical knowledge and life-saving awareness. Our info-share sessions are designed for everyone &ndash; no medical background required.
              </p>
            </div>

            {/* Right graphic tag */}
            <div className="lg:col-span-4 bg-[#0c2340] text-white rounded-2xl p-5 flex items-center justify-between shadow-md">
              <div className="text-left space-y-1">
                <span className="font-mono text-[8px] font-bold text-zinc-400 uppercase tracking-widest block">Core Candidate Notice</span>
                <h3 className="font-display font-black text-sm tracking-normal uppercase leading-tight text-white">
                  NO MEDICAL
                </h3>
                <h3 className="font-display font-black text-sm tracking-normal uppercase leading-tight text-brand-accent">
                  BACKGROUND REQUIRED
                </h3>
              </div>
              <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center text-brand-accent animate-pulse">
                <Users className="w-5 h-5" />
              </div>
            </div>

          </div>

          {/* Three-Column Grid mimicking the core section headers exactly */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-2 items-stretch">
            
            {/* OUR MISSION COLUMN */}
            <div className="border border-zinc-200 rounded-2xl overflow-hidden flex flex-col justify-between text-left shadow-sm bg-[#fafafa]">
              {/* Header block with red label accent */}
              <div className="bg-[#cc0000] text-white px-5 py-3.5 flex items-center space-x-2.5">
                <div className="p-1.5 bg-white/15 rounded-lg">
                  <Target className="w-4 h-4 text-white" />
                </div>
                <h3 className="font-display font-black text-xs uppercase tracking-wider text-white">
                  OUR MISSION
                </h3>
              </div>
              
              {/* Content body with the outlines heart watermark replica */}
              <div className="p-6 space-y-6 flex-1 flex flex-col justify-between relative overflow-hidden">
                <div className="space-y-4 relative z-10">
                  <p className="text-zinc-800 text-xs sm:text-sm leading-relaxed pt-1 font-sans">
                    To empower individuals and communities with life-saving knowledge and practical skills, creating a culture of awareness, preparedness and response that saves lives.
                  </p>
                </div>

                {/* Sub-block decorative watermark heart exactly like in the document */}
                <div className="opacity-[0.03] text-[#cc0000] pointer-events-none absolute bottom-4 right-4">
                  <Heart className="w-28 h-28 fill-current" />
                </div>

                <div className="border-t border-zinc-200/80 pt-4 text-[9px] font-mono text-zinc-500 uppercase tracking-wider">
                  Be Aware &bull; Be Prepared &bull; Save Lives
                </div>
              </div>
            </div>

            {/* OUR VALUES COLUMN */}
            <div className="border border-zinc-200 rounded-2xl overflow-hidden flex flex-col text-left shadow-sm bg-white">
              {/* Header block with blue flag title */}
              <div className="bg-[#0c2340] text-white px-5 py-3.5 flex items-center space-x-2.5">
                <div className="p-1.5 bg-white/15 rounded-lg">
                  <Compass className="w-4 h-4 text-[#eed58a]" />
                </div>
                <h3 className="font-display font-black text-xs uppercase tracking-wider text-white">
                  OUR VALUES
                </h3>
              </div>
              
              {/* Content body split precisely like values */}
              <div className="p-5 space-y-4 flex-1">
                {values.map((v) => {
                  const IconComponent = v.icon;
                  return (
                    <div key={v.name} className="flex gap-3 text-left border-b border-zinc-100 pb-3 last:border-b-0 last:pb-0">
                      <div className={`w-8 h-8 rounded-lg shrink-0 flex items-center justify-center ${v.bgColor} border border-zinc-200/50`}>
                        <IconComponent className={`w-4 h-4 ${v.iconColor}`} />
                      </div>
                      <div className="space-y-0.5">
                        <span className="font-display font-extrabold text-[11px] text-[#0c2340] uppercase tracking-wide block">
                          {v.name}
                        </span>
                        <p className="text-zinc-650 text-[10.5px] leading-relaxed">
                          {v.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* OUR GOALS COLUMN */}
            <div className="border border-zinc-200 rounded-2xl overflow-hidden flex flex-col justify-between text-left shadow-sm bg-white">
              {/* Header block with darker red banner flag */}
              <div className="bg-[#cc0000] text-white px-5 py-3.5 flex items-center space-x-2.5">
                <div className="p-1.5 bg-white/15 rounded-lg">
                  <Flag className="w-4 h-4 text-white" />
                </div>
                <h3 className="font-display font-black text-xs uppercase tracking-wider text-white">
                  OUR GOALS
                </h3>
              </div>
              
              {/* Content lists with specific checkmark bullet graphics */}
              <div className="p-5 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-3.5">
                  {goals.map((goal, index) => (
                    <div key={index} className="flex items-start space-x-3 text-left">
                      <div className="w-4 h-4 rounded-full bg-[#cc0000]/10 border border-[#cc0000]/20 flex items-center justify-center mt-0.5 shrink-0">
                        <CheckCircle className="w-3 h-3 text-[#cc0000]" />
                      </div>
                      <p className="text-zinc-700 text-xs leading-relaxed font-sans font-medium">
                        {goal}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="border-t border-zinc-200/80 pt-4 text-[9px] font-mono text-zinc-500 uppercase tracking-wider">
                  Community Resiliency Standards
                </div>
              </div>
            </div>

          </div>

          {/* Brochure Disclaimer notice replication */}
          <div className="bg-[#0c2340] border border-zinc-900 rounded-2xl p-5 text-white flex flex-col md:flex-row items-start md:items-center gap-4 text-left shadow-inner">
            <div className="p-3 bg-[#cc0000] text-white rounded-xl flex items-center justify-center shrink-0">
              <AlertTriangle className="w-6 h-6 animate-pulse" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <span className="font-mono text-[9px] font-black text-brand-accent tracking-widest uppercase">DISCLAIMER &amp; EMERGENCY POLICY NOTICE</span>
              </div>
              <p className="text-[11px] sm:text-xs text-zinc-300 leading-relaxed max-w-4xl font-sans">
                <strong>DISCLAIMER:</strong> Lifeline Communi-care (Pty) Ltd provides emergency awareness and preparedness information for educational purposes only. The content is not a substitute for professional medical training, advice, diagnosis or treatment. In any emergency, always call <strong>112</strong> or <strong>021 480 7700 (Toll Free)</strong> immediately.
                <br className="mt-2 block" />
                Lifeline Communi-care (Pty) Ltd, it's members, facilitators and associates accept no liability for any loss, injury or damage arising from the use of this information. Participation is at your own risk.
              </p>
            </div>
          </div>

          {/* Booking Coordination & Contact Hub (Bottom of Brochure Flyer) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch pt-2 text-left">
            
            {/* Promo Campaign Text Block (Column 1) */}
            <div className="lg:col-span-5 bg-[#0c2340] text-white rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden shadow-md">
              <div className="space-y-4 relative z-10">
                <div className="w-10 h-10 bg-brand-accent text-[#0c2340] rounded-xl flex items-center justify-center shadow-sm">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-display font-black text-base uppercase leading-tight tracking-tight text-white">
                    LET'S BUILD A MORE
                  </h4>
                  <h4 className="font-display font-black text-base uppercase leading-tight tracking-tight text-brand-accent">
                    PREPARED COMMUNITY.
                  </h4>
                </div>
                <p className="text-zinc-300 text-xs leading-relaxed max-w-sm">
                  Book your orientation inquiry today and empower your neighborhood, workplace, congregation, or community coalition with simple muscle memory confidence.
                </p>
              </div>

              <div className="pt-6 border-t border-white/10 mt-6 flex items-center space-x-2">
                <span className="h-1.5 w-1.5 bg-brand-accent rounded-full"></span>
                <p className="text-[9px] font-mono text-zinc-400 uppercase tracking-widest">
                  Western Cape &bull; Registered PTY
                </p>
              </div>
            </div>

            {/* Direct Dial Coordination Coordinates Block (Column 2) */}
            <div className="lg:col-span-4 bg-[#cc0000] text-white rounded-2xl p-6 flex flex-col justify-between shadow-md relative">
              <div className="space-y-4">
                <span className="text-[9px] font-mono font-bold tracking-widest text-[#eed58a] uppercase block">To Request an Info-Share Session:</span>
                
                <div className="space-y-3 font-mono text-[11px] font-bold">
                  <a href="tel:+27748410771" className="flex items-center space-x-2.5 hover:text-brand-accent transition-colors">
                    <span className="bg-white/15 px-2 py-0.5 rounded text-[10px]">Primary</span>
                    <span>+27 (0)74 841 0771</span>
                  </a>
                  <a href="tel:+27629590426" className="flex items-center space-x-2.5 hover:text-brand-accent transition-colors">
                    <span className="bg-white/15 px-2 py-0.5 rounded text-[10px]">Alternate</span>
                    <span>+27 (0)62 959 0426</span>
                  </a>
                  <a href="mailto:info@lifelinecommunicare.co.za" className="flex items-center space-x-2.5 hover:text-brand-accent transition-colors">
                    <Mail className="w-3.5 h-3.5 text-[#eed58a]" />
                    <span>info@lifelinecommunicare.co.za</span>
                  </a>
                  <a href="https://www.lifelinecommunicare.co.za" target="_blank" rel="noreferrer" className="flex items-center space-x-2.5 hover:text-brand-accent transition-colors">
                    <Globe className="w-3.5 h-3.5 text-[#eed58a]" />
                    <span>www.lifelinecommunicare.co.za</span>
                  </a>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 mt-6">
                <button
                  type="button"
                  onClick={() => onPageChange('contact')}
                  className="w-full bg-white text-[#cc0000] font-mono font-bold text-[10px] uppercase tracking-wider py-2 rounded-lg hover:bg-[#eed58a] hover:text-[#0c2340] transition-colors cursor-pointer"
                >
                  Direct Inquiry Desk
                </button>
              </div>
            </div>

            {/* Mock QR Scan Box mimicking the printed document perfectly (Column 3) */}
            <div className="lg:col-span-3 border border-zinc-200 bg-white rounded-2xl p-5 flex flex-col items-center justify-center text-center space-y-3.5 shadow-sm">
              <div className="p-2 border border-zinc-200 rounded-xl bg-zinc-50 relative group">
                {/* SVG QR Code Simulation */}
                <svg width="100" height="100" viewBox="0 0 100 100" className="text-[#0c2340] fill-current">
                  {/* Outer corners */}
                  <rect x="0" y="0" width="25" height="25" fill="none" stroke="currentColor" strokeWidth="6" />
                  <rect x="5" y="5" width="15" height="15" />
                  <rect x="75" y="0" width="25" height="25" fill="none" stroke="currentColor" strokeWidth="6" />
                  <rect x="80" y="5" width="15" height="15" />
                  <rect x="0" y="75" width="25" height="25" fill="none" stroke="currentColor" strokeWidth="6" />
                  <rect x="5" y="80" width="15" height="15" />
                  
                  {/* Individual random codes */}
                  <rect x="35" y="5" width="8" height="8" />
                  <rect x="45" y="10" width="12" height="6" />
                  <rect x="60" y="5" width="6" height="12" />
                  <rect x="35" y="25" width="14" height="6" />
                  <rect x="55" y="25" width="12" height="14" />
                  <rect x="75" y="35" width="20" height="8" />
                  
                  <rect x="5" y="35" width="18" height="6" />
                  <rect x="15" y="45" width="10" height="12" stroke="currentColor" strokeWidth="2" />
                  <rect x="35" y="45" width="8" height="8" />
                  <rect x="48" y="55" width="12" height="12" />
                  <rect x="65" y="48" width="6" height="20" />
                  
                  <rect x="35" y="75" width="14" height="14" />
                  <rect x="55" y="75" width="12" height="6" />
                  <rect x="75" y="75" width="6" height="14" />
                  <rect x="85" y="85" width="10" height="10" />
                </svg>
                {/* Subtle Hover effect */}
                <span className="absolute inset-0 bg-[#0c2340]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </div>
              
              <div className="space-y-1">
                <span className="font-mono text-[9px] text-zinc-400 tracking-wider uppercase block">Explore Lifeline</span>
                <h4 className="font-display font-black text-xs text-[#0c2340] tracking-tight uppercase leading-tight">
                  SCAN TO
                </h4>
                <h4 className="font-display font-black text-xs text-[#cc0000] tracking-tight uppercase leading-none">
                  LEARN MORE
                </h4>
              </div>
            </div>

          </div>

          {/* Interactive footer details bar of the flyer replica */}
          <div className="pt-6 border-t border-zinc-100 flex flex-wrap justify-center sm:justify-between items-center gap-4 text-zinc-400 font-mono text-[9px] tracking-wider uppercase">
            <div className="flex items-center space-x-1.5 text-zinc-600 font-bold">
              <CheckCircle className="w-3.5 h-3.5 text-[#cc0000] shrink-0" />
              <span>PRACTICAL KNOWLEDGE</span>
            </div>
            <div className="flex items-center space-x-1.5 text-zinc-600 font-bold">
              <CheckCircle className="w-3.5 h-3.5 text-[#cc0000] shrink-0" />
              <span>REAL LIFE SCENARIOS</span>
            </div>
            <div className="flex items-center space-x-1.5 text-zinc-600 font-bold">
              <CheckCircle className="w-3.5 h-3.5 text-[#cc0000] shrink-0" />
              <span>EMPOWERING INDIVIDUALS</span>
            </div>
            <div className="flex items-center space-x-1.5 text-zinc-600 font-bold">
              <CheckCircle className="w-3.5 h-3.5 text-[#cc0000] shrink-0" />
              <span>STRONGER COMMUNITIES</span>
            </div>
            <div className="flex items-center space-x-1.5 text-zinc-600 font-bold">
              <CheckCircle className="w-3.5 h-3.5 text-[#cc0000] shrink-0" />
              <span>SAVING LIVES</span>
            </div>
          </div>

        </div>

        {/* Outer bottom decorative bar mimicking the red line with heart rate wave on both sides */}
        <div id="portal-lower-letter-tag" className="py-4 flex items-center justify-center space-x-4 max-w-xl mx-auto overflow-hidden">
          <svg width="60" height="20" viewBox="0 0 60 20" fill="none" className="text-[#cc0000] stroke-current stroke-2 shrink-0 hidden sm:block">
            <path d="M0,10 H25 L30,2 L35,18 L40,10 H60" />
          </svg>
          <p className="font-mono text-zinc-500 text-[10px] tracking-widest uppercase text-center font-bold">
            BE AWARE <span className="text-[#cc0000]">&bull;</span> BE PREPARED <span className="text-[#cc0000]">&bull;</span> SAVE LIVES
          </p>
          <svg width="60" height="20" viewBox="0 0 60 20" fill="none" className="text-[#cc0000] stroke-current stroke-2 shrink-0 hidden sm:block">
            <path d="M0,10 H25 L30,2 L35,18 L40,10 H60" />
          </svg>
        </div>

      </div>
    </div>
  );
}
