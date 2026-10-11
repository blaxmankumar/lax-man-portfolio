import { useEffect, useRef, useState } from 'react';
import { About } from './About';

const skills = [
  {
    date: '01',
    title: 'Cloud Platforms',
    description: 'AWS, Azure, EKS, AKS'
  },
  {
    date: '02',
    title: 'Infrastructure Automation',
    description: 'Terraform, Ansible'
  },
  {
    date: '03',
    title: 'Containers & Kubernetes',
    description: 'Docker, Kubernetes, RKE2, Helm'
  },
  {
    date: '04',
    title: 'CI/CD & GitOps',
    description: 'Jenkins, GitHub Actions, Argo CD'
  },
  {
    date: '05',
    title: 'DevSecOps & Monitoring',
    description: 'SonarQube, Trivy, Prometheus, Grafana'
  },
  {
    date: '06',
    title: 'Linux & Scripting',
    description: 'Linux, Bash, Python'
  }
];

export const Skills = () => {
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
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} aria-label="Engineering skills" style={{ padding: '8rem 0', position: 'relative' }}>
      <div className="container" style={{ position: 'relative' }}>
        
        {/* Top Metadata Row */}
        <div className="tech-marker" style={{ 
          gridColumn: '1 / 9', 
          display: 'flex', 
          alignItems: 'flex-start',
          padding: '0 2rem',
          opacity: 0.7,
          marginBottom: '6rem'
        }}>
          <div>// SYS.SKILLS_</div>
        </div>

        <About />
        <div className="skills-categories">
            {skills.map((skill, index) => (
              <div 
                key={skill.title} 
                className={isVisible ? `animate-fade-in delay-${(index % 3) + 1}` : undefined}
                style={{ 
                  opacity: isVisible ? 1 : 0
                }}
              >
                <h3 style={{
                  fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                  fontWeight: 500,
                  letterSpacing: '-0.03em',
                  lineHeight: 1.1,
                  marginBottom: '1rem',
                  color: 'var(--color-text)'
                }}>
                  {skill.title}
                </h3>
                <div className="mono-text" style={{
                  fontSize: '0.9rem',
                  opacity: 0.6,
                  display: 'flex',
                  alignItems: 'baseline',
                  gap: '1rem'
                }}>
                  <span aria-hidden="true">[{skill.date}]</span>
                  <span>{skill.description}</span>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};
