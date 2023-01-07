import React from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
export const Fblogin = () => {
  return (
    <div>
      <Row className="text-center mt-3 mb-2">
        <div className="facebook_heading">Facebook</div>
      </Row>
      <Form>
        <Row className="mb-1">
          <Col></Col>
          <Col className="fblogin_inputs_parts">
            <Form.Control
              placeholder="Mobile number or email address"
              className="facebook_inputs"
              id="form_control"
              type="text"
              required
            />
          </Col>
          <Col></Col>
        </Row>
        <Row className="mb-1">
          <Col></Col>
          <Col className="fblogin_inputs_parts">
            <div className="facebook_password">
              <Form.Control
                placeholder="Password"
                className="facebook_inputs"
                id="form_control"
                required
                type="password"
              />
              <span>
                <i class="fa-sharp fa-solid fa-eye eye"></i>
              </span>
              <span>
                <i class="fa-solid fa-eye-slash eye"></i>
              </span>
            </div>
          </Col>
          <Col></Col>
        </Row>
        <Row className="mb-3">
          <Col></Col>
          <Col className="fblogin_inputs_parts">
            <Link to="facebooklogin">
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
          <Col></Col>
        </Row>
        <Row>
          <Col></Col>
          <Col className="fblogin_inputs_parts">
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
          <Col className="fblogin_inputs_parts">
            <Button variant="success" className="create_new__account">
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
};
