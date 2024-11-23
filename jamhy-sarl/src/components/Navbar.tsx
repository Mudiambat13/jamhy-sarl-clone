import React from "react";
import { NavLink } from "react-router-dom";

const NavBar: React.FC = () => {
  return (
    <nav aria-label="Main Navigation">
      <ul className="nav-list">
        <li>
          <NavLink to="/" exact activeClassName="active-link">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="active-link">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects" activeClassName="active-link">
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeClassName="active-link">
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;