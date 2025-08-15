import Shimmer from "./Shimmer";
import { useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  const [categoryIndex, setCategoryIndex] = useState(0);

  if (!resInfo) return <Shimmer />;

  const cardInfo = resInfo?.cards.find((cd) => cd.card.card.info);
  const { name, avgRatingString, costForTwoMessage, city, totalRatingsString } =
    cardInfo.card.card.info;

  const { groupedCard } = resInfo.cards.find((cd) => cd.groupedCard);
  const resCategoryCards = groupedCard?.cardGroupMap?.REGULAR.cards.filter(
    (cd) =>
      cd.card.card["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  return (
    <div className="w-[800px] mx-auto">
      <div className="my-5">
        <h1 className="text-3xl font-bold">{name}</h1>
      </div>
      <div className="px-4 pb-4 bg-gradient-to-r from-gray-100 to-gray-200 rounded-3xl">
        <div className="bg-white rounded-3xl p-5 border border-gray-300">
          <p className="font-bold">
            {"⭐ " +
              avgRatingString +
              " (" +
              totalRatingsString +
              ")  | " +
              costForTwoMessage}
          </p>
          <div className="flex">
            <p className="font-bold mr-2">Outlet </p>
            <p className="text-gray-600">{city}</p>
          </div>
        </div>
      </div>
      <div>
        {resCategoryCards.map((category, index) => (
          <RestaurantCategory
            key={category?.card?.card?.title}
            data={category.card.card}
            showItems={index === categoryIndex}
            setCategoryIndex={() => setCategoryIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;

// const { card: {card: {info} ={}} = {}} = resInfo?.cards.find(
//   (cd) => cd.card.card.info
// );
// console.log("info", info); //! Nested destructing info alternate of below cardInfo.card.card.info
