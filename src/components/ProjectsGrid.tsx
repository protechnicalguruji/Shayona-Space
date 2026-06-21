import React, { useState, useEffect, forwardRef, useImperativeHandle, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, SlidersHorizontal, ArrowUpDown, Heart, 
  Printer, ArrowRight, Download, Filter, Star 
} from 'lucide-react';
import { Project } from '../types';
import BrochureModal from './BrochureModal';

interface ProjectsGridProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
  favoritesUpdated: boolean;
}

export interface ProjectsGridRef {
  focusSearch: () => void;
}

const ProjectsGrid = forwardRef<ProjectsGridRef, ProjectsGridProps>(({ 
  projects, 
  onSelectProject,
  favoritesUpdated 
}, ref) => {
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Search, filter, sorting, and favorites States
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState<'Newest' | 'Oldest' | 'Alphabetical'>('Newest');
  const [activeTab, setActiveTab] = useState<'All' | 'Favorites'>('All');
  const [favorites, setFavorites] = useState<string[]>([]);
  const [selectedBrochureProject, setSelectedBrochureProject] = useState<Project | null>(null);

  // Expose search focus control to parent
  useImperativeHandle(ref, () => ({
    focusSearch: () => {
      if (searchInputRef.current) {
        searchInputRef.current.focus();
        // Smoothly scroll to the grid container
        const target = document.getElementById('portfolio-grid-section');
        if (target) {
          const offsetTop = target.getBoundingClientRect().top + window.pageYOffset - 90;
          window.scrollTo({ top: offsetTop, behavior: 'smooth' });
        }
      }
    }
  }));

  // Fetch updated favorites list from local storage
  const syncFavorites = () => {
    const stored = JSON.parse(localStorage.getItem('luxury_portfolio_favorites') || '[]');
    setFavorites(stored);
  };

  useEffect(() => {
    syncFavorites();
  }, [favoritesUpdated]);

  useEffect(() => {
    const handleFavUpdate = () => syncFavorites();
    window.addEventListener('favorites-updated', handleFavUpdate);
    return () => window.removeEventListener('favorites-updated', handleFavUpdate);
  }, []);

  const handleToggleFavorite = (projId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    let updated;
    if (favorites.includes(projId)) {
      updated = favorites.filter(id => id !== projId);
    } else {
      updated = [...favorites, projId];
    }
    localStorage.setItem('luxury_portfolio_favorites', JSON.stringify(updated));
    setFavorites(updated);
  };

  // Categories defined as requested:
  // All, Architecture, Interior, Residential, Commercial, Villa, Office, Renovation, Luxury Homes
  const categories = [
    'All', 'Architecture', 'Interior', 'Residential', 
    'Commercial', 'Villa', 'Office', 'Renovation', 'Luxury Homes'
  ];

  // Map of project categories to match the user request's categorization
  const fitsCategory = (project: Project, cat: string) => {
    if (cat === 'All') return true;
    
    const pCategory = project.category.toLowerCase();
    const query = cat.toLowerCase();

    if (query === 'luxury homes') {
      return pCategory.includes('villa') || pCategory.includes('home') || pCategory.includes('residential');
    }
    if (query === 'architecture') {
      return pCategory.includes('villa') || project.specifications.constructionType.toLowerCase().includes('concrete') || project.id.includes('villa') || project.id.includes('hub');
    }
    return pCategory.includes(query) || project.shortDescription.toLowerCase().includes(query);
  };

  // Process and Filter
  const filteredAndSortedProjects = projects
    .filter(project => {
      // 1. Tab favorites check
      if (activeTab === 'Favorites' && !favorites.includes(project.id)) {
        return false;
      }
      // 2. Search query matches name, location, location tags, or short desc
      const query = searchQuery.toLowerCase();
      const matchSearch = 
        project.name.toLowerCase().includes(query) ||
        project.location.toLowerCase().includes(query) ||
        project.shortDescription.toLowerCase().includes(query) ||
        project.specifications.materialsUsed.some(m => m.toLowerCase().includes(query));

      // 3. Category button check
      const matchCategory = fitsCategory(project, selectedCategory);

      return matchSearch && matchCategory;
    })
    .sort((a, b) => {
      if (sortBy === 'Newest') return parseInt(b.year) - parseInt(a.year);
      if (sortBy === 'Oldest') return parseInt(a.year) - parseInt(b.year);
      if (sortBy === 'Alphabetical') return a.name.localeCompare(b.name);
      return 0;
    });

  const triggerPrintSummary = (proj: Project, e: React.MouseEvent) => {
    e.stopPropagation();
    // Beautiful simplified format layout for printing
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(`
        <html>
          <head>
            <title>Dossier Summary: ${proj.name}</title>
            <style>
              body { font-family: 'Georgia', serif; padding: 40px; color: #1a1a1a; background: #fff; line-height: 1.6; }
              h1 { font-size: 32px; border-bottom: 2px solid #b08d57; padding-bottom: 10px; margin-bottom: 20px; font-weight: normal; }
              h2 { font-size: 18px; text-transform: uppercase; letter-spacing: 2px; color: #b08d57; margin-top: 30px; border-bottom: 1px solid #eee; padding-bottom: 5px; }
              .meta { font-family: monospace; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; color: #666; margin-bottom: 30px; }
              .spec-grid { display: grid; grid-template-cols: 1fr 1fr; gap: 20px; margin-bottom: 30px; }
              .spec-item { border: 1px solid #eee; padding: 15px; }
              .spec-label { font-size: 11px; text-transform: uppercase; color: #999; display: block; margin-bottom: 5px; }
              .spec-val { font-weight: bold; }
              .narrative { text-align: justify; margin-bottom: 40px; }
              .materials { font-style: italic; color: #555; }
              .footer { text-align: center; font-size: 10px; text-transform: uppercase; letter-spacing: 2px; color: #999; margin-top: 60px; border-top: 1px solid #eee; padding-top: 20px; }
            </style>
          </head>
          <body>
            <h1>${proj.name} Dossier</h1>
            <div className="meta">Location: ${proj.location} | Completed: ${proj.year} | Category: ${proj.category}</div>
            
            <h2>Property Narrative</h2>
            <p className="narrative">${proj.overviewDescription}</p>

            <h2>Technical Profile</h2>
            <div className="spec-grid">
              <div className="spec-item"><span className="spec-label">Area</span><span className="spec-val">${proj.specifications.area}</span></div>
              <div className="spec-item"><span className="spec-label">Bedrooms</span><span className="spec-val">${proj.specifications.bedrooms || 'Bespoke Executive'}</span></div>
              <div className="spec-item"><span className="spec-label">Completion Time</span><span className="spec-val">${proj.specifications.completionTime}</span></div>
              <div className="spec-item"><span className="spec-label">Construction Type</span><span className="spec-val">${proj.specifications.constructionType}</span></div>
            </div>

            <h2>Material Signature Used</h2>
            <p className="materials">${proj.specifications.materialsUsed.join(' • ')}</p>

            <div className="footer">Vanguard Portfolio Index • Confidental Client Material</div>
            <script>window.print();</script>
          </body>
        </html>
      `);
      printWindow.document.close();
    }
  };

  return (
    <section className="py-16 bg-[#F8F6F2] text-[#1A1A1A] px-6 md:px-12 scroll-mt-20" id="portfolio-grid-section">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Advanced Filter, Search and Sort Panel */}
        <div className="bg-white border border-neutral-200 p-6 md:p-8 space-y-6 shadow-xs">
          
          {/* Top Row: Search, Tab Choice, Sort */}
          <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center justify-between">
            {/* Search Frame */}
            <div className="relative flex-1 group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-neutral-400 group-focus-within:text-[#B08D57] transition-colors" />
              <input 
                ref={searchInputRef}
                type="text"
                placeholder="Search projects by materials, layouts, location or name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#F8F6F2] border border-neutral-200 pl-11 pr-5 py-3.5 text-sm uppercase tracking-widest font-mono text-neutral-800 placeholder:text-neutral-400 focus:outline-none focus:border-[#B08D57] focus:bg-white transition-all rounded-none"
              />
            </div>

            {/* Selection choices (All, Favorites) & Sorting selection */}
            <div className="flex flex-wrap items-center gap-4">
              
              {/* Tab Selector */}
              <div className="flex bg-[#F8F6F2] p-1 border border-neutral-200">
                <button 
                  onClick={() => setActiveTab('All')}
                  className={`px-5 py-2 text-[10px] uppercase tracking-widest font-mono font-bold transition-all ${activeTab === 'All' ? 'bg-[#1A1A1A] text-white shadow-sm' : 'text-neutral-500 hover:text-black'}`}
                >
                  All Masterpieces
                </button>
                <button 
                  onClick={() => setActiveTab('Favorites')}
                  className={`px-5 py-2 text-[10px] uppercase tracking-widest font-mono font-bold transition-all flex items-center gap-1.5 ${activeTab === 'Favorites' ? 'bg-[#1A1A1A] text-white shadow-sm' : 'text-neutral-500 hover:text-black'}`}
                >
                  <Star className={`w-3 h-3 ${activeTab === 'Favorites' ? 'fill-current text-[#B08D57]' : ''}`} />
                  <span>My Curations ({favorites.length})</span>
                </button>
              </div>

              {/* Sort dropdown */}
              <div className="flex items-center gap-2 border border-neutral-200 px-4 py-2.5 bg-white">
                <ArrowUpDown className="w-4 h-4 text-[#B08D57]" />
                <span className="font-mono text-[9px] uppercase tracking-widest text-neutral-400 font-bold">Sort Specifications:</span>
                <select 
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="bg-transparent text-xs font-mono tracking-wider text-[#1A1A1A] focus:outline-none cursor-pointer uppercase border-0 p-0 font-semibold"
                >
                  <option value="Newest">Newest First</option>
                  <option value="Oldest">Oldest First</option>
                  <option value="Alphabetical">Alphabetical A-Z</option>
                </select>
              </div>

            </div>
          </div>

          {/* Bottom Row: Horizontal Category Selection list */}
          <div className="border-t border-neutral-100 pt-5">
            <div className="flex items-center gap-2 mb-3">
              <Filter className="w-3.5 h-3.5 text-[#B08D57]" />
              <span className="font-mono text-[9px] uppercase tracking-widest text-[#B08D57] font-bold">Categorized Divisions</span>
            </div>
            
            <div className="flex flex-wrap gap-2 overflow-x-auto pb-1 scrollbar-none">
              {categories.map((cat) => {
                const isSelected = selectedCategory === cat;
                return (
                  <button 
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`font-mono text-[10px] uppercase tracking-widest py-2.5 px-5 transition-all duration-300 border ${isSelected ? 'bg-[#B08D57] border-[#B08D57] text-white' : 'bg-white border-neutral-200 text-neutral-600 hover:border-black hover:text-black'}`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

        </div>

        {/* Dynamic Project Grid Render */}
        <AnimatePresence mode="popLayout">
          {filteredAndSortedProjects.length > 0 ? (
            <motion.div 
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
              id="projects-list-grid"
            >
              {filteredAndSortedProjects.map((project, idx) => {
                const bookmarked = favorites.includes(project.id);
                return (
                  <motion.div 
                    layout
                    initial={{ opacity: 0, y: 35 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5, delay: Math.min(idx * 0.05, 0.3) }}
                    key={project.id}
                    onClick={() => onSelectProject(project)}
                    className="group bg-white border border-neutral-200/80 cursor-pointer overflow-hidden shadow-xs hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 flex flex-col justify-between"
                  >
                    {/* Cover image wrapper frame */}
                    <div className="relative aspect-[3/2] w-full overflow-hidden bg-neutral-900">
                      <img 
                        src={project.coverImage} 
                        alt={project.name} 
                        className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                        referrerPolicy="no-referrer"
                      />
                      
                      {/* Dark film layer reveal on hover */}
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/60 transition-colors duration-300 flex flex-col justify-end p-6" />

                      {/* Floating actions (Top bar) */}
                      <div className="absolute top-4 right-4 flex gap-2 z-15">
                        {/* Favorite button */}
                        <button 
                          onClick={(e) => handleToggleFavorite(project.id, e)}
                          className={`p-2.5 backdrop-blur-md transition-colors rounded-none border border-neutral-100 flex items-center justify-center shadow-lg ${bookmarked ? 'bg-red-500/90 hover:bg-red-600 text-white' : 'bg-white/80 hover:bg-white text-neutral-800'}`}
                          title={bookmarked ? "Discard Favorite" : "Bookmark Masterpiece"}
                        >
                          <Heart className={`w-3.5 h-3.5 ${bookmarked ? 'fill-current' : ''}`} />
                        </button>

                        {/* Print Button */}
                        <button 
                          onClick={(e) => triggerPrintSummary(project, e)}
                          className="p-2.5 bg-white/80 backdrop-blur-md hover:bg-white text-neutral-800 transition-colors rounded-none border border-neutral-100 flex items-center justify-center shadow-lg"
                          title="Print Spec Summary"
                        >
                          <Printer className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* Display specs category */}
                      <div className="absolute top-4 left-4 bg-[#B08D57]/90 text-white font-mono text-[9px] uppercase tracking-widest px-2.5 py-1">
                        {project.category}
                      </div>

                      {/* Text reveal overlay for elite layout */}
                      <div className="absolute inset-x-0 bottom-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                        <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#B08D57] block mb-1">Architectural Review</span>
                        <div className="flex items-center gap-1 text-white font-serif text-sm">
                          <span>Explore Core Concept</span>
                          <ArrowRight className="w-3.5 h-3.5 text-[#B08D57]" />
                        </div>
                      </div>
                    </div>

                    {/* Metadata summary (Name, Category, Location, Year) */}
                    <div className="p-6 md:p-7 space-y-4 flex-1 flex flex-col justify-between">
                      <div className="space-y-2">
                        <div className="flex justify-between items-start">
                          <span className="font-mono text-[9px] uppercase tracking-widest text-[#B08D57] font-semibold">
                            {project.location} • Year {project.year}
                          </span>
                          <span className="text-[10px] text-neutral-400 font-mono tracking-wide">{project.specifications.area}</span>
                        </div>
                        <h3 className="font-serif text-xl text-[#1A1A1A] group-hover:text-[#B08D57] transition-colors line-clamp-1">
                          {project.name}
                        </h3>
                        <p className="text-xs text-neutral-500 font-light line-clamp-3 leading-relaxed">
                          {project.shortDescription}
                        </p>
                      </div>

                      {/* Foot controls */}
                      <div className="border-t border-neutral-100 pt-4 flex justify-between items-center text-[10px] font-mono uppercase tracking-widest text-neutral-600">
                        <span className="group-hover:text-[#B08D57] font-medium flex items-center gap-1 transition-colors">
                          Inspect Portfolio Details
                        </span>
                        
                        {/* Download interactive button explicitly */}
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedBrochureProject(project);
                          }}
                          className="hover:text-[#B08D57] flex items-center gap-1 transition-colors py-1 pl-3"
                          title="Download PDF specifications"
                        >
                          <Download className="w-3 h-3 text-[#B08D57]" />
                          <span>PDF</span>
                        </button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          ) : (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20 bg-white border border-neutral-200/80 rounded-none shadow-xs space-y-4"
            >
              <div className="w-16 h-16 bg-[#B08D57]/10 text-[#B08D57] rounded-full flex items-center justify-center mx-auto">
                <SlidersHorizontal className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-serif text-[#1A1A1A]">No Matching Properties Registered</h4>
              <p className="text-xs text-neutral-500 font-light max-w-sm mx-auto leading-relaxed">
                Refine your selection parameters, clear the search terms, or explore other divisions to query of high-altitude spaces.
              </p>
              <button 
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                  setActiveTab('All');
                }}
                className="font-mono text-[9px] uppercase tracking-widest text-[#B08D57] underline font-bold"
              >
                Restore Master Search Terms
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Global Brochure Modal integration within Grid */}
        {selectedBrochureProject && (
          <BrochureModal 
            isOpen={selectedBrochureProject !== null}
            onClose={() => setSelectedBrochureProject(null)}
            project={selectedBrochureProject}
          />
        )}

      </div>
    </section>
  );
});

ProjectsGrid.displayName = 'ProjectsGrid';

export default ProjectsGrid;
