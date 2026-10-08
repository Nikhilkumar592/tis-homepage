import React from 'react';
import { motion } from 'framer-motion';
import { ScrollReveal } from '../animation/ScrollReveal';

export const About = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 flex flex-col gap-16 md:gap-24">
        
        {/* Top Block */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-20">
          <div className="w-full md:w-1/2">
            <ScrollReveal direction="up">
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-tis-dark mb-6 leading-tight">
                “We feel supported in what we do and nudged further to do more”
              </h2>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-sans">
                At Tulas, we believe in bringing out the best in every student—whether it’s academics, music, art, or drama. With the right support and inspiration, creativity finds its way. For us, school isn’t just about lessons, it’s about endless opportunities waiting to be explored.
              </p>
            </ScrollReveal>
          </div>
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <ScrollReveal direction="left" className="relative">
              <div className="absolute inset-0 bg-tis-yellow rounded-full blur-3xl opacity-20 -z-10 transform translate-x-10 translate-y-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1000&auto=format&fit=crop" 
                alt="Student in pink" 
                className="w-full max-w-md h-[400px] object-cover rounded-[3rem] drop-shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </ScrollReveal>
          </div>
        </div>

        {/* Middle Banner Image */}
        <div className="w-full flex justify-center py-8">
          <ScrollReveal scale>
            <img 
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2000&auto=format&fit=crop" 
              alt="Made For Future" 
              className="w-full max-w-5xl h-[300px] object-cover rounded-3xl drop-shadow-xl hover:scale-105 transition-transform duration-500"
            />
          </ScrollReveal>
        </div>

        {/* Bottom Block */}
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20">
          <div className="w-full md:w-1/2 flex justify-center md:justify-start">
            <ScrollReveal direction="right" className="relative">
              <div className="absolute inset-0 bg-tis-blue rounded-full blur-3xl opacity-20 -z-10 transform -translate-x-10 translate-y-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1563158679-25f058097b5e?q=80&w=1000&auto=format&fit=crop" 
                alt="Student in blue" 
                className="w-full max-w-md h-[400px] object-cover rounded-[3rem] drop-shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </ScrollReveal>
          </div>
          <div className="w-full md:w-1/2">
            <ScrollReveal direction="up" delay={0.2}>
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-tis-dark mb-6 leading-tight">
                “Tulas helped me thrive and become the best version of myself”
              </h2>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-sans">
                When you choose a school that chooses you, it becomes more than just a place to learn—it becomes a place to belong, grow, and shine. At Tulas International School, we see the potential in every student and help them bring it to life.
              </p>
            </ScrollReveal>
          </div>
        </div>

      </div>
    </section>
  );
};
