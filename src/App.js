import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import AuthProvider from "./Utilities/context/AuthProvider";
import AboutUs from "./Utilities/Pages/AboutUs/AboutUs";
import ContactUs from "./Utilities/Pages/ContactUs/ContactUs";
import Home from "./Utilities/Pages/Home/Home/Home";
import PrivateRoute from "./Utilities/Pages/PrivateRoute/PrivateRoute";
import Register from "./Utilities/Pages/Register/Register";
import Footer from "./Utilities/Pages/Shared/Footer/Footer";
import Header from "./Utilities/Pages/Shared/Header/Header";
import Services from "./Utilities/Pages/Shared/Services/Services";
import SignIn from "./Utilities/Pages/SignIn/SignIn";
import SingleService from "./Utilities/Pages/SingleService/SingleService";

function App() {
  return (
    <div className="App">
      <AuthProvider>
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
            <PrivateRoute path="/services/:id">
              <SingleService />
            </PrivateRoute>
            <PrivateRoute path="/about-us">
              <AboutUs />
            </PrivateRoute>
            <PrivateRoute path="/contact-us">
              <ContactUs />
            </PrivateRoute>
            <Route path="/sign-in">
              <SignIn />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
