import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import About from "./About";
import Gallery from "./Gallery";
import GoogleMaps from "./GoogleMaps";
import Skillset from "./Skillset";
import Footer from "./Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <div className="div" style={{ minHeight: "99.5vh" }}>
            <Switch>
              <Route exact path="/">
                <About />
                <Skillset></Skillset>
              </Route>

              <Route path="/contact">
                <GoogleMaps />
              </Route>
            </Switch>
          </div>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
