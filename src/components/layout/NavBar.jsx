import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { ArrowRight, Menu, Sparkles, X } from 'lucide-react';
import { navigationContent } from '../../content/navigation.js';

const NavBar = ({ isMenuOpen, onToggleMenu, onCloseMenu, onOpenAiTool }) => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
    onCloseMenu?.();
  };

  return (
    <nav className="fixed w-full z-50 top-0 left-0 border-b-2 border-black bg-[#f4f4f0]">
      <div className="flex justify-between items-stretch h-16">
        <Link
          to="/"
          onClick={onCloseMenu}
          className="flex items-center px-6 border-r-2 border-black bg-black text-white cursor-pointer hover:bg-lime-300 hover:text-black transition-colors duration-200 group"
        >
          <div className="font-black text-2xl tracking-tighter group-hover:skew-x-6 transition-transform uppercase">
            {navigationContent.brand}
          </div>
        </Link>
        <div className="hidden md:flex flex-1 justify-end items-stretch">
          <button
            onClick={() => {
              onOpenAiTool();
              onCloseMenu();
            }}
            className="px-6 font-mono text-sm font-bold border-l-2 border-black bg-lime-300 hover:bg-black hover:text-lime-300 transition-all flex items-center gap-2"
          >
            <Sparkles size={16} /> {navigationContent.aiTool.label}
          </button>
          {navigationContent.mainLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `px-6 font-mono text-sm font-bold border-l-2 border-black hover:bg-lime-300 transition-all hover:pt-2 active:bg-lime-400 flex items-center ${
                  isActive ? 'bg-lime-300' : 'bg-transparent'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <button
            onClick={() => handleNavigate(navigationContent.cta.path)}
            className="px-8 bg-black text-white font-bold border-l-2 border-black hover:bg-white hover:text-black transition-all flex items-center gap-2"
          >
            {navigationContent.cta.label} <ArrowRight size={16} />
          </button>
        </div>
        <button
          className="md:hidden px-6 border-l-2 border-black hover:bg-lime-300 active:bg-lime-400"
          onClick={onToggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full border-b-2 border-black bg-[#f4f4f0] flex flex-col h-[calc(100vh-4rem)] overflow-y-auto pb-20">
          <button
            onClick={() => {
              onOpenAiTool();
              onCloseMenu();
            }}
            className="p-6 text-left font-black text-2xl border-b-2 border-black bg-lime-300 hover:pl-10 transition-all uppercase flex items-center gap-2"
          >
            <Sparkles size={24} /> {navigationContent.mobile.aiLabel}
          </button>
          {navigationContent.mainLinks.map((link) => (
            <button
              key={link.path}
              onClick={() => handleNavigate(link.path)}
              className="p-6 text-left font-black text-2xl border-b-2 border-black last:border-b-0 hover:bg-lime-300 hover:pl-10 transition-all uppercase"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNavigate(navigationContent.cta.path)}
            className="p-6 bg-black text-white font-mono text-center hover:bg-gray-900"
          >
            {navigationContent.mobile.ctaLabel}
          </button>
        </div>
      )}
    </nav>
  );
};

export default NavBar;