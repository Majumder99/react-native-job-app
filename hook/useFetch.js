import axios from "axios";
import { useState, useEffect } from "react";

export const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);
  //   console.log(endpoint);
  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    headers: {
      "X-RapidAPI-Key": "",
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
    params: { ...query },
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      console.log("I am here");
      const respons = await axios.request(options);
      console.log("after I am here");
      setData(respons.data.data);
    } catch (error) {
      console.error(error);
      console.log("in error ");
      console.log(error);
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const reFetch = () => {
    setIsLoading(true);
    fetchData();
  };
  return { data, isLoading, error, reFetch };
};
