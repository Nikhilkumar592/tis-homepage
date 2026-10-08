import React from 'react';
import { motion } from 'framer-motion';

export const Message = () => {
  return (
    <section className="w-full py-20 px-6 bg-[#fdfcf8]">
      <div className="container mx-auto max-w-7xl flex flex-col md:flex-row items-center gap-16">
        {/* Left Side: Image */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 relative"
        >
          <div className="absolute inset-0 bg-[#60bab1] rounded-3xl blur-3xl opacity-20 -z-10 transform -translate-x-5 translate-y-5"></div>
          <img 
            src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2000&auto=format&fit=crop" 
            alt="Students collaborating" 
            className="w-full rounded-[2rem] object-cover h-[500px] shadow-2xl"
          />
        </motion.div>

        {/* Right Side: Content */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:w-1/2 flex flex-col justify-center"
        >
          <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl text-tis-dark leading-tight mb-8">
            At Tulas, we always ask, <br/>
            <span className="text-[#b90124]">“What’s the secret to making school awesome?”</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 font-sans leading-relaxed mb-6">
            The secret to making one's school experience truly unforgettable? It’s all about making learning feel like an adventure—where curiosity leads, creativity thrives, and every day brings something new to discover.
          </p>
          <p className="text-xl md:text-2xl text-gray-700 font-sans leading-relaxed mb-8">
            When students are inspired, they don’t just learn—they grow, explore, and shape their own futures.
          </p>
          <p className="font-heading font-black text-3xl md:text-4xl text-[#60bab1]">
            There, we cracked it!
          </p>
        </motion.div>
      </div>
    </section>
  );
};
