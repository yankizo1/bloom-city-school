import bloom1 from "../assets/bloom1.jpg";
import bloom2 from "../assets/bloom2.jpg";
import bloom3 from "../assets/bloom3.jpg";
import bloom4 from "../assets/bloom4.jpg";
import bloom5 from "../assets/bloom5.jpg";

function Gallery() {
  return (

    <div>

      <section className="section">

        <h2>School Gallery</h2>

        <p>
          Explore moments from our classrooms,
          creative arts, ballet sessions,
          martial arts training, and student
          activities at Bloom City School.
        </p>

      </section>


      {/* GALLERY GRID */}

      <section className="section">

        <div className="gallery">

          <img src={bloom1} alt="Bloom City" />

          <img src={bloom2} alt="Bloom City" />

          <img src={bloom3} alt="Bloom City" />

          <img src={bloom4} alt="Bloom City" />

          <img src={bloom5} alt="Bloom City" />

        </div>

      </section>

    </div>
  );
}

export default Gallery;