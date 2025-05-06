import { useContext, useEffect, useState } from "react";
import RestroCart, { withLablePromoted } from "./RestroCard.js";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import UserContext from "../utils/UserContext.js";

const Body = () => {
  const [reslis, setResli] = useState([]);
  const [filteredReslis, setFiltredResli] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser, setuserName } = useContext(UserContext);
  const PromotedLable = withLablePromoted(RestroCart);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.6131977&lng=73.7429129&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    const restrolist =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    setResli(restrolist);
    setFiltredResli(restrolist);
  };

  const handleSearch = () => {
    const updateRes = reslis.filter((res) =>
      res.info.name?.toLowerCase()?.includes(searchInput.toLowerCase())
    );
    setFiltredResli(updateRes);
  };
  if (onlineStatus) {
    return <p>Oops!! NO Internet connection</p>;
  }
  return reslis.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex items-center">
        <div className="search my-4 p-4">
          <input
            className="border"
            type="text"
            onChange={(e) => {
              setSearchInput(e.target.value);
            }}
            value={searchInput}
          ></input>
          <button
            className="px-4 py-2 bg-green-100 m-4 cursor-pointer rounded-xl"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
        <div className="search my-4 p-4">
          <button
            className="px-4 py-2 bg-green-100 m-4 cursor-pointer rounded-xl"
            onClick={(e) => {
              const filteredList = reslis.filter(
                (res) => res.info?.avgRatingString > 4.2
              );
              setResli(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div>
          <input
            className="border"
            onChange={(e) => setuserName(e.target.value)}
            value={loggedInUser}
          ></input>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredReslis.map((resCard, index) => (
          <Link key={resCard.info.id} to={"/restaurant/" + resCard.info.id}>
            {resCard.info.isOpen ? (
              <PromotedLable resData={resCard} />
            ) : (
              <RestroCart resData={resCard} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
