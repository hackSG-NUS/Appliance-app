import { React, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { collection, query, where, getDocs } from "firebase/firestore";

import { db } from "../firebase";

const Liked = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    const q = query(collection(db, "appliances"), where("liked", "==", true));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // setData([...data].push({doc.id: doc.data()}));
      setData([...data].push(doc));
      console.log(doc.id, " => ", doc.data());
    });
  };

  return (
    <View>
      <TouchableOpacity
        style={{ backgroundColor: "red", height: 100, width: 100 }}
        onPress={getData}
      ></TouchableOpacity>
      <FlatList
        data={data}
        renderItem={({ item }) => {
          const d = item.data();
          return (
            <View>
              <Text>d.title</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default Liked;

const styles = StyleSheet.create({});
