import RestaurantCard, { withPromotedlabel } from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  let [myRestaurantList, setMyRestaurantList] = useState([]);
  let [myFilteredList, setMyFilteredList] = useState([]);

  let [searchtext, setSearchtext] = useState("");

  const RestaurantPromotedCard = withPromotedlabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const { loggedInUser, setName } = useContext(UserContext);

  // useEffect(() => {}, []);

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

  const onlineStatus = useOnlineStatus();

  if (!onlineStatus)
    return (
      <h1>Looks like you are offline, please check your internet connection</h1>
    );

  // Conditional Rendering
  if (myRestaurantList.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="">
      <div className="flex m-4 p-4">
        <div className="search mx-4">
          <input
            type="text"
            className="border border-solid border-black mx-2"
            value={searchtext}
            onChange={(e) => setSearchtext(e.target.value)}
          ></input>
          <button
            className="bg-green-200 px-4 py-1 rounded-lg cursor-pointer"
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
        <div>
          <button
            className="bg-blue-300 px-4 py-1 rounded-lg cursor-pointer"
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
        <div>
          <input
            className="border border-black ml-4 py-1 px-2 font-bold"
            value={loggedInUser}
            onChange={(e) => {
              setName(e.target.value);
            }}
          ></input>
        </div>
      </div>
      <div className="flex flex-wrap">
        {myFilteredList.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
          >
            {Object.keys(restaurant.info?.aggregatedDiscountInfoV3 ?? {})
              .length === 0 ? (
              <RestaurantCard {...restaurant.info} />
            ) : (
              <RestaurantPromotedCard {...restaurant.info} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
