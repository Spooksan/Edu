import React from "react";
import { Form, Jumbotron, Row, Col } from "react-bootstrap";
import "./Footer.css";
import { FaFacebook, FaLinkedin, FaReddit, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <Jumbotron className="footer-super">
      <div className="footer-icon">
        <p>HUB - Kids Education</p>
      </div>
      <div className="footer-size">
        <Row>
          <Col lg={6} xs={12}>
            <Row>
              <Col xs={4}>
                <ul>
                  <li className="list-title">Connect</li>
                  <li>Blog</li>
                  <li>Contact</li>
                  <li>Help Center</li>
                  <li>Media Kit</li>
                  <li>Donate</li>
                </ul>
              </Col>
              <Col xs={4}>
                <ul>
                  <li className="list-title">Legal</li>
                  <li>Terms of Service</li>
                  <li>Privacy Policy</li>
                  <li>Accessibility Policy</li>
                  <li>Trademark Policy</li>
                  <li>Sitemap</li>
                </ul>
              </Col>
              <Col xs={4}>
                <ul>
                  <li className="list-title">HUB</li>
                  <li>About</li>
                  <li>HUB for Business</li>
                  <li>Affiliates</li>
                  <li>Careers</li>
                  <li>News</li>
                </ul>
              </Col>
            </Row>
          </Col>
          <Col lg={6} xs={12}>
            <div className="footer-right">
              <span>
                <FaFacebook />
              </span>
              <span>
                <FaLinkedin />
              </span>
              <span>
                <FaReddit />
              </span>
              <span>
                <FaTwitter />
              </span>
            </div>
            <div>
              <Form.Group>
                <Form.Control as="select" size="lg">
                  <option>English</option>
                  <option>Romanian</option>
                </Form.Control>
              </Form.Group>
            </div>
          </Col>
        </Row>
      </div>
      <div className="footer-copy justify-content-md-center">
        <p>copyright: HUB Education</p>
      </div>
    </Jumbotron>
  );
}

export default Footer;
