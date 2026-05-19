function Admissions() {
  return (

    <div>

      <section className="section">

        <h2>Admissions</h2>

        <p>
          Admissions are currently ongoing at
          Bloom City School.
        </p>

        <br />

        <p>
          We welcome pupils into a nurturing,
          disciplined, and technology-driven
          learning environment designed to
          help every child succeed.
        </p>

      </section>


      {/* ADMISSION PROCESS */}

      <section className="section features">

        <h2>Admission Process</h2>

        <div className="feature-cards">

          <div className="feature-card">

            <h3>Step 1</h3>

            <p>
              Obtain the admission form from
              the school or contact the admissions office.
            </p>

          </div>


          <div className="feature-card">

            <h3>Step 2</h3>

            <p>
              Submit completed application
              documents and student information.
            </p>

          </div>


          <div className="feature-card">

            <h3>Step 3</h3>

            <p>
              Attend screening/interview and
              receive admission confirmation.
            </p>

          </div>

        </div>

      </section>


      {/* WHY ENROLL */}

      <section className="section">

        <h2>Why Enroll at Bloom City School?</h2>

        <p>
          Our students benefit from quality
          academics, digital learning,
          extracurricular activities,
          discipline, creativity, and leadership training.
        </p>

      </section>


      {/* CTA */}

      <section className="admission">

        <h2>Enroll Your Child Today</h2>

        <p>
          Join a school committed to raising
          future leaders through excellence.
        </p>

        <button>
          Contact Admissions
        </button>

      </section>

    </div>
  );
}

export default Admissions;