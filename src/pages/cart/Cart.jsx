import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext.jsx";
import "./Cart.css";

const Cart = () => {
  const { cartItems, food_list, addToCart, removeFromCart } = useContext(StoreContext);
  const navigate = useNavigate();

  const cartProducts = food_list.filter((item) => cartItems[item._id] == item._id);
  const subtotal = cartProducts.reduce((total, item) => total + item.price * cartItems[item._id], 0);
  const deliveryFee = subtotal > 0 ? 2 : 0;
  const total = subtotal + deliveryFee;

  return (
    <div className="cart">
      <h1>Your Cart</h1>
      {cartProducts.length === 0 ? (
        <p className="cart-empty">Your cart is empty. Add food items from the menu to continue.</p>
      ) : (
        <>
          <div className="cart-items">
            <div className="cart-items-header">
              <p>Item</p>
              <p>Name</p>
              <p>Price</p>
              <p>Qty</p>
              <p>Total</p>
              <p>Remove</p>
            </div>
            {cartProducts.map((item) => (
              <div className="cart-items-row" key={item._id}>
                <img src={item.image} alt={item.name} />
                <p data-label="Name">{item.name}</p>
                <p data-label="Price">${item.price}</p>
                <div className="cart-qty" data-label="Quantity">
                  <button type="button" onClick={() => removeFromCart(item._id)}>
                    −
                  </button>
                  <span>{cartItems[item._id]}</span>
                  <button type="button" onClick={() => addToCart(item._id)}>
                    +
                  </button>
                </div>
                <p data-label="Total">${item.price * cartItems[item._id]}</p>
                <button className="cart-remove" type="button" onClick={() => removeFromCart(item._id)}>
                  x
                </button>
              </div>
            ))}
          </div>

          <div className="cart-summary-wrapper">
            <div className="cart-total">
              <h2>Cart Totals</h2>
              <div>
                <p>Subtotal</p>
                <p>${subtotal}</p>
              </div>
              <div>
                <p>Delivery Fee</p>
                <p>${deliveryFee}</p>
              </div>
              <div className="cart-total-final">
                <p>Total</p>
                <p>${total}</p>
              </div>
              <button type="button" onClick={() => navigate("/placeOrder")}>
                Proceed to Checkout
              </button>
            </div>
            <div className="cart-promocode">
              <p>If you have a promo code, enter it here</p>
              <div>
                <input type="text" placeholder="Promo code" />
                <button type="button">Apply</button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
