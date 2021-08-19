import React from "react";
import ServicesCard from "../../UI/ServicesCard";
import styles from "./RowServices.module.css";

import imgMeso from '../../../assets/row-service/mesotrherapy.jpeg';
import imgMicro from '../../../assets/row-service/micro-dermy.jpeg';
import imgLaser from '../../../assets/row-service/laser.jpeg';
import imgBeauty from '../../../assets/row-service/beauty.jpeg';


const RowServices = (props) => {
  return (
    <div className={styles['row-services']}>
        <ServicesCard img={imgMeso} title="Mesotherapy"/>
        <ServicesCard img={imgLaser} title="Laser"/>
        <ServicesCard img={imgMicro} title="microdermy"/>
        <ServicesCard img={imgBeauty} title="skin care"/>
    </div>
  );
};
export default RowServices;
