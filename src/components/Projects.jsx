/* eslint-disable react/jsx-no-target-blank */
import { Container, Row, Col, Image, Figure, Badge } from "react-bootstrap";
import ProjectComp from "./Proj-Comp";

const Projects = () => {
  return (
    <Container fluid className="projects-section" id="projects">
      <Row className="justify-content-center" style={{ height: "100%" }}>
        <Col className="justify-content-center" style={{ height: "100%" }}>
          <Container className="text-center mt-3">
            <h1>Projects</h1>
            <hr />

            <Row className="justify-content-center" style={{ height: "100%" }}>
              <Col xs={12} md={6}>
                <Figure>
                  <Image
                    fluid
                    src="https://res.cloudinary.com/cfcloudstorage/image/upload/v1675286136/project%20screenshots/Docs_y5zdvs.png"
                  />
                  <figcaption className="mt-2">
                    <h4>Google Docs Clone</h4>
                    <a target="_blank" href="https://github.com/cferg97/google-docs-clone-backend">
                      <Badge bg="info">
                        <h5 className="my-auto">Code</h5>
                      </Badge>
                    </a>
                    <hr />
                    <p className="custom-desc">
                      Made with React, MongoDB & socket.io
                      <br />
                      Stores documents within MongoDB and utilities socket.io to
                      allow
                      <br />
                      multiple users to collaborate on the same document in real
                      time.
                    </p>
                  </figcaption>
                </Figure>
              </Col>
              <Col>
                <Figure>
                  <Image
                    fluid
                    src="https://res.cloudinary.com/cfcloudstorage/image/upload/v1675286136/project%20screenshots/LinkedIn_xvos4y.png"
                  />
                  <figcaption className="mt-2">
                    <h4>LinkedIn Clone</h4>
                    <a target="_blank" href="https://github.com/annoinspace/LinkedIn-Fe-Template">
                      <Badge bg="info">
                        <h5 className="my-auto">Code</h5>
                      </Badge>
                    </a>
                    <hr/>
                    <p className="custom-desc">Built with React, Redux, MongoDB and ExpressJS.
                        <br/>
                        This was a collaborative effort as part of a group project.
                        Users are able to sign up, log in, edit their profile details,
                        create posts and create comments on those posts. 
                    </p>
                  </figcaption>
                </Figure>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default Projects;
