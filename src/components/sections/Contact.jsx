import React from 'react';
import { motion } from 'framer-motion';

export const Contact = () => {
  return (
    <section className="w-full py-16 px-6 relative z-30 -mt-20 md:-mt-32">
      <div className="max-w-[1200px] mx-auto bg-[#90CCD0] rounded-3xl shadow-2xl shadow-black/20 overflow-hidden flex flex-col md:flex-row">
        
        {/* Left Side: Contact Info */}
        <div className="w-full md:w-1/3 bg-tis-dark text-white p-10 flex flex-col justify-center">
          <h2 className="font-heading font-black text-4xl mb-6">Contact Us.</h2>
          <p className="font-sans text-lg mb-4 opacity-90">
            Have questions? We are here to help you get started on your journey.
          </p>
          <div className="space-y-4 mt-8">
            <div>
              <p className="text-sm opacity-70">Admission Helpline</p>
              <p className="text-xl font-bold">+91-98379 83791</p>
            </div>
            <div>
              <p className="text-sm opacity-70">Email</p>
              <p className="text-xl font-bold">info@tis.edu.in</p>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="w-full md:w-2/3 p-10">
          <h2 className="font-heading font-black text-4xl text-tis-dark mb-8">Enquire Now!</h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input 
              type="text" 
              placeholder="Enter Name*" 
              className="w-full bg-white/60 focus:bg-white p-4 rounded-xl outline-none placeholder:text-gray-600 text-gray-800 transition-colors"
              required
            />
            <input 
              type="tel" 
              placeholder="Enter Number*" 
              className="w-full bg-white/60 focus:bg-white p-4 rounded-xl outline-none placeholder:text-gray-600 text-gray-800 transition-colors"
              required
            />
            <input 
              type="email" 
              placeholder="Enter Email*" 
              className="w-full bg-white/60 focus:bg-white p-4 rounded-xl outline-none placeholder:text-gray-600 text-gray-800 transition-colors"
              required
            />
            <select className="w-full bg-white/60 focus:bg-white p-4 rounded-xl outline-none text-gray-600 transition-colors" required>
              <option value="">Select Class*</option>
              <option value="4">Class 4</option>
              <option value="5">Class 5</option>
              <option value="6">Class 6</option>
              <option value="7">Class 7</option>
              <option value="8">Class 8</option>
              <option value="9">Class 9</option>
              <option value="11">Class 11</option>
            </select>
            <select className="w-full bg-white/60 focus:bg-white p-4 rounded-xl outline-none text-gray-600 transition-colors" required>
              <option value="">Select State*</option>
              <option value="Uttarakhand">Uttarakhand</option>
              <option value="Delhi">Delhi</option>
              <option value="Other">Other</option>
            </select>
            <select className="w-full bg-white/60 focus:bg-white p-4 rounded-xl outline-none text-gray-600 transition-colors" required>
              <option value="">Select City*</option>
              <option value="Dehradun">Dehradun</option>
              <option value="New Delhi">New Delhi</option>
              <option value="Other">Other</option>
            </select>
            <div className="md:col-span-2 mt-4 flex justify-end">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#b90124] text-white px-10 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-red-800 transition-colors"
              >
                Submit
              </motion.button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
