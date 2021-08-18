import React from "react";
import Card from "../../../components/UI/Card";
import styles from "./Services.module.css";

import img1 from "../../../assets/botox.jpg";
import img2 from "../../../assets/Laser.jpeg";
import img3 from "../../../assets/filler.jpg";


const Services = (props) => {
  return (
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
        description="Injectable filler (injectable cosmetic filler, injectable facial filler) is a soft tissue filler injected into the skin at different depths to help fill in facial wrinkles, provide facial volume, and augment facial features: restoring a smoother appearance."
      />
    </div>
  );
};

export default Services;
