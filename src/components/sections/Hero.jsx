import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const bubbles = [
  { id: 1, src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2000&auto=format&fit=crop", title: "Study", className: "w-32 h-48 md:w-56 md:h-80 rounded-[60px] top-[10%] left-[5%]", delay: 0.1 },
  { id: 2, src: "https://images.unsplash.com/photo-1579365538356-9e1ad21199a5?q=80&w=2000&auto=format&fit=crop", title: "Equestrian", className: "w-36 h-36 md:w-56 md:h-56 rounded-[50px] top-[15%] right-[10%]", delay: 0.2 },
  { id: 3, src: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=2000&auto=format&fit=crop", title: "Track", className: "w-40 h-40 md:w-60 md:h-60 rounded-full top-[60%] left-[10%]", delay: 0.3 },
  { id: 4, src: "https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=2000&auto=format&fit=crop", title: "Martial Arts", className: "w-28 h-28 md:w-40 md:h-40 rounded-full top-[45%] left-[25%]", delay: 0.4 },
  { id: 5, src: "https://images.unsplash.com/photo-1530549387789-4c1017266635?q=80&w=2000&auto=format&fit=crop", title: "Swimming", className: "w-32 h-32 md:w-56 md:h-56 rounded-full top-[70%] left-[45%]", delay: 0.5 },
  { id: 6, src: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2000&auto=format&fit=crop", title: "Yoga", className: "w-40 h-40 md:w-72 md:h-72 rounded-full top-[60%] right-[15%]", delay: 0.6 },
  { id: 7, src: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=2000&auto=format&fit=crop", title: "Arts", className: "w-32 h-40 md:w-48 md:h-60 rounded-[50px] top-[30%] right-[25%]", delay: 0.7 },
  { id: 8, src: "https://images.unsplash.com/photo-1536259021677-22d56a2bb9c9?q=80&w=2000&auto=format&fit=crop", title: "Dance", className: "w-48 h-32 md:w-72 md:h-48 rounded-[50px] top-[40%] right-[5%]", delay: 0.8 },
];

export const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-screen bg-[#FDFDFD] overflow-hidden flex items-center justify-center">
      {/* Background Bubbles */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 w-full h-full pointer-events-none">
        {bubbles.map((bubble) => (
          <motion.div
            key={bubble.id}
            initial={{ opacity: 0, scale: 0.5, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ 
              duration: 1, 
              delay: bubble.delay,
              type: "spring",
              bounce: 0.4
            }}
            className={`absolute group pointer-events-auto cursor-none ${bubble.className}`}
            style={{ borderRadius: bubble.className.includes('rounded-full') ? '9999px' : 'inherit' }}
          >
            <motion.div 
              animate={{ 
                y: [0, -15, 0],
                rotate: [0, Math.random() * 4 - 2, 0]
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 2
              }}
              className="w-full h-full relative rounded-inherit overflow-hidden shadow-2xl"
              style={{ borderRadius: 'inherit' }}
            >
              <img 
                src={bubble.src} 
                alt={bubble.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <h2 className="text-white text-3xl font-bold font-heading translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{bubble.title}</h2>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* Main Text */}
      <div className="relative z-10 text-center pointer-events-none mix-blend-difference text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <p className="text-2xl md:text-4xl font-sans uppercase tracking-widest mb-2 font-light">Let's Do <span className="italic font-serif lowercase text-tis-yellow">it</span></p>
          <h1 className="text-6xl md:text-[140px] font-black font-heading tracking-tighter leading-none">
            <span className="font-serif italic font-normal text-5xl md:text-8xl pr-4">with</span>
            Tulas
          </h1>
          
          <svg xmlns="http://www.w3.org/2000/svg" className="w-[60%] md:w-[50%] h-fit mx-auto mt-2" viewBox="0 0 268.317 14.075">
            <motion.path 
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: 1, ease: "easeOut" }}
              d="M404.67,1796.978c47.813-3.483,110.6-.1,152.153-3.214s113.059,2.5,113.059,2.5-196.62,2.328-239.976,5.307c85.143,5.178,211.34,0,211.34,0" 
              transform="translate(-403.065 -1791.313)" 
              fill="none" 
              stroke="#c09d59" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="4"
            />
          </svg>
        </motion.div>
      </div>
    </section>
  );
};
