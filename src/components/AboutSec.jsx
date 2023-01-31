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
                    style={{ borderRadius: "100%", height: "15rem", marginRight: "1rem" }}
                    
                    src="https://res.cloudinary.com/cfcloudstorage/image/upload/v1675156396/media/avatar_uvtjvc.jpg"
                    alt=""
                  />
                </Container>
              </Col>
              <Col className="text-center p-4">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laudantium deleniti laborum debitis magni accusamus mollitia
                  ea earum beatae rem! Obcaecati, explicabo. Nesciunt totam,
                  nobis eius quaerat enim soluta incidunt libero.
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
