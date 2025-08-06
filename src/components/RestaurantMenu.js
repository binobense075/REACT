import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (!resInfo) return <Shimmer />;

  const cardInfo = resInfo?.cards.find((cd) => cd.card.card.info);

  const { name, avgRatingString, costForTwoMessage, city } =
    cardInfo.card.card.info;

  const { groupedCard } = resInfo.cards.find((cd) => cd.groupedCard);
  const resMenuCards = groupedCard?.cardGroupMap?.REGULAR.cards.find(
    (cd) => cd.card.card.itemCards
  );
  const { itemCards } = resMenuCards.card.card;

  return (
    <div>
      <div className="heading-container">
        <h3>{name}</h3>
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

// const { card: {card: {info} ={}} = {}} = resInfo?.cards.find(
//   (cd) => cd.card.card.info
// );
// console.log("info", info); //! Nested destructing info alternate of below cardInfo.card.card.info
