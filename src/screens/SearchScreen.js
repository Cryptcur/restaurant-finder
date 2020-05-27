import React, { useState } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";
import useRestaurants from "../hooks/useRestaurants";
import RestaurantsList from "../components/RestaurantsList";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [apiSearch, restaurants, error] = useRestaurants();

  const filterByPrice = price => {
    return restaurants.filter(restaurant => restaurant.price === price);
  };
  return (
    <>
      <SearchBar
        term={term}
        termChange={setTerm}
        onSubmit={() => apiSearch(term)}
      />
      {error ? <Text>{error}</Text> : null}
      <ScrollView>
        <RestaurantsList results={filterByPrice("$")} header="Cost Effective" />
        <RestaurantsList results={filterByPrice("$$")} header="Pricier" />
        <RestaurantsList results={filterByPrice("$$$")} header="Big Spender" />
        <RestaurantsList results={filterByPrice("$$$$")} header="No Limit" />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
