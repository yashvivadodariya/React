import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerAsync } from "../services/actions/authAction";
import { useNavigate, Link } from "react-router-dom";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isAuth, error, loading } = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerAsync(email, password));
  };

  useEffect(() => {
    if (isAuth) navigate("/");
  }, [isAuth]);

  const styles = {
    page: {
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "#0E0D0B",
      fontFamily: "'Jost', sans-serif",
    },

    card: {
      width: "420px",
      padding: "40px",
      background: "#1A1814",
      border: "1px solid rgba(201,168,76,.25)",
      boxShadow: "0 25px 70px rgba(0,0,0,.6)",
      color: "#F5F0E8",
    },

    title: {
      fontFamily: "'Cormorant Garamond', serif",
      fontSize: "32px",
      fontWeight: "300",
      textAlign: "center",
      marginBottom: "25px",
    },

    label: {
      fontSize: "10px",
      letterSpacing: "0.25em",
      color: "#C9A84C",
      textTransform: "uppercase",
      marginBottom: "6px",
    },

    input: {
      width: "100%",
      background: "transparent",
      border: "none",
      borderBottom: "1px solid rgba(245,240,232,.2)",
      padding: "12px 0",
      color: "#F5F0E8",
      outline: "none",
      marginBottom: "20px",
      fontSize: "14px",
    },

    btn: {
      width: "100%",
      padding: "14px",
      background: "#C9A84C",
      border: "none",
      color: "#0E0D0B",
      letterSpacing: "0.2em",
      textTransform: "uppercase",
      cursor: "pointer",
      fontWeight: "500",
    },

    error: {
      color: "#ff4d4d",
      fontSize: "12px",
      marginBottom: "10px",
      textAlign: "center",
    },

    footer: {
      marginTop: "20px",
      textAlign: "center",
      fontSize: "13px",
      color: "rgba(245,240,232,.5)",
    },

    link: {
      color: "#C9A84C",
      textDecoration: "none",
    },
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>

        <div style={styles.title}>Register</div>

        {error && <div style={styles.error}>{error}</div>}

        <form onSubmit={handleSubmit}>

          <div style={styles.label}>Email</div>
          <input
            style={styles.input}
            type="email"
            placeholder="Enter Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <div style={styles.label}>Password</div>
          <input
            style={styles.input}
            type="password"
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button style={styles.btn} disabled={loading}>
            {loading ? "Please wait..." : "Register"}
          </button>

        </form>

        <div style={styles.footer}>
          Already have account?{" "}
          <Link style={styles.link} to="/login">
            Login
          </Link>
        </div>

      </div>
    </div>
  );
}

export default Register;