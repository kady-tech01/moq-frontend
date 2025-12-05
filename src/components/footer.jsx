import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = ({ developerName, developerEmail }) => {
  return (
    <footer className="footer">
      <div className="footer-content">

        {/* Section 1 – club description */}
        <div className="footer-section">
          <h4 id="clubName">MoQawill</h4>
          <p>
            Empowering the next generation of business leaders through
            innovation, collaboration, and excellence.
          </p>
        </div>

        {/* Section 2 – internal links */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/events">Events</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Section 3 – external social links */}
        <div className="footer-section">
          <h4>Connect With Us</h4>
          <div className="social-links">
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noreferrer">
              <i className="fab fa-tiktok"></i>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a id="developerContact" href={`mailto:${developerEmail}`}>
              <i className="fas fa-envelope"></i>
            </a>
            <a href="tel:+1234567890">
              <i className="fas fa-phone"></i>
            </a>
          </div>
        </div>
      </div>

      {/* footer bottom */}
      <div className="footer-bottom">
        <p>© 2025 MoQawill Business Club. All rights reserved.</p>

        <p className="developer-credit">
          Developed by{" "}
          <a id="developerEmail" href={`mailto:${developerEmail}`}>
            {developerName}
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
