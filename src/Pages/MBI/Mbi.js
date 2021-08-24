import React from "react";
import MbiForm from "../../components/MBI/component/MbiForm";

import styles from './MBI.module.css';

const Mbi = () => {
  return (
    <div className={styles.mbi}>
      <p>This calculator provides body mass index (BMI) and the corresponding BMI weight status category for adults 20 years and older.</p>
      <MbiForm className={styles.formMbi}/>
    </div>
  );
};
export default Mbi;
