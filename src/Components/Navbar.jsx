import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>🎬 MovieExplorer</h2>

      <div className="nav-links">
        <Link to="/?home=true">Home</Link>
        <Link to="/movies">Movies</Link>
      </div>
    </nav>
  );
}

export default Navbar;