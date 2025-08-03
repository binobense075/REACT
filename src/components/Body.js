import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  let [myRestaurantList, setMyRestaurantList] = useState(restaurantList);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = myRestaurantList.filter(
              (value) => value.data.avgRating > 3
            );
            setMyRestaurantList(filteredList);
          }}
        >
          Top rated Restaurant
        </button>
      </div>
      <div className="restro-container">
        {myRestaurantList.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} {...restaurant.data} />
        ))}
      </div>
    </div>
  );
};

export default Body;
