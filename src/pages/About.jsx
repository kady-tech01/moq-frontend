import React, { useEffect, useState } from 'react';
import './About.css';

// استيراد الصور كـ FALLBACK فقط
import clubHistory from '../assets/about/clubHistory.webp';


const About = () => {
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/about/')
      .then(res => res.json())
      .then(data => {
        setContent(data);
        setLoading(false);
      })
      .catch(err => {
        console.log('Using fallback content');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="page-content active" id="about">
        <div style={{ textAlign: 'center', padding: '50px' }}>Loading...</div>
      </div>
    );
  }

  return (
    <div className="page-content active" id="about">
      
      {/* 1. HERO SECTION - DYNAMIC */}
      <div 
        className="about-hero" 
        style={{
          backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.7)), url(${
            content?.hero?.image || clubHistory
          })`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 80%'
        }}
      >
        <div className="hero-overlay">
          <h1>{content?.hero?.title || "Driven by Ambition"}</h1>
          <p>{content?.hero?.subtitle || "Shaping the next generation of ESM leaders since 2020."}</p>
        </div>
      </div>

      {/* 2. HISTORY & MISSION - DYNAMIC */}
      <section className="about-split-section">
        <div className="about-image">
          <img 
            src={content?.history?.image || clubHistory} 
            alt="MoQawill History" 
          />
        </div>
        <div className="about-text-content">
          <span className="subtitle">{content?.history?.subtitle || "Our Journey"}</span>
          <h2>{content?.history?.title || "The Legacy of MoQawill"}</h2>
          <p dangerouslySetInnerHTML={{
            __html: content?.history?.paragraph1 || 
              "Founded in 2020 by official decree No. 01 at the <strong>Higher School of Management (ESM)</strong>, MoQawill emerged from a vision to bridge the gap between academic theory and operational excellence."
          }} />
          <p>
            {content?.history?.paragraph2 || 
              "Our mission is simple yet bold: To foster an entrepreneurial spirit and provide a platform for scientific research that transforms students into industry-ready leaders."
            }
          </p>
        </div>
      </section>

      {/* 3. ORGANIZATIONAL STRUCTURE - STATIC */}
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
            <div className="dept-tag"><span>📈</span> Planification</div> 
          </div>
        </div>
      </section>

      {/* 4. EXECUTIVE BOARD BIOS - DYNAMIC */}
      <section className="board-section">
        <h2 className="section-title">Meet the Executive Board</h2>
        <div className="board-grid">
          
          {/* PRESIDENT - DYNAMIC */}
          <div className="member-card">
            <div className="member-photo">
              <img 
                src={content?.board?.president?.image || president} 
                alt="President" 
              />
            </div>
            <div className="member-info">
              <h3>{content?.board?.president?.name || "Ibrahim Kaddouri"}</h3>
              <span className="role">President</span>
              <p>{content?.board?.president?.description || "Strategic lead focused on operational excellence and club growth."}</p>
            </div>
          </div>

          {/* VICE PRESIDENT - DYNAMIC */}
          <div className="member-card">
            <div className="member-photo">
              <img 
                src={content?.board?.vicePresident?.image || vicePresident} 
                alt="Vice President" 
              />
            </div>
            <div className="member-info">
              <h3>{content?.board?.vicePresident?.name || "Mohammed Chettouane"}</h3>
              <span className="role">Vice President</span>
              <p>{content?.board?.vicePresident?.description || "Overseeing departmental synergy and internal management."}</p>
            </div>
          </div>

          {/* SUPERVISOR - DYNAMIC */}
          <div className="member-card">
            <div className="member-photo">
              <img 
                src={content?.board?.supervisor?.image || supervisor} 
                alt="Supervisor" 
              />
            </div>
            <div className="member-info">
              <h3>{content?.board?.supervisor?.name || "Mohammed Sami Bouderoua"}</h3>
              <span className="role">General Supervisor</span>
              <p>{content?.board?.supervisor?.description || "Ensuring formal compliance and administrative efficiency."}</p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default About;