import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Sidebar.css";
// استبدل logo.png بالمسار الفعلي لصورتك
import logo from "../assets/styles/logo.webp"; 

const Sidebar = ({ isOpen, setIsOpen }) => {
  const navigate = useNavigate();

  // دالة لإغلاق القائمة بعد النقر على رابط (للموبايل)
  const handleLinkClick = (path) => {
    // التحقق من حجم الشاشة (إذا كان موبايل)
    if (window.innerWidth <= 768) {
      setIsOpen(false); // إغلاق القائمة
      document.body.classList.add("sidebar-hidden"); // إضافة الكلاس للإغلاق
    }
    navigate(path); // التنقل إلى الصفحة المطلوبة
  };

  return (
    <aside className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <div className="sidebar-top">
        <div className="logo-placeholder">
          <img src={logo} alt="MoQawill Logo" className="sidebar-logo" />
        </div>
        <h2 className="club-name">MoQawill</h2>
      </div>

      <nav className="page-links">
        <div className="page-link" onClick={() => handleLinkClick("/")}>
          <i className="fas fa-home"></i> Home
        </div>
        <div className="page-link" onClick={() => handleLinkClick("/about")}>
          <i className="fas fa-info-circle"></i> About
        </div>
        <div className="page-link" onClick={() => handleLinkClick("/announces")}>
          <i className="fas fa-bullhorn"></i> Announcements 
        </div>
        
        <div className="page-link" onClick={() => handleLinkClick("/activities")}>
          <i className="fas fa-running"></i> Activities
        </div>
        <div className="page-link" onClick={() => handleLinkClick("/events")}>
          <i className="fas fa-calendar-alt"></i> Events
        </div>
        <div className="page-link" onClick={() => handleLinkClick("/departements")}>
          <i className="fas fa-sitemap"></i> Departments
        </div>
        <div className="page-link" onClick={() => handleLinkClick("/sponsors")}>
          <i className="fas fa-handshake"></i> Sponsors
        </div>
        <div className="page-link" onClick={() => handleLinkClick("/esm")}>
          <i className="fas fa-star"></i> ESM
        </div>
        <div className="page-link" onClick={() => handleLinkClick("/feedback")}>
          <i className="fas fa-comment-dots"></i> Feedback
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;