import React from "react";
import { TouchableOpacity, View, StyleSheet, Text } from "react-native";
import { StatusBar } from "expo-status-bar";

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello World!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    backgroundColor: "whitesmoke",
    color: "#4A90E2",
    fontSize: 24,
    padding: 10,
  },
});
