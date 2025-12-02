import { Routes, Route } from "react-router-dom";

// Import all pages
import Home from "../pages/Home";
import About from "../pages/About";
import Departements from "../pages/Departements";
import Achievements from "../pages/Achievements";
import Sponsors from "../pages/Sponsors";
import Activities from "../pages/Activities";
import News from "../pages/News";
import Events from "../pages/Events";
import Announces from "../pages/Announces";
import ESM from "../pages/ESM";


function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Departements" element={<Departements />} />
      <Route path="/Sponsors" element={<Sponsors />} />
      <Route path="/Achievements" element={<Achievements />} />
      <Route path="/Activities" element={<Activities />} />
      <Route path="/News" element={<News />} />
      <Route path="/Events" element={<Events />} />
      <Route path="/Annouces" element={<Announces />} />
      <Route path="/Esm" element={<ESM />} />
    </Routes>
  );
}

export default AppRouter;
