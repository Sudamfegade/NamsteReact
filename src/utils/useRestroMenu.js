import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useRestroMenu = (resId) => {
  const [resMenu, setResInfo] = useState;
  useEffect(
    {
      fetchData,
    },
    []
  );
  const fetchData = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    setResInfo(json);
  };
  return resMenu;
};
export default useRestroMenu;
