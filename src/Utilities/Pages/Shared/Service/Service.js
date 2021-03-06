import React from "react";
import { Link } from "react-router-dom";

const Service = ({ therapy }) => {
  const { name, img, id, description } = therapy;
  return (
    <div
      data-aos="fade-up"
      data-aos-anchor-placement="bottom-bottom"
      className="flex flex-col p-3 md:p-0 md:flex-row  justify-between items-center border shadow-sm  "
    >
      <div className="overflow-hidden">
        <img
          className="h-72 transform hover:scale-125 transition duration-500 ease-in-out "
          src={img}
          alt=""
        />
      </div>
      <div className="mt-2 md:mt-0 md:w-2/4 ml-3">
        <h3 className="text-2xl font-semibold text-primary ">{name}</h3>
        <p className="text-secondary py-3">{description.slice(0, 150)}...</p>
        <Link to={`services/${id}`}>
          <button className="bg-secondary py-2 px-3 rounded-full text-primary hover:bg-footer hover:text-white transition-all">
            Know more..
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Service;
