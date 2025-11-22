// src/content/about.js

export const aboutPageContent = {
    meta: {
      title: 'Hakkımda – Ömer Arı, Product Design Lead',
      description:
        '12+ yıllık deneyime sahip bir Product Design Lead. Fintech ve e-ticaret projelerinde UX, DesignOps, ürün tasarımı ve ekip yönetimi üzerine uzmanlaşmış; eğitimler, danışmanlık ve mentorluk veren bir tasarım lideri.',
    },
  
    hero: {
      headingPrefix: 'ÖMER',
      headingHighlight: 'ARI.',
      intro:
        'Fintech ve e-ticaret ürünlerinde deneyim tasarımına odaklanan bir tasarım lideri ve eğitmenim. 10 yılı aşkın süredir ürün takımlarıyla birlikte çalışan, milyonlarca kullanıcının deneyimlediği akışlar tasarlayan bir UX uzmanıyım.',
      // AboutPage’te zaten bu path kullanılıyor
      photoSrc: '/images/omerari-profile.jpg',
    },
  
    sidebar: {
        title: 'TASARIM LİDERİ',
        location: 'İSTANBUL',
        tags: ['Product Design', 'Strategy', 'UX Training', 'DesignOps', 'Fintech', 'Mentoring'],
      },
  
    sections: {
      aboutHeading: 'KISACA BEN KİMİM?',
      aboutParagraphs: [
        'Fintech, bankacılık ve e-ticaret alanlarında çalışan ürün ekipleriyle uzun süredir birlikte çalışıyorum. Bankacılık sektöründeki 8 yıllık deneyimim, kullanıcı ihtiyaçlarını iş hedefleriyle birleştirme becerimi güçlendirdi.',
        'Hepsiburada ve Hepsipay’de tasarım ekibini yönetirken; QR ödeme, hızlı kredi, dijital cüzdan, kart yönetimi ve yüksek hacimli ödeme akışları gibi kritik ürünlerde tasarım süreçlerini yönettim. Bu süreçte sadece arayüz üretmedim; araştırma süreçlerini, ekip ritüellerini, karar toplantılarını ve dokümantasyon standartlarını da yeniden kurguladım.',
        'Bugün, bireysel tasarımcıların kariyer yolculuğunu destekleyen eğitim programlarıyla ve şirketlerin tasarım süreçlerini güçlendiren danışmanlıklarla çalışıyorum. Amacım; karmaşık görünen süreçleri sade, anlaşılır ve sürdürülebilir hale getirmek.',
      ],
  
      journeyHeading: 'PROFESYONEL YOLCULUK',
      companiesHeading: 'GÖREV ALDIĞIM ŞİRKETLER',
    },
  
    journey: [
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
    ],
  
    companies: [
      {
        name: 'Hepsiburada',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Hepsiburada_logo_official.svg/2560px-Hepsiburada_logo_official.svg.png',
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
        logo:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/DenizBank_logo.svg/2560px-DenizBank_logo.svg.png',
      },
    ],
  
    humanSection: {
      heading: 'BİRAZ DA İŞİN İNSAN TARAFI',
      intro:
        'İşimde en çok sevdiğim şey, insanların daha düzenli, daha net ve daha güvenle üretebildiği bir ortam oluşturmak. Öğretmeyi ve birlikte üretmeyi seviyorum.',
    },
  
    // iconKey → AboutPage içinde ikon map ile eşleyeceğiz
    humanSide: [
      {
        iconKey: 'check',
        title: 'GERÇEK DENEYİM',
        text: 'Gerçek ürün deneyimine dayalı, uygulanabilir yöntemler.',
      },
      {
        iconKey: 'zap',
        title: 'NET SÜREÇLER',
        text: 'Ekiplerin çalışma biçimini hızlandıran net süreçler.',
      },
      {
        iconKey: 'link',
        title: 'EKİP UYUMU',
        text: 'Tasarım-ürün-teknik uyumunu güçlendiren yaklaşım.',
      },
      {
        iconKey: 'message',
        title: 'AÇIK İLETİŞİM',
        text: 'Sakin, düzenli ve erişilebilir iletişim modeli.',
      },
    ],
  };