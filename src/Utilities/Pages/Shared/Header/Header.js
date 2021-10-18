import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [bgActive, setBgActive] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY >= 20) {
      setBgActive(true);
    } else {
      setBgActive(false);
    }
  });
  return (
    <header
      className={
        bgActive
          ? "py-4 bg-white z-20 fixed top-0 shadow-sm transition-all left-0 w-full"
          : "py-4 bg-transparent transition-all z-20 fixed top-0 left-0 w-full"
      }
    >
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">Logo</h2>
        </div>
        <div>
          <NavLink
            to="/"
            exact
            activeStyle={{ backgroundColor: "#4fc4cf" }}
            className="px-3 py-2  rounded"
          >
            Home
          </NavLink>
          <NavLink
            activeStyle={{ backgroundColor: "#4fc4cf" }}
            to="/services"
            className="px-3 py-2  rounded"
          >
            Services
          </NavLink>
          <NavLink
            activeStyle={{ backgroundColor: "#4fc4cf" }}
            to="/about-us"
            className="px-3 py-2  rounded"
          >
            About us
          </NavLink>
          <NavLink
            activeStyle={{ backgroundColor: "#4fc4cf" }}
            to="/contact-us"
            className="px-3 py-2  rounded"
          >
            Contact us
          </NavLink>
        </div>
        <div>
          <button className="bg-btn rounded p-2">Sign in</button>
          <button className="bg-btn rounded p-2 ml-3">Register</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
