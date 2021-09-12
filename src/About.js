import potrait from "./images/landscape.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="container pb-5">
      <div className="row ">
        <div className="col-md 6">
          <div className="aboutImage">
            <img src={potrait} alt="Ronald"></img>
            <p>Shirogane Blue Pond @ Biei, Hokkaido</p>
          </div>
        </div>

        <div className="col-md 6">
          <div className="aboutBody" data-aos="fade-left">
            <h1>
              Hello, I'm <span style={{ color: "red" }}>Ronald</span> ! 👋
            </h1>
            <p>
              I'm a computer science undergraduate specializing in{" "}
              <span style={{ color: "blue" }}>Software Engineering</span> at
              Universiti Malaysia Pahang. <br></br>Please don't hesitate to
              contact me for any enquiries 😉
            </p>
            <button className="btn btn-success">
              <Link
                to={{
                  pathname: "https://mailto:rlsw35@gmail.com",
                }}
                target="_blank"
              >
                Email
              </Link>
            </button>
            <button className="btn btn-primary">
              <Link
                to={{ pathname: "https://www.facebook.com/rlsw99" }}
                target="_blank"
              >
                <a>Facebook</a>
              </Link>
            </button>

            <button className="btn btn-dark">
              <Link
                to={{
                  pathname: "https://github.com/rlsw35",
                }}
                target="_blank"
              >
                <a>Github</a>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
