import React from 'react';

const SectionHeader = ({ title, subtitle, badge }) => (
  <div className="mb-16 border-l-4 border-lime-300 pl-6 py-2">
    {badge && (
      <div className="font-mono text-xs font-bold mb-2 text-gray-500 uppercase tracking-widest">
        {badge}
      </div>
    )}
    <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4 leading-[0.9]">
      {title}
    </h2>
    {subtitle && (
      <p className="font-mono text-lg md:text-xl max-w-3xl text-gray-600">{subtitle}</p>
    )}
  </div>
);

export default SectionHeader;
