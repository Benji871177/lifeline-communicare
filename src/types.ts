/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type PageId = 'home' | 'about' | 'services' | 'solutions' | 'contact' | 'sponsorship' | 'preparedness';

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageUrl?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  benefits: string[];
  iconName: string;
  numberLabel: string;
}

export interface ProductItem {
  id: string;
  category: 'kits' | 'consumables' | 'equipment';
  name: string;
  description: string;
  specifications: string[];
  highlights: string[];
  imageName: string;
}

export interface ContactSubmission {
  fullName: string;
  email: string;
  phoneNumber: string;
  companyName: string;
  subject: string;
  message: string;
}

export interface EmergencyActionGuide {
  id: string;
  title: string;
  symptom: string;
  steps: string[];
  notes: string;
}
