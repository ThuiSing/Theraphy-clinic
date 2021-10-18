import React from "react";
import img2 from "../../Images/aboutChoose.png";

const ChooseUs = () => {
  return (
    <div>
      <div className=" flex flex-col md:flex-row items-center bg-blue">
        <div className="md:w-1/2 ">
          <img src={img2} alt="" />
        </div>
        <div className="md:w-1/2 px-2 md:px-0 text-center md:text-left text-white py-3">
          <h3 className="text-3xl md:text-4xl font-semibold ">Why Choose Us</h3>
          <p className="mt-4 text-md md:text-xl">
            We Proudly give quality, thorough chiropractic to the group and the
            encompassing regions.
          </p>
          <div className="flex flex-col md:flex-row gap-y-5 md:gap-y-0 mt-6">
            <div className="text-center">
              <h2 className="text-5xl font-bold">25K</h2>
              <h4 className="text-xl">Happy Customars</h4>
            </div>

            <div className="text-center ml-4">
              <h2 className="text-5xl font-bold">7</h2>
              <h4 className="text-xl">Years Experience</h4>
            </div>

            <div className="text-center ml-4">
              <h2 className="text-5xl font-bold">99.9%</h2>
              <h4 className="text-xl">Satisfaction</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
