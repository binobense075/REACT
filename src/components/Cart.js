import ItemsList from "./ItemsList";
import { useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div>
      <div className="text-center my-2">
        <h1 className="font-bold text-2xl my-2">Cart</h1>
        <button
          className="px-4 py-2 mx-2 bg-green-200 rounded-xl cursor-pointer font-bold"
          onClick={() => dispatch(clearCart())}
        >
          Clear Cart
        </button>
      </div>
      <div className="w-6/12 m-auto">
        <ItemsList items={cartItems} cart={true} />
      </div>
      {cartItems.length === 0 && (
        <div className="text-center my-3">
          <h1>Cart is empty</h1>
        </div>
      )}
    </div>
  );
};

export default Cart;
