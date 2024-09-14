import axios from "axios";
import { useState } from "react";

function useHttps(url, method = "GET", body) {
  const [data, setData] = useState();

    if (method === "GET") {
     await axios.get(url)
  }
  return {
    data: data,
  };
}

export default useHttps;
