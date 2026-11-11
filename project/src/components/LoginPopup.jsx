import { assets } from "../assets/assets.js";
import "./LoginPopup.css";

const LoginPopup = ({ setShowLogin }) => {
  return (
    <div className="login-popup">
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>Sign In</h2>
          <img src={assets.cross_icon} alt="close" onClick={() => setShowLogin(false)} />
        </div>
        <div className="login-popup-inputs">
          <input type="email" placeholder="Email address" required />
          <input type="password" placeholder="Password" required />
        </div>
        <button type="submit">Sign In</button>
        <p className="login-popup-note">
          New to Tomato? <span>Create account</span>
        </p>
      </form>
    </div>
  );
};

export default LoginPopup;
