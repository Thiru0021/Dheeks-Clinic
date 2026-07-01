import React, { useState } from 'react';

export default function Services() {
  const [activeCard, setActiveCard] = useState(0);

  const procedures = [
    { 
      id: "01",
      name: "General Consultation", 
      text: "Preventative diagnostics, structured checkups, and early-stage corrective workflows." 
    },
    { 
      id: "02",
      name: "Cosmetic Veneers", 
      text: "Premium smile sculpting, shade transitions, and porcelain bonding design." 
    },
    { 
      id: "03",
      name: "Laser Alignments", 
      text: "Advanced alignment matrix systems built for precise digital shifting workflows." 
    }
  ];

  return (
    <section id="treatments" className="bg-white px-6 py-24 max-w-7xl mx-auto md:px-12 animate-premium-reveal">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
        
        {/* ==========================================
           LEFT COLUMN: PROCEDURES LIST (WHITE BG BASIS)
           ========================================== */}
        <div className="lg:col-span-6 space-y-8 text-left">
          <div className="space-y-4">
            <div className="inline-flex items-center space-x-2 bg-[#0A353C]/5 px-4 py-1.5 rounded-full border border-[#0A353C]/10">
              <span className="w-1.5 h-1.5 rounded-full bg-[#13646C]"></span>
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#0A353C] font-bold block">Clinical Portfolio</span>
            </div>
            
            <h2 className="font-serif text-[38px] sm:text-[46px] md:text-[54px] leading-[1.1] font-light text-[#0A353C]">
              Explore The Full <br />
              Range Of <span className="italic font-normal text-[#13646C]">Dental Treatment</span>
            </h2>
          </div>

          {/* Color-Designed Cards with Hover Elevations */}
          <div className="space-y-4">
            {procedures.map((p, idx) => {
              const isSelected = activeCard === idx;
              return (
                <div 
                  key={idx} 
                  onMouseEnter={() => setActiveCard(idx)}
                  className={`p-6 rounded-[24px] border transition-all duration-500 ease-out cursor-pointer text-left relative overflow-hidden ${
                    isSelected 
                      ? 'bg-[#13646C] text-white border-transparent translate-x-3 shadow-2xl scale-[1.02]' 
                      : 'bg-[#F2F2EF] text-[#0A353C] border-transparent shadow-sm hover:bg-gray-100 hover:translate-x-1'
                  }`}
                >
                  <div className="flex justify-between items-start relative z-10">
                    <div className="space-y-1">
                      <span className={`font-mono text-[10px] tracking-widest block font-bold ${
                        isSelected ? 'text-[#A3B86C]' : 'text-[#13646C]'
                      }`}>
                        // {p.id}
                      </span>
                      <h3 className="font-serif text-lg font-bold tracking-wide">{p.name}</h3>
                      <p className={`text-xs mt-2 leading-relaxed font-light transition-colors duration-300 ${
                        isSelected ? 'text-white/80' : 'text-[#0A353C]/70'
                      }`}>
                        {p.text}
                      </p>
                    </div>

                    {/* Circular Action Indicator */}
                    <div className={`w-7 h-7 rounded-full border flex items-center justify-center text-xs shrink-0 transition-all duration-500 ${
                      isSelected 
                        ? 'bg-white text-[#0A353C] border-transparent rotate-45 font-bold' 
                        : 'border-[#0A353C]/20 text-[#0A353C]'
                    }`}>
                      →
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ==========================================
           RIGHT COLUMN: FEATURE CASE STUDY CONTAINER
           ========================================== */}
        <div className="lg:col-span-6 bg-[#0A353C] text-white rounded-[32px] p-6 sm:p-8 flex flex-col justify-between h-full border border-white/10 shadow-2xl transition-all duration-500 hover:scale-[1.005] hover:shadow-emerald-950/20">
          <div className="mb-8 text-left">
            <span className="text-[9px] uppercase font-bold tracking-[0.25em] text-[#A3B86C] block mb-2">
              Our Expert Care For Your Every Tooth
            </span>
            <h3 className="font-serif text-2xl font-light text-white leading-tight">
              60-Min Whitening & <br />
              <span className="italic font-normal text-[#A3B86C]">Contour Shaping Results</span>
            </h3>
          </div>
          
          {/* Asymmetric Side-by-Side Images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-black/20 h-64 rounded-2xl relative overflow-hidden border border-white/10 group/img">
              <img 
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=400&q=80" 
                alt="Before Therapy" 
                className="w-full h-full object-cover filter grayscale opacity-80 transition-all duration-700 group-hover/img:scale-105" 
              />
              <span className="absolute top-3 left-3 bg-[#0A353C] text-white text-[9px] font-bold tracking-widest uppercase px-3 py-1 rounded-md border border-white/10">
                BEFORE
              </span>
            </div>
            
            <div className="bg-black/20 h-64 rounded-2xl relative overflow-hidden border border-[#A3B86C]/40 group/img shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=400&q=80" 
                alt="After Therapy" 
                className="w-full h-full object-cover filter brightness-[1.01] transition-all duration-700 group-hover/img:scale-105" 
              />
              <span className="absolute top-3 left-3 bg-[#13646C] text-white text-[9px] font-bold tracking-widest uppercase px-3 py-1 rounded-md border border-white/10">
                AFTER
              </span>
            </div>
          </div>

          <p className="text-[10px] text-white/40 mt-6 text-left italic tracking-wide">
            * Displays surface color metric enhancements processed across individual digital diagnostic steps.
          </p>
        </div>

      </div>
    </section>
  );
}