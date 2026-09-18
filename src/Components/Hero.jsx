import { Link } from "react-router-dom";
import heroImage from "../assets/hero.jpg";

function Hero() {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <h1>Discover Movies</h1>
      <p>
        Explore and discover your favorite movies and shows from around the world.
      </p>
      <Link to="/movies">
        <button>Explore Now</button>
      </Link>
    </section>
  );
}

export default Hero;
