import React from "react";
import Button from "../../UI/Button/button";
import Input from "../../UI/Input/Input";
import styles from './MbiForm.module.css';

const MbiForm = (props) => {
  const calculate =()=>{

  }
  return (
    <div className={styles.mbiForm}> 
      <form className={styles['form-input']}>
        <Input
          name="hight"
          label="Height"
          type="number"
          value={props.value}
          placeholder="170 cm"
        />
        <Input
          name="weight"
          label="Weight"
          type="number"
          value={props.value}
          placeholder="80 kg"
        />
        <div>
          <Button type="submit">Calculate</Button>
        </div>
      </form>
    </div>
  );
};
export default MbiForm;
