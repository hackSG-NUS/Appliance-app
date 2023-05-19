import { Background } from "@react-navigation/elements";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { useFonts } from "expo-font";

const Card = ({ title, image, price, description }) => {
  const fontLoader = useFonts({
    "Lato-Light": require("../assets/fonts/Lato-Light.ttf"),
    "Lato-Regular": require("../assets/fonts/Lato-Regular.ttf"),
  });

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Panasonic Fridge</Text>
        <Image
          source={require("../assets/icons/bookmark-white.png")}
          style={styles.bookmark}
        />
      </View>
      <Image
        source={require("../assets/images/fridge.jpg")}
        style={styles.image}
      />
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  bookmark: {
    height: 30,
    width: 30,
    alignSelf: "center",
    marginTop: 15,
    marginLeft: 30,
  },
  container: {
    borderRadius: 30,
    backgroundColor: "white",
    width: 325,
    height: 450,
    margin: 10,
    borderColor: "black",
    borderWidth: 3,
    flexDirection: "column",
    alignItems: "center",
  },
  image: {
    height: 250,
    width: 250,
    resizeMode: "center",
  },
  title: {
    fontSize: 25,
    marginTop: 15,
    marginLeft: 20,
    // fontFamily: "Lato-Regular",
  },
  titleContainer: {
    flexDirection: "row",
    alignContent: "center",
  },
});
