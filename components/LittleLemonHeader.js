import * as React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function LittleLemonHeader() {
  return (
    <View style={headerStyles.container}>
      <Text style={headerStyles.itemText}>Little Lemon</Text>
    </View>
  );
}

const headerStyles = StyleSheet.create({
  container: {
    flex: 0.2,
    backgroundColor: "#F4CE14",
  },

  itemText: {
    marginTop: 20,
    padding: 20,
    fontSize: 30,
    color: "black",
    textAlign: "center",
    fontWeight: "bold",
  },
});
