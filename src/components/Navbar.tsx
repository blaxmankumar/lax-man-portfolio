import { useState, useEffect, useRef } from 'react';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(() => window.scrollY > 50);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(() => window.matchMedia('(max-width: 768px)').matches);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    const handleResize = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
      setMenuOpen(false);
    };
    mediaQuery.addEventListener('change', handleResize);
    return () => mediaQuery.removeEventListener('change', handleResize);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [menuOpen]);

  return (
    <nav className="site-navbar" aria-label="Main navigation" style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      padding: scrolled ? '1.5rem 0' : '2rem 0',
      backgroundColor: scrolled ? 'rgba(0, 0, 0, 0.85)' : 'transparent',
      backdropFilter: scrolled ? 'saturate(180%) blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--color-border)' : 'none',
      transition: 'all 0.3s ease',
      zIndex: 100,
    }}>
      <div className="container" style={{ padding: 0, position: 'relative' }}>
        {/* Logo */}
        <div className="nav-logo">
          <a href="#hero" aria-label="Laxman Kumar Battula — home" onClick={() => setMenuOpen(false)}>
            .laxman
          </a>
        </div>

        {/* Hamburger Toggle (Mobile) */}
        <button 
          ref={menuButtonRef}
          type="button"
          className="nav-mobile-toggle" 
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="main-navigation-links"
        >
          <div className={`hamburger ${menuOpen ? 'open' : ''}`} aria-hidden="true">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>

        {/* Links */}
        <div id="main-navigation-links" className={`nav-links ${menuOpen ? 'open' : ''}`} inert={isMobile && !menuOpen}>
          <a href="#projects" className="nav-link" onClick={() => setMenuOpen(false)}>projects</a>
          <a href="#about" className="nav-link" onClick={() => setMenuOpen(false)}>about</a>
          <a href="#skills" className="nav-link" onClick={() => setMenuOpen(false)}>skills</a>
          <a href="#contact" className="nav-link" onClick={() => setMenuOpen(false)}>contact</a>
          <a href="/Laxman_Kumar_Battula_Resume.pdf" target="_blank" rel="noopener noreferrer" className="nav-link get-resume-btn" onClick={() => setMenuOpen(false)}>get resume</a>
        </div>
      </div>
    </nav>
  );
};
