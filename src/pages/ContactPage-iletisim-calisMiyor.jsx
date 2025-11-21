import React from 'react';
import { Calendar, Linkedin, Mail } from 'lucide-react';
import BrutalButton from '../components/buttons/BrutalButton.jsx';

const ContactPage = () => (
  <div className="animate-in fade-in duration-500 container mx-auto px-6 py-20">
    <div className="grid md:grid-cols-2 gap-0 border-2 border-black bg-white shadow-[12px_12px_0_0_#000]">
      <div className="p-12 bg-black text-white border-b-2 md:border-b-0 md:border-r-2 border-black flex flex-col justify-between">
        <div>
          <h2 className="text-5xl font-black uppercase mb-8">İLETİŞİM</h2>
          <p className="font-mono text-sm mb-8 text-gray-300">
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
              <p className="text-sm text-gray-400 group-hover:text-black">30 dakikalık tanışma görüşmesi planlayın.</p>
            </a>
            <div className="flex items-center hover:text-lime-300 transition-colors cursor-pointer">
              <Mail className="mr-4" /> hello@omerari.com
            </div>
            <a
              href="https://www.linkedin.com/in/omer-ari/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:text-lime-300 transition-colors cursor-pointer"
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
      <div className="p-12 bg-[#f4f4f0]">
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block font-bold uppercase text-xs mb-2">AD SOYAD</label>
            <input
              type="text"
              className="w-full p-4 border-2 border-black bg-white focus:outline-none focus:bg-lime-100 focus:shadow-[4px_4px_0_0_#000] transition-all"
              placeholder="ADINIZ"
            />
          </div>
          <div>
            <label className="block font-bold uppercase text-xs mb-2">E-POSTA</label>
            <input
              type="email"
              className="w-full p-4 border-2 border-black bg-white focus:outline-none focus:bg-lime-100 focus:shadow-[4px_4px_0_0_#000] transition-all"
              placeholder="MAIL@ADRESINIZ.COM"
            />
          </div>
          <div>
            <label className="block font-bold uppercase text-xs mb-2">KONU</label>
            <select
              defaultValue="Kurumsal Eğitim / Workshop"
              className="w-full p-4 border-2 border-black bg-white focus:outline-none focus:bg-lime-100 focus:shadow-[4px_4px_0_0_#000] transition-all appearance-none"
            >
              <option>Bireysel Eğitim</option>
              <option>Kurumsal Eğitim / Workshop</option>
              <option>Danışmanlık / Ops</option>
              <option>Mentorluk</option>
              <option>Diğer</option>
            </select>
          </div>
          <div>
            <label className="block font-bold uppercase text-xs mb-2">MESAJ</label>
            <textarea
              className="w-full p-4 border-2 border-black bg-white focus:outline-none focus:bg-lime-100 focus:shadow-[4px_4px_0_0_#000] transition-all resize-none"
              rows={3}
              placeholder="MESAJINIZ..."
            ></textarea>
          </div>
          <div className="pt-4">
            <BrutalButton className="w-full" type="submit">
              GÖNDER
            </BrutalButton>
          </div>
        </form>
      </div>
    </div>
    <div className="mt-16 grid md:grid-cols-3 gap-8">
      <div className="border-2 border-black bg-white p-6">
        <h4 className="font-black uppercase text-sm mb-2">EĞİTİMLER KURUMA ÖZEL Mİ?</h4>
        <p className="font-mono text-xs text-gray-600">
          Evet. Önce ihtiyaçları dinleyip, ardından mevcut modülleri sektörünüze ve ekip yapınıza göre uyarlıyorum.
        </p>
      </div>
      <div className="border-2 border-black bg-white p-6">
        <h4 className="font-black uppercase text-sm mb-2">DANIŞMANLIK NE KADAR SÜRÜYOR?</h4>
        <p className="font-mono text-xs text-gray-600">
          Kapsama göre değişmekle birlikte, kısa süreli teşhis çalışmaları 2–3 hafta, aylık danışmanlık modelleri ise 1–6 ay aralığında.
        </p>
      </div>
      <div className="border-2 border-black bg-white p-6">
        <h4 className="font-black uppercase text-sm mb-2">KÜÇÜK EKİPLER İÇİN OPS?</h4>
        <p className="font-mono text-xs text-gray-600">
          Evet. Küçük ekiplerde de büyük ekiplerde de Ops yaklaşımı uygulanabiliyor. Ölçek ve kapsam ekibin yapısına göre belirleniyor.
        </p>
      </div>
    </div>
  </div>
);

export default ContactPage;
