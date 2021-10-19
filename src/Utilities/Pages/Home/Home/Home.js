import React from "react";
import Advantage from "../../Advantage/Advantage";
import ChooseUs from "../../ChooseUS/ChooseUs";
import ClientReview from "../../ClientReview/ClientReview";
import Doctors from "../../Doctors/Doctors";
import Services from "../../Shared/Services/Services";
import Banner from "../Banner/Banner";

const Home = () => {
  // const [therapyServices, setTherapyServices] = useTherapy();
  return (
    <div className="md:pb-9 min-h-screen">
      <Banner />
      <Services showAll={false} />
      <Advantage />
      <Doctors />
      <ClientReview />
      <ChooseUs />
    </div>
  );
};

export default Home;
