import { React, useState, useEffect, createContext } from "react";
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

import { useRouter } from "expo-router";

import { db } from "../firebase";
import Card from "../components/Card";


export const UserContext = createContext(true);
export default Liked = () => {
  const router = useRouter();
  const handleSearchPress = () => { router.push('../screens/ChooseAppliance'); }
  const [data, setData] = useState([]);
  const getData = async () => {
    const q = query(collection(db, "appliances"), where("liked", "==", true));
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
      <TouchableOpacity 
        style={styles.button}
        onPress={handleSearchPress}
      >
        <Text style={styles.buttonText}>Search for more Appliances</Text>
      </TouchableOpacity>
      <FlatList
        horizontal
        data={data}
        renderItem={({ item }) => {
          return (
            <Card
              title={item.data.title}
              description={item.data.description}
              image={item.data.image}
              price={item.data.price}
              id={item.id}
            />
          );
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 100,
    borderWidth: 4,
    marginVertical: 20,
    padding: 10,
  },
  buttonText: {
    fontFamily: "Lato_400Regular",
    fontSize: 24,
  },
  container: {
    alignItems: "center",
  },
});

// {/* <FlatList
//         data={data}
//         renderItem={({ item }) => {
//           return (
//             <View>
//               <Card
//                 title={item.data.title}
//                 description={item.data.description}
//                 image={item.data.image}
//                 price={item.data.price}
//                 id={item.id}
//               />
//               <Text>{item.title}</Text>
//             </View>
//           );
//         }}
//       /> */}
