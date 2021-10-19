import React from "react";
import "./advantage.css";
const Advantage = () => {
  const advantagersData = [
    {
      id: 1,
      icon: "fas fa-briefcase-medical",
      heading: "Personalized Treatment",
      desc: "You will receive a full individualized treatment",
    },
    {
      id: 2,
      icon: "fas fa-check",
      heading: "Therapy Goals",
      desc: "Setting goals is the best way to enjoy a successful outcome",
    },
    {
      id: 3,
      icon: "fas fa-building",
      heading: "Comfortable Clinic",
      desc: "Our clinic feels like a comfortable health & fitness center",
    },
    {
      id: 4,
      icon: "fas fa-check",
      heading: "Licensed Therapists",
      desc: "Your treatment will be performed by only licensed therapists",
    },
    {
      id: 5,
      icon: "fas fa-user-graduate",
      heading: "Experience Staff",
      desc: "Our therapists are trained and certified in therapy technique",
    },
    {
      id: 6,
      icon: "fas fa-users",
      heading: "Practitioners Network",
      desc: "We will work closely with all your health practitioners",
    },
  ];
  return (
    <div className="container px-3 md:px-0 mx-auto py-10 mb-16 ">
      <div>
        <h2 className="text-2xl md:text-4xl font-semibold text-primary border-b-2 border-blue-300 inline-block pr-2 pb-2">
          Our Advantages
        </h2>
      </div>
      <div className="grid md:grid-cols-3 mt-8 gap-7">
        {advantagersData.map((data) => (
          <div
            key={data.id}
            data-aos="fade-left"
            className="flex border advantages  justify-center items-center p-6"
          >
            <div className="md:w-1/5 flex justify-center items-center ">
              <span className="border text-blue advatages-icon text-xl px-3 py-4 rounded-full transition duration-300">
                <i className={data.icon}></i>
              </span>
            </div>
            <div className="ml-4">
              <h3 className="text-xl md:text-2xl font-bold">{data.heading}</h3>
              <p className="text-secondary  md:w-3/4 mt-2 ">{data.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Advantage;
