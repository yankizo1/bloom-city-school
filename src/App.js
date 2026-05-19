import React from "react";

import {
  Routes,
  Route,
  Link
} from "react-router-dom";

import "./App.css";

import Home from "./pages/Home";
import About from "./pages/About";
import Programs from "./pages/Programs";
import Gallery from "./pages/Gallery";
import Admissions from "./pages/Admissions";
import Contact from "./pages/Contact";

function App() {
  return (

    <div>

      {/* NAVBAR */}

      <nav className="navbar">

        <div className="logo-section">

          <h2>Bloom City School</h2>

          <p>A City Set on the Hill</p>

        </div>


        <ul>

          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/about">About</Link>
          </li>

          <li>
            <Link to="/programs">Programs</Link>
          </li>

          <li>
            <Link to="/gallery">Gallery</Link>
          </li>

          <li>
            <Link to="/admissions">Admissions</Link>
          </li>

          <li>
            <Link to="/contact">Contact</Link>
          </li>

        </ul>

      </nav>

      <a
        href="https://wa.me/+234703373763"
            className="whatsapp-button"
            target="_blank"
             rel="noreferrer"
            >
  WhatsApp Us
</a>


      {/* ROUTES */}

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/programs"
          element={<Programs />}
        />

        <Route
          path="/gallery"
          element={<Gallery />}
        />

        <Route
          path="/admissions"
          element={<Admissions />}
        />

        <Route
  path="/contact"
  element={<Contact />}
/>
        />

      </Routes>

    </div>
  );
}

export default App;