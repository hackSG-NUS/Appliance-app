import { TouchableOpacity, StyleSheet, Image } from "react-native";
import { React, useState } from "react";
import { white } from "../assets/icons/white_bookmark.png";

export default function Bookmark() {
  const [clicked, setClicked] = useState(false);
  const handlePress = () => {
    setClicked(!clicked);
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      {clicked ? (
        <Image
          source={require("../assets/icons/black_bookmark.png")}
          style={styles.bookmark}
        />
      ) : (
        <Image
          source={require("../assets/icons/white_bookmark.png")}
          style={styles.bookmark}
        />
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  bookmark: {
    height: 30,
    width: 30,
    alignSelf: "center",
    marginTop: 15,
    marginLeft: 30,
  },
});
