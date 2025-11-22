import React from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import HeroSection from '../components/sections/HeroSection.jsx';
import HeroTicker from '../components/sections/HeroTicker.jsx';
import ServicesSection from '../components/sections/ServicesSection.jsx';
import ExperienceTestimonialsSection from '../components/sections/ExperienceTestimonialsSection.jsx';
import MethodSection from '../components/sections/MethodSection.jsx';
import { Helmet } from 'react-helmet-async';
import { homePageContent } from '../content/home.js';

const HomePage = () => {
  const navigate = useNavigate();
  const { openAiTool } = useOutletContext() || {};

  const handleNavigate = (path) => navigate(path);

  return (
    <>
      <Helmet>
        <title>{homePageContent.meta.title}</title>
        <meta name="description" content={homePageContent.meta.description} />
      </Helmet>

      <div className="animate-in fade-in duration-500">
        <HeroSection onNavigate={handleNavigate} onOpenAiTool={openAiTool} />
        <HeroTicker />
        <ServicesSection onNavigate={handleNavigate} />
        <ExperienceTestimonialsSection />
        <MethodSection onNavigate={handleNavigate} />
      </div>
    </>
  );
};

export default HomePage;
