import { ServiceItem, ComparisonRow, GalleryProject } from './types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'architecture',
    title: 'Architecture Design',
    shortDesc: 'Sculpting timeless structural layouts using passive energy grids and modern, light-filled spatial profiles.',
    iconName: 'Compass',
    category: 'core',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800',
    details: {
      overview: 'Our architectural practice is rooted in modern spatial sculpture and high-altitude durability. We blend the natural contours of your topography with sustainable raw limestone, premium structural glass, and balanced negative space.',
      whoItIsFor: 'Private landowners, institution leaders, and estate collectors seeking a unique, custom-engineered signature address.',
      benefits: [
        'Passive solar integration reducing temperature energy dependency by up to 35%',
        'Seismic-certified baseline foundation drawings with dual-cantilever columns',
        'Direct co-collaboration with award-winning master architects'
      ],
      deliverables: [
        '3D BIM (Building Information Modeling) project package',
        'Regulatory municipal authorization blueprinted files',
        'Full physical materials sample board (custom stones, metals)'
      ],
      process: [
        'Geodetic slope diagnostics & solar mapping',
        'Schematic design drafting & light analysis',
        'Finished blueprint construction package execution'
      ],
      timeline: '4 - 8 Months',
      techAndMethods: ['Autodesk Revit BIM', 'Lumion Panoramic Renders', 'High-Tensile Steel Framing'],
      beforeImgUrl: 'https://images.unsplash.com/photo-1504297050568-910d24c426d3?auto=format&fit=crop&q=80&w=600',
      afterImgUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=600',
      customFaq: [
        { q: 'Do you manage initial geotechnical studies?', a: 'Yes, we handle complete land soil parsing, wind velocity tests, and rock integrity assessments before drawing layouts.' },
        { q: 'Can we request certified eco-passive certification?', a: 'Yes, we are LEED Gold and WELL Building certified practitioners.' }
      ]
    }
  },
  {
    id: 'interior-design',
    title: 'Interior Design',
    shortDesc: 'Curating absolute sensory experiences with bespoke marble joinery, custom textiles, and ambient luminescent layers.',
    iconName: 'Sparkles',
    category: 'core',
    imageUrl: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=800',
    details: {
      overview: 'We treat interior spaces as a silent language of luxury. Our designers coordinate custom-crafted woodwork, hand-quarried Carrara stone slabs, and customized biophilic lighting grids to inspire immediate peace.',
      whoItIsFor: 'Discerning homeowners looking for custom interior refits, bespoke furnishings, and specialized space curation.',
      benefits: [
        'Direct partnerships with elite Italian artisan furniture mills',
        'Perfect acoustics planning for home theater and study zones',
        'Anti-allergenic timber coats and luxury toxin-free paints'
      ],
      deliverables: [
        'Spatial layout color sheets and mood boards',
        'Custom furniture detail blueprint directories',
        'Handpicked accessory, drapery, and art catalogs'
      ],
      process: [
        'Biophilic lighting and textile evaluation',
        'Custom marble millwork mapping and detailing',
        'On-site staging and custom framing installation'
      ],
      timeline: '3 - 6 Months',
      techAndMethods: ['3DS Max Spatial Mapping', 'Bespoke Italian joineries', 'Anisotropic acoustics panels'],
      beforeImgUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=600',
      afterImgUrl: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=600',
      customFaq: [
        { q: 'Are standard furnishings included in budget pricing?', a: 'We compile bespoke and designer loose-furniture logs as an adaptable component of your overall selections.' },
        { q: 'Can you customize walk-in humidifiers or wine vaults?', a: 'Absolutely, we specialize in high-end customized structural display cooling and safe climate vaults.' }
      ]
    }
  },
  {
    id: 'construction',
    title: 'Construction',
    shortDesc: 'Executing flawless structural building processes utilizing raw solid materials, precision tools, and master builders.',
    iconName: 'HardHat',
    category: 'core',
    imageUrl: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800',
    details: {
      overview: 'Our building team acts as the physical hands of our design desk. We enforce zero-margin tolerances, checking every concrete pour, steel joint tension, and structural thermal block for complete safety.',
      whoItIsFor: 'Clients holding pre-approved blueprints seeking premium-grade execution with zero-excuse technical delivery.',
      benefits: [
        'Direct single-point logistics responsibility',
        'Certified zero-accident construction processes on site',
        'High-density thermal framing certified to last past 150 years'
      ],
      deliverables: [
        'Weekly video & imagery construction status portal log',
        'Materials certification sheets (concrete testing proofs)',
        'Signed safety engineer compliance and handover binders'
      ],
      process: [
        'Site preparation, soil piling & foundation pour',
        'Advanced steel-stud framing and envelope proofing',
        'System integrations, detailed facades & key handoff'
      ],
      timeline: '12 - 24 Months',
      techAndMethods: ['High-Strength Carbon-Treated Concrete', 'Laser Alignment Systems', 'Rigorous Thermal Mapping'],
      beforeImgUrl: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=600',
      afterImgUrl: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=600',
      customFaq: [
        { q: 'How do you handle structural changes mid-build?', a: 'Any variation request is validated through our digital BIM database to recalculate load impacts before onsite action.' },
        { q: 'Do you manage construction noise zoning laws?', a: 'We strictly coordinate operational noise alerts and municipal guidelines with neighboring estates.' }
      ]
    }
  },
  {
    id: 'turnkey',
    title: 'Turnkey Projects',
    shortDesc: 'A unified single-source contract that covers early concept sketches up to the final key handoff, pristine and move-in ready.',
    iconName: 'Key',
    category: 'specialized',
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800',
    details: {
      overview: 'Our turnkey service gives you the absolute pinnacle of luxury: convenience. From initial sovereign planning permissions, utility piping layouts, interior staging, and selecting hand-sewn bed linens—we oversee every single micro-service.',
      whoItIsFor: 'International family offices, executives, and remote collectors wanting a masterpiece without the complexity of managing multiple vendors.',
      benefits: [
        'Single point of operational accountability representing zero vendor conflict',
        'Guaranteed absolute pricing with complete material transparency',
        'Finished spaces completely staged with private utility accounts active'
      ],
      deliverables: [
        'Complete spatial masterpiece completely cleaned and styled',
        'Pre-validated digital building systems tablet coordinates',
        'Complete operation schedules & direct helpline logins'
      ],
      process: [
        'Unified comprehensive project specifications mapping',
        'Pre-purchased materials, fabrication and structural logistics',
        'Pristine interior styling curation, system test, and final key turn'
      ],
      timeline: '14 - 28 Months',
      techAndMethods: ['Global Vendor Orchestration ERP', 'Acoustic-Thermal Integrity Scan', 'Active Concierge Handover'],
      beforeImgUrl: 'https://images.unsplash.com/photo-1531971589569-0d93700dab08?auto=format&fit=crop&q=80&w=600',
      afterImgUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=600',
      customFaq: [
        { q: 'What is our level of design control in turnkeys?', a: 'You maintain absolute visual veto power; we curate elite, pre-screened options for your immediate approval.' },
        { q: 'Are art pieces and design cutlery sourced?', a: 'Yes, if explicitly requested, down to specialized table designs and private security systems.' }
      ]
    }
  },
  {
    id: 'residential',
    title: 'Residential Projects',
    shortDesc: 'Crafting luxurious family legacies, private estates, and custom ocean-facing penthouses tailored to personal habits.',
    iconName: 'Home',
    category: 'specialized',
    imageUrl: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800',
    details: {
      overview: 'We build houses that grow into ancestral heirlooms. Residential drafting prioritizes emotional safety, family gathering scales, child-friendly edges, and spectacular framing of natural views.',
      whoItIsFor: 'Families looking to establish custom estates, vacation villas, or sophisticated high-rise penthouses.',
      benefits: [
        'Custom layout maps adjusted to family sleep & social habits',
        'Integrated state-of-the-art secure safe rooms and smart lockers',
        'Sustainable materials safe for multigenerational physical health'
      ],
      deliverables: [
        'High-resolution multi-view color elevation logs',
        'Bespoke kitchen, wardrobe & bathroom vanity details',
        'Exterior facades materials specification files'
      ],
      process: [
        'Family lifestyle vision diaries mapping',
        'Custom zoning and private-vs-public spatial split',
        'Premium masonry detail installation and custom finishes'
      ],
      timeline: '10 - 20 Months',
      techAndMethods: ['Ergonomic human-scale layouts', 'Custom acoustic damping', 'Natural-air convection channels'],
      beforeImgUrl: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=600',
      afterImgUrl: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=600',
      customFaq: [
        { q: 'Can we install customized modular wings for guests?', a: 'Absolutely. We specialize in designing modular annexes that maintain complete sound and thermal privacy.' },
        { q: 'How do you handle severe weatherproofing on oceans?', a: 'We specify thick double-glazed hurricane glass frames and marine-grade anti-corroding metal coatings.' }
      ]
    }
  },
  {
    id: 'commercial',
    title: 'Commercial Projects',
    shortDesc: 'Engineering high-prestige institutional workspaces, boutique flagship hotels, and elite galleries.',
    iconName: 'Building',
    category: 'specialized',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800',
    details: {
      overview: 'Your commercial headquarters represents your brand statement. We build highly operational, biophilic commercial spaces that increase employee productivity and command immediate market respect.',
      whoItIsFor: 'Luxury hospitality developers, private galleries, boutique brand headers, and high-growth technology corporations.',
      benefits: [
        'Optimized human flow paths reducing workspace transit fatigue',
        'Carbon-neutral energy footprints that elevate corporate ESG ratings',
        'Acoustics optimized for high-intensity presentation halls'
      ],
      deliverables: [
        'Commercial code compliance certificates',
        'High-density structural stress reports',
        'Bespoke lighting systems schedule maps'
      ],
      process: [
        'Operational efficiency and headcount analysis',
        'Brand integration concept sketches',
        'Phase-based rapid structural construction'
      ],
      timeline: '15 - 30 Months',
      techAndMethods: ['Smart automation building systems', 'BREEAM environmental ratings', 'High-traffic composite metals'],
      beforeImgUrl: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=600',
      afterImgUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=600',
      customFaq: [
        { q: 'Do you design with standard commercial codes globally?', a: 'Yes, we are licensed across main US, European, and Japanese commercial safety guidelines.' },
        { q: 'Do you support office cafeteria and utility zones?', a: 'Yes, we provide fully detailed kitchen plans and clean air mechanical loops.' }
      ]
    }
  },
  {
    id: 'villas',
    title: 'Luxury Villas',
    shortDesc: 'Detailing breathtaking private estates with cascading negative-edge pools and custom panoramic framing.',
    iconName: 'Sun',
    category: 'specialized',
    imageUrl: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=800',
    details: {
      overview: 'We treat villas as private islands of calm. Cascading infinity pools, glass perimeter doors that fully retract into stone walls, and expansive outdoor fire pavilions ensure a harmonious connection with nature.',
      whoItIsFor: 'High-net-worth families seeking elite holiday homes or private resort-style retreats.',
      benefits: [
        'Retractable glass screens merging exterior garden and indoor lounges',
        'Advanced natural breeze induction systems eliminating draft noise',
        'Custom infinity water systems integrated into active foundations'
      ],
      deliverables: [
        'Panoramic sun patterns and wind load studies',
        'External masonry and pool structural details',
        'Custom landscaping flora and exterior lighting mapping'
      ],
      process: [
        'Topography level grading & view angle capture',
        'Fluid water systems engineering & pool staging',
        'Bespoke limestone masonry cladding detailing'
      ],
      timeline: '12 - 22 Months',
      techAndMethods: ['Hidden drainage coordinates', 'Marine-grade concrete formulas', 'Anti-reflective glass panes'],
      beforeImgUrl: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80&w=600',
      afterImgUrl: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=600',
      customFaq: [
        { q: 'Can you construct on steep coastal cliffs?', a: 'Cliff architectural design using steel friction tension bars is one of our award-winning specialities.' },
        { q: 'How do you prevent pool evaporation or algae?', a: 'We fit automated solar-responsive chemical-free water purification systems directly.' }
      ]
    }
  },
  {
    id: 'offices',
    title: 'Office Interiors',
    shortDesc: 'Reimagining deep work environments using biophilic air sweeps, custom desks, and high-frequency acoustic shields.',
    iconName: 'Monitor',
    category: 'specialized',
    imageUrl: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800',
    details: {
      overview: 'We believe active work environments must be restorative. By matching circadian mood light changes, installing clean biological air sweeps, and custom-making organic wood workbenches, we create environments that inspire genius.',
      whoItIsFor: 'Corporate leaders, private funds, and elite creatives seeking peak-performance hubs.',
      benefits: [
        'Circadian-synchronized lighting increasing natural alertness by 40%',
        'Acoustic micro-zones supporting uninterrupted deep focus',
        'Biological air sweep systems with zero recirculated duct particles'
      ],
      deliverables: [
        'Acoustical isolation modeling mapping',
        'Circadian lighting sequence and integration blueprints',
        'Custom modular workbench joinery details'
      ],
      process: [
        'Cognitive focus and workflow tracking audits',
        'Acoustical shield and material mapping design',
        'Pristine technology wiring integration and setup'
      ],
      timeline: '2 - 5 Months',
      techAndMethods: ['WELL lighting benchmarks', 'Circadia LED drivers', 'Micro-perforated acoustic timber'],
      beforeImgUrl: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=600',
      afterImgUrl: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=600',
      customFaq: [
        { q: 'Do you support server room cabling & UPS setup?', a: 'Yes, we integrate concealed climate-controlled tech cases and clean-routing wires.' },
        { q: 'Can we configure height-adjustable custom wooden desks?', a: 'All desk surfaces are custom crafted from single logs with integrated power docks.' }
      ]
    }
  },
  {
    id: 'renovation',
    title: 'Renovation & Remodeling',
    shortDesc: 'Restoring historic facade structures while integrating modern structural foundations and smart utility grids.',
    iconName: 'RotateCcw',
    category: 'specialized',
    imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800',
    details: {
      overview: 'We honor heritage. Our preservation experts stabilize ancient foundations and restore original plaster designs, while hiding carbon-neutral heating lines, smart home wire channels, and structural support beams within.',
      whoItIsFor: 'Owners of historical estates, state-protected designs, or premium legacy assets requiring complete revitalization.',
      benefits: [
        'Maintains original cultural and municipal heritage value',
        'Structural stabilization for safety compliance',
        'Carbon footprint reduction of ancient systems up to 60%'
      ],
      deliverables: [
        'Historical preservation compliance files',
        'Detailed masonry decay mapping reports',
        'Structural steel-jacking and support blueprints'
      ],
      process: [
        'Historical archives study & non-invasive mapping',
        'Masonry stabilization and micro-cement injections',
        'Modern system routing and custom interior integration'
      ],
      timeline: '6 - 15 Months',
      techAndMethods: ['Carbon-fiber masonry wrapping', 'Laser cavity scanning', 'Traditional lime-wash mortars'],
      beforeImgUrl: 'https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&q=80&w=600',
      afterImgUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=600',
      customFaq: [
        { q: 'Can you work on listed Grade-I/II buildings?', a: 'Yes, we coordinate directly with historic preservation bodies and municipal councils.' },
        { q: 'Is it possible to enlarge historic window sizes?', a: 'We design bespoke load-bearing lintels to widen openings while preserving the exterior facade.' }
      ]
    }
  },
  {
    id: 'landscape',
    title: 'Landscape Design',
    shortDesc: 'Sculpting exterior biological sanctuaries using reflecting pools, native stones, and delicate shade structures.',
    iconName: 'Trees',
    category: 'specialized',
    imageUrl: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&q=80&w=800',
    details: {
      overview: 'We believe architecture does not end at the wall. Our landscape designers plot quiet reflecting pools, custom stone fire pavilions, and carefully selected native plant structures to create an immersive private oasis.',
      whoItIsFor: 'Estate owners wanting highly resolved exterior wellness layouts, gardens, and entertainment areas.',
      benefits: [
        'Self-cleaning biological pools that require zero chemical treatments',
        'Smart rain-responsive water recycling loops',
        'Atmospheric exterior path lighting integrated seamlessly into custom seating'
      ],
      deliverables: [
        'Landscape master planning and planting schemes',
        'Irrigation, grading & water-feature drainage maps',
        'Custom pavilion structural and material details'
      ],
      process: [
        'Flora mapping and sun path analysis',
        'Water-paving grading & water-feature modeling',
        'Limestone laying, specimen tree planting & path staging'
      ],
      timeline: '3 - 7 Months',
      techAndMethods: ['Biological self-filtering water', 'Nighttime architectural lighting', 'Drought-resilient native planting'],
      beforeImgUrl: 'https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?auto=format&fit=crop&q=80&w=600',
      afterImgUrl: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&q=80&w=600',
      customFaq: [
        { q: 'Does your layout support automatic maintenance?', a: 'Yes, we install fully automated biological water filtering and hidden lawn maintenance systems.' },
        { q: 'Can you draft custom outdoor kitchens?', a: 'Absolutely, down to integrated premium charcoal cooktops and granite bars.' }
      ]
    }
  },
  {
    id: 'space-planning',
    title: 'Space Planning',
    shortDesc: 'Analyzing human transit curves to optimize floor layouts, visual sight-lines, and light penetration.',
    iconName: 'Layout',
    category: 'management',
    imageUrl: 'https://images.unsplash.com/photo-1503174971373-b1f69850bded?auto=format&fit=crop&q=80&w=800',
    details: {
      overview: 'Space planning is the pure mathematical bones of good design. We study transit patterns, natural light penetration angles, and sightlines to ensure your layout feels balanced, open, and effortless.',
      whoItIsFor: 'Real estate developers or buyers looking for master layouts optimization before structural builds.',
      benefits: [
        'Eliminates lost square-footage and frustrating dead corners',
        'Maximizes natural daylight capture in key family zones',
        'Coordinates smooth and logical home movement patterns'
      ],
      deliverables: [
        'Detailed 2D human-flow and structural zoning schemes',
        'Precise window placement and sun-angle blueprints',
        'Multiple-choice interior partitioning option catalog'
      ],
      process: [
        'Aesthetic goal and spatial utility cataloging',
        'Human flow path modeling and window optimization',
        'Final division and structural wall coordinate mapping'
      ],
      timeline: '1 - 3 Months',
      techAndMethods: ['Dynamic Spatial Syntax Analyses', 'Circadian daylight tracking', 'Parametric flow algorithms'],
      beforeImgUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=600',
      afterImgUrl: 'https://images.unsplash.com/photo-1503174971373-b1f69850bded?auto=format&fit=crop&q=80&w=600',
      customFaq: [
        { q: 'Can you optimize layouts for pre-existing houses?', a: 'Yes, we study pre-existing structural pillars and trace load boundaries to map open paths.' },
        { q: 'Does it affect structural wall permissions?', a: 'Yes, we specify precisely which partitions are cosmetic and which are critical loads.' }
      ]
    }
  },
  {
    id: 'project-management',
    title: 'Project Management',
    shortDesc: 'Enforcing zero-margin scheduler timelines, open audits, and strict material QA checks on active sites.',
    iconName: 'ShieldCheck',
    category: 'management',
    imageUrl: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?auto=format&fit=crop&q=80&w=800',
    details: {
      overview: 'Our project management represents an absolute shield for your investment. We audit every material voucher, cross-check structural joints against technical drawings, and coordinate 38 independent subcontractors, ensuring clean, on-time, and on-budget handovers.',
      whoItIsFor: 'Asset trustees, institutional developers, or custom estate builders wanting rigorous third-party project oversight.',
      benefits: [
        'Complete transparent dashboard access to budgeting and contracts',
        'Enforces zero-defect contractor performance protocols',
        'Aggressive timeline protection keeping handovers on target'
      ],
      deliverables: [
        'Integrated Gantt project schedule dashboard tracking',
        'Transparent weekly cost voucher spreadsheets',
        'Physical on-site materials review and verification books'
      ],
      process: [
        'Subcontractor bidding & contract reviews',
        'Daily on-site milestone oversight & quality checklist audits',
        'Detailed financial ledger updates & digital milestone reports'
      ],
      timeline: 'Active through build duration',
      techAndMethods: ['Critical Path Algorithm', 'Continuous Cost-ledger Audit ERP', 'Strict Material Stress-Test Compliance'],
      beforeImgUrl: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=600',
      afterImgUrl: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?auto=format&fit=crop&q=80&w=600',
      customFaq: [
        { q: 'How often do you submit financial worksheets?', a: 'Voucher ledgers are updated in real-time on your dashboard and compiled weekly.' },
        { q: 'Do you manage dispute remediation with suppliers?', a: 'Yes, we are the direct legal and professional representatives on site.' }
      ]
    }
  }
];

export const COMPARISON_ROWS: ComparisonRow[] = [
  {
    serviceName: 'Architecture Design',
    suitableFor: 'New bespoke estates, signature assets',
    timeline: '4 - 8 Months',
    customization: '100% Bespoke',
    complexity: 'Extreme Structural Design',
    maintenance: 'Low long-term care',
    scale: '1,000+ sqm footprints',
    budgetRange: '$2M - $8M+'
  },
  {
    serviceName: 'Interior Design',
    suitableFor: 'Renovated villas, custom penthouses',
    timeline: '3 - 6 Months',
    customization: 'Exceptional details',
    complexity: 'Intricate Joineries & Slabs',
    maintenance: 'Delicate care guides',
    scale: '200 to 2,000 sqm layouts',
    budgetRange: '$500K - $3M'
  },
  {
    serviceName: 'Construction',
    suitableFor: 'Raw terrain builders',
    timeline: '12 - 24 Months',
    customization: 'Standard matching blueprints',
    complexity: 'Foundation pouring & envelope',
    maintenance: 'Zero-maintenance structures',
    scale: 'Global scale buildings',
    budgetRange: '$3M - $12M+'
  },
  {
    serviceName: 'Turnkey Projects',
    suitableFor: 'Sovereign hands-off remote buyers',
    timeline: '14 - 28 Months',
    customization: 'Complete curation down to linens',
    complexity: 'Continuous full systems orchestration',
    maintenance: 'Complete post-handover support',
    scale: 'Infinite scale estates',
    budgetRange: '$5M - $25M+'
  },
  {
    serviceName: 'Landscape Design',
    suitableFor: 'Estates water features, gardens',
    timeline: '3 - 7 Months',
    customization: 'Highly tailored flora & paths',
    complexity: 'Biological pools & grading',
    maintenance: 'Medium automatic loops',
    scale: 'Upto 10 hectares ground',
    budgetRange: '$250K - $1.5M'
  },
  {
    serviceName: 'Project Management',
    suitableFor: 'Sovereign asset trusts, corporations',
    timeline: 'Duration of active construction',
    customization: 'Standard audit checks',
    complexity: 'Milestone enforcement',
    maintenance: 'Zero post-build dependency',
    scale: 'Unlimited masterplans',
    budgetRange: 'Fixed retainer or 3-5% project total'
  }
];

export const GALLERY_PROJECTS: GalleryProject[] = [
  {
    id: 'proj-monaco',
    title: 'Elysian Clifftop Villa • Monaco',
    category: 'Villas',
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800',
    location: 'Monaco Peninsula',
    highlights: ['Cantilever infinity water basin', 'Subterranean seismic friction pillars', 'Retractable double-glazed glass panels']
  },
  {
    id: 'proj-london',
    title: 'Mayfair Historical Ateliers • London',
    category: 'Renovation',
    imageUrl: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800',
    location: 'London, United Kingdom',
    highlights: ['Grade-II facade consolidation', 'Integrated floor cooling systems', 'Circadian lighting grids']
  },
  {
    id: 'proj-kyoto',
    title: 'The Obsidian Pavilion • Kyoto',
    category: 'Architecture',
    imageUrl: 'https://images.unsplash.com/photo-1503174971373-b1f69850bded?auto=format&fit=crop&q=80&w=800',
    location: 'Kyoto, Japan',
    highlights: ['Self-cleansing pools', 'Miyadaiku joint-free framing', 'Biophilic air sweeps']
  },
  {
    id: 'proj-aspen',
    title: 'The Alpine Sanctuary • Colorado',
    category: 'Residential',
    imageUrl: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=800',
    location: 'Aspen Forest, USA',
    highlights: ['Carbon-infused insulating core', 'Pre-cast geometric frames', 'Triple wind load resistance']
  },
  {
    id: 'proj-shibuya',
    title: 'Corporate Biophilic Apex • Tokyo',
    category: 'Commercial',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800',
    location: 'Tokyo, Japan',
    highlights: ['WELL Platinum certified air loops', 'Seismic dampers', 'Integrated roof gardens']
  },
  {
    id: 'proj-sardinia',
    title: 'Amber Coastline Refuge • Sardinia',
    category: 'Villas',
    imageUrl: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=800',
    location: 'Sardinia, Italy',
    highlights: ['Smeralda Quartzite slabs', 'Marine-grade anti-rust shell', 'Anisotropic audio framing']
  }
];

export const COMMON_FAQ_LIST = [
  {
    q: 'Can Aurelia perform construction separate from architectural designs?',
    a: 'Absolutely. While we prioritize integrated end-to-end turnkeys representing maximum safety, our master builders can execute plans drawn by other top global firms, after running structural validation checks in our BIM platform.'
  },
  {
    q: 'What determines the custom budget ranges on premium assets?',
    a: 'Custom budgets depend on structural soil slope, structural wind loads (like ocean overhangs), materials tier choice (certified gold Carrara marble, bespoke Japanese timber framing), and localized construction licensing conditions.'
  },
  {
    q: 'How does your green, biophilic construction function?',
    a: 'We integrate WELL Silver/Platinum and LEED energy loops, installing carbon-capturing concrete, bio-filtering mechanical ducts, passive heat convection vectors, and native specimen-rich micro-gardens.'
  },
  {
    q: 'Who supervises the daily construction work on-site?',
    a: 'A dedicated, certified architect and an experienced logistic manager operate permanently on-site, logging checklist status items directly to your private client portal.'
  },
  {
    q: 'Do you manage old/historic structural building certifications?',
    a: 'Yes, our historical conservation specialists evaluate historic masonry health, micro-inject strengthening cements, and align building structures with high seismic resistance and modern safety codes.'
  }
];
