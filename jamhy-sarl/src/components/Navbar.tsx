import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const NavBar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-header">
        <h1 className="logo">MySite</h1>
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>
      </div>
      <ul className={`nav-list ${menuOpen ? "open" : ""}`}>
        <li>
          <NavLink to="/" exact activeClassName="active-link" onClick={toggleMenu}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="active-link" onClick={toggleMenu}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects" activeClassName="active-link" onClick={toggleMenu}>
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeClassName="active-link" onClick={toggleMenu}>
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;