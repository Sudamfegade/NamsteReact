import { CDN_URL } from "../utils/constants";

const RestroCart = (props) => {
  const { resData } = props;
  console.log(resData);
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + resData.info?.cloudinaryImageId}
      />
      <h3>{resData.info?.name}</h3>
      <h4>{resData.info?.cuisines}</h4>
      <h4>{resData.info?.avgRatingString} Stars</h4>
      <h4>{resData.info?.costForTwo}</h4>
      <h4>{resData.info?.sla.deliveryTime} min</h4>
    </div>
  );
};
export default RestroCart;
