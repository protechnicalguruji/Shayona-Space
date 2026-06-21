import { Service, ChooseUsReason, Testimonial, ProcessStep } from '../types';

export interface Project {
  id: string;
  name: string;
  location: string;
  category: string;
  image: string;
  description: string;
  area: string;
  year: string;
}

export const LUXURY_STATS = [
  { value: "20+", label: "Years Experience", numeric: 20 },
  { value: "500+", label: "Projects Delivered", numeric: 500 },
  { value: "98%", label: "Client Satisfaction", numeric: 98 },
  { value: "50+", label: "Design Experts", numeric: 50 }
];

export const PROJECTS: Project[] = [
  {
    id: "proj-1",
    name: "The Obsidian Villa",
    location: "Zurich, Switzerland",
    category: "Architecture",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    description: "A bold brutalist concrete structure with floor-to-ceiling smart glass integration, projecting over Lake Zurich with custom obsidian steel frames.",
    area: "8,500 sq. ft.",
    year: "2025"
  },
  {
    id: "proj-2",
    name: "Aura Coastal Pavilion",
    location: "Malibu, California",
    category: "Architecture & Interior",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    description: "An ultra-minimal seaside home mimicking ocean waves. Crafted with white Jura limestone, white oak woodwork, and saltwater infinity pools.",
    area: "12,200 sq. ft.",
    year: "2024"
  },
  {
    id: "proj-3",
    name: "The Amber Lounge",
    location: "Paris, France",
    category: "Interior Design",
    image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80",
    description: "A luxury private salon dressed in bespoke brushed bronze panels, hand-woven silk wallpapers, and custom Italian marble furniture.",
    area: "3,400 sq. ft.",
    year: "2025"
  },
  {
    id: "proj-4",
    name: "Kyoto Serenity Estate",
    location: "Kyoto, Japan",
    category: "Landscape & Architecture",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    description: "A modern timber home paying homage to traditional Japanese woodworking, integrating outdoor moss gardens, hot spring baths, and maple decks.",
    area: "6,800 sq. ft.",
    year: "2023"
  },
  {
    id: "proj-5",
    name: "The Dunes Retreat",
    location: "Dubai, UAE",
    category: "Turnkey Construction",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80",
    description: "A sculptural sandstone mansion mirroring desert dunes. Created with rammed earth techniques, passive thermal cooling, and dynamic skylights.",
    area: "16,500 sq. ft.",
    year: "2024"
  },
  {
    id: "proj-6",
    name: "Monaco Penthouse",
    location: "Monte Carlo, Monaco",
    category: "Interior Design",
    image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=80",
    description: "High-altitude luxury apartment. Exquisite double-height living room featuring custom gold pendant structures, white Calacatta marble, and private yacht pier views.",
    area: "5,100 sq. ft.",
    year: "2025"
  }
];

export const SERVICES: Service[] = [
  {
    id: "serv-1",
    title: "Architecture",
    subtitle: "Prestige Structural Masterpieces",
    description: "We conceive iconic elevations, state-of-the-art structural masterplans, and context-bound forms that marry modern minimalism with eternal grandeur.",
    details: [
      "Bespoke residential estate plans",
      "Biophilic and passive energy architectural flows",
      "3D structural modeling & immersive Virtual Reality flythroughs",
      "Premium materials selection"
    ],
    iconName: "Compass"
  },
  {
    id: "serv-2",
    title: "Interior Design",
    subtitle: "Immersive Tactile Luxury",
    description: "Every surface is dialed. We design bespoke millwork, curated custom furniture, and tailored lighting plans that turn interior volumes into living art.",
    details: [
      "Custom marble, timber & steel millwork curation",
      "Global art, textiles, and lighting sourcing",
      "Space programming & sensory design flow",
      "Premium kitchen and wellness bathroom couture"
    ],
    iconName: "Palette"
  },
  {
    id: "serv-3",
    title: "Construction",
    subtitle: "Precision Engineering & Execution",
    description: "Our world-class construction engineers operate with surgical precision, executing drawings down to the millimeter using extreme quality assurance metrics.",
    details: [
      "Millimeter-precision engineering supervision",
      "Advanced acoustic, structural, and thermal sealants",
      "Clean-site policy with sustainable building techniques",
      "Rigorous heavy safety design standards"
    ],
    iconName: "Hammer"
  },
  {
    id: "serv-4",
    title: "Turnkey Solutions",
    subtitle: "Total Conception to Key Handover",
    description: "A completely seamless, direct experience. From original blueprint sketches and site zoning right down to curated fine cutlery in drawers.",
    details: [
      "Single point of absolute project accountability",
      "Coordination of civil, mechanical, structural and interior teams",
      "White-glove styling, ready for immediate occupation",
      "Comprehensive digital manuals & custom smart house control setup"
    ],
    iconName: "Layers"
  },
  {
    id: "serv-5",
    title: "Renovation",
    subtitle: "Heritage Modernization",
    description: "Breathing new luxury life into legendary legacy structures, modernizing layout and infrastructure while honoring historic proportions.",
    details: [
      "Careful structural reinforcement & space restructuring",
      "Integration of invisible smart HVAC and climate zones",
      "Preservation of historic textures with modern material pairings",
      "Acoustic and thermal shell upgrades"
    ],
    iconName: "RotateCw"
  },
  {
    id: "serv-6",
    title: "Landscape Design",
    subtitle: "Harmonizing Architecture & Nature",
    description: "Visual extensions of the indoor luxury. We craft sculpted outdoor living pavilions, infinity pools, water accents, and exotic botanical gardens.",
    details: [
      "Panoramic infinity pool and beach layouts",
      "Sculpted stone walkways and private outdoor firepits",
      "Native, mature botanical specification and selection",
      "Ambient luxury landscape evening lighting schedules"
    ],
    iconName: "Flower"
  }
];

export const CHOOSE_US_REASONS: ChooseUsReason[] = [
  {
    id: "why-1",
    title: "Premium Materials",
    description: "We source Rare Calacatta gold marble, reclaimed French white oak, ultra-clear low-iron glass, and marine-grade brushed titanium directly from elite global suppliers.",
    iconName: "Gem"
  },
  {
    id: "why-2",
    title: "Expert Team",
    description: "Our roster comprises award-winning architects, interior curators, and master craftsmen who have led legendary builds across Zurich, London, and Malibu.",
    iconName: "Award"
  },
  {
    id: "why-3",
    title: "Creative Designs",
    description: "We reject typical template layouts. We conceptualize brave, fluid structures tailored strictly to your private narrative, lighting desires, and land topography.",
    iconName: "Sparkles"
  },
  {
    id: "why-4",
    title: "Transparent Process",
    description: "Stay fully aligned via our high-definition real-time digital portal, offering crystal transparent costs sheets, schedules, and live high-res camera updates.",
    iconName: "Eye"
  },
  {
    id: "why-5",
    title: "Timely Delivery",
    description: "Using advanced staging algorithms and seamless site coordination, we maintain a flawless track record of delivering iconic spaces exactly on schedule.",
    iconName: "Clock"
  },
  {
    id: "why-6",
    title: "Customer Satisfaction",
    description: "We maintain a signature elite post-handover warranty, offering 5-year proactive structural reviews and an on-call estate concierge for ultimate peace of mind.",
    iconName: "Heart"
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "Consultation",
    subtitle: "Vision Extraction & Site Audit",
    description: "An intimate, private session to dive deep into your lifestyle, spatial aspirations, aesthetic leanings, and site characteristics. We extract the intangible desires to construct a conceptual brief."
  },
  {
    step: "02",
    title: "Planning",
    subtitle: "Zoning, Feasibility & Budgets",
    description: "We examine topography, path of the sun, local building codes, and structural challenges. Detailed initial budgets and phases are established with ultimate financial transparency."
  },
  {
    step: "03",
    title: "Design",
    subtitle: "Artistry, Schematics & VR Renders",
    description: "Our artisans sketch the envelope, model the interiors, and render raw materials. You explore your future home in full scale using 3D VR environment setups before any physical action."
  },
  {
    step: "04",
    title: "Execution",
    subtitle: "Master Craftsmanship in Motion",
    description: "Structures arise with engineering perfection. Master carpenters, masonry experts, and automation engineers work in symphony under our dedicated multi-tier luxury project manager."
  },
  {
    step: "05",
    title: "Delivery",
    subtitle: "Curated Handover & Fine Polishing",
    description: "Deep detail polishing, fine furniture styling, acoustic tuning, and smart systems setup. We hand you the gold key to your fully ready-to-live world-class architectural masterpiece."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    name: "Alister Sterling",
    profession: "Creative Director",
    company: "Apex Media Group",
    review: "Aura's execution is truly beyond standard terminology. They didn't just build a home; they designed an unfolding sensory narrative. The way natural light shifts across the concrete walls of my villa is sheer genius.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80"
  },
  {
    id: "test-2",
    name: "Helena Rostova",
    profession: "Tech Founder",
    company: "Veritas AI",
    review: "The transparent digital portal gave me complete security throughout the build. Every invoice was traceable, and the construction team worked with clockwork timing. Their premium materials curation is jaw-dropping.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&h=200&q=80"
  },
  {
    id: "test-3",
    name: "Dr. Julian Vance",
    profession: "Art Collector",
    company: "Vance Gallery",
    review: "As an art collector, my home needed to showcase sculpture and handle climate precisely. Aura collaborated with me to engineer the invisible museum-grade HVAC and the most elegant trackless gallery lighting.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&h=200&q=80"
  }
];
