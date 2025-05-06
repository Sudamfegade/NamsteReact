import { use, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import { MENU_API } from "../utils/constants";
import useRestroMenu from "../utils/useRestroMenu";
import RestaurantCategory from "./RestaurnatCategory";
const RestMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestroMenu(resId);
  const [showList, setShowList] = useState(0);
  if (resInfo === null) return <Shimmer />;
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;
  const categarioes =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  return (
    <div className="text-center">
      <h1 className="my-6 font-bold text-2xl">{name}</h1>
      <p className="font-bold text-lg ">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {categarioes.map((c, index) => (
        <RestaurantCategory
          key={c.card.card.title}
          data={c.card.card}
          showItems={index === showList ? true : false}
          setShowList={() => setShowList(index)}
        />
      ))}
    </div>
  );
};
export default RestMenu;
