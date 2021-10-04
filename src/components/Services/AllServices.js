import React, { useEffect, useState } from "react";
import Card from "../UI/services/Card";
import styles from "./AllServices.module.css";
import RowServices from "./components/RowServices";
import useToken from "../useToken/useToken";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Services = (props) => {
  const arrayBufferToBase64 = (buffer) => {
    let base64ToString = Buffer.from(buffer, "base64").toString();
    return base64ToString;
  };

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [service, setService] = useState([]);
  // const [deleted, setDeleted] = useState(0);

  useEffect(() => {
    const fetchServices = () => {
      try {
        fetch("https://pamira-clinic.herokuapp.com/api/service/pamira/")
          .then((res) => res.json())
          .then((data) => {
            setService(data);
            console.log("data");
            console.log(data);
          });
      } catch (error) {
        console.log(error);
        setIsLoading(true);
        setError(null);
      }
    };
    fetchServices();
    console.log("service");
    console.log(service);
  }, []);

  //long services
  const createContent = () => {
    if (error) {
      return <p>{error}</p>;
    }

    if (isLoading) {
      return <p>Loading...</p>;
    }
    if (service.length > 0 && error === null) {
      return service.map((item) => {
        var base64Flag = "data:image/jpeg;base64";
        var imageStr = arrayBufferToBase64(item.serviceImage.data.data);
        var imgService = base64Flag + imageStr;

        return (
          <div key={item._id}>
            <Card
              id={item._id}
              img={imgService}
              title={item.serviceName}
              description={item.serviceDescription}
              shortDes={item.serviceShortDes}
              titleButton="View Details"
              // deleted={setDeleted}
            />
          </div>
        );
      });
    } else {
      return <p>Found no Data</p>;
    }
  };

  const { token } = useToken();
  if (token && token.length > 1) {
    return (
      <div className={styles.service}>
        <div className={styles.addService}>
          <Link to="/dashboard">
            <Button style={{ backgroundColor: "green" }}>Add Service</Button>
          </Link>
        </div>
        <h2 className={styles.title}>Our Services</h2>
        <RowServices />
        <div className={styles.imgCard}>{createContent()}</div>
      </div>
    );
  } else {
    return (
      <div className={styles.service}>
        <h2 className={styles.title}>خدمات </h2>
        <RowServices />
        <div className={styles.imgCard}>{createContent()}</div>
      </div>
    );
  }
};

export default Services;
