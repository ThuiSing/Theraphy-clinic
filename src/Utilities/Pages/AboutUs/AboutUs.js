import React from "react";
import img1 from "../../Images/about.jpg";
import img2 from "../../Images/aboutChoose.png";

const AboutUs = () => {
  return (
    <div className="min-h-screen py-16 bg-secondary">
      <div className="container mx-auto ">
        <div className="flex justify-between  py-10">
          <div className=" w-1/3 flex justify-center">
            <img src={img1} alt="" />
          </div>
          <div className="w-2/3 py-4">
            <h2 className="text-4xl font-bold text-primary">
              About Our Clinic
            </h2>
            <p className="md:w-2/3 mt-4 text-secondary">
              The Physical Therapy Clinic is a modern family general practice
              based in the heart of the Riverland region of South Australia. We
              are adjacent to the Riverland General Hospital which provides a
              comprehensive range of medical, surgical, obstetric, radiological,
              and laboratory services. The Berri Medical Clinic is an AGPAL
              accredited General Practice that has been providing quality
              medical care since 1980. Onsite we now have 10 doctors and 8
              nurses offering a comprehensive range of general practice services
              including hospital inpatient care and obstetrics.
            </p>

            <div className="mt-6">
              <h2 className="text-4xl font-bold text-primary">Our History</h2>
              <p className="md:w-2/3 mt-4 text-secondary">
                The clinic’s history is a reflection of Riverland's — from
                hippies to households. It was founded as People’s Free Clinic in
                1970 in the basement of the Congregational Church on Guadalupe
                Street across from the UT campus, by a handful of visionary
                volunteer doctors and nurses.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex items-center bg-blue">
        <div className="w-1/2 ">
          <img src={img2} alt="" />
        </div>
        <div className="w-1/2 text-white py-3">
          <h3 className="text-4xl font-semibold ">Why Choose Us</h3>
          <p className="mt-4 text-xl">
            We Proudly give quality, thorough chiropractic to the group and the
            encompassing regions.
          </p>
          <div className="flex mt-6">
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

export default AboutUs;
