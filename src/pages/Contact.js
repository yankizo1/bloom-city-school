import React from "react";

function Contact() {
  return (
    <div className="page section">
      <div className="section-title">
        <h3>Contact Us</h3>
        <p>
          We would love to hear from you. Reach out to Bloom City School for
          enquiries, admissions, or to schedule a visit.
        </p>
      </div>

      <div className="contact-grid">
        <div className="card">
          <h4>School Address</h4>
          <p>Bloom City School, Your School Address Here</p>
        </div>

        <div className="card">
          <h4>Phone Number</h4>
          <p>+234 XXX XXX XXXX</p>
        </div>

        <div className="card">
          <h4>Email Address</h4>
          <p>info@bloomcityschool.com</p>
        </div>
      </div>

      <div className="form-wrapper" style={{ marginTop: "40px" }}>
        <form className="school-form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email Address" />
          <input type="text" placeholder="Subject" />
          <textarea placeholder="Your Message"></textarea>

          <button type="button" className="btn-primary full-btn">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;