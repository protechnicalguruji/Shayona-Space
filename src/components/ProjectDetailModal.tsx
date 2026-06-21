import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, MapPin, Calendar, Compass, Share2, Printer, 
  ChevronLeft, ChevronRight, Play, Maximize2, 
  FileText, Check, Heart, Volume2 
} from 'lucide-react';
import { Project } from '../types';
import BeforeAfterSlider from './BeforeAfterSlider';
import BrochureModal from './BrochureModal';

interface ProjectDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project | null;
  onSelectProject: (project: Project) => void;
  allProjects: Project[];
}

export default function ProjectDetailModal({ 
  isOpen, 
  onClose, 
  project, 
  onSelectProject,
  allProjects 
}: ProjectDetailModalProps) {
  if (!project) return null;

  // Active gallery index
  const [activeImgIndex, setActiveImgIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);
  const [isBrochureOpen, setIsBrochureOpen] = useState(false);
  
  // Favorites persistence
  const [isFavorited, setIsFavorited] = useState(false);

  useEffect(() => {
    setActiveImgIndex(0);
    setIsPlayingVideo(false);
    
    // Check local storage for favorite status
    const favorites = JSON.parse(localStorage.getItem('luxury_portfolio_favorites') || '[]');
    setIsFavorited(favorites.includes(project.id));
  }, [project]);

  // Keyboard navigation inside modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') {
        if (lightboxOpen) setLightboxOpen(false);
        else onClose();
      }
      if (e.key === 'ArrowRight') {
        if (lightboxOpen) handleNextImage();
        else handleNextImage();
      }
      if (e.key === 'ArrowLeft') {
        if (lightboxOpen) handlePrevImage();
        else handlePrevImage();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, lightboxOpen, activeImgIndex]);

  // Touch swipe support on image gallery
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    const threshPercent = 50; // min swipe threshold in px
    if (diff > threshPercent) {
      handleNextImage(); // Swiped left, show next
    } else if (diff < -threshPercent) {
      handlePrevImage(); // Swiped right, show prev
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const handleNextImage = () => {
    setActiveImgIndex((prev) => (prev + 1) % project.galleryImages.length);
  };

  const handlePrevImage = () => {
    setActiveImgIndex((prev) => (prev - 1 + project.galleryImages.length) % project.galleryImages.length);
  };

  const handleToggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem('luxury_portfolio_favorites') || '[]');
    let updatedFavorites;
    if (isFavorited) {
      updatedFavorites = favorites.filter((id: string) => id !== project.id);
      setIsFavorited(false);
    } else {
      updatedFavorites = [...favorites, project.id];
      setIsFavorited(true);
    }
    localStorage.setItem('luxury_portfolio_favorites', JSON.stringify(updatedFavorites));
    // Trigger window event to update main favorite counter if needed
    window.dispatchEvent(new Event('favorites-updated'));
  };

  const handleShare = () => {
    const url = `${window.location.origin}/project/${project.id}`;
    navigator.clipboard.writeText(url).then(() => {
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    });
  };

  const handlePrint = () => {
    window.print();
  };

  // Find related projects in same category or just nearby
  const relatedProjects = allProjects
    .filter((p) => p.id !== project.id && (p.category === project.category || p.id !== 'elysian-villa'))
    .slice(0, 3);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] w-full h-full bg-[#F8F6F2] overflow-y-auto overflow-x-hidden p-0 m-0"
          id={`detail-modal-${project.id}`}
        >
          {/* Print Only Header overlay */}
          <div className="hidden print:block p-8 border-b border-neutral-300">
            <h1 className="text-4xl font-serif text-[#1A1A1A]">{project.name} Dossier</h1>
            <p className="text-sm font-mono text-[#B08D57] uppercase tracking-widest">{project.location} | Completed {project.year}</p>
          </div>

          {/* Sticky Luxury Ribbon Navigation bar */}
          <header className="sticky top-0 bg-white/90 backdrop-blur-md border-b border-neutral-200 py-4 px-6 md:px-12 flex justify-between items-center z-50 print:hidden shadow-sm">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#B08D57] hidden sm:inline">Portfolio Archive</span>
              <div className="w-1.5 h-1.5 bg-[#B08D57] rounded-full hidden sm:inline" />
              <span className="font-serif text-sm tracking-wide text-neutral-800 truncate max-w-[200px] md:max-w-xs">{project.name}</span>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-3 md:gap-4">
              {/* Favorite */}
              <button 
                onClick={handleToggleFavorite}
                className={`p-2 transition-colors rounded-none border border-neutral-200 flex items-center justify-center ${isFavorited ? 'bg-red-50 text-red-500 border-red-200' : 'bg-white hover:bg-neutral-50 text-neutral-600 hover:text-black'}`}
                title={isFavorited ? "Discard Favorite" : "Bookmark Masterpiece"}
              >
                <Heart className={`w-4 h-4 ${isFavorited ? 'fill-current' : ''}`} />
              </button>

              {/* Share */}
              <button 
                onClick={handleShare}
                className="p-2 bg-white hover:bg-neutral-50 text-neutral-600 hover:text-black transition-colors rounded-none border border-neutral-200 flex items-center justify-center relative"
                title="Copy shareable link"
              >
                {copiedLink ? <Check className="w-4 h-4 text-emerald-600 animate-scale-up" /> : <Share2 className="w-4 h-4" />}
                {copiedLink && (
                  <span className="absolute -bottom-8 right-0 bg-black text-white text-[9px] font-mono tracking-wider py-1 px-2 uppercase shadow-lg whitespace-nowrap rounded-none z-10">
                    Copied Link!
                  </span>
                )}
              </button>

              {/* Print */}
              <button 
                onClick={handlePrint}
                className="p-2 bg-white hover:bg-neutral-50 text-neutral-600 hover:text-black transition-colors rounded-none border border-neutral-200 flex items-center justify-center"
                title="Print Summary Document"
              >
                <Printer className="w-4 h-4" />
              </button>

              {/* Download Brochure CTA */}
              <button 
                onClick={() => setIsBrochureOpen(true)}
                className="hidden md:flex items-center gap-2 bg-[#B08D57] hover:bg-black text-white font-mono text-[10px] uppercase tracking-widest px-4 py-2.5 transition-all duration-300 rounded-none font-bold"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Acquire Brochure</span>
              </button>

              {/* Close Fullscreen */}
              <button 
                onClick={onClose}
                className="p-2 bg-[#1A1A1A] hover:bg-[#B08D57] text-white transition-all rounded-none flex items-center justify-center"
                aria-label="Close detailed screen"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </header>

          <main className="max-w-7xl mx-auto px-6 md:px-12 py-8 md:py-14 space-y-16">
            {/* Project Cover Block */}
            <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start">
              {/* Massive Cinematic Image Frame */}
              <div className="lg:col-span-7 flex flex-col gap-4">
                <div 
                  className="relative group overflow-hidden aspect-[16/10] bg-neutral-900 border border-neutral-200 rounded-none shadow-xl cursor-zoom-in"
                  onClick={() => setLightboxOpen(true)}
                  onTouchStart={handleTouchStart}
                  onTouchMove={handleTouchMove}
                  onTouchEnd={handleTouchEnd}
                >
                  <motion.img 
                    key={activeImgIndex}
                    initial={{ opacity: 0.8, scale: 1.03 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    src={project.galleryImages[activeImgIndex]} 
                    alt={`${project.name}-gallery`} 
                    className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-105 pointer-events-none"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 via-transparent to-transparent p-4 flex justify-between items-end print:hidden">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-[#B08D57] font-semibold bg-white/90 px-2 py-1">
                      Visual {activeImgIndex + 1} / {project.galleryImages.length}
                    </span>
                    <span className="text-white/80 text-[11px] flex items-center gap-1.5 backdrop-blur-sm bg-black/30 px-3 py-1 font-mono uppercase tracking-widest">
                      <Maximize2 className="w-3 h-3" /> Click for Lightbox
                    </span>
                  </div>

                  {/* Navigation Arrows inside grid image */}
                  <button 
                    onClick={(e) => { e.stopPropagation(); handlePrevImage(); }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/60 hover:bg-[#B08D57] text-white transition-colors rounded-none focus:outline-none print:hidden z-10"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={(e) => { e.stopPropagation(); handleNextImage(); }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/60 hover:bg-[#B08D57] text-white transition-colors rounded-none focus:outline-none print:hidden z-10"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>

                {/* Thumbnails system */}
                <div className="flex gap-2.5 overflow-x-auto pb-2 scrollbar-none print:hidden">
                  {project.galleryImages.map((img, idx) => (
                    <button 
                      key={idx}
                      onClick={() => setActiveImgIndex(idx)}
                      className={`relative w-24 h-16 flex-shrink-0 border transition-all duration-300 rounded-none overflow-hidden ${activeImgIndex === idx ? 'border-[#B08D57] opacity-100 ring-2 ring-[#B08D57]/20 scale-95' : 'border-neutral-300 opacity-60 hover:opacity-90'}`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Quick Details Specification Sidebar */}
              <div className="lg:col-span-5 space-y-6 bg-white border border-neutral-200/80 p-8 shadow-sm">
                <div className="border-b border-neutral-100 pb-5 space-y-2">
                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#B08D57] font-bold block">
                    Bespoke Portfolio {project.category}
                  </span>
                  <h2 className="text-4xl font-light tracking-tight text-[#1A1A1A] serif">
                    {project.name}
                  </h2>
                  <div className="flex flex-wrap gap-4 items-center pt-2 text-neutral-500 text-xs font-mono tracking-wider">
                    <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-[#B08D57]" /> {project.location}</span>
                    <span className="w-1.5 h-1.5 bg-neutral-300 rounded-full" />
                    <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5 text-[#B08D57]" /> Year {project.year}</span>
                  </div>
                </div>

                {/* Quick Spec List */}
                <div className="space-y-4">
                  <h4 className="font-mono text-[10px] uppercase tracking-widest text-[#B08D57] font-semibold">Technical Profile</h4>
                  
                  <div className="grid grid-cols-2 gap-x-6 gap-y-4 text-sm font-light">
                    <div>
                      <span className="text-neutral-400 block text-xs uppercase tracking-wider">Gross Area Covered</span>
                      <span className="text-[#1A1A1A] font-medium">{project.specifications.area}</span>
                    </div>

                    <div>
                      <span className="text-neutral-400 block text-xs uppercase tracking-wider">Completion Timeline</span>
                      <span className="text-[#1A1A1A] font-medium">{project.specifications.completionTime}</span>
                    </div>

                    {project.specifications.bedrooms && (
                      <div>
                        <span className="text-neutral-400 block text-xs uppercase tracking-wider">Private Suites</span>
                        <span className="text-[#1A1A1A] font-medium">{project.specifications.bedrooms}</span>
                      </div>
                    )}

                    {project.specifications.floors && (
                      <div>
                        <span className="text-neutral-400 block text-xs uppercase tracking-wider">Floor Levels</span>
                        <span className="text-[#1A1A1A] font-medium">{project.specifications.floors}</span>
                      </div>
                    )}

                    <div>
                      <span className="text-neutral-400 block text-xs uppercase tracking-wider">Structural Type</span>
                      <span className="text-[#1A1A1A] font-medium">{project.specifications.constructionType}</span>
                    </div>

                    <div>
                      <span className="text-neutral-400 block text-xs uppercase tracking-wider">Allocated Parking</span>
                      <span className="text-[#1A1A1A] font-medium">{project.specifications.parking || 'Reserved Garage'}</span>
                    </div>
                  </div>
                </div>

                {/* Materials Used tags */}
                <div className="space-y-2 border-t border-neutral-100 pt-5">
                  <h5 className="font-mono text-[10px] uppercase tracking-widest text-neutral-400">Authentic Material Signature</h5>
                  <div className="flex flex-wrap gap-1.5">
                    {project.specifications.materialsUsed.map((mat, i) => (
                      <span 
                        key={i}
                        className="bg-[#F8F6F2] hover:bg-[#B08D57]/10 text-neutral-700 hover:text-[#B08D57] transition-all text-[11px] tracking-wide font-mono px-3 py-1 border border-neutral-200"
                      >
                        {mat}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Secure consultation action trigger in sidebar */}
                <div className="border-t border-neutral-100 pt-5">
                  <button 
                    onClick={() => setIsBrochureOpen(true)}
                    className="w-full bg-[#1A1A1A] hover:bg-[#B08D57] text-white text-xs uppercase tracking-[0.2em] font-semibold py-4 transition-all duration-300 shadow-xl flex items-center justify-center gap-2 rounded-none"
                  >
                    <FileText className="w-4 h-4" />
                    <span>Download Interactive Dossier</span>
                  </button>
                </div>
              </div>
            </section>

            {/* In-depth Project Narrative Block */}
            <section className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 border-t border-neutral-200 pt-12">
              <div className="md:col-span-8 flex flex-col gap-6">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#B08D57] block mb-1">Architectural Narrative</span>
                  <h3 className="text-2xl font-light serif text-[#1A1A1A]">Design Overview & Strategy</h3>
                </div>
                <p className="text-neutral-600 font-light text-base leading-relaxed whitespace-pre-line">
                  {project.overviewDescription}
                </p>

                {/* Challenges & Solutions Bento Blocks */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
                  <div className="bg-neutral-50 border border-neutral-200 p-6 space-y-3">
                    <div className="flex items-center gap-2 text-rose-800">
                      <div className="w-2 h-2 rounded-full bg-rose-700" />
                      <span className="font-mono text-[10px] uppercase tracking-widest font-bold">The Technical Challenge</span>
                    </div>
                    <p className="text-sm font-light leading-relaxed text-neutral-600">
                      {project.challenges}
                    </p>
                  </div>

                  <div className="bg-[#B08D57]/5 border border-[#B08D57]/20 p-6 space-y-3">
                    <div className="flex items-center gap-2 text-[#B08D57]">
                      <div className="w-2 h-2 rounded-full bg-[#B08D57]" />
                      <span className="font-mono text-[10px] uppercase tracking-widest font-bold">The Bespoke Solution</span>
                    </div>
                    <p className="text-sm font-light leading-relaxed text-neutral-600">
                      {project.solutions}
                    </p>
                  </div>
                </div>

                {/* Final Outcome paragraph with gold border line */}
                <div className="border-l-2 border-[#B08D57] pl-5 py-2 mt-4">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#B08D57] font-semibold block mb-1">Final Landscape Outcome</span>
                  <p className="text-sm italic font-light leading-relaxed text-neutral-700">
                    "{project.finalOutcome}"
                  </p>
                </div>
              </div>

              {/* Interactive Before & After comparison */}
              <div className="md:col-span-4 space-y-4">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#B08D57] block mb-1">Interactive Metamorphosis</span>
                  <h3 className="text-2xl font-light serif text-[#1A1A1A]">Site Comparison</h3>
                </div>
                <div className="bg-white p-4 border border-neutral-200 shadow-sm">
                  <BeforeAfterSlider 
                    beforeImage={project.beforeImage} 
                    afterImage={project.afterImage} 
                    projectName={project.name}
                  />
                </div>
              </div>
            </section>

            {/* Vertical Chronological Construction Timeline */}
            <section className="border-t border-neutral-200 pt-12 space-y-8">
              <div className="text-center max-w-xl mx-auto space-y-2">
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#B08D57] font-semibold">Chronological Trace</span>
                <h3 className="text-3xl font-light serif text-[#1A1A1A]">Project Milestones & Execution</h3>
                <p className="text-xs text-neutral-500 font-light">Follow the bespoke journey from historic bedrock research to keys handoff.</p>
              </div>

              <div className="relative max-w-4xl mx-auto pl-6 md:pl-0">
                {/* Center pipeline bar for bigger screens */}
                <div className="absolute left-[20px] md:left-1/2 top-4 bottom-4 w-[1px] bg-neutral-300 -translate-x-[0.5px]" />

                <div className="space-y-10">
                  {project.timeline.map((stage, idx) => {
                    const isEven = idx % 2 === 0;
                    return (
                      <div 
                        key={idx}
                        className={`relative flex flex-col md:flex-row items-start ${isEven ? 'md:flex-row-reverse' : ''}`}
                      >
                        {/* Timeline Circle Marker */}
                        <div className="absolute left-[20px] md:left-1/2 top-1 w-6 h-6 rounded-full bg-white border-2 border-[#B08D57] -translate-x-1/2 z-10 flex items-center justify-center shadow-md">
                          <div className="w-1.5 h-1.5 bg-neutral-800 rounded-full" />
                        </div>

                        {/* Content Card container */}
                        <div className={`w-full md:w-[45%] pl-8 md:pl-0 ${isEven ? 'md:text-right md:pr-10' : 'md:pl-10'}`}>
                          <div className="bg-white p-6 border border-neutral-200 shadow-xs hover:border-[#B08D57] transition-colors relative">
                            {/* Arrow overlay for desk */}
                            <div className={`hidden md:block absolute top-3 w-3 h-3 bg-white border-b border-r border-neutral-200 rotate-45 ${isEven ? '-right-1.5 border-b-0 border-r-0 border-t border-r' : '-left-1.5 border-r-0 border-b-0 border-l border-b'}`} />
                            
                            <span className="font-mono text-[9px] uppercase tracking-widest text-[#B08D57] font-bold block mb-1">{stage.phase} — {stage.date}</span>
                            <h4 className="text-lg font-serif text-[#1A1A1A] mb-1.5">{stage.title}</h4>
                            <p className="text-xs text-neutral-600 font-light leading-relaxed">{stage.description}</p>
                          </div>
                        </div>

                        {/* Space placeholder to balance other side */}
                        <div className="hidden md:block w-[45%]" />
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>

            {/* Embedded Video Walkthrough section */}
            {project.videoUrl && (
              <section className="border-t border-neutral-200 pt-12 space-y-6">
                <div className="text-center max-w-xl mx-auto space-y-1">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#B08D57]">Cinematic Walkthrough</span>
                  <h3 className="text-3xl font-light serif text-[#1A1A1A]">Immersive Video Showcase</h3>
                </div>

                <div className="max-w-4xl mx-auto bg-neutral-900 border border-neutral-800 aspect-[16/9] shadow-2xl relative overflow-hidden group">
                  {!isPlayingVideo ? (
                    <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-black/45">
                      {/* Video Cover overlay back */}
                      <img 
                        src={project.coverImage} 
                        alt="Video Thumbnail" 
                        className="absolute inset-0 w-full h-full object-cover opacity-80 filter brightness-75 transition-transform duration-700 group-hover:scale-105 pointer-events-none"
                        referrerPolicy="no-referrer"
                      />
                      
                      {/* Play Action button */}
                      <button 
                        onClick={() => setIsPlayingVideo(true)}
                        className="p-6 bg-[#B08D57] hover:bg-white text-white hover:text-black rounded-full shadow-2xl transition-all duration-300 scale-100 hover:scale-110 active:scale-95 focus:outline-none flex items-center justify-center"
                        aria-label="Start video tour"
                      >
                        <Play className="w-8 h-8 fill-current ml-1" />
                      </button>

                      <div className="mt-4 text-white uppercase text-[10px] font-mono tracking-[0.3em] backdrop-blur-md bg-black/40 px-4 py-1.5 border border-[#B08D57]/20">
                        Begin Audio Vitruv Tour
                      </div>
                    </div>
                  ) : (
                    <iframe 
                      src={`${project.videoUrl}?autoplay=1&mute=1`} 
                      title={`${project.name} video walk-through tour`}
                      className="w-full h-full border-0 absolute inset-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen
                    />
                  )}
                </div>
              </section>
            )}

            {/* Dedicated Client Testimonial Section for current project */}
            <section className="bg-neutral-900 text-white p-8 md:p-14 border border-[#B08D57]/20 rounded-none relative overflow-hidden">
              <div className="absolute top-0 right-0 p-12 text-[#B08D57]/10 pointer-events-none">
                <svg className="w-48 h-48 fill-current" viewBox="0 0 24 24">
                  <path d="M14 17h3l2-4V7h-6v6h3zM1 13h3l2-4V7H0v6h3z"/>
                </svg>
              </div>

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8 space-y-6">
                  {/* Star Rating display */}
                  <div className="flex gap-1">
                    {[...Array(project.testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-[#B08D57] text-lg">★</span>
                    ))}
                  </div>

                  <p className="text-xl md:text-2xl font-light serif text-[#F8F6F2] leading-relaxed italic">
                    "{project.testimonial.review}"
                  </p>

                  <div className="flex items-center gap-4">
                    <img 
                      src={project.testimonial.clientPhoto} 
                      alt={project.testimonial.clientName} 
                      className="w-12 h-12 rounded-full object-cover border border-[#B08D57]"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <h5 className="font-serif text-base text-[#F8F6F2]">{project.testimonial.clientName}</h5>
                      <span className="font-mono text-[9px] uppercase tracking-widest text-[#B08D57]">Verified Yacht Broker & Resident Client</span>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-4 border-l lg:border-l-2 border-[#B08D57]/30 pl-0 lg:pl-10 space-y-4">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#B08D57] block">The Patron Experience</span>
                  <h4 className="text-xl font-serif">A Dedication to Confidentiality</h4>
                  <p className="text-xs font-light text-neutral-400 leading-relaxed">
                    We serve sovereign families, modern executives, and generational institutions. Every file remains guarded under complete NDA guarantees.
                  </p>
                </div>
              </div>
            </section>

            {/* Horizontal Related Projects Slider */}
            <section className="border-t border-neutral-200 pt-12 space-y-8 print:hidden">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#B08D57] block mb-1">Architectural Proximities</span>
                  <h3 className="text-3xl font-light serif text-[#1A1A1A]">Related Masters Spaces</h3>
                </div>
                <span className="text-xs text-neutral-500 font-light">Explore properties in comparable microclimes</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedProjects.map((relProj) => (
                  <div 
                    key={relProj.id}
                    onClick={() => {
                      onSelectProject(relProj);
                      // Scroll to top of modal container
                      document.getElementById(`detail-modal-${relProj.id}`)?.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="group bg-white border border-neutral-200 overflow-hidden cursor-pointer shadow-xs hover:shadow-xl transition-all duration-300"
                  >
                    <div className="aspect-[3/2] overflow-hidden bg-neutral-100">
                      <img 
                        src={relProj.coverImage} 
                        alt={relProj.name} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="p-5 space-y-2">
                      <span className="font-mono text-[9px] uppercase tracking-wider text-[#B08D57]">{relProj.category}</span>
                      <h4 className="font-serif text-lg text-[#1A1A1A] group-hover:text-[#B08D57] transition-colors">{relProj.name}</h4>
                      <p className="text-xs text-neutral-500 font-light line-clamp-2 leading-relaxed">{relProj.shortDescription}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </main>

          {/* Subtly Elegant Bottom Navigation Anchor */}
          <footer className="bg-neutral-900 border-t border-neutral-800 py-12 px-6 text-center text-neutral-400 print:hidden mt-20">
            <div className="max-w-4xl mx-auto space-y-4">
              <span className="font-serif text-xl tracking-widest text-white uppercase">Vanguard Portfolio</span>
              <p className="text-xs font-mono text-[#B08D57] uppercase tracking-widest">Monaco • New York • Tokyo • London</p>
              <div className="h-[1px] w-20 bg-[#B08D57] mx-auto opacity-30 mt-4" />
              <p className="text-[10px] text-neutral-500 max-w-sm mx-auto font-light leading-relaxed">
                All property rights, technical layout signatures, and visual coordinates are subject to global copyright laws of 2026.
              </p>
            </div>
          </footer>

          {/* Master Lightbox Fullscreen viewing component */}
          <AnimatePresence>
            {lightboxOpen && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setLightboxOpen(false)}
                className="fixed inset-0 z-[120] bg-black/95 flex flex-col justify-between p-4 print:hidden"
              >
                {/* Lightbox header */}
                <div className="flex justify-between items-center text-white py-4 px-6">
                  <div>
                    <h4 className="font-serif text-lg tracking-wide">{project.name}</h4>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">Viewing Spec Image {activeImgIndex + 1} of {project.galleryImages.length}</span>
                  </div>
                  <button 
                    onClick={() => setLightboxOpen(false)}
                    className="p-2 border border-neutral-800 hover:border-white transition-colors"
                  >
                    <X className="w-5 h-5 text-white" />
                  </button>
                </div>

                {/* Main Lightbox Image with zooming capabilities on double click */}
                <div className="relative flex-1 flex items-center justify-center py-10 px-4 select-none">
                  <button 
                    onClick={(e) => { e.stopPropagation(); handlePrevImage(); }}
                    className="p-4 bg-white/5 hover:bg-white/20 text-white rounded-full transition-colors z-30 mr-4 focus:outline-none"
                  >
                    <ChevronLeft className="w-8 h-8" />
                  </button>

                  <img 
                    src={project.galleryImages[activeImgIndex]} 
                    alt="Lightbox High Definition Spec" 
                    className="max-w-full max-h-[75vh] object-contain shadow-2xl transition-transform duration-300 pointer-events-none"
                    referrerPolicy="no-referrer"
                  />

                  <button 
                    onClick={(e) => { e.stopPropagation(); handleNextImage(); }}
                    className="p-4 bg-white/5 hover:bg-white/20 text-white rounded-full transition-colors z-30 ml-4 focus:outline-none"
                  >
                    <ChevronRight className="w-8 h-8" />
                  </button>
                </div>

                {/* Bottom carousel tracker in lightbox */}
                <div className="py-4 text-center text-xs font-mono tracking-widest text-[#B08D57]">
                  [ USE ARROW KEYS ← OR → ON KEYBOARD ]
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Personal brochure generator modal */}
          <BrochureModal 
            isOpen={isBrochureOpen}
            onClose={() => setIsBrochureOpen(false)}
            project={project}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
