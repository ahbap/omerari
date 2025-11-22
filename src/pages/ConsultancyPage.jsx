import React from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { Shield, Sparkles } from 'lucide-react';
import SectionHeader from '../components/sections/SectionHeader.jsx';
import BrutalButton from '../components/buttons/BrutalButton.jsx';
import { Helmet } from 'react-helmet-async';
import { consultancyPageContent } from '../content/consultancy.js';

const ConsultancyPage = () => {
  const navigate = useNavigate();
  const { openAiTool } = useOutletContext() || {};

  return (
    <>
      <Helmet>
        <title>{consultancyPageContent.meta.title}</title>
        <meta
          name="description"
          content={consultancyPageContent.meta.description}
        />
      </Helmet>

      <div className="animate-in fade-in duration-500 container mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <SectionHeader
          title={consultancyPageContent.header.title}
          subtitle={consultancyPageContent.header.subtitle}
        />
        <div className="grid md:grid-cols-12 gap-12 mb-24">
          <div className="md:col-span-7 space-y-8">
            {consultancyPageContent.steps.map((item) => (
              <div key={item.step} className="flex gap-6 group">
                <div className="font-black text-3xl sm:text-4xl text-transparent" style={{ WebkitTextStroke: '1px black' }}>
                  {item.step}
                </div>
                <div className="border-l-2 border-black pl-6 pb-6">
                  <h3 className="text-2xl font-black uppercase mb-2 bg-lime-300 inline-block px-2">
                    {item.title}
                  </h3>
                  <p className="font-mono text-gray-600 text-sm leading-relaxed break-words">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="md:col-span-5">
            <div className="sticky top-24 border-2 border-black bg-white p-8 shadow-[8px_8px_0_0_#000]">
              <Shield size={48} className="mb-6" strokeWidth={1.5} />
              <h3 className="text-2xl sm:text-3xl font-black uppercase mb-4 break-words leading-tight">
                {consultancyPageContent.sidebar.iconLabel.split('\n').map((line, index) => (
                  <React.Fragment key={index}>
                    {index > 0 && <br />}
                    {line}
                  </React.Fragment>
                ))}
              </h3>
              <p className="font-mono text-sm mb-6 leading-relaxed break-words">
                {consultancyPageContent.sidebar.paragraph}
              </p>

              <div className="border-2 border-black border-dashed p-4 mb-8 bg-white">
                <h4 className="font-black uppercase text-sm mb-3 bg-black text-white inline-block px-2">
                  {consultancyPageContent.sidebar.audit.title}
                </h4>
                <p className="font-mono text-xs text-gray-600 mb-3 break-words">
                  {consultancyPageContent.sidebar.audit.intro}
                </p>
                <ul className="font-mono text-xs space-y-2">
                  {consultancyPageContent.sidebar.audit.items.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-lime-500 mt-1.5 mr-2 rounded-full shrink-0"></div>
                      <span className="break-words">
                        <strong>{item.label}</strong> {item.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className="mb-8 bg-lime-50 border-2 border-black p-4 cursor-pointer hover:bg-lime-300 transition-colors"
                onClick={openAiTool}
              >
                <div className="flex items-center gap-2 mb-2 font-black uppercase text-sm">
                  <Sparkles size={16} /> {consultancyPageContent.sidebar.aiTool.label}
                </div>
                <p className="text-xs font-mono break-words">
                  {consultancyPageContent.sidebar.aiTool.description}
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {consultancyPageContent.sidebar.plans.map((plan, index) => (
                  <div
                    key={index}
                    className="border border-black p-2 text-center font-bold text-xs uppercase bg-lime-100"
                  >
                    {plan}
                  </div>
                ))}
              </div>
              <BrutalButton
                className="w-full"
                onClick={() => navigate(consultancyPageContent.sidebar.cta.targetPath)}
              >
                {consultancyPageContent.sidebar.cta.label}
              </BrutalButton>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConsultancyPage;
