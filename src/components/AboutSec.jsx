/* eslint-disable react/jsx-no-target-blank */
import { Container, Row, Col, Image } from "react-bootstrap";

const About = () => {
  return (
    <Container fluid className="about-section" id="about">
      <Row className="justify-content-center" style={{ height: "100%" }}>
        <Col className="justify-content-center" style={{ height: "100%" }}>
          <Container className="text-center mt-2">
            <h1>About</h1>
            <hr />
            <Row style={{ height: "100%" }}>
              <Col
                md={4}
                style={{ height: "100%" }}
                className="justify-content-center"
              >
                <Container>
                  <Image
                    className="image-me"
                    style={{
                      borderRadius: "100%",
                      height: "15rem",
                      marginRight: "1rem",
                    }}
                    src="https://res.cloudinary.com/cfcloudstorage/image/upload/v1675156396/media/avatar_uvtjvc.jpg"
                    alt="itsa me"
                  />
                </Container>
              </Col>
              <Col className="p-4">
                <p>
                  Full Stack Web Developer hailing from Scotland. Can currently
                  be found somewhere near Cambridge, UK.
                  <hr />
                  Graduated with BEng Computer Systems & Networks, in the
                  process of finishing a 6 month long bootcamp with{" "}
                  <a
                    target="_blank"
                    className="custom-link"
                    href="https://epicode.com/en/"
                  >
                    Epicode!
                  </a>
                </p>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
