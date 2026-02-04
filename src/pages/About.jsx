import React from 'react';
import './About.css';

// Professional photos
import clubHistory from '../assets/about/clubHistory.webp';
import president from '../assets/about/president.webp'; 
import vicePresident from '../assets/about/vicePresident.webp';
import supervisor from '../assets/about/supervisor.webp';

const About = () => {
  return (
    <div className="page-content active" id="about">
      
      {/* 1. HERO SECTION */}
      <div className="about-hero">
        <div className="hero-overlay">
          <h1>Driven by Ambition</h1>
          <p>Shaping the next generation of ESM leaders since 2020.</p>
        </div>
      </div>

      {/* 2. HISTORY & MISSION */}
      <section className="about-split-section">
        <div className="about-image">
          <img src={clubHistory} alt="MoQawill History" />
        </div>
        <div className="about-text-content">
          <span className="subtitle">Our Journey</span>
          <h2>The Legacy of MoQawill</h2>
          <p>
            Founded in 2020 by official decree No. 01 at the <strong>Higher School of Management (ESM)</strong>, 
            MoQawill emerged from a vision to bridge the gap between academic theory and 
            operational excellence.
          </p>
          <p>
            Our mission is simple yet bold: To foster an entrepreneurial spirit and 
            provide a platform for scientific research that transforms students into 
            industry-ready leaders.
          </p>
        </div>
      </section>

      {/* 3. ORGANIZATIONAL CHART (Updated Departments) */}
      {/* 3. ORGANIZATIONAL STRUCTURE */}
      <section className="org-section">
        <h2 className="section-title">Organizational Structure</h2>
        <p className="section-intro">Our club operates with strategic precision, divided into specialized departments that mirror corporate structures.</p>
        
        <div className="org-grid">
          <div className="org-node main-node">Executive Board</div>
          <div className="org-line"></div>
          <div className="org-departments">
            <div className="dept-tag"><span>👥</span> HR</div>
            <div className="dept-tag"><span>🤝</span> External Relations</div>
            <div className="dept-tag"><span>📸</span> Media</div>
            <div className="dept-tag"><span>🎨</span> Design</div>
            <div className="dept-tag"><span>🧪</span> Scientific Activities</div>
            <div className="dept-tag"><span>📅</span> Organization</div>
            {/* إضافة قسم التخطيط هنا */}
            <div className="dept-tag"><span>📈</span> Planification</div> 
          </div>
        </div>
      </section>

      {/* 4. EXECUTIVE BOARD BIOS */}
      <section className="board-section">
        <h2 className="section-title">Meet the Executive Board</h2>
        <div className="board-grid">
          
          <div className="member-card">
            <div className="member-photo">
              <img src={president} alt="President" />
            </div>
            <div className="member-info">
              <h3>Ibrahim Kaddouri</h3>
              <span className="role">President</span>
              <p>Strategic lead focused on operational excellence and club growth.</p>
            </div>
          </div>

          <div className="member-card">
            <div className="member-photo">
              <img src={vicePresident} alt="Vice President" />
            </div>
            <div className="member-info">
              <h3>Mohammed Chettouane</h3>
              <span className="role">Vice President</span>
              <p>Overseeing departmental synergy and internal management.</p>
            </div>
          </div>

          <div className="member-card">
            <div className="member-photo">
              <img src={supervisor} alt="Supervisor" />
            </div>
            <div className="member-info">
              <h3>Mohammed Sami Bouderoua</h3>
              <span className="role">General Supervisor</span>
              <p>Ensuring formal compliance and administrative efficiency.</p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default About;