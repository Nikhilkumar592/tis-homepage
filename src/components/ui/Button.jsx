import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

export const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className, 
  icon,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-colors rounded-full focus:outline-none disabled:opacity-50 cursor-none";
  
  const variants = {
    primary: "bg-tis-blue text-white hover:bg-tis-blue/90",
    secondary: "bg-tis-yellow text-tis-dark hover:bg-tis-yellow/90",
    outline: "border-2 border-tis-blue text-tis-blue hover:bg-tis-blue hover:text-white",
    ghost: "text-tis-blue hover:bg-tis-blue/10",
  };
  
  const sizes = {
    sm: "text-sm px-4 py-2",
    md: "text-base px-6 py-3",
    lg: "text-lg px-8 py-4",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
      {icon && <span className="ml-2">{icon}</span>}
    </motion.button>
  );
};
