import React from 'react';
import { cn } from '../../lib/utils';

export const SectionTitle = ({ 
  title, 
  subtitle, 
  align = 'center', 
  className 
}) => {
  const aligns = {
    left: "text-left",
    center: "text-center mx-auto",
    right: "text-right ml-auto",
  };

  return (
    <div className={cn("mb-12 max-w-3xl", aligns[align], className)}>
      {subtitle && (
        <span className="text-tis-yellow font-semibold tracking-wider uppercase text-sm mb-2 block">
          {subtitle}
        </span>
      )}
      <h2 className="font-heading text-4xl md:text-5xl font-bold text-tis-blue">
        {title}
      </h2>
    </div>
  );
};
