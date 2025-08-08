import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({
  name,
  cuisines,
  avgRating,
  costForTwo,
  sla,
  cloudinaryImageId,
}) => {
  return (
    <div className="m-4 p-4 w-[270px] bg-gray-200 hover:bg-gray-50">
      <img
        className="rounded-lg"
        alt="restro-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-2 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.deliveryTime} mins</h4>
    </div>
  );
};

export default RestaurantCard;
