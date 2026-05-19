function About() {
  return (

    <div>

      <section className="section">

        <h2>About Bloom City School</h2>

        <p>
          Bloom City School is committed to providing
          quality education that nurtures academic
          excellence, creativity, discipline,
          leadership, and moral values.
        </p>

        <br />

        <p>
          We believe every child possesses unique
          potential, and our mission is to help
          students discover and maximize their gifts
          through modern learning methods and
          practical experiences.
        </p>

      </section>


      {/* MISSION */}

      <section className="section features">

        <h2>Our Mission</h2>

        <div className="feature-card">

          <p>
            To raise confident, disciplined,
            innovative, and morally sound future
            leaders through quality education and
            holistic development.
          </p>

        </div>

      </section>


      {/* VISION */}

      <section className="section">

        <h2>Our Vision</h2>

        <div className="feature-card">

          <p>
            To become one of the leading schools
            recognized for excellence in academics,
            creativity, technology, and character
            development.
          </p>

        </div>

      </section>


      {/* VALUES */}

      <section className="section features">

        <h2>Our Core Values</h2>

        <div className="feature-cards">

          <div className="feature-card">
            <h3>Excellence</h3>
            <p>
              We pursue high standards in learning
              and character.
            </p>
          </div>

          <div className="feature-card">
            <h3>Discipline</h3>
            <p>
              We instill responsibility, respect,
              and self-control.
            </p>
          </div>

          <div className="feature-card">
            <h3>Innovation</h3>
            <p>
              We encourage creativity and modern
              learning approaches.
            </p>
          </div>

        </div>

      </section>

    </div>
  );
}

export default About;