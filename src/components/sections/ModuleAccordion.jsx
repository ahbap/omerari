import React, { useState } from 'react';
import { Minus, Plus } from 'lucide-react';

const ModuleAccordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b-2 border-black last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center py-4 font-mono text-sm font-bold hover:bg-lime-50 transition-colors text-left"
      >
        <span className="flex items-center">
          <div className={`w-2 h-2 bg-black mr-3 ${isOpen ? 'bg-lime-500' : ''}`}></div>
          {title}
        </span>
        {isOpen ? <Minus size={16} /> : <Plus size={16} />}
      </button>
      {isOpen && <div className="pb-4 pl-5 pr-2 font-mono text-xs text-gray-600 leading-relaxed">{children}</div>}
    </div>
  );
};

export default ModuleAccordion;
