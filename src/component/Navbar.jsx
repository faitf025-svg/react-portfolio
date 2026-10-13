

import { NavLink } from "react-router-dom";
import Timer from "./Timer";

function Navbar({ theme, toggleTheme }) {
  return (
    <nav className="navbar">
      <h2>My Portfolio</h2>

      <div className="nav-links">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <Timer />
        <button className="theme-btn" onClick={toggleTheme}>
          {theme === "light" ? "🌙" : "☀️"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;