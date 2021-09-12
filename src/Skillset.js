import c_logo from "./images/c.png";
import java_logo from "./images/java.svg";
import react_logo from "./images/react.png";
import android_logo from "./images/android.png";
import { auto } from "async";
const Skillset = () => {
  return (
    <div>
      <div className="container pb-5">
        <div className="row"></div>

        <div className="row">
          <div className="col-md 6">
            <h1>Skillset</h1>
            <div className="skillsetLogo" data-aos="fade-left">
              <img style={{ paddingRight: "2em" }} src={c_logo}></img>
              <img
                style={{ height: "110px", width: "auto" }}
                src={java_logo}
              ></img>
              <img
                style={{ height: "170px", width: "auto" }}
                src={android_logo}
              ></img>
              <img
                style={{ height: "100px", width: "auto" }}
                src={react_logo}
              ></img>
            </div>
          </div>

          <div className="col-md 6">
            <h1>Projects</h1>
            <div className="skillsetLogo" data-aos="fade-left">
              <ul>
                <li>Project 1</li>
                <li>Project 2</li>
                <li>Project 3</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skillset;
