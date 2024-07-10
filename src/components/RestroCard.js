import { CDN_URL } from "../utils/constants";

const RestroCart = (props) => {
  const { resData } = props;
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + resData.cloudinaryImageId}
      />
      <h3>{resData.name}</h3>
      <h4>{resData.cuisines.join(", ")}</h4>
      <h4>{resData.avgRatingString} Stars</h4>
      <h4>{resData.costForTwo}</h4>
      <h4>{resData.sla.deliveryTime} min</h4>
    </div>
  );
};
export default RestroCart;
