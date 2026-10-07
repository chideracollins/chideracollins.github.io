import React, { useState, useEffect } from 'react';
import { ThemeMode } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { IntroStrip } from './components/IntroStrip';
import { Projects } from './components/Projects';
import { TechStack } from './components/TechStack';
import { FooterCTA } from './components/FooterCTA';
import { ContactModal } from './components/ContactModal';

export const App: React.FC = () => {
  const [theme, setTheme] = useState<ThemeMode>(() => {
    const saved = localStorage.getItem('portfolio-theme');
    if (saved === 'light' || saved === 'dark') return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const handleToggleTheme = (newTheme: ThemeMode) => {
    setTheme(newTheme);
  };

  return (
    <div className="app-wrapper">
      <div className="portfolio-container">
        <Navbar
          theme={theme}
          onToggleTheme={handleToggleTheme}
          onOpenContact={() => setIsContactModalOpen(true)}
        />
        <main>
          <Hero />
          <IntroStrip />
          <Projects />
          <TechStack />
        </main>
        <FooterCTA onOpenContact={() => setIsContactModalOpen(true)} />
      </div>

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </div>
  );
};

export default App;
