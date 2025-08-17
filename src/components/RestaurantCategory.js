import ItemsList from "./ItemsList";
import { useState } from "react";

const RestaurantCategory = ({ items, showItems, index, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };
  // onClick={handleClick()} will call the function immediately during render.
  // handleClick will call once we click the div
  return (
    <div className="bg-gray-100 my-4 py-2 px-5 shadow-lg" onClick={handleClick}>
      <div className="flex justify-between cursor-pointer">
        <span className="font-bold text-lg">{items?.title}</span>
        <span>⬇️</span>
      </div>
      {showItems && <ItemsList items={items?.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
