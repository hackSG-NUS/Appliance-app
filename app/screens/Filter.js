import { React, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { Stack, Link, useSearchParams } from "expo-router";

import { COLORS } from "../../constants";
import RadioButton from "../../components/RadioButton";
import List from "./List";
import { useFonts, Lato_400Regular } from "@expo-google-fonts/lato";

const Filter = () => {
  const pastData = useSearchParams();
  const [data, setData] = useState("");
  const [isLiked, setIsLiked] = useState([
    { id: 2.1, value: "price", name: "Price", selected: false },
    { id: 2.2, value: "ticks", name: "Efficiency", selected: false },
    {
      id: 2.3,
      value: "energycost",
      name: "Long-Term Savings",
      selected: false,
    },
  ]);

  const onRadioBtnClick = (item) => {
    let updatedState = isLiked.map((isLikedItem) =>
      isLikedItem.id === item.id
        ? { ...isLikedItem, selected: true }
        : { ...isLikedItem, selected: false }
    );
    setIsLiked(updatedState);
    setData(item.value);
  };

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
          headerTitle: "Choose Preference",
        }}
      />
      <View style={styles.viewStyle}>
        <Text style={styles.questionText}>
          What is the most important factor when purchasing an Applicance?
        </Text>
        {isLiked.map((item) => (
          <RadioButton
            onPress={() => onRadioBtnClick(item)}
            selected={item.selected}
            key={item.id}
          >
            {item.name}
          </RadioButton>
        ))}
      </View>
      {data !== "" ? (
        <Link
          href={{
            pathname: "/screens/List",
            params: {
              appliance: pastData.appliance,
              filter: data,
            },
          }}
        >
          <View style={styles.select}>
            <Text
              style={{ fontSize: 20, fontFamily: "Lato_400Regular", margin: 8 }}
            >
              Choose Preference
            </Text>
          </View>
        </Link>
      ) : null}
    </SafeAreaView>
  );
};

export default Filter;

const styles = StyleSheet.create({
  viewStyle: {
    marginTop: 30,
    marginBottom: 10,
  },

  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
  },

  formLabel: {
    fontSize: 20,
    color: "#fff",
  },
  inputStyle: {
    marginTop: 20,
    width: 300,
    height: 40,
    paddingHorizontal: 10,
    borderRadius: 50,
    backgroundColor: "#b9e4c9",
  },

  formText: {
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    fontSize: 20,
  },

  text: {
    color: "#fff",
    fontSize: 20,
    borderBottomWidth: 10,
  },

  pickerItem: {
    color: "#fff",
    fontSize: 20,
  },

  radioButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 45,
  },
  radioButton: {
    height: 20,
    width: 20,
    backgroundColor: "#F8F8F8",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#E6E6E6",
    alignItems: "center",
    justifyContent: "center",
  },
  radioButtonIcon: {
    height: 14,
    width: 14,
    borderRadius: 7,
    backgroundColor: "#98CFB6",
  },
  radioButtonText: {
    fontSize: 16,
    marginLeft: 16,
  },
  questionText: {
    fontSize: 20,
    padding: 10,
    fontFamily: "Lato_400Regular",
  },
  select: {
    borderWidth: 3,
    borderRadius: 100,
  },
});
