import * as React from "react";
import * as Font from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import homeScreen from "./src/screens/homeScreen.js";
import infoScreen from "./src/screens/infoScreen.js";

const Stack = createStackNavigator();

const fetchFonts = () => {
  return Font.loadAsync({
    "gilroy-light": require("./assets/fonts/Gilroy-Light.otf"),
  });
};

export default function App() {
  fetchFonts();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Weather App" component={homeScreen} />
        <Stack.Screen
          name="Detail Info"
          component={infoScreen}
          options={({ route }) => ({ title: route.params.name })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
