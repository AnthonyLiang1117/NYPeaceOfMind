import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./components/HomeScreen";
import DetailsScreen from "./components/DetailsScreen";

/*
  creates an object that has 2 properties:
    Screen: like Routes in React, giving it components to render based on what you press
      - name is the name of the Route that corresponds to the linked component
      - component uses the jsx we created to render our the view

    Navigator: holds all the screen components together as its children
      - initialRouteName will render whichever route first as it loads in
*/
const Stack = createNativeStackNavigator();

/*
  NavigationContaioner manages our navigation tree and navigation state
  you wrap it around ALL navigation strutures
*/
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Details">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
