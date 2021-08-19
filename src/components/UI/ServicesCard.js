import React from "react";
import styles from "./ServicesCard.module.css";

const ServicesCard = (props) => {
  return (
    <div className={styles.serviceCard}>
      <div className={styles['body-serviceCard']}>
        <img className={styles['img-card']} src={props.img} alt="" />

        <h6 className={styles['text-card']}>{props.title}</h6>
      </div>
      <div>
        <button className={styles.btn}>More Details</button>
      </div>
    </div>
  );
};
export default ServicesCard;
