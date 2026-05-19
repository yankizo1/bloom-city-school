import logo from "../assets/logo.jpg";

import bloom1 from "../assets/bloom1.jpg";
import bloom2 from "../assets/bloom2.jpg";
import bloom3 from "../assets/bloom3.jpg";
import bloom4 from "../assets/bloom4.jpg";
import bloom5 from "../assets/bloom5.jpg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>

      {/* HERO SECTION */}

      <section className="hero">

        <div className="hero-overlay">

          <img
            src={logo}
            alt="Bloom City Logo"
            className="hero-logo"
          />

          <h1>
            Raising Future Leaders Through Excellence
          </h1>

          <p>
            Bloom City School combines academics,
            technology, creativity, discipline,
            and moral excellence to prepare children
            for the future.
          </p>
           <Link to="/admissions">

  <button>
    Apply For Admission
  </button>

</Link>

        </div>

      </section>


      {/* ABOUT */}

      <section className="section">

        <h2>About Bloom City School</h2>

        <p>
          Bloom City School is committed to building
          confident, intelligent, disciplined,
          and creative young leaders through
          quality education and practical learning.
        </p>

      </section>


      {/* FEATURES */}

      <section className="section features">

        <h2>Why Choose Bloom City?</h2>

        <div className="feature-cards">

          <div className="feature-card">

            <h3>Digital Learning</h3>

            <p>
              Students are exposed to practical
              computer and technology-based learning.
            </p>

          </div>


          <div className="feature-card">

            <h3>Creative Arts</h3>

            <p>
              We encourage creativity through ballet,
              dance, arts, and extracurricular activities.
            </p>

          </div>


          <div className="feature-card">

            <h3>Discipline & Fitness</h3>

            <p>
              Martial arts and physical activities
              help build confidence and discipline.
            </p>

          </div>

        </div>

      </section>


      {/* GALLERY */}

      <section className="section">

        <h2>School Activities</h2>

        <div className="gallery">

          <img src={bloom1} alt="Bloom City" />
          <img src={bloom2} alt="Bloom City" />
          <img src={bloom3} alt="Bloom City" />
          <img src={bloom4} alt="Bloom City" />
          <img src={bloom5} alt="Bloom City" />

        </div>

      </section>


      {/* ADMISSION */}

      <section className="admission">

        <h2>Admissions Ongoing</h2>

        <p>
          Give your child a strong educational
          foundation in a nurturing and inspiring
          environment.
        </p>

        <Link to="/contact">

        <button>
         Enroll Today
         </button>

         </Link>
      </section>


      {/* FOOTER */}

      <footer className="footer">

        <h3>Bloom City School</h3>

        <p>A City Set on the Hill</p>

        <p>Phone: +234 703 373 3763</p>

        <p>Email: info@bloomcityschool.com</p>

      </footer>

    </div>
  );
}

export default Home;