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
        <NavLink to="/" className="page-link">Home</NavLink>
        <NavLink to="/about" className="page-link">About</NavLink>
        <NavLink to="/departements" className="page-link">Departments</NavLink>
        <NavLink to="/activities" className="page-link">Activities</NavLink>
        <NavLink to="/achievements" className="page-link">Achievements</NavLink>
        <NavLink to="/sponsors" className="page-link">Sponsors</NavLink>
        <NavLink to="/news" className="page-link">News</NavLink>
        <NavLink to="/events" className="page-link">Events</NavLink>
        <NavLink to="/announces" className="page-link">Announces</NavLink>
        <NavLink to="/esm" className="page-link">ESM</NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
