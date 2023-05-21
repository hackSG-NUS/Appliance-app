import { TouchableOpacity, StyleSheet, Image } from "react-native";
import { React, useState, useContext } from "react";
import { doc, updateDoc } from "firebase/firestore";

import { db } from "../../firebase";
import { UserContext } from "../screens/Liked";

export default function Bookmark({ id }) {
  const def = useContext(UserContext);
  const [clicked, setClicked] = useState(def);

  const handlePress = async () => {
    const likedRef = doc(db, "appliances", id);
    await updateDoc(likedRef, {
      liked: !clicked,
    });
    setClicked(!clicked);
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      {!clicked ? (
        <Image
          source={require("../../assets/icons/white_bookmark.png")}
          style={styles.bookmark}
        />
      ) : (
        <Image
          source={require("../../assets/icons/black_bookmark.png")}
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
