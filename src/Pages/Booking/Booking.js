import React from "react";
import Input from "../../components/UI/Input/Input";
import Contact from "../../components/Contact/Contact";
import styles from "./Booking.module.css";
import SocialMedia from "../../components/SocialMedia/SocialMedia";

const Booking = () => {
  return (
    <section>
      <h2 className={styles['booking-h2']}>Booking an Appointment</h2>
      <div className={styles.booking}>
        <div>
          <Input placeholder="Full Name*" type="text" />
          <Input placeholder="Phone Number*" type="tel" />
          <Input placeholder="Procedure" type="text" />
          <Input placeholder="Desired Date" type="Date" />
        </div>
        <div className={styles.contact}>
          <Contact />
          <SocialMedia className={{color:"#00142f"}} />
        </div>
      </div>
    </section>
  );
};
export default Booking;
