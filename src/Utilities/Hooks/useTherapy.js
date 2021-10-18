import { useEffect, useState } from "react";

const useTherapy = () => {
  const [therapyServices, setTherapyServices] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/fakeServices.json");
      const data = await res.json();
      setTherapyServices(data);
    };
    fetchData();
  }, []);
  return [therapyServices, setTherapyServices];
};

export default useTherapy;
