import { useEffect, useState } from "react";
import { MENU_LINK } from "../utils/constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const { resId } = useParams();
  console.log(resId);
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_LINK + resId);

    const json = await data.json();

    console.log(json);

    setResInfo(json.data);
  };

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { text } = resInfo?.cards?.[0]?.card?.card;
  const { city, avgRatingString, costForTwoMessage } =
    resInfo?.cards?.[2]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[2].card.card;

  return (
    <div>
      <div className="heading-container">
        <h3>{text}</h3>
      </div>
      <div className="description">
        <p>{avgRatingString + " stars"} </p>
        <p>{costForTwoMessage}</p>
        <p>{"Outlet " + city}</p>
      </div>
      <div className="menu-card">
        <ul>
          {itemCards.map((item) => (
            <li key={item.card.info.id}>{item.card.info.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
