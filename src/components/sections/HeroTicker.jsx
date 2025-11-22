import React from 'react';
import { homePageContent } from '../../content/home.js';

const HeroTicker = () => (
  <div className="border-b-2 border-black bg-black text-white py-4 overflow-hidden">
    <div className="animate-marquee-fast whitespace-nowrap font-black text-2xl flex flex-nowrap w-max">
      <div className="flex shrink-0">
        <span>{homePageContent.ticker.text}</span>
        <span>{homePageContent.ticker.text}</span>
      </div>
      <div className="flex shrink-0">
        <span>{homePageContent.ticker.text}</span>
        <span>{homePageContent.ticker.text}</span>
      </div>
    </div>
  </div>
);

export default HeroTicker;