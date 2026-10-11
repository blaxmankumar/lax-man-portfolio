import { ArrowRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

import { engineeringProjects as projects } from '../data/projects';

export const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.05 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" ref={sectionRef} style={{ position: 'relative', zIndex: 1, paddingBottom: '8rem' }}>
      <div className="container" style={{ display: 'block' }}>
        
        {/* Section Header */}
        <div className="tech-marker" style={{ marginBottom: '4rem', opacity: 0.7 }}>
          {'>_ DEPLOYMENTS'}
        </div>

        {projects.map((project, index) => (
          <a
            key={project.title}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} — open GitHub repository in a new tab`}
            className={`project-card animate-fade-in delay-${(index % 3) + 1}`}
            style={{ 
              backgroundColor: project.color,
              color: project.textColor || '#ffffff',
              padding: '4rem 2rem 6rem',
              marginBottom: '2rem',
              opacity: isVisible ? 1 : 0,
              transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1)`,
              display: 'flex',
              flexDirection: 'column',
              position: 'sticky',
              top: `calc(10rem + ${index * 2.5}rem)`,
              zIndex: index + 1,
              overflow: 'hidden',
              boxShadow: `0 30px 60px -12px rgba(0,0,0,0.3), 0 0 0 1px rgba(0,0,0,0.05)`,
              borderRadius: '48px'
            }}
          >
            {/* Top Bar Metadata */}
            <div className="mono-text" style={{ 
              display: 'flex', 
              justifyContent: 'space-between',
              fontSize: '0.85rem',
              borderBottom: `1px solid ${project.textColor ? 'rgba(0,0,0,0.15)' : 'rgba(255,255,255,0.15)'}`,
              paddingBottom: '1rem',
              marginBottom: '3rem',
              opacity: 0.8
            }}>
              <span>{project.featured ? '[FLAGSHIP]' : `[PROJECT:0${index + 1}]`}</span>
              <span>&lt;TYPE:{project.type}&gt;</span>
            </div>

            {/* Title & Arrow */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <h3 className="project-title" style={{
                fontSize: 'clamp(3rem, 7vw, 6rem)', 
                fontWeight: 500, 
                letterSpacing: '-0.04em',
                lineHeight: 1,
                margin: 0
              }}>
                {project.title}
              </h3>
              
              <div
                aria-hidden="true"
                className="project-arrow-link" 
                style={{ 
                  color: 'inherit',
                  opacity: 0.8,
                  transition: 'opacity 0.2s',
                  marginTop: '1rem',
                  display: 'inline-block',
                  position: 'relative',
                  zIndex: 20,
                  cursor: 'pointer'
                }}
              >
                <div className="project-arrow" style={{ transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)' }}>
                  <ArrowRight size={56} strokeWidth={2.5} />
                </div>
              </div>
            </div>

            {/* Repository-verified description */}
            <div style={{
              marginTop: '4rem',
              maxWidth: '600px',
              fontFamily: 'var(--font-mono)',
              fontSize: '1rem',
              opacity: 0.8,
              lineHeight: 1.6
            }}>
              {project.description}
            </div>
            
            {/* Project visual in the original image slot */}
            <div style={{
              marginTop: '4rem',
              width: '100%',
              height: '400px',
              backgroundColor: '#000000',
              borderRadius: '1rem',
              border: `1px solid ${project.textColor ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.1)'}`,
              borderBottom: 'none',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              {project.image ? (
                <picture className="project-visual-media">
                  <source media="(max-width: 767px)" srcSet={project.mobileImage} type="image/svg+xml" />
                  <img
                    className="project-visual-image"
                    src={project.image}
                    alt={project.imageAlt}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain'
                    }}
                  />
                </picture>
              ) : null}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};
