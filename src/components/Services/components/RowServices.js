import React, { useEffect, useState } from "react";
import ServicesCard from "../../UI/services/ServicesCard";
import styles from "./RowServices.module.css";

import imgMeso from "../../../assets/row-service/mesotrherapy.png";
import imgMicro from "../../../assets/row-service/micro-dermi.png";
import imgLaser from "../../../assets/row-service/laser.png";
import imgBeauty from "../../../assets/row-service/beauty.png";

const RowServices = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [service, setService] = useState([]);

  useEffect(() => {
    const fetchServices = () => {

      try {
        fetch("https://pamira-clinic.herokuapp.com/services")
          .then((res) => res.json())
          .then((result) => {
            console.log(result);
            setService(result);
          });
      } catch (error) {
        console.log(error);
        setIsLoading(true);
        setError(null);
      }
    };
    fetchServices();
  }, []);

  let content = <p>Found no Data</p>;
  if (service.length > 0) {
    content = service.map((item => <ServicesCard img={item.serviceImage} title={item.serviceName} />))
  }
  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <div className={styles["row-services"]}>

      {content}
      <ServicesCard img={imgMeso} title="Mesotherapy" />
      <ServicesCard img={imgLaser} title="Laser" />
      <ServicesCard img={imgMicro} title="microdermy" />
      <ServicesCard img={imgBeauty} title="skin care" />
    </div>
  );
};
export default RowServices;
