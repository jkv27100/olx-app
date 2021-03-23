import { useState } from "react";

export default useApi = (apiFunc) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(false);
  const request = async () => {
    setLoader(true);
    const response = await apiFunc();
    setLoader(false);

    if (!response.ok) return setError(true);

    setError(false);
    setData(response.data);
  };
  return { request, data, error, loader };
};
