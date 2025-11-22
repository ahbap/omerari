import React from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { Shield, Sparkles } from 'lucide-react';
import SectionHeader from '../components/sections/SectionHeader.jsx';
import BrutalButton from '../components/buttons/BrutalButton.jsx';
import { Helmet } from 'react-helmet-async';

const steps = [
  {
    step: '01',
    title: 'ÜRÜNÜ ANLAMAK',
    desc: 'Mevcut akışlar, kullanıcı geri bildirimleri ve teknik kısıtlar birlikte ele alınır. Ürünün ve ekibin gerçek problemlerini anlamak için gerekiyorsa kısa analiz çalışmaları ve görüşmeler yapılır.',
  },
  {
    step: '02',
    title: 'KARARLARI GÖRÜNÜR KILMAK',
    desc: 'Sorunlar ve fırsatlar, anlaşılır bir biçimde görünür hale getirilir. Önceliklendirilmiş problem listeleri, akış iyileştirme önerileri, prototip örnekleri ve ekibin hemen uygulayabileceği sade rehberler hazırlanır.',
  },
  {
    step: '03',
    title: 'SÜRECİ GÜÇLENDİRMEK',
    desc: 'Ekip ritüelleri (critique, sync, review), iş akışları, sorumluluk dağılımı ve dokümantasyon modelleri yeniden tanımlanır. Amaç; ekibin kendi kendine sürdürülebilir şekilde ilerleyebildiği bir yapı kurmaktır.',
  },
];

const ConsultancyPage = () => {
  const navigate = useNavigate();
  const { openAiTool } = useOutletContext() || {};

  return (
    <>
      <Helmet>
        <title>UX Danışmanlığı &amp; Ürün Stratejisi – Ömer Arı</title>
        <meta
          name="description"
          content="Fintech, e-ticaret ve dijital ürünlerde UX stratejisi, kullanılabilirlik, akış tasarımı, ürün keşfi ve müşteri deneyimi süreçleri için profesyonel danışmanlık hizmetleri."
        />
      </Helmet>

      <div className="animate-in fade-in duration-500 container mx-auto px-6 py-20">
        <SectionHeader
          title="DANIŞMANLIK"
          subtitle="Ürün ekiplerinin karmaşık süreçlerde daha hızlı ve daha net karar alabilmesi için strateji, süreç ve karar desteği."
        />
        <div className="grid md:grid-cols-12 gap-12 mb-24">
          <div className="md:col-span-7 space-y-8">
            {steps.map((item) => (
              <div key={item.step} className="flex gap-6 group">
                <div className="font-black text-4xl text-transparent" style={{ WebkitTextStroke: '1px black' }}>
                  {item.step}
                </div>
                <div className="border-l-2 border-black pl-6 pb-6">
                  <h3 className="text-2xl font-black uppercase mb-2 bg-lime-300 inline-block px-2">
                    {item.title}
                  </h3>
                  <p className="font-mono text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="md:col-span-5">
            <div className="sticky top-24 border-2 border-black bg-white p-8 shadow-[8px_8px_0_0_#000]">
              <Shield size={48} className="mb-6" strokeWidth={1.5} />
              <h3 className="text-3xl font-black uppercase mb-4">
                FİNTECH &
                <br />
                E-TİCARET
              </h3>
              <p className="font-mono text-sm mb-6 leading-relaxed">
                Fintech ürünleri, diğer dijital ürünlere göre daha yüksek risk, güvenlik ve kontrol yükü gerektirir. QR ödeme, kredi, müşteri doğrulama, limit ve risk kontrolleri gibi alanlarda uzun süre aktif çalıştım.
              </p>

              <div className="border-2 border-black border-dashed p-4 mb-8 bg-white">
                <h4 className="font-black uppercase text-sm mb-3 bg-black text-white inline-block px-2">
                  UX DENETİMİ & ANALİZ
                </h4>
                <p className="font-mono text-xs text-gray-600 mb-3">Sadece teorik değil, sonuç odaklı deneyim optimizasyonu için teşhisler ve vaka örnekleri:</p>
                <ul className="font-mono text-xs space-y-2">
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-lime-500 mt-1.5 mr-2 rounded-full shrink-0"></div>
                    <span>
                      <strong>Bankacılık:</strong> Dijital KYC süreçleri ve müşteri olma akışlarındaki deneyim optimizasyonu için kullanılabilirlik denetimi (Audit).
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-lime-500 mt-1.5 mr-2 rounded-full shrink-0"></div>
                    <span>
                      <strong>Turizm:</strong> Konaklama ve paket turizm uygulaması için heuristic analiz ve dönüşüm optimizasyonu raporlaması.
                    </span>
                  </li>
                </ul>
              </div>

              <div
                className="mb-8 bg-lime-50 border-2 border-black p-4 cursor-pointer hover:bg-lime-300 transition-colors"
                onClick={openAiTool}
              >
                <div className="flex items-center gap-2 mb-2 font-black uppercase text-sm">
                  <Sparkles size={16} /> AI Strateji Aracımı Dene
                </div>
                <p className="text-xs font-mono">Bir ürün problemini gir, Gemini ile stratejik "How Might We" soruları üret.</p>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="border border-black p-2 text-center font-bold text-xs uppercase bg-lime-100">PROJE BAZLI</div>
                <div className="border border-black p-2 text-center font-bold text-xs uppercase bg-lime-100">AYLIK DANIŞMANLIK</div>
              </div>
              <BrutalButton className="w-full" onClick={() => navigate('/contact')}>
                İLETİŞİME GEÇ
              </BrutalButton>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConsultancyPage;
