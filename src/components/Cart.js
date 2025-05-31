import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearItems } from "../utils/cartSlice";
import { useState } from "react";

const Cart = () => {
  const ItemCards = useSelector((store) => store.cart.items);
  const [isVisibel, setIsvisible] = useState(false);
  const dispatch = useDispatch();
  const handleClick = () => {
    setIsvisible(true);
    dispatch(clearItems());
  };
  return (
    <>
      <div className="text-center">
        <h1 className="my-6 font-bold text-2xl">{"Cart"}</h1>
      </div>
      <div className="text-right">
        <button
          onClick={handleClick()}
          className="my-6 mx-180 font-bold text-2xl bg-black text-white p-4 rounded-2xl cursor-pointer"
        >
          {"Clear Cart"}
        </button>
      </div>
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
        {isVisibel && <p>Please add items in cart</p>}
        <ItemList items={ItemCards} />
      </div>
    </>
  );
};

export default Cart;
