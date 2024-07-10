import resList from "../utils/mockData.js";
import RestroCart from "./RestroCard.js";

const Body = () => {
  return (
    <div className="body">
      <div className="search"> Search</div>
      <div className="res-container">
        {resList.map((resCard, index) => (
          <RestroCart key={index} resData={resCard} />
        ))}
      </div>
    </div>
  );
};
export default Body;
