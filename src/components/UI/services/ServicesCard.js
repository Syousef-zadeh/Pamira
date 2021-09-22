import React from "react";
import styles from "./ServicesCard.module.css";
import Button from "../Button/button";
import useToken from "../../useToken/useToken";
import axios from "axios";
import { useHistory } from "react-router-dom";

const ServicesCard = (props) => {
  const history = useHistory();

  const deleteService = (id, e) => {
    try {
      axios
        .delete(`https://pamira-clinic.herokuapp.com/api/services/${id}`)
        .then((res) => {
          console.log(res);
          props.setDeleted(props.deleted + 1);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const { token } = useToken();

  const btns = () => {
    if (token && token.length > 1) {
      return (
        <div className={styles.adminBtn}>
          <Button
            className={styles.button}
            onClick={() => {
              history.push(`/service/details/${props.id}`);
            }}
          >
            More Details
          </Button>
          <Button>Edit</Button>
          <Button
            onClick={() => deleteService(props.id)}
            style={{ backgroundColor: "red", color: "white" }}
          >
            Delete
          </Button>
        </div>
      );
    } else {
      return (
        
          <Button
            className={styles.button}
            onClick={() => {
              history.push(`/service/details/${props.id}`);
            }}
          >
            More Details
          </Button>
      
      );
    }
  };
  return (
    <div className={styles.serviceCard} id={props.id}>
      <div key={props.id} className={styles["body-serviceCard"]}>
        <img
          className={styles["img-card"]}
          name="serviceImage"
          src={`${props.img}`}
          alt=""
        />

        <h6 className={styles["text-card"]}>{props.title}</h6>
      </div>
      <div>{btns()}</div>
    </div>
  );
};
export default ServicesCard;
