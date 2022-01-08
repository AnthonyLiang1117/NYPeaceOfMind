import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import styles from "../styles";
import MapView from "react-native-maps";
import * as Location from "expo-location";
/*
  MapView allows you to access apple maps onto your view

*/

export default function MapScreen() {
  const { container, map } = styles;
  const [location, setLocation] = useState(null);

  useEffect();

  return (
    <View style={container}>
      <MapView style={map} />
    </View>
  );
}
