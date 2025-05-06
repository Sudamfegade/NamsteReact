import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const ItemList = ({ items }) => {
  const { loggedInUser } = useContext(UserContext);
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-300 border-b-2 text-left flex justify-between"
        >
          <div className="w-10/12">
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span>
                - ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-sm">{item.card.info.description}</p>
            <p>
              {"User Name: "} {loggedInUser}
            </p>
          </div>
          <div className="w-2/12 p-4 ">
            <div className="absolute">
              <button className="p-2 ml-9 mt-18 rounded-lg text-white bg-black shadow-lg">
                Add+
              </button>
            </div>
            <img
              src={CDN_URL + item.card.info.imageId}
              className="w-full"
            ></img>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
