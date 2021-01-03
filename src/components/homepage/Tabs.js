import React from "react";
import { Row, Col, Nav, Tab, Container } from "react-bootstrap";
import "./Tabs.css";
import Psychology from "./Psychology";
import Arts from "./Arts";

function Tabs() {
  return (
    <Container className="tabs-container">
      <div>
        <h3>The world's largest selection of courses updated everyday</h3>
        <p>Choose from popular video courses released this week</p>
      </div>
      <Tab.Container id="left-tabs-example" defaultActiveKey="psychology">
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="psychology">Psychology</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="arts">Arts & Creation</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="public">Public Speaking</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="languages">Languages</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="development">Development</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="business">Business</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="finance">Finance & Accounting</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="design">Design</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="marketing">Marketing</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="psychology">
                <Psychology />
              </Tab.Pane>
              <Tab.Pane eventKey="arts">
                <Arts />
              </Tab.Pane>
              <Tab.Pane eventKey="public">Public content</Tab.Pane>
              <Tab.Pane eventKey="languages">Languages content</Tab.Pane>
              <Tab.Pane eventKey="development">Development content</Tab.Pane>
              <Tab.Pane eventKey="business">Business content</Tab.Pane>
              <Tab.Pane eventKey="finance">Finance content</Tab.Pane>
              <Tab.Pane eventKey="design">Design content</Tab.Pane>
              <Tab.Pane eventKey="marketing">Marketing content</Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  );
}

export default Tabs;
