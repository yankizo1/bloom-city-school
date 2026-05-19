function Contact() {
  return (

    <div>

      <section className="section">

        <h2>Contact Bloom City School</h2>

        <p>
          We would love to hear from you.
          Reach out to us for admissions,
          inquiries, and partnership opportunities.
        </p>

      </section>


      {/* CONTACT DETAILS */}

      <section className="section features">

        <div className="feature-cards">

          <div className="feature-card">

            <h3>Address</h3>

            <p>
              Bloom City School,
              [Insert School Address Here]
            </p>

          </div>


          <div className="feature-card">

            <h3>Phone Number</h3>

            <p>
              +234 703 373 3763
            </p>

          </div>


          <div className="feature-card">

            <h3>Email Address</h3>

            <p>
              info@bloomcityschool.com
            </p>

          </div>

        </div>

      </section>


      {/* CONTACT FORM */}

      <section className="section">

        <h2>Send Us a Message</h2>

        <form className="contact-form">

          <input
            type="text"
            placeholder="Your Name"
          />

          <input
            type="email"
            placeholder="Your Email"
          />

          <textarea
            placeholder="Your Message"
            rows="6"
          ></textarea>

          <button>
            Send Message
          </button>

        </form>

      </section>

    </div>
  );
}

export default Contact;