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

        <Navbar.Toggle />
        <Navbar.Collapse>

          <Nav className="me-auto">

            <Nav.Link as={Link} to="/">Home</Nav.Link>

            {/* STARTER */}
            <NavDropdown title="Starter">
              <NavDropdown.Item as={Link} to="/add-starter">Add Starter</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/starter-list">View Starter</NavDropdown.Item>
            </NavDropdown>

            {/* MAIN COURSE */}
            <NavDropdown title="Main Course">
              <NavDropdown.Item as={Link} to="/add-main">Add Main</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/main-list">View Main</NavDropdown.Item>
            </NavDropdown>

            {/* DRINK */}
            <NavDropdown title="Drink">
              <NavDropdown.Item as={Link} to="/add-drink">Add Drink</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/drink-list">View Drink</NavDropdown.Item>
            </NavDropdown>

            {/* DESSERT */}
            <NavDropdown title="Dessert">
              <NavDropdown.Item as={Link} to="/add-dessert">Add Dessert</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/dessert-list">View Dessert</NavDropdown.Item>
            </NavDropdown>

          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;