import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '../ui/Button';
import { cn } from '../../lib/utils';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'About TIS', href: '#about' },
    { name: 'Academics', href: '#academics' },
    { name: 'Boarding Life', href: '#boarding' },
    { name: 'Beyond Academics', href: '#beyond' },
    { name: 'Events', href: '#events' },
    { name: 'Admission', href: '#admission' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className="hidden md:flex justify-between items-center bg-black text-white px-8 py-2 text-sm z-50 relative">
        <a href="tel:+91-9837983791" className="flex items-center gap-2 hover:text-tis-yellow transition-colors">
          <Phone size={14} /> ADMISSIONS HELPLINE NO. +91-9837983791
        </a>
        <button className="text-white hover:text-tis-yellow transition-colors font-medium">Enquire Now</button>
      </div>

      <header 
        className={cn(
          "fixed w-full z-40 transition-all duration-300",
          isScrolled ? "bg-white/80 backdrop-blur-lg shadow-md py-2 top-0" : "bg-transparent py-4 top-0 md:top-8"
        )}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          
          {/* Desktop Nav - Left */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.slice(0, 3).map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className={cn(
                  "text-sm font-semibold tracking-wide transition-colors hover:text-tis-yellow cursor-none uppercase",
                  isScrolled ? "text-tis-dark" : "text-tis-dark mix-blend-difference"
                )}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Logo Center */}
          <a href="#" className="flex items-center justify-center cursor-none z-50">
            <img 
              src="https://tis.edu.in/_next/static/media/schoolLogo.95f6e121.png" 
              alt="TIS Logo" 
              className={cn("transition-all duration-300", isScrolled ? "h-16" : "h-20 md:h-28")} 
            />
          </a>

          {/* Desktop Nav - Right */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.slice(3, 6).map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className={cn(
                  "text-sm font-semibold tracking-wide transition-colors hover:text-tis-yellow cursor-none uppercase",
                  isScrolled ? "text-tis-dark" : "text-tis-dark mix-blend-difference"
                )}
              >
                {link.name}
              </a>
            ))}
            
            <button className={cn(
              "p-2 rounded-full border transition-colors cursor-none",
              isScrolled ? "border-tis-dark text-tis-dark hover:bg-tis-dark hover:text-white" : "border-white text-white hover:bg-white hover:text-tis-dark mix-blend-difference"
            )}>
              <Menu size={20} />
            </button>
          </nav>

          {/* Mobile Toggle */}
          <button 
            className={cn(
              "md:hidden p-2 cursor-none focus:outline-none",
              isScrolled ? "text-tis-dark" : "text-white mix-blend-difference"
            )}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="absolute top-full left-0 right-0 bg-white shadow-xl flex flex-col md:hidden overflow-hidden"
            >
              <div className="px-6 py-4 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href}
                    className="text-lg font-bold text-tis-dark hover:text-tis-yellow py-3 border-b border-gray-100 cursor-none uppercase tracking-wider"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
                <Button variant="primary" className="w-full mt-4 !bg-black !text-white rounded-md py-4 font-bold tracking-widest uppercase">
                  Apply Now
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};
