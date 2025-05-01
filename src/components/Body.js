import { useEffect, useState } from "react";
import RestroCart from "./RestroCard.js";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router";

const Body = () => {
  const [reslis, setResli] = useState([]);
  const [filteredReslis, setFiltredResli] = useState([]);
  const [searchInput, setSearchInput] = useState("");

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
  return reslis.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            className="search-box"
            type="text"
            onChange={(e) => {
              setSearchInput(e.target.value);
            }}
            value={searchInput}
          ></input>
          <button onClick={handleSearch}>Search</button>
        </div>
        <button
          className="filter-btn"
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
      <div className="res-container">
        {filteredReslis.map((resCard, index) => (
          <Link key={resCard.info.id} to={"/restaurant/" + resCard.info.id}>
            <RestroCart resData={resCard} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
