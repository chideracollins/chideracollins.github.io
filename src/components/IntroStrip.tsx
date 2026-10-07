import React from 'react';
import { portfolioInfo } from '../data/portfolioData';

export const IntroStrip: React.FC = () => {
  return (
    <section className="intro-strip" id="systems" aria-label="Core Services">
      <h2 className="intro-heading">{portfolioInfo.introHeading}</h2>
      <p className="intro-body">{portfolioInfo.introBody}</p>
    </section>
  );
};
