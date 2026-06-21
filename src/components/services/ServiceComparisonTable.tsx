import React, { useState } from 'react';
import { COMPARISON_ROWS } from './servicesData';
import { Check, Info, ShieldAlert } from 'lucide-react';

export default function ServiceComparisonTable() {
  const [highlightedRow, setHighlightedRow] = useState<string | null>(null);

  return (
    <section className="bg-neutral-900 py-24 md:py-32 relative text-white overflow-hidden" id="service-comparison">
      {/* Background elegant lighting accent */}
      <div className="absolute top-[50%] left-[-20%] w-[600px] h-[600px] bg-[#B08D57]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header content box */}
        <div className="space-y-4 mb-16 max-w-3xl">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#B08D57] font-bold block">
            PRECISE CAPABILITIES CONTRAST
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-light text-white tracking-tight leading-none">
            Interactive <span className="italic font-normal text-[#B08D57]">Framework Comparison</span>
          </h2>
          <p className="font-sans text-neutral-400 font-light text-xs md:text-sm">
            We operate with complete clarity. Hover over any vertical alignment path to compare ideal scopes, timelines, custom build complexity thresholds, planning requirements, and budget orientations.
          </p>
        </div>

        {/* Responsive Container */}
        <div className="overflow-x-auto scroller-no-bar rounded border border-neutral-800 bg-neutral-950 shadow-2xl" id="table-frame">
          <table className="w-full text-left border-collapse min-w-[900px] font-sans text-xs">
            
            {/* Table Head */}
            <thead>
              <tr className="border-b border-neutral-800 bg-neutral-900 text-[10px] text-neutral-400 font-bold uppercase tracking-widest font-sans">
                <th className="py-5 px-6 font-medium">Core service</th>
                <th className="py-5 px-4 font-medium">Suitable Application</th>
                <th className="py-5 px-4 font-medium">Timeline</th>
                <th className="py-5 px-4 font-medium">Customization</th>
                <th className="py-5 px-4 font-medium">Design complexity</th>
                <th className="py-5 px-4 font-medium">Maintenance</th>
                <th className="py-5 px-4 font-medium">Scale Scope</th>
                <th className="py-5 px-6 text-right font-medium text-[#B08D57]">Ideal Budget</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {COMPARISON_ROWS.map((row) => {
                const isCurrentHighlighted = highlightedRow === row.serviceName;
                return (
                  <tr
                    key={row.serviceName}
                    onMouseEnter={() => setHighlightedRow(row.serviceName)}
                    onMouseLeave={() => setHighlightedRow(null)}
                    className={`border-b border-neutral-850/60 transition-all ${
                      isCurrentHighlighted 
                        ? 'bg-[#B08D57]/5 text-white' 
                        : 'text-neutral-300 hover:bg-neutral-900/40'
                    }`}
                    id={`table-row-${row.serviceName.replace(/\s+/g, '-').toLowerCase()}`}
                  >
                    {/* Service Name (Gold bold) */}
                    <td className="py-5 px-6 font-serif text-sm font-medium text-white flex items-center gap-3">
                      <div className={`w-1.5 h-1.5 rounded-full transition-transform duration-300 ${isCurrentHighlighted ? 'bg-[#B08D57] scale-150' : 'bg-neutral-600'}`} />
                      {row.serviceName}
                    </td>

                    {/* Suitable For */}
                    <td className="py-5 px-4 font-light text-neutral-400 max-w-xs leading-relaxed">
                      {row.suitableFor}
                    </td>

                    {/* Timeline */}
                    <td className="py-5 px-4 font-mono text-neutral-300">
                      {row.timeline}
                    </td>

                    {/* Customization level */}
                    <td className="py-5 px-4">
                      <span className="px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider rounded border border-neutral-800 bg-neutral-950 font-sans text-neutral-400">
                        {row.customization}
                      </span>
                    </td>

                    {/* Complexity */}
                    <td className="py-5 px-4 font-light text-neutral-400">
                      {row.complexity}
                    </td>

                    {/* Maintenance */}
                    <td className="py-5 px-4 font-light text-neutral-500">
                      {row.maintenance}
                    </td>

                    {/* Scope scale */}
                    <td className="py-5 px-4 font-light text-neutral-400">
                      {row.scale}
                    </td>

                    {/* Budget range */}
                    <td className="py-5 px-6 text-right font-mono font-medium text-[#B08D57]">
                      {row.budgetRange}
                    </td>
                  </tr>
                );
              })}
            </tbody>

          </table>
        </div>

        {/* Small Table helper banner */}
        <div className="mt-6 flex items-start gap-3 p-4 bg-neutral-950/50 border border-neutral-850 rounded-md max-w-3xl">
          <Info className="w-4.5 h-4.5 text-[#B08D57] shrink-0 mt-0.5" />
          <p className="text-[10px] text-neutral-500 font-sans leading-relaxed">
            *Budget ranges compiled reflect averages of custom private assets created globally. Sourcing custom rare materials, installing deep structural cliff piles, or establishing complex solar grids alters core baseline pricing.
          </p>
        </div>

      </div>
    </section>
  );
}
