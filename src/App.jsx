import { useState } from "react";
import AppRouter from "./router/AppRouter";
import "./App.css";
import Sidebar from "./components/Sidebar";
import { Fragment } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app-container">
      <Sidebar /> {/* ← SIDEBAR IS HERE */}
      <div className="page-container">
        <AppRouter /> {/* ← pages render here */}
      </div>
    </div>
  );
}

export default App;
