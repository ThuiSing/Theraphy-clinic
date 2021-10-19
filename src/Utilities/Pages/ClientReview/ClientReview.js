import React from "react";
import "./clinetReview.css";

const ClientReview = () => {
  const clientTestomonials = [
    {
      key: 1,
      name: "jhon wick",
      treatment: "Brain Stroke",
      desciption:
        "Everyone I worked with was wonderful, very professional, caring and prompt. My therapist was great, as were all of the aids!",
    },
    {
      key: 2,
      name: "Alexander jaine",
      treatment: "Joint Treatment",
      desciption:
        "I had a really positive experience and my shoulder is totally functional again, without pain! I really enjoyed my therapist and all of the rest of the staff",
    },
  ];
  return (
    <div className="container mx-auto px-3 md:py-0">
      <h2 className="text-2xl md:text-4xl font-semibold text-primary border-b-2 border-blue-300 inline-block pr-2 pb-2 ">
        Patient Testimonials
      </h2>
      <div className="grid md:grid-cols-2 gap-x-10 gap-y-5 md:gap-y-0 mt-8">
        {clientTestomonials.map((client) => (
          <div key={client.key} className="px-3 ">
            <div className="testomonials relative bg-secondary px-6 py-10">
              <h2 className="text-secondary">{client.desciption}</h2>
            </div>
            <div className="mt-6">
              <h5 className="text-md font-medium uppercase">{client.name}</h5>
              <h3 className="text-blue text-sm">{client.treatment}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientReview;
