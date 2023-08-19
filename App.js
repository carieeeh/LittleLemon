import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  useColorScheme,
  useWindowDimensions,
} from "react-native";

import { useDeviceOrientation } from "@react-native-community/hooks";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { createDrawerNavigator } from "@react-navigation/drawer";

import LittleLemonHeader from "./components/LittleLemonHeader";
import LittleLemonFooter from "./components/LittleLemonFooter";
import WelcomeScreen from "./components/WelcomeScreen";
import MenuItems from "./components/MenuItems";
import LoginScreen from "./components/LoginScreen";
import FeedbackForm from "./components/FeedbackForm";

//Customizing Icons
import { Ionicons } from "@expo/vector-icons";

export default function App() {
  //HOOKS SAMPLES
  // const colorScheme = useColorScheme();
  // const window = useWindowDimensions();
  // const orientation = useDeviceOrientation();
  // console.log("is orientation portrait: ", orientation.portrait);
  // console.log("is orientation landscape: ", orientation.landscape);
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  // const Drawer = createDrawerNavigator();

  return (
    <NavigationContainer>
      <View
        style={
          styles.container
          // colorScheme === "light"
          //   ? { backgroundColor: "#fff" }
          //   : { backgroundColor: "#333333" },
        }
      >
        <LittleLemonHeader />

        {/* <Stack.Navigator initialRouteName="Login" style={styles.container}>
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator> */}
        {/* 
        <Drawer.Navigator useLegacyImplementation initialRouteName="Login">
          <Drawer.Screen name="Welcome" component={WelcomeScreen} />
          <Drawer.Screen name="Login" component={LoginScreen} />
        </Drawer.Navigator> */}

        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "Welcome") {
                iconName = focused
                  ? "ios-information-circle"
                  : "ios-information-circle-outline";
              } else if (route.name === "Menu") {
                iconName = "ios-list";
              }
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: "#F4CE14",
            tabBarInactiveTintColor: "gray",
          })}
        >
          <Tab.Screen name="Welcome" component={WelcomeScreen} />
          <Tab.Screen name="Menu" component={MenuItems} />
        </Tab.Navigator>
        {/* <FeedbackForm /> */}

        {/* <Text>Window Dimensions</Text>
        <Text>Height: {window.height}</Text>
        <Text>Width: {window.width}</Text>
        <Text>Font scale: {window.fontScale}</Text> */}

        {/* <WelcomeScreen /> */}
        {/* <MenuItems /> */}
        {/* <LoginScreen /> */}
      </View>
      <View style={{ backgroundColor: "#495E57" }}>
        <LittleLemonFooter />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#495E57",
  },
});
