import React from 'react';

export default function About() {
  return (
    <section id="about" className="bg-[#0A353C] text-white px-4 py-24 md:px-12 rounded-[40px] max-w-[96%] mx-auto shadow-2xl overflow-hidden relative group animate-premium-reveal">
      
      {/* Immersive Background Fluid Mesh Blobs */}
      <div className="absolute -left-20 -top-20 w-96 h-96 bg-[#13646C]/30 rounded-full blur-[120px] pointer-events-none transition-transform duration-1000 group-hover:scale-110"></div>
      <div className="absolute right-0 bottom-0 w-80 h-80 bg-[#A3B86C]/10 rounded-full blur-[100px] pointer-events-none transition-transform duration-1000 group-hover:scale-105"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
        
        {/* ==========================================
           LEFT COLUMN: HIGH-CONTRAST TYPOGRAPHY
           ========================================== */}
        <div className="lg:col-span-6 space-y-8 text-left">
          <div className="inline-flex items-center space-x-2 bg-white/10 px-4 py-1.5 rounded-full border border-white/10 backdrop-blur-md transition-all duration-300 hover:bg-white/20 hover:border-white/30 cursor-pointer">
            <span className="w-1.5 h-1.5 rounded-full bg-[#A3B86C]"></span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#F2F2EF] font-bold block">Medical Excellence</span>
          </div>
          
          <h2 className="font-serif text-[40px] sm:text-[52px] md:text-[60px] leading-[1.1] font-light text-white">
            Where Modern <br />
            Precision Meets <br />
            <span className="italic font-normal text-[#A3B86C] relative inline-block transition-all duration-300 hover:tracking-wide">
              Gentle Dental Artistry
            </span>
          </h2>

          <p className="text-sm text-[#F2F2EF]/80 leading-relaxed font-light max-w-xl">
            Dheeks Dental Clinic stands as a premier modern dental facility committed to healthy, radiant smiles in Madurai. We combine advanced diagnostic technologies with a calming luxury aesthetic space.
          </p>

          {/* Premium Minimalist Feature Cards (Replaced Emojis with Clean Numbers) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 hover:border-[#13646C]/40 transition-all duration-500 group cursor-pointer">
              <span className="font-serif text-xs uppercase tracking-widest text-[#A3B86C] font-semibold block transition-transform duration-300 group-hover:translate-x-1">
                // 01
              </span>
              <h4 className="font-sans font-bold text-sm text-white mt-3 group-hover:text-[#A3B86C] transition-colors duration-300">
                Elite Sterilization
              </h4>
              <p className="text-[11px] text-[#F2F2EF]/60 mt-1 leading-relaxed">
                Molecular level micro-tracking protective protocols.
              </p>
            </div>
            
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 hover:border-[#13646C]/40 transition-all duration-500 group cursor-pointer">
              <span className="font-serif text-xs uppercase tracking-widest text-[#A3B86C] font-semibold block transition-transform duration-300 group-hover:translate-x-1">
                // 02
              </span>
              <h4 className="font-sans font-bold text-sm text-white mt-3 group-hover:text-[#A3B86C] transition-colors duration-300">
                Digital Mapping
              </h4>
              <p className="text-[11px] text-[#F2F2EF]/60 mt-1 leading-relaxed">
                Advanced 3D oral diagnostics matrix alignments.
              </p>
            </div>
          </div>
        </div>

        {/* ==========================================
           RIGHT COLUMN: THE ASYMMETRIC CARD PAIR
           ========================================== */}
        <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 lg:pt-0">
          
          {/* Card Module 1: Clean Treatment Studio Graphic */}
          <div className="group overflow-hidden rounded-[32px] relative h-80 sm:h-[420px] border border-white/10 shadow-lg sm:-translate-y-6 cursor-pointer hover-lift-card">
            <img 
              src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=80" 
              alt="Dheeks Dental Suite View" 
              className="w-full h-full object-cover filter brightness-[0.85] contrast-[1.05] transition-transform duration-[1.2s] cubic-bezier(0.16, 1, 0.3, 1) group-hover:scale-108 group-hover:brightness-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A353C] via-transparent to-transparent opacity-70 group-hover:opacity-40 transition-opacity duration-500"></div>
            
            <div className="absolute inset-x-0 bottom-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
              <span className="text-[9px] uppercase tracking-[0.25em] text-[#A3B86C] font-bold block mb-1">Sanctuary Spaces</span>
              <h4 className="font-serif text-lg text-white font-medium">Bespoke Treatment Studio</h4>
            </div>
          </div>

          {/* Card Module 2: Dr. Sindhuja Showcase Card */}
          <div className="bg-white text-[#0A353C] rounded-[32px] p-8 flex flex-col justify-between border border-transparent sm:translate-y-6 relative overflow-hidden cursor-pointer hover-lift-card-inverse">
            
            <div className="absolute -right-16 -top-16 w-40 h-40 bg-[#13646C]/5 rounded-full blur-xl transition-transform duration-700 group-hover:scale-120"></div>
            
            <div className="space-y-6 relative z-10">
              {/* Monogram Box */}
              <div className="w-14 h-14 bg-[#0A353C] text-white rounded-2xl flex items-center justify-center font-serif text-xl font-bold tracking-wider transition-all duration-500 ease-out shadow-md group-hover:bg-[#13646C] group-hover:rotate-[8deg] group-hover:scale-105">
                DS
              </div>
              
              <div className="space-y-1">
                <h3 className="font-serif text-2xl font-bold text-[#0A353C] tracking-wide group-hover:text-[#13646C] transition-colors duration-300">
                  Dr. Sindhuja
                </h3>
                <p className="text-xs uppercase tracking-widest text-[#13646C] font-bold">
                  Lead Dental Surgeon
                </p>
              </div>

              <p className="text-xs text-gray-600 leading-relaxed font-light">
                Expertise centered in premium porcelain restorative workflows, custom smile alignment layouts, biological foundation sculpting, and full oral structural correction.
              </p>
            </div>
            
            {/* Rating Banner Row (Replaced star icon with crisp text layout) */}
            <div className="pt-6 border-t border-gray-200 mt-8 flex justify-between items-center text-[10px] uppercase tracking-widest font-bold text-gray-400 relative z-10">
              <span>MDS • Cosmetic Specialist</span>
              <div className="flex items-center space-x-1 bg-[#0A353C]/5 px-2.5 py-1 rounded-full border border-[#0A353C]/5 text-[#0A353C] transition-all duration-300 group-hover:bg-[#0A353C] group-hover:text-white">
                <span className="text-[9px] font-bold tracking-wider">RATED 5.0</span>
              </div>
            </div>
          </div>
          
        </div>

      </div>
    </section>
  );
}