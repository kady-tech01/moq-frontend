// src/App.jsx
import "./App.css";
import AppRouter from "./router/AppRouter";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Toggle from "./components/Toggle";
import { useState, useEffect } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(true); // تبدأ مفتوحة على PC

  // التحقق من حجم الشاشة عند التحميل
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsOpen(false); // على الموبايل تبدأ مغلقة
        document.body.classList.add("sidebar-hidden");
      } else {
        setIsOpen(true); // على سطح المكتب تبدأ مفتوحة
        document.body.classList.remove("sidebar-hidden");
      }
    };

    handleResize(); // تنفيذ مرة واحدة عند التحميل
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="app-container">
      {/* Background shapes */}
      <div className="background-shapes">
        <div className="shape shape-circle"></div>
        <div className="shape shape-square"></div>
        <div className="shape shape-triangle"></div>
        <div className="shape shape-circle-2"></div>
        <div className="shape shape-hexagon"></div>
        <div className="shape shape-diamond"></div>
      </div>

      {/* Layout wrapper */}
      <div className="app-layout">
        {/* Sidebar */}
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

        {/* Main content */}
        <div className="main-content">
          <Toggle isOpen={isOpen} setIsOpen={setIsOpen} />
          <AppRouter />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;