import React from "react";
import Doctor from "../Doctor/Doctor";
import "./doctors.css";

const Doctors = () => {
  const doctorsData = [
    {
      id: 1,
      name: "Kristina Castle",
      expertIn: "Physical Therapist",
      description:
        "Kristina opened Physio Physical Therapy in 2006 with the intention of creating a practice that would combine the best of traditional physical therapy with the principles and techniques of osteopathic manual therapy.",
      img: "https://i.ibb.co/jbMTVnz/doctor2.png",
    },
    {
      id: 2,
      name: "Antonio Castle",
      expertIn: "Message Message",
      description:
        "Antonio opened Message Therapy in 2004 with the intention of creating a practice that would combine the best of traditional physical therapy with the principles and techniques of osteopathic manual therapy.",
      img: "https://i.ibb.co/hVhxWfw/doctor1.png",
    },
    {
      id: 3,
      name: "Helen Wilmore",
      expertIn: "Mental Therapist",
      description:
        "Helen Wilmore opened Mental Therapy in 2000 with the intention of creating a practice that would combine the best of traditional physical therapy with the principles and techniques of osteopathic manual therapy.",
      img: "https://i.ibb.co/PrsPJJ8/doctor3.png",
    },
    {
      id: 4,
      name: "Dani Cristian",
      expertIn: "Chiropractor",
      description:
        "Dani Cristian opened Chiropractor in 2009 with the intention of creating a practice that would combine the best of traditional physical therapy with the principles and techniques of osteopathic manual therapy.",
      img: "https://i.ibb.co/zRDZ2tG/doctor4.jpg",
    },
  ];
  return (
    <div className="container mx-auto px-3 md:px-0 mb-24">
      <h2 className="text-2xl md:text-4xl font-semibold text-primary border-b-2 border-blue-300 inline-block pr-2 pb-2">
        Our Doctors
      </h2>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-5 mt-5">
        {doctorsData.map((doctor) => (
          <Doctor key={doctor.id} doctor={doctor} />
        ))}
      </div>
    </div>
  );
};

export default Doctors;
