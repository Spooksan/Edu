import React from "react";
import { Jumbotron, Button, Container } from "react-bootstrap";
import "./Jumbo.css";
import jumbo_two from "../../images/jumbo_two.png";

function Jumbo() {
  return (
    <Jumbotron
      className="jumbo-super"
      style={{ backgroundImage: "url(" + jumbo_two + ")" }}
    >
      <Container className=" justify-content-md-center">
        <h1>Get Personal Learning Recommendations</h1>
        <p>Answer a few questions for your top picks</p>
        <p>
          <Button variant="primary">Get Started</Button>
        </p>
      </Container>
    </Jumbotron>
  );
}

export default Jumbo;
