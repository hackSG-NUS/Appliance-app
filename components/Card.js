import { Background } from "@react-navigation/elements";
import { React, useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { useFonts, Lato_400Regular } from "@expo-google-fonts/lato";
import { doc, updateDoc } from "firebase/firestore";

import { db } from "../firebase";

const Card = ({ title, image, price, energycost, id, liked, ticks }) => {
  const [clicked, setClicked] = useState(liked);

  const handlePress = async () => {
    const likedRef = doc(db, "appliances", id);
    await updateDoc(likedRef, {
      liked: !clicked,
    });
    setClicked(!clicked);
  };
  const [fontsLoaded, error] = useFonts({
    Lato_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  const arr = [];
  for (let i = 0; i < ticks; i++) {
    arr.push(1);
  }

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity onPress={handlePress}>
          {!clicked ? (
            <Image
              source={require("../assets/icons/white_bookmark.png")}
              style={styles.bookmark}
            />
          ) : (
            <Image
              source={require("../assets/icons/black_bookmark.png")}
              style={styles.bookmark}
            />
          )}
        </TouchableOpacity>
      </View>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.descriptionContainer}>
        <Text style={styles.price}>{price}</Text>
        <Text>Annual Cost: {energycost}</Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          {arr.map((x) => (
            <Image
              source={require("../assets/icons/tick.png")}
              style={{ height: 20, width: 20 }}
            />
          ))}
        </View>
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
    height: 500,
    margin: 10,
    borderColor: "black",
    borderWidth: 3,
    flexDirection: "column",
    alignItems: "center",
    alignSelf: "center",
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
    fontSize: 20,
    marginTop: 15,
    marginLeft: 20,
    fontFamily: "Lato_400Regular",
  },
  titleContainer: {
    flexDirection: "row",
    alignContent: "center",
    marginHorizontal: 35,
  },
});
