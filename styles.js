import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    // backgroundColor: "whitesmoke",
    color: "#4A90E2",
    fontSize: 24,
    padding: 10,
    marginBottom: 15,
  },
  button: {
    marginBottom: 15,
    borderRadius: 5,
    padding: 15,
  },
  map: {
    flex: 1,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});

export default styles;
