import React from 'react';
import { useNavigate } from 'react-router-dom';
import BrutalButton from '../components/buttons/BrutalButton.jsx';
import ModuleAccordion from '../components/sections/ModuleAccordion.jsx';
import { Helmet } from 'react-helmet-async';

const trainingPhotos = [
  {
    url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop',
    label: 'UX WORKSHOP',
    location: 'KOLEKTİF HOUSE',
    year: "'24",
  },
  {
    url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop',
    label: 'TAKIM EĞİTİMİ',
    location: 'İSTANBUL',
    year: "'23",
  },
  {
    url: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=800&auto=format&fit=crop',
    label: 'STRATEJİ SUNUMU',
    location: 'ONLINE',
    year: "'24",
  },
  {
    url: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format&fit=crop',
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
        <title>UX Eğitimleri &amp; Workshoplar – Ömer Arı</title>
        <meta
          name="description"
          content="UX/UI, Design Thinking, Lean UX, DesignOps ve araştırma odaklı profesyonel eğitimler. Bireysel ve kurumsal ekipler için uygulamalı eğitim programları."
        />
      </Helmet>

      <div className="animate-in fade-in duration-500">
      <div className="bg-lime-300 border-b-2 border-black py-24">
        <div className="container mx-auto px-6">
          <div className="inline-block border-2 border-black px-3 py-1 font-bold bg-white mb-6 text-sm uppercase tracking-widest">
            AKADEMİ
          </div>
          <h1 className="text-6xl md:text-8xl font-black uppercase leading-none mb-6">
            UYGULANABİLİR
            <br />
            UX EĞİTİMLERİ.
          </h1>
          <p className="font-mono text-xl max-w-3xl border-l-4 border-black pl-6">
            Gerçek ürün örnekleri, adım adım ilerleyen modüller ve pratik odaklı içeriklerle; hem bireysel tasarımcıları hem de ürün ekiplerini destekleyen eğitim programları.
          </p>
        </div>
      </div>
      <div className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-black uppercase mb-12 border-b-2 border-black pb-4 inline-block">
          BİREYSEL PROGRAMLAR
        </h2>
        <div className="grid md:grid-cols-3 gap-8 mb-24 items-start">
          <div className="bg-white border-2 border-black flex flex-col relative shadow-[8px_8px_0_0_#000] hover:shadow-[4px_4px_0_0_#000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all">
            <div className="bg-black text-white p-4 font-mono text-center font-bold uppercase border-b-2 border-black">
              6 HAFTA • UYGULAMALI
            </div>
            <div className="p-6">
              <h3 className="text-3xl font-black uppercase mb-4">UX TEMELLERİ</h3>
              <p className="font-mono text-sm text-gray-600 mb-6">
                Kullanıcı deneyimi (UX) temelleri, kullanıcı araştırması, akış tasarımı, prototipleme ve kullanılabilirlik prensiplerini adım adım öğreten uygulamalı bir program.
              </p>
              <div className="mb-6">
                <h4 className="font-bold uppercase text-xs mb-2">KİMLER İÇİN?</h4>
                <p className="font-mono text-xs text-gray-500">UX'e yeni başlayanlar, Ürün tasarımına yönelmek isteyenler, Ürün yöneticileri, PM'ler, Developer'lar.</p>
              </div>
              <div className="border-t-2 border-black mt-4">
                <ModuleAccordion title="Modül 1: Kullanıcı Araştırması">
                  Problem tanımı, Görüşme hazırlığı, Persona ve ihtiyaç çıkarımı.
                </ModuleAccordion>
                <ModuleAccordion title="Modül 2: Kullanıcı Akışları">
                  User flow mantığı, Bilgi mimarisi (IA), Edge case düşünme.
                </ModuleAccordion>
                <ModuleAccordion title="Modül 3: Wireframe">
                  Hızlı çizim teknikleri, Low-fi prototip, Figma temel yapı.
                </ModuleAccordion>
                <ModuleAccordion title="Modül 4: Prototipleme">
                  Prototip türleri, Etkileşim ekleme, Teste hazırlık.
                </ModuleAccordion>
                <ModuleAccordion title="Modül 5: Kullanılabilirlik Testi">
                  Test senaryosu hazırlama, Temel yöntemler.
                </ModuleAccordion>
                <ModuleAccordion title="Modül 6: Final Proje">
                  Senaryo belirleme, Tasarım, Sunum + Geri bildirim.
                </ModuleAccordion>
              </div>
              <BrutalButton className="w-full mt-6" onClick={goToContact}>
                BİLGİ AL
              </BrutalButton>
            </div>
          </div>

          <div className="bg-white border-2 border-black flex flex-col relative shadow-[8px_8px_0_0_#000] hover:shadow-[4px_4px_0_0_#000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all">
            <div className="bg-lime-300 text-black p-4 font-mono text-center font-bold uppercase border-b-2 border-black">
              4 HAFTA • KARİYER
            </div>
            <div className="p-6">
              <h3 className="text-3xl font-black uppercase mb-4">PORTFOLYO & KARİYER</h3>
              <p className="font-mono text-sm text-gray-600 mb-6">
                Portfolyo yapısı, case study hazırlığı, storytelling ve iş görüşmesine hazırlık üzerine yoğun bir kariyer geliştirme programı.
                <br />
                <br />
                <span className="bg-lime-100 px-1">
                  Son 4 yılda 100+ portfolyo incelemiş ve 50+ tasarımcı işe alım görüşmesi yapmış bir yöneticiden, masanın diğer tarafındaki gerçek beklentileri öğrenin.
                </span>
              </p>
              <div className="mb-6">
                <h4 className="font-bold uppercase text-xs mb-2">KİMLER İÇİN?</h4>
                <p className="font-mono text-xs text-gray-500">Portfolyosunu yenilemek isteyenler, Junior-Mid geçişi hedefleyenler, İş görüşmesine hazırlık yapmak isteyenler.</p>
              </div>
              <div className="border-t-2 border-black mt-4">
                <ModuleAccordion title="Modül 1: Portfolyo Temelleri">
                  Landing sayfası kurgusu, Proje seçimi, Görsel hiyerarşi.
                </ModuleAccordion>
                <ModuleAccordion title="Modül 2: Case Study Yapısı">
                  Problem tanımı, Çözüm süreci, Sonuç ve etki anlatımı.
                </ModuleAccordion>
                <ModuleAccordion title="Modül 3: Storytelling">
                  Hikâye kurgusu, 'Neden böyle tasarladım?' sorusu.
                </ModuleAccordion>
                <ModuleAccordion title="Modül 4: Görüşme Hazırlığı">
                  Görüşmeye hazırlık, Mülakat egzersizleri, Sık sorulan sorular, Sunum teknikleri, Görüşme sonrası analiz.
                </ModuleAccordion>
              </div>
              <BrutalButton className="w-full mt-6" onClick={goToContact}>
                GÖRÜŞME PLANLA
              </BrutalButton>
            </div>
          </div>

          <div className="bg-white border-2 border-black flex flex-col relative shadow-[8px_8px_0_0_#000] hover:shadow-[4px_4px_0_0_#000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all">
            <div className="bg-white text-black p-4 font-mono text-center font-bold uppercase border-b-2 border-black">
              KİŞİYE ÖZEL • ESNEK
            </div>
            <div className="p-6">
              <h3 className="text-3xl font-black uppercase mb-4">1:1 MENTORLUK #DESIGNERTHERAPY</h3>
              <p className="font-mono text-sm text-gray-600 mb-6">
              Düzenli görüşmeler, proje akışını çözen pratik rehberlik ve kişisel gelişim planı... Tasarımcının zihnini temizleyen, kararlarını netleştiren ve kariyer yolculuğunu güçlendiren özel bir 1:1 UX mentorluk deneyimi.
              </p>
              <div className="mb-6">
                <h4 className="font-bold uppercase text-xs mb-2">FORMAT</h4>
                <p className="font-mono text-xs text-gray-500">4-8 Oturum, 1:1 Zoom görüşmeleri, Notion takibi.</p>
              </div>
              <div className="border-t-2 border-black mt-4">
                <div className="py-2 font-mono text-sm border-b border-gray-200">1. Kişisel Yol Haritası</div>
                <div className="py-2 font-mono text-sm border-b border-gray-200">2. Proje Takibi & Feedback</div>
                <div className="py-2 font-mono text-sm border-b border-gray-200">3. Case Study Desteği</div>
                <div className="py-2 font-mono text-sm">4. Mülakat Hazırlığı</div>
              </div>
              <BrutalButton className="w-full mt-6" onClick={goToContact}>
                DETAYLAR
              </BrutalButton>
            </div>
          </div>
        </div>

        <div className="mb-24 border-2 border-black bg-white p-2">
          <div className="flex justify-between items-center mb-4 ml-2 mt-2">
            <h2 className="text-2xl font-black uppercase flex items-center">
              <div className="w-3 h-3 bg-lime-500 mr-3"></div> ETKİNLİKLERDEN KARELER
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
                <h2 className="text-4xl md:text-5xl font-black uppercase mb-6">KURUMSAL EĞİTİMLER</h2>
                <p className="font-mono text-gray-300 max-w-3xl text-lg leading-relaxed border-l-4 border-lime-300 pl-6">
                  Kurumsal eğitimler, ekiplerin birlikte çalışma biçimini güçlendirmek, ortak bir tasarım dili oluşturmak ve karar alma süreçlerini hızlandırmak için tasarlandı. İçerikler kurumun sektörüne ve ihtiyacına göre uyarlanabilir.
                </p>
              </div>
              <BrutalButton variant="primary" onClick={goToContact} className="shrink-0">
                KURUMSAL TEKLİF AL
              </BrutalButton>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                'UX / PRODUCT DESIGN EĞİTİMİ',
                'DESIGN THINKING ATÖLYESİ',
                'KURUMA ÖZEL WORKSHOP',
                'ÜRÜN EKİPLERİ İÇİN UYGULAMALI UX',
              ].map((title, index) => (
                <div
                  key={title}
                  className="border-2 border-white/20 p-6 hover:border-lime-300 hover:bg-white/5 transition-all group/item"
                >
                  <h3 className="text-lime-300 font-black text-xl mb-3 group-hover/item:translate-x-2 transition-transform">
                    {title}
                  </h3>
                  <p className="font-mono text-sm text-gray-400">
                    {[
                      'Ürün ekipleri için temel UX prensipleri, araştırma, akış tasarımı ve kullanılabilirlik odaklı kapsamlı eğitim.',
                      'Problem tanımından prototiplemeye, sprint tarzında düzenlenen interaktif atölye çalışması.',
                      'Şirketinizin spesifik ihtiyaçlarına göre tasarlanan, çıktı odaklı özel atölye programları.',
                      'PM, developer ve tasarımcıların birlikte katıldığı, gerçek projeler üzerinde çalışılan pratik program.',
                    ][index]}
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