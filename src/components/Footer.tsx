

import { Github, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer style={{ padding: '2rem 0' }}>
      <div className="container" style={{ position: 'relative' }}>
        
        {/* Logo/Name */}
        <div className="footer-logo">
          <span style={{ fontFamily: 'var(--font-main)', fontSize: '1rem', opacity: 0.6 }}>
            Laxman Kumar Battula
          </span>
        </div>

        {/* Middle Links */}
        <div className="footer-links">
          <a href="#projects" className="nav-link">projects</a>
          <a href="#about" className="nav-link">about</a>
          <a href="#skills" className="nav-link">skills</a>
          <a href="#contact" className="nav-link">contact</a>
        </div>

        {/* Social Icons */}
        <div className="footer-social">
          <a href="https://github.com/blaxmankumar" target="_blank" rel="noopener noreferrer" className="nav-link" aria-label="Laxman Kumar Battula on GitHub"><Github size={18} /></a>
          <a href="mailto:laxmankumarbattula04@gmail.com" className="nav-link" aria-label="Email Laxman Kumar Battula"><Mail size={18} /></a>
        </div>

      </div>
    </footer>
  );
};
