import React from "react";
import ServicesCard from "../../UI/ServicesCard";
import styles from "./RowServices.module.css";

import imgMeso from '../../../assets/row-service/mesotrherapy.png';
import imgMicro from '../../../assets/row-service/micro-dermi.png';
import imgLaser from '../../../assets/row-service/laser.png';
import imgBeauty from '../../../assets/row-service/beauty.png';


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
