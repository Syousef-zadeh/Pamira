import React from "react";
import Card from "../UI/services/Card";
import styles from "./AllServices.module.css";
import RowServices from "./components/RowServices";
import useToken from "../useToken/useToken";
import { Link } from "react-router-dom";

import img1 from "../../assets/botox.jpg";
import img2 from "../../assets/Laser.jpeg";
import img3 from "../../assets/filler.jpg";
import { Button } from "react-bootstrap";

const Services = (props) => {
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
        <div className={styles.imgCard}>
          <Card
            img={img1}
            title="Botox"
            description="Botox injections block certain chemical signals from nerves, mostly signals that cause muscles to contract."
            titleButton="View Details"
          />
          <Card
            img={img2}
            title="Laser"
            description="To remove the hair, most patients need 2 to 6 laser treatments."
            titleButton="View Details"
          />
          <Card
            img={img3}
            title="Filler"
            description="Injectable filler is a soft tissue filler injected into the skin at different depths to help fill in facial wrinkles, provide facial volume, and augment facial features: restoring a smoother appearance."
            titleButton="View Details"
          />
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles.service}>
        <h2 className={styles.title}>Our Services</h2>
        <RowServices />
        <div className={styles.imgCard}>
          <Card
            img={img1}
            title="Botox"
            description="Botox injections block certain chemical signals from nerves, mostly signals that cause muscles to contract."
            titleButton="View Details"
          />
          <Card
            img={img2}
            title="Laser"
            description="To remove the hair, most patients need 2 to 6 laser treatments."
            titleButton="View Details"
          />
          <Card
            img={img3}
            title="Filler"
            description="Injectable filler is a soft tissue filler injected into the skin at different depths to help fill in facial wrinkles, provide facial volume, and augment facial features: restoring a smoother appearance."
            titleButton="View Details"
          />
        </div>
      </div>
    );
  }
};

export default Services;
