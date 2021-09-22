import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ServiceDetailCard from "../../components/UI/services/ServiceDetail";

const Service = (props) => {
  const params = useParams();
  const [service, setService] = useState();

  const arrayBufferToBase64 = (buffer) => {
    let base64ToString = Buffer.from(buffer, "base64").toString();
    return base64ToString;
  };

  useEffect(() => {
    const fetchServices = () => {
      try {
        fetch(`http://localhost:5000/api/services/details/${params.id}`).then(
          (res) => res.json()
        ).then((data) => {
          setService(data);
        });
      } catch (error) {
        console.log(error);
      }
    };
    fetchServices();
  }, []);


  if (service) {
    var base64Flag = "data:image/jpeg;base64";
    var imageStr = arrayBufferToBase64(service.serviceImage.data.data);
    var imgService = base64Flag + imageStr;
  }
  
  return service ? <ServiceDetailCard title={service.serviceName} image={imgService} /> :<div>Loading....</div>
};
export default Service;
