import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";
import { useContext } from "react";

const RestaurantCard = ({
  name,
  cuisines,
  avgRating,
  costForTwo,
  sla,
  cloudinaryImageId,
}) => {
  const { loggedInUser } = useContext(UserContext);
  return (
    <div className="m-4 p-4 w-[270px] h-[410px] bg-gray-50 hover:bg-gray-100">
      <img
        className="rounded-lg w-full h-60 object-cover"
        alt="restro-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold text-lg">{name}</h3>
      <h4 className="text-sm">{cuisines.join(", ")}</h4>
      <h4 className="text-sm">{avgRating} stars</h4>
      <h4 className="text-sm">{costForTwo}</h4>
      <h4 className="text-sm">{sla?.deliveryTime} mins</h4>
      <h4 className="text-sm font-bold">User : {loggedInUser}</h4>
    </div>
  );
};

// Higher Order Component

export const withPromotedlabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="relative">
        <label className="absolute text-white text-lg font-bold p-2 rounded-sm mx-8 top-50">
          {props?.aggregatedDiscountInfoV3?.header +
            " " +
            props?.aggregatedDiscountInfoV3?.subHeader}
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
