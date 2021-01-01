import React from "react";
import { Carousel, Container, Image } from "react-bootstrap";
import one from "../../images/one.png";
import two from "../../images/two.png";
import three from "../../images/three.png";
import "./Carousels.css";

function Carousels() {
  return (
    <Container className="custom-banner">
      <div className="home-carousel">
        <Carousel controls={false}>
          <Carousel.Item interval={3000}>
            <Image src={one} alt="fireSpot" fluid />
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <Image src={two} alt="fireSpot" fluid />
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <Image src={three} alt="fireSpot" fluid />
          </Carousel.Item>
        </Carousel>
      </div>
    </Container>
  );
}

export default Carousels;
