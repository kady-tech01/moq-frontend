import "./App.css";
import AppRouter from "./router/AppRouter";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Toggle from "./components/Toggle";

function App() {
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

      {/* Sidebar and toggle */}
      <Sidebar />
      <Toggle />

      {/* Main content */}
      <div className="page-container">
        <AppRouter />
        <Footer />
      </div>
    </div>
  );
}

export default App;
