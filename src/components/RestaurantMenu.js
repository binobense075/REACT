import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(0);

  if (!resInfo) return <Shimmer />;

  const cardInfo = resInfo?.cards.find((cd) => cd.card.card.info);

  const { name, avgRatingString, city } = cardInfo.card.card.info;

  const { groupedCard } = resInfo.cards.find((cd) => cd.groupedCard);
  const categoryCards = groupedCard?.cardGroupMap?.REGULAR.cards.filter(
    (cd) =>
      cd.card.card["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  console.log("categoryCards", categoryCards);

  return (
    <div className="w-7/12 mx-auto mt-3">
      <div className="text-center my-1.5">
        <h1 className="font-bold text-2xl">{name}</h1>
        <div className="my-2">
          <span>{avgRatingString + " ⭐"}&nbsp;&nbsp;</span>
          <span className="font-bold">Outlet&nbsp;&nbsp;-&nbsp;&nbsp;</span>
          <span className="text-gray-600">{city}</span>
        </div>
      </div>
      {categoryCards.map((cd, index) => (
        <RestaurantCategory
          key={cd.card.card.title}
          items={cd.card.card}
          showItems={index === showIndex && true}
          setShowIndex={() =>
            setShowIndex((prev) => (prev === index ? null : index))
          }
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;

// const { card: {card: {info} ={}} = {}} = resInfo?.cards.find(
//   (cd) => cd.card.card.info
// );
// console.log("info", info); //! Nested destructing info alternate of below cardInfo.card.card.info
