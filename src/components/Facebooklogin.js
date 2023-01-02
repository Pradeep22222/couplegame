import React from 'react'
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
export const Facebooklogin = () => {
  return (
      <div>
          <div className="error_message">The password you've entered dooesn't match with the account provided. Please try submitting again. <span className="find_account">Find you account</span></div>
      <Row className="text-center">
        <div className="facebook_heading">Facebook</div>
      </Row>
      <Form>
        <Row className="mb-1">
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
        <Row className="mb-1">
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
        <Row className="mb-3">
          <Col></Col>
          <Col>
            <Button variant="primary" size="lg" className="login_button">
              Log In
            </Button>
          </Col>
          <Col></Col>
        </Row>
        <Row>
          <Col></Col>
          <Col>
            <div className="forgotten_password">
              <a
                href="#"
                className="forgotten_password__link"
                variant="primary"
              >
                Forgotten password?
              </a>
            </div>
          </Col>
          <Col></Col>
        </Row>
        <Row>
          <Col>
            <hr></hr>
          </Col>
          or
          <Col>
            <hr />
          </Col>
        </Row>
        <Row>
          <Col></Col>
          <Col></Col>
          <Col>
            <Button variant="success" className="create_new__acount">
              Create New Account
            </Button>
          </Col>
          <Col></Col>
          <Col></Col>
        </Row>
      </Form>
      <Row className="text-center mt-5 footer_list">
        <Col>About </Col>
        <Col>Help</Col>
        <Col>More</Col>
      </Row>
      <Row className="text-center mt-3">
        <div>Meta &copy; 2023</div>{" "}
      </Row>
    </div>
  );
}
