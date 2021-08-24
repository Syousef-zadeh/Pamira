import React from "react";
import Input from "../../UI/Input/Input";
import styles from './MbiForm.module.css';

const MbiForm = (props) => {
  return (
    <div className={styles.mbiForm}> 
      <form className={styles['form-input']}>
        <Input
          label="Height"
          type="number"
          value={props.value}
          placeholder="170 cm"
        />
        <Input
          label="Weight"
          type="number"
          value={props.value}
          placeholder="80 kg"
        />
      </form>
    </div>
  );
};
export default MbiForm;
