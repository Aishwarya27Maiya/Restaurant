import Nav from "./components/Nav.jsx";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Cart from "./pages/cart/Cart.jsx";
import PlaceOrder from "./pages/placeOrder/PlaceOrder.jsx";
import Footer from "./components/Footer.jsx";
import LoginPopup from "./components/LoginPopup.jsx";
import { useState } from "react";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {showLogin && <LoginPopup setShowLogin={setShowLogin} />}
      <div className="app">
        <Nav setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/placeOrder" element={<PlaceOrder />} />
        </Routes>
        <Footer />
      </div>
      
    </>
  );
};

export default App;
