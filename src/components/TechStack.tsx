import React from 'react';
import { techCategories } from '../data/portfolioData';

export const TechStack: React.FC = () => {
  return (
    <section className="capabilities-section" id="stack" aria-label="Technical Capabilities">
      <div className="capabilities-bento">
        {techCategories.map((category, idx) => (
          <div key={idx} className="capability-card">
            <h3 className="capability-title">{category.title}</h3>
            <div className="capability-list">
              {category.items.map((item, itemIdx) => (
                <div key={itemIdx} className="capability-item">
                  <div className="capability-bullet" />
                  <span className="capability-text">{item}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
