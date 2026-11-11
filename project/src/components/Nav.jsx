import { useState } from "react";
import { assets } from "../assets/assets.js";
import "./Nav.css";

function Nav() {
  const [underline, setUnderline] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { key: "home", label: "Home" },
    { key: "menu", label: "Menu" },
    { key: "mobile-app", label: "Mobile-app" },
    { key: "contact", label: "Contact Us" },
  ];

  const handleNavClick = (key) => {
    setUnderline(key);
    setIsMenuOpen(false);
  };

  return (
    <div className={`nav ${isMenuOpen ? "open" : ""}`}>
      <img src={assets.logo} alt="Logo" className="nav-logo" />

      <button
        type="button"
        className="nav-toggle"
        aria-label="Toggle navigation menu"
        aria-expanded={isMenuOpen}
        onClick={() => setIsMenuOpen((prev) => !prev)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul className="nav-menu">
        {navItems.map((item) => (
          <li
            key={item.key}
            onClick={() => handleNavClick(item.key)}
            className={underline === item.key ? "active" : ""}
          >
            {item.label}
          </li>
        ))}
      </ul>

      <div className="nav-right">
        <img src={assets.search_icon} alt="search icon" className="nav-icon" />
        <div className="nav-cart">
          <img src={assets.basket_icon} alt="cart" className="nav-icon" />
          <div className="dot"></div>
        </div>
        <button type="button" className="nav-signin">Sign In</button>
      </div>
    </div>
  );
}

export default Nav;
