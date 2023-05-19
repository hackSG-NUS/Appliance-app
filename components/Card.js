import { Background } from "@react-navigation/elements";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { useFonts, Lato_400Regular } from "@expo-google-fonts/lato";
import Bookmark from "./Bookmark";
// import { AppLoading } from "expo";

const Card = ({ title, image, price, description }) => {
  const [fontsLoaded, error] = useFonts({
    Lato_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
        {/* <Image
          source={require("../assets/icons/bookmark-white.png")}
          style={styles.bookmark}
        /> */}
        <Bookmark />
      </View>
      <Image source={image} style={styles.image} />
      <View style={styles.descriptionContainer}>
        <Text style={styles.price}>{price}</Text>
        <Text>asdsadsadsadsadasdsadsadsadasdsadasdsadasdsadasdsa</Text>
      </View>
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
    height: 550,
    margin: 10,
    borderColor: "black",
    borderWidth: 3,
    flexDirection: "column",
    alignItems: "center",
  },
  descriptionContainer: {
    alignSelf: "flex-start",
    marginLeft: 30,
    marginRight: 30,
  },
  image: {
    height: 250,
    width: 250,
    resizeMode: "center",
  },
  price: {
    fontSize: 25,
  },
  title: {
    fontSize: 25,
    marginTop: 15,
    marginLeft: 20,
    fontFamily: "Lato_400Regular",
  },
  titleContainer: {
    flexDirection: "row",
    alignContent: "center",
  },
});
