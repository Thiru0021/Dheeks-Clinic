import React from 'react';

export default function Hero() {
  return (
    <section id="home" className="bg-dentalCream px-4 py-12 md:px-12 max-w-[96%] mx-auto rounded-[32px] mt-4 shadow-sm animate-reveal">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-7xl mx-auto py-8">
        
        {/* Text Area */}
        <div className="lg:col-span-6 space-y-6 text-left">
          <div className="inline-flex items-center space-x-2 bg-dentalGreen/5 px-3 py-1 rounded-full border border-dentalGreen/10">
            <span className="w-2 h-2 rounded-full bg-dentalLightGreen animate-pulse"></span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-dentalLightGreen font-bold">Dheeks Dental Premium Care</span>
          </div>
          <h1 className="font-serif text-[40px] sm:text-[54px] md:text-[64px] leading-[1.1] font-light text-dentalGreen">
            Redefining <br />
            the <span className="font-normal italic text-dentalLightGreen">Dental Care</span> <br />
            Experience.
          </h1>
          <p className="text-sm sm:text-base text-dentalGreen/70 max-w-xl leading-relaxed">
            Experience a dental sanctuary where clinical precision meets bespoke cosmetic care. We craft bright, natural smiles in a space curated entirely for your comfort.
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a href="#contact" className="bg-dentalGreen text-white px-8 py-3.5 text-xs uppercase tracking-widest hover:bg-dentalLightGreen transition-all duration-300 rounded-full font-semibold shadow-sm transform hover:-translate-y-0.5">
              Make an Appointment
            </a>
          </div>
        </div>

        {/* Home Banner Image Frame */}
        <div className="lg:col-span-6 relative group overflow-hidden rounded-[24px] border border-dentalGreen/10 aspect-[4/3] shadow-md">
          <img 
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=80" 
            alt="Dheeks Premium Treatment Room" 
            className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-all duration-700 ease-out filter brightness-[0.95]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dentalGreen/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
            <span className="text-white text-xs uppercase tracking-widest font-semibold">Umachikulam Advanced Studio Hub</span>
          </div>
        </div>

      </div>
    </section>
  );
}