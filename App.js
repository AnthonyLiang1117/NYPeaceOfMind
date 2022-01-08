import * as React from "react";
import { TouchableOpacity, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import HomeScreen from "./components/HomeScreen";
import DetailsScreen from "./components/DetailsScreen";

/*
  Tab:
    createMaterialBottomTabNavigator() creates an object that has 2 properties:
      Screen: like Routes in React, giving it components to render based on what you press
        - name is the name of the Route that corresponds to the linked component
        - component uses the jsx we created to render our the view

      Navigator: holds all the screen components together as its children and renders all our content onto the app
        - initialRouteName specifies whichever route to initialy load in
        - will automatically include a back button when possible to go back if there are mulitple screens in the navigation stack
*/
const Tab = createMaterialBottomTabNavigator();

/*
  NavigationContainer:
    - manages our navigation tree and navigation state
    - you wrap it around ALL navigation strutures
*/

/*
  options prop in Tab.Screen: for specifying screen-specific options
  screenOptions prop in Tab.Navigator: for common options throughout the App
*/

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#f4511e",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "Overview",
            headerRight: () => (
              <TouchableOpacity onPress={() => alert("This is button")}>
                <Text style={{ color: "#fff", fontWeight: "bold" }}>Info</Text>
              </TouchableOpacity>
            ),
          }}
        />
        <Tab.Screen
          name="Details"
          component={DetailsScreen}
          option={{ title: "Details" }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
