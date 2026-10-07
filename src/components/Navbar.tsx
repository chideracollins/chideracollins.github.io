import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { ThemeMode } from '../types';
import { portfolioInfo } from '../data/portfolioData';

interface NavbarProps {
  theme: ThemeMode;
  onToggleTheme: (newTheme: ThemeMode) => void;
  onOpenContact?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ theme, onToggleTheme, onOpenContact }) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="navbar">
      <div 
        className="brand-lockup" 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        role="button"
        tabIndex={0}
        aria-label="Chidera Collins Home"
      >
        <div className="brand-dot" />
        <div className="brand-name">{portfolioInfo.name}</div>
      </div>

      <nav className="primary-links" aria-label="Main Navigation">
        <a 
          href="#work" 
          className="nav-link"
          onClick={(e) => {
            e.preventDefault();
            scrollTo('work');
          }}
        >
          Work
        </a>
        <a 
          href="#systems" 
          className="nav-link"
          onClick={(e) => {
            e.preventDefault();
            scrollTo('systems');
          }}
        >
          Systems
        </a>
        <a 
          href="#stack" 
          className="nav-link"
          onClick={(e) => {
            e.preventDefault();
            scrollTo('stack');
          }}
        >
          Stack
        </a>
        <a 
          href="#contact" 
          className="nav-link"
          onClick={(e) => {
            e.preventDefault();
            if (onOpenContact) onOpenContact();
            else scrollTo('contact');
          }}
        >
          Contact
        </a>
      </nav>

      <div className="theme-toggle-pill" role="radiogroup" aria-label="Theme mode switcher">
        <button
          type="button"
          className={`toggle-option ${theme === 'light' ? 'active' : ''}`}
          onClick={() => onToggleTheme('light')}
          role="radio"
          aria-checked={theme === 'light'}
          aria-label="Switch to light mode"
        >
          <Sun size={14} />
          <span>Light</span>
        </button>
        <button
          type="button"
          className={`toggle-option ${theme === 'dark' ? 'active' : ''}`}
          onClick={() => onToggleTheme('dark')}
          role="radio"
          aria-checked={theme === 'dark'}
          aria-label="Switch to dark mode"
        >
          <Moon size={14} />
          <span>Dark</span>
        </button>
      </div>
    </header>
  );
};
