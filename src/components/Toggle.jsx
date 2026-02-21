import { useState, useEffect } from "react";
import "./Toggle.css";

function Toggle({ isOpen, setIsOpen }) {
  // Handle toggle click
  const handleToggle = () => {
    const newState = !isOpen;
    setIsOpen(newState);
    
    // Toggle CSS class on <body>
    if (newState) {
      document.body.classList.remove("sidebar-hidden");
    } else {
      document.body.classList.add("sidebar-hidden");
    }
  };

  // التأكد من أن القائمة مغلقة في البداية على الموبايل
  useEffect(() => {
    if (window.innerWidth <= 768) {
      setIsOpen(false);
      document.body.classList.add("sidebar-hidden");
    } else {
      setIsOpen(true);
      document.body.classList.remove("sidebar-hidden");
    }
  }, [setIsOpen]);
   
  return (
    <button id="sidebarToggle" className="toggle-btn" onClick={handleToggle}>
      <i className={isOpen ? "fas fa-chevron-left" : "fas fa-bars"}></i>
    </button>
  );
}

export default Toggle;