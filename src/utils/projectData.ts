import { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: 'elysian-villa',
    name: 'Elysian Heights Villa',
    category: 'Villa',
    location: 'Monaco Peninsula',
    year: '2025',
    coverImage: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1200&h=800',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1200&h=800',
    galleryImages: [
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1200&h=800',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200&h=800',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1200&h=800',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200&h=800'
    ],
    beforeImage: 'https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&q=80&w=1200&h=800',
    afterImage: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1200&h=800',
    shortDescription: 'An ultra-minimalist cliffside masterpiece defining coastal prestige containing state-of-the-art automation and infinity structural horizons.',
    overviewDescription: 'Perched on the rugged cliffs of Monaco, the Elysian Heights Villa is a triumph of contemporary architecture. The project seamlessly integrates raw stone with massive glass plates that reflect the Mediterranean Sea. The interior design maximizes spatial freedom, featuring suspended living volumes, an infinity-edge pool that vanishes into the horizon, and fully bespoke Italian limestone styling.',
    challenges: 'The cliffside topography presented significant structural engineering concerns. Traditional anchoring threatened the bedrock stability, and high seismic and coastal gale winds demanded extreme structural reinforced concrete resilience without compromising the open, transparent, minimalist beauty.',
    solutions: 'Our engineering team devised a state-of-the-art dual-cantilevered load distribution foundation anchored with multi-strand passive steel tension rods sunk deep into the granite bedrock. To maximize wind load resilience, we utilized custom triple-glazed, structural glass walls engineered specifically for marine gales, boasting ultra-narrow, hidden titanium framing.',
    finalOutcome: 'A spectacular luxury landmark that rises organically from the Monegasque landscape. Total architectural fluidity. The residence achieves perfect carbon neutrality through passive solar insulation and subterranean geothermal circulation.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    specifications: {
      area: '12,500 sq ft',
      bedrooms: '6 suites',
      bathrooms: '8 baths',
      floors: '3 levels',
      parking: 'Subterranean 8-car gallery',
      constructionType: 'Cantilevered Reinforced Concrete & Structural Glass',
      materialsUsed: ['Smeralda Quartzite', 'Carrara Marble', 'Titanium Glazing Profiles', 'Brushed Teakwood'],
      completionTime: '22 Months'
    },
    timeline: [
      { phase: 'Phase 1', title: 'Planning & Permitting', date: 'March 2023', description: 'Geotechnical bedrock diagnostics, environmental coastal assessments, and structural cantilever engineering approvals.' },
      { phase: 'Phase 2', title: 'Sub-Structural Foundation', date: 'October 2023', description: 'Bedrock drilling, anchoring of high-tension passive rod systems, and initial lower levels casting.' },
      { phase: 'Phase 3', title: 'Superstructure & Glazing', date: 'July 2024', description: 'Installation of high-grade triple-pane dual-frame custom glass walls and cantilever alignment checks.' },
      { phase: 'Phase 4', title: 'Bespoke Fit-out & Handover', date: 'December 2024', description: 'Interior curation, smart automation configuration, lighting sculpture installation, and exclusive handoff.' }
    ],
    testimonial: {
      clientName: 'Alexander Sinclair',
      clientPhoto: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300&h=300',
      rating: 5,
      review: "Vanguard surpassed all reasonable expectations. Truly an elite service model, their architectural execution and sensitivity to material authenticity transformed our vision into an incredible, breathtaking masterpiece."
    },
    featured: true
  },
  {
    id: 'aether-hub',
    name: 'Aether Commercial HQ',
    category: 'Commercial',
    location: 'Shibuya, Tokyo',
    year: '2024',
    coverImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200&h=800',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200&h=800',
    galleryImages: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200&h=800',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200&h=800',
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1200&h=800'
    ],
    beforeImage: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=1200&h=800',
    afterImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200&h=800',
    shortDescription: 'A biophilic financial headquarters blending industrial steel lines with sweeping internal Japanese maple garden atriums.',
    overviewDescription: 'Located in Tokyo, the Aether Commercial HQ is a multi-story workspace designed for a premiere investment fund. The concept marries the high-octane modern corporate lifestyle with tranquil traditional Japanese gardens, housing a massive 4-story open atrium that circulates native vegetation, daylighting, and natural ventilation.',
    challenges: 'Designing a wide open-span central atrium in Tokyo requires severe seismic dampening. Standard structural bracing would disrupt the visual serenity of the interior landscape and obstruct natural light.',
    solutions: 'We implemented active seismic tuned mass dampers integrated directly inside the top level structure, counterbalancing drift. The perimeter columns utilize high-strength, structural steel alloy columns with internal thermal water loops.',
    finalOutcome: 'The world’s leading model of seismic corporate design and biophilic sustainability, achieving dual WELL Platinum and LEED Outstanding certifications.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    specifications: {
      area: '84,000 sq ft',
      floors: '12 levels',
      constructionType: 'High-Tensile Steel & Dampened Framed Glass',
      materialsUsed: ['Recycled Structural Alloy', 'Sugi Cedarwood', 'Acoustic Wool Paneling'],
      completionTime: '28 Months'
    },
    timeline: [
      { phase: 'Phase 1', title: 'Permits & Approvals', date: 'January 2022', description: 'Seismic reviews and environmental certifications.' },
      { phase: 'Phase 2', title: 'Excavation & Damper Sinking', date: 'June 2022', description: 'Laying the foundation with structural seismic isolate bearings.' },
      { phase: 'Phase 3', title: 'Atrium Frame Erection', date: 'April 2023', description: 'Assembly of the sweeping interior central space.' },
      { phase: 'Phase 4', title: 'Horticulture & Finishing', date: 'October 2024', description: 'Planting of mature species, air circulation fine-tuning.' }
    ],
    testimonial: {
      clientName: 'Hiroshi Tanaka',
      clientPhoto: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300&h=300',
      rating: 5,
      review: "Aether has redefined our corporate workflow. The biophilic design fosters an immense level of creative clarity while protecting our team with unmatched seismic performance."
    }
  },
  {
    id: 'obsidian-penthouse',
    name: 'The Obsidian Penthouse',
    category: 'Interior',
    location: 'Central Park South, NY',
    year: '2024',
    coverImage: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200&h=800',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200&h=800',
    galleryImages: [
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200&h=800',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1200&h=800',
      'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=1200&h=800'
    ],
    beforeImage: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?auto=format&fit=crop&q=80&w=1200&h=800',
    afterImage: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200&h=800',
    shortDescription: 'A dark-toned high-altitude residence optimized for twilight panoramic views and custom acoustic dampening.',
    overviewDescription: 'Sitting high above Central Park, this custom interior architecture project features a moody luxury material palette of dark charcoal fluted oak lining, brushed brass elements, and exotic Belgian black marble. Designed for an avid classical music epicurean, it includes an integrated high-fidelity acoustic performance parlor.',
    challenges: 'Fitting high-density acoustic isolation slabs while maintaining high ceilings on the 84th floor of an premium Manhattan tower without exceeding structural weight margins.',
    solutions: 'A floating floor solution combined with micro-porous acoustic backing composites that offer premium visual damping while reducing aggregate sound-conduction footprint.',
    finalOutcome: 'An ultra-quiet luxurious retreat and architectural gallery block high above the city noise, boasting world-leading panoramic vistas.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    specifications: {
      area: '4,800 sq ft',
      bedrooms: '3 master suites',
      bathrooms: '4.5 baths',
      floors: 'Penthouse level duplex',
      parking: 'Private elevator entrance',
      constructionType: 'Interior Space Renovation & Acoustic Re-engineering',
      materialsUsed: ['Belgian Black Marble', 'Brushed Walnut Planks', 'Fluted Charcoal Oak'],
      completionTime: '11 Months'
    },
    timeline: [
      { phase: 'Phase 1', title: 'Consultation & Acoustics Design', date: 'June 2023', description: 'Simulations of structural harmonic resonances.' },
      { phase: 'Phase 2', title: 'Demolition & Floating Subfloor', date: 'September 2023', description: 'Removing outdated structural elements and floating new isolative layers.' },
      { phase: 'Phase 3', title: 'Bespoke Panel Installation', date: 'January 2024', description: 'Fitting marble panels and acoustic oak elements.' },
      { phase: 'Phase 4', title: 'Acoustic Engineering Calibrations', date: 'May 2024', description: 'Sound testing on grand piano configurations.' }
    ],
    testimonial: {
      clientName: 'Julianne Vance',
      clientPhoto: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300&h=300',
      rating: 5,
      review: "A masterpiece of sensory isolation. The attention to acoustic precision and material dark luxury is unmatched."
    }
  },
  {
    id: 'vanguard-hq',
    name: 'Vanguard Headquarters',
    category: 'Office',
    location: 'Mayfair, London',
    year: '2025',
    coverImage: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=1200&h=800',
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=1200&h=800',
    galleryImages: [
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=1200&h=800',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200&h=800',
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1200&h=800'
    ],
    beforeImage: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=1200&h=800',
    afterImage: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=1200&h=800',
    shortDescription: 'Our private architecture headquarters, combining heritage Georgian exterior with ultra-modern glass interiors.',
    overviewDescription: 'Blending historic reverence with a design-forward workspace, the Vanguard London headquarters preserved the grade-II protected exterior while completely excising the core to accommodate state-of-the-art interactive modeling design labs and digital design galleries.',
    challenges: 'Strict historic preservation guidelines prevented any visible changes to the 18th-century facade, and load limits on aged masonry restricted interior restructuring properties.',
    solutions: 'Created an internal structural exoskeleton that supports the load entirely without loading historic facade elements. High-density steel beams were delicately fed through window corridors.',
    finalOutcome: 'A spectacular hybrid workspace combining classical grandeur and sophisticated modern architecture.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    specifications: {
      area: '15,000 sq ft',
      floors: '4 historic floors + glass skydeck',
      constructionType: 'Historic Façade Preservation & Structural Internal Exoskeleton',
      materialsUsed: ['Recycled Cast Iron', 'White Oak Parquet', 'Low-Iron Facet Glass'],
      completionTime: '18 Months'
    },
    timeline: [
      { phase: 'Phase 1', title: 'Historical Permitting & Scaffolding', date: 'January 2024', description: 'Facilitating approval workflows with local historical preservations groups.' },
      { phase: 'Phase 2', title: 'Facial Bracing & Core Demolition', date: 'May 2024', description: 'Securing structural historic walls and clearing interior framework.' },
      { phase: 'Phase 3', title: 'Internal Exoskeleton Assembly', date: 'October 2024', description: 'Lowering pre-manufactured framing lines.' },
      { phase: 'Phase 4', title: 'Interactive Studio Launch', date: 'May 2025', description: 'Premium lighting design installation and complete studio opening.' }
    ],
    testimonial: {
      clientName: 'Sir Reginald Thornton',
      clientPhoto: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300&h=300',
      rating: 5,
      review: "The design represents a triumphant compromise between Mayfair's historic past and a breathtaking, inspiring future."
    }
  },
  {
    id: 'serene-pavillion',
    name: 'The Kyoto Serene Pavilion',
    category: 'Renovation',
    location: 'Kyoto, Japan',
    year: '2023',
    coverImage: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=1200&h=800',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=1200&h=800',
    galleryImages: [
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=1200&h=800',
      'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=1200&h=800',
      'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&q=80&w=1200&h=800'
    ],
    beforeImage: 'https://images.unsplash.com/photo-1579721507534-89d435c59b90?auto=format&fit=crop&q=80&w=1200&h=800',
    afterImage: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=1200&h=800',
    shortDescription: 'Restoration of a historic 200-year-old Machiya townhouse incorporating modern luxury heating and premium architectural systems.',
    overviewDescription: 'This luxury renovation honors historical craftsmanship by preserving original hand-carved pillars and earthen plaster walls. At the same time, it transforms the core into an eco-friendly dwelling utilizing cutting-edge radiant wall systems and smart climate zones.',
    challenges: 'Preserving historic wooden columns damaged by humidity while keeping wood carpentry traditions active without altering structural load lines.',
    solutions: 'We partnered with veteran Kyoto carpenters (Miyadaiku) to cut damaged columns using precise puzzle-locked joining techniques and introduced subtle carbon-fiber cores within structural segments.',
    finalOutcome: 'An elite cultural bridge, preserving heritage in tandem with contemporary thermal design.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    specifications: {
      area: '3,800 sq ft',
      bedrooms: '2 tatami suites',
      bathrooms: '3 baths',
      floors: '2 levels',
      parking: 'Subtle side-lane charging port',
      constructionType: 'Machiya Preservation & Carbon Fiber Reinforcement',
      materialsUsed: ['Japanese Hinoki Cypress', 'Traditional Shikkui Plaster', 'Hand-hammered Copper'],
      completionTime: '15 Months'
    },
    timeline: [
      { phase: 'Phase 1', title: 'Historical Facade Restoration', date: 'February 2022', description: 'Restoration of intricate lattice-work.' },
      { phase: 'Phase 2', title: 'Foundation Stabilization', date: 'July 2022', description: 'Sinking moisture resistance moisture-barrier lines.' },
      { phase: 'Phase 3', title: 'Structural Joinery Repairs', date: 'December 2022', description: 'Hand-chiseling wood joinery using classic carpentry.' },
      { phase: 'Phase 4', title: 'Automation Installation', date: 'May 2023', description: 'Fitting subterranean climate controls.' }
    ],
    testimonial: {
      clientName: 'Rei Minamoto',
      clientPhoto: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=300&h=300',
      rating: 5,
      review: "A masterpiece of restoration. Our family enjoys custom digital air curation hidden beneath timeless hand-carved wooden floors."
    }
  },
  {
    id: 'monolith-villa',
    name: 'The Monolith Sky Villa',
    category: 'Luxury Homes',
    location: 'Aspen, Colorado',
    year: '2025',
    coverImage: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=1200&h=800',
    image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=1200&h=800',
    galleryImages: [
      'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=1200&h=800',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1200&h=800',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&q=80&w=1200&h=800'
    ],
    beforeImage: 'https://images.unsplash.com/photo-1481349518771-20055b2a7b24?auto=format&fit=crop&q=80&w=1200&h=800',
    afterImage: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=1200&h=800',
    shortDescription: 'A high-elevation alpine retreat with geometric concrete shapes, framing beautiful snowy vistas.',
    overviewDescription: 'Located in Aspen, this massive architectural project commands dramatic geometric presence against the mountains. The estate consists of three interlocking monolithic raw concrete structures designed to withstand heavy snow and subzero temperatures, while offering premium indoor spas and theater elements.',
    challenges: 'Subzero operational windows restricted concrete casting schedules. The remote location made raw materials transport difficult during peak winter blizzards.',
    solutions: 'We engineered pre-cast concrete structural panels off-site, transported them in modules during summer, and assembled them on-site using dual heavyweight hydraulic cranes.',
    finalOutcome: 'An elite fortress of extreme modernist grace, with floor-to-ceiling glass wrapping mountain peaks in panoramic views.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    specifications: {
      area: '14,200 sq ft',
      bedrooms: '5 bedrooms',
      bathrooms: '7 baths',
      floors: '2 sprawling levels',
      parking: 'Internal heated 4-car garage',
      constructionType: 'Pre-Cast Monolithic Architectural Concrete & Geothermal Core',
      materialsUsed: ['Acid-etched Grey Concrete', 'Darkened Stainless Steel', 'American Walnut'],
      completionTime: '24 Months'
    },
    timeline: [
      { phase: 'Phase 1', title: 'Mountain Permit Clearances', date: 'June 2023', description: 'Wildlife migration and heavy weather structural approvals.' },
      { phase: 'Phase 2', title: 'Excavation & Precast Dev', date: 'September 2023', description: 'Casting modules offsite under tight environmental controls.' },
      { phase: 'Phase 3', title: 'Heavy Crane Lift Assembly', date: 'July 2024', description: 'Assembling the concrete structure in 12 days.' },
      { phase: 'Phase 4', title: 'Thermal Inward Handover', date: 'March 2025', description: 'Thermal checks, floor heating integration, final luxury furnishings.' }
    ],
    testimonial: {
      clientName: 'Julian & Sarah Sterling',
      clientPhoto: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&q=80&w=300&h=300',
      rating: 5,
      review: "A stark, beautiful concrete sanctuary. It handles the Aspen blizzard with warmth, grace, and unmatched modern geometric style."
    }
  }
];
