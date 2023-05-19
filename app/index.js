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

const Home = () => {
  return (
    <View>
      <Liked />
      <Category />
      <ChooseAppliance />
      <Filter />
      <List />
    </View>
  );
};

export default Home;
