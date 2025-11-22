import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import BrutalButton from '../buttons/BrutalButton.jsx';
import { homePageContent } from '../../content/home.js';
import { trackEvent } from '../../utils/analytics.js';

const HeroSection = ({ onNavigate, onOpenAiTool }) => (
  <section className="border-b-2 border-black bg-[#f4f4f0] relative overflow-hidden">
    {/* Arka plan grid */}
    <div
      className="absolute inset-0 opacity-10 pointer-events-none"
      style={{
        backgroundImage:
          'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
        backgroundSize: '40px 40px',
      }}
    ></div>

    <div className="container mx-auto px-4 sm:px-6 py-20 md:py-32 relative z-10">
      {/* Badge – dokunmadık */}
      <div className="inline-block bg-black text-white px-4 py-2 font-mono text-sm font-bold mb-6 rotate-2 shadow-[4px_4px_0px_0_#ccff00]">
        {homePageContent.hero.badge}
      </div>

      {/* HERO BAŞLIK */}
      <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black uppercase leading-[0.95] tracking-tighter mb-8 break-words">
        {/* SATIR 1: FİNTECH VE */}
        <span>{homePageContent.hero.heading.line1}</span>
        <br />

        {/* SATIR 2: E-TİCARET (lime) + İÇİN (normal) */}
        <span>
          <span className="bg-lime-300 px-2">
            {homePageContent.hero.heading.line2Highlight}
          </span>
          <span>{' '}{homePageContent.hero.heading.line2Rest}</span>
        </span>
        <br />

        {/* SATIR 3: UYGULANABİLİR (normal) + UX EĞİTİMLERİ. (outlined) */}
        <span>
          <span>{homePageContent.hero.heading.line3Main}</span>{' '}
          <span
            className="whitespace-nowrap text-transparent"
            style={{ WebkitTextStroke: '2px black' }}
          >
            {homePageContent.hero.heading.line3Outline}
          </span>
        </span>
      </h1>

      {/* ALT METİN + CTA’LER */}
      <div className="flex flex-col md:flex-row gap-8 items-start md:items-end justify-between border-t-2 border-black pt-8 max-w-6xl">
        <p className="font-mono text-base sm:text-lg max-w-xl leading-relaxed break-words">
          {homePageContent.hero.intro}
        </p>
        <div className="flex gap-4 w-full md:w-auto flex-wrap">
          <BrutalButton
            onClick={() => {
              trackEvent('cta_click', {
                location: 'hero',
                label: homePageContent.hero.primaryCta.label,
              });
              onNavigate(homePageContent.hero.primaryCta.targetPath);
            }}
            className="flex-1 md:flex-none"
          >
            {homePageContent.hero.primaryCta.label}
          </BrutalButton>
          <BrutalButton
            variant="outline"
            onClick={() => {
              trackEvent('cta_click', {
                location: 'hero',
                label: homePageContent.hero.secondaryCta.label,
              });
              onNavigate(homePageContent.hero.secondaryCta.targetPath);
            }}
            className="flex-1 md:flex-none"
          >
            {homePageContent.hero.secondaryCta.label}
          </BrutalButton>
        </div>
      </div>

      {/* AI REFRAMER KARTI */}
      <div
        className="mt-12 inline-flex items-center gap-4 p-4 border-2 border-black bg-white shadow-[4px_4px_0_0_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_#000] transition-all cursor-pointer w-full sm:max-w-md break-words"
        onClick={() => {
          trackEvent('ai_reframer_open', {
            location: 'hero_card',
          });
          onOpenAiTool();
        }}
      >
        <div className="bg-lime-300 p-2 border-2 border-black rounded-full">
          <Sparkles size={20} className="text-black" />
        </div>
        <div>
          <h4 className="font-black text-sm uppercase">
            {homePageContent.hero.aiTool.label}
          </h4>
          <p className="font-mono text-xs text-gray-600">
            {homePageContent.hero.aiTool.description}
          </p>
        </div>
        <ArrowRight size={20} className="ml-auto" />
      </div>
    </div>
  </section>
);

export default HeroSection;