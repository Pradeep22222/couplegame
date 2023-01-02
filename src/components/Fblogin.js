import React from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

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
              placeholder="First name"
              className="facebook_inputs"
              type="text"
            />
          </Col>
          <Col></Col>
        </Row>
        <Row>
          <Col></Col>
          <Col>
            <Form.Control placeholder="Last name" className="facebook_inputs" />
          </Col>
          <Col></Col>
        </Row>
      </Form>
    </div>
  );
};
