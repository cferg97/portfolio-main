import { Container, Row, Col, Button, Form, FormGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

const ContactForm = () => {
  return (
    <Container fluid className="contact-section">
      <Row className="justify-content-center" style={{ height: "100%" }}>
        <Col className="justify-content-center" style={{ height: "100%" }}>
          <Container className="text-center mt-3">
            <h1 style={{ color: "white" }}>Contact Me</h1>

            <Container fluid>
              <form
                target="_blank"
                action="https://formsubmit.co/main@catrionaferguson.co.uk"
                method="POST"
              >
                <FormGroup>
                  <Row>
                    <Col>
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Full Name"
                        required
                      />
                    </Col>
                    <Col>
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Email Address"
                        required
                      />
                    </Col>
                  </Row>
                </FormGroup>
                <FormGroup className="mt-2">
                  <textarea
                    placeholder="Your Message"
                    className="form-control"
                    name="message"
                    rows="10"
                    required
                  ></textarea>
                </FormGroup>
                <Button className="mt-2" type="submit" variant="info">
                  Submit Form
                </Button>
                <Link to="/">
                  <Button className="mt-2" variant="primary">
                    Back to Main
                  </Button>
                </Link>
              </form>
            </Container>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactForm;
