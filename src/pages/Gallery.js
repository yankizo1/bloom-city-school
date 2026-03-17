import React from "react";

function Gallery() {
  return (
    <div className="page section">
      <div className="section-title">
        <h3>School Gallery</h3>
        <p>
          Take a look at the joyful learning environment, classroom activities,
          and special moments at Bloom City School.
        </p>
      </div>

      <div className="gallery-grid">
        <div className="gallery-box">Classroom Learning</div>
        <div className="gallery-box">Creative Activities</div>
        <div className="gallery-box">Reading Time</div>
        <div className="gallery-box">Play Time</div>
        <div className="gallery-box">Outdoor Fun</div>
        <div className="gallery-box">School Events</div>
      </div>
    </div>
  );
}

export default Gallery;