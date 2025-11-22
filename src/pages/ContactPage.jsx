import React, { useState } from 'react';
import { Calendar, Linkedin, Mail, CheckCircle, Send } from 'lucide-react'; // Rocket importunu kaldırdım
import BrutalButton from '../components/buttons/BrutalButton.jsx'; 
import { Helmet } from 'react-helmet-async';

const ContactPage = () => {
  // Formun durumunu takip eden "hafıza" kutularımız
  const [isSubmitting, setIsSubmitting] = useState(false); // Gönderiliyor mu?
  const [succeeded, setSucceeded] = useState(false);       // Başarılı mı?

  const handleSubmit = async (e) => {
    e.preventDefault(); // 🛑 DUR! Sayfanın yenilenmesini ve başka siteye gitmesini engelle.
    setIsSubmitting(true); // "Gönderiliyor..." modunu aç.

    const formData = new FormData(e.target);

    try {
      // Mektubu JavaScript ile elden teslim ediyoruz (Fetch API)
      const response = await fetch("https://formspree.io/f/mdkbrlno", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSucceeded(true); // Başarılı! Konfetileri patlatabiliriz.
        e.target.reset();   // Formu temizle.
      } else {
        alert("Bir hata oluştu, lütfen tekrar deneyin.");
      }
    } catch (error) {
      alert("Sunucuya ulaşılamadı.");
    } finally {
      setIsSubmitting(false); // Yükleme işlemi bitti.
    }
  };

  return (
    <>
      <Helmet>
        <title>İletişim – Toplantı Planla | Ömer Arı</title>
        <meta
          name="description"
          content="Mentorluk, danışmanlık veya kurumsal eğitim için iletişime geçin. Toplantı planlama, iş birliği ve proje değerlendirme için iletişim formunu kullanın."
        />
      </Helmet>

      <div className="animate-in fade-in duration-500 container mx-auto px-4 sm:px-6 py-16 sm:py-20">
      <div className="grid md:grid-cols-2 gap-0 border-2 border-black bg-white shadow-[12px_12px_0_0_#000]">
        {/* SOL KOLON: İletişim Bilgileri */}
        <div className="p-12 bg-black text-white border-b-2 md:border-b-0 md:border-r-2 border-black flex flex-col justify-between">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase mb-8 break-words">İLETİŞİM</h2>
            <p className="font-mono text-sm mb-8 text-gray-300 leading-relaxed break-words">
              İster bireysel eğitimler, ister kurumsal eğitimler, ister danışmanlık ya da Ops çalışmaları için olsun; sürece her zaman kısa bir görüşme ile başlıyorum. İhtiyacınızı netleştirmek ve size uygun çalışma şeklini belirlemek için yazabilirsiniz.
            </p>
            <div className="space-y-6 font-mono text-lg">
              <a
                href="#"
                className="block border-2 border-lime-300 p-4 hover:bg-lime-300 hover:text-black transition-all group mb-8"
              >
                <div className="flex items-center gap-3 mb-1">
                  <Calendar className="text-lime-300 group-hover:text-black" />
                  <span className="font-black uppercase">GÖRÜŞME PLANLA</span>
                </div>
                <p className="text-sm text-gray-400 group-hover:text-black break-words">30 dakikalık tanışma görüşmesi planlayın.</p>
              </a>
              <div className="flex items-center hover:text-lime-300 transition-colors cursor-pointer break-words">
                <Mail className="mr-4" /> hello@omerari.com
              </div>
              <a
                href="https://www.linkedin.com/in/omer-ari/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:text-lime-300 transition-colors cursor-pointer break-words"
              >
                <Linkedin className="mr-4" /> linkedin.com/in/omer-ari
              </a>
            </div>
          </div>
          <div className="mt-12 p-6 border-2 border-white border-dashed">
            <h4 className="font-bold text-lime-300 mb-2 uppercase">NASIL ÇALIŞIYORUM?</h4>
            <ul className="font-mono text-sm space-y-2">
              <li>→ İlk görüşme ücretsizdir.</li>
              <li>→ Net bir kapsam ve beklenti tanımı yapılır.</li>
              <li>→ Süreç boyunca sade ve açık bir iletişim.</li>
            </ul>
          </div>
        </div>

        {/* SAĞ KOLON: Form Alanı */}
        <div className="p-8 sm:p-12 bg-[#f4f4f0] flex flex-col justify-center min-h-[600px]">
          
          {/* BAŞARILI GÖNDERİM DURUMU */}
          {succeeded ? (
            <div className="text-center p-6 sm:p-8 border-4 border-black bg-lime-300 shadow-[8px_8px_0_0_#000] animate-in zoom-in duration-300">
              <div className="flex justify-center mb-4">
                <CheckCircle size={64} className="text-black" />
              </div>
              {/* Roket ve emojiler kaldırıldı, sadece metin */}
              <h3 className="text-2xl sm:text-3xl font-black uppercase mb-4 break-words">
                MESAJINIZ ALINDI!
              </h3>
              <p className="font-mono text-base sm:text-lg mb-6 break-words leading-relaxed">
                En kısa sürede size dönüş yapacağım.
              </p>
              <button 
                onClick={() => setSucceeded(false)}
                className="text-sm font-bold underline hover:text-white"
              >
                YENİ BİR MESAJ GÖNDER
              </button>
            </div>
          ) : (
            /* FORM DURUMU */
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block font-bold uppercase text-xs mb-2">AD SOYAD</label>
                <input
                  type="text"
                  name="name"
                  required
                  disabled={isSubmitting}
                  className="w-full p-4 border-2 border-black bg-white focus:outline-none focus:bg-lime-100 focus:shadow-[4px_4px_0_0_#000] transition-all disabled:opacity-50"
                  placeholder="ADINIZ"
                />
              </div>
              <div>
                <label className="block font-bold uppercase text-xs mb-2">E-POSTA</label>
                <input
                  type="email"
                  name="email"
                  required
                  disabled={isSubmitting}
                  className="w-full p-4 border-2 border-black bg-white focus:outline-none focus:bg-lime-100 focus:shadow-[4px_4px_0_0_#000] transition-all disabled:opacity-50"
                  placeholder="MAIL@ADRESINIZ.COM"
                />
              </div>
              <div>
                <label className="block font-bold uppercase text-xs mb-2">KONU</label>
                <select
                  name="service_type"
                  disabled={isSubmitting}
                  defaultValue="Kurumsal Eğitim / Workshop"
                  className="w-full p-4 border-2 border-black bg-white focus:outline-none focus:bg-lime-100 focus:shadow-[4px_4px_0_0_#000] transition-all appearance-none disabled:opacity-50"
                >
                  <option value="Bireysel Eğitim">Bireysel Eğitim</option>
                  <option value="Kurumsal Eğitim / Workshop">Kurumsal Eğitim / Workshop</option>
                  <option value="Danışmanlık / Ops">Danışmanlık / Ops</option>
                  <option value="Mentorluk">Mentorluk</option>
                  <option value="Diğer">Diğer</option>
                </select>
              </div>
              <div>
                <label className="block font-bold uppercase text-xs mb-2">MESAJ</label>
                <textarea
                  name="message"
                  required
                  disabled={isSubmitting}
                  className="w-full p-4 border-2 border-black bg-white focus:outline-none focus:bg-lime-100 focus:shadow-[4px_4px_0_0_#000] transition-all resize-none disabled:opacity-50"
                  rows={3}
                  placeholder="MESAJINIZ..."
                ></textarea>
              </div>
              <div className="pt-4">
                <BrutalButton 
                  className="w-full flex items-center justify-center gap-2" 
                  type="submit" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    'GÖNDERİLİYOR...'
                  ) : (
                    <>
                      GÖNDER <Send size={20} strokeWidth={2.5} className="ml-1" />
                    </>
                  )}
                </BrutalButton>
              </div>
            </form>
          )}
        </div>
      </div>

      {/* ALT BİLGİ KARTLARI */}
      <div className="mt-16 grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
        <div className="border-2 border-black bg-white p-6">
          <h4 className="font-black uppercase text-sm mb-2">EĞİTİMLER KURUMA ÖZEL Mİ?</h4>
          <p className="font-mono text-xs text-gray-600 break-words leading-relaxed">
            Evet. Önce ihtiyaçları dinleyip, ardından mevcut modülleri sektörünüze ve ekip yapınıza göre uyarlıyorum.
          </p>
        </div>
        <div className="border-2 border-black bg-white p-6">
          <h4 className="font-black uppercase text-sm mb-2">DANIŞMANLIK NE KADAR SÜRÜYOR?</h4>
          <p className="font-mono text-xs text-gray-600 break-words leading-relaxed">
            Kapsama göre değişmekle birlikte, kısa süreli teşhis çalışmaları 2–3 hafta, aylık danışmanlık modelleri ise 1–6 ay aralığında.
          </p>
        </div>
        <div className="border-2 border-black bg-white p-6">
          <h4 className="font-black uppercase text-sm mb-2">KÜÇÜK EKİPLER İÇİN OPS?</h4>
          <p className="font-mono text-xs text-gray-600 break-words leading-relaxed">
            Evet. Küçük ekiplerde de büyük ekiplerde de Ops yaklaşımı uygulanabiliyor. Ölçek ve kapsam ekibin yapısına göre belirleniyor.
          </p>
        </div>
      </div>
    </div>
    </>
  );
};

export default ContactPage;