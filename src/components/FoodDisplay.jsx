import "./FoodDisplay.css";
import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import FoodItems from "./FoodItems.jsx";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);
  const visibleItems = category === "All" ? food_list : food_list.filter((item) => item.category === category);

  return (
    <div className="food-display" id="food-display">
      <h2>Food Menu</h2>
      <div className="food-display-list">
        {visibleItems.map((item, index) => (
          <FoodItems
            key={index}
            id={item._id}
            name={item.name}
            image={item.image}
            price={item.price}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default FoodDisplay;
