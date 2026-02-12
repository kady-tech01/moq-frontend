import React from 'react';
import './ESM.css';
import esmLogo from '../assets/esm/esmlogo.webp'; 

const ESM = () => {
  return (
    <div className="esm-page">
      {/* Introduction Section */}
      <section className="esm-intro">
        <div className="esm-intro-content">
          <img src={esmLogo} alt="ESM Tlemcen Logo" className="esm-logo-large" />
          <h1>المدرسة العليا لإدارة الأعمال – تلمسان</h1>
          <h2>École Supérieure de Management – Tlemcen</h2>
          <div className="intro-divider"></div>
          <p className="esm-description">
            ESM Tlemcen is a prestigious public higher education institution in Algeria, 
            one of the elite <strong>“Grandes Écoles”</strong> specialized in management, 
            economics, and business studies.
          </p>
        </div>
      </section>

      {/* Program Structure Section */}
      <section className="esm-studies">
        <h2 className="esm-section-title">1️⃣ Overall Structure of Studies</h2>
        <p className="studies-subtitle">The program is organized into two main cycles:</p>
        
        <div className="studies-grid">
          {/* First Cycle Card */}
          <div className="study-card preparatory">
            <div className="card-header">
              <span className="icon">🔹</span>
              <h3>First Cycle: Preparatory Cycle</h3>
            </div>
            <div className="card-body">
              <p><strong>Duration:</strong> 2 years</p>
              <p><strong>Purpose:</strong> Build strong foundations in management, economics, and quantitative tools</p>
              <p><strong>Nature:</strong> Very intensive and selective</p>
              <div className="subjects-box">
                <h4>Main subjects include:</h4>
                <ul>
                  <li>Mathematics & Statistics</li>
                  <li>Microeconomics & Macroeconomics</li>
                  <li>Accounting</li>
                  <li>Management fundamentals</li>
                  <li>Law</li>
                  <li>Computer science</li>
                  <li>Foreign languages (French & English)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Second Cycle Card */}
          <div className="study-card specialization">
            <div className="card-header">
              <span className="icon">🔹</span>
              <h3>Second Cycle: Specialization Cycle</h3>
            </div>
            <div className="card-body">
              <p><strong>Duration:</strong> 3 years</p>
              <p><strong>Focus:</strong> Advanced management training and specialization</p>
              <div className="subjects-box">
                <h4>specialities:</h4>
                <ul>
                  <li>Management et stratégies d’entreprises.</li>
                  <li>Management financier.</li>
                  <li>Maketing</li>
                  <li>Management des services de santé</li>
                  <li>Marketing Agroalimentaire.</li>
                  <li>Management des établissements touristiques. </li>
                 
                </ul>
                <p className="card-footer-text">This cycle prepares students for high-level managerial and leadership roles.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="esm-contact">
        <div className="contact-box">
          <h2>Contact & Social Media of ESM</h2>
          <div className="contact-grid-layout">
            <div className="contact-main-info">
                <div className="contact-info-row">
                    <span>📍</span>
                    <p>01, Rue Barka Ahmed Bouhannak, Tlemcen 13000, Algeria</p>
                </div>
                <div className="contact-info-row">
                    <span>📞</span>
                    <p>+213 43 21 16 47</p>
                </div>
                <div className="contact-info-row">
                    <span>📧</span>
                    <p><a href="mailto:esm.tlemcen13000@gmail.com">esm.tlemcen13000@gmail.com</a></p>
                </div>
                <div className="contact-info-row">
                    <span>🌐</span>
                    <p>
                        <a href="http://www.esm-tlemcen.dz" target="_blank" rel="noreferrer">
                            www.esm-tlemcen.dz
                        </a>
                    </p>
                </div>
            </div>

            <div className="contact-social-links">
                <h3>Our Facebook Pages</h3>
                <a href="https://www.facebook.com/ESMTlem13" target="_blank" rel="noreferrer" className="fb-link-btn">
                   ESM Official Page
                </a>
                <a href="https://www.facebook.com/ESMTlemDCP13" target="_blank" rel="noreferrer" className="fb-link-btn">
                   1st Cycle (DCP) Page
                </a>
                <a href="https://www.facebook.com/ESMTlemDSC13" target="_blank" rel="noreferrer" className="fb-link-btn">
                   2nd Cycle (DSC) Page
                </a>
            </div>
          </div>

          <div className="contact-footer-btn">
            <a href="http://www.esm-tlemcen.dz" target="_blank" rel="noreferrer" className="contact-btn-link">
                Visit Official Website
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ESM;