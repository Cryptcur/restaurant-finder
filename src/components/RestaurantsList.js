import React, { useState, useEffect } from "react";
import { withNavigation } from "react-navigation";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from "react-native";
import ResultsDetail from "../components/ResultsDetail";

const RestaurantsList = ({ header, results, navigation }) => {
  if(!results.length) {
    return null
  }
  return (
    <View style={styles.container}>
      <Text style={styles.headerStyle}>{header}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={result => result.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("Result", { id: item.id })}
            >
              <ResultsDetail restaurant={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    marginLeft: 15,
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5
  },
  container: {
    marginBottom: 10
  }
});

export default withNavigation(RestaurantsList);
