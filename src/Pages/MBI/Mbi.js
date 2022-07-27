import React from "react";
import MbiForm from "../../components/MBI/component/MbiForm";

import styles from './MBI.module.css';

const Mbi = () => {
  return (
    <div className={styles.mbi}>
      <p> شاخص توده بدنی در هر فرد بسته به سن و جنسیت آن متفاوت است. بنابراین با وجود اینکه در این فرمول محاسبه به صورت ساده با اندازه قد و وزن انجام می‌شود اما در واقع روش محاسبه شاخص توده بدنی به صورت پیشرفته متغیرهای دیگری را، مانند اندازه دور مچ و سن در این فرمول شامل می شود که حساب کردن توده بدنی کودکان و بزرگسالان و حتی زنان و مردان را از هم متمایز می کند.</p>
      <MbiForm className={styles.formMbi}/>
    </div>
  );
};
export default Mbi;
