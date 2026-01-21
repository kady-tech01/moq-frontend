import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-top">
        <div className="logo-placeholder">LOGO</div>
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
          <i className="fas fa-bullhorn"></i> Announces
        </NavLink>
        <NavLink to="/achievements" className="page-link">
          <i className="fas fa-trophy"></i> Achievements
        </NavLink>
        <NavLink to="/activities" className="page-link">
          <i className="fas fa-running"></i> Activities
        </NavLink>
        <NavLink to="/news" className="page-link">
          <i className="fas fa-newspaper"></i> News
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