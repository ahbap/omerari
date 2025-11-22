import React, { useState } from 'react';
import { Calendar, Linkedin, Mail, CheckCircle, Send } from 'lucide-react'; // Rocket importunu kaldırdım
import BrutalButton from '../components/buttons/BrutalButton.jsx'; 
import { Helmet } from 'react-helmet-async';
import { contactPageContent } from '../content/contact.js';

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
        <title>{contactPageContent.meta.title}</title>
        <meta
          name="description"
          content={contactPageContent.meta.description}
        />
      </Helmet>

      <div className="animate-in fade-in duration-500 container mx-auto px-4 sm:px-6 py-16 sm:py-20">
      <div className="grid md:grid-cols-2 gap-0 border-2 border-black bg-white shadow-[12px_12px_0_0_#000]">
        {/* SOL KOLON: İletişim Bilgileri */}
        <div className="p-12 bg-black text-white border-b-2 md:border-b-0 md:border-r-2 border-black flex flex-col justify-between">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase mb-8 break-words">
              {contactPageContent.hero.heading}
            </h2>
            <p className="font-mono text-sm mb-8 text-gray-300 leading-relaxed break-words">
              {contactPageContent.hero.intro}
            </p>
            <div className="space-y-6 font-mono text-lg">
              <a
                href="#"
                className="block border-2 border-lime-300 p-4 hover:bg-lime-300 hover:text-black transition-all group mb-8"
              >
                <div className="flex items-center gap-3 mb-1">
                  <Calendar className="text-lime-300 group-hover:text-black" />
                  <span className="font-black uppercase">{contactPageContent.actions.meeting.label}</span>
                </div>
                <p className="text-sm text-gray-400 group-hover:text-black break-words">
                  {contactPageContent.actions.meeting.description}
                </p>
              </a>
              <a
                href={contactPageContent.actions.email.href}
                className="flex items-center hover:text-lime-300 transition-colors cursor-pointer break-words"
              >
                <Mail className="mr-4" />
                <span>{contactPageContent.actions.email.label}</span>
              </a>
              <a
                href={contactPageContent.actions.linkedin.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:text-lime-300 transition-colors cursor-pointer break-words"
              >
                <Linkedin className="mr-4" /> {contactPageContent.actions.linkedin.label}
              </a>
            </div>
          </div>
          <div className="mt-12 p-6 border-2 border-white border-dashed">
            <h4 className="font-bold text-lime-300 mb-2 uppercase">{contactPageContent.howIWork.title}</h4>
            <ul className="font-mono text-sm space-y-2">
              {contactPageContent.howIWork.bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
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
                {contactPageContent.success.title}
              </h3>
              <p className="font-mono text-base sm:text-lg mb-6 break-words leading-relaxed">
                {contactPageContent.success.description}
              </p>
              <button 
                onClick={() => setSucceeded(false)}
                className="text-sm font-bold underline hover:text-white"
              >
                {contactPageContent.success.button}
              </button>
            </div>
          ) : (
            /* FORM DURUMU */
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block font-bold uppercase text-xs mb-2">{contactPageContent.form.labels.name}</label>
                <input
                  type="text"
                  name="name"
                  required
                  disabled={isSubmitting}
                  className="w-full p-4 border-2 border-black bg-white focus:outline-none focus:bg-lime-100 focus:shadow-[4px_4px_0_0_#000] transition-all disabled:opacity-50"
                  placeholder={contactPageContent.form.placeholders.name}
                />
              </div>
              <div>
                <label className="block font-bold uppercase text-xs mb-2">{contactPageContent.form.labels.email}</label>
                <input
                  type="email"
                  name="email"
                  required
                  disabled={isSubmitting}
                  className="w-full p-4 border-2 border-black bg-white focus:outline-none focus:bg-lime-100 focus:shadow-[4px_4px_0_0_#000] transition-all disabled:opacity-50"
                  placeholder={contactPageContent.form.placeholders.email}
                />
              </div>
              <div>
                <label className="block font-bold uppercase text-xs mb-2">{contactPageContent.form.labels.topic}</label>
                <select
                  name="service_type"
                  disabled={isSubmitting}
                  defaultValue={contactPageContent.form.serviceDefault}
                  className="w-full p-4 border-2 border-black bg-white focus:outline-none focus:bg-lime-100 focus:shadow-[4px_4px_0_0_#000] transition-all appearance-none disabled:opacity-50"
                >
                  {contactPageContent.form.serviceOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block font-bold uppercase text-xs mb-2">{contactPageContent.form.labels.message}</label>
                <textarea
                  name="message"
                  required
                  disabled={isSubmitting}
                  className="w-full p-4 border-2 border-black bg-white focus:outline-none focus:bg-lime-100 focus:shadow-[4px_4px_0_0_#000] transition-all resize-none disabled:opacity-50"
                  rows={3}
                  placeholder={contactPageContent.form.placeholders.message}
                ></textarea>
              </div>
              <div className="pt-4">
                <BrutalButton 
                  className="w-full flex items-center justify-center gap-2" 
                  type="submit" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    contactPageContent.form.submitLoading
                  ) : (
                    <>
                      {contactPageContent.form.submitIdle}
                      <Send size={20} strokeWidth={2.5} className="ml-1" />
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
        {contactPageContent.infoCards.map((card) => (
          <div key={card.title} className="border-2 border-black bg-white p-6">
            <h4 className="font-black uppercase text-sm mb-2">{card.title}</h4>
            <p className="font-mono text-xs text-gray-600 break-words leading-relaxed">{card.body}</p>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default ContactPage;