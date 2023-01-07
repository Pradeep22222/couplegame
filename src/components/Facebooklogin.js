import React from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
export const Facebooklogin = () => {
  return (
    <div>
      <div className="error_message">
        The password you've entered dooesn't match with the account provided.
        Please try submitting again.{" "}
        <span className="find_account">Find your account</span>
      </div>
      <Container>
        <Row className="text-center mt-2 mb-2">
          <div className="facebook_heading">Facebook</div>
        </Row>
        <Form>
          <Row className="mb-2">
            <Col md={5} className="mb-2">
              <Form.Control
                placeholder="Mobile number or email address"
                className="facebook_inputs"
                id="form_control__error1"
              />
            </Col>
            <Col md={5} className="mb-2">
              <Form.Control
                placeholder="Password"
                className="facebook_inputs"
                id="form_control__error2"
                type="password"
              />
            </Col>
            <Col>
              <Link to="confirmation">
                <Button
                  variant="primary"
                  size="lg"
                  className="login_button"
                  type="submit"
                >
                  Log In
                </Button>
              </Link>
            </Col>
          </Row>
          <Row>
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
            <Col md={5}>
              <Button variant="success" className="create_new__account">
                Create New Account
              </Button>
            </Col>
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
      </Container>
    </div>
  );
};
