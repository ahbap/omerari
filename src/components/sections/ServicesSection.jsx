import React from 'react';
import { BookOpen, Layers, Shield, Users } from 'lucide-react';
import BrutalCard from '../cards/BrutalCard.jsx';
import SectionHeader from './SectionHeader.jsx';
import { homePageContent } from '../../content/home.js';

const ICON_MAP = {
  AKADEMİ: BookOpen,
  WORKSHOP: Users,
  STRATEJİ: Shield,
  SİSTEM: Layers,
};

const ServicesSection = ({ onNavigate }) => (
  <section className="container mx-auto px-6 py-24">
    <SectionHeader
      title={homePageContent.services.sectionTitle}
      subtitle={homePageContent.services.sectionSubtitle}
    />
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {homePageContent.services.cards.map((service) => (
        <BrutalCard
          key={service.id}
          title={service.title}
          desc={service.description}
          label={service.label}
          icon={ICON_MAP[service.label]}
          onClick={() => onNavigate(service.targetPath)}
        />
      ))}
    </div>
  </section>
);

export default ServicesSection;
