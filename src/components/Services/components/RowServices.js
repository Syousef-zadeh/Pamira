import React, { useEffect, useState } from "react";
import ServicesCard from "../../UI/services/ServicesCard";
import styles from "./RowServices.module.css";

const RowServices = (props) => {
  const arrayBufferToBase64 = (buffer) => {
    let base64ToString = Buffer.from(buffer, "base64").toString();
    return base64ToString;
  };

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [service, setService] = useState([]);


  useEffect(() => {
    const fetchServices = () => {
      try {
        fetch("https://pamira-clinic.herokuapp.com/api/services/")
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setService(data);
          });
      } catch (error) {
        console.log(error);
        setIsLoading(true);
        setError(null);
      }
    };
    fetchServices();
  }, []);

  const createContent = () => {
    if (error) {
      return <p>{error}</p>;
     }

     if (isLoading) {
      return <p>Loading...</p>;
    }

    if(service.length > 0) {
      return(
        service.map((item) => {
          var base64Flag = "data:image/jpeg;base64";
          var imageStr = arrayBufferToBase64(item.serviceImage.data.data);
          var imgService = base64Flag + imageStr;
    
          console.log("data");

          return <ServicesCard

            img={imgService}
            title={item.serviceName}
          />; })
      )
    } else {
      return <p>Found no Data</p>;
    }
  };

  
  return (
    <div className={styles["row-services"]}>
      {createContent()}
    </div>
  );
};
export default RowServices;
