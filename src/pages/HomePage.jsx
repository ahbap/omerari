import React from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import HeroSection from '../components/sections/HeroSection.jsx';
import HeroTicker from '../components/sections/HeroTicker.jsx';
import ServicesSection from '../components/sections/ServicesSection.jsx';
import ExperienceTestimonialsSection from '../components/sections/ExperienceTestimonialsSection.jsx';
import MethodSection from '../components/sections/MethodSection.jsx';

const HomePage = () => {
  const navigate = useNavigate();
  const { openAiTool } = useOutletContext() || {};

  const handleNavigate = (path) => navigate(path);

  return (
    <div className="animate-in fade-in duration-500">
      <HeroSection onNavigate={handleNavigate} onOpenAiTool={openAiTool} />
      <HeroTicker />
      <ServicesSection onNavigate={handleNavigate} />
      <ExperienceTestimonialsSection />
      <MethodSection onNavigate={handleNavigate} />
    </div>
  );
};

export default HomePage;
