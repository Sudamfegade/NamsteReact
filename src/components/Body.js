import { useEffect, useState } from "react";
import RestroCart from "./RestroCard.js";
import Shimmer from "./Shimmer.js";

const Body = () => {
  const [resli, setResli] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.6131977&lng=73.7429129&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    const restrolist =
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;

    setResli(restrolist);
  };
  console.log(resli);

  return resli.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={(e) => {
            const filteredList = restrolist.filter(
              (res) => res.avgRatingString > 4
            );
            setResli(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {resli.map((resCard, index) => (
          <RestroCart key={index} resData={resCard} />
        ))}
      </div>
    </div>
  );
};
export default Body;
