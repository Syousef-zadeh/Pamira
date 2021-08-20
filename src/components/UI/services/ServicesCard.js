import React from "react";
import styles from "./ServicesCard.module.css";
import Button from "../Button/button"

const ServicesCard = (props) => {
  return (
    <div className={styles.serviceCard}>
      <div className={styles['body-serviceCard']}>
        <img className={styles['img-card']} src={props.img} alt="" />

        <h6 className={styles['text-card']}>{props.title}</h6>
      </div>
      <div>
        <Button className={styles.button}>More Details</Button>
      </div>
    </div>
  );
};
export default ServicesCard;
