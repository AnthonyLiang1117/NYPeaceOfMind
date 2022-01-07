import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import styles from "../styles";

function DetailsScreen({ navigation }) {
  const { container, text, button } = styles;
  return (
    <View style={container}>
      <Text style={text}>Details Screen</Text>
      <TouchableOpacity
        style={button}
        onPress={() => navigation.navigate("Home")}
      >
        <Text>Go to home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={button} onPress={() => navigation.goBack()}>
        <Text>Go back</Text>
      </TouchableOpacity>
      <TouchableOpacity style={button} onPress={() => navigation.popToTop()}>
        <Text>Goes back to the top of the stack</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

export default DetailsScreen;
