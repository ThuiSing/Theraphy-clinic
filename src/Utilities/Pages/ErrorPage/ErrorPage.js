import React from "react";
import { Link } from "react-router-dom";
import errorImg from "../../Images/err.png";
import "./errorPage.css";

const ErrorPage = () => {
  return (
    <div className="min-h-screen py-16">
      <div className="flex flex-col justify-center items-center">
        <div>
          <img className="md:w-1/3 mx-auto" src={errorImg} alt="404Image" />
        </div>
        <div className="text-center">
          <h3 className="text-2xl md:text-4xl text-secondary font-semibold">
            Opps! Sorry, Page Not Found
          </h3>
          <Link to="/">
            <button className="bg-btn btn-hover mt-5 px-3 py-3 font-medium rounded transition-all">
              Go Back Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
