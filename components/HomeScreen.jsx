import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { useTheme } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import styles from "../styles";

/*
  Navigation:
  - prop is passed into every Tab.Screen that is wrapped in Tab.Navigator
  - .navigate(name of next screen we want to go to) is a built in method that moves you to specified screen
    * meant to go to routes once, if its already at that route, it will do nothing
  - .push() will allow you to trigger the same route to go deeper and deeper
  - .goBack() for programmatically trigger action of going back to previous page in the stack (seen in DetailScreen.jsx)
  - .popToTop() to programmically go back all the way to the first screen in the stack
*/
function HomeScreen({ navigation }) {
  const { container, text, button } = styles;
  const { colors } = useTheme();
  return (
    <View style={container}>
      <Text style={text}>Hello World!</Text>
      <TouchableOpacity
        style={{ ...button, backgroundColor: colors.card }}
        onPress={() => navigation.navigate("Details")}
      >
        <Text style={{ color: colors.text }}>Display Details</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

export default HomeScreen;
