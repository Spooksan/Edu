import React from "react";
import { Container, Row, Col, Image, Card, Button } from "react-bootstrap";
import instructor from "../../images/instructor.png";
import "./Instructor.css";

function Instructor() {
  return (
    <Container className="instructor-border">
      <Row className="justify-content-md-center">
        <Col xs={12} md={4}>
          <Image src={instructor} fluid />
        </Col>
        <Col xs={12} md={6} className="instructor-card">
          <Card className="instr" style={{ backgroundColor: " #f1e4d0" }}>
            <Card.Body>
              <Card.Title className="instructor-header">
                Become an Instructor
              </Card.Title>
              <Card.Text>
                Top instructors from around the world teach millions of students
                on HUB Educational Online. We provide the tools and skills to
                teach what you love.
              </Card.Text>
              <Button variant="primary">Start Teaching Today</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Instructor;
