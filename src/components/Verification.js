import React from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

export const Verification = () => {
  return (
    <div>
      <div className="text-center">Two-factor Authentication</div>
      <div className="text-center icon_div">
        <span className="mobile_icon"></span>
        <i className="fa-solid fa-mobile mobile_icon__icon"></i>
      </div>
      <div className="text-center">Enter Code</div>
      <Row>
        Enter 4-6 digit code we sent to your registered mobile number to log
        into facebook. You might have to wait for upto 2 minutes.
      </Row>
      <Form>
        <Row>
          <Col></Col>
          <Col>
            <Form.Control
              placeholder="confirmation code"
              className="text-center"
            />
          </Col>
          <Col></Col>
        </Row>
      </Form>
      <Row>
        <a className="text-center link_underline">
          <i class="fa-solid fa-arrow-rotate-right"></i>Resend Code
        </a>
          </Row>
          <Row>
              <Button>Verify Account</Button>
          </Row>
    </div>
  );
};
