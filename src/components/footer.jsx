import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

const footer = () => {
  return (
    <>
      <footer>
        
        <Container >
          <p className="bg-dark text-white">
          <Row>
            <Col className="text-left">
              <a href="" color="#ffff">Contact Us</a>
            </Col>
            <Col className="text-center">
              <span>About Us </span>
            </Col>
            <Col className="text-right">
              <span>Return And Refund </span>
            </Col>
          </Row>
          <Row>
            <Col className="text-left">
              <span> Careers</span>
            </Col>
            <Col className="text-center">
              <span>FAQs</span>
            </Col>
            <Col className="text-right">
              <span>Gift Vouchers </span>
            </Col>
          </Row>
          <Row>
            <Col className="text-left">
              <span> Terms And Conditions</span>
            </Col>
            <Col className="text-center">
              <span>More Information</span>
            </Col>
            <Col className="text-right">
              <span>Privacy Policy </span>
            </Col>
          </Row>
          </p>
        </Container>
        
      </footer>
    </>
  );
};

export default footer;
