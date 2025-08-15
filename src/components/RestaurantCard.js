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
    <div className="m-4 p-4 w-[270px] h-[400px] bg-gray-200 hover:bg-gray-50">
      <img
        className="rounded-lg w-full h-52 object-cover"
        alt="restro-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-2 text-lg truncate">{name}</h3>
      <h4 className="line-clamp-2 text-sm">{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.deliveryTime} mins</h4>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="relative">
        <h1 className="absolute top-47 left-10 text-white text-xl font-bold z-1">
          {props.aggregatedDiscountInfoV3.header +
            " " +
            props.aggregatedDiscountInfoV3.subHeader}
        </h1>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
