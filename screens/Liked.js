import { React, useState, useEffect } from "react";
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
    const temp = [];
    querySnapshot.forEach((doc) => {
      temp.push({ id: doc.id, data: doc.data() });
    });
    setData(temp);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View>
      {/* <TouchableOpacity
        style={{ backgroundColor: "red", height: 100, width: 100 }}
        onPress={getData}
      ></TouchableOpacity> */}
      <FlatList
        data={data}
        renderItem={({ item }) => {
          return (
            <View>
              <Text>{item.data.title}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default Liked;

const styles = StyleSheet.create({});
