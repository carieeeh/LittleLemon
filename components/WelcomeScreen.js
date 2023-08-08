import * as React from "react";
import { View, Text } from "react-native";

export default function WelcomeScreen() {
  return (
    <>
      <View style={{ flex: 1, backgroundColor: "#495E57" }}>
        <Text
          style={{
            marginTop: 30,
            fontSize: 30,
            color: "#F4CE14",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          Welcome to Little Lemon
        </Text>
        <Text
          style={{
            padding: 40,
            fontSize: 20,
            color: "#F4CE14",
            textAlign: "center",
          }}
        >
          Little Lemon is a charming neighborhood bistro that serves simple food
          and classic cocktails in a lively but casual environment. We would
          love to hear more about your experience with us !
        </Text>
      </View>
    </>
  );
}
