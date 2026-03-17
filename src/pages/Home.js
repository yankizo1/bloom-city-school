import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <section className="hero">
        <div className="hero-content">
          <p className="hero-small">WELCOME TO</p>
          <h1>Bloom City School</h1>
          <h2>Where Little Minds Bloom</h2>
          <p className="hero-text">
            We provide a safe, caring, and inspiring environment where children
            grow through learning, play, creativity, and confidence-building.
          </p>

          <div className="hero-buttons">
            <Link to="/admissions" className="btn-primary">
              📝 Apply Now
            </Link>
            <Link to="/programs" className="btn-secondary">
              View Programs
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-title">
          <h3>Why Parents Choose Us</h3>
          <p>
            At Bloom City School, every child is valued, guided, and encouraged
            to shine.
          </p>
        </div>

        <div className="card-grid">
          <div className="card">
            <h4>Safe Environment</h4>
            <p>
              A warm, secure, and child-friendly environment for healthy growth.
            </p>
          </div>

          <div className="card">
            <h4>Qualified Teachers</h4>
            <p>
              Caring educators dedicated to early childhood development and
              learning.
            </p>
          </div>

          <div className="card">
            <h4>Learning Through Play</h4>
            <p>
              We combine structured learning with fun and engaging activities.
            </p>
          </div>
        </div>
      </section>

      <section className="section light-section">
        <div className="section-title">
          <h3>Our Classes</h3>
          <p>Programs designed for every stage of your child's early journey.</p>
        </div>

        <div className="card-grid">
          <div className="card">
            <h4>👶 Creche</h4>
            <p>Gentle care and early stimulation for infants and toddlers.</p>
          </div>

          <div className="card">
            <h4>📚 Nursery 1</h4>
            <p>
              A strong start with songs, storytelling, numbers, letters, and
              guided play.
            </p>
          </div>

          <div className="card">
            <h4>🎨 Nursery 2</h4>
            <p>
              Creative and academic preparation for the next stage of learning.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;