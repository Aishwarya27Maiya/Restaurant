import { useContext, useState } from "react";
import { assets } from "../assets/assets.js";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Nav.css";
import { StoreContext } from "../context/StoreContext.jsx";

function Nav({ setShowLogin }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartItems } = useContext(StoreContext);
  const location = useLocation();
  const navigate = useNavigate();
  const totalCartItems = Object.values(cartItems).reduce((sum, qty) => sum + qty, 0);

  const handleSectionNavigation = (sectionId) => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: sectionId } });
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMenuOpen(false);
  };

  return (
    <div className="nav">
      <Link className="nav-logo-wrap" to="/">
        <img className="nav-logo" src={assets.logo} alt="Logo" />
      </Link>

      <ul className={`nav-menu ${menuOpen ? "open" : ""}`}>
        <li onClick={() => handleSectionNavigation("home")}>Home</li>
        <li onClick={() => handleSectionNavigation("menu")}>Menu</li>
        <li onClick={() => handleSectionNavigation("app-download")}>Mobile App</li>
        <li onClick={() => handleSectionNavigation("footer")}>Contact Us</li>
      </ul>

      <div className="nav-right">
        <img src={assets.search_icon} alt="search icon" />
        <div className="nav-cart">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="cart" />
          </Link>
          {totalCartItems > 0 && <div className="dot"></div>}
        </div>
        <button type="button" onClick={() => setShowLogin(true)}>
          Sign In
        </button>
        <button className="mobile-menu-btn" type="button" onClick={() => setMenuOpen((prev) => !prev)}>
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>
    </div>
  );
}

export default Nav;
