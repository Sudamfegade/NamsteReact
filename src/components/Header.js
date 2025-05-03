import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState(true);
  const statuson = useOnlineStatus();
  const handleBtnName = () => {
    setBtnName(!btnName);
  };
  return (
    <div className="flex justify-between shadow-lg items-center">
      <div className="logo-container">
        <img className="w-56 " src={LOGO_URL} />
      </div>
      <div>
        <ul className="flex p-4 m-4 font-medium">
          <li className="px-10">Online Status : {statuson ? "🛑" : "✅"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li className="px-10">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-10">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-10">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-10">Cart</li>
          <li className="px-10">
            <button className="login" onClick={handleBtnName}>
              {btnName ? "Login" : "Logout"}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
