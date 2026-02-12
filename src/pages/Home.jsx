import React, { useEffect, useState } from "react";
import "./Home.css"; 

// استيراد الصور بصيغة WebP - FALLBACK ONLY
import collectiveHero from "../assets/home/collectiveHero.webp";

const Home = () => {
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // جلب البيانات من Django
    fetch('http://127.0.0.1:8000/api/home/')
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
      <div className="page-content active" id="home">
        <div style={{ textAlign: 'center', padding: '50px' }}>Loading...</div>
      </div>
    );
  }

  return (
    <div className="page-content active" id="home">
      
      {/* 1. HERO SECTION - DYNAMIC */}
      <section 
        className="hero-section" 
        style={{ 
          backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.7)), url(${
            content?.hero?.image || collectiveHero
          })` 
        }}
      >
        <div className="hero-content">
          <h1 id="heroTitle">{content?.hero?.title || "Welcome To MoQawill"}</h1>
          <p id="heroSubtitle">
            <span className="hero-symbol">★</span> 
            {content?.hero?.subtitle || "Learn here, lead anywhere"} 
            <span className="hero-symbol">★</span>
          </p>
          <a href="#about" className="cta-button">Explore Our World</a>
        </div>
      </section>

      {/* 2. ABOUT SECTION - DYNAMIC */}
      <section className="content-card" id="about">
        <h2 className="section-title">Who Are We?</h2>
        <p className="about-text">
          {content?.about?.text || 
            "MoQawill Club is a scientific and cultural organization affiliated with the Higher School of Management in Tlemcen. Established in 2020 by official decree No. 01, the club is dedicated to promoting entrepreneurship, innovation, and scientific research in the field of management sciences."
          }
        </p>
      </section>

      {/* 3. LATEST ACTIVITIES SECTION - DYNAMIC */}
      <section className="latest-activities">
        <h2 className="section-title">Our Latest Highlights</h2>
        <div className="activities-grid">
          
          {content?.activities && content.activities.length > 0 ? (
            content.activities.map((activity) => (
              <div className="activity-card" key={activity.id}>
                <div className="activity-img-wrapper">
                  <img 
                    src={activity.image} 
                    alt={activity.title} 
                    loading="lazy" 
                  />
                </div>
                <div className="activity-info">
                  <h3>{activity.title}</h3>
                  <p>{activity.description}</p>
                </div>
              </div>
            ))
          ) : (
            <>
              {/* FALLBACK - STATIC ACTIVITIES IF NO DATA YET */}
              <div className="activity-card">
                <div className="activity-img-wrapper">
                  <img src={collectiveHero} alt="Opening Day" loading="lazy" />
                </div>
                <div className="activity-info">
                  <h3>Opening Day</h3>
                  <p>Launching our academic journey with energy and vision.</p>
                </div>
              </div>
              <div className="activity-card">
                <div className="activity-img-wrapper">
                  <img src={collectiveHero} alt="Blue November" loading="lazy" />
                </div>
                <div className="activity-info">
                  <h3>Blue November</h3>
                  <p>Advocating for health awareness and community support.</p>
                </div>
              </div>
              <div className="activity-card">
                <div className="activity-img-wrapper">
                  <img src={collectiveHero} alt="Alger Book Expo" loading="lazy" />
                </div>
                <div className="activity-info">
                  <h3>Alger Book Expo</h3>
                  <p>Expanding horizons through literature and business resources.</p>
                </div>
              </div>
            </>
          )}

        </div>
      </section>

      {/* 4. COLLABORATION SECTION - DYNAMIC */}
      <section className="contact-footer">
        <div className="contact-container">
          <h2>Ready to Collaborate?</h2>
          <p>Join MoQawill today and be part of the future of management.</p>
          <div className="contact-details">
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <span>{content?.contact?.email || "moqawillesmt@gmail.com"}</span>
            </div>
            <div className="contact-item">
              <i className="fas fa-map-marker-alt"></i>
              <span>{content?.contact?.location || "ESM, Tlemcen, Algeria"}</span>
            </div>
          </div>
          {/* تم حذف روابط السوشيال ميديا من هنا للاكتفاء بوجودها في الـ Footer */}
        </div>
      </section>

    </div>
  );
};

export default Home;