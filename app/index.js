import { React, createContext } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import { Stack, useRouter } from "expo-router";
import { FlatList, ScrollView } from "react-native-gesture-handler";

import { COLORS } from "../constants/";

import CustForm from "./screens/CustForm";
import Liked from "./screens/Liked";
import Category from "./screens/Category";
import ChooseAppliance from "./screens/ChooseAppliance";
import Filter from "./screens/Filter";
import List from "./screens/List";
import Card from "../components/Card";
import Picker from "../components/Picker";

export const BookmarkContext = createContext(true);

const Home = () => {
  return (
    <SafeAreaView>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerTitle: "Welcome",
        }}
      />
      <ScrollView>

        <List />

        <CustForm/>
        <Liked />

      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

// {/* <Category />
//       <ChooseAppliance />
//       <Filter />
//       <List />
//       <Card
//         title="Panasonic Fridge"
//         image={require("../assets/images/fridge.jpg")}
//         price="$4000"
//         description="description"
//         id="hYYCPieoN9AFKbX7Wodf"
//         def={true}
//       /> */}
