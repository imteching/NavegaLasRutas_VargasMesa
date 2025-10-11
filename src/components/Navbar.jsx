import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import "../styles/styles.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="navbar-logo">Bags 4 fun girls</h1>
      <div className="navbar-links">
        <Link to="/">Inicio</Link>
        <Link to="/category/mini">Minis</Link>
        <Link to="/category/bols">Bolsos</Link>
        <Link to="/category/form">Formas</Link>
      </div>
      <CartWidget />
    </nav>
  );
}

export default Navbar;
