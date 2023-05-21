import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import { Stack, useRouter } from "expo-router";
import Liked from "../screens/Liked";
import Category from "../screens/Category";
import ChooseAppliance from "../screens/ChooseAppliance";
import Filter from "../screens/Filter";
import List from "../screens/List";
import Card from "../components/Card";
import Picker from "../components/Picker.js";

import { ScrollView } from "react-native";

const Home = () => {
  return (
    <ScrollView>
      
      <Liked />
      <Category />
      <ChooseAppliance />
      <Filter />
      <List />
      <Picker/>
      <Card
        title="Panasonic Fridge"
        image={require("../assets/images/fridge.jpg")}
        price="$4000"
        description="description"
      />
      
    </ScrollView>
  );
};

export default Home;
