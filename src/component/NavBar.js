import { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";
import AdminAuthContext from "../store/AdminAuthContextProvider";
import axios from "../axios";
const cookies = new Cookies();

function NavBar() {
  const { adminLogged, getAdminLogged } = useContext(AdminAuthContext);
  const navigate = useNavigate();

  const clearCookies = async () => {
    try {
      await axios.post("/api/admin/logout").then(async (res) => {
        console.log(res);
        await getAdminLogged();
        navigate("/admin/login");
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Navbar
      bg="dark"
      style={{ height: "85px", marginBottom: "10px" }}
      variant={"dark"}
      expand="lg"
    >
      <Container fluid>
        <Navbar.Brand style={{ marginLeft: "15px" }} href="/">
          File store Admin
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse style={{ marginRight: "15px" }} id="navbarScroll">
          <Nav className="me-auto"></Nav>
          <Nav
            className=" my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/admin">Home</Nav.Link>

            {adminLogged && <Nav.Link onClick={clearCookies}>Logout</Nav.Link>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
