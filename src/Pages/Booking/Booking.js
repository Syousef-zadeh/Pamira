import React, { useState } from "react";
import Input from "../../components/UI/Input/Input";
import Contact from "../../components/Contact/Contact";
import styles from "./Booking.module.css";
import SocialMedia from "../../components/SocialMedia/SocialMedia";
import Button from "../../components/UI/Button/button";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Loading from "../../components/Loading/LoadingPage";
import axios from "axios";

const Booking = () => {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [procedure, setProcedure] = useState("");
  const [desiredDate, setDesiredDate] = useState("");
  const [comments, setComments] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      setLoading(true);
      const { data } = await axios.post(
        "http://localhost:5000/api/booking/add",
        {
          fullName,
          phoneNumber,
          desiredDate,
          procedure,
          comments,
        },
        config
      );
      localStorage.setItem("userInfo", JSON.stringify(data));
      setLoading(false);
    } catch (error) {
      setError(error.response.data.message);
      setLoading(false);
    }
  };

  return (
    <section>
      {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
      {loading && <Loading />}
      <h2 className={styles["booking-h2"]}>Booking an Appointment</h2>
      <form>
        <div className={styles.booking}>
          <div className={styles.mobile}>
            <div>
              <Input
                placeholder="Full Name*"
                id="fullName"
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
              <Input
                placeholder="Phone Number*"
                id="phoneNumber"
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
              <Input
                placeholder="Procedure*"
                id="procedure"
                type="text"
                value={procedure}
                onChange={(e) => setProcedure(e.target.value)}
              />
              <Input
                placeholder="Desired Date*"
                id="desiredDate"
                type="Date"
                value={desiredDate}
                onChange={(e) => setDesiredDate(e.target.value)}
              />
              <label>Comments</label>
              <textarea
                id="comments"
                value={comments}
                onChange={(e) => setComments(e.target.value)}
              />
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
              type="submit"
              onClick={submitHandler}
            >
              Send Request
            </Button>
          </div>
        </div>
      </form>
    </section>
  );
};
export default Booking;
