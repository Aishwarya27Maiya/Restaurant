import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext.jsx";
import "./placeOrder.css";

const PlaceOrder = () => {
  const { cartItems, food_list } = useContext(StoreContext);
  const subtotal = food_list.reduce((total, item) => total + item.price * (cartItems[item._id] || 0), 0);
  const deliveryFee = subtotal > 0 ? 2 : 0;
  const total = subtotal + deliveryFee;

  return (
    <form className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder="First name" required />
          <input type="text" placeholder="Last name" required />
        </div>
        <input type="email" placeholder="Email address" required />
        <input type="text" placeholder="Street" required />
        <div className="multi-fields">
          <input type="text" placeholder="City" required />
          <input type="text" placeholder="State" required />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder="Zip code" required />
          <input type="text" placeholder="Country" required />
        </div>
        <input type="tel" placeholder="Phone" required />
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Order Summary</h2>
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
          <button type="submit" disabled={subtotal === 0}>
            Proceed to Payment
          </button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
