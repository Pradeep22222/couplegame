import React from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/esm/Container";

export const Verification = () => {
  return (
    <div>
      <div className="authentication_page">
        <Container>
          <div className="text-center bold authentication_heading">
            Two-factor Authentication
          </div>
          <div className="text-center">
            Enter 4-6 digit code we sent to your registered mobile number or
            email to log into facebook. You might have to wait for upto 2
            minutes.
          </div>
          <div className="text-center icon_div">
            <span className="mobile_icon"></span>
            <i className="fa-solid fa-mobile mobile_icon__icon"></i>
          </div>
          <div className="text-center enter_code">Enter Code</div>
          <Form>
            <Row>
              <Col></Col>
              <Col md={5}>
                <Form.Control
                  placeholder="confirmation code"
                  className="text-center"
                />
              </Col>
              <Col></Col>
            </Row>
          </Form>
          <div>
            <a className="text-center link_underline resend_code">
              <i class="fa-solid fa-arrow-rotate-right"></i>Resend Code
            </a>
          </div>
          <Row>
            <Col></Col>
            <Col md={5}>
              <Button
                variant="primary"
                size="lg"
                className="login_button"
                type="submit"
                id="fblogin_button"
              >
                Verify Account
              </Button>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};
