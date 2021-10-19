import React from "react";

const Doctor = ({ doctor }) => {
  return (
    <div className="p-4 border bg-white shadow-md doctors-card relative overflow-hidden ">
      <div>
        <img className="mx-auto" src={doctor.img} alt="" />
      </div>
      <div className="py-3">
        <h2 className="text-2xl font-semibold">{doctor.name}</h2>
        <h3 className="font-medium py-1">{doctor.expertIn}</h3>
        <p className="text-secondary text-sm">
          {doctor.description.slice(0, 100)}
        </p>
      </div>
      <div className="w-full social-doctors py-2 bg-white md:bg-blueOpacityhalf md:absolute left-0 ">
        <div className="flex justify-around items-center">
          <a
            href="https://www.facebook.com/"
            className="text-3xl text-blue sc-icons"
          >
            <i className="fab fa-facebook"></i>
          </a>
          <a
            href="https://twitter.com/"
            className="text-3xl text-blue sc-icons"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://instagram.com/"
            className="text-3xl text-blue sc-icons"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Doctor;
