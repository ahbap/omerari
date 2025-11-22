import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Instagram, Linkedin, Twitter } from 'lucide-react';
import { footerContent } from '../../content/footer.js';
import Marquee from './Marquee.jsx';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t-2 border-black bg-white mt-auto">
      <Marquee content={footerContent.marquee} />
      <div className="grid md:grid-cols-4 divide-y-2 md:divide-y-0 md:divide-x-2 divide-black">
        <div className="p-8 md:col-span-2 bg-black text-white">
          <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tighter uppercase">
            {footerContent.name}
          </h2>
          <div className="font-mono text-sm max-w-md text-gray-400">
            {footerContent.description}
            <br />
            <br />
            <div className="flex items-center gap-2">
              © {currentYear}
              <Heart size={18}  className="fill-lime-300 stroke-none mx-1"/>
              {footerContent.copyright.location}
            </div>
          </div>
        </div>
        <div className="p-8 flex flex-col justify-between">
          <h4 className="font-bold border-b-2 border-black pb-2 mb-4 inline-block self-start">MENÜ</h4>
          <ul className="space-y-2 font-mono text-sm">
            {footerContent.menu.map((item) => (
              <li key={item.path}>
                <Link to={item.path} className="hover:bg-lime-300 hover:px-2 transition-all">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="p-8 flex flex-col justify-between">
          <h4 className="font-bold border-b-2 border-black pb-2 mb-4 inline-block self-start">SOSYAL</h4>
          <div className="flex gap-4">
            {footerContent.social.map((item) => {
              const Icon =
                item.icon === 'linkedin'
                  ? Linkedin
                  : item.icon === 'instagram'
                  ? Instagram
                  : Twitter;

              return (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 border-2 border-black flex items-center justify-center hover:bg-lime-300 hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none shadow-[4px_4px_0_0_#000] transition-all bg-white"
                >
                  <Icon size={24} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
