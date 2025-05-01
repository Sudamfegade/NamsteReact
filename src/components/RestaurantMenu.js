import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import { MENU_API } from "../utils/constants";
const RestMenu = () => {
  const { resId } = useParams();
  const [resMenu, setResMenu] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const jason = await data?.json();
    setResMenu(jason);
  };
  if (resMenu === null) return <Shimmer />;
  const { name, cuisines, costForTwoMessage } =
    resMenu?.data.cards[2].card.card.info;
  const { itemCards } =
    resMenu.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;

  return (
    <div className="Menu">
      <h1>{name}</h1>
      <h3>
        {cuisines.join(", ")} - {costForTwoMessage}
      </h3>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} -
            {item.card.info.defaultPrice || item.card.info.price}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default RestMenu;
