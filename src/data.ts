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
  emailAlternate: 'lifelinecommunicare@gmail.com',
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
    title: 'Informational Community First Aid',
    shortDescription: 'Community-driven emergency awareness courses tailored for schools, churches, local businesses, and youth programs. An accessible, equipment-free informational share.',
    fullDescription: 'Our Informational Community First Aid programs provide crucial emergency wisdom and intuitive guidance directly to local centers, youth programs, church groups, and businesses. We focus on an equipment-free, practical "infoshare" approach that removes barriers to entry, giving everyone the confidence to step up and preserve lives.',
    benefits: [
      'Tailored approach for schools, churches, local businesses, and youth networks',
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
    title: 'Medical Consumables & Equipment Supply',
    shortDescription: 'Industrial sourcing and prompt delivery of sterile general medical consumables for clinical environments.',
    fullDescription: 'We design complete supply lines for clinical, diagnostic, and private medical communities including General Practitioners (GPs), Dental Clinics, Family Healthcare centers, and corporate medical rooms.',
    benefits: [
      'Surgical-grade equipment and hygienic disposables',
      'Comprehensive clinic restock bundles for diagnostics & sterile dressings',
      'Direct-to-facility prompt shipping and support services',
      'Strict quality assurance verification protocols for every item batch'
    ],
    iconName: 'PackageCheck'
  },
  {
    id: 'ems-career-talks',
    numberLabel: '04',
    title: 'Life Orientation & EMS Career Talks',
    shortDescription: 'Immersive talks designed to introduce educational institutes to Emergency Medical Services pathways.',
    fullDescription: 'Our interactive Emergency Medical Services informational lectures serve as career-orientated guidance models for academic networks. We introduce the core components, career stages, structural demands, and immense rewards of the EMS world.',
    benefits: [
      'Interactive presentations with helpful lifesaving guidance demonstrations',
      'Clear vocational roadmap outlines for future paramedic or trauma specialists',
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
    name: 'Comprehensive Everyday First Aid Kit (Wall-Mounted & Mobile)',
    description: 'Heavy-duty steel or durable ABS case containing comprehensive components designed for school halls, youth groups, and local gathering spots.',
    specifications: [
      'Includes triangular bandages, Gauze Swabs, CPR mouthpieces, and sterile dressings',
      'Pre-labeled compartments with friendly emergency instructions inside',
      'Fully stocked with clean, simple, easy-to-read emergency guidelines',
      'Features high-visibility retroreflective friendly signage'
    ],
    highlights: [
      'Weatherproof rubber seals',
      'Quick-release bracket included',
      'Easy-access latches'
    ],
    imageName: 'industrial_kit'
  },
  {
    id: 'tactical-trauma-bag',
    category: 'kits',
    name: 'Advanced Outdoors & Active Responder Bag',
    description: 'Designed specifically for active programs, sporting groups, youth camps, and rugged outdoor adventures.',
    specifications: [
      'Reinforced water-resistant tear-stop shell with comfort harness',
      'Supplied with trauma shears, skin-prep supplies, eye washes, and space blankets',
      'Individual quick-pull zip pouches for modular responder sections',
      'Padded layout structure for safe and orderly gear storage'
    ],
    highlights: [
      'Heavy-duty physical handles',
      'Modular webbing arrays',
      'Waterproof internal liners'
    ],
    imageName: 'trauma_bag'
  },
  {
    id: 'sterile-consumables-pack',
    category: 'consumables',
    name: 'Consumables Restock Bundle (Community & Workspace)',
    description: 'Perfect for local classrooms, church halls, recreational centers, and friendly group emergency support.',
    specifications: [
      '100x Non-woven swabs & clean medical-grade tape rolls',
      'Professional conforming bandages & skin-prep protective wipes',
      'Diverse adhesive plaster sets & sterile vinyl gloves sets',
      'Disposable medical waste safe bags'
    ],
    highlights: [
      'Individually sterile sealed',
      'Pure professional grade',
      'Eco-friendly packaging'
    ],
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
