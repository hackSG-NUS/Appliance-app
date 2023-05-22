import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";

import { Stack, useRouter, Link } from "expo-router";

import { ScrollView } from "react-native-gesture-handler";
import Picker from "../components/Picker.js";

import { COLORS } from "../constants/";
import Liked from "./screens/Liked";
import Category from "./screens/Category";
import ChooseAppliance from "./screens/ChooseAppliance";
import Filter from "./screens/Filter";
import List from "./screens/List";
import Card from "./components/Card";

const Home = () => {
  const router = useRouter();

  return (
    <SafeAreaView>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerTitle: "Liked Appliances",
        }}
      />

      <View>
        <Liked />
      </View>
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
