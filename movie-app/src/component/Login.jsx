import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginAsync } from "../services/actions/authAction";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isAuth, error, loading } = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginAsync(email, password));
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
      background: "#0d0d0d",
      fontFamily: "Arial, sans-serif",
      position: "relative",
      overflow: "hidden",
    },

    bgGlow: {
      position: "absolute",
      width: "400px",
      height: "400px",
      background: "#e50914",
      filter: "blur(180px)",
      opacity: 0.25,
      top: "10%",
      left: "30%",
    },

    card: {
      width: "380px",
      padding: "40px",
      background: "rgba(20,20,20,0.85)",
      border: "1px solid rgba(255,255,255,0.08)",
      boxShadow: "0 20px 60px rgba(0,0,0,0.8)",
      color: "#fff",
      borderRadius: "12px",
      backdropFilter: "blur(10px)",
      zIndex: 2,
    },

    title: {
      fontSize: "30px",
      fontWeight: "700",
      textAlign: "center",
      marginBottom: "25px",
      letterSpacing: "1px",
    },

    highlight: {
      color: "#e50914",
    },

    label: {
      fontSize: "11px",
      letterSpacing: "0.15em",
      color: "#aaa",
      textTransform: "uppercase",
      marginBottom: "6px",
      marginTop: "15px",
    },

    input: {
      width: "100%",
      background: "transparent",
      border: "none",
      borderBottom: "1px solid rgba(255,255,255,0.2)",
      padding: "10px 0",
      color: "#fff",
      outline: "none",
      fontSize: "14px",
      transition: "0.3s",
    },

    inputFocus: {
      borderBottom: "1px solid #e50914",
    },

    btn: {
      width: "100%",
      padding: "12px",
      background: "#e50914",
      border: "none",
      color: "#fff",
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      cursor: "pointer",
      marginTop: "25px",
      borderRadius: "6px",
      fontWeight: "600",
      transition: "0.3s",
    },

    btnHover: {
      background: "#ff1a1a",
    },

    error: {
      color: "#ff4d4d",
      fontSize: "12px",
      textAlign: "center",
      marginBottom: "10px",
    },

    footer: {
      marginTop: "20px",
      textAlign: "center",
      fontSize: "13px",
      color: "#aaa",
    },

    link: {
      color: "#e50914",
      textDecoration: "none",
      fontWeight: "600",
    },
  };

  return (
    <div style={styles.page}>

      {/* glow background */}
      <div style={styles.bgGlow}></div>

      <div style={styles.card}>

        <div style={styles.title}>
          STREAM<span style={styles.highlight}>IT</span> LOGIN
        </div>

        {error && <div style={styles.error}>{error}</div>}

        <form onSubmit={handleSubmit}>

          <div style={styles.label}>Email</div>
          <input
            style={styles.input}
            type="email"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <div style={styles.label}>Password</div>
          <input
            style={styles.input}
            type="password"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button style={styles.btn} disabled={loading}>
            {loading ? "Signing in..." : "Login"}
          </button>

        </form>

        <div style={styles.footer}>
          Don’t have an account?{" "}
          <Link style={styles.link} to="/register">
            Register
          </Link>
        </div>

      </div>
    </div>
  );
}

export default Login;