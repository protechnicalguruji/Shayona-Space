export interface ProjectSpecification {
  area: string;
  bedrooms?: string;
  bathrooms?: string;
  floors?: string;
  parking?: string;
  constructionType: string;
  materialsUsed: string[];
  completionTime: string;
}

export interface ProjectTimelineStage {
  phase: string;
  title: string;
  date: string;
  description: string;
}

export interface ProjectTestimonial {
  clientName: string;
  clientPhoto: string;
  rating: number;
  review: string;
}

export interface Project {
  id: string;
  name: string;
  category: string;
  location: string;
  year: string;
  coverImage: string;
  image: string; // Backwards compatibility fallback for older imports
  galleryImages: string[];
  beforeImage: string;
  afterImage: string;
  shortDescription: string;
  overviewDescription: string;
  challenges: string;
  solutions: string;
  finalOutcome: string;
  videoUrl?: string; // Cinematic embedded video
  specifications: ProjectSpecification;
  timeline: ProjectTimelineStage[];
  testimonial: ProjectTestimonial;
  featured?: boolean;
  
  description?: string;
  area?: string;
}

export interface Service {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  details: string[];
  iconName: string;
}

export interface ChooseUsReason {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  profession: string;
  company: string;
  review: string;
  rating: number;
  image: string;
}
