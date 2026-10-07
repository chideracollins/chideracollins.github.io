import React from 'react';
import { ArrowUpRight, Mail } from 'lucide-react';
import { portfolioInfo } from '../data/portfolioData';

interface FooterCTAProps {
  onOpenContact: () => void;
}

export const FooterCTA: React.FC<FooterCTAProps> = ({ onOpenContact }) => {
  return (
    <footer className="footer-container" id="contact">
      <div className="contact-cta-footer">
        <div className="cta-copy-group">
          <div className="cta-eyebrow">{portfolioInfo.ctaEyebrow}</div>
          <h2 className="cta-headline">{portfolioInfo.ctaHeadline}</h2>
          <p className="cta-body-text">{portfolioInfo.ctaBody}</p>
        </div>

        <div className="cta-actions-group">
          <button 
            type="button" 
            className="btn-lime" 
            onClick={onOpenContact}
            aria-label="Get In Touch"
          >
            <Mail size={16} />
            <span>Get In Touch</span>
            <ArrowUpRight size={16} />
          </button>
        </div>
      </div>

      <div className="sub-footer-bar">
        <div>
          © {new Date().getFullYear()} {portfolioInfo.name}. All rights reserved.
        </div>
        <div className="sub-footer-links">
          <a
            href={portfolioInfo.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="sub-footer-link"
          >
            GitHub
          </a>
          <a
            href={portfolioInfo.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="sub-footer-link"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${portfolioInfo.email}`}
            className="sub-footer-link"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};
