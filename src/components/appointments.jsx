import React from 'react';

export default function Appointment() {
  return (
    <>
      {/* ==========================================================================
         CONTACT SECTION: Original Perfect Option B Layout Structure
         ========================================================================== */}
      <section id="contact" className="bg-white px-4 py-20 max-w-7xl mx-auto md:px-12 block clear-both">
        <div className="bg-[#0A353C] rounded-[32px] p-6 md:p-12 text-white relative overflow-hidden h-auto flex flex-col justify-center">
          
          {/* Decorative background geometry layer */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#13646C]/20 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10 w-full">
            
            {/* Left Column Address Info & Stabilized Original Map Embed */}
            <div className="lg:col-span-5 space-y-6 text-left">
              <div className="space-y-4">
                <span className="text-[10px] uppercase tracking-[0.3em] bg-white/10 px-3 py-1 rounded-full text-[#A3B86C] border border-white/10 inline-block font-mono">
                  // Clinic Coordinates
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-light leading-[1.15]">
                  Bringing Out The <br />
                  <span className="italic font-normal text-[#A3B86C]">Best In Your Smile</span>
                </h2>
              </div>
              
              <div className="space-y-4 text-sm font-light text-[#F2F2EF]/80">
                <div className="p-4 bg-white/5 border border-white/10 rounded-2xl">
                  <p className="text-[10px] uppercase tracking-widest text-[#A3B86C] font-bold mb-1">Location Address</p>
                  <p className="font-sans font-medium text-white text-xs sm:text-sm leading-relaxed">
                    KP Complex, 3/260-1, Natham Main Road, Umachikulam, Madurai, Tamil Nadu 625014
                  </p>
                </div>
                <div className="p-4 bg-white/5 border border-white/10 rounded-2xl font-mono text-xs">
                  <p className="text-[10px] uppercase tracking-widest text-[#A3B86C] font-bold mb-1 font-sans">Contact Details</p>
                  <p className="text-white">CALL: +91 99527 96602</p>
                  <p className="text-white truncate">MAIL: contact@dheeksdentalclinic.com</p>
                </div>
              </div>

              {/* Stabilized Exact Map Container Base */}
              <div className="rounded-2xl overflow-hidden h-56 border border-white/10 w-full relative shadow-inner mt-4 shrink-0">
  <iframe
    src="https://www.google.com/maps?q=Dheeks%20Dental%20Clinic%20Madurai&output=embed"
    className="w-full h-full border-0"
    loading="lazy"
    allowFullScreen
    referrerPolicy="no-referrer-when-downgrade"
    title="Dheeks Dental Clinic Location"
  />
</div>
            </div>

            {/* Right Column Booking Form Box */}
            <div className="lg:col-span-7 bg-white text-[#0A353C] rounded-[24px] p-6 sm:p-8 border border-white/20 shadow-2xl w-full text-left">
              <div className="text-center mb-6">
                <h3 className="font-serif text-xl sm:text-2xl font-bold tracking-wide">Book Your Appointment Now</h3>
                <p className="text-xs text-gray-500 mt-1">So our team can reach out to you on time</p>
              </div>

              <div className="space-y-4 font-sans">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input type="text" placeholder="First Name" className="w-full bg-[#F2F2EF] text-sm px-4 py-3 rounded-xl border border-transparent outline-none" />
                  <input type="text" placeholder="Last Name" className="w-full bg-[#F2F2EF] text-sm px-4 py-3 rounded-xl border border-transparent outline-none" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input type="email" placeholder="Email Address" className="w-full bg-[#F2F2EF] text-sm px-4 py-3 rounded-xl border border-transparent outline-none" />
                  <input type="tel" placeholder="Phone Number" className="w-full bg-[#F2F2EF] text-sm px-4 py-3 rounded-xl border border-transparent outline-none" />
                </div>
                <div className="space-y-1">
                  <select className="w-full bg-[#F2F2EF] text-sm px-4 py-3 rounded-xl border border-transparent outline-none appearance-none cursor-pointer">
                    <option>General Consultation</option>
                    <option>Cosmetic Veneers</option>
                    <option>Laser Alignments</option>
                  </select>
                </div>
                <button className="w-full bg-[#0A353C] text-white font-bold text-xs uppercase tracking-widest py-4 rounded-xl hover:bg-[#13646C] transition-all duration-300">
                  Make an Appointment →
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==========================================================================
         FOOTER SECTION: Set to absolutely flush bottom (Removed pb-12 padding gap)
         ========================================================================== */}
      <footer className="w-full bg-white p-0 m-0 border-none block">
        <div className="bg-[#0A353C] text-white/50 text-xs pt-20 pb-12 px-6 md:px-16 w-full relative overflow-hidden">
          
          {/* Giant Backdrop Brand Stamp */}
          <div className="absolute left-6 bottom-0 right-0 font-sans font-bold text-[16vw] md:text-[14vw] leading-none text-white/[0.025] tracking-tighter select-none pointer-events-none uppercase">
            Dheeks
          </div>

          <div className="grid grid-cols-2 md:grid-cols-12 gap-10 pb-16 border-b border-white/5 relative z-10 text-left max-w-7xl mx-auto">
            <div className="col-span-2 md:col-span-3 space-y-4">
              <h4 className="text-white text-[11px] uppercase tracking-[0.2em] font-bold">Quick Links</h4>
              <ul className="space-y-2.5 text-white/60 font-medium">
                <li><a href="#about" className="hover:text-[#A3B86C] transition-colors">About Us</a></li>
                <li><a href="#about" className="hover:text-[#A3B86C] transition-colors">Our Dentists</a></li>
                <li><a href="#treatments" className="hover:text-[#A3B86C] transition-colors">Dental Services</a></li>
                <li><a href="#contact" className="hover:text-[#A3B86C] transition-colors">Patient Testimonials</a></li>
              </ul>
            </div>

            <div className="col-span-2 md:col-span-3 space-y-4">
              <h4 className="text-white text-[11px] uppercase tracking-[0.2em] font-bold">Company</h4>
              <ul className="space-y-2.5 text-white/60 font-medium">
                <li><a href="#home" className="hover:text-[#A3B86C] transition-colors">Home</a></li>
                <li><a href="#treatments" className="hover:text-[#A3B86C] transition-colors">Services</a></li>
                <li><a href="#about" className="hover:text-[#A3B86C] transition-colors">Blog</a></li>
                <li><a href="#contact" className="hover:text-[#A3B86C] transition-colors">Book An Appointment</a></li>
              </ul>
            </div>

            <div className="col-span-2 md:col-span-3 space-y-4">
              <h4 className="text-white text-[11px] uppercase tracking-[0.2em] font-bold">Utility Pages</h4>
              <ul className="space-y-2.5 text-white/60 font-medium">
                <li><span className="hover:text-[#A3B86C] transition-colors cursor-pointer">Appointment Policy</span></li>
                <li><span className="hover:text-[#A3B86C] transition-colors cursor-pointer">Refund & Cancellation</span></li>
                <li><span className="hover:text-[#A3B86C] transition-colors cursor-pointer">Privacy Policy</span></li>
                <li><span className="hover:text-[#A3B86C] transition-colors cursor-pointer">Terms & Conditions</span></li>
              </ul>
            </div>

            <div className="col-span-2 md:col-span-3 space-y-4 font-sans">
              <h4 className="text-white text-[11px] uppercase tracking-[0.2em] font-bold">Book Appointments</h4>
              <div className="space-y-3 pt-1">
                <a href="mailto:contact@dheeksdentalclinic.com" className="flex items-center space-x-2.5 text-white/80 hover:text-white transition-colors text-xs break-all group">
                  <span className="text-[10px] text-[#A3B86C]">// MAIL</span>
                  <span className="underline underline-offset-4 decoration-white/10 group-hover:decoration-[#A3B86C]">contact@dheeksdentalclinic.com</span>
                </a>
                <a href="tel:+919952796602" className="flex items-center space-x-2.5 text-white/80 hover:text-white transition-colors text-xs group">
                  <span className="text-[10px] text-[#A3B86C]">// CALL</span>
                  <span className="font-semibold tracking-wide font-mono hover:text-[#A3B86C]">+91 99527 96602</span>
                </a>
              </div>
              <div className="pt-2 text-[11px] text-white/40 leading-relaxed font-light">
                Chamber 1:<br />
                KP Complex, 3/260-1, Natham Rd,<br />
                Umachikulam, Madurai, TN 625014
              </div>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] tracking-wide font-medium relative z-10 max-w-7xl mx-auto">
            <p className="text-white/40 text-center sm:text-left">© 2026 Dheeks Dental Clinic. All Rights Reserved.</p>
            <div className="flex space-x-6 text-white/30 text-[10px] uppercase font-bold tracking-widest justify-center">
              <span className="hover:text-white cursor-pointer transition-colors">Facebook</span>
              <span className="hover:text-white cursor-pointer transition-colors">Twitter</span>
              <span className="hover:text-white cursor-pointer transition-colors">LinkedIn</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}