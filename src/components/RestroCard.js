import { CDN_URL } from "../utils/constants";

const RestroCart = (props) => {
  const { resData } = props;
  return (
    <div className="m-4 p-4 w-[250px] bg-[#f0f0f0] rounded-lg h-fit hover:bg-gray-300">
      <img
        className="h-fit rounded-lg"
        alt="res-logo"
        src={CDN_URL + resData.info?.cloudinaryImageId}
      />
      <h3 className="font-bold py-2 text-lg">{resData.info?.name}</h3>
      <h4>{resData.info?.cuisines.join(", ")}</h4>
      <h4>{resData.info?.avgRatingString} Stars</h4>
      <h4>{resData.info?.costForTwo}</h4>
      <h4>{resData.info?.sla.deliveryTime} min</h4>
    </div>
  );
};
export default RestroCart;
