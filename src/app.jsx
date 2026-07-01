import React from 'react';
import Navbar from './components/navbar.jsx';
import Hero from './components/hero.jsx';
import Stats from './components/stats.jsx';
import About from './components/about.jsx';
import Services from './components/services.jsx';
import Appointment from './components/appointments.jsx';

export default function App() {
  return (
    // Ensure w-full is used here with absolutely no padding-x classes (like px-4)
    <div className="w-full min-h-screen bg-white text-[#0A353C] antialiased pt-[73px] overflow-x-hidden">
      <Navbar />
      <div className="w-full block space-y-0">
        <Hero />
        <Stats />
        <About />
        <Services />
        <Appointment />
      </div>
    </div>
  );
}