import React from 'react';
import { Check } from 'lucide-react';

const testimonials = [
  {
    quote:
      '"Eğitimdeki pratik odaklı yaklaşım, işimde hemen uygulayabileceğim çıktılar sağladı. Teoriden çok gerçek hayat senaryoları konuşuldu."',
    role: '— UX EĞİTİMİ KATILIMCISI',
    avatar: 'https://i.pravatar.cc/150?img=68',
  },
  {
    quote:
      '"Ekibimizle gerçekleştirdiğimiz atölye çalışması, karmaşık süreçleri sadeleştirmemizi sağladı. Çıktı odaklı ve oldukça verimliydi."',
    role: '— WORKSHOP KATILIMCISI',
    avatar: 'https://i.pravatar.cc/150?img=33',
  },
  {
    quote:
      '"Kariyer yolculuğumda tıkandığım noktaları netleştirmemi sağladı. Portfolyo hazırlık sürecindeki nokta atışı geri bildirimler çok değerliydi."',
    role: '— MENTORLUK DANIŞANI',
    avatar: 'https://i.pravatar.cc/150?img=47',
  },
];

const ExperienceTestimonialsSection = () => (
  <section className="border-y-2 border-black bg-white">
    <div className="grid md:grid-cols-2">
      <div className="p-12 md:p-24 border-b-2 md:border-b-0 md:border-r-2 border-black bg-lime-300 flex flex-col justify-center">
        <h2 className="text-6xl font-black uppercase tracking-tighter leading-none mb-6">
          FİNTECH VE
          <br />
          E-TİCARET
          <br />
          DENEYİMİ
        </h2>
        <div className="font-mono text-lg font-bold mb-8 space-y-4">
          <p>
            Bankacılık, fintech ve e-ticaret alanlarında çalıştığım yıllar boyunca; QR ödeme, hızlı kredi, dijital cüzdan, kart yönetimi, limit ve risk süreçleri gibi kritik akışlarda tasarım liderliği yaptım.
          </p>
          <p>
            Yüksek hacimli kullanıcı davranışının olduğu bu alanlarda tasarım kararlarının sadece arayüzden ibaret olmadığını; güvenlik, risk, regülasyon ve iş hedefleriyle sürekli dengede tutulması gerektiğini gördüm.
          </p>
          <p>
            Bugün sunduğum eğitimler, danışmanlık ve Ops çalışmaları; bu gerçek ürün deneyimi, ekiplerle birlikte çözüm üretme pratiği ve uzun vadeli süreç tasarımı üzerine kurulu.
          </p>
        </div>
        <div className="space-y-4 font-mono text-sm border-t-2 border-black pt-6">
          <div className="flex items-center">
            <Check className="mr-2" /> Gerçek Ürün Deneyimine Dayalı Eğitim Yaklaşımı
          </div>
          <div className="flex items-center">
            <Check className="mr-2" /> Kullanıcı Davranışı + İş Hedefi Dengesi
          </div>
          <div className="flex items-center">
            <Check className="mr-2" /> Ölçeklenebilir Ekip &amp; Süreç Tasarımı
          </div>
        </div>
      </div>
      <div className="p-12 md:p-24 bg-[#f4f4f0] flex flex-col justify-center">
        <h3 className="text-3xl font-black uppercase mb-8">KATILIMCI NOTLARI</h3>
        <div className="space-y-8">
          {testimonials.map((item) => (
            <div
              key={item.role}
              className="bg-white border-2 border-black p-6 shadow-[4px_4px_0_0_#000] flex gap-4 items-start"
            >
              <img
                src={item.avatar}
                alt={item.role}
                loading="lazy"
                className="w-16 h-16 border-2 border-black grayscale contrast-125 object-cover shrink-0"
              />
              <div>
                <p className="font-serif italic text-sm mb-4">{item.quote}</p>
                <div className="font-bold text-xs uppercase tracking-widest text-gray-500">{item.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ExperienceTestimonialsSection;
