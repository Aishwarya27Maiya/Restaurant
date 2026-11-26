import "./Menu.css";
import { menu_list } from "../assets/assets.js";

const Menu = ({ category, setCategory }) => {
  return (
    <div className="menu" id="menu">
      <h1>Explore Our Vast Menu Options</h1>
      <p className="menu-text">What your mood today????</p>
      <div className="menu-list">
        {menu_list.map((item, index) => (
          <div
            onClick={() => setCategory((prev) => (prev === item.menu_name ? "All" : item.menu_name))}
            className="menu-list-item"
            key={index}
          >
            <img className={category === item.menu_name ? "active" : ""} src={item.menu_image} alt="food" />
            <p>{item.menu_name}</p>
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
};

export default Menu;
