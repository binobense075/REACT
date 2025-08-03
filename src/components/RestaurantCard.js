import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({
  name,
  cuisines,
  avgRating,
  lastMileTravelString,
  cloudinaryImageId,
}) => {
  return (
    <div className="restro-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="restro-logo"
        alt="restro-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{lastMileTravelString}</h4>
    </div>
  );
};

export default RestaurantCard;
