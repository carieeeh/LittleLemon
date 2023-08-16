import React from "react";
import {
  ScrollView,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Image,
  View,
} from "react-native";

export default function WelcomeScreen() {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView style={styles.container} keyboardDismissMode="on-drag">
        <Text style={styles.headerText}>Welcome to Little Lemon</Text>
        <View style={styles.headerWrapper}>
          <Image
            style={styles.logo}
            source={require("../img/littleLemonLogo.png")}
            resizeMode="cover"
            accessible={true}
            accessibilityLabel={"Logo Photo"}
          />
        </View>

        <Text style={styles.regularText}>
          Little Lemon is a charming neighborhood bistro that serves simple food
          and classic cocktails in a lively but casual environment. We would
          love to hear more about your experience with us!
        </Text>
        <Image
          style={styles.image}
          source={require("../img/Food1.png")}
          resizeMode="cover"
          accessible={true}
          accessibilityLabel={"Food 1 Photo"}
        />
        <Image
          style={styles.image}
          source={require("../img/Food2.png")}
          resizeMode="cover"
          accessible={true}
          accessibilityLabel={"Food 2 Photo"}
        />
        <Image
          style={styles.image}
          source={require("../img/Food3.png")}
          resizeMode="cover"
          accessible={true}
          accessibilityLabel={"Food 3 Photo"}
        />
        <Image
          style={styles.image}
          source={require("../img/Food4.png")}
          resizeMode="cover"
          accessible={true}
          accessibilityLabel={"Food 4 Photo"}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  headerText: {
    paddingRight: 10,
    paddingLeft: 10,
    paddingTop: 30,
    paddingBottom: 10,
    fontSize: 35,
    color: "#EDEFEE",
    textAlign: "center",
  },
  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: "#EDEFEE",
    textAlign: "center",
  },
  image: {
    width: 350,
    height: 250,
    borderRadius: 10,
    marginBottom: 10,
    resizeMode: "center",
  },
  headerWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    margin: 10,
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 20,
  },
});
