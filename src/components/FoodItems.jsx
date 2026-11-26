import { assets } from "../assets/assets.js";
import "./FoodItems.css";
import {useContext} from "react";
import {StoreContext} from "../context/StoreContext.jsx";

const FoodItems = ({id, name, image, price, description }) => {
    let {addToCart,removeFromCart,cartItems}=useContext(StoreContext);
  return (
    <div className="foodItems">
        <div className="foodItems-data">
            <img className ="foodItems-data-img" src={image} alt="food" />
            {
                !cartItems[id]
                    ?
                <img className="add" src={assets.add_icon_white} alt="plus"
                onClick={()=>addToCart(id)}/>
                    :
                <div className="foodItems-counter">
                    <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="add"/>
                    <p>{cartItems[id]}</p>
                    <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="subtract"/> 
                </div>
            }
        </div>
        <div className="foodItems-details">
            <div className="foodItems-rating">
                <p>{name}</p>  
                <img src={assets.rating_starts} alt="rating" />
            </div>
            <p className="foodItems-des">{description}</p>
            <p className="foodItems-price">${price}</p>
            
        </div>
    </div>
  );
};

export default FoodItems;
