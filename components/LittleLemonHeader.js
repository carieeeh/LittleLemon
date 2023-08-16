import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";

const Welcome = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../img/littleLemonHeader.png")}
      />
      <Text style={styles.title}>Your Local Mediterranean Bistro</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    height: 100,
    width: 300,
    resizeMode: "contain",
  },
  container: {
    flex: 0.2,
    padding: 24,
    marginTop: 30,
    backgroundColor: "#EDEFEE",
  },

  title: {
    paddingVertical: 10,
    color: "#495E57",
    textAlign: "center",
    fontSize: 21,
    fontWeight: "bold",
  },
});

export default Welcome;
