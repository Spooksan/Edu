import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./TopCategories.css";
import psycho_one from "../../images/psycho_one.png";
import psycho_two from "../../images/psycho_two.png";
import psycho_three from "../../images/psycho_three.png";
import psycho_four from "../../images/psycho_four.png";
import { FaStar } from "react-icons/fa";

function Arts() {
  return (
    <Container>
      <Row className="categories-super-card">
        <Col xs={4} lg={4}>
          <Image src={psycho_one} fluid />
        </Col>
        <Col xs={8} lg={8}>
          <div>
            <p1>Gamification: Motivation Arts & The Art of Engagement</p1>
          </div>
          <div>
            <p>
              Learn how to motivate and engage anyone by learning the Arts that
              underpins human behaviour.
            </p>
          </div>
          <div>
            <span>
              <p3>Rob Sutcliffe</p3>
            </span>
          </div>
          <div className="categories-star">
            <span className="checked">
              <FaStar />
            </span>
            <span className="checked">
              <FaStar />
            </span>
            <span className="checked">
              <FaStar />
            </span>
            <span className="checked">
              <FaStar />
            </span>
            <span>
              <FaStar />
            </span>
          </div>
          <div>
            <span>
              <p3>3 total hours</p3>
            </span>
            <span>
              <p3>46 lectures</p3>
            </span>
            <span>
              <p3>All levels</p3>
            </span>
          </div>
          <div>
            <span className="categories-span">
              <a href="#">Find out more</a>
            </span>
          </div>
        </Col>
      </Row>
      <hr />
      <Row className="categories-super-card">
        <Col xs={4} lg={4}>
          <Image src={psycho_two} fluid />
        </Col>
        <Col xs={8} lg={8}>
          <div>
            <p1>Arts of Diversity and Unconscious Bias</p1>
          </div>
          <div>
            <p>
              Understand Stereotypes, Prejudice, and Discrimination and How to
              Reduce Their Influence at Work and Your Community
            </p>
          </div>
          <div>
            <span>
              <p3>Andrew Luttrell, Ph.D.</p3>
            </span>
          </div>
          <div className="categories-star">
            <span className="checked">
              <FaStar />
            </span>
            <span className="checked">
              <FaStar />
            </span>
            <span className="checked">
              <FaStar />
            </span>
            <span className="checked">
              <FaStar />
            </span>
            <span className="checked">
              <FaStar />
            </span>
          </div>
          <div>
            <span>
              <p3>2.5 total hours</p3>
            </span>
            <span>
              <p3>35 lectures</p3>
            </span>
            <span>
              <p3>All levels</p3>
            </span>
          </div>
          <div>
            <span className="categories-span">
              <a href="#">Find out more</a>
            </span>
          </div>
        </Col>
      </Row>
      <hr />
      <Row className="categories-super-card">
        <Col xs={4} lg={4}>
          <Image src={psycho_three} fluid />
        </Col>
        <Col xs={8} lg={8}>
          <div>
            <p1>Diploma in Modern Applied Arts (DMAP.)</p1>
          </div>
          <div>
            <p>
              Learn how to motivate and engage anyone by learning the Arts that
              underpins human behaviour.
            </p>
          </div>
          <div>
            <span>
              <p3>Roger</p3>
            </span>
          </div>
          <div className="categories-star">
            <span className="checked">
              <FaStar />
            </span>
            <span className="checked">
              <FaStar />
            </span>
            <span className="checked">
              <FaStar />
            </span>
            <span>
              <FaStar />
            </span>
            <span>
              <FaStar />
            </span>
          </div>
          <div>
            <span>
              <p3>51 total hours</p3>
            </span>
            <span>
              <p3>96 lectures</p3>
            </span>
            <span>
              <p3>Intermediate</p3>
            </span>
          </div>
          <div>
            <span className="categories-span">
              <a href="#">Find out more</a>
            </span>
          </div>
        </Col>
      </Row>
      <hr />
      <Row className="categories-super-card">
        <Col xs={4} lg={4}>
          <Image src={psycho_four} fluid />
        </Col>
        <Col xs={8} lg={8}>
          <div>
            <p1>Be Happier with Positive Arts</p1>
          </div>
          <div>
            <p>
              Learn how to motivate and engage anyone by learning the Arts that
              underpins human behaviour.
            </p>
          </div>
          <div>
            <span>
              <p3>Rob Sutcliffe</p3>
            </span>
          </div>
          <div className="categories-star">
            <span className="checked">
              <FaStar />
            </span>
            <span className="checked">
              <FaStar />
            </span>
            <span className="checked">
              <FaStar />
            </span>
            <span className="checked">
              <FaStar />
            </span>
            <span>
              <FaStar />
            </span>
          </div>
          <div>
            <span>
              <p3>3 total hours</p3>
            </span>
            <span>
              <p3>46 lectures</p3>
            </span>
            <span>
              <p3>All levels</p3>
            </span>
          </div>
          <div>
            <span className="categories-span">
              <a href="#">Find out more</a>
            </span>
          </div>
        </Col>
      </Row>
      <hr />
    </Container>
  );
}

export default Arts;
