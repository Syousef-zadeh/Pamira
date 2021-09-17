import React from "react";
import styles from "./ServicesCard.module.css";
import Button from "../Button/button";
import useToken from "../../useToken/useToken";

const ServicesCard = (props) => {
  const { token } = useToken();

  const btns = () => {
    if (token && token.length > 1) {
      return (
        <div className={styles.adminBtn}>
          <Button className={styles.button}>More Details</Button>
          <Button>Edit</Button>
          <Button>Delete</Button>
        </div>
      );
    } else {
      return <Button className={styles.button}>More Details</Button>;
    }
  };
  return (
    <div className={styles.serviceCard}>
      <div className={styles["body-serviceCard"]}>
        <img
          className={styles["img-card"]}
          name="serviceImage"
          src={`${props.img}`}
          alt=""
        />

        <h6 className={styles["text-card"]}>{props.title}</h6>
      </div>
      <div>
        {btns()}
        {/* <Button className={styles.button}>More Details</Button> */}
      </div>
    </div>
  );
};
export default ServicesCard;
