import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import "./TopCategories.css";
import design from "../../images/design.jpg";
import development from "../../images/development.jpg";
import business from "../../images/business.jpg";
import it from "../../images/it.jpg";
import marketing from "../../images/marketing.jpg";
import music from "../../images/music.jpg";
import personal from "../../images/personal.jpg";
import photography from "../../images/photography.jpg";

function TopCategories() {
  return (
    <Container>
      <div className="super-title">
        <h2>Top Categories</h2>
      </div>
      <Row>
        <Col xs={6} md={3} lg={3} className="categories-super">
          <Card>
            <Card.Img variant="top" src={design} />
            <Card.Body>
              <Button className="btn-super">Design</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={6} md={3} lg={3} className="categories-super">
          <Card>
            <Card.Img variant="top" src={development} />
            <Card.Body>
              <Button className="btn-super">Development</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={6} md={3} lg={3} className="categories-super">
          <Card>
            <Card.Img variant="top" src={marketing} />
            <Card.Body>
              <Button className="btn-super">Marketing</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={6} md={3} lg={3} className="categories-super">
          <Card>
            <Card.Img variant="top" src={music} />
            <Card.Body>
              <Button className="btn-super">Music</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={6} md={3} lg={3} className="categories-super">
          <Card>
            <Card.Img variant="top" src={business} />
            <Card.Body>
              <Button className="btn-super">Business</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={6} md={3} lg={3} className="categories-super">
          <Card>
            <Card.Img variant="top" src={it} />
            <Card.Body>
              <Button className="btn-super">IT and Software</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={6} md={3} lg={3} className="categories-super">
          <Card>
            <Card.Img variant="top" src={personal} />
            <Card.Body>
              <Button className="btn-super">Career</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={6} md={3} lg={3} className="categories-super">
          <Card>
            <Card.Img variant="top" src={photography} />
            <Card.Body>
              <Button className="btn-super">Photography</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default TopCategories;
