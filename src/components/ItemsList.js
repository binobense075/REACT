import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";

const ItemsList = ({ items, cart }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };
  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
  };
  return (
    <div>
      {items.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="border-b-2 border-gray-300 py-6 my-2 "
        >
          <div className="flex">
            <div className="w-9/12 pr-4">
              <div className="mb-2">
                <span className="font-bold text-gray-800 mr-2">
                  {item?.card?.info?.name}
                </span>
                <span>
                  {/* {"₹" + item?.card?.info?.defaultPrice / 100} */}
                  {"₹" +
                    (item?.card?.info?.price
                      ? item?.card?.info?.price / 100
                      : item?.card?.info?.defaultPrice / 100)}
                </span>
              </div>
              <p className="text-sm">{item?.card?.info?.description}</p>
            </div>
            <div className="w-3/12 relative">
              {!cart && (
                <button
                  className="absolute bg-red-800 text-white px-4 py-1 rounded-sm cursor-pointer bottom-2 left-1/2 transform -translate-x-1/2"
                  onClick={() => handleAddItem(item)}
                >
                  Add
                </button>
              )}
              {cart && (
                <button
                  className="absolute bg-red-800 text-white px-4 py-1 rounded-sm cursor-pointer bottom-2 left-1/2 transform -translate-x-1/2"
                  onClick={() => handleRemoveItem(item)}
                >
                  Remove
                </button>
              )}
              <img
                src={CDN_URL + item?.card?.info?.imageId}
                className="rounded-lg max-h-40 w-full object-cover"
              ></img>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemsList;
