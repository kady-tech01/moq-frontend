import { Link } from "react-router-dom";
import "./Sidebar.css"; // optional if you want custom styles

function Sidebar() {
  return (
    <aside className="sidebar" id="sidebar">
      <div className="sidebar-header">
        <h2>Club</h2>
      </div>

      <ul className="sidebar-menu">
        <li>
          <Link to="/" className="sidebar-link">
            <span>Home</span>
          </Link>
        </li>

        <li>
          <Link to="/about" className="sidebar-link">
            <span>About</span>
          </Link>
        </li>

        <li>
          <Link to="/departements" className="sidebar-link">
            <span>Departments</span>
          </Link>
        </li>

        <li>
          <Link to="/activities" className="sidebar-link">
            <span>Activities</span>
          </Link>
        </li>

        <li>
          <Link to="/achievements" className="sidebar-link">
            <span>Achievements</span>
          </Link>
        </li>

        <li>
          <Link to="/sponsors" className="sidebar-link">
            <span>Sponsors</span>
          </Link>
        </li>

        <li>
          <Link to="/news" className="sidebar-link">
            <span>News</span>
          </Link>
        </li>

        <li>
          <Link to="/events" className="sidebar-link">
            <span>Events</span>
          </Link>
        </li>

        <li>
          <Link to="/announces" className="sidebar-link">
            <span>Announces</span>
          </Link>
        </li>

        <li>
          <Link to="/esm" className="sidebar-link">
            <span>ESM</span>
          </Link>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
