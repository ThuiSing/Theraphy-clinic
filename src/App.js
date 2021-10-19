import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import AuthProvider from "./Utilities/context/AuthProvider";
import AboutUs from "./Utilities/Pages/AboutUs/AboutUs";
import ContactUs from "./Utilities/Pages/ContactUs/ContactUs";
import ErrorPage from "./Utilities/Pages/ErrorPage/ErrorPage";
import Home from "./Utilities/Pages/Home/Home/Home";
import PrivateRoute from "./Utilities/Pages/PrivateRoute/PrivateRoute";
import Register from "./Utilities/Pages/Register/Register";
import Footer from "./Utilities/Pages/Shared/Footer/Footer";
import Header from "./Utilities/Pages/Shared/Header/Header";
import Services from "./Utilities/Pages/Shared/Services/Services";
import SignIn from "./Utilities/Pages/SignIn/SignIn";
import SingleService from "./Utilities/Pages/SingleService/SingleService";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  once: true,
});
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
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/services">
              <Services showAll={true} />
            </Route>
            <PrivateRoute exact path="/services/:id">
              <SingleService />
            </PrivateRoute>
            <PrivateRoute exact path="/about-us">
              <AboutUs />
            </PrivateRoute>
            <PrivateRoute exact path="/contact-us">
              <ContactUs />
            </PrivateRoute>
            <Route exact path="/sign-in">
              <SignIn />
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>
            <Route exact path="*">
              <ErrorPage />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
