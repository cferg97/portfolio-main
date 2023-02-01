import { Card, Row, Col } from "react-bootstrap";

const ProjectComp = (props) => {
  return (
    <>
      <Card style={{backgroundColor: "transparent", border: 'none', color: 'black'}}>
        <Card.Img src={props.image} alt="Project image" />
        <Card.ImgOverlay>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>{props.description}</Card.Text>
        </Card.ImgOverlay>

      </Card>
    </>
  );
};

export default ProjectComp;
