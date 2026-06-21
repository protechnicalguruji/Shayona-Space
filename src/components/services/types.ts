import React from 'react';

export interface ServiceDetail {
  overview: string;
  whoItIsFor: string;
  benefits: string[];
  deliverables: string[];
  process: string[];
  timeline: string;
  techAndMethods: string[];
  beforeImgUrl?: string;
  afterImgUrl?: string;
  customFaq: Array<{ q: string; a: string }>;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  iconName: string; // matches lucide icon name or preset
  imageUrl: string;
  category: 'core' | 'specialized' | 'management';
  details: ServiceDetail;
}

export interface ComparisonRow {
  serviceName: string;
  suitableFor: string;
  timeline: string;
  customization: string;
  complexity: string;
  maintenance: string;
  scale: string;
  budgetRange: string;
}

export interface GalleryProject {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  location: string;
  highlights: string[];
}
