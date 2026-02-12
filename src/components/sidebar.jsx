import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";
// استبدل logo.png بالمسار الفعلي لصورتك
import logo from "../assets/styles/logo.webp"; 

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-top">
        <div className="logo-placeholder">
          {/* تم وضع الصورة هنا مع كلاس مخصص */}
          <img src={logo} alt="MoQawill Logo" className="sidebar-logo" />
        </div>
        <h2 className="club-name">MoQawill</h2>
      </div>

      <nav className="page-links">
        <NavLink to="/" className="page-link">
          <i className="fas fa-home"></i> Home
        </NavLink>
        <NavLink to="/about" className="page-link">
          <i className="fas fa-info-circle"></i> About
        </NavLink>
        <NavLink to="/announces" className="page-link">
          <i className="fas fa-bullhorn"></i> Anouncements 
        </NavLink>
        
        {/* ✅ مخفيين مؤقتاً - نشيل الـ comments وقت ما نحتاجهم 
        <NavLink to="/achievements" className="page-link">
          <i className="fas fa-trophy"></i> Achievements
        </NavLink>
        <NavLink to="/news" className="page-link">
          <i className="fas fa-newspaper"></i> News
        </NavLink>
        */}
        
        <NavLink to="/activities" className="page-link">
          <i className="fas fa-running"></i> Activities
        </NavLink>
        <NavLink to="/events" className="page-link">
          <i className="fas fa-calendar-alt"></i> Events
        </NavLink>
        <NavLink to="/departements" className="page-link">
          <i className="fas fa-sitemap"></i> Departments
        </NavLink>
        <NavLink to="/sponsors" className="page-link">
          <i className="fas fa-handshake"></i> Sponsors
        </NavLink>
        <NavLink to="/esm" className="page-link">
          <i className="fas fa-star"></i> ESM
        </NavLink>
        <NavLink to="/feedback" className="page-link">
          <i className="fas fa-comment-dots"></i> Feedback
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;