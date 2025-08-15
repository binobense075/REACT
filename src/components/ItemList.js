import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  console.log("items", items);
  return (
    <div className="p-2">
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-200 border-b-2 flex justify-between"
        >
          <div className="w-9/12">
            <div className="font-bold text-gray-900 py-4 ">
              <span className="pr-2">{item.card.info.name}</span>
              <span>₹{item.card.info.price / 100}</span>
            </div>
            <p className="text-sm">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 p-2 relative">
            <div>
              <button className="absolute px-2 p-1 mx-18 my-22 rounded-lg bg-black text-white font-medium cursor-pointer">
                ADD
              </button>
            </div>
            <img src={CDN_URL + item.card.info.imageId} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
