import React from 'react';
import { portfolioInfo, heroMetrics, specialties } from '../data/portfolioData';

export const Hero: React.FC = () => {
  return (
    <section className="hero-section" id="hero">
      {/* Main Feature Bento Card */}
      <div className="hero-main-card">
        <div className="hero-card-header">
          <div className="availability-pill">
            <span>•</span>
            <span>{portfolioInfo.availabilityBadge}</span>
          </div>
          <div className="hero-year-badge">Portfolio</div>
        </div>

        <div className="hero-statement">
          <div className="hero-kicker">{portfolioInfo.heroKicker}</div>
          <h1 className="hero-title">{portfolioInfo.heroTitle}</h1>
          <p className="hero-blurb">{portfolioInfo.heroSubtitle}</p>
        </div>

        <div className="hero-metrics-row">
          {heroMetrics.map((metric, idx) => (
            <div key={idx} className="hero-metric-item">
              <span className="hero-metric-value">{metric.discipline}</span>
              <span className="hero-metric-label">{metric.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Proof Rail (Portrait and summary items) */}
      <div className="hero-proof-rail">
        {/* Abstract Stylized Portrait Panel */}
        <div className="portrait-panel">
          <div className="portrait-glow" />
          <div className="portrait-art-wrap">
            <div className="abstract-portrait-block" />
            <div className="portrait-head" />
            <div className="portrait-glasses" />
          </div>
          <div className="floating-specialty-pill">
            <span className="specialty-highlight">⚡</span>
            <span>{portfolioInfo.floatingSpecialty}</span>
          </div>
        </div>

        {/* 3 Summary Rows */}
        <div className="profile-summary-stack">
          {specialties.map((item, idx) => (
            <div key={idx} className="summary-row">
              <div className="summary-dot" />
              <div className="summary-copy">
                <div className="summary-title">{item.title}</div>
                <div className="summary-detail">{item.detail}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
