import React, { useEffect, useState } from "react";
import fetcher from "../api";

const Services = () => {
  const [services, setServices] = useState([]);
  console.log(services);

  useEffect(() => {
    // axios
    // .get("http://localhost:5000/service")
    // .then((res) => setServices(res.data));

    // This is how an iiv
    (async () => {
      const res = await fetcher.get("http://localhost:5000/service");
      setServices(res.data);
    })();
  }, []);

  return (
    <div>
      <h1>This is services</h1>
      <h1>This is services</h1>
      <h1>This is services</h1>
      <h1>This is services</h1>
      <h1>This is services</h1>
      <h1>This is services</h1>
    </div>
  );
};

export default Services;
