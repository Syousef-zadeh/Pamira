import React, { useState } from "react";
import Button from "../../UI/Button/button";
import Input from "../../UI/Input/Input";
import styles from "./MbiForm.module.css";

const MbiForm = (props) => {
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();

  const [bmi, setBmi] = useState();
  const [bmiClass, setBmiClass] = useState();

  //handler
  const handleHeightChange = (event) => {
    setHeight(event.target.value);
  };
  const handleWeightChange = (event) => {
    setWeight(event.target.value);
  };

  const calculate = () => {
    let bmiValue = (weight / (height / 100) ** 2).toFixed(2);
    setBmi(bmiValue);

    let bmiClass = getBmi(bmiValue);
    setBmiClass(bmiClass);
    setHeight("");
    setWeight("");
  };
  const getBmi = (bmi) => {
    if (bmi < 18.5) {
      return "underweight";
    }
    if (bmi >= 18.5 && bmi < 24.9) {
      return "Normal weight";
    }
    if (bmi >= 25 && bmi < 29.9) {
      return "Overweight";
    }
    if (bmi >= 30) {
      return "Obesity";
    }
  };

  return (
    <div className={styles.mbiForm}>
      <form className={styles["form-input"]}>
        <Input
          label="Height"
          type="number"
          value={height}
          placeholder="170 cm"
          onChange={handleHeightChange}
        />
        <Input
          label="Weight"
          type="number"
          value={weight}
          placeholder="80 kg"
          onChange={handleWeightChange}
        />
        <div>
          <Button
            style={{
              padding: ".5rem 1rem",
            }}
            onClick={calculate}
          >
            Calculate
          </Button>

          <div>{isNaN(bmi) ? null : <h3>Your BMI = {bmi}</h3>}</div>
          <div>
            <h3>{bmiClass}</h3>
          </div>
        </div>
      </form>
    </div>
  );
};
export default MbiForm;
