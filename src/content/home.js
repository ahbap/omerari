// src/content/home.js

export const homePageContent = {
    meta: {
      title: 'Ömer Arı – Product Design Lead | UX Eğitmeni',
      description:
        'Fintech ve e-ticaret dikeylerinde kullanıcı deneyimi, DesignOps, ResearchOps ve ödeme sistemleri tasarımı üzerine çalışan bir ürün tasarım lideri ve UX eğitmeniyim. Gerçek ürün deneyimine dayalı eğitimler ve danışmanlık sunuyorum.',
    },
  
    // HERO / ÜST BÖLÜM
    hero: {
      badge: 'UX STRATEGY & PRODUCT DESIGN',
      heading: {
        line1: 'FİNTECH VE',
        line2Highlight: 'E-TİCARET',
        line2Rest: 'İÇİN',
        line3Main: 'UYGULANABİLİR',
        line3Outline: 'UX EĞİTİMLERİ.',
      },
      // Eski kullanım için, başka yer kullanıyorsa bozulmaması adına kalsın
      headingLines: [
        'FİNTECH VE',
        'E-TİCARET İÇİN',
        'UYGULANABİLİR UX EĞİTİMLERİ.',
      ],
      intro:
        'Fintech, bankacılık ve e-ticaret alanlarında milyonlarca kullanıcının deneyimlediği akışlarda çalışan bir tasarım lideri ve eğitmenim. Gerçek ürün deneyimine dayanan eğitimler ve atölye çalışmalarıyla ekipleri destekliyorum.',
      primaryCta: {
        label: 'GÖRÜŞME PLANLA',
        targetPath: '/contact',
      },
      secondaryCta: {
        label: 'EĞİTİMLERİ GÖR',
        targetPath: '/trainings',
      },
      aiTool: {
        label: 'TASARIM PROBLEMİN Mİ VAR?',
        description:
          'Yapay zeka destekli "AI Reframer" aracımı hemen dene.',
      },
    },
  
    // HİZMETLER
    services: {
      sectionTitle: 'HİZMETLER',
      sectionSubtitle: 'Fintech ve e-ticaret dikeylerinde uzmanlaşmış çözümler.',
      cards: [
        {
          id: 'individual-trainings',
          title: 'BİREYSEL EĞİTİMLER',
          description:
            'Kariyerini UX ve ürün tasarımı alanında ilerletmek isteyenler için yapılandırılmış programlar. Uygulamalı içerik, gerçek projeler ve birebir geri bildirim odakta.',
          label: 'AKADEMİ',
          targetPath: '/trainings',
        },
        {
          id: 'corporate-trainings',
          title: 'KURUMSAL EĞİTİMLER',
          description:
            'Ürün ve tasarım ekipleri için, kurumun ihtiyaçlarına uyarlanan, sprint tarzı ve çıktıya odaklı UX eğitimleri.',
          label: 'WORKSHOP',
          targetPath: '/trainings',
        },
        {
          id: 'consultancy',
          title: 'DANIŞMANLIK',
          description:
            'Ürün akışlarını, stratejiyi ve ekip süreçlerini birlikte ele alan, uygulanabilir çalışmalar.',
          label: 'STRATEJİ',
          targetPath: '/consultancy',
        },
        {
          id: 'designops',
          title: 'DESIGN OPS',
          description:
            'Tasarım ekipleri için ritüellerin ve iş akışlarının netleştirildiği ölçeklenebilir yapılar.',
          label: 'SİSTEM',
          targetPath: '/designops',
        },
      ],
    },
  
    // FİNTECH & E-TİCARET DENEYİMİ + KATILIMCI NOTLARI
    experience: {
      heading: 'FİNTECH VE\nE-TİCARET\nDENEYİMİ',
      paragraphs: [
        'Bankacılık, fintech ve e-ticaret alanlarında çalıştığım yıllar boyunca; QR ödeme, hızlı kredi, dijital cüzdan, kart yönetimi, limit ve risk süreçleri gibi kritik akışlarda tasarım liderliği yaptım.',
        'Yüksek hacimli kullanıcı davranışının olduğu bu alanlarda tasarım kararlarının sadece arayüzden ibaret olmadığını; güvenlik, risk, regülasyon ve iş hedefleriyle sürekli dengede tutulması gerektiğini gördüm.',
        'Bugün sunduğum eğitimler, danışmanlık ve Ops çalışmaları; bu gerçek ürün deneyimi, ekiplerle birlikte çözüm üretme pratiği ve uzun vadeli süreç tasarımı üzerine kurulu.',
      ],
      bullets: [
        'Gerçek ürün deneyimine dayalı eğitim yaklaşımı',
        'Kullanıcı davranışı + iş hedefi dengesi',
        'Ölçeklenebilir ekip & süreç tasarımı',
      ],
      testimonialsTitle: 'KATILIMCI NOTLARI',
      testimonials: [
        {
          id: 'ux-egitimi',
          quote:
            'Eğitimdeki pratik odaklı yaklaşım, işimde hemen uygulayabileceğim çıktılar sağladı. Teoriden çok gerçek hayat senaryoları konuşuldu.',
          roleLabel: 'UX EĞİTİMİ KATILIMCISI',
        },
        {
          id: 'workshop',
          quote:
            'Ekibimizle gerçekleştirdiğimiz atölye çalışması, karmaşık süreçleri sadeleştirmemizi sağladı. Çıktı odaklı ve oldukça verimliydi.',
          roleLabel: 'WORKSHOP KATILIMCISI',
        },
        {
          id: 'mentorluk',
          quote:
            'Kariyer yolculuğumda tıkandığım noktaları netleştirmemi sağladı. Portfolyo hazırlık sürecindeki nokta atışı geri bildirimler çok değerliydi.',
          roleLabel: 'MENTORLUK DANIŞANI',
        },
      ],
    },
  
    // METHOD / NASIL ÇALIŞIYORUM?
    method: {
      heading: {
        line1: 'SÜRPRİZ YOK.',
        line2: 'SADECE ŞEFFAFLIK.',
      },
      description:
        'İşbirliğine başlamadan önce, ihtiyacı ve beklentiyi netleştirmeyi önemsiyorum. Eğitim ya da danışmanlık fark etmeksizin; önce dinler, ardından ne yapabileceğimizi açıkça ortaya koyarım.',
      checklist: [
        'İlk görüşme tamamen ücretsizdir.',
        'İhtiyaç ve hedefleri birlikte netleştiririz.',
        'Tüm süreci baştan şeffafça konuşuruz.',
        'Süreç boyunca sade ve düzenli iletişim.',
      ],
    },
  
    // HERO TICKER
    ticker: {
      text:
        'LEAN UX • DIGITAL KYC • BANKING APP • DASHBOARD DESIGN • USABILITY • PRODUCT STRATEGY • FINTECH • E-COMMERCE • DESIGNOPS • SUPERAPP • AGILE • PAYMENT • RESEARCHOPS • PROTOTYPING • ',
    },
  
    // NAVBAR
    nav: {
      brand: 'Ömer Arı',
      aiToolLabel: 'AI REFRAMER',
      contactCta: 'İLETİŞİM',
      mobileContactCta: 'GÖRÜŞME PLANLA',
      links: [
        { path: '/about', label: 'HAKKIMDA' },
        { path: '/trainings', label: 'EĞİTİMLER' },
        { path: '/consultancy', label: 'DANIŞMANLIK' },
        { path: '/designops', label: 'DESIGN OPS' },
      ],
    },
  
    // FOOTER
    footer: {
      marquee:
        'LEAN UX • DIGITAL KYC • BANKING APP • DASHBOARD DESIGN • USABILITY • PRODUCT STRATEGY • FINTECH • E-COMMERCE • DESIGNOPS • SUPERAPP • AGILE • PAYMENT • RESEARCHOPS • PROTOTYPING • ',
      name: 'Ömer Arı.',
      description:
        'Fintech ve e-ticaret ürünlerinde deneyim tasarımına odaklanan bir tasarım lideri ve eğitmen.',
      copyright: {
        year: '2025',
        location: 'İstanbul',
      },
      menu: [
        { path: '/about', label: 'Hakkımda' },
        { path: '/trainings', label: 'Eğitimler' },
        { path: '/consultancy', label: 'Danışmanlık' },
        { path: '/designops', label: 'DesignOps' },
        { path: '/contact', label: 'İletişim' },
      ],
      social: [
        {
          icon: 'linkedin',
          href: 'https://www.linkedin.com/in/omer-ari/',
        },
        {
          icon: 'instagram',
          href: 'https://instagram.com/omerari_ux',
        },
        {
          icon: 'twitter',
          href: 'https://x.com/omerari_ux',
        },
      ],
    },
  };