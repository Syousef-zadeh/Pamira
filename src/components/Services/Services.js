import React from "react";
import Card from "../UI/services/Card";
import styles from "./Services.module.css";
import RowServices from "./components/RowServices";

import img1 from "../../assets/botox.jpg";
import img2 from "../../assets/Laser.jpeg";
import img3 from "../../assets/filler.jpg";

const Services = (props) => {
  return (
    <div>
        <h2 className={styles.title}>Our Services</h2>
      <RowServices />
      <div className={styles.imgCard}>
        <Card
          img={img1}
          title="Botox"
          description="Botox injections block certain chemical signals from nerves, mostly signals that cause muscles to contract."
        />
        <Card
          img={img2}
          title="Laser"
          description="To remove the hair, most patients need 2 to 6 laser treatments."
        />
        <Card
          img={img3}
          title="Filler"
          description="Injectable filler is a soft tissue filler injected into the skin at different depths to help fill in facial wrinkles, provide facial volume, and augment facial features: restoring a smoother appearance."
        />
      </div>
    </div>
  );
};

export default Services;
