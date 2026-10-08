import React from 'react';
import { ScrollReveal } from '../animation/ScrollReveal';
import { SectionTitle } from '../ui/SectionTitle';
import { BookOpen, Microscope, Palette, Laptop } from 'lucide-react';

const programs = [
  {
    icon: <Microscope size={32} />,
    title: "Science & Innovation",
    desc: "Advanced laboratories and a STEM-focused curriculum for future innovators."
  },
  {
    icon: <BookOpen size={32} />,
    title: "Humanities & Arts",
    desc: "Fostering critical thinking, literature, and global perspectives."
  },
  {
    icon: <Palette size={32} />,
    title: "Creative Arts",
    desc: "Comprehensive programs in visual arts, music, and dramatic performance."
  },
  {
    icon: <Laptop size={32} />,
    title: "Technology",
    desc: "Coding, robotics, and digital literacy integrated into daily learning."
  }
];

export const Programs = () => {
  return (
    <section id="academics" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <SectionTitle 
            title="Academic Excellence" 
            subtitle="Our Programs"
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <ScrollReveal 
              key={index} 
              delay={0.1 * index}
              direction="up"
            >
              <div className="group p-8 rounded-2xl bg-tis-light hover:bg-tis-blue transition-colors duration-300 h-full flex flex-col cursor-none">
                <div className="w-16 h-16 rounded-xl bg-white text-tis-blue flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                  {program.icon}
                </div>
                <h3 className="font-heading text-xl font-bold text-tis-dark group-hover:text-white mb-4 transition-colors">
                  {program.title}
                </h3>
                <p className="text-gray-600 group-hover:text-gray-200 transition-colors">
                  {program.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
