import styles from "./ServicesCard.module.css";
import Button from "../Button/button";
import useToken from "../../useToken/useToken";
import axios from "axios";

const ServicesCard = (props) => {

  const deleteService = (id, e) => {
    try {
      axios.delete(`https://pamira-clinic.herokuapp.com/api/services/${id}`)
        .then((res) => {
          console.log(res);
          props.setDeleted(props.deleted+1)
        })
    } catch (error) {
      console.log(error);
    }
  };

  const { token } = useToken();

  const btns = () => {
    if (token && token.length > 1) {
      return (
        
        <div className={styles.adminBtn}>
          <Button className={styles.button}>More Details</Button>
          <Button>Edit</Button>
          <Button onClick={()=>deleteService(props.id)}>Delete</Button>
        </div>
      );
    } else {
      return <Button className={styles.button}>More Details</Button>;
    }
  };
  return (
    <div className={styles.serviceCard} id={props.id}>
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
      </div>
    </div>
  );
};
export default ServicesCard;
