import React from "react";
import Advantage from "../../Advantage/Advantage";
import ChooseUs from "../../ChooseUS/ChooseUs";
import Doctors from "../../Doctors/Doctors";
import Services from "../../Shared/Services/Services";
import Banner from "../Banner/Banner";

const Home = () => {
  // const [therapyServices, setTherapyServices] = useTherapy();
  return (
    <div className="md:pb-9">
      <Banner />
      <Services showAll={false} />
      <Advantage />
      <Doctors />
      <ChooseUs />
    </div>
  );
};

export default Home;
