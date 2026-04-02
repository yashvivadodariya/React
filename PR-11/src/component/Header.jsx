import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutAsync } from "../services/actions/authAction";

function Header() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isAuth } = useSelector(state => state.auth);

  const handleLogout = () => {
    dispatch(logoutAsync());
    navigate("/login");
  };

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

/* NAVBAR */
.noma-nav {
  background: rgba(14,13,11,.95) !important;
  padding: 20px 60px;
}

/* LOGO */
.nav-logo {
  font-size: 26px;
  letter-spacing: .18em;
  color: var(--cream) !important;
}

/* LINKS */
.nav-links .nav-link {
  font-size: 11px;
  letter-spacing: .22em;
  text-transform: uppercase;
  color: rgba(245,240,232,.65) !important;
  margin-right: 20px;
  transition: 0.2s;
}

.nav-links .nav-link:hover {
  color: var(--gold) !important;
}

/* LOGIN BUTTON */
.nav-cta {
  font-size: 10px;
  letter-spacing: .22em;
  text-transform: uppercase;
  color: var(--gold);
  border: 1px solid var(--gold);
  padding: 8px 18px;
  margin-left: 20px;
  text-decoration: none;
  background: transparent;
  transition: 0.3s;
}

.nav-cta:hover {
  background: var(--gold);
  color: var(--dark);
}

.logout-btn {
  margin-left: 15px;
  border: 1px solid var(--gold);
  color: var(--gold);
  padding: 8px 18px;
  font-size: 10px;
  letter-spacing: .22em;
  text-transform: uppercase;
  background: transparent;
  transition: all .25s ease;
}

.logout-btn:hover {
  background: var(--gold);
  color: var(--dark);
  box-shadow: 0 0 10px rgba(201,168,76,.5);
}

/* DROPDOWN */
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

              {isAuth && (
                <>
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
                </>
              )}

            </Nav>

            {isAuth ? (
              <button onClick={handleLogout} className="logout-btn">
                LOGOUT
              </button>
            ) : (
              <Link to="/login" className="nav-cta">
                LOGIN
              </Link>
            )}

          </Navbar.Collapse>

        </Container>
      </Navbar>
    </>
  );
}

export default Header;