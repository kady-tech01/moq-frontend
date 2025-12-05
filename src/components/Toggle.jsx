import { useState } from "react";
import "./Toggle.css"; // if you have CSS

function Toggle() {
  const [isOpen, setIsOpen] = useState(true);

  // Handle toggle click
  const handleToggle = () => {
    setIsOpen(!isOpen);

    // Toggle CSS class on <body>
    document.body.classList.toggle("sidebar-hidden");
  };

  return (
    <button id="sidebarToggle" className="toggle-btn" onClick={handleToggle}>
      <i className={isOpen ? "fas fa-bars" : "fas fa-chevron-right"}></i>
    </button>
  );
}

export default Toggle;
