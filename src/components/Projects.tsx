import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { projects, portfolioInfo } from '../data/portfolioData';

interface ProjectsProps {
  onSelectProject?: (id: string) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  return (
    <section className="projects-section" id="work">
      <div className="projects-header">
        <h2 className="projects-title">Featured Projects &amp; Architectures</h2>
        <a
          href={portfolioInfo.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="projects-cta-pill"
          aria-label="Visit GitHub Profile"
        >
          <Github size={13} />
          <span>GitHub: {portfolioInfo.githubHandle}</span>
        </a>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <article 
            key={project.id} 
            className="project-card"
            onClick={() => onSelectProject?.(project.id)}
          >
            <div className="project-card-topline">
              <div className="project-type-pill">{project.type}</div>
              <div className="project-index">{project.index}</div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <h3 className="project-title">{project.title}</h3>
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    aria-label={`View code for ${project.title}`}
                    style={{ color: 'inherit', opacity: 0.7 }}
                  >
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>
              <p className="project-description">{project.description}</p>
            </div>

            <div className="project-tags-row">
              {project.tags.map((tag, tagIdx) => (
                <span key={tagIdx} className="tech-tag">
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
