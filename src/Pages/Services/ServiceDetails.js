import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Service = (props) => {
  const params = useParams();
  const [service, setService] = useState("");

  useEffect(() => {
    const fetchServices = (id) => {
      try {
        fetch(`http://localhost:5000/api/services/details/${params.id}`)
          .then((res) => res.json())
          .then((data) => {
            console.log("data");
            setService(data);
          });
      } catch (error) {
        console.log(error);
      }
    };
    fetchServices();
  }, [params.id]);

  console.log(service);

  return (
    <div>
      <h3>{service.serviceName}</h3>
      <img src={service.serviceImage} alt={props.alt} />
      <div>
        <p>{service.serviceDescription}</p>
      </div>
    </div>
  );
};
export default Service;
