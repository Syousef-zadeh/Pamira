import React from "react";
import Input from "../../components/UI/Input/Input";
import Contact from "../../components/Contact/Contact";
import styles from "./Booking.module.css";
import SocialMedia from "../../components/SocialMedia/SocialMedia";
import Button from "../../components/UI/Button/button";

const Booking = () => {
  return (
    <section>
      <h2 className={styles["booking-h2"]}>Booking an Appointment</h2>
      <div className={styles.booking}>
        <div className={styles.mobile}>
          <div>
            <Input placeholder="Full Name*" type="text" />
            <Input placeholder="Phone Number*" type="tel" />
            <Input placeholder="Procedure" type="text" />
            <Input placeholder="Desired Date" type="Date" />
          <label>Comments</label>
          <textarea />
          </div>
          <div className={styles.contact}>
            <h3 style={{ padding: "1rem" }}>Pamira Clinic</h3>
            <Contact />

            <SocialMedia />
          </div>
        </div>

        <div>
          <Button
            style={{
              padding: "8px",
              backgroundColor: "#283b42",
              color: "white",
            }}
          >
            Send Request
          </Button>
        </div>
      </div>
    </section>
  );
};
export default Booking;
