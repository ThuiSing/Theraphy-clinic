import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import AboutUs from "./Utilities/Pages/AboutUs/AboutUs";
import Home from "./Utilities/Pages/Home/Home/Home";
import Footer from "./Utilities/Pages/Shared/Footer/Footer";
import Header from "./Utilities/Pages/Shared/Header/Header";
import Services from "./Utilities/Pages/Shared/Services/Services";
import SingleService from "./Utilities/Pages/SingleService/SingleService";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route exact path="/services">
            <Services showAll={true} />
          </Route>
          <Route path="/services/:id">
            <SingleService />
          </Route>
          <Route path="/about-us">
            <AboutUs />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
