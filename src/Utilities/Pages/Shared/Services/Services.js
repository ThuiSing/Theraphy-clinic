import React from "react";
import { Link } from "react-router-dom";
import useTherapy from "../../../Hooks/useTherapy";
import Service from "../Service/Service";

const Services = ({ showAll }) => {
  const [therapyServices] = useTherapy();
  const showTherapy = showAll ? therapyServices : therapyServices.slice(0, 3);
  return (
    <div
      className={
        showAll
          ? "py-24 container mx-auto min-h-screen"
          : "py-16 container mx-auto"
      }
    >
      <div
        className={
          showAll ? "text-center" : "flex justify-between items-center "
        }
      >
        <h2 className="text-4xl font-semibold text-primary border-b-2 border-blue-300 inline-block pr-2 ">
          {showAll ? "Our All Services" : "Our services"}
        </h2>
        {showAll || (
          <Link to="/services">
            <button className="flex justify-between items-center mr-3 px-2 py-1 hover:text-blue transition-all ">
              Show all Services
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
            </button>
          </Link>
        )}
      </div>

      <div className="grid lg:grid-cols-2 gap-x-3 gap-y-5 mt-8">
        {showTherapy.map((therapy) => (
          <Service key={therapy.id} therapy={therapy} />
        ))}
      </div>
    </div>
  );
};

export default Services;
