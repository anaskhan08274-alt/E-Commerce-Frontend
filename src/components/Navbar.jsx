import { useNavigate, Link } from "react-router-dom";
import "../Navbar.css";

export function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/form");
  };

  const isLoggedIn = !!localStorage.getItem("token");

  return (
    <nav className="navbar">
      <div className="logo">Zeba Brands</div>

    

      <div className="auth-btn">
        {isLoggedIn ? (
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        ) : (
          <Link to="/form">
            <button className="login-btn">Login</button>
          </Link>
        )}
      </div>
    </nav>
  );
}
