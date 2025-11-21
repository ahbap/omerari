import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Instagram, Linkedin, Twitter } from 'lucide-react';
import { MARQUEE_CONTENT } from '../../data/navigation.js';
import Marquee from './Marquee.jsx';

const Footer = () => (
  <footer className="border-t-2 border-black bg-white mt-auto">
    <Marquee content={MARQUEE_CONTENT} />
    <div className="grid md:grid-cols-4 divide-y-2 md:divide-y-0 md:divide-x-2 divide-black">
      <div className="p-8 md:col-span-2 bg-black text-white">
        <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tighter uppercase">Ömer Arı.</h2>
        <div className="font-mono text-sm max-w-md text-gray-400">
          Fintech ve e-ticaret ürünlerinde deneyim tasarımına odaklanan bir tasarım lideri ve eğitmen.
          <br />
          <br />
          <div className="flex items-center gap-2">
            © 2025 <Heart size={14} className="text-white fill-lime-300 mx-1" /> İstanbul
          </div>
        </div>
      </div>
      <div className="p-8 flex flex-col justify-between">
        <h4 className="font-bold border-b-2 border-black pb-2 mb-4 inline-block self-start">MENÜ</h4>
        <ul className="space-y-2 font-mono text-sm">
          <li>
            <Link to="/about" className="hover:bg-lime-300 hover:px-2 transition-all">
              Hakkımda
            </Link>
          </li>
          <li>
            <Link to="/trainings" className="hover:bg-lime-300 hover:px-2 transition-all">
              Eğitimler
            </Link>
          </li>
          <li>
            <Link to="/consultancy" className="hover:bg-lime-300 hover:px-2 transition-all">
              Danışmanlık
            </Link>
          </li>
          <li>
            <Link to="/designops" className="hover:bg-lime-300 hover:px-2 transition-all">
              DesignOps
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:bg-lime-300 hover:px-2 transition-all">
              İletişim
            </Link>
          </li>
        </ul>
      </div>
      <div className="p-8 flex flex-col justify-between">
        <h4 className="font-bold border-b-2 border-black pb-2 mb-4 inline-block self-start">SOSYAL</h4>
        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/omer-ari/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 border-2 border-black flex items-center justify-center hover:bg-lime-300 hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none shadow-[4px_4px_0_0_#000] transition-all bg-white"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://instagram.com/omerari_ux"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 border-2 border-black flex items-center justify-center hover:bg-lime-300 hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none shadow-[4px_4px_0_0_#000] transition-all bg-white"
          >
            <Instagram size={24} />
          </a>
          <a
            href="https://x.com/omerari_ux"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 border-2 border-black flex items-center justify-center hover:bg-lime-300 hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none shadow-[4px_4px_0_0_#000] transition-all bg-white"
          >
            <Twitter size={24} />
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
