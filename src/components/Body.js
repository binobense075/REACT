import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  let [myRestaurantList, setMyRestaurantList] = useState([]);
  let [myFilteredList, setMyFilteredList] = useState([]);

  let [searchtext, setSearchtext] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9628669&lng=77.57750899999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const jsonData = await data.json();

    setMyRestaurantList(
      // Optional Chaining
      jsonData?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setMyFilteredList(
      jsonData?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  console.log("rendered");

  // Conditional Rendering
  if (myRestaurantList.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchtext}
            onChange={(e) => setSearchtext(e.target.value)}
          ></input>
          <button
            className="search-btn"
            onClick={() => {
              const searchValue = myRestaurantList.filter((res) =>
                res.info.name
                  .toLowerCase()
                  .trim()
                  .includes(searchtext.toLowerCase())
              );
              console.log(searchValue);
              setMyFilteredList(searchValue);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = myRestaurantList.filter(
              (value) => value.info.avgRating > 4.5
            );
            setMyFilteredList(filteredList);
          }}
        >
          Top rated Restaurant
        </button>
      </div>
      <div className="restro-container">
        {myFilteredList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} {...restaurant.info} />
        ))}
      </div>
    </div>
  );
};

export default Body;
