import * as React from "react";
import { View, Text } from "react-native";

export default function LittleLemonHeader() {
  return (
    <View style={{ flex: 0.2, backgroundColor: "#F4CE14" }}>
      <Text
        style={{
          marginTop: 20,
          padding: 40,
          fontSize: 30,
          color: "black",
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        Little Lemon
      </Text>
    </View>
  );
}
