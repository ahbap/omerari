import React from 'react';
import { Check } from 'lucide-react';
import { homePageContent } from '../../content/home.js';

const ExperienceTestimonialsSection = () => (
  <section className="border-y-2 border-black bg-white">
    <div className="grid md:grid-cols-2">
      <div className="p-12 md:p-24 border-b-2 md:border-b-0 md:border-r-2 border-black bg-lime-300 flex flex-col justify-center">
        <h2 className="text-6xl font-black uppercase tracking-tighter leading-none mb-6 whitespace-pre-line">
          {homePageContent.experience.heading}
        </h2>
        <div className="font-mono text-lg font-bold mb-8 space-y-4">
          {homePageContent.experience.paragraphs.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </div>
        <div className="space-y-4 font-mono text-sm border-t-2 border-black pt-6">
          {homePageContent.experience.bullets.map((bullet, index) => (
            <div key={index} className="flex items-center">
              <Check className="mr-2" /> {bullet}
            </div>
          ))}
        </div>
      </div>
      <div className="p-12 md:p-24 bg-[#f4f4f0] flex flex-col justify-center">
        <h3 className="text-3xl font-black uppercase mb-8">
          {homePageContent.experience.testimonialsTitle}
        </h3>
        <div className="space-y-8">
          {homePageContent.experience.testimonials.map((item) => (
            <div
              key={item.roleLabel}
              className="bg-white border-2 border-black p-6 shadow-[4px_4px_0_0_#000]"
            >
              <p className="font-serif italic text-base mb-4 leading-relaxed">{item.quote}</p>
              <div className="font-bold text-sm uppercase tracking-widest text-gray-600">
                {item.roleLabel}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ExperienceTestimonialsSection;
