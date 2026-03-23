import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";

function Header() {
  return (
    <Navbar expand="lg" bg="light">
      <Container>

        <Navbar.Brand as={Link} to="/">NOMA</Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

            <Nav.Link as={Link} to="/">Home</Nav.Link>

            <NavDropdown title="Menu" id="basic-nav-dropdown">

              <NavDropdown.Item as={Link} to="/add-menu">
                Add Menu
              </NavDropdown.Item>

              <NavDropdown.Item as={Link} to="/menu-list">
                View Menu
              </NavDropdown.Item>

            </NavDropdown>

          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}

export default Header;