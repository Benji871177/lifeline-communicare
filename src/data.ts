/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ServiceItem, ProductItem, TeamMember, EmergencyActionGuide } from './types';

export const COMPANY_DETAILS = {
  name: 'Lifeline Communi-Care (Pty) Ltd',
  registrationNum: '2026 / 403127 / 07',
  slogan: 'BE AWARE. BE PREPARED. SAVE LIVES.',
  primaryContactName: 'Robbie',
  phonePrimary: '074 841 0771',
  phoneAlternate: '062 959 0426',
  emailPrimary: 'info@lifelinecommunicare.co.za',
  website: 'www.lifelinecommunicare.co.za',
  region: 'Cape Town & surrounding Western Cape communities, South Africa',
  quote: 'Committed to saving lives through knowledge and action.',
  noMedicalBackgroundText: 'NO MEDICAL BACKGROUND REQUIRED! Anyone can learn. Everyone can help. You can save a life.'
};

export const CORE_PILLARS = [
  {
    id: 'awareness',
    title: 'AWARENESS',
    description: 'Empowering local communities & workplaces through emergency identification and knowledge.',
    icon: 'Eye'
  },
  {
    id: 'preparedness',
    title: 'PREPAREDNESS',
    description: 'Equipping environments with first response logistics, custom learning sessions, and ready-to-use tools.',
    icon: 'ShieldAlert'
  },
  {
    id: 'response',
    title: 'RESPONSE',
    description: 'Developing rapid muscle memory skills to confidently neutralize sudden threat situations.',
    icon: 'Activity'
  },
  {
    id: 'savelives',
    title: 'SAVE LIVES',
    description: 'Uniting specialized resources and skilled citizens under the unified mission of preserving life.',
    icon: 'HeartHandshake'
  }
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'first-aid-training',
    numberLabel: '01',
    title: 'First Aid-Certified Level 1-3 Training',
    shortDescription: 'Community-driven emergency awareness plus formal certified Level 1 to 3 First Aid Training courses (T&Cs apply) tailored for schools, sports, neighbourhood watch, small businesses and corporate, and community groups.',
    fullDescription: 'Our Informational Community First Aid and certified programs provide crucial emergency wisdom and intuitive guidance directly to local centers, youth programs, church groups, and businesses. Along with our accessible, equipment-free informational sessions, we offer formal certified Level 1 to 3 First Aid Training courses (T&Cs apply) to equip your team with formal responder credentials.',
    benefits: [
      'Formal certified Level 1 to 3 First Aid Training courses (T&Cs apply)',
      'Tailored approach for schools, sports clubs, neighbourhood watches, small businesses, corporate, and congregations',
      'Accessible, pure informational sharing (infoshare) with no equipment required',
      'Hands-on CPR instruction and responsive community emergency orientation',
      'Encourages civic readiness, helping everyday community members save lives'
    ],
    iconName: 'GraduationCap'
  },
  {
    id: 'kits-supply-maintenance',
    numberLabel: '02',
    title: 'First Aid Kits: Supply & Support',
    shortDescription: 'Sourcing and delivery of first aid kits customized for schools, churches, and community spaces.',
    fullDescription: 'We supply premium first aid responder kits tailored for local environments. We support schools, churches, and youth programs using a friendly, practical approach to ensure they have fully stocked, ready-to-use kits for basic emergency and emergency guidance.',
    benefits: [
      'Top-standard emergency equipment designed for schools, churches, and local organizations',
      'Customized kit assembly tailored directly to your community needs',
      'Helpful routine replenishment assistance & expired-stock swaps',
      'Promotes safe civic readiness and everyday group preparedness standards'
    ],
    iconName: 'BriefcaseMedical'
  },
  {
    id: 'medical-consumables',
    numberLabel: '03',
    title: 'Medical Consumables Supply',
    shortDescription: 'Reliable sourcing and prompt delivery of general medical consumables for clinical environments.',
    fullDescription: 'We design complete supply lines for clinical, diagnostic, and private medical communities including General Practitioners (GPs), Dental Clinics, Family Healthcare centers, and corporate medical rooms.',
    benefits: [
      'Hygienic general disposables and clinical consumables',
      'Comprehensive clinic restock bundles for diagnostics & general medical suppliers',
      'Direct-to-facility prompt shipping and support services',
      'Strict quality assurance verification protocols for every item batch'
    ],
    iconName: 'PackageCheck'
  },
  {
    id: 'ems-career-talks',
    numberLabel: '04',
    title: 'Life Orientation & EMS Career Talks',
    shortDescription: 'Immersive talks designed to introduce educational institutes to Emergency Services pathways.',
    fullDescription: 'Our interactive Emergency Services informational lectures serve as career-orientated guidance models for academic networks. We introduce the core components, career stages, structural demands, and immense rewards of the EMS world.',
    benefits: [
      'Interactive presentations with helpful lifesaving guidance demonstrations',
      'Clear vocational roadmap outlines for future paramedic and career paths',
      'Real-world community emergency case discussions for schools and community centers',
      'Engaging discussions on civic empathy, voluntary rescue corps, and community contribution'
    ],
    iconName: 'UsersRound'
  }
];

export const PRODUCTS_DATA: ProductItem[] = [
  {
    id: 'pro-workplace-kit',
    category: 'kits',
    name: 'Standard Community First Aid Kit',
    description: 'A clean, compact kit with essential supplies, perfect for school classrooms, church halls, and small community groups.',
    specifications: [
      'Basic triangular bandages, gauze pads, and sterile dressings',
      'Simple, easy-to-read emergency instructions card',
      'Compact, lightweight case that stands out clearly'
    ],
    highlights: [],
    imageName: 'industrial_kit'
  },
  {
    id: 'tactical-trauma-bag',
    category: 'kits',
    name: 'Grab-and-Go Emergency Bag',
    description: 'A travel-friendly, lightweight emergency bag with a shoulder strap. Designed to be grabbed instantly for any minor classroom, outdoor, or community incident.',
    specifications: [
      'Essential conforming bandages, trauma shears, and plasters',
      'Compact water-resistant soft shell with comfortable handles',
      'Transparent inside pouches for quick identification of items'
    ],
    highlights: [],
    imageName: 'trauma_bag'
  },
  {
    id: 'sterile-consumables-pack',
    category: 'consumables',
    name: 'Clinical Restock & Practitioner Pack',
    description: 'Sourced specifically to meet the high-standard requirements of doctors, nurses, and general medical practices. Premium sterile supplies perfect for restocking diagnostic clinics and nursing bag essentials.',
    specifications: [
      'Premium individually wrapped sterile gauze swabs & clinical-grade adhesive tapes',
      'High-grade conforming bandages, skin-prep antiseptic wipes, and wound dressings',
      'Excellent quality hypoallergenic materials and comfortable examination gloves'
    ],
    highlights: [],
    imageName: 'consumables_pack'
  }
];

export const EMERGENCY_GUIDES: EmergencyActionGuide[] = [
  {
    id: 'cpr-adult',
    title: 'Cardiopulmonary Resuscitation (CPR)',
    symptom: 'Patient is unresponsive, is not breathing normally, or is breathing in irregular agonal gasps.',
    steps: [
      'Confirm scene is safe first to prevent placing yourself in immediate danger.',
      'Tap patient loudly on shoulders and shout "Are you okay?" to confirm lack of response.',
      'Shout for help, call emergency dispatchers, and locate an Automated External Defibrillator (AED) immediately.',
      'Begin chest compressions immediately: Place the heel of one hand in the center of the chest, interlock other hand over it.',
      'Push hard and fast: Aim for 100 to 120 compressions per minute at a depth of 5 to 6 cm (approx. 2 inches). Use your body weight.',
      'Combine: 30 deep compressions followed by 2 quick rescue breaths (if trained and comfortable doing so). Repeat continuously until advanced EMS arrives.'
    ],
    notes: 'Remember the acronym C-A-B: Compressions, Airway, Breathing. Continuous high-quality chest compressions are vital.'
  },
  {
    id: 'severe-bleeding',
    title: 'Severe Arterial or Venous Bleeding',
    symptom: 'Rapid, spurting or continuous major pooling of blood from an external puncture or laceration.',
    steps: [
      'Put on protective medical gloves if available to avoid fluid transmission.',
      'Identify the exact source. Apply firm, immediate direct pressure to the wound using a clean sterile bandage or cloth.',
      'Have the patient lie flat. If bleeding persists, apply additional pads over the original block—do not remove the bottom dressing as it disrupts clotting.',
      'If bleeding does not control via direct pressure and is on a limb, deploy a legal windlass Tourniquet high and tight above the wound (approx. 5-7cm). Secure time tag.',
      'Ensure the patient remains warm, calm, and treated for potential shock (elevate legs if safe).'
    ],
    notes: 'Prioritize tourniquet use on extreme limb bleeds if physical compression fails. Never apply a tourniquet directly on a joint.'
  },
  {
    id: 'choking-adult',
    title: 'Severe Airway Obstruction (Choking)',
    symptom: 'Patient cannot speak, has a weak high-pitched cough, starts turning blue, or holds their throat frantically.',
    steps: [
      'Stand immediately behind the patient, wrap your arms around their waist, and lean their torso slightly forward.',
      'Make a tight fist with one hand and place the thumb side of your fist just above their navel (belly button), safely below the ribcage.',
      'Grasp your fist with your other hand and press into their abdomen with a quick, hard, inward and upward thrust.',
      'Repeat these rapid abdominal thrusts (the Heimlich Maneuver) until the obstructing object is ejected or the patient becomes unresponsive.',
      'If the patient falls unconscious, gently lower them to the ground, call emergency services, and initiate standard CPR steps immediately.'
    ],
    notes: 'Do not attempt a blind finger sweep of the throat as this risks pushing the object deeper into the narrow trachea.'
  }
];
