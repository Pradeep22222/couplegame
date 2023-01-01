import React from 'react'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

export const Home = () => {
  return (
    <div className="homepage">
      <Row>
        <h1 className="welcome">Welcome to the couple game!!</h1>
      </Row>
      <Row>
        <Col></Col>
        <Col></Col>
        <Col></Col>
        <Button variant="success" className="next">Next</Button>
      </Row>
    </div>
  );
}
