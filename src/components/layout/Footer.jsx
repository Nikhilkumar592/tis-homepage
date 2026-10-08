import React from 'react';
import { Users, MessageCircle, Camera, Video, MapPin, Phone, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-tis-dark text-white pt-20 pb-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        
        {/* Brand Col */}
        <div className="space-y-6">
          <span className="font-heading font-bold text-3xl tracking-tight">
            TIS<span className="text-tis-yellow">.</span>
          </span>
          <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
            Empowering students to achieve academic excellence and personal growth in a world-class environment.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-tis-yellow hover:text-tis-dark transition-colors cursor-none">
              <Users size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-tis-yellow hover:text-tis-dark transition-colors cursor-none">
              <MessageCircle size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-tis-yellow hover:text-tis-dark transition-colors cursor-none">
              <Camera size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-tis-yellow hover:text-tis-dark transition-colors cursor-none">
              <Video size={18} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-heading font-semibold text-lg mb-6">Quick Links</h4>
          <ul className="space-y-3">
            {['About TIS', 'Admissions', 'Academics', 'Boarding', 'Beyond Academics'].map((link) => (
              <li key={link}>
                <a href="#" className="text-gray-400 hover:text-tis-yellow text-sm transition-colors cursor-none">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Admissions */}
        <div>
          <h4 className="font-heading font-semibold text-lg mb-6">Admissions</h4>
          <ul className="space-y-3">
            {['Apply Now', 'Fee Structure', 'Scholarships', 'FAQs', 'Virtual Tour'].map((link) => (
              <li key={link}>
                <a href="#" className="text-gray-400 hover:text-tis-yellow text-sm transition-colors cursor-none">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-heading font-semibold text-lg mb-6">Contact Us</h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3 text-gray-400 text-sm">
              <MapPin size={18} className="text-tis-yellow shrink-0 mt-1" />
              <span>Dhoolkot, P.O Selaqui, Chakrata Road, Dehradun, Uttarakhand 248011</span>
            </li>
            <li className="flex items-center gap-3 text-gray-400 text-sm">
              <Phone size={18} className="text-tis-yellow shrink-0" />
              <span>+91 9999 1111 22</span>
            </li>
            <li className="flex items-center gap-3 text-gray-400 text-sm">
              <Mail size={18} className="text-tis-yellow shrink-0" />
              <span>info@tis.edu.in</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="container mx-auto px-6 pt-8 border-t border-white/10 text-center text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} Tulas International School. All rights reserved. Redesigned with ❤️</p>
      </div>
    </footer>
  );
};
