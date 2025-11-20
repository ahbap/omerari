import React from 'react';
import { HERO_MARQUEE_CONTENT } from '../../data/navigation.js';

const HeroTicker = () => (
  <div className="border-b-2 border-black bg-black text-white py-4 overflow-hidden">
    <div className="animate-marquee-fast whitespace-nowrap font-black text-2xl flex flex-nowrap w-max">
      <div className="flex shrink-0">
        <span>{HERO_MARQUEE_CONTENT}</span>
        <span>{HERO_MARQUEE_CONTENT}</span>
      </div>
      <div className="flex shrink-0">
        <span>{HERO_MARQUEE_CONTENT}</span>
        <span>{HERO_MARQUEE_CONTENT}</span>
      </div>
    </div>
  </div>
);

export default HeroTicker;
