import React from 'react';

const Marquee = ({ content, speed = 'slow', className = '' }) => {
  const animationClass = speed === 'fast' ? 'animate-marquee-fast' : 'animate-marquee-slow';

  return (
    <div className={`border-b-2 border-black bg-lime-300 overflow-hidden py-3 ${className}`}>
      <div className={`${animationClass} whitespace-nowrap font-mono font-bold text-sm text-black flex flex-nowrap w-max`}>
        <div className="flex shrink-0">
          <span>{content}</span>
          <span>{content}</span>
          <span>{content}</span>
          <span>{content}</span>
        </div>
        <div className="flex shrink-0">
          <span>{content}</span>
          <span>{content}</span>
          <span>{content}</span>
          <span>{content}</span>
        </div>
      </div>
    </div>
  );
};

export default Marquee;
