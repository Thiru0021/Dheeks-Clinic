import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('Home');

  const navItems = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About Us', href: '#about', id: 'about' },
    { name: 'Treatments', href: '#treatments', id: 'treatments' },
    { name: 'Contact', href: '#contact', id: 'contact' }
  ];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -60% 0px',
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const matchingItem = navItems.find(item => item.id === entry.target.id);
          if (matchingItem) {
            setActiveItem(matchingItem.name);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    navItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (name) => {
    setActiveItem(name);
    setIsOpen(false);
  };

  return (
    <>
      {/* Navbar Container */}
      <nav className="w-full border-b border-[#0A353C]/10 px-6 py-4 md:px-12 flex justify-between items-center bg-white fixed top-0 left-0 right-0 z-[100] shadow-sm transition-all duration-300 hover:bg-[#F2F2EF]/90 backdrop-blur-md">
        <a 
          href="#home" 
          onClick={() => handleNavClick('Home')}
          className="flex items-center space-x-2 select-none group cursor-pointer outline-none"
        >
          <div className="w-7 h-7 bg-[#0A353C] rounded-lg flex items-center justify-center text-white text-xs font-serif font-bold group-hover:bg-[#13646C] group-hover:rotate-[12deg] transition-all duration-300">
            D
          </div>
          <span className="font-sans text-base tracking-widest font-bold text-[#0A353C] uppercase transition-colors duration-300 group-hover:text-[#13646C]">
            Dheeks Clinic
          </span>
        </a>
        
        {/* Desktop Links (Hidden on Mobile) */}
        <div className="hidden md:flex items-center space-x-10 text-[11px] uppercase tracking-[0.25em] font-bold">
          {navItems.map((item) => {
            const isActive = activeItem === item.name;
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={() => handleNavClick(item.name)}
                className={`relative pb-1 transition-all duration-300 outline-none ${
                  isActive ? 'text-[#0A353C]' : 'text-gray-400 hover:text-[#0A353C]'
                }`}
              >
                {item.name}
                <span className={`absolute bottom-0 left-0 h-[2px] bg-[#13646C] transition-transform duration-300 ${isActive ? 'w-full scale-x-100' : 'w-full scale-x-0'}`} />
              </a>
            );
          })}
        </div>

        {/* Desktop CTA Button (Hidden on Mobile) */}
        <div className="hidden md:block">
          <a href="#contact" onClick={() => handleNavClick('Contact')} className="inline-flex items-center bg-[#0A353C] text-white px-6 py-2.5 text-[11px] uppercase tracking-widest hover:bg-[#13646C] hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 rounded-full font-bold shadow-sm">
            Contact Us →
          </a>
        </div>

        {/* Mobile Toggle Menu Menu Button (FIXED: Visible on mobile, hidden on desktop) */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden text-[#0A353C] p-2 hover:bg-[#F2F2EF] rounded-full transition-all duration-300 focus:outline-none"
          aria-label="Toggle Menu"
        >
          <div className="w-6 h-5 relative flex flex-col justify-between items-center overflow-hidden">
            <span className={`w-6 h-[2px] bg-[#0A353C] transition-all duration-300 transform origin-left ${isOpen ? 'rotate-[42deg] translate-x-[2px]' : ''}`} />
            <span className={`w-6 h-[2px] bg-[#0A353C] transition-all duration-300 ${isOpen ? 'translate-x-10 opacity-0' : ''}`} />
            <span className={`w-6 h-[2px] bg-[#0A353C] transition-all duration-300 transform origin-left ${isOpen ? '-rotate-[42deg] translate-x-[2px]' : ''}`} />
          </div>
        </button>
      </nav>

      {/* Mobile Drawer Overlay */}
      <div 
        className={`md:hidden fixed inset-x-0 top-[61px] bottom-0 bg-white/98 backdrop-blur-xl z-40 px-8 py-12 flex flex-col space-y-6 border-t border-[#0A353C]/5 transition-all duration-500 ease-in-out ${
          isOpen ? 'opacity-100 translate-y-0 shadow-2xl' : 'opacity-0 -translate-y-6 pointer-events-none'
        }`}
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-[#13646C] font-bold block mb-2 animate-pulse">• NAVIGATION HUB</span>
        
        {navItems.map((item) => {
          const isActive = activeItem === item.name;
          return (
            <a 
              key={item.name}
              href={item.href} 
              onClick={() => handleNavClick(item.name)} 
              className={`text-2xl font-serif font-light py-2 border-b border-gray-100 transition-all duration-300 flex justify-between items-center ${
                isActive ? 'text-[#13646C] pl-2 font-normal' : 'text-[#0A353C]'
              }`}
            >
              <span>{item.name}</span>
              {isActive && <span className="text-sm">●</span>}
            </a>
          );
        })}
        
        <div className="pt-8">
          <a 
            href="#contact" 
            onClick={() => handleNavClick('Contact')} 
            className="w-full bg-[#0A353C] text-white text-center text-xs uppercase font-bold tracking-widest py-4 rounded-full block shadow-md hover:bg-[#13646C] active:scale-95 transition-all duration-300"
          >
            Book An Appointment Now
          </a>
        </div>
      </div>
    </>
  );
}