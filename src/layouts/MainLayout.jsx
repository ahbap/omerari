import React, { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import NavBar from '../components/layout/NavBar.jsx';
import Footer from '../components/layout/Footer.jsx';
import AiReframerModal from '../components/modals/AiReframerModal.jsx';
import { useScrollLock } from '../hooks/useScrollLock.js';

const MainLayout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAiModalOpen, setIsAiModalOpen] = useState(false);
  const location = useLocation();

  useScrollLock(isMenuOpen || isAiModalOpen);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMenuOpen(false);
  }, [location.pathname]);

  const openAiTool = () => setIsAiModalOpen(true);
  const closeAiTool = () => setIsAiModalOpen(false);

  return (
    <div className="min-h-screen bg-[#f4f4f0] text-black font-sans selection:bg-lime-300 selection:text-black overflow-x-hidden relative">
      <NavBar
        isMenuOpen={isMenuOpen}
        onToggleMenu={() => setIsMenuOpen((prev) => !prev)}
        onCloseMenu={() => setIsMenuOpen(false)}
        onOpenAiTool={openAiTool}
      />

      {isAiModalOpen && <AiReframerModal onClose={closeAiTool} />}

      <main className="pt-16 relative min-h-screen">
        <Outlet context={{ openAiTool }} />
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;
