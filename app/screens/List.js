import { React, useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { collection, query, where, getDocs } from "firebase/firestore";
import { useFonts, Lato_400Regular } from "@expo-google-fonts/lato";

import { db } from "../../firebase";
import Card from "../../components/Card";

const List = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    const q = query(collection(db, "appliances"));
    const querySnapshot = await getDocs(q);
    const temp = [];
    querySnapshot.forEach((doc) => {
      // console.log(doc.data());
      temp.push({ id: doc.id, data: doc.data() });
    });
    setData(temp);
  };

  useEffect(() => {
    getData();
    // console.log(data);
  }, []);

  const [fontsLoaded, error] = useFonts({
    Lato_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        horizontal
        data={data}
        renderItem={({ item }) => {
          return (
            <Card
              title={item.data.title}
              energycost={item.data.energycost}
              image={item.data.image}
              price={item.data.price}
              id={item.id}
              liked={item.liked}
              ticks={item.data.ticks}
            />
          );
        }}
        contentContainerStyle={{ paddingLeft: 15 }}
      />
    </SafeAreaView>
  );
};

export default List;

const styles = StyleSheet.create({});
