import React from "react";
import "./Home.css"; 

// استيراد الصور بصيغة WebP
import collectiveHero from "../assets/home/collectiveHero.webp";
import openingDay from "../assets/home/openingDay.webp";
import blueNovember from "../assets/home/blueNovember.webp";
import book from "../assets/home/book.webp";

const Home = () => {
  return (
    <div className="page-content active" id="home">
      

      {/* 1. HERO SECTION */}
      <section 
        className="hero-section" 
        style={{ backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.7)), url(${collectiveHero})` }}
      >
        <div className="hero-content">
          <h1 id="heroTitle">Welcome To MoQawill</h1>
          <p id="heroSubtitle">
            <span className="hero-symbol">★</span> Learn here, lead anywhere  <span className="hero-symbol">★</span>
          </p>
          <a href="#about" className="cta-button">Explore Our World</a>
        </div>
      </section>

      {/* 2. ABOUT SECTION */}
      <section className="content-card" id="about">
        <h2 className="section-title">Who Are We?</h2>
        <p className="about-text">
          <strong>MoQawill Club</strong> is a scientific and cultural organization affiliated with the 
          Higher School of Management in Tlemcen. Established in 2020 by official decree No. 01, 
          the club is dedicated to promoting entrepreneurship, innovation, and 
          scientific research in the field of management sciences.
        </p>
      </section>

      {/* 3. LATEST ACTIVITIES SECTION */}
      <section className="latest-activities">
        <h2 className="section-title">Our Latest Highlights</h2>
        <div className="activities-grid">
          
          <div className="activity-card">
            <div className="activity-img-wrapper">
              <img src={openingDay} alt="Opening Day" loading="lazy" />
            </div>
            <div className="activity-info">
              <h3>Opening Day</h3>
              <p>Launching our academic journey with energy and vision.</p>
            </div>
          </div>

          <div className="activity-card">
            <div className="activity-img-wrapper">
              <img src={blueNovember} alt="Blue November" loading="lazy" />
            </div>
            <div className="activity-info">
              <h3>Blue November</h3>
              <p>Advocating for health awareness and community support.</p>
            </div>
          </div>

          <div className="activity-card">
            <div className="activity-img-wrapper">
              <img src={book} alt="Algiers Book Expo" loading="lazy" />
            </div>
            <div className="activity-info">
              <h3>Alger Book Expo</h3>
              <p>Expanding horizons through literature and business resources.</p>
            </div>
          </div>

        </div>
      </section>

      {/* 4. COLLABORATION SECTION (Cleaned) */}
      <section className="contact-footer">
        <div className="contact-container">
          <h2>Ready to Collaborate?</h2>
          <p>Join MoQawill today and be part of the future of management.</p>
          <div className="contact-details">
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <span>moqawillesmt@gmail.com</span>
            </div>
            <div className="contact-item">
              <i className="fas fa-map-marker-alt"></i>
              <span>ESM, Tlemcen, Algeria</span>
            </div>
          </div>
          {/* تم حذف روابط السوشيال ميديا من هنا للاكتفاء بوجودها في الـ Footer */}
        </div>
      </section>

    </div>
  );
};

export default Home;