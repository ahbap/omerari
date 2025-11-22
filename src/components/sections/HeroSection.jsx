import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import BrutalButton from '../buttons/BrutalButton.jsx';

const HeroSection = ({ onNavigate, onOpenAiTool }) => (
  <section className="border-b-2 border-black bg-[#f4f4f0] relative overflow-hidden">
    <div
      className="absolute inset-0 opacity-10 pointer-events-none"
      style={{
        backgroundImage:
          'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
        backgroundSize: '40px 40px',
      }}
    ></div>
    <div className="container mx-auto px-4 sm:px-6 py-20 md:py-32 relative z-10">
      <div className="inline-block bg-black text-white px-4 py-2 font-mono text-sm font-bold mb-6 rotate-2 shadow-[4px_4px_0px_0px_#ccff00]">
        UX STRATEGY & PRODUCT DESIGN
      </div>
      <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black uppercase leading-[0.95] tracking-tighter mb-8 break-words">
        FİNTECH VE <br />
        <span className="bg-lime-300 px-2">E-TİCARET</span> İÇİN
        <br />
        UYGULANABİLİR <span className="text-transparent stroke-black" style={{ WebkitTextStroke: '2px black' }}>
          UX EĞİTİMLERİ.
        </span>
      </h1>
      <div className="flex flex-col md:flex-row gap-8 items-start md:items-end justify-between border-t-2 border-black pt-8 max-w-6xl">
        <p className="font-mono text-base sm:text-lg max-w-xl leading-relaxed break-words">
          Fintech, bankacılık ve e-ticaret alanlarında milyonlarca kullanıcının deneyimlediği akışlarda çalışan bir tasarım lideri ve eğitmenim. Gerçek ürün deneyimine dayanan eğitimler ve atölye çalışmalarıyla ekipleri destekliyorum.
        </p>
        <div className="flex gap-4 w-full md:w-auto flex-wrap">
          <BrutalButton onClick={() => onNavigate('/contact')} className="flex-1 md:flex-none">
            GÖRÜŞME PLANLA
          </BrutalButton>
          <BrutalButton variant="outline" onClick={() => onNavigate('/trainings')} className="flex-1 md:flex-none">
            EĞİTİMLERİ GÖR
          </BrutalButton>
        </div>
      </div>
      <div
        className="mt-12 inline-flex items-center gap-4 p-4 border-2 border-black bg-white shadow-[4px_4px_0_0_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_#000] transition-all cursor-pointer w-full sm:max-w-md break-words"
        onClick={onOpenAiTool}
      >
        <div className="bg-lime-300 p-2 border-2 border-black rounded-full">
          <Sparkles size={20} className="text-black" />
        </div>
        <div>
          <h4 className="font-black text-sm uppercase">TASARIM PROBLEMİN Mİ VAR?</h4>
          <p className="font-mono text-xs text-gray-600">Yapay zeka destekli "AI Reframer" aracımı dene.</p>
        </div>
        <ArrowRight size={20} className="ml-auto" />
      </div>
    </div>
  </section>
);

export default HeroSection;
