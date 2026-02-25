import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./index.css"; 
import "@fortawesome/fontawesome-free/css/all.min.css";
// 1. استيراد تابع الحقن الخاص بـ Vercel Analytics
import { inject } from '@vercel/analytics';

// 2. تفعيل التتبع (يفضل وضعه قبل الـ Render)
inject();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);