import React, { Component } from "react";
import { Container, Image } from "react-bootstrap";
import Slider from "react-slick";
import psycho_one from "../../images/psycho_one.png";
import psycho_two from "../../images/psycho_two.png";
import psycho_three from "../../images/psycho_three.png";
import "./Slider.css";

export default class Responsive extends Component {
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
      {
        id: 5,
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
      {
        id: 6,
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
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 750,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
          },
        },
      ],
    };
    const { items } = this.state;
    return (
      <div className="margin-adjuster">
        <div className="slider-title">
          <h2>Students Are Viewing </h2>
        </div>
        <Container>
          <Slider {...settings}>
            {items.map((item) => (
              <Container key={item.id} className="slider-super">
                <div className="image-adjuster">
                  <Image src={item.image} fluid />
                </div>
                <div className="padding-adjuster">
                  <div>
                    <p1>{item.title}</p1>
                  </div>
                  <div>
                    <p2>{item.desc}</p2>
                  </div>
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
                <div className="slider-gap"></div>
                <span className="slider-span">
                  <a href={item.link}>Find out more</a>
                </span>
              </Container>
            ))}
          </Slider>
        </Container>
      </div>
    );
  }
}
