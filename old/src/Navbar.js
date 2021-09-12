import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>The Ronald Blog</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create">Create New Blog</Link>
        <a href="#">Another</a>
      </div>
    </nav>
  );
};

export default Navbar;
