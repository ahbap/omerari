import React from 'react';
import { BookOpen, Layers, Shield, Users } from 'lucide-react';
import BrutalCard from '../cards/BrutalCard.jsx';
import SectionHeader from './SectionHeader.jsx';

const services = [
  {
    title: 'BİREYSEL EĞİTİMLER',
    desc:
      'Kariyerini UX ve ürün tasarımı alanında ilerletmek isteyenler için yapılandırılmış programlar. Uygulamalı içerik, gerçek projeler ve birebir geri bildirim odakta.',
    icon: BookOpen,
    label: 'AKADEMİ',
    path: '/trainings',
  },
  {
    title: 'KURUMSAL EĞİTİMLER',
    desc:
      'Ürün ve tasarım ekipleri için, kurumun ihtiyaçlarına uyarlanan, sprint tarzı ve çıktıya odaklı UX eğitimleri.',
    icon: Users,
    label: 'WORKSHOP',
    path: '/trainings',
  },
  {
    title: 'DANIŞMANLIK',
    desc: 'Ürün akışlarını, stratejiyi ve ekip süreçlerini birlikte ele alan, uygulanabilir çalışmalar.',
    icon: Shield,
    label: 'STRATEJİ',
    path: '/consultancy',
  },
  {
    title: 'DESIGN OPS',
    desc: 'Tasarım ekipleri için ritüellerin ve iş akışlarının netleştirildiği ölçeklenebilir yapılar.',
    icon: Layers,
    label: 'SİSTEM',
    path: '/designops',
  },
];

const ServicesSection = ({ onNavigate }) => (
  <section className="container mx-auto px-6 py-24">
    <SectionHeader
      title="HİZMETLER"
      subtitle="Fintech ve e-ticaret dikeylerinde uzmanlaşmış çözümler."
    />
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {services.map((service) => (
        <BrutalCard
          key={service.title}
          {...service}
          onClick={() => onNavigate(service.path)}
        />
      ))}
    </div>
  </section>
);

export default ServicesSection;
