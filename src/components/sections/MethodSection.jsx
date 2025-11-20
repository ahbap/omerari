import React from 'react';
import BrutalButton from '../buttons/BrutalButton.jsx';

const checklist = [
  'İLK GÖRÜŞME TAMAMEN ÜCRETSİZDİR.',
  'İHTİYAÇ VE HEDEFLERİ BİRLİKTE NETLEŞTİRİRİZ.',
  'TÜM SÜRECİ BAŞTAN ŞEFFAFLÇA KONUŞURUZ.',
  'SÜREÇ BOYUNCA SADE VE DÜZENLİ İLETİŞİM.',
];

const MethodSection = ({ onNavigate }) => (
  <section className="container mx-auto px-6 py-24">
    <div className="border-2 border-black bg-white p-8 md:p-12 relative">
      <div className="absolute -top-4 left-8 bg-lime-300 border-2 border-black px-4 py-1 font-bold uppercase text-sm">
        NASIL ÇALIŞIYORUM?
      </div>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h3 className="text-4xl font-black uppercase mb-6">
            SÜRPRİZ YOK.
            <br />
            SADECE ŞEFFAFLIK.
          </h3>
          <p className="font-mono text-gray-600 mb-8">
            İşbirliğine başlamadan önce, ihtiyacı ve beklentiyi netleştirmeyi önemsiyorum. Eğitim ya da danışmanlık fark etmeksizin; önce dinler, ardından ne yapabileceğimizi açıkça ortaya koyarım.
          </p>
          <BrutalButton variant="dark" onClick={() => onNavigate('/contact')}>
            SÜRECİ BAŞLAT
          </BrutalButton>
        </div>
        <div className="space-y-4">
          {checklist.map((item, index) => (
            <div
              key={item}
              className="flex items-center bg-[#f4f4f0] border-2 border-black p-4 hover:bg-lime-300 transition-colors cursor-default"
            >
              <div className="font-black mr-4 text-xl">0{index + 1}</div>
              <div className="font-bold text-sm">{item}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default MethodSection;
