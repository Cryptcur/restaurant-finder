import React from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ term, termChange, onSubmit }) => {
  return (
    <View style={styles.background}>
      <Feather name="search" style={styles.iconStyles} color="black" />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.inputStyle}
        placeholder="Search"
        value={term}
        onChangeText={termChange}
        onEndEditing={onSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    marginTop: 15,
    height: 50,
    borderRadius: 5,
    backgroundColor: "#F0EEEE",
    marginHorizontal: 15,
    flexDirection: "row",
    marginBottom: 10
  },
  inputStyle: {
    flex: 1,
    fontSize: 18
  },
  iconStyles: {
    fontSize: 35,
    alignSelf: "center",
    marginHorizontal: 15
  }
});

export default SearchBar;
