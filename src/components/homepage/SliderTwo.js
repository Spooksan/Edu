import React, { Component } from "react";
import { Container, Button } from "react-bootstrap";
import Carousel from "react-elastic-carousel";
import psycho_one from "../../images/psycho_one.png";
import psycho_two from "../../images/psycho_two.png";
import psycho_three from "../../images/psycho_three.png";
import "./Slider.css";

class Slider extends Component {
  state = {
    items: [
      {
        id: 1,
        title: "Gamification: Motivation Psychology & The Art of Engagement",
        desc:
          "Learn how to motivate and engage anyone by learning the psychology that underpins human behaviour.",
        hours: "4 hours",
        lectures: "46 lectures",
        level: "All Level",
        image: psycho_one,
        author: "Richard",
        link: "#",
        rate: "99.99",
      },
      {
        id: 2,
        title: "Gamification: Motivation Psychology & The Art of Engagement",
        desc:
          "Learn how to motivate and engage anyone by learning the psychology that underpins human behaviour.",
        hours: "4 hours",
        lectures: "46 lectures",
        level: "All Level",
        image: psycho_two,
        author: "Daniel",
        link: "#",
        rate: "55.67",
      },
      {
        id: 3,
        title: "Gamification: Motivation Psychology & The Art of Engagement",
        desc:
          "Learn how to motivate and engage anyone by learning the psychology that underpins human behaviour.",
        hours: "4 hours",
        lectures: "46 lectures",
        level: "All Level",
        image: psycho_three,
        author: "Fathima",
        link: "#",
        rate: "78",
      },
      {
        id: 4,
        title: "Gamification: Motivation Psychology & The Art of Engagement",
        desc:
          "Learn how to motivate and engage anyone by learning the psychology that underpins human behaviour.",
        hours: "4 hours",
        lectures: "46 lectures",
        level: "All Level",
        image: psycho_three,
        author: "Samuel",
        link: "#",
        rate: "89",
      },
    ],
  };

  render() {
    const { items } = this.state;
    return (
      <Container className="super-slider-container">
        <div className="slider-title">
          <h2>Most Popular Courses</h2>
        </div>
        <Carousel itemsToShow={3} itemPadding={[0, 10]} pagination={false}>
          {items.map((item) => (
            <Container key={item.id} className="slider-super">
              <img src={item.image} />
              <div>
                <p1>{item.title}</p1>
              </div>
              <div>
                <p2>{item.desc}</p2>
              </div>
              <div>
                <span>
                  <p4>{item.author}</p4>
                </span>
              </div>
              <div>
                <span>
                  <p3>{item.hours}</p3>
                </span>
                <span>
                  <p3>{item.lectures}</p3>
                </span>
                <span>
                  <p3>{item.level}</p3>
                </span>
              </div>
              <div className="slider-gap">
                <p1>
                  <span className="colored-span">Lei : {item.rate} /-</span>
                </p1>
              </div>
              <span className="slider-span">
                <a href={item.link}>Find out more</a>
              </span>
            </Container>
          ))}
        </Carousel>
      </Container>
    );
  }
}
export default Slider;
