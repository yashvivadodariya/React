import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <style>
        {`
        :root {
          --gold: #C9A84C;
          --dark: #0E0D0B;
          --dark2: #1A1814;
          --cream: #F5F0E8;
        }

        .noma-nav {
          background: rgba(14,13,11,.95) !important;
          padding: 20px 60px;
        }

        .nav-logo {
          font-size: 26px;
          letter-spacing: .18em;
          color: var(--cream) !important;
        }

        .nav-links .nav-link {
          font-size: 11px;
          letter-spacing: .22em;
          text-transform: uppercase;
          color: rgba(245,240,232,.65) !important;
          margin-right: 20px;
        }

        .nav-links .nav-link:hover {
          color: var(--gold) !important;
        }

        .nav-cta {
          font-size: 10px;
          letter-spacing: .22em;
          text-transform: uppercase;
          color: var(--gold);
          border: 1px solid var(--gold);
          padding: 8px 18px;
          margin-left: 20px;
          text-decoration: none;
        }

        .nav-cta:hover {
          background: var(--gold);
          color: var(--dark);
        }

        /* Dropdown */
        .custom-dropdown .dropdown-menu {
          background: var(--dark2);
          border: 1px solid rgba(245,240,232,.1);
        }

        .custom-dropdown .dropdown-item {
          font-size: 11px;
          color: rgba(245,240,232,.6);
        }

        .custom-dropdown .dropdown-item:hover {
          background: rgba(201,168,76,.1);
          color: var(--gold);
        }
      `}
      </style>

      <Navbar expand="lg" className="noma-nav">

        <Container>

          <Navbar.Brand as={Link} to="/" className="nav-logo">
            NOMA
          </Navbar.Brand>

          <Navbar.Toggle className="bg-light" />

          <Navbar.Collapse>

            <Nav className="ms-auto nav-links">

              <Nav.Link as={Link} to="/">Home</Nav.Link>

              <NavDropdown title="Starter" className="custom-dropdown">
                <NavDropdown.Item as={Link} to="/add-starter">Add Starter</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/starter-list">View Starter</NavDropdown.Item>
              </NavDropdown>
              
              <NavDropdown title="Drink" className="custom-dropdown">
                <NavDropdown.Item as={Link} to="/add-drink">Add Drink</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/drink-list">View Drink</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Dessert" className="custom-dropdown">
                <NavDropdown.Item as={Link} to="/add-dessert">Add Dessert</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/dessert-list">View Dessert</NavDropdown.Item>
              </NavDropdown>

            </Nav>

            <Link to="/" className="nav-cta">
              BOOK TABLE
            </Link>

          </Navbar.Collapse>

        </Container>
      </Navbar>
    </>
  );
}

export default Header;