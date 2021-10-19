import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const Header = () => {
  const [bgActive, setBgActive] = useState(false);
  const { user, logOut } = useAuth();
  const [isSideNavigation, setSideNavigation] = useState(false);
  // console.log(user);

  window.addEventListener("scroll", () => {
    if (window.scrollY >= 20) {
      setBgActive(true);
    } else {
      setBgActive(false);
    }
  });

  return (
    <header
      className={` py-4 z-20 md:fixed top-0  transition-all left-0 w-full
      ${bgActive ? "bg-white shadow-sm " : "bg-transparent"}
      `}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">Therapy Clinic </h2>
        </div>
        <span className="lg:hidden">
          {isSideNavigation ? (
            <svg
              onClick={() => setSideNavigation(false)}
              xmlns="http://www.w3.org/2000/svg"
              className="h-9 w-9"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              onClick={() => setSideNavigation(true)}
              xmlns="http://www.w3.org/2000/svg"
              className="h-9 w-9"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </span>
        <div className="lg:w-2/3 lg:flex hidden lg:block  justify-between items-center">
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

          {user.email ? (
            <div className="flex items-center">
              <img
                className="rounded-full"
                width="50"
                src={user.photoURL}
                alt=""
              />
              <h3 className="inline-block mx-3">{user.displayName}</h3>
              <button onClick={logOut} className="bg-btn rounded p-2">
                Sign out
              </button>
            </div>
          ) : (
            <div>
              <Link to="/sign-in">
                <button className="bg-btn rounded p-2">Sign in</button>
              </Link>
              <Link to="/register">
                <button className="bg-btn rounded p-2 ml-3">Register</button>
              </Link>
            </div>
          )}
        </div>
      </div>

      {isSideNavigation && (
        <div className="bg-white mt-5">
          <div className="flex flex-col">
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
          <div className="text-center mt-3">
            {user.email ? (
              <div>
                <div className="flex justify-center items-center">
                  <img
                    className="rounded-full"
                    width="50"
                    src={user.photoURL}
                    alt=""
                  />
                  <h3 className="inline-block mx-3">{user.displayName}</h3>
                </div>
                <button onClick={logOut} className="bg-btn rounded p-2 mt-3">
                  Sign out
                </button>
              </div>
            ) : (
              <div>
                <Link to="/sign-in">
                  <button className="bg-btn rounded p-2">Sign in</button>
                </Link>
                <Link to="/register">
                  <button className="bg-btn rounded p-2 ml-3">Register</button>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
