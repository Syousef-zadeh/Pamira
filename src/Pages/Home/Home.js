import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import styles from "./Home.module.css";
import img1 from "../../assets/skincare3.jpg";
import img2 from "../../assets/massage.jpg";
import img3 from "../../assets/skincare.jpg";
import Services from "../../components/Services/AllServices";
import Schedule from "../../components/Schedule/Schedule";
import MBIbtn from "../../components/MBI/MbiButton";
import BookAppointment from "../../components/Headers/components/AppointmentButton";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";

const Home = () => {
  
  return (
    <div>
      <div>
        <Carousel variant="dark" className={styles.homeCarousel}>
          <Carousel.Item>
            <img className="d-block w-100 c-img" src={img2} alt="First slide" />
            <Carousel.Caption>
              <h5>First slide label</h5>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100 c-img" src={img1} alt="Second slide" />
            <Carousel.Caption>
              <h5>Second slide label</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100 c-img" src={img3} alt="Third slide" />
            <Carousel.Caption>
              <h5>Third slide label</h5>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className={styles.appointment}>
        <BookAppointment
          style={{
            padding: "12px",
            backgroundColor: "#283b42",
            color: "white",
            boxShadow: "0 0 20px 2px #00142f",
          }}
        />
      </div>
      <VideoPlayer />
      <Services />
      <MBIbtn />
      <Schedule />
    </div>
  );
};
export default Home;
