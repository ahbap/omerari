import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const BrutalCard = ({ title, desc, icon: Icon, onClick, label }) => (
  <div
    onClick={onClick}
    className="group relative bg-white border-2 border-black p-6 cursor-pointer hover:bg-lime-50 transition-colors h-full flex flex-col justify-between"
  >
    <div className="absolute top-0 left-0 w-full h-full bg-black -z-10 translate-x-2 translate-y-2 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-200"></div>
    <div>
      <div className="flex justify-between items-start mb-6">
        <div className="w-12 h-12 border-2 border-black flex items-center justify-center bg-lime-300 group-hover:rotate-12 transition-transform">
          <Icon size={24} strokeWidth={2.5} />
        </div>
        {label && (
          <span className="font-mono text-xs border border-black px-2 py-1 bg-white uppercase">
            {label}
          </span>
        )}
      </div>
      <h3 className="text-2xl font-black mb-3 uppercase leading-none tracking-tight">
        {title}
      </h3>
      <p className="font-mono text-sm text-gray-600 mb-6 leading-relaxed">{desc}</p>
    </div>
    <div className="flex items-center font-bold text-sm group-hover:underline decoration-2 underline-offset-4">
      DETAYLARI GÖR
      <ArrowUpRight className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={18} />
    </div>
  </div>
);

export default BrutalCard;
