import * as React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";

export default function WelcomeScreen() {
  return (
    <View style={welcomeStyles.container}>
      <ScrollView
        indicatorStyle={"white"}
        style={welcomeStyles.scrollContainer}
      >
        <Text style={welcomeStyles.titleText}>Welcome to Little Lemon</Text>
        <Text style={welcomeStyles.itemText}>
          Little Lemon is a charming neighborhood bistro that serves simple food
          and classic cocktails in a lively but casual environment. We would
          love to hear more about your experience with us ! {"\n"} {"\n"}
          Come and take a bite! You will surely forget your name!
        </Text>
      </ScrollView>
    </View>
  );
}

const welcomeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#495E57",
  },
  scrollContainer: {
    paddingHorizontal: 40,
    paddingVertical: 40,
  },
  titleText: {
    padding: 40,
    fontSize: 50,
    color: "#F4CE14",
    textAlign: "center",
    fontWeight: "bold",
  },
  itemText: {
    fontSize: 30,
    padding: 40,
    marginVertical: 8,
    color: "#F4CE14",
    textAlign: "center",
  },
});
