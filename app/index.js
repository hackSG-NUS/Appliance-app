import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import { Stack, useRouter } from "expo-router";
import { COLORS } from "../constants/";
import Liked from "../screens/Liked";
import Category from "../screens/Category";
import ChooseAppliance from "../screens/ChooseAppliance";
import Filter from "../screens/Filter";
import List from "../screens/List";
import Card from "../components/Card";
import { ScrollView } from "react-native-gesture-handler";

const Home = () => {
  
  const router = useRouter();

  return (
    <View>
      <Liked />
    </View>
    <SafeAreaView>

      <Stack.Screen 
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerTitle: "Welcome"
        }}
      />

      <ScrollView showsVerticalScrollIndicator= {false}>
        <View style= {{ flex: 1, padding: 50 }}>
          <Liked />
          <Category />
          <ChooseAppliance />
          <Filter />
          <List />
          <Card
            title="Panasonic Fridge"
            image={require("../assets/images/fridge.jpg")}
            price="$4000"
            description="description"
          />
        </View>
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
