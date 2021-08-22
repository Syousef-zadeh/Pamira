import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import st from "./Home.module.css";

import img1 from "../../assets/skincare3.jpg";
import img2 from "../../assets/massage.jpg";
import img3 from "../../assets/skincare.jpg";
import Services from "../../components/Services/Services";
import Schedule from "../../components/Schedule/Schedule";


const Home = () => {
  return (
    <div>
      <div>
      <Carousel variant="dark" className={st.homeCarousel}>
        <Carousel.Item>
          <img className="d-block w-100" src={img2} alt="First slide" />
          <Carousel.Caption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img1} alt="Second slide" />
          <Carousel.Caption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img3} alt="Third slide" />
          <Carousel.Caption>
            <h5>Third slide label</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
      <Services />
      <Schedule />
    </div>
  );
};
export default Home;
