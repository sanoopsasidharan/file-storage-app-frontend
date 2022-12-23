import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function AppBar() {
  return (
    <Navbar bg="dark" style={{ height: "85px" }} variant={"dark"} expand="lg">
      <Container fluid>
        <Navbar.Brand style={{ marginLeft: "15px" }} href="/">
          Greeting App
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse style={{ marginRight: "15px" }} id="navbarScroll">
          <Nav className="me-auto"></Nav>
          <Nav
            className=" my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/register">Register</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppBar;
