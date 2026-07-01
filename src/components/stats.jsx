import React from 'react';

export default function Stats() {
  const stats = [
    { value: "12+", label: "Years of Experience" },
    { value: "95%", label: "Patient Satisfaction" },
    { value: "2.5K", label: "Happy Patients" },
    { value: "24/7", label: "Patient Support" }
  ];

  return (
    <section className="bg-white px-6 py-12 md:px-12 max-w-7xl mx-auto border-t border-gray-100">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center pt-4">
        {stats.map((stat, i) => (
          <div key={i} className="group">
            <div className="font-serif text-4xl md:text-5xl font-light text-[#0F302E] mb-2 transform transition-transform duration-300 group-hover:scale-105">{stat.value}</div>
            <div className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}