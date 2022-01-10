import React, { useState, useEffect } from "react";
import { View, Text, Image } from "react-native";
import database from "../firebase.config";
import { ref, onValue } from "firebase/database";
import styles from "../styles";
import MapView, { Marker, Callout } from "react-native-maps";
import * as Location from "expo-location";
import bathroomData from "../publicBathrooms";
/*
  MapView allows you to access apple maps onto your view
  Location allows you to ask for permission to use location
  useEffect is like a componentDidMount() that will run everytime component renders
*/

export default function MapScreen() {
  const { container, map } = styles;
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [publicBathrooms, setPublicBathrooms] = useState(bathroomData);

  // useEffect(() => {
  //   (() => {
  //     const bathroomRef = ref(database);
  //     let newArr = [];
  //     onValue(bathroomRef, (snapshot) => {
  //       const bathrooms = snapshot.val();
  //       for (let key in bathrooms) {
  //         newArr.push({ ...bathrooms[key], id: key });
  //       }
  //     });
  //     setPublicBathrooms(newArr);
  //     console.log("ARRAY!!!!!!!!!", publicBathrooms);
  //   })();
  // }, []);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return (
    <View style={container}>
      <MapView
        style={map}
        showsUserLocation={true}
        followsUserLocation={true}
        userInterfaceStyle="dark"
        mapPadding={{ padding: 15 }}
      >
        {/* {publicBathrooms.map((bathroom) => (
          <Marker
            key={bathroom.id}
            title={bathroom.name}
            description={`Borough: ${bathroom.borough} \n Location: ${
              bathroom.location
            } \n Open Year Round: ${
              bathroom.open_year_round ? "yes" : "no"
            } \n Handicap Accesible: ${
              bathroom.handicap_accessible ? "yes" : "no"
            }`}
          />
        ))} */}
        <Marker
          // key={publicBathrooms[0].latling}
          title={publicBathrooms[2].name}
          coordinate={publicBathrooms[2].latlng}
          description={`Open Year Round: ${
            publicBathrooms[2].open_year_round ? "👍" : "👎"
          } Handicap Accesible: ${
            publicBathrooms[2].handicap_accessible ? "👍" : "👎"
          }`}
        >
          <Image
            source={require("../assets/icon.png")}
            style={{ height: 35, width: 35 }}
          />
          {/* <Callout style={container}>
            <View>
              <Text>Location: {publicBathrooms[0].location}</Text>
              <Text>
                Open Year Round:
                {publicBathrooms[0].open_year_round ? "yes" : "no"}
              </Text>
              <Text>
                Handicap Accesible:
                {publicBathrooms[0].handicap_accessible ? "yes" : "no"}
              </Text>
            </View>
          </Callout> */}
        </Marker>
      </MapView>
    </View>
  );
}
