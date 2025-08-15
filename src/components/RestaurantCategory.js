import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setCategoryIndex }) => {
  //   console.log("setCategoryIndex", setCategoryIndex());
  const handleClick = () => {
    setCategoryIndex();
  };
  return (
    <div className="mt-4 bg-gray-50">
      <div
        className="flex justify-between bg-gray-300 p-2"
        onClick={handleClick}
      >
        <h1 className="font-bold text-lg ml-5">
          {data?.title + " (" + data?.itemCards?.length + ")"}
        </h1>
        <div className="mr-5">⬇️</div>
      </div>
      {showItems && <ItemList items={data.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
