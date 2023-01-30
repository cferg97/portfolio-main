/* eslint-disable react/jsx-no-target-blank */
import { Col, Container, Image, Row } from "react-bootstrap";
import { VscGithub } from "react-icons/vsc";
import { BsLinkedin } from "react-icons/bs";
import { MdAlternateEmail } from "react-icons/md";
import { useState } from "react";
import { useEffect } from "react";

const Top = () => {
  const [mousePos, setMousePos] = useState({ x: null, y: null });

  useEffect(() => {
    const updateMousePos = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMousePos);

    return () => {
      window.removeEventListener("mousemove", updateMousePos);
    };
  }, []);

  const styles = {
    position: "absolute",
    transform: `translate(calc(${mousePos.x}px - 45%), calc(${mousePos.y}px - 50%))`,
  };

  return (
    <Container fluid className="p-0 m-0 top-custom">
      <div className="gradient-overlay" style={styles}></div>
      <Row className="justify-content-center">
        <Col
          md={6}
          className="mx-auto justify-content-center"
          style={{ height: "93vh" }}
        >
          <Container
            className="d-flex flex-column text-center justify-content-center"
            style={{ height: "100%" }}
          >
            <h1 className="intro-text">Catriona Ferguson</h1>
            <hr />
            <h1 className="intro-text">Full Stack Web Developer</h1>
          </Container>
        </Col>
      </Row>

      <Container fluid className="mb-2">
        <Row className="mt-auto">
          <Container
            fluid
            className="d-flex justify-content-evenly"
            style={{ fontSize: "2rem" }}
          >
            <a target="_blank" href="https://github.com/cferg97">
              <VscGithub className="git-icon" />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/catriona-ferguson-4871a3134/"
            >
              <BsLinkedin className="linked-icon" />
            </a>
            <a target="_blank" href="mailto:c.ferguson1997@gmail.com">
              <MdAlternateEmail className="email-icon" />
            </a>
          </Container>
        </Row>
      </Container>
    </Container>
  );
};

export default Top;
