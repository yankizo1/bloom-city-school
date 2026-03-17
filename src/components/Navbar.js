import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">
      <div className="brand">🌸 Bloom City School</div>

      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/programs">Programs</Link>
        <Link to="/admissions">Admissions</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}

export default Navbar;