import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
  const [restaurants, setRestaurants] = useState([]);
  const [error, setError] = useState("");

  const apiSearch = async searchTerm => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "new york"
        }
      });
      setRestaurants(response.data.businesses);
    } catch (err) {
      setError("Something went wrong");
    }
  };

  useEffect(() => {
    apiSearch("pasta");
  }, []);

  return [apiSearch, restaurants, error];
};
