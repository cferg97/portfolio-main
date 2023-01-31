import { Container, Row, Navbar, Nav } from "react-bootstrap";
import { BiCodeCurly, BiCode, BiCodeAlt } from "react-icons/bi";

const MyNav = () => {
  return (
    <>
      <Navbar
        fixed="top"
        className="justify-content-center custom-nav"
        variant="dark"
        style={{ width: "100vw", fontSize: "1.3rem" }}
      >
        {/* <BiCode
          style={{ fontSize: "2rem", marginRight: "1rem", color: "#aaaaaa" }}
        /> */}
        <Nav>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link disabled>|</Nav.Link>
          <Nav.Link href="#skills">Skills</Nav.Link>
          <Nav.Link disabled>|</Nav.Link>
          <Nav.Link href="#project">Projects</Nav.Link>
          <Nav.Link disabled>|</Nav.Link>
          <Nav.Link href="#link">Experience</Nav.Link>
        </Nav>
        {/* <BiCodeAlt
          style={{ fontSize: "2rem", marginLeft: "1rem", color: "#aaaaaa" }}
        /> */}
      </Navbar>
    </>
  );
};

export default MyNav;
