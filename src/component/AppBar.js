import { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import AuthContext from "../store/AuthContextProvider";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";
const cookies = new Cookies();

function AppBar() {
  const { userlogged, getUserLogged } = useContext(AuthContext);
  const navigate = useNavigate();
  const clearCookies = async () => {
    cookies.remove("userTocken", { path: "/" });
    await getUserLogged();
    navigate("/");
  };

  return (
    <Navbar bg="dark" style={{ height: "85px" }} variant={"dark"} expand="lg">
      <Container fluid>
        <Navbar.Brand style={{ marginLeft: "15px" }} href="/">
          File store
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
            {userlogged && (
              <Nav.Link onClick={() => navigate("/fileListing")}>
                Files
              </Nav.Link>
            )}
            {!userlogged && (
              <Nav.Link onClick={() => navigate("/register")}>
                Register
              </Nav.Link>
            )}
            {!userlogged && (
              <Nav.Link onClick={() => navigate("/login")}>Login</Nav.Link>
            )}
            {userlogged && <Nav.Link onClick={clearCookies}>Logout</Nav.Link>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppBar;
