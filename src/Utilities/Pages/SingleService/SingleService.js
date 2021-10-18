import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import useTherapy from "../../Hooks/useTherapy";

const SingleService = () => {
  const [therapyServices] = useTherapy();
  const [singleService, setSingleService] = useState({});
  const { id } = useParams();
  useEffect(() => {
    if (therapyServices.length) {
      const matcehdService = therapyServices.find(
        (service) => service.id === parseInt(id)
      );
      setSingleService(matcehdService);
    }
  }, [therapyServices]);
  //   console.log(singleService);

  return (
    <div className="container mx-auto min-h-screen py-12 flex justify-between items-center">
      <div className="w-1/2">
        <h2 className="text-3xl font-semibold">{singleService?.name}</h2>
        <p className="text-secondary my-5">{singleService?.description}</p>
        <Link to="/contact-us">
          <button className="bg-btn px-3 py-3 rounded-full hover:bg-primary hover:text-blue border border-blue-300 transition-all">
            Contact us for treatment
          </button>
        </Link>
      </div>
      <div>
        <img src={singleService?.img} alt="" />
      </div>
    </div>
  );
};

export default SingleService;
