import { Container, Nav, Navbar } from "react-bootstrap";
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
      <style>{`
        .navbar-custom {
          background: rgba(13, 13, 13, 0.95);
          backdrop-filter: blur(10px);
          padding: 14px 40px;
          border-bottom: 1px solid rgba(255,255,255,0.06);
          position: sticky;
          top: 0;
          z-index: 1000;
        }

        .logo {
          font-size: 20px;
          font-weight: 900;
          color: #fff !important;
          letter-spacing: 1px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .logo span {
          color: #e50914;
        }

        .nav-link {
          color: #bbb !important;
          margin-right: 16px;
          font-size: 14px;
          font-weight: 500;
          transition: 0.2s;
        }

        .nav-link:hover {
          color: #fff !important;
        }

        .btn-login {
          border: 1px solid rgba(255,255,255,0.2);
          color: #fff;
          padding: 6px 14px;
          text-decoration: none;
          margin-left: 10px;
          border-radius: 6px;
          font-size: 13px;
          transition: 0.2s;
        }

        .btn-login:hover {
          background: #e50914;
          border-color: #e50914;
        }

        .logout-btn {
          border: 1px solid #e50914;
          color: #fff;
          padding: 6px 14px;
          background: transparent;
          margin-left: 10px;
          border-radius: 6px;
          font-size: 13px;
          transition: 0.2s;
        }

        .logout-btn:hover {
          background: #e50914;
        }
      `}</style>

      <Navbar expand="lg" className="navbar-custom">
        <Container>

          {/* LOGO */}
          <Navbar.Brand as={Link} to="/" className="logo">
            ▶ <span>STREAM</span>IT
          </Navbar.Brand>

          <Navbar.Toggle style={{ background: "#fff" }} />

          <Navbar.Collapse>

            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>

              {isAuth && (
                <>
                  <Nav.Link as={Link} to="/add-movie">Add Movie</Nav.Link>
                  <Nav.Link as={Link} to="/movie-list">Movies</Nav.Link>
                </>
              )}
            </Nav>

            {isAuth ? (
              <button onClick={handleLogout} className="logout-btn">
                Logout
              </button>
            ) : (
              <>
                <Link to="/login" className="btn-login">Login</Link>
              </>
            )}

          </Navbar.Collapse>

        </Container>
      </Navbar>
    </>
  );
}

export default Header;