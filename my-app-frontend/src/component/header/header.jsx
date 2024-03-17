import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Form,
  Button,
} from "react-bootstrap";
import '../../style/App.css';
import { Outlet, Link } from "react-router-dom";

function Header(title) {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="/">{title.title}</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link as={Link} to="/">Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about">About
              </Nav.Link>
              <Nav.Link as={Link} to="/contactus">Contact Us
              </Nav.Link>
              <div className="d-flex flex-row-reverse bd-highlight">
                <NavDropdown title="Profile" id="navbarScrollingDropdown">
                  <NavDropdown.Item as={Link} to="/register">Register
                    {/* <Link to="/register">Register</Link> */}
                  </NavDropdown.Item>
                  <NavDropdown.Item  as={Link} to="/login">login
                    {/* <Link to="/login">login</Link> */}
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} href="">LogOut</NavDropdown.Item>
                </NavDropdown>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
