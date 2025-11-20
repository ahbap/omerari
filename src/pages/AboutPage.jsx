import React from 'react';
import { Check, Link as LinkIcon, MessageSquare, Zap } from 'lucide-react';

const AboutPage = () => {
  const myProfilePhoto =
    'https://media.licdn.com/dms/image/v2/D4D03AQEXEuj2mOhMoQ/profile-displayphoto-scale_400_400/B4DZobLDIjK0Ag-/0/1761392473397?e=1765411200&v=beta&t=t_urg8Vwm4oLZ3y-5GVZoP_qd93p9B6kf57qZW40XE0';

  const journey = [
    {
      year: '2025 – GÜNÜMÜZ',
      role: 'UX EĞİTMENİ, DANIŞMAN VE DESIGNOPS',
      desc: 'Bireysel tasarımcılar için eğitim programları, kurumlar için özel UX/Product Design eğitimleri ve Ops danışmanlığı ile çalışıyorum.',
    },
    {
      year: '2023 – 2025',
      role: 'FINTECH TASARIM LİDERLİĞİ',
      desc: 'Dijital cüzdanlar, ödeme akışları, risk ve limit yönetimi gibi kritik ürünlerde tasarım süreçlerini olgunlaştırmaya odaklandım. 13M+ kullanıcıya ulaşan ürünlerde deneyim standartlarını yeniden ele aldım. Ayrıca tasarım ekibini büyütme süreçlerini yönettim, yetenek havuzu oluşturma ve işe alım süreçlerinde aktif rol aldım.',
    },
    {
      year: '2021 – 2023',
      role: 'HEPSİBURADA & HEPSİPAY',
      desc: "Türkiye’nin en büyük e-ticaret platformunda, Hepsipay mobil cüzdan ürününün tasarım liderliğini üstlendim. 12 kişilik tasarım ekibini yönettim; Junior'dan Principle seviyesine kadar 40+ işe alım görüşmesi yaparak ekibi büyüttüm. Tasarım süreçlerini, ritüelleri ve ResearchOps yapılarını kurdum.",
    },
    {
      year: '2013 – 2021',
      role: 'BANKACILIK & DİJİTAL ÜRÜN TASARIMI',
      desc: 'Bu dönemde farklı bankalarda çalışarak hem son kullanıcı hem kurum içi operasyonel ürünlerde görev aldım. Finansal süreçlerin karmaşıklığı, tasarım kararlarının işleyişe etkisini yakından görmemi sağladı.',
    },
  ];

  const humanSide = [
    { icon: Check, title: 'GERÇEK DENEYİM', text: 'Gerçek ürün deneyimine dayalı, uygulanabilir yöntemler' },
    { icon: Zap, title: 'NET SÜREÇLER', text: 'Ekiplerin çalışma biçimini hızlandıran net süreçler' },
    { icon: LinkIcon, title: 'EKİP UYUMU', text: 'Tasarım-ürün-teknik uyumunu güçlendiren yaklaşım' },
    { icon: MessageSquare, title: 'AÇIK İLETİŞİM', text: 'Sakin, düzenli ve erişilebilir iletişim modeli' },
  ];

  const companies = [
    {
      name: 'Hepsiburada',
      logo:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Hepsiburada_logo_official.svg/2560px-Hepsiburada_logo_official.svg.png',
    },
    {
      name: 'QNB',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d6/Logo_Qatar_National_Bank.png',
    },
    {
      name: 'Garanti BBVA',
      logo:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Garanti_Bankas%C4%B1_Logo.svg/2560px-Garanti_Bankas%C4%B1_Logo.svg.png',
    },
    {
      name: 'DenizBank',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/DenizBank_logo.svg/2560px-DenizBank_logo.svg.png',
    },
  ];

  return (
    <div className="animate-in slide-in-from-bottom-8 duration-500">
      <div className="border-b-2 border-black">
        <div className="container mx-auto px-6 py-24">
          <h1 className="text-6xl md:text-9xl font-black uppercase mb-6 tracking-tighter break-words">
            ÖMER <span className="bg-lime-300 px-4">ARI.</span>
          </h1>
          <div className="max-w-4xl font-mono text-lg md:text-xl leading-relaxed border-l-4 border-black pl-6">
            Fintech ve e-ticaret ürünlerinde deneyim tasarımına odaklanan bir tasarım lideri ve eğitmenim. 10 yılı aşkın süredir ürün takımlarıyla birlikte çalışan, milyonlarca kullanıcının deneyimlediği akışlar tasarlayan bir UX uzmanıyım.
          </div>
        </div>
      </div>
      <div className="container mx-auto px-6 py-20 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <div className="border-2 border-black bg-white p-6 sticky top-24 shadow-[8px_8px_0_0_#000]">
            <div
              className="aspect-square bg-gray-200 border-2 border-black mb-4 grayscale hover:grayscale-0 transition-all duration-500 bg-cover bg-center"
              style={{ backgroundImage: `url('${myProfilePhoto}')` }}
            ></div>
            <h3 className="font-black text-2xl uppercase">TASARIM LİDERİ</h3>
            <p className="font-mono text-xs mt-2">İSTANBUL</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {['UX Design', 'Strategy', 'Ops', 'Fintech'].map((tag) => (
                <span key={tag} className="bg-black text-white px-2 py-1 text-xs font-mono">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="md:col-span-8">
          <div className="prose prose-lg prose-headings:font-black prose-p:font-mono max-w-none">
            <h2 className="uppercase tracking-tight mb-8">KISACA BEN KİMİM?</h2>
            <div className="space-y-8 text-lg leading-loose text-gray-800">
              <p>
                Fintech, bankacılık ve e-ticaret alanlarında çalışan ürün ekipleriyle uzun süredir birlikte çalışıyorum. Bankacılık sektöründeki 8 yıllık deneyimim, kullanıcı ihtiyaçlarını iş hedefleriyle birleştirme becerimi güçlendirdi.
              </p>
              <p>
                Hepsiburada ve Hepsipay’de tasarım ekibini yönetirken; QR ödeme, hızlı kredi, dijital cüzdan, kart yönetimi ve yüksek hacimli ödeme akışları gibi kritik ürünlerde tasarım süreçlerini yönettim. Bu süreçte sadece arayüz üretmedim; araştırma süreçlerini, ekip ritüellerini, karar toplantılarını ve dokümantasyon standartlarını da yeniden kurguladım.
              </p>
              <p>
                Bugün, bireysel tasarımcıların kariyer yolculuğunu destekleyen eğitim programlarıyla ve şirketlerin tasarım süreçlerini güçlendiren danışmanlıklarla çalışıyorum. Amacım; karmaşık görünen süreçleri sade, anlaşılır ve sürdürülebilir hale getirmek.
              </p>
            </div>
            <h2 className="uppercase tracking-tight mt-16 mb-8">PROFESYONEL YOLCULUK</h2>
            <div className="space-y-0 border-l-2 border-black">
              {journey.map((job) => (
                <div key={job.year} className="relative pl-8 pb-12 group">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 bg-white border-2 border-black group-hover:bg-lime-300 transition-colors"></div>
                  <div className="font-mono text-xs font-bold mb-1 bg-black text-white inline-block px-2">
                    {job.year}
                  </div>
                  <h4 className="text-2xl font-black">{job.role}</h4>
                  <p className="font-mono text-sm text-gray-600 mt-2">{job.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t-2 border-black">
              <h4 className="font-black text-sm mb-6 uppercase">GÖREV ALDIĞIM ŞİRKETLER</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
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
              <h3 className="text-2xl font-black uppercase mb-4">BİRAZ DA İŞİN İNSAN TARAFI</h3>
              <p className="font-mono text-sm leading-relaxed mb-8">
                İşimde en çok sevdiğim şey, insanların daha düzenli, daha net ve daha güvenle üretebildiği bir ortam oluşturmak. Öğretmeyi ve birlikte üretmeyi seviyorum.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {humanSide.map((item) => (
                  <div key={item.title} className="flex gap-4 items-start">
                    <div className="bg-black text-lime-300 p-2 border-2 border-black">
                      <item.icon size={20} />
                    </div>
                    <div>
                      <h4 className="font-black uppercase text-sm mb-1">{item.title}</h4>
                      <p className="font-mono text-xs">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
