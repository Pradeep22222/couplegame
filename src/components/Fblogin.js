import React from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
export const Fblogin = () => {
  return (
    <div>
      <Row className="text-center">
        <div className="facebook_heading">Facebook</div>
      </Row>
      <Form>
        <Row className="mb-3">
          <Col></Col>
          <Col>
            <Form.Control
              placeholder="Mobile number or email address"
              className="facebook_inputs"
              id="form_control"
            />
          </Col>
          <Col></Col>
        </Row>
        <Row>
          <Col></Col>
          <Col>
            <Form.Control
              placeholder="Password"
              className="facebook_inputs"
              id="form_control"
            />
          </Col>
          <Col></Col>
        </Row>
        <Row>
          <Col></Col>
          <Button variant="primary" size="lg" className="text-center">
            Block level button
          </Button>
          <Col></Col>
        </Row>
      </Form>
    </div>
  );
};
