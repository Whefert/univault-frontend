import axios from "axios";
import { useEffect, useState } from "react";

function useHttps(url, method = "GET", body) {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [isFetching, setIsFetching] = useState(false);

  function sendGetRequest() {}

  useEffect(() => {
    setIsFetching(true);
    if (method === "GET") {
      try {
        axios.get(url).then((res) => setData(res.data));
      } catch (error) {
        setError(error);
      }
    }
    setIsFetching(false);
  }, [url, method, body]);
  return {
    data: data,
    error: error,
    isFetching: isFetching,
  };
}

export default useHttps;
