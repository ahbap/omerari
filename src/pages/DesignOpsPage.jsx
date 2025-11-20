import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, BookOpen, Calendar, Check, Layout, Layers, Zap } from 'lucide-react';
import SectionHeader from '../components/sections/SectionHeader.jsx';
import BrutalButton from '../components/buttons/BrutalButton.jsx';

const designOpsServices = [
  'Tasarım süreçlerinin yeniden yapılandırılması',
  'Ritüel tasarımı (sync, critique, review, planning)',
  'Rol ve sorumluluk tanımları',
  'Design system operasyonu (component lifecycle, versiyonlama)',
  'Dokümantasyon standartları (brief, spec, test planı vb.)',
];

const researchOpsItems = [
  'Araştırma repository sistemi',
  'Etiketleme ve arama yapısı',
  'Hızlı araştırma süreçleri (lightweight research)',
  'Moderasyon → analiz → insight döngüsü',
  'Insight özetleri için standart formatlar',
  'Sonuçların ekiplerle paylaşım ritüelleri',
];

const workingModels = [
  'Operasyon incelemesi (kısa teşhis + yol haritası)',
  'Aylık Ops danışmanlığı',
  'Ops eğitimleri (DesignOps 101, ResearchOps 101, ritüel & dokümantasyon atölyeleri)',
];

const outputs = [
  'UX süreci haritası',
  'Ritüel seti',
  'Araştırma repository yapısı',
  'Rol ve sorumluluk matrisi',
  'Design system kullanım rehberi',
  'Ekip içi iletişim protokolü',
  'Quick win listesi',
];

const DesignOpsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="animate-in fade-in duration-500 container mx-auto px-6 py-20">
      <div className="border-2 border-black bg-white p-12 mb-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-50 pointer-events-none"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-black uppercase mb-6">DESIGNOPS &
            <br />
            RESEARCHOPS
          </h1>
          <p className="font-mono text-lg mb-8">
            Tasarım ekipleri için ritüellerin, iş akışlarının ve dokümantasyonun netleştirildiği, ölçeklenebilir operasyonel yapılar.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-20">
        <div className="border-2 border-black bg-white p-8 hover:bg-lime-300 transition-colors group h-full">
          <Layout size={32} className="mb-4 group-hover:rotate-90 transition-transform duration-500" />
          <h3 className="text-2xl font-black uppercase mb-4">YAPILANDIRMA</h3>
          <p className="font-mono text-xs mb-4 leading-relaxed">Süreç haritaları, rol dağılımı ve ekip çalışma modelini netleştiriyoruz.</p>
        </div>
        <div className="border-2 border-black bg-white p-8 hover:bg-lime-300 transition-colors group h-full">
          <Calendar size={32} className="mb-4 group-hover:scale-110 transition-transform duration-500" />
          <h3 className="text-2xl font-black uppercase mb-4">RİTÜELLER</h3>
          <p className="font-mono text-xs mb-4 leading-relaxed">
            Weekly sync, critique oturumları, review süreçleri, sprint ritüelleri ekip için anlamlı bir tempoya oturtuluyor.
          </p>
        </div>
        <div className="border-2 border-black bg-white p-8 hover:bg-lime-300 transition-colors group h-full">
          <BookOpen size={32} className="mb-4 group-hover:-translate-y-2 transition-transform duration-500" />
          <h3 className="text-2xl font-black uppercase mb-4">DOKÜMANTASYON</h3>
          <p className="font-mono text-xs mb-4 leading-relaxed">
            Design system kuralları, şablonlar, test planları ve rehberlerin erişilebilir bir yapı kuruyoruz.
          </p>
        </div>
      </div>

      <div className="mb-20">
        <SectionHeader
          title="DESIGNOPS"
          subtitle="Tasarım süreçlerinin, araçların ve kültürün yönetimi."
          badge="HİZMET KATEGORİLERİ"
        />
        <div className="grid md:grid-cols-2 gap-6">
          {designOpsServices.map((item, index) => (
            <div
              key={item}
              className="flex items-start p-6 border-2 border-black bg-white hover:bg-lime-50 transition-colors shadow-[4px_4px_0_0_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_#000]"
            >
              <div className="w-8 h-8 bg-black text-lime-300 flex items-center justify-center mr-4 font-black shrink-0 text-lg">
                {index + 1}
              </div>
              <span className="font-mono font-bold text-sm pt-1">{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="border-2 border-black bg-black text-white p-8 md:p-16 mb-20 relative overflow-hidden">
        <div className="relative z-10">
          <div className="inline-block bg-lime-300 text-black px-3 py-1 font-bold mb-6 text-sm uppercase tracking-widest">
            ARAŞTIRMA SÜREÇLERİ
          </div>
          <h2 className="text-4xl md:text-5xl font-black uppercase mb-6">RESEARCHOPS</h2>
          <h3 className="text-xl font-mono font-bold mb-6 text-gray-300">ResearchOps ile araştırma süreçlerini düzenliyoruz.</h3>
          <p className="font-mono text-gray-400 mb-12 max-w-3xl leading-relaxed border-l-2 border-lime-300 pl-6">
            Araştırma ekipleri büyüdükçe, dağınık veri, tekrarlanan çalışmalar ve kaybolan içgörüler en büyük problem haline gelir. ResearchOps, bu süreci sade ve ölçeklenebilir bir yapıya dönüştürmek için kullanılan çerçevedir.
          </p>
          <h4 className="font-black uppercase text-sm mb-6 border-b border-white/20 pb-2 inline-block text-lime-300">BİLEŞENLER</h4>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
            {researchOpsItems.map((item) => (
              <div key={item} className="flex items-start text-sm font-mono group">
                <div className="w-1.5 h-1.5 bg-lime-300 mr-3 mt-1.5 group-hover:scale-150 transition-transform"></div>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mb-20 border-l-8 border-lime-300 pl-8 py-4 bg-white border-y-2 border-r-2 border-black pr-8 shadow-[8px_8px_0_0_#000]">
        <h3 className="text-2xl md:text-3xl font-black uppercase mb-4">FINTECH & E-TİCARET OPS UZMANLIĞI</h3>
        <p className="font-mono text-sm md:text-base leading-relaxed text-gray-700">
          Büyük hacimli fintech ve e-ticaret ürünlerinde; risk senaryoları, güvenlik doğrulama akışları, limit yönetimi ve finansal edge case’ler, tasarım ekipleri için ekstra yük oluşturur. Bu tip ürünlerde kurduğum Ops yapıları, hem ekiplerin işini kolaylaştırıyor hem de ürün kalitesini kontrol edilebilir hale getiriyor.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-20">
        <div className="border-2 border-black bg-white p-8 h-full">
          <div className="flex items-center gap-3 mb-6 border-b-2 border-black pb-4">
            <Zap size={24} />
            <h3 className="text-2xl font-black uppercase">ÇALIŞMA MODELLERİ</h3>
          </div>
          <ul className="space-y-6 font-mono text-sm">
            {workingModels.map((item) => (
              <li key={item} className="flex items-start group">
                <div className="bg-black text-white p-1 mr-3 mt-0.5 group-hover:bg-lime-300 group-hover:text-black transition-colors">
                  <Check size={12} strokeWidth={4} />
                </div>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="border-2 border-black bg-lime-300 p-8 h-full relative">
          <div className="absolute top-4 right-4 opacity-10 pointer-events-none">
            <Layers size={120} />
          </div>
          <div className="flex items-center gap-3 mb-6 border-b-2 border-black pb-4 relative z-10">
            <Layout size={24} />
            <h3 className="text-2xl font-black uppercase">ÇIKTILAR</h3>
          </div>
          <ul className="space-y-4 font-mono text-sm font-bold relative z-10">
            {outputs.map((item) => (
              <li key={item} className="flex items-center border-b border-black/10 pb-2 last:border-0">
                <ArrowRight size={16} className="mr-3 shrink-0" /> {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="text-center">
        <BrutalButton onClick={() => navigate('/contact')} className="mx-auto w-full md:w-auto text-xl py-6 px-12 hover:scale-105">
          OPS DANIŞMANLIĞI AL
        </BrutalButton>
      </div>
    </div>
  );
};

export default DesignOpsPage;
