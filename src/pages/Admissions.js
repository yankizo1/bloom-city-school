import React from "react";

function Admissions() {
  return (
    <div className="page section">
      <div className="section-title">
        <h3>Admissions</h3>
        <p>
          Bloom City School welcomes new families every academic year. 
          We provide a warm, safe, and stimulating learning environment 
          for young children to grow and thrive.
        </p>
      </div>

      <div className="admissions-container">

        <div className="admission-info">
          <h4>Admission Requirements</h4>

          <ul>
            <li>Completed admission form</li>
            <li>Child's birth certificate</li>
            <li>Two recent passport photographs</li>
            <li>Parent or guardian contact information</li>
          </ul>

          <p>
            Our admissions team will contact you once your application has been
            reviewed.
          </p>
        </div>


        <div className="form-wrapper">
          <form className="school-form">

            <input type="text" placeholder="Parent / Guardian Name" required />

            <input type="text" placeholder="Child's Name" required />

            <input type="number" placeholder="Child's Age" required />

            <select required>
              <option>Select Class</option>
              <option>Creche</option>
              <option>Nursery 1</option>
              <option>Nursery 2</option>
            </select>

            <input type="text" placeholder="Phone Number" required />

            <input type="email" placeholder="Email Address" required />

            <textarea placeholder="Additional Information"></textarea>

            <button type="submit" className="btn-primary full-btn">
              📝 Submit Application
            </button>

          </form>
        </div>

      </div>
    </div>
  );
}

export default Admissions;