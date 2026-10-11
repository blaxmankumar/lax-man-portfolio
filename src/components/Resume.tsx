import { Download, Mail } from 'lucide-react';

export const Resume = () => (
  <section id="resume" className="engineering-section" aria-labelledby="resume-title">
    <div className="container engineering-section-layout">
      <div className="tech-marker">{'// PROFESSIONAL_PROFILE'}</div>
      <div className="resume-layout">
        <div>
          <h2 id="resume-title" className="engineering-heading">Resume</h2>
          <p className="resume-name">Laxman Kumar Battula</p>
          <p className="resume-description">DevOps Engineer / Cloud Engineer / Site Reliability Engineer (SRE)</p>
        </div>
        <div className="resume-actions">
          {__RESUME_AVAILABLE__ ? (
            <a
              href="/Laxman_Kumar_Battula_Resume.pdf"
              download="Laxman_Kumar_Battula_Resume.pdf"
              className="hero-button hero-button--primary"
            >
              Download resume <Download size={18} aria-hidden="true" />
            </a>
          ) : (
            <>
              <button type="button" className="hero-button hero-button--primary" disabled>
                Download resume <Download size={18} aria-hidden="true" />
              </button>
              <p className="resume-status">Resume download is currently unavailable. Please contact me by email.</p>
              <a href="mailto:laxmankumarbattula04@gmail.com" className="resume-contact">
                <Mail size={16} aria-hidden="true" /> Request resume
              </a>
            </>
          )}
        </div>
      </div>
    </div>
  </section>
);
