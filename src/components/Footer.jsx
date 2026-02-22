import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  // هنا نضع العناوين مباشرة
  const clubEmail = "moqawillesmt@gmail.com"; // بريد النادي
  const developerEmail = "mecharakhadidja05@gmail.com"; 

  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Section 1 – Club Description */}
        <div className="footer-section">
          <h4 id="clubName">MoQawill</h4>
          <p>
            Empowering the next generation of business leaders through
            innovation, collaboration, and creativity.
          </p>
        </div>

        {/* Section 2 – Quick Links */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/events">Events</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Section 3 – Connect (Club Contacts) */}
        <div className="footer-section">
          <h4>Connect With Us</h4>
          <div className="social-links">
            <a href="https://www.instagram.com/moqawill_club_tlemcen?igsh=MWtweDZueHp5anJmeA==" target="_blank" rel="noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.tiktok.com/@moqawill.club?_r=1&_t=ZS-93rxwfgC8zB" target="_blank" rel="noreferrer">
              <i className="fab fa-tiktok"></i>
            </a>
            <a href="https://www.facebook.com/moqawillesm" target="_blank" rel="noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            {/* 📧 Club Email - التواصل مع النادي */}
            <a href={`mailto:${clubEmail}`} title="Club Email">
              <i className="fas fa-envelope"></i>
            </a>
            <a href="tel:0662373488">
              <i className="fas fa-phone"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 MoQawill Business Club. All rights reserved.</p>

        {/* ❤️ Developer Credit - التواصل معكِ كمطورة */}
        <div className="developer-credit">
          <span>Developed with ❤️ by</span>
          <a href={`mailto:${developerEmail}`} className="developer-link">
            <i className="fas fa-code dev-icon"></i>
            <span className="dev-name">Khadidja Mechara</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;