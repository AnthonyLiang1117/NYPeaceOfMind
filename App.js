import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./components/HomeScreen";
import DetailsScreen from "./components/DetailsScreen";

/*
  Stack:
    createNativeStackNavigator() creates an object that has 2 properties:
      Screen: like Routes in React, giving it components to render based on what you press
        - name is the name of the Route that corresponds to the linked component
        - component uses the jsx we created to render our the view

      Navigator: holds all the screen components together as its children and renders all our content onto the app
        - initialRouteName specifies whichever route to initialy load in
*/
const Stack = createNativeStackNavigator();

/*
  NavigationContainer:
    - manages our navigation tree and navigation state
    - you wrap it around ALL navigation strutures
*/

/*
  options prop in Stack.Screen: for specifying screen-specific options
  screenOptions prop in Stack.Nav: for common options throughout the App
*/

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerStyle: { backgroundColor: "papayawhip" } }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Overview" }}
        />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
