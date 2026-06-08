/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Mail, MapPin, Building, Send, CheckCircle2, Globe, HeartHandshake, ShieldCheck } from 'lucide-react';
import { COMPANY_DETAILS } from '../data';
import { ContactSubmission } from '../types';

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactSubmission>({
    fullName: '',
    email: '',
    phoneNumber: '',
    companyName: '',
    subject: 'First Aid Training Quote',
    message: ''
  });

  const [formErrors, setFormErrors] = useState<Partial<ContactSubmission>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [previewEmail, setPreviewEmail] = useState<{ to: string; subject: string; html: string } | null>(null);
  const [submissionMode, setSubmissionMode] = useState<'live' | 'demo' | null>(null);
  const [whatsappUrl, setWhatsappUrl] = useState<string>('');
  const [submittedWhatsappUrl, setSubmittedWhatsappUrl] = useState<string>('');

  React.useEffect(() => {
    const formattedText = `*New Inquiry Submitted via Website*\n` +
      `-----------------------------------------\n` +
      `*Name:* ${formData.fullName}\n` +
      `*Email:* ${formData.email}\n` +
      `*Phone:* ${formData.phoneNumber}\n` +
      `*Company:* ${formData.companyName || 'N/A'}\n` +
      `*Subject:* ${formData.subject}\n\n` +
      `*Message:* \n${formData.message}`;

    const encodedText = encodeURIComponent(formattedText);
    setWhatsappUrl(`https://wa.me/27748410771?text=${encodedText}`);
  }, [formData]);

  React.useEffect(() => {
    // 1. Check window.__selectedProduct on mount (e.g. redirected from supplies page)
    const storedProduct = (window as any).__selectedProduct;
    const storedSponsorship = (window as any).__corporateSponsorship;
    if (storedProduct) {
      const { productName, category } = storedProduct;
      const targetSubject = category === 'kits' ? 'Supply & Maintenance of Kits' : 'Medical Consumables Procurement';
      setFormData({
        fullName: '',
        email: '',
        phoneNumber: '',
        companyName: '',
        subject: targetSubject,
        message: `Hi Robbie, I would like to inquire about sourcing the following emergency supply: "${productName}" for our organization/school/sports club/neighbourhood watch. Please get in touch with me so I can share details of what we require.`
      });
      
      // Clear once processed
      (window as any).__selectedProduct = null;
      
      // Move perspective to contact card and auto-focus
      const element = document.getElementById('contact-form-anchor');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      setTimeout(() => {
        const nameInput = document.getElementById('fullName');
        if (nameInput) nameInput.focus();
      }, 800);
    } else if (storedSponsorship) {
      setFormData({
        fullName: '',
        email: '',
        phoneNumber: '',
        companyName: '',
        subject: 'Corporate Sponsorship & CSR',
        message: `Hi Robbie, we would like to sponsor an Emergency Awareness session. Below are the details representing what we would like to sponsor:\n\n- Entity to sponsor (e.g., custom school name / sports club / specific beneficiary affiliate):\n- Approximate group size or audience details:\n- Branding requested at venue (custom pens, notebooks, banners, etc.):\n\nPlease get in touch with us so we can finalize the coordinates.`
      });
      
      (window as any).__corporateSponsorship = null;
      
      const element = document.getElementById('contact-form-anchor');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      setTimeout(() => {
        const nameInput = document.getElementById('fullName');
        if (nameInput) nameInput.focus();
      }, 800);
    }

    const handleRequestQuote = (event: Event) => {
      const customEvent = event as CustomEvent<{ serviceId: string; serviceTitle: string }>;
      if (!customEvent.detail) return;
      const { serviceId, serviceTitle } = customEvent.detail;
      
      let mappedSubject = 'First Aid Training Quote';
      if (serviceId === 'kits-supply-maintenance') {
        mappedSubject = 'Supply & Maintenance of Kits';
      } else if (serviceId === 'medical-consumables') {
        mappedSubject = 'Medical Consumables Procurement';
      } else if (serviceId === 'ems-career-talks') {
        mappedSubject = 'EMS Vocational Career Lectures';
      }

      setFormData({
        fullName: '',
        email: '',
        phoneNumber: '',
        companyName: '',
        subject: mappedSubject,
        message: `Hi Robbie, I would like to request a customized quote and get additional emergency preparedness specifications regarding your service: "${serviceTitle}". Please contact me with details.`
      });

      const element = document.getElementById('contact-form-anchor');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        
        setTimeout(() => {
          const nameInput = document.getElementById('fullName');
          if (nameInput) nameInput.focus();
        }, 800);
      }
    };

    const handleRequestSupplies = (event: Event) => {
      const customEvent = event as CustomEvent<{ productName: string; category: string }>;
      if (!customEvent.detail) return;
      const { productName, category } = customEvent.detail;
      const targetSubject = category === 'kits' ? 'Supply & Maintenance of Kits' : 'Medical Consumables Procurement';
      
      setFormData({
        fullName: '',
        email: '',
        phoneNumber: '',
        companyName: '',
        subject: targetSubject,
        message: `Hi Robbie, I would like to inquire about sourcing the following emergency supply: "${productName}" for our organization/school/sports club/neighbourhood watch. Please get in touch with me so I can share details of what we require.`
      });

      const element = document.getElementById('contact-form-anchor');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        
        setTimeout(() => {
          const nameInput = document.getElementById('fullName');
          if (nameInput) nameInput.focus();
        }, 800);
      }
    };

    const handleRequestSponsorship = (event: Event) => {
      setFormData({
        fullName: '',
        email: '',
        phoneNumber: '',
        companyName: '',
        subject: 'Corporate Sponsorship & CSR',
        message: `Hi Robbie, we would like to sponsor an Emergency Awareness session. Below are the details representing what we would like to sponsor:\n\n- Entity to sponsor (e.g., custom school name / sports club / specific beneficiary affiliate):\n- Approximate group size or audience details:\n- Branding requested at venue (custom pens, notebooks, banners, etc.):\n\nPlease get in touch with us so we can finalize the coordinates.`
      });

      const element = document.getElementById('contact-form-anchor');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        
        setTimeout(() => {
          const nameInput = document.getElementById('fullName');
          if (nameInput) nameInput.focus();
        }, 800);
      }
    };

    window.addEventListener('request-quote', handleRequestQuote);
    window.addEventListener('request-supplies', handleRequestSupplies);
    window.addEventListener('request-sponsorship', handleRequestSponsorship);
    return () => {
      window.removeEventListener('request-quote', handleRequestQuote);
      window.removeEventListener('request-supplies', handleRequestSupplies);
      window.removeEventListener('request-sponsorship', handleRequestSponsorship);
    };
  }, []);

  const validate = (): boolean => {
    const errors: Partial<ContactSubmission> = {};
    if (!formData.fullName.trim()) errors.fullName = 'Full Name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email Address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Please provide a valid email format';
    }
    if (!formData.phoneNumber.trim()) {
      errors.phoneNumber = 'Phone Number is required';
    } else if (formData.phoneNumber.length < 8) {
      errors.phoneNumber = 'Please provide a valid phone number (min 8 digits)';
    }
    if (!formData.message.trim()) errors.message = 'Please input your response guidelines';
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleAnchorClick = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!validate()) {
      e.preventDefault();
      return;
    }

    // Capture the current complete redirect URL before form is cleared on success
    setSubmittedWhatsappUrl(whatsappUrl);

    setIsSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      setIsSubmitting(false);
      setIsSuccess(true);
      setSubmissionMode('live');
      setPreviewEmail(null);

      // Reset form variables
      setFormData({
        fullName: '',
        email: '',
        phoneNumber: '',
        companyName: '',
        subject: 'First Aid Training Quote',
        message: ''
      });
    } catch (error) {
      console.error('Submission transfer failure:', error);
      setIsSubmitting(false);
      setIsSuccess(true);
      setSubmissionMode('live');
      setPreviewEmail(null);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmittedWhatsappUrl(whatsappUrl);

    // Fallback dynamic popups try to open WhatsApp
    try {
      window.open(whatsappUrl, '_blank');
    } catch (popupErr) {
      console.warn('Popup blocked:', popupErr);
    }

    setIsSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      setIsSubmitting(false);
      setIsSuccess(true);
      setSubmissionMode('live');
      setPreviewEmail(null);

      // Reset form variables
      setFormData({
        fullName: '',
        email: '',
        phoneNumber: '',
        companyName: '',
        subject: 'First Aid Training Quote',
        message: ''
      });
    } catch (error) {
      console.error('Submission transfer failure:', error);
      setIsSubmitting(false);
      setIsSuccess(true);
      setSubmissionMode('live');
      setPreviewEmail(null);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name as keyof ContactSubmission]) {
      setFormErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <section id="contact-form-anchor" className="py-20 bg-white border-t border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div id="contact-header" className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <span className="text-sm font-bold text-brand-red uppercase tracking-widest font-mono">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-brand-blue tracking-tight">
            Initiate Corporate Sourcing
          </h2>
          <div className="h-1 w-20 bg-brand-red mx-auto rounded-full" />
          <p className="text-zinc-650 text-sm sm:text-base leading-relaxed">
            Need certified corporate training or bulk supplies? Submit your request below, and Robbie’s technical emergency awareness desk will construct a custom proposal aligned with national first aid criteria.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-left items-stretch">
          
          {/* Left Column (Robbie Info Card & Google Map Zone Placeholder) */}
          <div id="contact-details-block" className="lg:col-span-5 flex flex-col justify-between space-y-8">
            
            <div className="bg-brand-blue text-white p-8 rounded-3xl space-y-6 shadow-xl relative overflow-hidden flex-1 self-stretch flex flex-col justify-between">
              
              <div className="space-y-6">
                <div>
                  <span className="text-xs font-mono text-brand-accent uppercase font-bold tracking-wider">
                    Speak with Robbie &amp; his dynamic team directly
                  </span>
                  <h3 className="font-display font-extrabold text-2xl text-white tracking-tight mt-1 text-left">
                    Speak With Robbie Directly
                  </h3>
                </div>

                <div className="space-y-4.5 text-sm text-zinc-350">
                  <div className="flex items-start space-x-3.5">
                    <Phone className="w-5 h-5 text-brand-red shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-[11px] font-mono text-zinc-400">Primary phone line</span>
                      <a href={`tel:${COMPANY_DETAILS.phonePrimary.replace(/\s+/g, '')}`} className="font-mono text-white text-base hover:text-brand-accent transition-colors font-bold block text-left">
                        {COMPANY_DETAILS.phonePrimary}
                      </a>
                      <span className="block text-[11px] font-mono text-zinc-450 mt-1">Secondary phone line</span>
                      <a href={`tel:${COMPANY_DETAILS.phoneAlternate.replace(/\s+/g, '')}`} className="font-mono text-zinc-300 text-sm hover:text-brand-accent transition-colors block text-left">
                        {COMPANY_DETAILS.phoneAlternate}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3.5 border-t border-white/5 pt-4">
                    <Mail className="w-5 h-5 text-brand-red shrink-0 mt-0.5" />
                    <div className="min-w-0">
                      <span className="block text-[11px] font-mono text-zinc-400">Official inquiries email</span>
                      <a href={`mailto:${COMPANY_DETAILS.emailPrimary}`} className="font-mono text-white text-sm hover:text-brand-accent transition-colors block text-left truncate">
                        {COMPANY_DETAILS.emailPrimary}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3.5 border-t border-white/5 pt-4">
                    <MapPin className="w-5 h-5 text-brand-red shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-[11px] font-mono text-zinc-400">Offices &amp; Service Region</span>
                      <p className="text-zinc-300 text-sm text-left leading-relaxed">
                        {COMPANY_DETAILS.region}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Integrity Shield badge */}
              <div className="bg-white/5 border border-white/10 p-4 rounded-2xl flex items-center gap-3 mt-6">
                <ShieldCheck className="w-8 h-8 text-brand-accent shrink-0" />
                <p className="text-[10px] text-zinc-400 leading-normal text-left">
                  <strong>South Africa Registered SME:</strong> Lifeline Communi-Care guarantees genuine medical components with friendly, community-focused learning sessions.
                </p>
              </div>

            </div>

            {/* Google Map Service Zone Vector representation */}
            <div className="bg-zinc-50 border border-zinc-200/60 rounded-3xl p-6.5 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Globe className="w-4.5 h-4.5 text-brand-red" />
                  <span className="text-xs font-bold text-zinc-800 font-display">Operational Coverage</span>
                </div>
                <span className="text-[9px] font-mono bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-bold uppercase">
                  South Africa National Coverage
                </span>
              </div>
              
              {/* Custom SVG Stylized Map representing South Africa Regions */}
              <div className="h-44 w-full bg-slate-900 rounded-2xl overflow-hidden relative flex items-center justify-center p-3 border border-slate-800 shadow-inner">
                <div className="absolute inset-0 bg-radial-gradient(ellipse_at_center, rgba(23,42,69,0.95), rgba(10,25,47,1))" />
                
                {/* Visual South Africa Abstract Poly */}
                <svg viewBox="0 0 400 300" className="w-[85%] h-[85%] relative z-10 opacity-70">
                  {/* Outline of South Africa representing boundaries */}
                  <path 
                    d="M 50,220 L 70,250 L 120,260 L 180,270 L 250,275 L 340,180 L 320,130 L 290,110 L 250,115 L 210,120 L 150,140 Z" 
                    fill="#172A45" 
                    stroke="#D32F2F" 
                    strokeWidth="1.5"
                    strokeDasharray="4 2"
                  />
                  
                  {/* Service Indicators (Pins) */}
                  {/* Cape Town Headquarters */}
                  <circle cx="70" cy="240" r="14" fill="rgba(211, 47, 47, 0.3)" className="animate-ping" />
                  <circle cx="70" cy="240" r="5" fill="#D32F2F" />
                  
                  {/* Broader South African Regions Hub */}
                  <circle cx="260" cy="140" r="10" fill="rgba(56, 189, 248, 0.2)" />
                  <circle cx="260" cy="140" r="3.5" fill="#38BDF8" />

                  {/* Durban Active Hub */}
                  <circle cx="310" cy="190" r="10" fill="rgba(56, 189, 248, 0.2)" />
                  <circle cx="310" cy="190" r="3.5" fill="#38BDF8" />

                  {/* Text pointers */}
                  <text x="50" y="222" fill="#FFFFFF" fontSize="9" fontWeight="bold" fontFamily="sans-serif">Cape Town HQ</text>
                  <text x="200" y="125" fill="#38BDF8" fontSize="8" fontFamily="sans-serif">Broader SA Regions</text>
                  <text x="290" y="205" fill="#38BDF8" fontSize="8" fontFamily="sans-serif">Durban</text>
                  
                </svg>

                {/* Overlaid location info label */}
                <div className="absolute bottom-2.5 left-2.5 right-2.5 bg-slate-950/80 backdrop-blur-md border border-white/5 py-1.5 px-3 rounded-lg text-[9px] font-mono text-zinc-300 flex items-center justify-between">
                  <span>Cape Town HQ &amp; Broader SA Regions</span>
                  <span className="text-brand-red font-bold animate-pulse">&bull; ACTIVE METROPOLITAN TEAMS</span>
                </div>
              </div>
              
              <p className="text-zinc-500 text-[10px] leading-relaxed italic text-left">
                * Our friendly emergency awareness instructors and delivery team travel directly to your school, sports club, neighbourhood watch, church, or community center to host active informational safety sessions.
              </p>
            </div>

          </div>

          {/* Right Column: Premium Active Form Container */}
          <div id="contact-form-block" className="lg:col-span-7 bg-zinc-50 border border-zinc-200/60 rounded-3xl p-8 lg:p-10 shadow-sm relative flex flex-col justify-center min-h-[550px]">
            
            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.form
                  key="contact-form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-5.5 text-left"
                >
                  
                  <div>
                    <h3 className="font-display font-bold text-lg text-brand-blue tracking-tight mb-2 text-left">
                      Client Support Dispatch Request
                    </h3>
                    <p className="text-zinc-500 text-xs text-left mb-5">
                      Fill out the details below. Our corporate desk guarantees a response timeline within 24 operational hours.
                    </p>
                  </div>

                  {/* Mandated Inquiry Redirect Callout */}
                  <div className="bg-brand-red/5 border border-brand-red/20 rounded-2xl p-4 flex items-start gap-3 mb-5 text-left">
                    <div className="bg-brand-red text-white p-1.5 rounded-lg shrink-0 mt-0.5">
                      <Mail className="w-4 h-4 text-white" />
                    </div>
                    <div className="space-y-1">
                      <span className="text-[10px] font-mono font-bold text-brand-red uppercase tracking-wider block">Important Service Note</span>
                      <p className="text-zinc-700 text-[11px] leading-relaxed">
                        In compliance with our national communication policy, all official inquiries, custom quote requests, and corporate sponsors must direct their correspondence to our primary inbox: <a href="mailto:info@lifelinecommunicare.co.za" className="font-mono font-extrabold text-[#D32F2F] hover:underline underline-offset-2">info@lifelinecommunicare.co.za</a>.
                      </p>
                    </div>
                  </div>

                  {/* Two-row grid: name & email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label htmlFor="fullName" className="block text-xs font-mono font-bold text-zinc-700">Full Name *</label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        placeholder="e.g. Robbie de Jager"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 bg-white border rounded-xl text-xs text-zinc-800 focus:outline-none transition-all duration-200 ${
                          formErrors.fullName ? 'border-brand-red focus:border-brand-red' : 'border-zinc-300 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue'
                        }`}
                      />
                      {formErrors.fullName && <p className="text-[10px] text-brand-red font-semibold">{formErrors.fullName}</p>}
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="email" className="block text-xs font-mono font-bold text-zinc-700">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="e.g. contact@company.co.za"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 bg-white border rounded-xl text-xs text-zinc-800 focus:outline-none transition-all duration-200 ${
                          formErrors.email ? 'border-brand-red focus:border-brand-red' : 'border-zinc-300 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue'
                        }`}
                      />
                      {formErrors.email && <p className="text-[10px] text-brand-red font-semibold">{formErrors.email}</p>}
                    </div>
                  </div>

                  {/* Two-row grid: phone & company name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label htmlFor="phoneNumber" className="block text-xs font-mono font-bold text-zinc-700">Phone Number *</label>
                      <input
                        type="tel"
                        id="phoneNumber"
                        name="phoneNumber"
                        placeholder="e.g. 074 841 0771"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 bg-white border rounded-xl text-xs text-zinc-800 focus:outline-none transition-all duration-200 ${
                          formErrors.phoneNumber ? 'border-brand-red focus:border-brand-red' : 'border-zinc-300 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue'
                        }`}
                      />
                      {formErrors.phoneNumber && <p className="text-[10px] text-brand-red font-semibold">{formErrors.phoneNumber}</p>}
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="companyName" className="block text-xs font-mono font-bold text-zinc-700">Company Name (Optional)</label>
                      <div className="relative">
                        <input
                          type="text"
                          id="companyName"
                          name="companyName"
                          placeholder="e.g. Cape Town Youth Alliance"
                          value={formData.companyName}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-white border border-zinc-300 rounded-xl text-xs text-zinc-800 focus:outline-none focus:border-brand-blue"
                        />
                        <Building className="absolute right-3.5 top-3.5 w-4 h-4 text-zinc-400" />
                      </div>
                    </div>
                  </div>

                  {/* Dropdown Topic Selection */}
                  <div className="space-y-1.5">
                    <label htmlFor="subject" className="block text-xs font-mono font-bold text-zinc-700">Enquiry Subject</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white border border-zinc-300 rounded-xl text-xs text-zinc-800 focus:outline-none focus:border-brand-blue cursor-pointer"
                    >
                      <option value="First Aid Training Quote">First Aid-Certified Level 1-3 Training (T&amp;Cs apply)</option>
                      <option value="Corporate Sponsorship &amp; CSR">Corporate Sponsorship &amp; CSR (Schools, Clubs &amp; Affiliates)</option>
                      <option value="Supply & Maintenance of Kits">Source, supply, deliver &amp; maintain First Aid Kits</option>
                      <option value="Medical Consumables Procurement">Dentist, GP, or Clinic Consumables Procurement</option>
                      <option value="EMS Vocational Career Lectures">Life Orientation / Vocational Career EMS Lectures</option>
                      <option value="Other Emergency Inquiries">Other Emergency Preparedness Consultation</option>
                    </select>
                  </div>

                  {/* Message Field */}
                  <div className="space-y-1.5">
                    <label htmlFor="message" className="block text-xs font-mono font-bold text-zinc-700">Detailed Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Detail instructions, required amount of first aid boxes, or student headcounts on training..."
                      value={formData.message}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3.5 bg-white border rounded-xl text-xs text-zinc-800 focus:outline-none transition-all duration-200 resize-none ${
                        formErrors.message ? 'border-brand-red focus:border-brand-red' : 'border-zinc-300 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue'
                      }`}
                    />
                    {formErrors.message && <p className="text-[10px] text-brand-red font-semibold">{formErrors.message}</p>}
                  </div>

                  {/* Submission triggers */}
                  <div className="pt-4 text-left space-y-4 font-sans">
                    <a
                      href={whatsappUrl}
                      onClick={handleAnchorClick}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center space-x-2.5 bg-brand-red hover:bg-brand-red/90 text-white font-bold px-7.5 py-4 rounded-xl shadow-lg shadow-brand-red/10 hover:shadow-brand-red/20 transition-all duration-200 hover:-translate-y-0.5 cursor-pointer text-sm leading-none ${
                        isSubmitting ? 'pointer-events-none opacity-50' : ''
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4.5 h-4.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Processing Custom Proposal...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit &amp; Send to WhatsApp</span>
                          <Send className="w-4.5 h-4.5 text-white" />
                        </>
                      )}
                    </a>

                    <p className="text-[10px] text-zinc-500 leading-relaxed font-mono mt-3 pl-1 max-w-lg block">
                      * In compliance with POPIA, Lifeline Communi-Care (Pty) Ltd. preserves all submitted variables in strict confidence. Submitting does not execute a binding contract or live EMS dispatch. If you have an active, life-threatening emergency, please dial emergency services immediately.
                    </p>
                  </div>

                </motion.form>
              ) : (
                <motion.div
                  key="success-form"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="space-y-6 text-center py-6 max-w-xl mx-auto font-sans"
                >
                  <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center text-green-600 mx-auto border-2 border-green-200 shadow-sm animate-bounce">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="font-display font-extrabold text-xl sm:text-2xl text-brand-blue tracking-tight">
                      Inquiry Dispatched Successfully!
                    </h3>
                    <p className="text-zinc-650 text-xs leading-relaxed max-w-md mx-auto">
                      Thank you for contacting Lifeline Communi-Care (Pty) Ltd. Your formal emergency awareness coordinates and variables have been received.
                    </p>
                  </div>

                  {/* WhatsApp Direct Dispatch Card */}
                  <div className="bg-[#25D366]/5 border border-[#25D366]/20 rounded-2xl p-5 text-left space-y-3 max-w-xl mx-auto shadow-sm">
                    <div className="flex items-center space-x-2 text-[#25D366] font-mono text-[11px] font-bold uppercase tracking-wider">
                      <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#128C7E] opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#25D366]"></span>
                      </span>
                      <span>Instant WhatsApp Dispatch</span>
                    </div>
                    <p className="text-zinc-700 text-xs leading-relaxed">
                      All inquiries are automatically sent straight to our WhatsApp desk at <strong className="text-zinc-900">+27 74 841 0771</strong>. If the chat window did not open, click the button below to initiate.
                    </p>
                    {submittedWhatsappUrl && (
                      <a
                        href={submittedWhatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center space-x-2 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold px-6 py-3.5 rounded-xl transition-all duration-250 w-full text-center text-sm shadow-md shadow-[#25D366]/10 hover:shadow-[#25D366]/20 cursor-pointer"
                      >
                        <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.35-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.703 1.458h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413" />
                        </svg>
                        <span>Send via WhatsApp</span>
                      </a>
                    )}
                  </div>

                  <div className="p-4 bg-zinc-50 border border-zinc-150 rounded-xl space-y-2 text-[11px] leading-relaxed text-zinc-500 text-left">
                    <span className="font-bold text-zinc-700 uppercase block tracking-wider font-mono">NEXT ACTION SCHEDULE:</span>
                    <p className="m-0">&bull; Lead Instructor Robbie or the logistics dispatcher will study your inquiry coordinates and reach back to you directly.</p>
                  </div>

                  <button
                    onClick={() => {
                      setIsSuccess(false);
                      setPreviewEmail(null);
                    }}
                    className="inline-flex items-center space-x-2 text-brand-red hover:text-brand-red/80 text-xs font-mono font-bold uppercase transition-colors pt-2 cursor-pointer"
                  >
                    <span>Submit another secure ticket</span>
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

        </div>

      </div>
    </section>
  );
}
