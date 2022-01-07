import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "../styles";

function DetailsScreen({ navigation }) {
  const { container, button } = styles;
  return (
    <View style={container}>
      <Text>Details Screen</Text>
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
    </View>
  );
}

export default DetailsScreen;
