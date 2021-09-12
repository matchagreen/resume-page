import logo from "./images/logo.jpg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar-content pb-5">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=ZCOOL+QingKe+HuangYou&display=swap"
        rel="stylesheet"
      />
      <nav className="navbar navbar-dark navbar-expand-md">
        <div className="container">
          <a style={{ fontSize: "30px" }} className="navbar-brand" href="#">
            {/* <img src={logo} alt="Ronald Lim" /> */}
            Ronald Lim
          </a>

          <ul className="navbar-nav ">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact Me
              </Link>
            </li> */}
            <li className="nav-item"></li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
