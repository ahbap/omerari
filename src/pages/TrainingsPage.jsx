import React from 'react';
import { useNavigate } from 'react-router-dom';
import BrutalButton from '../components/buttons/BrutalButton.jsx';
import ModuleAccordion from '../components/sections/ModuleAccordion.jsx';
import { Helmet } from 'react-helmet-async';
import { trainingsPageContent } from '../content/trainings.js';

const trainingPhotos = [
  {
    url: '/images/trainings/workshop.avif',
    label: 'UX WORKSHOP',
    location: 'KOLEKTİF HOUSE',
    year: "'24",
  },
  {
    url: '/images/trainings/team-training.avif',
    label: 'TAKIM EĞİTİMİ',
    location: 'İSTANBUL',
    year: "'23",
  },
  {
    url: '/images/trainings/strategy.avif',
    label: 'STRATEJİ SUNUMU',
    location: 'ONLINE',
    year: "'24",
  },
  {
    url: '/images/trainings/mentoring.avif',
    label: 'MENTORLUK',
    location: '1:1 SESSION',
    year: "'25",
  },
];

const TrainingsPage = () => {
  const navigate = useNavigate();

  const goToContact = () => navigate('/contact');

  return (
    <>
      <Helmet>
        <title>{trainingsPageContent.meta.title}</title>
        <meta
          name="description"
          content={trainingsPageContent.meta.description}
        />
      </Helmet>

      <div className="animate-in fade-in duration-500">
      <div className="bg-lime-300 border-b-2 border-black py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="inline-block border-2 border-black px-3 py-1 font-bold bg-white mb-6 text-sm uppercase tracking-widest">
            {trainingsPageContent.hero.badge}
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black uppercase leading-[0.95] tracking-tight mb-6 break-words">
  {trainingsPageContent.hero.headingLine1}
  <br />
  {trainingsPageContent.hero.headingLine2}
</h1>
<p className="font-mono text-base sm:text-lg max-w-3xl border-l-4 border-black pl-4 sm:pl-6 break-words leading-relaxed">
  {trainingsPageContent.hero.intro}
</p>
        </div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 py-16 sm:py-20">
      <h2 className="text-3xl sm:text-4xl font-black uppercase mb-10 sm:mb-12 border-b-2 border-black pb-3 sm:pb-4 inline-block break-words">
  {trainingsPageContent.sections.individualPrograms.heading}
</h2>
        <div className="grid md:grid-cols-3 gap-8 mb-24 items-start">
          {/* Program 1: UX Temelleri */}
          <div className="bg-white border-2 border-black flex flex-col relative shadow-[8px_8px_0_0_#000] hover:shadow-[4px_4px_0_0_#000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all">
            <div className="bg-black text-white p-4 font-mono text-center font-bold uppercase border-b-2 border-black">
              {trainingsPageContent.programs.fundamentals.badge}
            </div>
            <div className="p-6">
              <h3 className="text-2xl sm:text-3xl font-black uppercase mb-4 break-words leading-tight">
                {trainingsPageContent.programs.fundamentals.title}
              </h3>
              <p className="font-mono text-sm text-gray-600 mb-6 break-words leading-relaxed">
                {trainingsPageContent.programs.fundamentals.description}
              </p>
              <div className="mb-6">
                <h4 className="font-bold uppercase text-xs mb-2">
                  {trainingsPageContent.programs.fundamentals.audienceTitle}
                </h4>
                <p className="font-mono text-xs text-gray-500">
                  {trainingsPageContent.programs.fundamentals.audienceText}
                </p>
              </div>
              <div className="border-t-2 border-black mt-4">
                {trainingsPageContent.programs.fundamentals.modules.map((module) => (
                  <ModuleAccordion key={module.title} title={module.title}>
                    {module.body}
                  </ModuleAccordion>
                ))}
              </div>
              <BrutalButton className="w-full mt-6" onClick={goToContact}>
                {trainingsPageContent.programs.fundamentals.ctaLabel}
              </BrutalButton>
            </div>
          </div>
  
          {/* Program 2: Portfolyo & Kariyer */}
          <div className="bg-white border-2 border-black flex flex-col relative shadow-[8px_8px_0_0_#000] hover:shadow-[4px_4px_0_0_#000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all">
            <div className="bg-lime-300 text-black p-4 font-mono text-center font-bold uppercase border-b-2 border-black">
              {trainingsPageContent.programs.portfolioCareer.badge}
            </div>
            <div className="p-6">
              <h3 className="text-2xl sm:text-3xl font-black uppercase mb-4 break-words leading-tight">
                {trainingsPageContent.programs.portfolioCareer.title}
              </h3>
              <p className="font-mono text-sm text-gray-600 mb-6 break-words leading-relaxed">
                {trainingsPageContent.programs.portfolioCareer.descriptionIntro}
                <br />
                <br />
                <span className="bg-lime-100 px-1">
                  {trainingsPageContent.programs.portfolioCareer.descriptionHighlight}
                </span>
              </p>
              <div className="mb-6">
                <h4 className="font-bold uppercase text-xs mb-2">
                  {trainingsPageContent.programs.portfolioCareer.audienceTitle}
                </h4>
                <p className="font-mono text-xs text-gray-500">
                  {trainingsPageContent.programs.portfolioCareer.audienceText}
                </p>
              </div>
              <div className="border-t-2 border-black mt-4">
                {trainingsPageContent.programs.portfolioCareer.modules.map((module) => (
                  <ModuleAccordion key={module.title} title={module.title}>
                    {module.body}
                  </ModuleAccordion>
                ))}
              </div>
              <BrutalButton className="w-full mt-6" onClick={goToContact}>
                {trainingsPageContent.programs.portfolioCareer.ctaLabel}
              </BrutalButton>
            </div>
          </div>
  
          {/* Program 3: 1:1 Mentorluk */}
          <div className="bg-white border-2 border-black flex flex-col relative shadow-[8px_8px_0_0_#000] hover:shadow-[4px_4px_0_0_#000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all">
            <div className="bg-white text-black p-4 font-mono text-center font-bold uppercase border-b-2 border-black">
              {trainingsPageContent.programs.mentoring.badge}
            </div>
            <div className="p-6">
              <h3 className="text-2xl sm:text-3xl font-black uppercase mb-4 break-words leading-tight">
                {trainingsPageContent.programs.mentoring.title}
              </h3>
              <p className="font-mono text-sm text-gray-600 mb-6 break-words leading-relaxed">
                {trainingsPageContent.programs.mentoring.description}
              </p>
              <div className="mb-6">
                <h4 className="font-bold uppercase text-xs mb-2">
                  {trainingsPageContent.programs.mentoring.formatTitle}
                </h4>
                <p className="font-mono text-xs text-gray-500">
                  {trainingsPageContent.programs.mentoring.formatText}
                </p>
              </div>
              <div className="border-t-2 border-black mt-4">
                {trainingsPageContent.programs.mentoring.bullets.map((item) => (
                  <div
                    key={item}
                    className="py-2 font-mono text-sm border-b border-gray-200 last:border-b-0"
                  >
                    {item}
                  </div>
                ))}
              </div>
              <BrutalButton className="w-full mt-6" onClick={goToContact}>
                {trainingsPageContent.programs.mentoring.ctaLabel}
              </BrutalButton>
            </div>
          </div>
        </div>

        <div className="mb-24 border-2 border-black bg-white p-2">
          <div className="flex justify-between items-center mb-4 ml-2 mt-2">
            <h2 className="text-2xl font-black uppercase flex items-center">
              <div className="w-3 h-3 bg-lime-500 mr-3"></div> {trainingsPageContent.gallery.heading}
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {trainingPhotos.map((photo) => (
              <div
                key={photo.label}
                className="relative aspect-square border-2 border-black group overflow-hidden bg-gray-200"
              >
                <img
                  src={photo.url}
                  alt={photo.label}
                  loading="lazy"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 bg-black text-white text-[10px] font-bold font-mono px-2 py-1 m-2 uppercase">
                  {photo.label}, {photo.year}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="border-2 border-black bg-black text-white p-8 md:p-16 relative overflow-hidden group">
          <div className="absolute right-0 top-0 w-64 h-64 bg-lime-300 rounded-full blur-[100px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12">
              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase mb-6 break-words leading-tight">
                  {trainingsPageContent.corporate.heading}
                </h2>
                <p className="font-mono text-gray-300 max-w-3xl text-base sm:text-lg leading-relaxed border-l-4 border-lime-300 pl-4 sm:pl-6 break-words">
                  {trainingsPageContent.corporate.description}
                </p>
              </div>
              <BrutalButton variant="primary" onClick={goToContact} className="shrink-0">
                {trainingsPageContent.corporate.ctaLabel}
              </BrutalButton>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {trainingsPageContent.corporate.items.map((item) => (
                <div
                  key={item.title}
                  className="border-2 border-white/20 p-6 hover:border-lime-300 hover:bg-white/5 transition-all group/item"
                >
                  <h3 className="text-lime-300 font-black text-xl mb-3 group-hover/item:translate-x-2 transition-transform">
                    {item.title}
                  </h3>
                  <p className="font-mono text-sm text-gray-400">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default TrainingsPage;