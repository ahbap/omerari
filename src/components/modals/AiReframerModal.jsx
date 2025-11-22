import React, { useState } from 'react';
import { RefreshCw, Sparkles, X } from 'lucide-react';
import BrutalButton from '../buttons/BrutalButton.jsx';
import { API_KEY } from '../../utils/config.js';

const AiReframerModal = ({ onClose }) => {
  const [problem, setProblem] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const generateReframing = async () => {
    if (!problem.trim()) return;
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const prompt = `Deneyimli bir UX Uzmanı ile birlikte çalışıyorsunuz (Ömer Arı). Problem: "${problem}". Format: 1. YENİDEN ÇERÇEVELEME, 2. HOW MIGHT WE, 3. EZBER BOZAN FİKİR. Samimiyetli ve profesyonel ton, Türkçe.`;
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${API_KEY}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] }),
        },
      );
      const data = await response.json();
      if (data.error) throw new Error(data.error.message);
      setResult(data.candidates?.[0]?.content?.parts?.[0]?.text);
    } catch (err) {
      setError('API Hatası: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative bg-white border-4 border-black w-full max-w-2xl shadow-[16px_16px_0_0_#ccff00] animate-in zoom-in-95 duration-300 flex flex-col max-h-[90vh]">
        <div className="bg-black text-white p-4 flex justify-between items-center border-b-4 border-black">
          <div className="flex items-center gap-2">
            <Sparkles className="text-lime-300 animate-pulse" />
            <h3 className="font-black text-xl tracking-tighter uppercase">
              UX REFRAMER{' '}
              <span className="text-xs font-mono bg-lime-300 text-black px-2 py-0.5 ml-2">BETA</span>
            </h3>
          </div>
          <button onClick={onClose} className="hover:rotate-90 transition-transform">
            <X size={24} />
          </button>
        </div>
        <div className="p-6 md:p-8 overflow-y-auto">
          {!result ? (
            <>
              <p className="font-mono text-sm text-gray-600 mb-6">
                Sıkıcı veya tıkalı bir tasarım problemin mi var? Onu buraya yaz, stratejik bir fırsata dönüştürelim.
              </p>
              <div className="mb-6">
                <label className="block font-black uppercase text-xs mb-2">PROBLEM TANIMI</label>
                <textarea
                  value={problem}
                  onChange={(e) => setProblem(e.target.value)}
                  placeholder="Örn: Kullanıcılar ödeme sayfasında çok fazla sepeti terk ediyor..."
                  className="w-full p-4 border-2 border-black bg-[#f4f4f0] font-mono text-sm h-32 focus:outline-none focus:bg-white focus:shadow-[4px_4px_0_0_#000] transition-all resize-none"
                ></textarea>
              </div>
              <BrutalButton onClick={generateReframing} className="w-full" disabled={loading}>
                {loading ? (
                  <span className="animate-pulse">ANALİZ EDİLİYOR...</span>
                ) : (
                  <>
                    <Sparkles size={16} /> YENİDEN ÇERÇEVELE
                  </>
                )}
              </BrutalButton>
              {error && (
                <p className="mt-4 text-red-600 font-mono text-xs font-bold bg-red-100 p-2 border border-red-500">
                  {error}
                </p>
              )}
            </>
          ) : (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="bg-black text-lime-300 p-2 font-mono text-xs font-bold uppercase mb-4 inline-block">
                GEMINI 2.5 FLASH ANALİZİ
              </div>
              <div className="prose prose-sm font-mono whitespace-pre-wrap text-black leading-relaxed mb-8 border-l-4 border-lime-300 pl-4">
                {result}
              </div>
              <div className="flex gap-4">
                <BrutalButton onClick={() => setResult(null)} variant="outline" className="flex-1">
                  <RefreshCw size={16} className="mr-2" /> FARKLI BİR PROBLEM ÇÖZ
                </BrutalButton>
                <BrutalButton onClick={onClose} variant="primary" className="flex-1">
                  KAPAT
                </BrutalButton>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AiReframerModal;
