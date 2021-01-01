import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Quote.css";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";

function Quote() {
  return (
    <Container className="custom-quote">
      <Row className="justify-content-md-center home-quote">
        <div>
          <ImQuotesLeft />
        </div>
        <Col md="auto">
          <p className="custom-quote-text">
            Education isn’t something you can finish
          </p>
        </Col>
        <div>
          <ImQuotesRight />
        </div>
        <Col md="auto">
          <p2>- Isaac Asimov</p2>
        </Col>
      </Row>
    </Container>
  );
}

export default Quote;
