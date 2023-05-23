import { React, useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { collection, query, where, getDocs, orderBy } from "firebase/firestore";
import { useFonts, Lato_400Regular } from "@expo-google-fonts/lato";
import { useSearchParams, useRouter, Stack, Link } from "expo-router";

import { db } from "../../firebase";
import Card from "../../components/Card";
import { COLORS } from "../../constants";

const List = () => {
  const router = useRouter();
  const { appliance, filter } = useSearchParams();
  const [data, setData] = useState([]);
  const getData = async () => {
    const q = query(
      collection(db, "appliances"),
      where("type", "==", appliance),
      orderBy(filter)
    );
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
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerTitle: "Appliances",
        }}
      />
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
      <Link href="../../">
        <View style={{ marginLeft: 10, alignItems: "center" }}>
          <Text style={styles.buttonText}>Go Back to Liked Appliances</Text>
        </View>
      </Link>
    </SafeAreaView>
  );
};

export default List;

const styles = StyleSheet.create({
  button: {
    borderRadius: 100,
    borderWidth: 4,
    marginVertical: 20,
    padding: 10,
    marginHorizontal: 30,
  },
  buttonText: {
    fontFamily: "Lato_400Regular",
    fontSize: 15,
  },
  container: {
    alignItems: "center",
  },
});
