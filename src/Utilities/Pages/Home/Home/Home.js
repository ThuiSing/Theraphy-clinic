import React from "react";
import Services from "../../Shared/Services/Services";
import Banner from "../Banner/Banner";

const Home = () => {
  // const [therapyServices, setTherapyServices] = useTherapy();
  return (
    <div>
      <Banner />
      <Services showAll={false} />
    </div>
  );
};

export default Home;
