import React from 'react';
import { Check, Link as LinkIcon, MessageSquare, Zap } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { aboutPageContent } from '../content/about.js';

const ICON_MAP = {
  check: Check,
  zap: Zap,
  link: LinkIcon,
  message: MessageSquare,
};

const AboutPage = () => {
  const myProfilePhoto = aboutPageContent.hero.photoSrc;
  const journey = aboutPageContent.journey;
  const companies = aboutPageContent.companies;

  const humanSide = aboutPageContent.humanSide.map((item) => {
    const IconComponent = ICON_MAP[item.iconKey] || Check;
    return { ...item, icon: IconComponent };
  });

  return (
    <>
      <Helmet>
        <title>{aboutPageContent.meta.title}</title>
        <meta name="description" content={aboutPageContent.meta.description} />
      </Helmet>

      <div className="animate-in slide-in-from-bottom-8 duration-500">
      <div className="border-b-2 border-black">
        <div className="container mx-auto px-4 sm:px-6 py-20 sm:py-24">
          <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black uppercase mb-6 tracking-tighter break-words leading-[0.95]">
            {aboutPageContent.hero.headingPrefix}{' '}
            <span className="bg-lime-300 px-4">{aboutPageContent.hero.headingHighlight}</span>
          </h1>
          <div className="max-w-4xl font-mono text-base sm:text-lg md:text-xl leading-relaxed border-l-4 border-black pl-4 sm:pl-6 break-words">
            {aboutPageContent.hero.intro}
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 py-16 sm:py-20 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <div className="border-2 border-black bg-white p-6 sticky top-24 shadow-[8px_8px_0_0_#000]">
            <div className="aspect-square bg-gray-200 border-2 border-black mb-4 overflow-hidden">
              <img
                src={myProfilePhoto}
                alt="Ömer Arı"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <h3 className="font-black text-xl sm:text-2xl uppercase break-words leading-tight">
              {aboutPageContent.sidebar.title}
            </h3>
            <p className="font-mono text-xs mt-2">{aboutPageContent.sidebar.location}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {aboutPageContent.sidebar.tags.map((tag) => (
                <span key={tag} className="bg-black text-white px-2 py-1 text-xs font-mono break-words">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="md:col-span-8">
          <div className="prose prose-lg prose-headings:font-black prose-p:font-mono max-w-none">
            <h2 className="uppercase tracking-tight mb-8 text-2xl sm:text-3xl break-words leading-tight">
              {aboutPageContent.sections.aboutHeading}
            </h2>
            <div className="space-y-8 text-base sm:text-lg leading-loose text-gray-800 break-words">
              {aboutPageContent.sections.aboutParagraphs.map((para) => (
                <p key={para}>{para}</p>
              ))}
            </div>
            <h2 className="uppercase tracking-tight mt-16 mb-8 text-2xl sm:text-3xl break-words leading-tight">
              {aboutPageContent.sections.journeyHeading}
            </h2>
            <div className="space-y-0 border-l-2 border-black">
              {journey.map((job) => (
                <div key={job.year} className="relative pl-8 pb-12 group">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 bg-white border-2 border-black group-hover:bg-lime-300 transition-colors"></div>
                  <div className="font-mono text-xs font-bold mb-1 bg-black text-white inline-block px-2">
                    {job.year}
                  </div>
                  <h4 className="text-xl sm:text-2xl font-black break-words leading-tight">{job.role}</h4>
                  <p className="font-mono text-sm text-gray-600 mt-2 break-words leading-relaxed">{job.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t-2 border-black">
              <h4 className="font-black text-sm mb-6 uppercase">
                {aboutPageContent.sections.companiesHeading}
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 items-center">
                {companies.map((company) => (
                  <div
                    key={company.name}
                    className="group p-4 border border-transparent hover:border-black/10 transition-colors flex items-center justify-center h-24 bg-white/50"
                  >
                    <img
                      src={company.logo}
                      alt={`${company.name} Logo`}
                      loading="lazy"
                      className="max-h-8 md:max-h-10 grayscale group-hover:grayscale-0 transition-all opacity-80 group-hover:opacity-100"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 p-8 border-2 border-black bg-lime-50">
              <h3 className="text-xl sm:text-2xl font-black uppercase mb-4 break-words leading-tight">
                {aboutPageContent.humanSection.heading}
              </h3>
              <p className="font-mono text-sm leading-relaxed mb-8 break-words">
                {aboutPageContent.humanSection.intro}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {humanSide.map((item) => (
                  <div key={item.title} className="flex gap-4 items-start">
                    <div className="bg-black text-lime-300 p-2 border-2 border-black">
                      <item.icon size={20} />
                    </div>
                    <div>
                      <h4 className="font-black uppercase text-sm mb-1">{item.title}</h4>
                      <p className="font-mono text-xs break-words leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default AboutPage;