import {
  Container,
  Row,
  Col,
  Image,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";

const Skills = () => {
  return (
    <Container
      fluid
      className="skills-section justify-content-center pt-3"
      id="skills"
    >
      <Container className="text-center">
        <h1>Skills</h1>
        <hr />
        <Row className="justify-content-center mt-4">
          <OverlayTrigger
            key="html"
            placement="top"
            overlay={<Tooltip id={"html"}>HTML</Tooltip>}
          >
            <Image
              className="skill-icon"
              src="https://res.cloudinary.com/cfcloudstorage/image/upload/v1675206227/icons/HTML_vc8aab.svg"
            />
          </OverlayTrigger>

          <OverlayTrigger
            key="css"
            placement="top"
            overlay={<Tooltip id={"css"}>CSS</Tooltip>}
          >
            <Image
              className="skill-icon"
              src="https://res.cloudinary.com/cfcloudstorage/image/upload/v1675206227/icons/CSS_asozpg.svg"
            />
          </OverlayTrigger>
          <OverlayTrigger
            key="js"
            placement="top"
            overlay={<Tooltip id={"js"}>JavaScript</Tooltip>}
          >
            <Image
              className="skill-icon"
              src="https://res.cloudinary.com/cfcloudstorage/image/upload/v1675206227/icons/JavaScript_em95p5.svg"
            />
          </OverlayTrigger>
          <OverlayTrigger
            key="react"
            placement="top"
            overlay={<Tooltip id={"react"}>React.js</Tooltip>}
          >
            <Image
              className="skill-icon"
              src="https://res.cloudinary.com/cfcloudstorage/image/upload/v1675206230/icons/React-Dark_fcgj0e.svg"
            />
          </OverlayTrigger>
          <OverlayTrigger
            key="redux"
            placement="top"
            overlay={<Tooltip id={"redux"}>React Redux</Tooltip>}
          >
            <Image
              className="skill-icon"
              src="https://res.cloudinary.com/cfcloudstorage/image/upload/v1675206230/icons/Redux_z2sjis.svg"
            />
          </OverlayTrigger>
          <OverlayTrigger
            key="node"
            placement="top"
            overlay={<Tooltip id={"node"}>Node.js</Tooltip>}
          >
            <Image
              className="skill-icon"
              src="https://res.cloudinary.com/cfcloudstorage/image/upload/v1675206229/icons/NodeJS-Dark_twgg7w.svg"
            />
          </OverlayTrigger>
          <OverlayTrigger
            key="express"
            placement="top"
            overlay={<Tooltip id={"express"}>ExpressJS</Tooltip>}
          >
            <Image
              className="skill-icon"
              src="https://res.cloudinary.com/cfcloudstorage/image/upload/v1675206227/icons/ExpressJS-Dark_pnaxbn.svg"
            />
          </OverlayTrigger>
          <OverlayTrigger
            key="mongo"
            placement="top"
            overlay={<Tooltip id={"mongo"}>MongoDB</Tooltip>}
          >
            <Image
              className="skill-icon"
              src="https://res.cloudinary.com/cfcloudstorage/image/upload/v1675206227/icons/MongoDB_jkoclz.svg"
            />
          </OverlayTrigger>
          <OverlayTrigger
            key="python"
            placement="top"
            overlay={<Tooltip id={"python"}>Python</Tooltip>}
          >
            <Image
              className="skill-icon"
              src="https://res.cloudinary.com/cfcloudstorage/image/upload/v1675206230/icons/Python-Dark_gybwdu.svg"
            />
          </OverlayTrigger>
          <OverlayTrigger
            key="linux"
            placement="top"
            overlay={<Tooltip id={"linux"}>Linux</Tooltip>}
          >
            <Image
              className="skill-icon"
              src="https://res.cloudinary.com/cfcloudstorage/image/upload/v1675206227/icons/Linux-Dark_an8kco.svg"
            />
          </OverlayTrigger>
        </Row>
        <Row className="mt-4 mb-4">
          <h5>Currently learning...</h5>
        </Row>
        <Row className="justify-content-center">
          <OverlayTrigger
            key="typescript"
            placement="top"
            overlay={<Tooltip id={"ts"}>TypeScript</Tooltip>}
          >
            <Image
              className="skill-icon"
              src="https://res.cloudinary.com/cfcloudstorage/image/upload/v1675283818/icons/TypeScript_xcxbb0.svg"
            />
          </OverlayTrigger>
          <OverlayTrigger
            key="postgres"
            placement="top"
            overlay={<Tooltip id={"postres"}>PostgreSQL</Tooltip>}
          >
            <Image
              className="skill-icon"
              src="https://res.cloudinary.com/cfcloudstorage/image/upload/v1675283818/icons/PostgreSQL-Dark_pd6ltq.svg"
            />
          </OverlayTrigger>
        </Row>
      </Container>
    </Container>
  );
};

export default Skills;
