import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setStatus] = useState(false);
  useEffect(() => {
    window.addEventListener("offline", () => {
      setStatus(true);
    });

    window.addEventListener("online", () => {
      setStatus(false);
    });
  }, []);
  return onlineStatus;
};
export default useOnlineStatus;
