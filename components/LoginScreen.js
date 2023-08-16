import React, { useState } from "react";
import {
  ScrollView,
  Text,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  SectionList,
} from "react-native";

export default function LoginScreen() {
  const [email, onChangeEmail] = useState("");
  const [username, onChangeUsername] = useState("");
  const [phoneNumber, onChangePhoneNumber] = useState("");
  const [password, onChangePassword] = useState("");
  const [loggedIn, onLogin] = useState(false);

  const Footer = () => (
    <Text style={menuStyles.footerText}>
      All Rights Reserved by Little Lemon 2022
    </Text>
  );

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView style={styles.container} keyboardDismissMode="on-drag">
        {loggedIn && <Text style={styles.headerText}>You are logged in!</Text>}

        {!loggedIn && (
          <>
            <Text style={styles.headerText}>Welcome to Little Lemon</Text>
            <Text style={styles.regularText}>Login to continue </Text>
            <TextInput
              style={styles.inputBox}
              value={email}
              onChangeText={onChangeEmail}
              placeholder={"Email"}
              keyboardType={"email-address"}
            />
            <TextInput
              // secureTextEntry={true} //for passwords
              style={styles.inputBox}
              value={username}
              onChangeText={onChangeUsername}
              placeholder={"Username"}
            />

            <TextInput
              style={styles.inputBox}
              value={phoneNumber}
              onChangeText={onChangePhoneNumber}
              placeholder={"Phone Number"}
              keyboardType={"phone-pad"}
            />
            <TextInput
              secureTextEntry={true}
              style={styles.inputBox}
              value={password}
              onChangeText={onChangePassword}
              placeholder={"Password"}
            />
          </>
        )}
        <Pressable onPress={() => onLogin(!loggedIn)} style={styles.button}>
          <Text style={styles.buttonText}>Log in</Text>
        </Pressable>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    padding: 40,
    fontSize: 30,
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
  inputBox: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    backgroundColor: "#EDEFEE",
  },
  button: {
    fontSize: 22,
    padding: 10,
    marginVertical: 8,
    margin: 100,
    backgroundColor: "#F4CE14",
    borderColor: "#F4CE14",
    borderWidth: 2,
    borderRadius: 10,
  },
  buttonText: {
    color: "black",
    textAlign: "center",
    fontSize: 25,
  },
});
