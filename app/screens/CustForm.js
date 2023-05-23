import React, { useState } from "react";
import { Text, StyleSheet, View, TouchableOpacity, Button } from "react-native";
// import { Picker } from "@react-native-picker/picker";

import RadioButton from "../../components/RadioButton";

import t from "tcomb-form-native";
import Card from "../../components/Card";

const CustForm = () => {
  const [lookingFor, selectLookingFor] = useState([
    { id: 1.1, value: "cost", name: "Toaster", selected: false },
    { id: 1.2, value: "efficiency", name: "Iron", selected: false },
    { id: 1.3, value: "longTermSavings", name: "Fridge", selected: false},
    { id: 1.4, value: "branding", name: "Air-Con", selected: false },
  ]);

  const [isLiked, setIsLiked] = useState([
    { id: 2.1, value: "cost", name: "Cost", selected: false },
    { id: 2.2, value: "efficiency", name: "Efficiency", selected: false },
    { id: 2.3, value: "longTermSavings", name: "Long-Term Savings", selected: false},
    { id: 2.4, value: "branding", name: "Branding", selected: false },
  ]);

  const [sustainability, setSus] = useState([
    { id: 3.1, value: "vCon", name: "Very Conscious", selected: false },
    { id: 3.2, value: "slCon", name: "Slightly Conscious", selected: false },
    { id: 3.3, value: "slUncon", name: "Slightly Unconscious", selected: false},
    { id: 3.4, value: "unCon", name: "Unconscious", selected: false },
  ]);

  const onRadioBtnClick = (item) => {
    let updatedState = isLiked.map((isLikedItem) =>
      isLikedItem.id === item.id
        ? { ...isLikedItem, selected: true }
        : { ...isLikedItem, selected: false }
    );
    setIsLiked(updatedState);
  };

  const onLFClick = (item) => {
    let updatedState = lookingFor.map((isLikedItem) =>
      isLikedItem.id === item.id
        ? { ...isLikedItem, selected: true }
        : { ...isLikedItem, selected: false }
    );
    selectLookingFor(updatedState);
  };

  const onSusClick = (item) => {
    let updatedState = sustainability.map((isLikedItem) =>
      isLikedItem.id === item.id
        ? { ...isLikedItem, selected: true }
        : { ...isLikedItem, selected: false }
    );
    setSus(updatedState);
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 24, padding: 12 }}>Energy Savings Form</Text>

      <View style={styles.viewStyle}>
        <Text style={styles.questionText}>
          What Applicance are you looking for?
        </Text>
        {lookingFor.map((item) => (
          <RadioButton
            onPress={() => onLFClick(item)}
            selected={item.selected}
            key={item.id}
          >
            {item.name}
          </RadioButton>
        ))}
      </View>

      <View style={styles.viewStyle}>
        <Text style={{fontSize: 16}}>What is the most important factor when</Text>
        <Text style={{fontSize: 16, paddingBottom: 10}}>purchasing an Applicance?</Text>
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

      <View style={styles.viewStyle}>
        <Text style={styles.questionText}>
          How sustainability conscious are you?
        </Text>
        {sustainability.map((item) => (
          <RadioButton
            onPress={() => onSusClick(item)}
            selected={item.selected}
            key={item.id}
          >
            {item.name}
          </RadioButton>
        ))}
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderBottomWidth: 25, // whatever width you want of underline
    borderBottomColor: "#00000000",
    justifyContent: "center",
  },

  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 12
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
    fontSize: 16,
    padding: 10
  }
});

export default CustForm;
