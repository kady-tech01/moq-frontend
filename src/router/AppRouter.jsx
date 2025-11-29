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
      <Route path="/about" element={<About />} />
      <Route path="/Departements" element={<Departements />} />
      <Route path="/sponsors" element={<Sponsors />} />
      <Route path="/achievements" element={<Achievements />} />
      <Route path="/activities" element={<Activities />} />
      <Route path="/news" element={<News />} />
      <Route path="/events" element={<Events />} />
      <Route path="/Annouces" element={<Announces />} />
      <Route path="/esm" element={<ESM />} />
    </Routes>
  );
}

export default AppRouter;
