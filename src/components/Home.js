import React from 'react'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import hearts from ".././assets/hearts.jpg";
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div className="home">
      <Row>
        <h1 className="welcome">Welcome to the couple game!!</h1>
      </Row>
      <Row>
        <Col></Col>
        <Col></Col>
        <Col></Col>
        <Button variant="success" className="next">
          <Link to="login">Next</Link>
        </Button>
      </Row>
      <img src={hearts} className="hearts"></img>
    </div>
  );
}
