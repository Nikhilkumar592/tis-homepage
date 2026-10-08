import React from 'react';
import { motion } from 'framer-motion';
import { ScrollReveal } from '../animation/ScrollReveal';

const sportsList = [
  { name: 'Archery', image: 'https://images.unsplash.com/photo-1511252033857-e9a66524cb51?q=80&w=2000&auto=format&fit=crop' },
  { name: 'Basketball', image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=2000&auto=format&fit=crop' },
  { name: 'Swimming', image: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=2000&auto=format&fit=crop' },
  { name: 'Martial Arts', image: 'https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=2000&auto=format&fit=crop' },
];

export const Sports = () => {
  return (
    <section id="sports" className="py-24 bg-tis-light">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="font-heading font-black text-6xl md:text-7xl lg:text-8xl text-[#b90124] tracking-tighter leading-none mb-6">
              Sports ?
            </h2>
            <p className="font-heading font-black text-3xl md:text-5xl lg:text-6xl text-tis-dark leading-tight">
              It’s not just a <span className="text-[#60bab1]">facility.</span> At Tulas it’s the <span className="text-[#60bab1]">foundation!</span>
            </p>
            <p className="mt-8 text-xl md:text-3xl font-sans text-gray-700">
              <span className="inline-flex items-center justify-center relative px-2">
                <span className="text-tis-yellow font-black text-4xl md:text-6xl">16+</span>
                <svg className="absolute w-[120%] h-[120%] top-[-10%] left-[-10%] text-tis-yellow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none">
                  <path d="M5,50 a45,25 0 1,0 90,0 a45,25 0 1,0 -90,0" stroke="currentColor" strokeWidth="3" />
                </svg>
              </span>
              {' '}sports curated to bring joy and discipline to your life.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {sportsList.map((sport, index) => (
            <ScrollReveal 
              key={index} 
              delay={0.1 * index}
              direction="up"
            >
              <div className="group relative w-full h-48 md:h-80 rounded-2xl overflow-hidden cursor-none">
                <img 
                  src={sport.image} 
                  alt={sport.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-4 md:p-6 transition-opacity duration-300">
                  <h3 className="font-heading text-2xl md:text-4xl font-bold text-white uppercase tracking-wider transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    {sport.name}
                  </h3>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
