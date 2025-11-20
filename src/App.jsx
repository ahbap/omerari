import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout.jsx';
import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import TrainingsPage from './pages/TrainingsPage.jsx';
import ConsultancyPage from './pages/ConsultancyPage.jsx';
import DesignOpsPage from './pages/DesignOpsPage.jsx';
import ContactPage from './pages/ContactPage.jsx';

const App = () => (
  <Routes>
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="trainings" element={<TrainingsPage />} />
      <Route path="consultancy" element={<ConsultancyPage />} />
      <Route path="designops" element={<DesignOpsPage />} />
      <Route path="contact" element={<ContactPage />} />
    </Route>
  </Routes>
);

export default App;
